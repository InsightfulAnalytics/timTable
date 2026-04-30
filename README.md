# timTable

A custom Power BI visual that brings a **familiar matrix experience** with a long list of formatting and layout features that the standard Power BI matrix doesn't offer out of the box.

> **Status:** Public beta — actively looking for testers and bug reports before submission to Microsoft AppSource.

---

## Why timTable?

If you've used the built-in Power BI matrix, you already know how to use timTable. The data buckets, the totals, the conditional formatting menus and the way you drag fields into the visual all behave the same way. You can drop it into a report and start using it without re-learning anything.

Where timTable is different is in the depth of formatting control. Almost every aspect of how rows, columns, totals, headers and grid lines look can be tuned independently — without writing extra DAX or wrapping your visual in cards, shapes or background images to fake the look you want.

---

## Feature highlights

### Familiar to matrix users
- **Category**, **Columns** and **Measure** field wells, just like the standard matrix.
- Drilldown supported on both `Category` and `Columns` roles.
- Row totals and column totals.
- Subtotals for higher-level groupings.
- Standard Power BI conditional formatting model (rules, gradient, field value).

### Layout features the matrix doesn't have
- **Switch values to rows** — transpose the value layout so measures run down the rows instead of across the columns.
- **Hide row headers** (when transposed) — for a cleaner, headerless look.
- **Reverse order** — flip the row order without re-modelling your data.
- **Independent row heights** for value rows, alternate rows and total rows.
- **Specific column** overrides — apply unique formatting (width, alignment, colours) to a single named column without affecting the rest.

### Formatting control
- **Alternate row banding** with separate text and background colours.
- **Word wrap** controlled separately for headers, values, totals and category column.
- **Per-section grid borders** — configure top, bottom, left, right, colour, width and transparency independently for:
  - All cells
  - Column headers
  - Row headers
  - Values
- **Independent fonts** (family, size, bold, italic, underline) for column headers, values, row totals and column totals.
- Independent background and text colours for headers, values, alternate rows and totals.

### Conditional formatting
- **Value conditional formatting** — colour the measure text by rule, gradient or field value.
- **Background conditional formatting** — colour the cell background.
- **Data bars** — render in-cell horizontal bars on numeric values.
- **Category conditional formatting** — colour category labels, with an `Apply to` option for **values only**, **values and totals**, or **totals only**.

### Totals
- **Row Totals** card — show/hide, custom font, wrap, colour and height.
- **Column Totals** card — same level of control as row totals.
- **Subtotals** card — for hierarchical category groupings.

---

## Getting started

1. Download the latest `.pbiviz` from the [Releases](https://github.com/) page.
2. In Power BI Desktop: **Insert → More visuals → From my files** and select the file.
3. Drag fields into **Category**, **Columns** and **Measure** exactly as you would with a matrix.
4. Open the **Format visual** pane to explore the timTable-specific cards.

---

## Help wanted — testers and bug reports

I'm posting on LinkedIn looking for people willing to put timTable through its paces before I submit it to Microsoft for inclusion in AppSource.

If you'd like to help, I'm especially interested in:

- Real-world report scenarios (especially financial / management reporting layouts).
- Edge cases around **drilldown**, **subtotals** and the **switch values to rows** layout.
- Conditional formatting interactions — combining text, background and data bars on the same measure.
- Performance with large categories or many measures.
- Theme compatibility and accessibility (high contrast, screen readers).
- Any difference in behaviour vs. the standard matrix that feels surprising.

### How to report a bug
Please open a GitHub issue with:

- A short description of what you expected vs. what happened.
- Steps to reproduce.
- A screenshot or short screen recording where possible.
- Power BI Desktop version and timTable version.
- A minimal `.pbix` if the issue depends on specific data.

---

## Roadmap

- AppSource certification and submission.
- Additional conditional formatting modes.
- Sparkline / inline chart support inside cells.

---

## License

See [LICENSE](LICENSE).
