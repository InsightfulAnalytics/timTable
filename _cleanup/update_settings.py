import re

with open('src/settings.ts', 'r', encoding='utf8') as f:
    set_ts = f.read()

# Remove borderColor and gridTransparency
set_ts = re.sub(r'\s*public borderColor = new formattingSettings.ColorPicker\(\{[\s\S]*?\}\);\n', '', set_ts)
set_ts = re.sub(r'\s*public gridTransparency = new formattingSettings.NumUpDown\(\{[\s\S]*?\}\);\n', '', set_ts)

# Remove from slices array
set_ts = set_ts.replace('this.borderColor, ', '')
set_ts = set_ts.replace(', this.gridTransparency', '')

# Append GridSettings class
grid_class = '''
export class GridSettings extends FormattingSettingsCard {
    public horizontalGridlines = new formattingSettings.ToggleSwitch({
        name: "horizontalGridlines",
        displayName: "Horizontal gridlines",
        value: true,
        visible: true
    });

    public horizontalGridColor = new formattingSettings.ColorPicker({
        name: "horizontalGridColor",
        displayName: "Color",
        value: { value: "#d0d0d0" },
        visible: true
    });

    public horizontalGridWidth = new formattingSettings.NumUpDown({
        name: "horizontalGridWidth",
        displayName: "Width",
        value: 1,
        visible: true
    });

    public horizontalGridTransparency = new formattingSettings.NumUpDown({
        name: "horizontalGridTransparency",
        displayName: "Horizontal grid transparency (%)",
        value: 0,
        visible: true
    });

    public verticalGridlines = new formattingSettings.ToggleSwitch({
        name: "verticalGridlines",
        displayName: "Vertical gridlines",
        value: true,
        visible: true
    });

    public verticalGridColor = new formattingSettings.ColorPicker({
        name: "verticalGridColor",
        displayName: "Color",
        value: { value: "#d0d0d0" },
        visible: true
    });

    public verticalGridWidth = new formattingSettings.NumUpDown({
        name: "verticalGridWidth",
        displayName: "Width",
        value: 1,
        visible: true
    });

    public verticalGridTransparency = new formattingSettings.NumUpDown({
        name: "verticalGridTransparency",
        displayName: "Vertical grid transparency (%)",
        value: 0,
        visible: true
    });

    public name: string = "grid";
    public displayName: string = "Grid";
    public visible: boolean = true;
    public slices: FormattingSettingsSlice[] = [
        this.horizontalGridlines,
        this.horizontalGridColor,
        this.horizontalGridWidth,
        this.horizontalGridTransparency,
        this.verticalGridlines,
        this.verticalGridColor,
        this.verticalGridWidth,
        this.verticalGridTransparency
    ];
}
'''

# Insert before VisualSettings
set_ts = set_ts.replace('export class VisualSettings extends FormattingSettingsModel {', grid_class + '\nexport class VisualSettings extends FormattingSettingsModel {')

# Add grid field and append to cards
set_ts = set_ts.replace('public totals: TotalsSettings = new TotalsSettings();', 'public totals: TotalsSettings = new TotalsSettings();\n    public gridMenu: GridSettings = new GridSettings();')
set_ts = set_ts.replace('this.totals, this.categoryConditionalFormatting', 'this.totals, this.gridMenu, this.categoryConditionalFormatting')

with open('src/settings.ts', 'w', encoding='utf8') as f:
    f.write(set_ts)

print("Updated settings.ts")
