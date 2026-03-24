const fs = require('fs');
let code = fs.readFileSync('B:/VS Code Files/Visuals/timTable/src/visual.ts', 'utf8');

code = code.replace(/textColor: specObj && specObj\.textColor && specObj\.textColor\.solid \? specObj\.textColor\.solid\.color : undefined/g, 'textColor: dataViewObjects.getFillColor(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "textColor" }, undefined)');

code = code.replace(/backgroundColor: specObj && specObj\.backgroundColor && specObj\.backgroundColor\.solid \? specObj\.backgroundColor\.solid\.color : undefined/g, 'backgroundColor: dataViewObjects.getFillColor(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "backgroundColor" }, undefined)');

code = code.replace(/alignment: specObj && specObj\.alignment \? String\(specObj\.alignment\) : undefined/g, 'alignment: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "alignment" }, undefined) as string | undefined');

code = code.replace(/applyToHeader: specObj && specObj\.applyToHeader !== undefined \? Boolean\(specObj\.applyToHeader\) : true/g, 'applyToHeader: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "applyToHeader" }, true)');

code = code.replace(/applyToValues: specObj && specObj\.applyToValues !== undefined \? Boolean\(specObj\.applyToValues\) : true/g, 'applyToValues: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "applyToValues" }, true)');

code = code.replace(/applyToTotal:  specObj && specObj\.applyToTotal  !== undefined \? Boolean\(specObj\.applyToTotal\)  : true/g, 'applyToTotal: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "applyToTotal" }, true)');

code = code.replace(/displayUnits:  specObj && specObj\.displayUnits  !== undefined \? Number\(specObj\.displayUnits\)   : 0/g, 'displayUnits: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "displayUnits" }, 0)');

code = code.replace(/decimalPlaces: specObj && specObj\.decimalPlaces !== undefined \? Number\(specObj\.decimalPlaces\)  : 1/g, 'decimalPlaces: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "decimalPlaces" }, 1)');

// The second error: TS2304: Cannot find name 'effectiveAlign'.
// Let's find out where this error occurs in visual.ts lines 730, 788, 793, 1158.
fs.writeFileSync('B:/VS Code Files/Visuals/timTable/src/visual.ts', code);
console.log('Fixed syntax of specificColumn extraction');
