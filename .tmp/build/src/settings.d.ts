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
    switchValuesToRows: formattingSettings.ToggleSwitch;
    name: string;
    displayName: string;
    visible: boolean;
    slices: FormattingSettingsSlice[];
}
export declare class RowHeightSettings extends FormattingSettingsCard {
    name: string;
    displayName: string;
    visible: boolean;
    headerBold: formattingSettings.ToggleSwitch;
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
export declare class ValueBackgroundConditionalFormattingSettings extends FormattingSettingsCard {
    name: string;
    displayName: string;
    visible: boolean;
    slices: FormattingSettingsSlice[];
}
export declare class DataBarsConditionalFormattingSettings extends FormattingSettingsCard {
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
    applyTo: formattingSettings.ItemDropdown;
    slices: FormattingSettingsSlice[];
}
export declare class DataBarsFormattingSettings extends formattingSettings.CompositeCard {
    name: string;
    displayName: string;
    visible: boolean;
    series: formattingSettings.ItemDropdown;
    showDataBars: formattingSettings.ToggleSwitch;
    dataBarHeight: formattingSettings.NumUpDown;
    transparency: formattingSettings.NumUpDown;
    borderOn: formattingSettings.ToggleSwitch;
    matchDataBarColor: formattingSettings.ToggleSwitch;
    borderThickness: formattingSettings.NumUpDown;
    borderColor: formattingSettings.ColorPicker;
    axisType: formattingSettings.ItemDropdown;
    maxValue: formattingSettings.NumUpDown;
    minValue: formattingSettings.NumUpDown;
    labelsOutside: formattingSettings.ToggleSwitch;
    showOnRowTotals: formattingSettings.ToggleSwitch;
    showOnColumnTotals: formattingSettings.ToggleSwitch;
    showZeroLine: formattingSettings.ToggleSwitch;
    zeroLineColor: formattingSettings.ColorPicker;
    zeroLineTransparency: formattingSettings.NumUpDown;
    selectSeriesGroup: formattingSettings.Group;
    yAxisGroup: formattingSettings.Group;
    dataBarsGroup: formattingSettings.Group;
    groups: formattingSettings.Group[];
}
export declare class DataBarMarkersSettings extends FormattingSettingsCard {
    name: string;
    displayName: string;
    visible: boolean;
    slices: FormattingSettingsSlice[];
}
export declare class TotalsSettings extends formattingSettings.CompositeCard {
    name: string;
    displayName: string;
    visible: boolean;
    series: formattingSettings.ItemDropdown;
    showTotalRow: formattingSettings.ToggleSwitch;
    font: formattingSettings.FontControl;
    textColor: formattingSettings.ColorPicker;
    backgroundColor: formattingSettings.ColorPicker;
    textWrap: formattingSettings.ToggleSwitch;
    categorySelectionGroup: formattingSettings.Group;
    totalsFormattingGroup: formattingSettings.Group;
    groups: formattingSettings.Group[];
}
export declare class ColumnTotalsSettings extends formattingSettings.CompositeCard {
    name: string;
    displayName: string;
    visible: boolean;
    series: formattingSettings.ItemDropdown;
    showTotalColumn: formattingSettings.ToggleSwitch;
    font: formattingSettings.FontControl;
    textColor: formattingSettings.ColorPicker;
    backgroundColor: formattingSettings.ColorPicker;
    textWrap: formattingSettings.ToggleSwitch;
    columnSelectionGroup: formattingSettings.Group;
    columnTotalsFormattingGroup: formattingSettings.Group;
    groups: formattingSettings.Group[];
}
export declare class GridSettings extends formattingSettings.CompositeCard {
    horizontalGridlines: formattingSettings.ToggleSwitch;
    horizontalGridColor: formattingSettings.ColorPicker;
    horizontalGridWidth: formattingSettings.NumUpDown;
    horizontalGridTransparency: formattingSettings.NumUpDown;
    verticalGridlines: formattingSettings.ToggleSwitch;
    verticalGridColor: formattingSettings.ColorPicker;
    verticalGridWidth: formattingSettings.NumUpDown;
    verticalGridTransparency: formattingSettings.NumUpDown;
    borderSection: formattingSettings.ItemDropdown;
    borderAllTop: formattingSettings.ToggleSwitch;
    borderAllBottom: formattingSettings.ToggleSwitch;
    borderAllLeft: formattingSettings.ToggleSwitch;
    borderAllRight: formattingSettings.ToggleSwitch;
    borderAllColor: formattingSettings.ColorPicker;
    borderAllWidth: formattingSettings.NumUpDown;
    borderAllTransparency: formattingSettings.NumUpDown;
    borderColHeaderTop: formattingSettings.ToggleSwitch;
    borderColHeaderBottom: formattingSettings.ToggleSwitch;
    borderColHeaderLeft: formattingSettings.ToggleSwitch;
    borderColHeaderRight: formattingSettings.ToggleSwitch;
    borderColHeaderColor: formattingSettings.ColorPicker;
    borderColHeaderWidth: formattingSettings.NumUpDown;
    borderColHeaderTransparency: formattingSettings.NumUpDown;
    borderRowHeaderTop: formattingSettings.ToggleSwitch;
    borderRowHeaderBottom: formattingSettings.ToggleSwitch;
    borderRowHeaderLeft: formattingSettings.ToggleSwitch;
    borderRowHeaderRight: formattingSettings.ToggleSwitch;
    borderRowHeaderColor: formattingSettings.ColorPicker;
    borderRowHeaderWidth: formattingSettings.NumUpDown;
    borderRowHeaderTransparency: formattingSettings.NumUpDown;
    borderValuesTop: formattingSettings.ToggleSwitch;
    borderValuesBottom: formattingSettings.ToggleSwitch;
    borderValuesLeft: formattingSettings.ToggleSwitch;
    borderValuesRight: formattingSettings.ToggleSwitch;
    borderValuesColor: formattingSettings.ColorPicker;
    borderValuesWidth: formattingSettings.NumUpDown;
    borderValuesTransparency: formattingSettings.NumUpDown;
    gridlinesGroup: formattingSettings.Group;
    borderGroup: formattingSettings.Group;
    name: string;
    displayName: string;
    visible: boolean;
    groups: formattingSettings.Group[];
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
    selectSeriesGroup: formattingSettings.Group;
    headerFont: formattingSettings.FontControl;
    headerTextColor: formattingSettings.ColorPicker;
    headerBackgroundColor: formattingSettings.ColorPicker;
    headerAlignment: formattingSettings.AlignmentGroup;
    headerTextWrap: formattingSettings.ToggleSwitch;
    headerTransparency: formattingSettings.NumUpDown;
    headerHorizontalGrid: formattingSettings.ToggleSwitch;
    headerGroup: formattingSettings.Group;
    font: formattingSettings.FontControl;
    textColor: formattingSettings.ColorPicker;
    backgroundColor: formattingSettings.ColorPicker;
    alternateTextColor: formattingSettings.ColorPicker;
    alternateBackgroundColor: formattingSettings.ColorPicker;
    textWrap: formattingSettings.ToggleSwitch;
    switchValuesToRows: formattingSettings.ToggleSwitch;
    alignment: formattingSettings.AlignmentGroup;
    displayUnits: formattingSettings.AutoDropdown;
    decimalPlaces: formattingSettings.NumUpDown;
    transparency: formattingSettings.NumUpDown;
    horizontalGrid: formattingSettings.ToggleSwitch;
    valuesGroup: formattingSettings.Group;
    totalFont: formattingSettings.FontControl;
    totalTextColor: formattingSettings.ColorPicker;
    totalBackgroundColor: formattingSettings.ColorPicker;
    totalAlignment: formattingSettings.AlignmentGroup;
    totalDisplayUnits: formattingSettings.AutoDropdown;
    totalDecimalPlaces: formattingSettings.NumUpDown;
    totalTextWrap: formattingSettings.ToggleSwitch;
    totalTransparency: formattingSettings.NumUpDown;
    totalHorizontalGrid: formattingSettings.ToggleSwitch;
    totalGroup: formattingSettings.Group;
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
    categoryWordWrap: formattingSettings.ToggleSwitch;
    slices: FormattingSettingsSlice[];
}
export declare class SubTotalsSettings extends FormattingSettingsCard {
    name: string;
    displayName: string;
    visible: boolean;
    rowSubtotals: formattingSettings.ToggleSwitch;
    levelSubtotalEnabled: formattingSettings.ToggleSwitch;
    slices: FormattingSettingsSlice[];
}
export declare class VisualSettings extends FormattingSettingsModel {
    valuesMenu: ValuesSettings;
    specificColumn: SpecificColumnSettings;
    columnHeaders: ColumnHeadersSettings;
    rowHeight: RowHeightSettings;
    categoryConditionalFormatting: CategoryConditionalFormattingSettings;
    valueConditionalFormatting: ValueConditionalFormattingSettings;
    valueBackgroundConditionalFormatting: ValueBackgroundConditionalFormattingSettings;
    dataBarsConditionalFormatting: DataBarsConditionalFormattingSettings;
    dataBarsFormatting: DataBarsFormattingSettings;
    dataBarMarkers: DataBarMarkersSettings;
    totals: TotalsSettings;
    columnTotals: ColumnTotalsSettings;
    subTotals: SubTotalsSettings;
    gridMenu: GridSettings;
    columnWidth: ColumnWidthSettings;
    cards: FormattingSettingsCard[];
}
