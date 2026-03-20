import re

with open('src/settings.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# I want to add TotalsSettings class and add it to VisualSettings cards

totals_class = '''
export class TotalsSettings extends FormattingSettingsCard {
    public name: string = "totals";
    public displayName: string = "Totals";
    public visible: boolean = true;
    
    public showTotalRow = new formattingSettings.ToggleSwitch({
        name: "showTotalRow",
        displayName: "Show Total Row",
        value: true,
        visible: true
    });

    public slices: FormattingSettingsSlice[] = [this.showTotalRow];
}
'''

# Find the end of DataBarMarkersSettings
match = re.search(r'export class VisualSettings extends FormattingSettingsModel \{', content)
if match:
    insert_pos = match.start()
    content = content[:insert_pos] + totals_class + content[insert_pos:]
    
    # Add it to VisualSettings properties and cards array
    content = content.replace('public dataBarMarkers: DataBarMarkersSettings = new DataBarMarkersSettings();',
                              'public dataBarMarkers: DataBarMarkersSettings = new DataBarMarkersSettings();\n    public totals: TotalsSettings = new TotalsSettings();')
    
    old_cards = 'public cards: FormattingSettingsCard[] = [this.table, this.categoryConditionalFormatting, this.valueConditionalFormatting, this.dataBarsFormatting, this.dataBarMarkers];'
    new_cards = 'public cards: FormattingSettingsCard[] = [this.table, this.totals, this.categoryConditionalFormatting, this.valueConditionalFormatting, this.dataBarsFormatting, this.dataBarMarkers];'
    content = content.replace(old_cards, new_cards)

with open('src/settings.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated settings.ts")
