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
    headerFontSize: formattingSettings.NumUpDown;
    headerBold: formattingSettings.ToggleSwitch;
    switchValuesToRows: formattingSettings.ToggleSwitch;
    categoryWordWrap: formattingSettings.ToggleSwitch;
    categoryColumnWidth: formattingSettings.NumUpDown;
    headerWordWrap: formattingSettings.ToggleSwitch;
    columnWidth: formattingSettings.NumUpDown;
    headerRowHeight: formattingSettings.NumUpDown;
    valueRowHeight: formattingSettings.NumUpDown;
    alternateValueRowHeight: formattingSettings.NumUpDown;
    totalRowHeight: formattingSettings.NumUpDown;
    headerBackgroundColor: formattingSettings.ColorPicker;
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
export declare class VisualSettings extends FormattingSettingsModel {
    valuesMenu: ValuesSettings;
    table: TableSettings;
    categoryConditionalFormatting: CategoryConditionalFormattingSettings;
    valueConditionalFormatting: ValueConditionalFormattingSettings;
    dataBarsFormatting: DataBarsFormattingSettings;
    dataBarMarkers: DataBarMarkersSettings;
    totals: TotalsSettings;
    gridMenu: GridSettings;
    cards: FormattingSettingsCard[];
}
