const fs = require('fs');
const path = 'B:/VS Code Files/Visuals/timTable/capabilities.json';
let data = JSON.parse(fs.readFileSync(path, 'utf8'));
data.objects.totals = { properties: {} };
if (data.objects.totalsFormatting && data.objects.totalsFormatting.properties) {
    Object.assign(data.objects.totals.properties, data.objects.totalsFormatting.properties);
    delete data.objects.totalsFormatting;
}
if (data.objects.categoryTotals && data.objects.categoryTotals.properties) {
    Object.assign(data.objects.totals.properties, data.objects.categoryTotals.properties);
    delete data.objects.categoryTotals;
}
fs.writeFileSync(path, JSON.stringify(data, null, 4), 'utf8');
