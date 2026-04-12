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

    public switchValuesToRows = new formattingSettings.ToggleSwitch({
        name: "switchValuesToRows",
        displayName: "Switch values to rows",
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

export class RowHeightSettings extends FormattingSettingsCard{
    name: string = "rowHeight";
    displayName: string = "Row height";
    visible: boolean = true;
public headerBold = new formattingSettings.ToggleSwitch({
        name: "headerBold",
        displayName: "Header Bold",
        value: true,
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

    public slices: FormattingSettingsSlice[] = [this.valueRowHeight, this.alternateValueRowHeight, this.totalRowHeight]
}

export class ValueConditionalFormattingSettings extends FormattingSettingsCard {
    name: string = "valueConditionalFormatting";
    displayName: string = "Value conditional formatting";
    visible: boolean = true;
    public slices: FormattingSettingsSlice[] = [];
}

export class ValueBackgroundConditionalFormattingSettings extends FormattingSettingsCard {
    name: string = "valueBackgroundConditionalFormatting";
    displayName: string = "Background conditional formatting";
    visible: boolean = true;
    public slices: FormattingSettingsSlice[] = [];
}

export class DataBarsConditionalFormattingSettings extends FormattingSettingsCard {
    name: string = "dataBarsConditionalFormatting";
    displayName: string = "Data bar conditional formatting";
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
    public applyTo = new formattingSettings.ItemDropdown({
        name: "applyTo",
        displayName: "Apply to",
        value: { value: "valuesOnly", displayName: "Values only" },
        items: [
            { value: "valuesOnly", displayName: "Values only" },
            { value: "valuesAndTotals", displayName: "Values and totals" },
            { value: "totalsOnly", displayName: "Totals only" }
        ],
        visible: true
    });

    public slices: FormattingSettingsSlice[] = [this.textColor, this.applyTo];
}

export class DataBarsFormattingSettings extends formattingSettings.CompositeCard {
    public name: string = "dataBarsFormatting";
    public displayName: string = "Data Bars";
    public visible: boolean = true;

    public series = new formattingSettings.ItemDropdown({
        name: "series",
        displayName: "Series",
        value: { value: "", displayName: "" },
        items: [],
        visible: true
    });

    public showDataBars = new formattingSettings.ToggleSwitch({
        name: "showDataBars",
        displayName: "Show Data Bars",
        value: false,
        visible: true
    });

    public dataBarHeight = new formattingSettings.NumUpDown({
        name: "dataBarHeight",
        displayName: "Data Bar Height (%)",
        value: 80,
        visible: true
    });

    public transparency = new formattingSettings.NumUpDown({
        name: "transparency",
        displayName: "Transparency (%)",
        value: 20,
        visible: true
    });

    public borderOn = new formattingSettings.ToggleSwitch({
        name: "borderOn",
        displayName: "Border On",
        value: true,
        visible: true
    });

    public matchDataBarColor = new formattingSettings.ToggleSwitch({
        name: "matchDataBarColor",
        displayName: "Match Data Bar Color",
        value: true,
        visible: true
    });

    public borderThickness = new formattingSettings.NumUpDown({
        name: "borderThickness",
        displayName: "Border Thickness",
        value: 1,
        visible: true
    });

    public borderColor = new formattingSettings.ColorPicker({
        name: "borderColor",
        displayName: "Border Color",
        value: { value: "#000000" },
        visible: true,
        instanceKind: powerbi.VisualEnumerationInstanceKinds.ConstantOrRule
    });

    public axisType = new formattingSettings.ItemDropdown({
        name: "axisType",
        displayName: "Type",
        value: { value: "Amount", displayName: "Amount" },
        items: [
            { value: "Amount", displayName: "Amount" },
            { value: "Percentage", displayName: "By percentage" }
        ],
        visible: true
    });

    public maxValue = new formattingSettings.NumUpDown({
        name: "maxValue",
        displayName: "Upper bound",
        value: null,
        options: {
            placeholderText: "Auto",
            placeholder: "Auto"
        } as any,
        visible: true
    });

    public minValue = new formattingSettings.NumUpDown({
        name: "minValue",
        displayName: "Lower bound",
        value: null,
        options: {
            placeholderText: "Auto",
            placeholder: "Auto"
        } as any,
        visible: true
    });

    public labelsOutside = new formattingSettings.ToggleSwitch({
        name: "labelsOutside",
        displayName: "Labels Outside",
        value: false,
        visible: true
    });

    public showOnRowTotals = new formattingSettings.ToggleSwitch({
        name: "showOnRowTotals",
        displayName: "Show on Row Totals",
        value: true,
        visible: true
    });

    public showOnColumnTotals = new formattingSettings.ToggleSwitch({
        name: "showOnColumnTotals",
        displayName: "Show on Column Totals",
        value: true,
        visible: true
    });

    public showZeroLine = new formattingSettings.ToggleSwitch({
        name: "showZeroLine",
        displayName: "Show Zero Line",
        value: false,
        visible: true
    });

    public zeroLineColor = new formattingSettings.ColorPicker({
        name: "zeroLineColor",
        displayName: "Zero Line Color",
        value: { value: "#000000" },
        visible: true
    });

    public zeroLineTransparency = new formattingSettings.NumUpDown({
        name: "zeroLineTransparency",
        displayName: "Zero Line Transparency (%)",
        value: 0,
        visible: true
    });

    public selectSeriesGroup = new formattingSettings.Group({
        displayName: "Select Series",
        name: "selectSeriesGroup",
        slices: [this.series]
    });

    public yAxisGroup = new formattingSettings.Group({
        displayName: "Y-axis",
        name: "yAxisGroup",
        slices: [this.axisType, this.maxValue, this.minValue]
    });

    public dataBarsGroup = new formattingSettings.Group({
        displayName: "Data Bars Settings",
        name: "dataBarsGroup",
        slices: [this.showDataBars, this.dataBarHeight, this.transparency, this.borderOn, this.matchDataBarColor, this.borderThickness, this.borderColor, this.labelsOutside, this.showOnRowTotals, this.showOnColumnTotals, this.showZeroLine, this.zeroLineColor, this.zeroLineTransparency]
    });

    public groups: formattingSettings.Group[] = [this.selectSeriesGroup, this.dataBarsGroup, this.yAxisGroup];
}

export class DataBarMarkersSettings extends FormattingSettingsCard {
    name: string = "dataBarMarkers";
    displayName: string = "Data Bar Markers";
    visible: boolean = true;
    public slices: FormattingSettingsSlice[] = [];
}


export class TotalsSettings extends formattingSettings.CompositeCard {
    name: string = "totals";
    displayName: string = "Row Totals";
    visible: boolean = true;
    
    public series = new formattingSettings.ItemDropdown({
        name: "series",
        displayName: "Series",
        value: { value: "", displayName: "" },
        items: [],
        visible: true
    });

    public showTotalRow = new formattingSettings.ToggleSwitch({
        name: "showTotalRow",
        displayName: "Show Total Row",
        value: true,
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

    public categorySelectionGroup = new formattingSettings.Group({
        displayName: "Category Selection",
        name: "categorySelectionGroup",
        slices: [this.series, this.showTotalRow]
    });

    public totalsFormattingGroup = new formattingSettings.Group({
        displayName: "Totals formatting",
        name: "totalsFormattingGroup",
        slices: [this.font, this.textWrap]
    });

    public groups: formattingSettings.Group[] = [this.categorySelectionGroup, this.totalsFormattingGroup];
}


export class ColumnTotalsSettings extends formattingSettings.CompositeCard {
    name: string = "columnTotals";
    displayName: string = "Column Totals";
    visible: boolean = true;
    
    public series = new formattingSettings.ItemDropdown({
        name: "series",
        displayName: "Series",
        value: { value: "", displayName: "" },
        items: [],
        visible: true
    });

    public showTotalColumn = new formattingSettings.ToggleSwitch({
        name: "showTotalColumn",
        displayName: "Show Total Column",
        value: false,
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

    public columnSelectionGroup = new formattingSettings.Group({
        displayName: "Measure Selection",
        name: "columnSelectionGroup",
        slices: [this.series, this.showTotalColumn]
    });

    public columnTotalsFormattingGroup = new formattingSettings.Group({
        displayName: "Totals formatting",
        name: "columnTotalsFormattingGroup",
        slices: [this.font, this.textWrap]
    });

    public groups: formattingSettings.Group[] = [this.columnSelectionGroup, this.columnTotalsFormattingGroup];
}


const borderSectionItems = [
    { value: "all", displayName: "All" },
    { value: "columnHeaders", displayName: "Column headers" },
    { value: "rowHeaders", displayName: "Row headers" },
    { value: "values", displayName: "Values section" }
];

export class GridSettings extends formattingSettings.CompositeCard {
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

    // ── Border section ──
    public borderSection = new formattingSettings.ItemDropdown({
        name: "borderSection",
        displayName: "Section",
        value: { value: "all", displayName: "All" },
        items: borderSectionItems,
        visible: true
    });

    // All
    public borderAllTop = new formattingSettings.ToggleSwitch({ name: "borderAllTop", displayName: "Top", value: false, visible: true });
    public borderAllBottom = new formattingSettings.ToggleSwitch({ name: "borderAllBottom", displayName: "Bottom", value: false, visible: true });
    public borderAllLeft = new formattingSettings.ToggleSwitch({ name: "borderAllLeft", displayName: "Left", value: false, visible: true });
    public borderAllRight = new formattingSettings.ToggleSwitch({ name: "borderAllRight", displayName: "Right", value: false, visible: true });
    public borderAllColor = new formattingSettings.ColorPicker({ name: "borderAllColor", displayName: "Colour", value: { value: "#000000" }, visible: true });
    public borderAllWidth = new formattingSettings.NumUpDown({ name: "borderAllWidth", displayName: "Width", value: 1, visible: true });
    public borderAllTransparency = new formattingSettings.NumUpDown({ name: "borderAllTransparency", displayName: "Transparency (%)", value: 0, visible: true });

    // Column headers
    public borderColHeaderTop = new formattingSettings.ToggleSwitch({ name: "borderColHeaderTop", displayName: "Top", value: false, visible: false });
    public borderColHeaderBottom = new formattingSettings.ToggleSwitch({ name: "borderColHeaderBottom", displayName: "Bottom", value: false, visible: false });
    public borderColHeaderLeft = new formattingSettings.ToggleSwitch({ name: "borderColHeaderLeft", displayName: "Left", value: false, visible: false });
    public borderColHeaderRight = new formattingSettings.ToggleSwitch({ name: "borderColHeaderRight", displayName: "Right", value: false, visible: false });
    public borderColHeaderColor = new formattingSettings.ColorPicker({ name: "borderColHeaderColor", displayName: "Colour", value: { value: "#000000" }, visible: false });
    public borderColHeaderWidth = new formattingSettings.NumUpDown({ name: "borderColHeaderWidth", displayName: "Width", value: 1, visible: false });
    public borderColHeaderTransparency = new formattingSettings.NumUpDown({ name: "borderColHeaderTransparency", displayName: "Transparency (%)", value: 0, visible: false });

    // Row headers
    public borderRowHeaderTop = new formattingSettings.ToggleSwitch({ name: "borderRowHeaderTop", displayName: "Top", value: false, visible: false });
    public borderRowHeaderBottom = new formattingSettings.ToggleSwitch({ name: "borderRowHeaderBottom", displayName: "Bottom", value: false, visible: false });
    public borderRowHeaderLeft = new formattingSettings.ToggleSwitch({ name: "borderRowHeaderLeft", displayName: "Left", value: false, visible: false });
    public borderRowHeaderRight = new formattingSettings.ToggleSwitch({ name: "borderRowHeaderRight", displayName: "Right", value: false, visible: false });
    public borderRowHeaderColor = new formattingSettings.ColorPicker({ name: "borderRowHeaderColor", displayName: "Colour", value: { value: "#000000" }, visible: false });
    public borderRowHeaderWidth = new formattingSettings.NumUpDown({ name: "borderRowHeaderWidth", displayName: "Width", value: 1, visible: false });
    public borderRowHeaderTransparency = new formattingSettings.NumUpDown({ name: "borderRowHeaderTransparency", displayName: "Transparency (%)", value: 0, visible: false });

    // Values section
    public borderValuesTop = new formattingSettings.ToggleSwitch({ name: "borderValuesTop", displayName: "Top", value: false, visible: false });
    public borderValuesBottom = new formattingSettings.ToggleSwitch({ name: "borderValuesBottom", displayName: "Bottom", value: false, visible: false });
    public borderValuesLeft = new formattingSettings.ToggleSwitch({ name: "borderValuesLeft", displayName: "Left", value: false, visible: false });
    public borderValuesRight = new formattingSettings.ToggleSwitch({ name: "borderValuesRight", displayName: "Right", value: false, visible: false });
    public borderValuesColor = new formattingSettings.ColorPicker({ name: "borderValuesColor", displayName: "Colour", value: { value: "#000000" }, visible: false });
    public borderValuesWidth = new formattingSettings.NumUpDown({ name: "borderValuesWidth", displayName: "Width", value: 1, visible: false });
    public borderValuesTransparency = new formattingSettings.NumUpDown({ name: "borderValuesTransparency", displayName: "Transparency (%)", value: 0, visible: false });

    public gridlinesGroup = new formattingSettings.Group({
        displayName: "Gridlines",
        name: "gridlinesGroup",
        slices: [
            this.horizontalGridlines,
            this.horizontalGridColor,
            this.horizontalGridWidth,
            this.horizontalGridTransparency,
            this.verticalGridlines,
            this.verticalGridColor,
            this.verticalGridWidth,
            this.verticalGridTransparency
        ]
    });

    public borderGroup = new formattingSettings.Group({
        displayName: "Border",
        name: "borderGroup",
        slices: [
            this.borderSection,
            this.borderAllTop, this.borderAllBottom, this.borderAllLeft, this.borderAllRight,
            this.borderAllColor, this.borderAllWidth, this.borderAllTransparency,
            this.borderColHeaderTop, this.borderColHeaderBottom, this.borderColHeaderLeft, this.borderColHeaderRight,
            this.borderColHeaderColor, this.borderColHeaderWidth, this.borderColHeaderTransparency,
            this.borderRowHeaderTop, this.borderRowHeaderBottom, this.borderRowHeaderLeft, this.borderRowHeaderRight,
            this.borderRowHeaderColor, this.borderRowHeaderWidth, this.borderRowHeaderTransparency,
            this.borderValuesTop, this.borderValuesBottom, this.borderValuesLeft, this.borderValuesRight,
            this.borderValuesColor, this.borderValuesWidth, this.borderValuesTransparency
        ]
    });

    public name: string = "grid";
    public displayName: string = "Grid";
    public visible: boolean = true;
    public groups: formattingSettings.Group[] = [this.gridlinesGroup, this.borderGroup];
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

    public nameSeries = new formattingSettings.ItemDropdown({
        name: "nameSeries",
        displayName: "Series",
        value: { value: "", displayName: "" },
        items: [],
        visible: true
    });

    public nameOverride = new formattingSettings.TextInput({
        name: "nameOverride",
        displayName: "Header Name",
        placeholder: "Enter custom header name",
        value: "",
        visible: true,
        instanceKind: powerbi.VisualEnumerationInstanceKinds.ConstantOrRule
    });

    public namesGroup = new formattingSettings.Group({
        displayName: "Names",
        name: "names",
        slices: [this.nameSeries, this.nameOverride]
    });

    public name: string = "columnHeaders";
    public displayName: string = "Column headers";
    public visible: boolean = true;
    public groups: formattingSettings.Group[] = [this.textGroup, this.optionsGroup, this.namesGroup];
}


export class SpecificColumnSettings extends formattingSettings.CompositeCard {
    public series = new formattingSettings.ItemDropdown({
        name: "series",
        displayName: "Series",
        value: { value: "", displayName: "" },
        items: [],
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

    public switchValuesToRows = new formattingSettings.ToggleSwitch({
        name: "switchValuesToRows",
        displayName: "Switch values to rows",
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
        value: null,
        visible: true,
        options: {
            placeholderText: "Auto"
        } as any
    });

    public transparency = new formattingSettings.NumUpDown({
        name: "transparency",
        displayName: "Value Transparency (%)",
        value: 0,
        visible: true
    });

    public horizontalGrid = new formattingSettings.ToggleSwitch({
        name: "horizontalGrid",
        displayName: "Horizontal grid",
        value: true,
        visible: true
    });

    public valuesGroup = new formattingSettings.Group({
        displayName: "Values",
        name: "specificValues", // NOTE: renamed to specificValues to avoid clash with global 'values' object
        slices: [this.font, this.textColor, this.backgroundColor, this.alternateTextColor, this.alternateBackgroundColor, this.alignment, this.displayUnits, this.decimalPlaces, this.textWrap, this.transparency, this.horizontalGrid]
    });

    public name: string = "specificColumn";
    public displayName: string = "Specific column";
    public visible: boolean = true;
    public groups: formattingSettings.Group[] = [this.applySettingsGroup, this.valuesGroup];
}

export class ColumnWidthSettings extends FormattingSettingsCard {
    name: string = "columnWidth";
    displayName: string = "Column Width";
    visible: boolean = true;

    public categoryColumnWidth = new formattingSettings.NumUpDown({
        name: "categoryColumnWidth",
        displayName: "Category Column Width",
        value: 150
    });

    public alignedColumns = new formattingSettings.ToggleSwitch({
        name: "alignedColumns",
        displayName: "Aligned columns",
        value: true
    });

    public valueColumnWidth = new formattingSettings.NumUpDown({
        name: "valueColumnWidth",
        displayName: "Value Column Width",
        value: 100
    });

    public categoryWordWrap = new formattingSettings.ToggleSwitch({
        name: "categoryWordWrap",
        displayName: "Category Word Wrap",
        value: false,
        visible: true
    });

    public slices: FormattingSettingsSlice[] = [this.categoryColumnWidth, this.alignedColumns, this.valueColumnWidth, this.categoryWordWrap];
}

export class SubTotalsSettings extends FormattingSettingsCard {
    public name: string = "subTotals";
    public displayName: string = "Subtotals";
    public visible: boolean = false;

    public rowSubtotals = new formattingSettings.ToggleSwitch({
        name: "rowSubtotals",
        displayName: "Row subtotals",
        value: true,
        visible: false
    });

    public levelSubtotalEnabled = new formattingSettings.ToggleSwitch({
        name: "levelSubtotalEnabled",
        displayName: "Level subtotal enabled",
        value: true,
        visible: false
    });

    public slices: FormattingSettingsSlice[] = [this.rowSubtotals, this.levelSubtotalEnabled];
}

export class VisualSettings extends FormattingSettingsModel {
    public valuesMenu: ValuesSettings = new ValuesSettings();
    public specificColumn: SpecificColumnSettings = new SpecificColumnSettings();
    public columnHeaders: ColumnHeadersSettings = new ColumnHeadersSettings();
    public rowHeight: RowHeightSettings = new RowHeightSettings();
    public categoryConditionalFormatting: CategoryConditionalFormattingSettings = new CategoryConditionalFormattingSettings();
    public valueConditionalFormatting: ValueConditionalFormattingSettings = new ValueConditionalFormattingSettings();
    public valueBackgroundConditionalFormatting: ValueBackgroundConditionalFormattingSettings = new ValueBackgroundConditionalFormattingSettings();
    public dataBarsConditionalFormatting: DataBarsConditionalFormattingSettings = new DataBarsConditionalFormattingSettings();
    public dataBarsFormatting: DataBarsFormattingSettings = new DataBarsFormattingSettings();
    public dataBarMarkers: DataBarMarkersSettings = new DataBarMarkersSettings();
    public totals: TotalsSettings = new TotalsSettings();
    public columnTotals: ColumnTotalsSettings = new ColumnTotalsSettings();
    public subTotals: SubTotalsSettings = new SubTotalsSettings();
    public gridMenu: GridSettings = new GridSettings();
    public columnWidth: ColumnWidthSettings = new ColumnWidthSettings();

    public cards: FormattingSettingsCard[] = [this.gridMenu, this.valuesMenu, this.totals, this.columnTotals, this.subTotals, this.rowHeight, this.columnWidth, this.columnHeaders, this.specificColumn, this.dataBarsFormatting, this.dataBarMarkers, this.categoryConditionalFormatting, this.valueConditionalFormatting, this.dataBarsConditionalFormatting, this.valueBackgroundConditionalFormatting];
}