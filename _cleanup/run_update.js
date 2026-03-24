const fs = require('fs');

// 1. Update capabilities.json
let cap = JSON.parse(fs.readFileSync('capabilities.json', 'utf8'));
delete cap.objects.table.properties.totalRowBold;
delete cap.objects.table.properties.totalRowUnderline;
delete cap.objects.table.properties.totalRowBackgroundColor;

cap.objects.totals.properties.fontFamily = { type: { formatting: { fontFamily: true } } };
cap.objects.totals.properties.fontSize = { type: { numeric: true } };
cap.objects.totals.properties.bold = { type: { bool: true } };
cap.objects.totals.properties.italic = { type: { bool: true } };
cap.objects.totals.properties.underline = { type: { bool: true } };
cap.objects.totals.properties.textColor = { type: { fill: { solid: { color: true } } } };
cap.objects.totals.properties.backgroundColor = { type: { fill: { solid: { color: true } } } };
cap.objects.totals.properties.textWrap = { type: { bool: true } };

fs.writeFileSync('capabilities.json', JSON.stringify(cap, null, 4));

// 2. Update settings.ts
let set = fs.readFileSync('src/settings.ts', 'utf8');
set = set.replace(/\n\s*public totalRowBold = new formattingSettings.ToggleSwitch\(\{[\s\S]*?\}\);\n/, '');
set = set.replace(/\n\s*public totalRowUnderline = new formattingSettings.ToggleSwitch\(\{[\s\S]*?\}\);\n/, '');
set = set.replace(/\n\s*public totalRowBackgroundColor = new formattingSettings.ColorPicker\(\{[\s\S]*?\}\);\n/, '');

// Remove them from slices in TableSettings
set = set.replace(/this\.totalRowBold, this\.totalRowUnderline, /g, '');
set = set.replace(/, this\.totalRowBackgroundColor/g, '');

const totalsSettingsReplacement = \
    public font = new formattingSettings.FontControl({
        name: "font",
        displayName: "Font",
        fontFamily: new formattingSettings.FontPicker({
            name: "fontFamily",
            displayName: "Font Family",
            value: "Arial, sans-serif"
        }),
        fontSize: new formattingSettings.NumUpDown({
            name: "fontSize",
            displayName: "Font Size",
            value: 12
        }),
        bold: new formattingSettings.ToggleSwitch({
            name: "bold",
            displayName: "Bold",
            value: true
        }),
        italic: new formattingSettings.ToggleSwitch({
            name: "italic",
            displayName: "Italic",
            value: false
        }),
        underline: new formattingSettings.ToggleSwitch({
            name: "underline",
            displayName: "Underline",
            value: false
        })
    });

    public textColor = new formattingSettings.ColorPicker({
        name: "textColor",
        displayName: "Text color",
        value: { value: "#333333" },
        visible: true
    });

    public backgroundColor = new formattingSettings.ColorPicker({
        name: "backgroundColor",
        displayName: "Background color",
        value: { value: "#d0d0d0" },
        visible: true,
        selector: dataViewWildcard.createDataViewWildcardSelector(dataViewWildcard.DataViewWildcardMatchingOption.InstancesAndTotals),
        instanceKind: powerbi.VisualEnumerationInstanceKinds.ConstantOrRule
    });

    public textWrap = new formattingSettings.ToggleSwitch({
        name: "textWrap",
        displayName: "Text wrap",
        value: false,
        visible: true
    });

    public slices: FormattingSettingsSlice[] = [this.showTotalRow, this.totalBehavior, this.font, this.textColor, this.backgroundColor, this.textWrap];
}\;

set = set.replace(/public slices: FormattingSettingsSlice\[\] = \[this\.showTotalRow, this\.totalBehavior\];\n\}/g, totalsSettingsReplacement);

fs.writeFileSync('src/settings.ts', set);

// 3. Update visual.ts
let vis = fs.readFileSync('src/visual.ts', 'utf8');

