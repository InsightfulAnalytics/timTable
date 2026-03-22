const fs = require('fs');
let code = fs.readFileSync('B:/VS Code Files/Visuals/timTable/src/settings.ts', 'utf8');

const newClass = `
export class SpecificColumnSettings extends formattingSettings.CompositeCard {
    public series = new formattingSettings.ItemDropdown({
        name: "series",
        displayName: "Series",
        value: { value: "Revenue Total", displayName: "Revenue Total" },
        items: [{ value: "Revenue Total", displayName: "Revenue Total" }],
        visible: true
    });
    public applyToHeader = new formattingSettings.ToggleSwitch({
        name: "applyToHeader",
        displayName: "Apply to header",
        value: true,
        visible: true
    });
    public applyToTotal = new formattingSettings.ToggleSwitch({
        name: "applyToTotal",
        displayName: "Apply to total",
        value: true,
        visible: true
    });
    public applyToValues = new formattingSettings.ToggleSwitch({
        name: "applyToValues",
        displayName: "Apply to values",
        value: true,
        visible: true
    });

    public applySettingsGroup = new formattingSettings.Group({
        displayName: "Apply settings to",
        name: "applySettingsTo",
        slices: [this.series, this.applyToHeader, this.applyToTotal, this.applyToValues]
    });

    public textColor = new formattingSettings.ColorPicker({
        name: "textColor",
        displayName: "Text color",
        value: { value: "#00b8d4" },
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
        displayName: "Alignment",
        value: "left",
        mode: powerbi.visuals.AlignmentGroupMode.Horizonal,
        visible: true
    });
    public displayUnits = new formattingSettings.AutoDropdown({
        name: "displayUnits",
        displayName: "Display units",
        value: 0,
        visible: true
    });
    public decimalPlaces = new formattingSettings.NumUpDown({
        name: "decimalPlaces",
        displayName: "Value decimal places",
        value: 1,
        visible: true
    });

    public valuesGroup = new formattingSettings.Group({
        displayName: "Values",
        name: "values",
        slices: [this.textColor, this.backgroundColor, this.alignment, this.displayUnits, this.decimalPlaces]
    });

    public name: string = "specificColumn";
    public displayName: string = "Specific column";
    public visible: boolean = true;
    public groups: formattingSettings.Group[] = [this.applySettingsGroup, this.valuesGroup];
}
`;

code = code.replace(/export class VisualSettings extends FormattingSettingsModel \{/g, newClass + '\nexport class VisualSettings extends FormattingSettingsModel {');

code = code.replace(
    /public columnHeaders: ColumnHeadersSettings = new ColumnHeadersSettings\(\);/g,
    'public specificColumn: SpecificColumnSettings = new SpecificColumnSettings();\n    public columnHeaders: ColumnHeadersSettings = new ColumnHeadersSettings();'
);

code = code.replace(
    /public cards: FormattingSettingsCard\[\] = \[this\.columnHeaders,/g,
    'public cards: FormattingSettingsCard[] = [this.specificColumn, this.columnHeaders,'
);

fs.writeFileSync('B:/VS Code Files/Visuals/timTable/src/settings.ts', code);
console.log('Done specificColumn update in settings.ts');
