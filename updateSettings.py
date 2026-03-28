import re

with open('B:/VS Code Files/Visuals/timTable/src/settings.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Move switchValuesToRows to ValuesSettings
switch_str = '''    public switchValuesToRows = new formattingSettings.ToggleSwitch({
        name: "switchValuesToRows",
        displayName: "Switch values to rows",
        value: false,
        visible: true
    });
'''
content = content.replace(switch_str, '')

values_text_wrap_str = '''    public textWrap = new formattingSettings.ToggleSwitch({
        name: "textWrap",
        displayName: "Text wrap",
        value: false,
        visible: true
    });'''

values_text_wrap_new = values_text_wrap_str + '\n\n' + switch_str.rstrip()
content = content.replace(values_text_wrap_str, values_text_wrap_new)

# Update ValuesSettings slices
old_values_slices = '''    public slices: FormattingSettingsSlice[] = [
        this.font,
        this.textColor,
        this.backgroundColor,
        this.alternateTextColor,
        this.alternateBackgroundColor,
        this.textWrap
    ];'''
new_values_slices = '''    public slices: FormattingSettingsSlice[] = [
        this.font,
        this.textColor,
        this.backgroundColor,
        this.alternateTextColor,
        this.alternateBackgroundColor,
        this.textWrap,
        this.switchValuesToRows
    ];'''
content = content.replace(old_values_slices, new_values_slices)

# 2. Move categoryWordWrap to ColumnWidthSettings
cat_wrap_str = '''    public categoryWordWrap = new formattingSettings.ToggleSwitch({
        name: "categoryWordWrap",
        displayName: "Category Word Wrap",
        value: false,
        visible: true
    });
'''
content = content.replace(cat_wrap_str, '')

col_width_value_str = '''    public valueColumnWidth = new formattingSettings.NumUpDown({
        name: "valueColumnWidth",
        displayName: "Value Column Width",
        value: 100
    });'''

col_width_value_new = col_width_value_str + '\n\n' + cat_wrap_str.rstrip()
content = content.replace(col_width_value_str, col_width_value_new)

# Update ColumnWidthSettings slices
old_col_slices = 'public slices: FormattingSettingsSlice[] = [this.categoryColumnWidth, this.alignedColumns, this.valueColumnWidth];'
new_col_slices = 'public slices: FormattingSettingsSlice[] = [this.categoryColumnWidth, this.alignedColumns, this.valueColumnWidth, this.categoryWordWrap];'
content = content.replace(old_col_slices, new_col_slices)

# 3. Rename TableSettings to RowHeightSettings
content = content.replace('export class TableSettings extends FormattingSettingsCard{', 'export class RowHeightSettings extends FormattingSettingsCard{')
content = content.replace('name: string = "table";', 'name: string = "rowHeight";')
content = content.replace('displayName: string = "Table";', 'displayName: string = "Row height";')

old_table_slices = 'public slices: FormattingSettingsSlice[] = [this.switchValuesToRows, this.categoryWordWrap, this.valueRowHeight, this.alternateValueRowHeight, this.totalRowHeight]'
new_table_slices = 'public slices: FormattingSettingsSlice[] = [this.valueRowHeight, this.alternateValueRowHeight, this.totalRowHeight]'
content = content.replace(old_table_slices, new_table_slices)

# 4. Update VisualSettings
content = content.replace('public table: TableSettings = new TableSettings();', 'public rowHeight: RowHeightSettings = new RowHeightSettings();')
content = content.replace('this.table,', 'this.rowHeight,')

with open('B:/VS Code Files/Visuals/timTable/src/settings.ts', 'w', encoding='utf-8') as f:
    f.write(content)

