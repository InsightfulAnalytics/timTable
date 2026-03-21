import json
import re

with open('capabilities.json', 'r', encoding='utf8') as f:
    cap = json.load(f)

table_props = cap['objects']['table']['properties']
table_props.pop('totalRowBold', None)
table_props.pop('totalRowUnderline', None)
table_props.pop('totalRowBackgroundColor', None)

tot_props = cap['objects']['totals']['properties']
tot_props['fontFamily'] = {'type': {'formatting': {'fontFamily': True}}}
tot_props['fontSize'] = {'type': {'numeric': True}}
tot_props['bold'] = {'type': {'bool': True}}
tot_props['italic'] = {'type': {'bool': True}}
tot_props['underline'] = {'type': {'bool': True}}
tot_props['textColor'] = {'type': {'fill': {'solid': {'color': True}}}}
tot_props['backgroundColor'] = {'type': {'fill': {'solid': {'color': True}}}}
tot_props['textWrap'] = {'type': {'bool': True}}

with open('capabilities.json', 'w', encoding='utf8') as f:
    json.dump(cap, f, indent=4)

with open('src/settings.ts', 'r', encoding='utf8') as f:
    set_ts = f.read()

set_ts = re.sub(r'\s*public totalRowBold = new formattingSettings.ToggleSwitch\(\{[\s\S]*?\}\);', '', set_ts)
set_ts = re.sub(r'\s*public totalRowUnderline = new formattingSettings.ToggleSwitch\(\{[\s\S]*?\}\);', '', set_ts)
set_ts = re.sub(r'\s*public totalRowBackgroundColor = new formattingSettings.ColorPicker\(\{[\s\S]*?\}\);', '', set_ts)
set_ts = set_ts.replace('this.totalRowBold, this.totalRowUnderline, ', '')
set_ts = set_ts.replace(', this.totalRowBackgroundColor', '')

totals_replacement = '''
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
}'''

set_ts = re.sub(r'public slices: FormattingSettingsSlice\[\] = \[this\.showTotalRow, this\.totalBehavior\];\s*\}', totals_replacement.strip(), set_ts)

with open('src/settings.ts', 'w', encoding='utf8') as f:
    f.write(set_ts)

with open('src/visual.ts', 'r', encoding='utf8') as f:
    vis = f.read()

vis = vis.replace('const totalRowBold = tableSettings.totalRowBold.value;', 'const totalRowBold = totalsSettings.font.bold?.value || false;')
vis = vis.replace('const totalRowUnderline = tableSettings.totalRowUnderline.value;', 'const totalRowUnderline = totalsSettings.font.underline?.value || false;')
vis = vis.replace('const totalRowBackgroundColor = tableSettings.totalRowBackgroundColor.value.value;', 'const totalRowBackgroundColor = totalsSettings.backgroundColor.value.value;')

vis = vis.replace('const showTotalRow = totalsSettings.showTotalRow.value;', 
'''const showTotalRow = totalsSettings.showTotalRow.value;
        const totalRowItalic = totalsSettings.font.italic?.value || false;
        const totalRowWordWrap = totalsSettings.textWrap.value;
        const totalRowFontSize = totalsSettings.font.fontSize.value;
        const totalRowFontFamily = totalsSettings.font.fontFamily.value;
        const totalRowTextColor = totalsSettings.textColor.value.value;''')

vis = vis.replace('{ objectName: "table", propertyName: "totalRowBackgroundColor" }', '{ objectName: "totals", propertyName: "backgroundColor" }')

vis = re.sub(r'applyRowSquash\((totalLabelCell|cell|totalCell),\s*([^,]+),\s*cellFontSize,\s*[^)]+\)', 
             r'applyRowSquash(\1, \2, totalRowFontSize, totalRowWordWrap)', vis)

vis = vis.replace('totalLabelCell.style.backgroundColor = totalBgColor; totalLabelCell.style.color = textColor;', 
                  'totalLabelCell.style.backgroundColor = totalBgColor; totalLabelCell.style.color = totalRowTextColor;')
vis = vis.replace('cell.style.backgroundColor = totalBgColor; cell.style.color = textColor;', 
                  'cell.style.backgroundColor = totalBgColor; cell.style.color = totalRowTextColor;')
vis = vis.replace('totalCell.style.backgroundColor = totalBgColor; totalCell.style.color = textColor;', 
                  'totalCell.style.backgroundColor = totalBgColor; totalCell.style.color = totalRowTextColor;')

vis = vis.replace('totalCell.style.fontFamily = cellFontFamily;', 'totalCell.style.fontFamily = totalRowFontFamily;')
vis = vis.replace('totalCell.style.fontStyle = cellItalic ? "italic" : "normal";', 'totalCell.style.fontStyle = totalRowItalic ? "italic" : "normal";')

vis = vis.replace('totalLabelCell.style.textDecoration = totalRowUnderline ? "underline" : "none";', 
                  'totalLabelCell.style.textDecoration = totalRowUnderline ? "underline" : "none";\\n                totalLabelCell.style.fontFamily = totalRowFontFamily;\\n                totalLabelCell.style.fontStyle = totalRowItalic ? "italic" : "normal";')
vis = vis.replace('cell.style.textDecoration = totalRowUnderline ? "underline" : "none";', 
                  'cell.style.textDecoration = totalRowUnderline ? "underline" : "none";\\n                cell.style.fontFamily = totalRowFontFamily;\\n                cell.style.fontStyle = totalRowItalic ? "italic" : "normal";')

with open('src/visual.ts', 'w', encoding='utf8') as f:
    f.write(vis)

print("Done via python")
