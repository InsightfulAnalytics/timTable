# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Start dev server (pbiviz start) — opens localhost with live reload
npm run package    # Build .pbiviz file for AppSource / report import
npm run lint       # Run ESLint (eslint.config.mjs, @typescript-eslint rules)
```

There are no unit tests. Validation is done by loading the visual in Power BI Desktop or the dev server.

## Architecture

This is a **Power BI custom visual** — a single-page TypeScript component rendered inside a sandboxed iframe by the Power BI host. The entire codebase is two source files.

### src/settings.ts — Formatting model

Defines all user-configurable formatting options as typed classes using `powerbi-visuals-utils-formattingmodel`. Each class extends either `FormattingSettingsCard` (flat slice list) or `formattingSettings.CompositeCard` (grouped slices). The root `VisualSettings` extends `FormattingSettingsModel` and collects all cards into `cards[]`.

Key settings cards:
- `ValuesSettings` — font, colors, row alternation, switch-to-rows mode
- `SpecificColumnSettings` — per-column overrides for header, values, and totals (series selected via dropdown)
- `GridSettings` — gridlines + per-section borders (All / Column headers / Row headers / Values)
- `DataBarsFormattingSettings` — data bar rendering per series
- `TotalsSettings` / `ColumnTotalsSettings` — row and column grand totals
- `SortBySettings` — sort field, direction, button appearance
- Conditional formatting cards (`CategoryConditionalFormattingSettings`, `ValueConditionalFormattingSettings`, `ValueBackgroundConditionalFormattingSettings`, `DataBarsConditionalFormattingSettings`) — these are empty cards; colors come from Power BI's native conditional formatting rules applied via `dataViewWildcard` selectors

### src/visual.ts — Visual class

Implements `IVisual`. The Power BI host calls `update()` on every data change or settings change.

**Rendering flow:**
1. `update()` → `updateInternal()`: populates `VisualSettings` from the dataView, extracts all formatting values into locals, then completely rebuilds the DOM table from scratch on every call.
2. The dataView uses a **matrix mapping** (`capabilities.json → dataViewMappings[0].matrix`): Rows field = row headers, Columns field = column groupings, Values field = measures.
3. Column headers are built from the matrix column hierarchy. Row headers are built from the matrix row hierarchy (supports multi-level nesting / subtotals).
4. After DOM build: `attachResizeHandles()`, `applyManualWidths()`, `refreshStickyLeft()`, `applyAccessibilityAttributes()` are called in sequence.

**Persistence pattern:** User interactions that must survive a report save use `host.persistProperties()` to write back into the dataView's `metadata.objects`. This is used for:
- `manualColumnWidths` (column resize drag) — serialized as JSON under `columnWidth.manualWidthsJson`
- Sort state — written to `sortBy.sortByField` / `sortBy.direction`

**Selection / cross-filtering:** Uses `ISelectionManager`. Row selections use `rowSelectionIds[]`, column selections use `colSelectionIds[]`, cell-level selections use `cellSelectionMap`. `syncSelectionOpacity()` dims non-selected rows/columns after selection changes.

**Conditional formatting:** CF colors are read directly from `dataView.matrix` node `objects` (not from `VisualSettings`), using `dataViewObjects.getFillColor()` from `powerbi-visuals-utils-dataviewutils`.

### capabilities.json

Declares the three data roles (`category` / `columns` / `measure`) and all formatting object schemas. **Both** `settings.ts` and `capabilities.json` must be kept in sync: every property used in the settings model must have a matching entry in `capabilities.json → objects`.

### style/visual.less

Single LESS file compiled by webpack. Uses LESS nesting (not Sass). Contains accessibility styles for keyboard focus and Windows High Contrast (`forced-colors`) mode. The `.pbi-table` uses `table-layout: fixed` — column widths are set imperatively via inline styles, not CSS classes.
