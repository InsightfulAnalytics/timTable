# Nexus Table — Pre-ship Testing Report

**Date:** 7 July 2026
**Build tested:** nexusTable 1.0.0.3 (GUID `nexusTableC923C22635F640B8BDD36DC675C74832`), built with pbiviz 7.0.1, embedded live into `Nexus Table.pbip` and verified in Power BI Desktop.
**Method:** full rename → rebuild → re-embed → open in Desktop → screenshot/DAX verification of every page → targeted edge-case visuals on a new **Edge Tests** page → 6-agent static code review (36 findings, adversarially verified where the session limit allowed).

## Verdict

**Not ready to submit yet.** Rendering, totals math, sorting, data bars, conditional formatting and values-to-rows all verified correct in the common single-column-field configurations — but there are **3 confirmed ship-blocker bugs** (one silently corrupts displayed data) plus a certification checklist that would currently fail AppSource review.

---

## 1. Rename to Nexus Table — DONE ✔

| Item | Old | New |
|---|---|---|
| displayName | TimTable | **Nexus Table** |
| name | timTable | nexusTable |
| GUID | timTableDD1AB…F55 | **nexusTableC923C22635F640B8BDD36DC675C74832** |
| version | 1.0.0.2 | 1.0.0.3 |
| author | Developer / dev@example.com | Tim Osborn / timosborn6@gmail.com |
| supportUrl / gitHubUrl | https://github.com (placeholder — cert fail) | github.com/InsightfulAnalytics/timTable (+/issues) |

Cascaded into: `pbiviz.json`, `package.json`, landing-page title in `visual.ts`, report `CustomVisuals/` payload (rebuilt from the new package), `report.json` resourcePackages, and all 9 `visualType` references. `pbir validate` passes; report opens and renders in Desktop. A GUID change was only possible **before** first AppSource submission — after publishing it is frozen forever, which is why it was done now.

Still carrying the old name (harmless, cosmetic): repo folder `timTable`, GitHub repo name, old `dist/` + `.tmp/` artifacts under the old GUID.

---

## 2. Confirmed ship-blockers (verified live in Desktop **and** in code)

### 2.1 HIGH — Values shift one column with a 2-level Columns hierarchy (silent wrong data)
With two fields in **Columns** (e.g. Year → On-Time flag) and default settings, every value column after the first group boundary displays the **wrong intersection** — the hidden inner subtotal slot shifts all subsequent columns by one.

Live proof (Edge Tests page, `test-evidence/edge-tests.png`, bottom-right):
- Visual shows Facilities "2023 No" = **2,369,378** — but DAX says Facilities 2023-No = **710,414**; 2,369,378 is actually the **2022 subtotal** (659,577 + 1,709,801).
- Every row and the grand-total row shows the same one-slot shift; the last real column's data is never displayed.

Root cause (`src/visual.ts:2896`, also 2933, 3142, and the sort path at 1432): display columns are keyed `colIdx * M + mIdx` over `columnLeaves` (subtotal leaves excluded), but the matrix `rawValues` dictionary is keyed in tree order **including** interleaved subtotal leaves (the code documents this itself at 1631–1632 / 1685–1691). Single-level Columns are unaffected (subtotal is trailing), which is why the Testing/Sort Order pages look fine. Fix: key values by the tree index tracked in `allColumnLeafIndex` instead of the leaf's position in `columnLeaves`.

### 2.2 HIGH — Per-measure "Show Total Row = Off" is overridden on every update
This is your "can't repro" bug from the testing notes — **now reproduced deterministically**. Persisting `showTotalRow=false` for one measure (PO Count) is ignored in every layout: original order, reordered, and values-to-rows (see all three bottom/top total rows still showing 5,200 in `test-evidence/edge-tests.png`).

Root cause (`src/visual.ts:2189–2204` row totals, `2353–2367` column totals): while the totals **series dropdown** is on "All" (its default), the persisted `showTotalRowAll`/`showTotalColumnAll` value is force-merged onto **every measure whose per-measure value differs**, clobbering individual toggles on every update. A newly added measure always mismatches — hence "totals randomly turn on when bringing in other measures or rearranging". Fix: only push the All value down when the user actually changes the All toggle, not on every settings rebuild.

### 2.3 HIGH — Text measures render "NaN" in every cell; date measures render their format string
Live proof (Edge Tests, top-left visual): `TEST Text` (returns "On track") renders **"NaN"** in every cell including the total; `TEST Date` (MAX of a date) renders the literal format string **"dd/MM/…"**.

