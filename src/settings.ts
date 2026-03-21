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
    name: string = "table";
    displayName: string = "Table";
    visible: boolean = true;
public headerBold = new formattingSettings.ToggleSwitch({
        name: "headerBold",
        displayName: "Header Bold",
        value: true,
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

    

public columnWidth = new formattingSettings.NumUpDown({
        name: "columnWidth",
        displayName: "Value Column Width",
        value: 100,
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

    

    

public slices: FormattingSettingsSlice[] = [this.switchValuesToRows, this.categoryWordWrap, this.categoryColumnWidth, this.columnWidth, this.valueRowHeight, this.alternateValueRowHeight, this.totalRowHeight]
}

export class ValueConditionalFormattingSettings extends FormattingSettingsCard {
    name: string = "valueConditionalFormatting";
    displayName: string = "Value conditional formatting";
    visible: boolean = true;
    public slices: FormattingSettingsSlice[] = [];
}

export class CategoryConditionalFormattingSettings extends FormattingSettingsCard {
    name: string = "categoryConditionalFormatting";
    displayName: string = "Category conditional formatting";
    visible: boolean = true;
    public textColor = new formattingSettings.ColorPicker({
        name: "textColor",
        displayName: "Text Color",
        value: { value: "#333333" },
        visible: true,
        selector: dataViewWildcard.createDataViewWildcardSelector(dataViewWildcard.DataViewWildcardMatchingOption.InstancesAndTotals),
        instanceKind: powerbi.VisualEnumerationInstanceKinds.ConstantOrRule
    });

    public slices: FormattingSettingsSlice[] = [this.textColor];
}

export class DataBarsFormattingSettings extends FormattingSettingsCard {
    name: string = "dataBarsFormatting";
    displayName:string = "Data Bars";
    visible: boolean = true;
    public slices: FormattingSettingsSlice[] = [];
}

export class DataBarMarkersSettings extends FormattingSettingsCard {
    name: string = "dataBarMarkers";
    displayName: string = "Data Bar Markers";
    visible: boolean = true;
    public slices: FormattingSettingsSlice[] = [];
}


export class TotalsSettings extends FormattingSettingsCard {
    name: string = "totals";
    displayName: string = "Totals";
    visible: boolean = true;
    
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
            value: true
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
        value: { value: "#d0d0d0" },
        visible: true
    });

    public textWrap = new formattingSettings.ToggleSwitch({
        name: "textWrap",
        displayName: "Text wrap",
        value: false,
        visible: true
    });

    public slices: FormattingSettingsSlice[] = [this.showTotalRow, this.totalBehavior, this.font, this.textColor, this.backgroundColor, this.textWrap];
}


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


export class ColumnHeadersSettings extends formattingSettings.CompositeCard {
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
            value: 11
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
        value: { value: "#1e3a8a" },
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
        displayName: "Header alignment",
        value: "left",
        mode: powerbi.visuals.AlignmentGroupMode.Horizonal,
        visible: true
    });

    public textWrap = new formattingSettings.ToggleSwitch({
        name: "textWrap",
        displayName: "Text wrap",
        value: true,
        visible: true
    });

    public textGroup = new formattingSettings.Group({
        displayName: "Text",
        name: "text",
        slices: [this.font, this.textColor, this.backgroundColor, this.alignment, this.textWrap]
    });

    public headerRowHeight = new formattingSettings.NumUpDown({
        name: "headerRowHeight",
        displayName: "Header row height",
        value: 35,
        visible: true
    });

    public optionsGroup = new formattingSettings.Group({
        displayName: "Options",
        name: "options",
        slices: [this.headerRowHeight]
    });

    public name: string = "columnHeaders";
    public displayName: string = "Column headers";
    public visible: boolean = true;
    public groups: formattingSettings.Group[] = [this.textGroup, this.optionsGroup];
}

export class VisualSettings extends FormattingSettingsModel {
    public valuesMenu: ValuesSettings = new ValuesSettings();
    public columnHeaders: ColumnHeadersSettings = new ColumnHeadersSettings();
    public table: TableSettings = new TableSettings();
    public categoryConditionalFormatting: CategoryConditionalFormattingSettings = new CategoryConditionalFormattingSettings();
    public valueConditionalFormatting: ValueConditionalFormattingSettings = new ValueConditionalFormattingSettings();
    public dataBarsFormatting: DataBarsFormattingSettings = new DataBarsFormattingSettings();
    public dataBarMarkers: DataBarMarkersSettings = new DataBarMarkersSettings();
    public totals: TotalsSettings = new TotalsSettings();
    public gridMenu: GridSettings = new GridSettings();
    
    public cards: FormattingSettingsCard[] = [this.columnHeaders, this.valuesMenu, this.table, this.totals, this.gridMenu, this.categoryConditionalFormatting, this.valueConditionalFormatting, this.dataBarsFormatting, this.dataBarMarkers];
}