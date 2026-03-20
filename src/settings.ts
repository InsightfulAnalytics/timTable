import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";
import { dataViewWildcard } from "powerbi-visuals-utils-dataviewutils";
import powerbi from "powerbi-visuals-api";

import FormattingSettingsCard = formattingSettings.SimpleCard;
import FormattingSettingsSlice = formattingSettings.Slice;
import FormattingSettingsModel = formattingSettings.Model;


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

export class TableSettings extends FormattingSettingsCard{
    public headerFontSize = new formattingSettings.NumUpDown({
        name: "headerFontSize",
        displayName: "Header Font Size",
        value: 14,
        visible: true
    });

    public headerBold = new formattingSettings.ToggleSwitch({
        name: "headerBold",
        displayName: "Header Bold",
        value: true,
        visible: true
    });

    

    

    public totalRowBold = new formattingSettings.ToggleSwitch({
        name: "totalRowBold",
        displayName: "Total Row Bold",
        value: true,
        visible: true
    });

    public totalRowUnderline = new formattingSettings.ToggleSwitch({
        name: "totalRowUnderline",
        displayName: "Total Row Underline",
        value: false,
        visible: true
    });

    public borderColor = new formattingSettings.ColorPicker({
        name: "borderColor",
        displayName: "Border Color",
        value: { value: "#d0d0d0" },
        visible: true
    });

    public switchValuesToRows = new formattingSettings.ToggleSwitch({
        name: "switchValuesToRows",
        displayName: "Switch values to rows",
        value: false,
        visible: true
    });

    public categoryWordWrap = new formattingSettings.ToggleSwitch({
        name: "categoryWordWrap",
        displayName: "Category Word Wrap",
        value: false,
        visible: true
    });

    public categoryColumnWidth = new formattingSettings.NumUpDown({
        name: "categoryColumnWidth",
        displayName: "Category Column Width",
        value: 150,
        visible: true
    });

    

    public headerWordWrap = new formattingSettings.ToggleSwitch({
        name: "headerWordWrap",
        displayName: "Header Word Wrap",
        value: false,
        visible: true
    });

    public columnWidth = new formattingSettings.NumUpDown({
        name: "columnWidth",
        displayName: "Value Column Width",
        value: 100,
        visible: true
    });

    public headerRowHeight = new formattingSettings.NumUpDown({
        name: "headerRowHeight",
        displayName: "Header Row Height",
        value: 35,
        visible: true
    });

    public valueRowHeight = new formattingSettings.NumUpDown({
        name: "valueRowHeight",
        displayName: "Value Row Height",
        value: 30,
        visible: true
    });

    public alternateValueRowHeight = new formattingSettings.NumUpDown({
        name: "alternateValueRowHeight",
        displayName: "Alternate Row Height",
        value: 30,
        visible: true
    });

    public totalRowHeight = new formattingSettings.NumUpDown({
        name: "totalRowHeight",
        displayName: "Total Row Height",
        value: 35,
        visible: true
    });

    

    

    public headerBackgroundColor = new formattingSettings.ColorPicker({
        name: "headerBackgroundColor",
        displayName: "Header Background Color",
        value: { value: "#e8e8e8" },
        visible: true,
        selector: dataViewWildcard.createDataViewWildcardSelector(dataViewWildcard.DataViewWildcardMatchingOption.InstancesAndTotals),
        instanceKind: powerbi.VisualEnumerationInstanceKinds.ConstantOrRule
    });

    public totalRowBackgroundColor = new formattingSettings.ColorPicker({
        name: "totalRowBackgroundColor",
        displayName: "Total Row Background Color",
        value: { value: "#d0d0d0" },
        visible: true,
        selector: dataViewWildcard.createDataViewWildcardSelector(dataViewWildcard.DataViewWildcardMatchingOption.InstancesAndTotals),
        instanceKind: powerbi.VisualEnumerationInstanceKinds.ConstantOrRule
    });

    public gridTransparency = new formattingSettings.NumUpDown({
        name: "gridTransparency",
        displayName: "Grid Transparency (%)",
        value: 0,
        visible: true
    });

    public name: string = "table";
    public displayName: string = "Table";
    public visible: boolean = true;
    public slices: FormattingSettingsSlice[] = [this.switchValuesToRows, this.headerFontSize, this.headerBold,  this.totalRowBold, this.totalRowUnderline, this.borderColor, this.categoryWordWrap, this.categoryColumnWidth,  this.headerWordWrap, this.columnWidth, this.headerRowHeight, this.valueRowHeight, this.alternateValueRowHeight, this.totalRowHeight,  this.headerBackgroundColor, this.totalRowBackgroundColor, this.gridTransparency]
}

export class ValueConditionalFormattingSettings extends FormattingSettingsCard {
    public name: string = "valueConditionalFormatting";
    public displayName: string = "Value conditional formatting";
    public visible: boolean = true;
    public slices: FormattingSettingsSlice[] = [];
}

export class CategoryConditionalFormattingSettings extends FormattingSettingsCard {
    public textColor = new formattingSettings.ColorPicker({
        name: "textColor",
        displayName: "Text Color",
        value: { value: "#333333" },
        visible: true,
        selector: dataViewWildcard.createDataViewWildcardSelector(dataViewWildcard.DataViewWildcardMatchingOption.InstancesAndTotals),
        instanceKind: powerbi.VisualEnumerationInstanceKinds.ConstantOrRule
    });

    public name: string = "categoryConditionalFormatting";
    public displayName: string = "Category conditional formatting";
    public visible: boolean = true;
    public slices: FormattingSettingsSlice[] = [this.textColor];
}

export class DataBarsFormattingSettings extends FormattingSettingsCard {
    public name: string = "dataBarsFormatting";
    public displayName: string = "Data Bars";
    public visible: boolean = true;
    public slices: FormattingSettingsSlice[] = [];
}

export class DataBarMarkersSettings extends FormattingSettingsCard {
    public name: string = "dataBarMarkers";
    public displayName: string = "Data Bar Markers";
    public visible: boolean = true;
    public slices: FormattingSettingsSlice[] = [];
}


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

    public totalBehavior = new formattingSettings.ItemDropdown({
        name: "totalBehavior",
        displayName: "Measure Selection",
        value: { value: "Measure", displayName: "Measure" },
        items: [
            { value: "Measure", displayName: "Measure" },
            { value: "Sum", displayName: "Sum" },
            { value: "Average", displayName: "Average" },
            { value: "Count", displayName: "Count" },
            { value: "Count Distinct", displayName: "Count Distinct" },
            { value: "Max", displayName: "Max" },
            { value: "Min", displayName: "Min" }
        ],
        visible: true
    });

    public slices: FormattingSettingsSlice[] = [this.showTotalRow, this.totalBehavior];
}

export class VisualSettings extends FormattingSettingsModel {
    public valuesMenu: ValuesSettings = new ValuesSettings();
    public table: TableSettings = new TableSettings();
    public categoryConditionalFormatting: CategoryConditionalFormattingSettings = new CategoryConditionalFormattingSettings();
    public valueConditionalFormatting: ValueConditionalFormattingSettings = new ValueConditionalFormattingSettings();
    public dataBarsFormatting: DataBarsFormattingSettings = new DataBarsFormattingSettings();
    public dataBarMarkers: DataBarMarkersSettings = new DataBarMarkersSettings();
    public totals: TotalsSettings = new TotalsSettings();
    
    public cards: FormattingSettingsCard[] = [this.valuesMenu, this.table, this.totals, this.categoryConditionalFormatting, this.valueConditionalFormatting, this.dataBarsFormatting, this.dataBarMarkers];
}