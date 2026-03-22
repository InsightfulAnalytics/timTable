const fs = require('fs');
let code = fs.readFileSync('B:/VS Code Files/Visuals/timTable/src/settings.ts', 'utf8');

const regex = /export class SpecificColumnSettings extends formattingSettings\.CompositeCard \{[\s\S]*?public groups: formattingSettings\.Group\[\] = \[this\.applySettingsGroup, this\.valuesGroup\];\s*\}/;

const replacement = `export class SpecificColumnSettings extends formattingSettings.CompositeCard {
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
        value: { value: "#00b8d4" },
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
        name: "specificValues", // NOTE: renamed to specificValues to avoid clash with global 'values' object
        slices: [this.font, this.textColor, this.backgroundColor, this.alternateTextColor, this.alternateBackgroundColor, this.alignment, this.displayUnits, this.decimalPlaces, this.textWrap]
    });

    public name: string = "specificColumn";
    public displayName: string = "Specific column";
    public visible: boolean = true;
    public groups: formattingSettings.Group[] = [this.applySettingsGroup, this.valuesGroup];
}`;

if (!regex.test(code)) {
    console.error('Could not match SpecificColumnSettings in settings.ts');
    process.exit(1);
}
code = code.replace(regex, replacement);

fs.writeFileSync('B:/VS Code Files/Visuals/timTable/src/settings.ts', code);
console.log('Fixed SpecificColumnSettings in settings.ts');
