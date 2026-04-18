import "./../style/visual.less";
import powerbi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import EnumerateVisualObjectInstancesOptions = powerbi.EnumerateVisualObjectInstancesOptions;
import VisualObjectInstance = powerbi.VisualObjectInstance;
import VisualObjectInstanceEnumerationObject = powerbi.VisualObjectInstanceEnumerationObject;
export declare class Visual implements IVisual {
    private tableContainer;
    private table;
    private formattingSettingsService;
    private visualSettings;
    private dataView;
    private host;
    private tooltipService;
    private selectionManager;
    private rowSelectionIds;
    private colSelectionIds;
    private manualColumnWidths;
    private lastColumnWidthSnapshot;
    private colElements;
    private numRowHeaderCols;
    constructor(options: VisualConstructorOptions);
    getFormattingModel(): any;
    private getCellsInLogicalColumn;
    private applyManualWidths;
    private syncTableWidth;
    private refreshStickyLeft;
    private attachResizeHandles;
    private startGroupResize;
    private startColumnResize;
    private addTooltip;
    enumerateObjectInstances(options: EnumerateVisualObjectInstancesOptions): VisualObjectInstance[] | VisualObjectInstanceEnumerationObject;
    update(options: VisualUpdateOptions): void;
    /**
     * Dim unselected rows when a selection is active (PBI cross-filtering).
     */
    private syncSelectionOpacity;
}
