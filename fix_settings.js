const fs = require('fs');
let settings = fs.readFileSync('B:\\VS Code Files\\Visuals\\timTable\\src\\settings.ts', 'utf8');

settings = settings.replace(/public cellFontSize =[\s\S]*?visible: true\s*\}\);/, '');
settings = settings.replace(/public valueBold =[\s\S]*?visible: true\s*\}\);/, '');
settings = settings.replace(/public valueWordWrap =[\s\S]*?visible: true\s*\}\);/, '');
settings = settings.replace(/public backgroundColor =[\s\S]*?instanceKind: powerbi\.VisualEnumerationInstanceKinds\.ConstantOrRule\s*\}\);/, '');
settings = settings.replace(/public alternateBackgroundColor =[\s\S]*?instanceKind: powerbi\.VisualEnumerationInstanceKinds\.ConstantOrRule\s*\}\);/, '');

settings = settings.replace('this.cellFontSize, this.valueBold,', '');
settings = settings.replace('this.valueWordWrap,', '');
settings = settings.replace('this.backgroundColor, this.alternateBackgroundColor,', '');

const valuesSettingsClass = `
export class ValuesSettings extends FormattingSettingsCard {
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
        value: { value: "#333333" },
        visible: true
    });

    public backgroundColor = new formattingSettings.ColorPicker({
        name: "backgroundColor",
        displayName: "Background color",
        value: { value: "#ffffff" },
        visible: true
    });

    public alternateTextColor = new formattingSettings.ColorPicker({
        name: "alternateTextColor",
        displayName: "Alternate text color",
        value: { value: "#333333" },
        visible: true
    });

    public alternateBackgroundColor = new formattingSettings.ColorPicker({
        name: "alternateBackgroundColor",
        displayName: "Alternate background color",
        value: { value: "#f5f5f5" },
        visible: true
    });

    public textWrap = new formattingSettings.ToggleSwitch({
        name: "textWrap",
        displayName: "Text wrap",
        value: false,
        visible: true
    });

    public name: string = "values";
    public displayName: string = "Values";
    public visible: boolean = true;
    public slices: FormattingSettingsSlice[] = [
        this.font, 
        this.textColor, 
        this.backgroundColor, 
        this.alternateTextColor, 
        this.alternateBackgroundColor, 
        this.textWrap
    ];
}
`;

settings = settings.replace('export class TableSettings extends FormattingSettingsCard{', valuesSettingsClass + '\nexport class TableSettings extends FormattingSettingsCard{');

settings = settings.replace('public table: TableSettings = new TableSettings();', 'public valuesMenu: ValuesSettings = new ValuesSettings();\n    public table: TableSettings = new TableSettings();');
settings = settings.replace('public cards: FormattingSettingsCard[] = [this.table,', 'public cards: FormattingSettingsCard[] = [this.valuesMenu, this.table,');

fs.writeFileSync('B:\\VS Code Files\\Visuals\\timTable\\src\\settings.ts', settings);
