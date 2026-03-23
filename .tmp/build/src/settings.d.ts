import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";
import FormattingSettingsCard = formattingSettings.SimpleCard;
import FormattingSettingsSlice = formattingSettings.Slice;
import FormattingSettingsModel = formattingSettings.Model;
export declare class ValuesSettings extends FormattingSettingsCard {
    font: formattingSettings.FontControl;
    textColor: formattingSettings.ColorPicker;
    backgroundColor: formattingSettings.ColorPicker;
    alternateTextColor: formattingSettings.ColorPicker;
    alternateBackgroundColor: formattingSettings.ColorPicker;
    textWrap: formattingSettings.ToggleSwitch;
    name: string;
    displayName: string;
    visible: boolean;
    slices: FormattingSettingsSlice[];
}
export declare class TableSettings extends FormattingSettingsCard {
    name: string;
    displayName: string;
    visible: boolean;
    headerBold: formattingSettings.ToggleSwitch;
    switchValuesToRows: formattingSettings.ToggleSwitch;
    categoryWordWrap: formattingSettings.ToggleSwitch;
    valueRowHeight: formattingSettings.NumUpDown;
    alternateValueRowHeight: formattingSettings.NumUpDown;
    totalRowHeight: formattingSettings.NumUpDown;
    slices: FormattingSettingsSlice[];
}
export declare class ValueConditionalFormattingSettings extends FormattingSettingsCard {
    name: string;
    displayName: string;
    visible: boolean;
    slices: FormattingSettingsSlice[];
}
export declare class CategoryConditionalFormattingSettings extends FormattingSettingsCard {
    name: string;
    displayName: string;
    visible: boolean;
    textColor: formattingSettings.ColorPicker;
    slices: FormattingSettingsSlice[];
}
export declare class DataBarsFormattingSettings extends FormattingSettingsCard {
    name: string;
    displayName: string;
    visible: boolean;
    slices: FormattingSettingsSlice[];
}
export declare class DataBarMarkersSettings extends FormattingSettingsCard {
    name: string;
    displayName: string;
    visible: boolean;
    slices: FormattingSettingsSlice[];
}
export declare class TotalsSettings extends FormattingSettingsCard {
    name: string;
    displayName: string;
    visible: boolean;
    showTotalRow: formattingSettings.ToggleSwitch;
    totalBehavior: formattingSettings.ItemDropdown;
    font: formattingSettings.FontControl;
    textColor: formattingSettings.ColorPicker;
    backgroundColor: formattingSettings.ColorPicker;
    textWrap: formattingSettings.ToggleSwitch;
    slices: FormattingSettingsSlice[];
}
export declare class GridSettings extends FormattingSettingsCard {
    horizontalGridlines: formattingSettings.ToggleSwitch;
    horizontalGridColor: formattingSettings.ColorPicker;
    horizontalGridWidth: formattingSettings.NumUpDown;
    horizontalGridTransparency: formattingSettings.NumUpDown;
    verticalGridlines: formattingSettings.ToggleSwitch;
    verticalGridColor: formattingSettings.ColorPicker;
    verticalGridWidth: formattingSettings.NumUpDown;
    verticalGridTransparency: formattingSettings.NumUpDown;
    name: string;
    displayName: string;
    visible: boolean;
    slices: FormattingSettingsSlice[];
}
export declare class ColumnHeadersSettings extends formattingSettings.CompositeCard {
    font: formattingSettings.FontControl;
    textColor: formattingSettings.ColorPicker;
    backgroundColor: formattingSettings.ColorPicker;
    alignment: formattingSettings.AlignmentGroup;
    textWrap: formattingSettings.ToggleSwitch;
    textGroup: formattingSettings.Group;
    headerRowHeight: formattingSettings.NumUpDown;
    optionsGroup: formattingSettings.Group;
    nameSeries: formattingSettings.ItemDropdown;
    nameOverride: formattingSettings.TextInput;
    namesGroup: formattingSettings.Group;
    name: string;
    displayName: string;
    visible: boolean;
    groups: formattingSettings.Group[];
}
export declare class SpecificColumnSettings extends formattingSettings.CompositeCard {
    series: formattingSettings.ItemDropdown;
    applyToHeader: formattingSettings.ToggleSwitch;
    applyToTotal: formattingSettings.ToggleSwitch;
    applyToValues: formattingSettings.ToggleSwitch;
    applySettingsGroup: formattingSettings.Group;
    font: formattingSettings.FontControl;
    textColor: formattingSettings.ColorPicker;
    backgroundColor: formattingSettings.ColorPicker;
    alternateTextColor: formattingSettings.ColorPicker;
    alternateBackgroundColor: formattingSettings.ColorPicker;
    textWrap: formattingSettings.ToggleSwitch;
    alignment: formattingSettings.AlignmentGroup;
    displayUnits: formattingSettings.AutoDropdown;
    decimalPlaces: formattingSettings.NumUpDown;
    valuesGroup: formattingSettings.Group;
    name: string;
    displayName: string;
    visible: boolean;
    groups: formattingSettings.Group[];
}
export declare class ColumnWidthSettings extends FormattingSettingsCard {
    name: string;
    displayName: string;
    visible: boolean;
    categoryColumnWidth: formattingSettings.NumUpDown;
    alignedColumns: formattingSettings.ToggleSwitch;
    valueColumnWidth: formattingSettings.NumUpDown;
    slices: FormattingSettingsSlice[];
}
export declare class VisualSettings extends FormattingSettingsModel {
    valuesMenu: ValuesSettings;
    specificColumn: SpecificColumnSettings;
    columnHeaders: ColumnHeadersSettings;
    table: TableSettings;
    categoryConditionalFormatting: CategoryConditionalFormattingSettings;
    valueConditionalFormatting: ValueConditionalFormattingSettings;
    dataBarsFormatting: DataBarsFormattingSettings;
    dataBarMarkers: DataBarMarkersSettings;
    totals: TotalsSettings;
    gridMenu: GridSettings;
    columnWidth: ColumnWidthSettings;
    cards: FormattingSettingsCard[];
}
