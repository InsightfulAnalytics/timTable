import "./../style/visual.less";
import powerbi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import EnumerateVisualObjectInstancesOptions = powerbi.EnumerateVisualObjectInstancesOptions;
import VisualObjectInstance = powerbi.VisualObjectInstance;
import VisualObjectInstanceEnumerationObject = powerbi.VisualObjectInstanceEnumerationObject;
export declare class Visual implements IVisual {
    private static readonly columnPathSeparator;
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
    private cellSelectionMap;
    private manualColumnWidths;
    private lastColumnWidthSnapshot;
    private colElements;
    private numRowHeaderCols;
    private focusedRowIdx;
    private focusedColIdx;
    constructor(options: VisualConstructorOptions);
    /**
     * Apply ARIA roles, indices, and roving tabindex to all rows/cells. Call after every
     * render so dynamically generated DOM is keyboard- and screen-reader accessible.
     */
    private applyAccessibilityAttributes;
    /**
     * Move focus to the cell at (rowIdx, colIdx). Updates roving tabindex.
     */
    private focusCell;
    /**
     * Keyboard navigation handler for the grid. Arrow keys move focus, Home/End jump
     * to row edges, Ctrl+Home/End to grid corners, Enter/Space activate the cell
     * (triggers the same selection logic as a mouse click).
     */
    private handleKeyDown;
    getFormattingModel(): any;
    private getCellsInLogicalColumn;
    private getSelectionKey;
    private getColumnPathKey;
    private columnPathMatches;
    private applyManualWidths;
    private persistManualWidths;
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
