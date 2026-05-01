# TimTable Privacy Policy

_Last updated: 2026-05-01_

## Summary

The **TimTable** Power BI custom visual does not collect, store, transmit, or
share any personal data, telemetry, or analytics. All processing happens
entirely inside the Power BI host (Power BI Desktop, Power BI Service, or
embedded Power BI) on the user's own device or tenant.

## Data handling

- **No external network calls.** TimTable makes no HTTP, WebSocket, or other
  network requests. It does not load remote scripts, fonts, images, or
  third-party resources.
- **No telemetry.** TimTable does not emit usage, diagnostic, or crash
  telemetry.
- **No persistent storage outside Power BI.** TimTable persists only the
  formatting and column-width settings that the user configures, and only
  through the Power BI persistent properties API. It does not write to
  `localStorage`, `sessionStorage`, cookies, IndexedDB, or any other
  browser-side storage.
- **Data scope.** TimTable receives only the column and row data that the
  report author binds to it through the Power BI dataView. That data never
  leaves the Power BI host environment.

## Permissions

TimTable's `capabilities.json` declares an empty `privileges` array. It
requests no special permissions (no WebAccess, no ExportContent, no
LocalStorage).

## Third-party libraries

TimTable bundles the following open-source libraries, all loaded locally
from the visual package (no CDN, no remote fetch):

- `d3` (BSD-3-Clause)
- `powerbi-visuals-api`, `powerbi-visuals-utils-dataviewutils`,
  `powerbi-visuals-utils-formattingmodel`,
  `powerbi-visuals-utils-formattingutils` (MIT, Microsoft)

## Contact

For privacy questions or to report an issue, open a ticket at
<https://github.com/REPLACE_WITH_REAL_USER/timTable/issues>.

## Changes

Material changes to this policy will be noted in `CHANGELOG.md` and reflected
in the "Last updated" date at the top of this file.
