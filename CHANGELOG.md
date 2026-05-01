# Changelog

All notable changes to TimTable are recorded here. Format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project
adheres to [Semantic Versioning](https://semver.org/).

## [1.0.0.0] - 2026-05-01

### Added
- Initial public release of TimTable.
- Categorical rows + measure columns with automatic totals row.
- Comprehensive formatting model: row height, column width, column headers,
  values, alternates, grid/borders, totals, column totals, sub-totals.
- Conditional formatting for category text, value text, value background,
  data bars (with markers, axis, zero line, totals support), per-column
  overrides via `specificColumn`.
- Tooltip support via `ITooltipService`.
- Drill-down on category and column data roles.
- Row, column, and cell selection with cross-filter support via
  `ISelectionManager`.
- Full keyboard navigation (arrow keys, Home/End, PageUp/PageDown,
  Enter/Space) with roving `tabindex`.
- ARIA `grid`, `row`, `columnheader`, `rowheader`, and `gridcell` roles
  with row/column index attributes for screen-reader compatibility.
- Windows High Contrast / `forced-colors` mode support.
- Visible keyboard focus indicators (WCAG 2.4.7).
- Rendering events API (`renderingStarted` / `renderingFinished` /
  `renderingFailed`) to support Power BI export-to-PDF, PowerPoint, and
  high-contrast rendering pipelines.
- Localization scaffolding (`en-US/resources.resjson`).
- Empty `privileges` array — no special permissions requested.
- No external network calls; no telemetry; no third-party CDN loads.