Root cause (`src/visual.ts:4000` normal layout, `5740` transposed): every cell is unconditionally coerced with `Number(value)` before formatting. Any DAX measure returning text or dates — completely legitimate in Values — is destroyed. Fix: type-check the value (string → render as-is; Date → date-format with the measure's format string) before numeric coercion.

---

## 3. Other confirmed issues (code-confirmed, lower severity)

1. **Locale ignored everywhere** (`visual.ts:1192` + 7 other `valueFormatter.create` sites): `cultureSelector: this.host.locale` is never passed, so a de-DE / fr-FR viewer sees en-US number & date formats while native visuals localize. Certification-relevant.
2. **Row/Column Totals colour pickers are dead** (`visual.ts:983`): `updateInternal` rebuilds the totals formatting groups with only [font, textWrap], dropping the declared textColor/backgroundColor slices — the total row is locked at grey/#333 and users can't change it.
3. **Per-level subtotal controls unreachable** (`capabilities.json:863` / `settings.ts:1008`): implemented only in `enumerateObjectInstances`, which API 5.x hosts never call once `getFormattingModel` exists. All-or-nothing subtotals only.
4. **Specific-column Display units / Decimal places slices do nothing** (`settings.ts:908`): no matching capabilities properties; visual hard-codes displayUnits 0 / decimalPlaces null.
5. **Numeric column in Rows renders as text** (left-aligned, no numeric sort) — your notes item 3, confirmed live with PO Year in Rows (`visual.ts:3806`).
6. **NaN/Infinity/BLANK numeric values all render "-"** (single dash). Your notes asked for `--`; also NaN, Infinity and genuine blank are indistinguishable. (Numeric NaN/Infinity arrive as null through the sandbox, so the old literal-"NaN" cell bug only manifests via text measures — see 2.3.)
7. **Non-additive measures get client-side Sum totals by default**: the visual computes totals itself (that's the Totals feature), so a DISTINCTCOUNT measure's default total is the sum of visible rows, not the model's total. Correct in this dataset (5,200 = true count) but will overstate whenever an entity spans categories. Consider a "Model total (Measure)" default.

## 4. High-confidence static findings — verification was cut short by the session rate limit

The review fan-out completed; adversarial verification finished for the items above, then hit the session cap. These are single-pass findings I consider credible (file:line checked by the finder) but not double-verified:

**Interaction/state**
- Cross-highlight from other visuals is immediately erased by `syncSelectionOpacity` (`visual.ts:7160`) — highlight dimming never visible despite `supportsHighlight: true`.
- Sort state persisted by **positional index** `m:{idx}` (`visual.ts:2466/3610`) — reordering/removing measures silently re-targets the sort; with Columns present, header index space ≠ dropdown index space.
- Manual column widths keyed by **column index** (`visual.ts:3192`) — adding/removing fields shifts widths onto the wrong columns (count-change invalidation exists, but same-count changes and reverseOrder slip through).
- Total-column sort button is a no-op without a Columns field (`visual.ts:1422`).
- Values-to-rows: selecting a category column header dims the whole table (`visual.ts:5538`); per-level subtotal visibility ignored in transposed layout (`visual.ts:5308`).
- No `registerOnSelectCallback` — bookmark restore doesn't re-apply selection dimming (`visual.ts:144`).
- Series dropdowns resolve by displayName, first-match-wins — duplicate measure names format the wrong column (`visual.ts:2584`).
- Measures-only (no Rows/Columns) renders headers with no values (`visual.ts:1814`).

**Performance** (explains "slow when resizing larger files")
- `update()` never checks `options.type` — a resize drag triggers a **full DOM teardown & rebuild per tick** (`visual.ts:778/1301`).
- Column-resize drag does O(rows×cols) scans + forced reflow per row per mousemove (`visual.ts:651/328/505`).
- `valueFormatter.create()` per **cell** instead of per column (`visual.ts:1192`); ~30 settings lookups per cell (`3878`); 5 event listeners + selection-id builder per cell (`4293`).
- No `dataReductionAlgorithm` in the matrix mapping and no `fetchMoreData` (`capabilities.json:1109`) — silent 1,000-node truncation per level, no paging.
- `Math.min(...spread)` over full row arrays can throw RangeError at ~100k+ rows (`visual.ts:2965`).
- Custom subtotal behaviours rescan every row per subtotal cell — O(n²) (`visual.ts:3974`).

## 5. AppSource certification checklist (from the cert-compliance review)

| Status | Item |
|---|---|
| ❌ | `npm audit` returns 4 high + 3 moderate vulns (transitive dev deps) — explicit rejection criterion. Run `npm audit fix` / update eslint & webpack-cli. |
| ❌ | Repo commits `.tmp/`, `dist/`, `webpack.statistics.*.html`; cert requires these gitignored and absent. |
| ❌ | No lowercase `certification` branch matching the submitted package. |
| ⚠️ | apiVersion 5.3.0 vs latest 5.11.0 — "use the latest API" requirement; upgrade recommended. |
| ⚠️ | pbiviz tools 7.0.1 vs 7.1.0 latest. |
| ⚠️ | Lint script name: cert doc expects `"eslint": "npx eslint . --ext .js,.jsx,.ts,.tsx"`. |
| ⚠️ | Icon is the default pbiviz wrench (20×20). Replace with Nexus Table branding; Partner Center listing also needs its own store icon. |
| ⚠️ | en-US-only formatting (see 3.1). |
| ✔ | `privileges: []`, no network calls/eval found, real author + support URLs (fixed in this pass), 4-part version. |

## 6. Your testing-notes items — status

| Note | Status |
|---|---|
| NaN should show `--` | Numeric NaN/Inf/blank now show `-` (single dash, not `--` — confirm intent). Text/date measures still broken → blocker 2.3. |
| Slow resize on larger files | Root-caused: full rebuild per resize tick + resize-drag reflow storm (§4 performance). |
| Values-to-rows total toggle incorrect / totals randomly turn on | **Reproduced & root-caused** → blocker 2.2. |
| Number in Rows behaves like text | Confirmed, unchanged (§3.5). |
| Default style "Classic Table" | Not implemented — feature request, not tested. |

## 7. What passed ✔

- All 5 report pages render correctly under the new identity (rename cascade verified end-to-end).
- Row subtotals, grand totals, column-group totals: hand-checked against DAX/arithmetic on Page 1, Sort Order, Totals pages — all correct (single-level Columns).
- Per-measure total behaviours **Sum / Max / None / Average** all compute correctly (Totals page, verified numerically).
- Sort by measure (flat + grouped-with-subtotals) descending verified; groups ordered by subtotal.
- Data bars: horizontal, vertical, values-to-rows variants render; CF colours (font/background/data-bar) apply, including "apply to totals".
- Values-to-rows layout transposes correctly with correct numbers (verified against DAX).
- Numeric blank/NaN/Infinity → "-" (no literal NaN for numeric measures).
- Build: `npm run package` clean (lint passes); `pbir validate` clean.

## 8. Test assets left in place (for your repro/inspection)

- **Edge Tests** page in `Nexus Table.pbip` — 6 test visuals demonstrating blockers 2.1–2.3 live.
- 5 hidden test measures in `__Measures` (`99 Hidden\Test` folder): TEST NaN / Infinity / Blank / Text / Date.
- `test-evidence/edge-tests.png` (annotated by the visuals' titles), `test-evidence/totals-page.png`.
- Full static-review detail (36 findings with traces): workflow journal at `C:\Users\timos\.claude\projects\b--VS-Code-Files-Visuals-timTable\aa9dc603-d614-4485-a22c-f71827cd790b\subagents\workflows\wf_b6aa8667-943\journal.jsonl`.

Delete the Edge Tests page + TEST measures whenever you're done with them.

## 9. Recommended order of attack

1. Fix 2.1 (column shift) — data correctness, highest risk.
2. Fix 2.2 (totals force-resync) and 2.3 (text/date coercion).
3. Add `cultureSelector: this.host.locale` to all 8 formatter sites; restore totals colour slices.
4. Resize/update-type gating (`options.type`) + per-column formatter caching — biggest perf wins.
5. Cert checklist §5 (audit, gitignore, certification branch, API bump, icon).
6. Re-run this test suite (Edge Tests page reproduces everything), then manual interactive pass: resize drag, header-click sort persistence across field reorder, cross-highlight from another visual, bookmarks, keyboard/high-contrast.
7. Then build the showcase pages.

## 10. Not testable headlessly (manual checklist for you)

Drag column resize + persistence after save/reopen · header-click sort toggling · cross-filter selections (row/column/cell, ctrl-multi) · cross-highlight FROM another visual · bookmark save/restore · tooltips · keyboard navigation & high-contrast mode · mobile layout · Publish-to-Service render (embedded-visual reports render the dev build; the Service is the real test for the packaged .pbiviz).
