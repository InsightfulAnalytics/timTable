
const fs = require("fs");
let c = fs.readFileSync("src/settings.ts", "utf8");

// Remove the second instance of TotalsSettings
let idx1 = c.indexOf("export class TotalsSettings");
let idx2 = c.indexOf("export class TotalsSettings", idx1 + 1);

if (idx2 > -1) {
    let nextExport = c.indexOf("export class", idx2 + 1);
    c = c.substring(0, idx2) + c.substring(nextExport);
}

// Remove the first instance of public totals if duplicated
let idx_prop1 = c.indexOf("public totals: TotalsSettings = new TotalsSettings();");
let idx_prop2 = c.indexOf("public totals: TotalsSettings = new TotalsSettings();", idx_prop1 + 1);
if (idx_prop2 > -1) {
    c = c.substring(0, idx_prop2) + c.substring(idx_prop2 + "public totals: TotalsSettings = new TotalsSettings();".length);
}

fs.writeFileSync("src/settings.ts", c);
console.log("Fixed settings");