// Replace settings reads
vis = vis.replace(/const totalRowBold = tableSettings\.totalRowBold\.value;/, 'const totalRowBold = totalsSettings.font.bold?.value || false;');
vis = vis.replace(/const totalRowUnderline = tableSettings\.totalRowUnderline\.value;/, 'const totalRowUnderline = totalsSettings.font.underline?.value || false;');
vis = vis.replace(/const totalRowBackgroundColor = tableSettings\.totalRowBackgroundColor\.value\.value;/, 'const totalRowBackgroundColor = totalsSettings.backgroundColor.value.value;');

// Add reads for italic, text wrap, font size, font family, text color
vis = vis.replace(/const showTotalRow = totalsSettings\.showTotalRow\.value;/, 'const showTotalRow = totalsSettings.showTotalRow.value;\\n        const totalRowItalic = totalsSettings.font.italic?.value || false;\\n        const totalRowWordWrap = totalsSettings.textWrap.value;\\n        const totalRowFontSize = totalsSettings.font.fontSize.value;\\n        const totalRowFontFamily = totalsSettings.font.fontFamily.value;\\n        const totalRowTextColor = totalsSettings.textColor.value.value;');

// Replace getTotalRowColor object reference
vis = vis.replace(/{ objectName: "table", propertyName: "totalRowBackgroundColor" }/, '{ objectName: "totals", propertyName: "backgroundColor" }');

// Update total row creation for category cell
vis = vis.replace(/applyRowSquash\\(totalLabelCell, totalRowHeight, cellFontSize, categoryWordWrap\\);/g, 'applyRowSquash(totalLabelCell, totalRowHeight, totalRowFontSize, totalRowWordWrap);');
vis = vis.replace(/applyRowSquash\\(cell, totalRowHeight, cellFontSize, valueWordWrap\\);/g, 'applyRowSquash(cell, totalRowHeight, totalRowFontSize, totalRowWordWrap);');
vis = vis.replace(/applyRowSquash\\(totalCell, rowHeight, cellFontSize, valueWordWrap\\);/g, 'applyRowSquash(totalCell, rowHeight, totalRowFontSize, totalRowWordWrap);');

vis = vis.replace(/totalLabelCell\\.style\\.backgroundColor = totalBgColor; totalLabelCell\\.style\\.color = textColor;/g, 'totalLabelCell.style.backgroundColor = totalBgColor; totalLabelCell.style.color = totalRowTextColor;');
vis = vis.replace(/cell\\.style\\.backgroundColor = totalBgColor; cell\\.style\\.color = textColor;/g, 'cell.style.backgroundColor = totalBgColor; cell.style.color = totalRowTextColor;');
vis = vis.replace(/totalCell\\.style\\.backgroundColor = totalBgColor; totalCell\\.style\\.color = textColor;/g, 'totalCell.style.backgroundColor = totalBgColor; totalCell.style.color = totalRowTextColor;');

vis = vis.replace(/totalCell\\.style\\.fontFamily = cellFontFamily;/g, 'totalCell.style.fontFamily = totalRowFontFamily;');
vis = vis.replace(/totalCell\\.style\\.fontStyle = cellItalic \\? "italic" : "normal";/g, 'totalCell.style.fontStyle = totalRowItalic ? "italic" : "normal";');
// Update for the other cells that don't have font family explicitly set in old code:
vis = vis.replace(/totalLabelCell\\.style\\.textDecoration = totalRowUnderline \\? "underline" : "none";/g, 'totalLabelCell.style.textDecoration = totalRowUnderline ? "underline" : "none";\\n                totalLabelCell.style.fontFamily = totalRowFontFamily;\\n                totalLabelCell.style.fontStyle = totalRowItalic ? "italic" : "normal";');
vis = vis.replace(/cell\\.style\\.textDecoration = totalRowUnderline \\? "underline" : "none";/g, 'cell.style.textDecoration = totalRowUnderline ? "underline" : "none";\\n                cell.style.fontFamily = totalRowFontFamily;\\n                cell.style.fontStyle = totalRowItalic ? "italic" : "normal";');

fs.writeFileSync('src/visual.ts', vis);
console.log('Done!');
