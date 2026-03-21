const fs = require('fs');
let code = fs.readFileSync('B:/VS Code Files/Visuals/timTable/src/settings.ts', 'utf8');

// remove old variables
code = code.replace(/    public headerFontSize = new formattingSettings\.NumUpDown\(\{\s*name: "headerFontSize",\s*displayName: "Header Font Size",\s*value: 14,\s*visible: true\s*\}\);\s*/g, '');
code = code.replace(/    public headerBold = new formattingSettings\.ToggleSwitch\(\{\s*name: "headerBold",\s*displayName: "Header Bold",\s*value: true,\s*visible: true\s*\}\);\s*/g, '');
code = code.replace(/    public headerWordWrap = new formattingSettings\.ToggleSwitch\(\{\s*name: "headerWordWrap",\s*displayName: "Header Word Wrap",\s*value: false,\s*visible: true\s*\}\);\s*/g, '');
code = code.replace(/    public headerRowHeight = new formattingSettings\.NumUpDown\(\{\s*name: "headerRowHeight",\s*displayName: "Header Row Height",\s*value: 35,\s*visible: true\s*\}\);\s*/g, '');
code = code.replace(/    public headerBackgroundColor = new formattingSettings\.ColorPicker\(\{\s*name: "headerBackgroundColor",\s*displayName: "Header Background Color",\s*value: \{ value: "#e8e8e8" \},\s*visible: true\s*\}\);\s*/g, '');

// update TableSettings slices array
code = code.replace(
    /public slices: FormattingSettingsSlice\[\] = \[this\.switchValuesToRows, this\.headerFontSize, this\.headerBold,  this\.categoryWordWrap, this\.categoryColumnWidth,  this\.headerWordWrap, this\.columnWidth, this\.headerRowHeight, this\.valueRowHeight, this\.alternateValueRowHeight, this\.totalRowHeight,  this\.headerBackgroundColor\]/g,
    'public slices: FormattingSettingsSlice[] = [this.switchValuesToRows, this.categoryWordWrap, this.categoryColumnWidth, this.columnWidth, this.valueRowHeight, this.alternateValueRowHeight, this.totalRowHeight]'
);

// add ColumnHeadersSettings class
const newClass = `
export class ColumnHeadersSettings extends formattingSettings.CompositeCard {
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
            value: 11
        }),
        bold: new formattingSettings.ToggleSwitch({
            name: "bold",
            displayName: "Bold",
            value: false
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
        value: { value: "#1e3a8a" },
        visible: true
    });

    public backgroundColor = new formattingSettings.ColorPicker({
        name: "backgroundColor",
        displayName: "Background color",
        value: { value: "#ffffff" },
        visible: true
    });

    public alignment = new formattingSettings.AlignmentGroup({
        name: "alignment",
        displayName: "Header alignment",
        value: "left",
        mode: powerbi.visuals.AlignmentGroupMode.Horizonal,
        visible: true
    });

    public textWrap = new formattingSettings.ToggleSwitch({
        name: "textWrap",
        displayName: "Text wrap",
        value: true,
        visible: true
    });

    public textGroup = new formattingSettings.Group({
        displayName: "Text",
        name: "text",
        slices: [this.font, this.textColor, this.backgroundColor, this.alignment, this.textWrap]
    });

    public headerRowHeight = new formattingSettings.NumUpDown({
        name: "headerRowHeight",
        displayName: "Header row height",
        value: 35,
        visible: true
    });

    public optionsGroup = new formattingSettings.Group({
        displayName: "Options",
        name: "options",
        slices: [this.headerRowHeight]
    });

    public name: string = "columnHeaders";
    public displayName: string = "Column headers";
    public visible: boolean = true;
    public groups: formattingSettings.Group[] = [this.textGroup, this.optionsGroup];
}
`;

code = code.replace(/export class VisualSettings extends FormattingSettingsModel \{/g, newClass + '\nexport class VisualSettings extends FormattingSettingsModel {');

code = code.replace(
    /public table: TableSettings = new TableSettings\(\);/g,
    'public columnHeaders: ColumnHeadersSettings = new ColumnHeadersSettings();\n    public table: TableSettings = new TableSettings();'
);

code = code.replace(
    /public cards: FormattingSettingsCard\[\] = \[this\.valuesMenu, this\.table,/g,
    'public cards: FormattingSettingsCard[] = [this.columnHeaders, this.valuesMenu, this.table,'
);

fs.writeFileSync('B:/VS Code Files/Visuals/timTable/src/settings.ts', code);
console.log('Done settings.ts update');
