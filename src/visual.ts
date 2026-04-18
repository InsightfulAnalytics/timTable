/*
*  Power BI Visual CLI
*
*  Copyright (c) Microsoft Corporation
*  All rights reserved.
*  MIT License
*
*  Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the ""Software""), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
*
*  The above copyright notice and this permission notice shall be included in
*  all copies or substantial portions of the Software.
*
*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
*  THE SOFTWARE.
*/
"use strict";

import "./../style/visual.less";
import powerbi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import DataView = powerbi.DataView;
import EnumerateVisualObjectInstancesOptions = powerbi.EnumerateVisualObjectInstancesOptions;
import VisualObjectInstance = powerbi.VisualObjectInstance;
import VisualObjectInstanceEnumerationObject = powerbi.VisualObjectInstanceEnumerationObject;
import { VisualSettings } from "./settings";
import { FormattingSettingsService, formattingSettings } from "powerbi-visuals-utils-formattingmodel";
import { dataViewObjects, dataViewWildcard } from "powerbi-visuals-utils-dataviewutils";
import { valueFormatter } from "powerbi-visuals-utils-formattingutils";
import ITooltipService = powerbi.extensibility.ITooltipService;
import VisualTooltipDataItem = powerbi.extensibility.VisualTooltipDataItem;

export class Visual implements IVisual {
    private tableContainer: HTMLDivElement;
    private table: HTMLTableElement;
    private formattingSettingsService: FormattingSettingsService;
    private visualSettings: VisualSettings;
    private dataView: DataView;
    private host: powerbi.extensibility.visual.IVisualHost;
    private tooltipService: ITooltipService;
    private manualColumnWidths: Map<number, number> = new Map();
    private lastColumnWidthSnapshot: string = "";
    private colElements: HTMLElement[] = [];
    private numRowHeaderCols: number = 0;

    constructor(options: VisualConstructorOptions) {
        this.host = options.host;
        this.tooltipService = this.host.tooltipService;
        this.tableContainer = document.createElement("div");
        this.tableContainer.className = "table-container";
        options.element.appendChild(this.tableContainer);

        this.table = document.createElement('table');
        this.table.className = 'pbi-table';
        this.tableContainer.appendChild(this.table);

        this.formattingSettingsService = new FormattingSettingsService();
        this.visualSettings = new VisualSettings();
    }

    public getFormattingModel(): any {
        return this.formattingSettingsService.buildFormattingModel(this.visualSettings);
    }

    private getCellsInLogicalColumn(logicalColIdx: number): HTMLTableCellElement[] {
        const cells: HTMLTableCellElement[] = [];
        for (let r = 0; r < this.table.rows.length; r++) {
            const row = this.table.rows[r];
            let logicalIdx = 0;
            for (let c = 0; c < row.cells.length; c++) {
                const cell = row.cells[c];
                const span = cell.colSpan || 1;
                if (logicalColIdx >= logicalIdx && logicalColIdx < logicalIdx + span) {
                    if (span === 1) {
                        cells.push(cell);
                    }
                    break;
                }
                logicalIdx += span;
            }
        }
        return cells;
    }

    private applyManualWidths(): void {
        this.manualColumnWidths.forEach((width, colIdx) => {
            const cells = this.getCellsInLogicalColumn(colIdx);
            cells.forEach(cell => {
                cell.style.width = `${width}px`;
                cell.style.minWidth = `${width}px`;
                cell.style.maxWidth = `${width}px`;
            });
            if (this.colElements[colIdx]) {
                this.colElements[colIdx].style.width = `${width}px`;
            }
        });
        this.syncTableWidth();
    }

    private syncTableWidth(): void {
        if (this.colElements.length > 0) {
            let total = 0;
            this.colElements.forEach(col => { total += parseInt(col.style.width) || 0; });
            this.table.style.width = `${total}px`;
        }
    }

    private refreshStickyLeft(): void {
        const allRows = Array.from(this.table.rows);
        for (let r = 0; r < allRows.length; r++) {
            const row = allRows[r];
            const isHeaderRow = row.className.indexOf('table-header-row') >= 0;
            let leftOffset = 0;
            for (let c = 0; c < row.cells.length; c++) {
                const cell = row.cells[c];
                if (cell.style.position === 'sticky' && cell.style.left !== undefined && cell.style.left !== '') {
                    cell.style.left = `${leftOffset}px`;
                    leftOffset += cell.offsetWidth || parseInt(cell.style.width) || 0;
                } else if (isHeaderRow && c < this.numRowHeaderCols) {
                    // Header corner cells that are sticky
                    cell.style.left = `${leftOffset}px`;
                    leftOffset += cell.offsetWidth || parseInt(cell.style.width) || 0;
                } else {
                    break;
                }
            }
        }
    }

    private attachResizeHandles(): void {
        const headerRows = this.table.querySelectorAll('.table-header-row');
        if (headerRows.length === 0) return;

        for (let rowIdx = 0; rowIdx < headerRows.length; rowIdx++) {
            const headerRow = headerRows[rowIdx] as HTMLTableRowElement;

            for (let i = 0; i < headerRow.cells.length; i++) {
                const cell = headerRow.cells[i] as HTMLTableCellElement;
                // position:sticky already creates a containing block for absolute children;
                // only fall back to relative if not sticky
                if (!cell.style.position || cell.style.position === 'static') {
                    cell.style.position = 'relative';
                }

                const handle = document.createElement('div');
                handle.className = 'resize-handle';

                // Compute the logical column index of the RIGHT edge of this cell
                // (i.e. the last logical column covered by this cell's colspan)
                let logicalIdx = 0;
                for (let c = 0; c < i; c++) {
                    logicalIdx += headerRow.cells[c].colSpan || 1;
                }
                const span = cell.colSpan || 1;
                const rightmostLogicalIdx = logicalIdx + span - 1;

                handle.addEventListener('mousedown', (e: MouseEvent) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (span === 1) {
                        // Single-column cell: resize just that column
                        this.startColumnResize(e, rightmostLogicalIdx);
                    } else {
                        // Multi-span cell: resize all child columns proportionally
                        this.startGroupResize(e, logicalIdx, span);
                    }
                });

                cell.appendChild(handle);
            }
        }
    }

    private startGroupResize(e: MouseEvent, startLogicalIdx: number, span: number): void {
        const startX = e.clientX;

        // Collect starting widths for each logical column in the group
        const startWidths: number[] = [];
        let totalStartWidth = 0;
        for (let s = 0; s < span; s++) {
            const colIdx = startLogicalIdx + s;
            const cells = this.getCellsInLogicalColumn(colIdx);
            const w = cells.length > 0 ? cells[0].offsetWidth : (this.colElements[colIdx] ? parseInt(this.colElements[colIdx].style.width) || 100 : 100);
            startWidths.push(w);
            totalStartWidth += w;
        }

        document.body.style.cursor = 'col-resize';
        document.body.style.userSelect = 'none';

        const applyGroupWidth = (delta: number) => {
            const newTotalWidth = Math.max(30 * span, totalStartWidth + delta);
            const scale = newTotalWidth / totalStartWidth;
            for (let s = 0; s < span; s++) {
                const colIdx = startLogicalIdx + s;
                const newW = Math.max(30, Math.round(startWidths[s] * scale));
                const cells = this.getCellsInLogicalColumn(colIdx);
                cells.forEach(cell => {
                    cell.style.width = `${newW}px`;
                    cell.style.minWidth = `${newW}px`;
                    cell.style.maxWidth = `${newW}px`;
                });
                if (this.colElements[colIdx]) {
                    this.colElements[colIdx].style.width = `${newW}px`;
                }
            }
            this.syncTableWidth();
            this.refreshStickyLeft();
        };

        const onMouseMove = (moveEvent: MouseEvent) => {
            applyGroupWidth(moveEvent.clientX - startX);
        };

        const onMouseUp = (upEvent: MouseEvent) => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
            document.body.style.cursor = '';
            document.body.style.userSelect = '';

            const delta = upEvent.clientX - startX;
            const newTotalWidth = Math.max(30 * span, totalStartWidth + delta);
            const scale = newTotalWidth / totalStartWidth;
            for (let s = 0; s < span; s++) {
                const colIdx = startLogicalIdx + s;
                const newW = Math.max(30, Math.round(startWidths[s] * scale));
                this.manualColumnWidths.set(colIdx, newW);
                if (this.colElements[colIdx]) {
                    this.colElements[colIdx].style.width = `${newW}px`;
                }
            }
            this.syncTableWidth();
            this.refreshStickyLeft();
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }

    private startColumnResize(e: MouseEvent, logicalColIdx: number): void {
        const startX = e.clientX;
        const cells = this.getCellsInLogicalColumn(logicalColIdx);
        if (cells.length === 0) return;

        const startWidth = cells[0].offsetWidth;

        document.body.style.cursor = 'col-resize';
        document.body.style.userSelect = 'none';

        const onMouseMove = (moveEvent: MouseEvent) => {
            const delta = moveEvent.clientX - startX;
            const newWidth = Math.max(30, startWidth + delta);
            cells.forEach(cell => {
                cell.style.width = `${newWidth}px`;
                cell.style.minWidth = `${newWidth}px`;
                cell.style.maxWidth = `${newWidth}px`;
            });
            if (this.colElements[logicalColIdx]) {
                this.colElements[logicalColIdx].style.width = `${newWidth}px`;
            }
            this.syncTableWidth();
            this.refreshStickyLeft();
        };

        const onMouseUp = (upEvent: MouseEvent) => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
            document.body.style.cursor = '';
            document.body.style.userSelect = '';

            const delta = upEvent.clientX - startX;
            const newWidth = Math.max(30, startWidth + delta);
            this.manualColumnWidths.set(logicalColIdx, newWidth);
            if (this.colElements[logicalColIdx]) {
                this.colElements[logicalColIdx].style.width = `${newWidth}px`;
            }
            this.syncTableWidth();
            this.refreshStickyLeft();
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }

    private addTooltip(cell: HTMLTableCellElement, tooltipItems: VisualTooltipDataItem[]): void {
        cell.addEventListener("mouseover", (event: MouseEvent) => {
            const coordinates = [event.clientX, event.clientY];
            this.tooltipService.show({
                dataItems: tooltipItems,
                identities: [],
                coordinates: coordinates,
                isTouchEvent: false
            });
        });
        cell.addEventListener("mousemove", (event: MouseEvent) => {
            const coordinates = [event.clientX, event.clientY];
            this.tooltipService.move({
                dataItems: tooltipItems,
                identities: [],
                coordinates: coordinates,
                isTouchEvent: false
            });
        });
        cell.addEventListener("mouseout", () => {
            this.tooltipService.hide({
                immediately: true,
                isTouchEvent: false
            });
        });
    }

    public enumerateObjectInstances(options: EnumerateVisualObjectInstancesOptions): VisualObjectInstance[] | VisualObjectInstanceEnumerationObject {
        if (!this.dataView) return [];

        const objects = this.dataView.metadata?.objects || null;

        if (options.objectName === "subTotals") {
            const instances: VisualObjectInstance[] = [];

            const getVal = <T>(objs: any, propName: string, def: T): T => {
                if (!objs || !objs.subTotals) return def;
                const v = objs.subTotals[propName];
                return v !== undefined ? v as T : def;
            };

            // Row + Column subtotals
            const rowST = getVal(objects, "rowSubtotals", true);
            const colST = getVal(objects, "columnSubtotals", true);
            instances.push({
                objectName: "subTotals",
                selector: null,
                properties: { rowSubtotals: rowST, columnSubtotals: colST }
            });

            if (rowST) {
                const perLevel = getVal(objects, "perRowLevel", false);
                instances.push({ objectName: "subTotals", selector: null, properties: { perRowLevel: perLevel } });
                if (perLevel && this.dataView.matrix?.rows?.levels) {
                    for (const level of this.dataView.matrix.rows.levels) {
                        for (const source of level.sources) {
                            if (!source.isMeasure) {
                                const lvlObj = source.objects as any;
                                const enabled = lvlObj?.subTotals?.levelSubtotalEnabled !== undefined ? lvlObj.subTotals.levelSubtotalEnabled : true;
                                instances.push({ objectName: "subTotals", selector: { metadata: source.queryName } as any, displayName: source.displayName, properties: { levelSubtotalEnabled: enabled } });
                            }
                        }
                    }
                }
            }

            if (colST) {
                const perLevel = getVal(objects, "perColumnLevel", false);
                instances.push({ objectName: "subTotals", selector: null, properties: { perColumnLevel: perLevel } });
                if (perLevel && this.dataView.matrix?.columns?.levels) {
                    for (const level of this.dataView.matrix.columns.levels) {
                        for (const source of level.sources) {
                            if (!source.isMeasure) {
                                const lvlObj = source.objects as any;
                                const enabled = lvlObj?.subTotals?.levelSubtotalEnabled !== undefined ? lvlObj.subTotals.levelSubtotalEnabled : true;
                                instances.push({ objectName: "subTotals", selector: { metadata: source.queryName } as any, displayName: source.displayName, properties: { levelSubtotalEnabled: enabled } });
                            }
                        }
                    }
                }
            }

            return { instances };
        }

        return [];
    }

    public update(options: VisualUpdateOptions) {
        if (options.dataViews && options.dataViews[0]) {
            this.visualSettings = this.formattingSettingsService.populateFormattingSettingsModel(VisualSettings, options.dataViews[0]);
            this.dataView = options.dataViews[0];
        }
        
        // Fix for fractional pixel offsets blurring text when scrollbar is present
        this.tableContainer.style.width = Math.floor(options.viewport.width) + "px";
        this.tableContainer.style.height = Math.floor(options.viewport.height) + "px";

        const columnWidthSettings = this.visualSettings.columnWidth;
        const rowHeightSettings = this.visualSettings.rowHeight;
        const valuesSettings = this.visualSettings.valuesMenu;
        const cellItalic = valuesSettings.font.italic?.value || false;
        const cellUnderline = valuesSettings.font.underline?.value || false;
        const textColor = valuesSettings.textColor.value.value;
        const alternateTextColor = valuesSettings.alternateTextColor.value.value;
        const cellFontFamily = valuesSettings.font.fontFamily.value;
        const totalsSettings = this.visualSettings.totals;
        let showTotalRow = totalsSettings.showTotalRow.value;
        const totalRowItalic = totalsSettings.font.italic?.value || false;
        const totalRowWordWrap = totalsSettings.textWrap.value;
        const totalRowFontSize = totalsSettings.font.fontSize.value;
        const totalRowFontFamily = totalsSettings.font.fontFamily.value;

        const columnTotalsSettings = this.visualSettings.columnTotals;
        let showTotalColumn = columnTotalsSettings.showTotalColumn.value;
        const colTotalItalic = columnTotalsSettings.font.italic?.value || false;
        const colTotalWordWrap = columnTotalsSettings.textWrap.value;
        const colTotalFontSize = columnTotalsSettings.font.fontSize.value;
        const colTotalFontFamily = columnTotalsSettings.font.fontFamily.value;
        const colTotalBold = columnTotalsSettings.font.bold?.value || false;
        const colTotalUnderline = columnTotalsSettings.font.underline?.value || false;

        const categoryColumnWidth = columnWidthSettings.categoryColumnWidth.value;
        const categoryWordWrap = columnWidthSettings.categoryWordWrap.value;
        const valueWordWrap = valuesSettings.textWrap.value;
        const columnHeadersSettings = this.visualSettings.columnHeaders;
        const headerWordWrap = columnHeadersSettings.textWrap?.value || false;
        const columnWidth = columnWidthSettings.valueColumnWidth.value;
        const headerRowHeight = columnHeadersSettings.headerRowHeight.value;
        const valueRowHeight = rowHeightSettings.valueRowHeight.value;
        const alternateValueRowHeight = rowHeightSettings.alternateValueRowHeight.value;
        const totalRowHeight = rowHeightSettings.totalRowHeight.value;
        const headerFontSize = columnHeadersSettings.font.fontSize.value;
        const headerBold = columnHeadersSettings.font.bold.value;
        const headerItalic = columnHeadersSettings.font.italic.value;
        const headerUnderline = columnHeadersSettings.font.underline.value;
        const headerFontFamily = columnHeadersSettings.font.fontFamily.value;
        const headerAlignment = columnHeadersSettings.alignment.value;
        const cellFontSize = valuesSettings.font.fontSize.value;
        const valueBold = valuesSettings.font.bold?.value || false;
        const totalRowBold = totalsSettings.font.bold?.value || false;
        const totalRowUnderline = totalsSettings.font.underline?.value || false;
        const backgroundColor = valuesSettings.backgroundColor.value.value;
        const alternateBackgroundColor = valuesSettings.alternateBackgroundColor.value.value;
        const headerBackgroundColor = columnHeadersSettings.backgroundColor.value.value;
        const headerTextColor = columnHeadersSettings.textColor.value.value;

        const gridSettings = this.visualSettings.gridMenu;
        const gridBorderColor = gridSettings.horizontalGridColor.value.value;

        // ── Border section visibility logic ──
        const persistedBorderSection = (this.dataView?.metadata?.objects as any)?.grid?.borderSection;
        const borderSectionVal = typeof persistedBorderSection === "string"
            ? persistedBorderSection
            : (persistedBorderSection?.value || (gridSettings.borderSection.value as any)?.value || "all");
        // Match dropdown item
        const borderSectionItem = gridSettings.borderSection.items.find(i => (i as any).value === borderSectionVal);
        if (borderSectionItem) gridSettings.borderSection.value = borderSectionItem as any;

        const showAll = borderSectionVal === "all";
        const showColHeader = borderSectionVal === "columnHeaders";
        const showRowHeader = borderSectionVal === "rowHeaders";
        const showValues = borderSectionVal === "values";

        gridSettings.borderAllTop.visible = showAll;
        gridSettings.borderAllBottom.visible = showAll;
        gridSettings.borderAllLeft.visible = showAll;
        gridSettings.borderAllRight.visible = showAll;
        gridSettings.borderAllColor.visible = showAll;
        gridSettings.borderAllWidth.visible = showAll;
        gridSettings.borderAllTransparency.visible = showAll;

        gridSettings.borderColHeaderTop.visible = showColHeader;
        gridSettings.borderColHeaderBottom.visible = showColHeader;
        gridSettings.borderColHeaderLeft.visible = showColHeader;
        gridSettings.borderColHeaderRight.visible = showColHeader;
        gridSettings.borderColHeaderColor.visible = showColHeader;
        gridSettings.borderColHeaderWidth.visible = showColHeader;
        gridSettings.borderColHeaderTransparency.visible = showColHeader;

        gridSettings.borderRowHeaderTop.visible = showRowHeader;
        gridSettings.borderRowHeaderBottom.visible = showRowHeader;
        gridSettings.borderRowHeaderLeft.visible = showRowHeader;
        gridSettings.borderRowHeaderRight.visible = showRowHeader;
        gridSettings.borderRowHeaderColor.visible = showRowHeader;
        gridSettings.borderRowHeaderWidth.visible = showRowHeader;
        gridSettings.borderRowHeaderTransparency.visible = showRowHeader;

        gridSettings.borderValuesTop.visible = showValues;
        gridSettings.borderValuesBottom.visible = showValues;
        gridSettings.borderValuesLeft.visible = showValues;
        gridSettings.borderValuesRight.visible = showValues;
        gridSettings.borderValuesColor.visible = showValues;
        gridSettings.borderValuesWidth.visible = showValues;
        gridSettings.borderValuesTransparency.visible = showValues;

        // Rebuild border group slices to reflect visibility
        gridSettings.borderGroup.slices = [
            gridSettings.borderSection,
            gridSettings.borderAllTop, gridSettings.borderAllBottom, gridSettings.borderAllLeft, gridSettings.borderAllRight,
            gridSettings.borderAllColor, gridSettings.borderAllWidth, gridSettings.borderAllTransparency,
            gridSettings.borderColHeaderTop, gridSettings.borderColHeaderBottom, gridSettings.borderColHeaderLeft, gridSettings.borderColHeaderRight,
            gridSettings.borderColHeaderColor, gridSettings.borderColHeaderWidth, gridSettings.borderColHeaderTransparency,
            gridSettings.borderRowHeaderTop, gridSettings.borderRowHeaderBottom, gridSettings.borderRowHeaderLeft, gridSettings.borderRowHeaderRight,
            gridSettings.borderRowHeaderColor, gridSettings.borderRowHeaderWidth, gridSettings.borderRowHeaderTransparency,
            gridSettings.borderValuesTop, gridSettings.borderValuesBottom, gridSettings.borderValuesLeft, gridSettings.borderValuesRight,
            gridSettings.borderValuesColor, gridSettings.borderValuesWidth, gridSettings.borderValuesTransparency
        ];
        gridSettings.groups = [gridSettings.gridlinesGroup, gridSettings.borderGroup];
        const categoryCFSettings = this.visualSettings.categoryConditionalFormatting;
        const defaultCategoryTextColor = categoryCFSettings.textColor.value.value;
        // Read category CF applyTo — stored in metadata.objects since it has no selector
        let catCFApplyTo = "valuesOnly";
        const metaCatCF = (this.dataView?.metadata?.objects as any)?.categoryConditionalFormatting;
        if (metaCatCF?.applyTo) {
            const raw = metaCatCF.applyTo;
            catCFApplyTo = typeof raw === "string" ? raw : (raw?.value || "valuesOnly");
        } else {
            const modelVal = categoryCFSettings.applyTo.value;
            if (modelVal) {
                catCFApplyTo = typeof modelVal === "string" ? modelVal : ((modelVal as any)?.value || "valuesOnly");
            }
        }
        // Resolve the actual static category CF text color
        // With ConstantOrRule + InstancesAndTotals, PBI delivers the static color per-instance,
        // not at metadata level. Extract from the first data row's objects as fallback.
        let resolvedCatTextColor = defaultCategoryTextColor;
        if (metaCatCF?.textColor) {
            const metaColor = typeof metaCatCF.textColor === "string"
                ? metaCatCF.textColor
                : metaCatCF.textColor?.solid?.color;
            if (metaColor) resolvedCatTextColor = metaColor;
        }
        if (resolvedCatTextColor === defaultCategoryTextColor) {
            // Try categorical per-row objects
            const catCats = this.dataView?.categorical?.categories;
            if (catCats && catCats.length > 0 && catCats[0].objects) {
                for (let r = 0; r < catCats[0].objects.length; r++) {
                    if (catCats[0].objects[r]) {
                        const c = dataViewObjects.getFillColor(
                            catCats[0].objects[r],
                            { objectName: "categoryConditionalFormatting", propertyName: "textColor" }
                        );
                        if (c) { resolvedCatTextColor = c; break; }
                    }
                }
            }
            // Try matrix row children objects
            if (resolvedCatTextColor === defaultCategoryTextColor && this.dataView?.matrix) {
                const children = this.dataView.matrix.rows?.root?.children;
                if (children) {
                    for (let r = 0; r < children.length; r++) {
                        if (children[r].objects && !children[r].isSubtotal) {
                            const c = dataViewObjects.getFillColor(
                                children[r].objects,
                                { objectName: "categoryConditionalFormatting", propertyName: "textColor" }
                            );
                            if (c) { resolvedCatTextColor = c; break; }
                        }
                    }
                }
            }
        }
        const valueCFSettings = this.visualSettings.valueConditionalFormatting;
        valueCFSettings.slices = []; // Will be populated dynamically per-measure
        const valueBgCFSettings = this.visualSettings.valueBackgroundConditionalFormatting;
        valueBgCFSettings.slices = []; // Will be populated dynamically per-measure

        totalsSettings.categorySelectionGroup.slices = [
            totalsSettings.series,
            totalsSettings.showTotalRow
        ];
        totalsSettings.totalsFormattingGroup.slices = [
            totalsSettings.font,
            totalsSettings.textWrap
        ];
        totalsSettings.groups = [
            totalsSettings.categorySelectionGroup,
            totalsSettings.totalsFormattingGroup
        ];

        columnTotalsSettings.columnSelectionGroup.slices = [
            columnTotalsSettings.series,
            columnTotalsSettings.showTotalColumn
        ];
        columnTotalsSettings.columnTotalsFormattingGroup.slices = [
            columnTotalsSettings.font,
            columnTotalsSettings.textWrap
        ];
        columnTotalsSettings.groups = [
            columnTotalsSettings.columnSelectionGroup,
            columnTotalsSettings.columnTotalsFormattingGroup
        ];

        const dataBarsSettings = this.visualSettings.dataBarsFormatting;

        const dataBarsCFSettings = this.visualSettings.dataBarsConditionalFormatting;
        dataBarsCFSettings.slices = []; // Will be populated dynamically per-measure

        const dataBarMarkersSettings = this.visualSettings.dataBarMarkers;
        dataBarMarkersSettings.slices = []; // Will be populated dynamically per-measure

        // Reset columnWidth slices: base slices always shown, per-measure slices added dynamically when not aligned
        if (columnWidthSettings.alignedColumns.value) {
            columnWidthSettings.slices = [columnWidthSettings.categoryColumnWidth, columnWidthSettings.alignedColumns, columnWidthSettings.valueColumnWidth];
        } else {
            columnWidthSettings.slices = [columnWidthSettings.categoryColumnWidth, columnWidthSettings.alignedColumns];
            // Per-measure width slices will be added in the values.forEach loop below
        }

        // Helper function to convert hex to rgba
        const applyTransparency = (hex: string, transparencyPct: number): string => {
            if (!hex) return hex;
            // Clean up CF hex values: strip leading minus, ensure # prefix, take first 7 chars
            let cleaned = hex.replace(/^-/, '');
            if (!cleaned.startsWith("#")) cleaned = "#" + cleaned;
            if (cleaned.length === 9) cleaned = cleaned.substring(0, 7); // #RRGGBBAA -> #RRGGBB
            let alpha = Math.max(0, Math.min(1, 1 - (transparencyPct / 100)));
            if (cleaned.startsWith("#")) {
                let r = 0, g = 0, b = 0;
                if (cleaned.length === 4) {
                    r = parseInt(cleaned[1] + cleaned[1], 16);
                    g = parseInt(cleaned[2] + cleaned[2], 16);
                    b = parseInt(cleaned[3] + cleaned[3], 16);
                } else if (cleaned.length === 7) {
                    r = parseInt(cleaned[1] + cleaned[2], 16);
                    g = parseInt(cleaned[3] + cleaned[4], 16);
                    b = parseInt(cleaned[5] + cleaned[6], 16);
                }
                return `rgba(${r}, ${g}, ${b}, ${alpha})`;
            }
            return hex; // fallback if not hex
        };

        // Helper: parse hex color to RGB
        const hexToRgb = (hex: string): [number, number, number] | null => {
            if (!hex) return null;
            let c = hex.replace(/^-/, '');
            if (!c.startsWith("#")) c = "#" + c;
            if (c.length === 9) c = c.substring(0, 7);
            if (c.length === 4) {
                return [parseInt(c[1]+c[1],16), parseInt(c[2]+c[2],16), parseInt(c[3]+c[3],16)];
            } else if (c.length === 7) {
                return [parseInt(c.substring(1,3),16), parseInt(c.substring(3,5),16), parseInt(c.substring(5,7),16)];
            }
            return null;
        };
        const rgbToHex = (r: number, g: number, b: number): string => {
            return "#" + [r,g,b].map(v => Math.max(0,Math.min(255,Math.round(v))).toString(16).padStart(2,'0')).join('');
        };

        // Helper: interpolate a color for a given value from sorted (value, color) pairs
        const interpolateCFColor = (targetValue: number, pairs: {value: number, color: string}[]): string | null => {
            if (pairs.length === 0) return null;
            if (pairs.length === 1) return pairs[0].color;
            if (targetValue <= pairs[0].value) return pairs[0].color;
            if (targetValue >= pairs[pairs.length - 1].value) return pairs[pairs.length - 1].color;
            // Find the two surrounding pairs
            for (let k = 0; k < pairs.length - 1; k++) {
                if (targetValue >= pairs[k].value && targetValue <= pairs[k+1].value) {
                    const range = pairs[k+1].value - pairs[k].value;
                    if (range === 0) return pairs[k].color;
                    const t = (targetValue - pairs[k].value) / range;
                    const c1 = hexToRgb(pairs[k].color);
                    const c2 = hexToRgb(pairs[k+1].color);
                    if (!c1 || !c2) return pairs[k].color;
                    return rgbToHex(
                        c1[0] + (c2[0] - c1[0]) * t,
                        c1[1] + (c2[1] - c1[1]) * t,
                        c1[2] + (c2[2] - c1[2]) * t
                    );
                }
            }
            return pairs[pairs.length - 1].color;
        };

        const horizLines = gridSettings.horizontalGridlines.value;
        const horizColor = applyTransparency(gridSettings.horizontalGridColor.value.value, gridSettings.horizontalGridTransparency.value);
        const horizWidth = gridSettings.horizontalGridWidth.value;
        const horizBorderValue = horizLines ? `${horizWidth}px solid ${horizColor}` : 'hidden';
        const horizBorder2xValue = horizLines ? `${horizWidth * 2}px solid ${horizColor}` : 'hidden';
        const horizBorderValueOn = `${horizWidth}px solid ${horizColor}`;
        const horizBorder2xValueOn = `${horizWidth * 2}px solid ${horizColor}`;

        const vertLines = gridSettings.verticalGridlines.value;
        const vertColor = applyTransparency(gridSettings.verticalGridColor.value.value, gridSettings.verticalGridTransparency.value);
        const vertWidth = gridSettings.verticalGridWidth.value;
        const vertBorderValue = vertLines ? `${vertWidth}px solid ${vertColor}` : 'none';

        // ── Border settings per section ──
        // Helper to build a CSS border string from border settings
        const buildBorder = (on: boolean, width: number, color: string, transparency: number): string => {
            if (!on) return '';
            return `${width}px solid ${applyTransparency(color, transparency)}`;
        };

        // Read "All" border settings
        const bAllTop = gridSettings.borderAllTop.value;
        const bAllBottom = gridSettings.borderAllBottom.value;
        const bAllLeft = gridSettings.borderAllLeft.value;
        const bAllRight = gridSettings.borderAllRight.value;
        const bAllColor = gridSettings.borderAllColor.value.value;
        const bAllWidth = gridSettings.borderAllWidth.value;
        const bAllTransparency = gridSettings.borderAllTransparency.value;

        // Read section-specific settings, falling back to "All" via OR
        const borderFor = (sectionTop: boolean, sectionBottom: boolean, sectionLeft: boolean, sectionRight: boolean,
            sectionColor: string, sectionWidth: number, sectionTransparency: number) => {
            // If any section-specific toggle is on, use section-specific colour/width/transparency
            const anySection = sectionTop || sectionBottom || sectionLeft || sectionRight;
            return {
                top: buildBorder(sectionTop || bAllTop, anySection ? sectionWidth : bAllWidth, anySection && sectionTop ? sectionColor : bAllColor, anySection && sectionTop ? sectionTransparency : bAllTransparency),
                bottom: buildBorder(sectionBottom || bAllBottom, anySection ? sectionWidth : bAllWidth, anySection && sectionBottom ? sectionColor : bAllColor, anySection && sectionBottom ? sectionTransparency : bAllTransparency),
                left: buildBorder(sectionLeft || bAllLeft, anySection ? sectionWidth : bAllWidth, anySection && sectionLeft ? sectionColor : bAllColor, anySection && sectionLeft ? sectionTransparency : bAllTransparency),
                right: buildBorder(sectionRight || bAllRight, anySection ? sectionWidth : bAllWidth, anySection && sectionRight ? sectionColor : bAllColor, anySection && sectionRight ? sectionTransparency : bAllTransparency),
            };
        };

        const colHeaderBorders = borderFor(
            gridSettings.borderColHeaderTop.value, gridSettings.borderColHeaderBottom.value,
            gridSettings.borderColHeaderLeft.value, gridSettings.borderColHeaderRight.value,
            gridSettings.borderColHeaderColor.value.value, gridSettings.borderColHeaderWidth.value, gridSettings.borderColHeaderTransparency.value
        );
        const rowHeaderBorders = borderFor(
            gridSettings.borderRowHeaderTop.value, gridSettings.borderRowHeaderBottom.value,
            gridSettings.borderRowHeaderLeft.value, gridSettings.borderRowHeaderRight.value,
            gridSettings.borderRowHeaderColor.value.value, gridSettings.borderRowHeaderWidth.value, gridSettings.borderRowHeaderTransparency.value
        );
        const valuesBorders = borderFor(
            gridSettings.borderValuesTop.value, gridSettings.borderValuesBottom.value,
            gridSettings.borderValuesLeft.value, gridSettings.borderValuesRight.value,
            gridSettings.borderValuesColor.value.value, gridSettings.borderValuesWidth.value, gridSettings.borderValuesTransparency.value
        );

        // Canvas-based text measurement for dynamic data bar label margins
        let _measureCanvas: HTMLCanvasElement | null = null;
        const measureTextWidth = (text: string, font: string): number => {
            if (!_measureCanvas) _measureCanvas = document.createElement("canvas");
            const ctx = _measureCanvas.getContext("2d");
            if (ctx) { ctx.font = font; return ctx.measureText(text).width; }
            return text.length * 7;
        };
        const computeLabelMarginPct = (text: string, cellWidthPx: number, font: string): number => {
            const textW = measureTextWidth(text, font);
            return Math.min(50, Math.max(5, ((textW + 8) / cellWidthPx) * 100));
        };

        // Helper function to get text color for a category row, supporting conditional formatting

        const formatValue = (num: number, formatString: string, units: number, decimals: number): string => {
            let options: any = { format: formatString };
            let finalNum = num;

            // Handle DAX trailing comma scaling (e.g. #,0, or #,0;) since valueFormatter doesn't support it natively
            if (formatString) {
                const sections = formatString.split(';');
                // DAX format strings can have up to 3 sections: Positive;Negative;Zero
                let sectionIndex = 0;
                if (num < 0 && sections.length > 1) sectionIndex = 1;
                else if (num === 0 && sections.length > 2) sectionIndex = 2;
                
                let activeSection = sections[sectionIndex];
                if (activeSection) {
                    // Safe regex to find trailing commas ignoring non-digit formatting characters at the end
                    const commaScaleRegex = /(,+)(?=[^\d,#0]*$)/;
                    const match = activeSection.match(commaScaleRegex);
                    if (match) {
                        const commas = match[1];
                        if (!units) {
                            finalNum = finalNum / Math.pow(1000, commas.length);
                        }
                        sections[sectionIndex] = activeSection.replace(commaScaleRegex, '');
                        options.format = sections.join(';');
                    }
                }
            }

            if (units !== 0 && units !== undefined && units !== null) {
                options.value = units;
            }
            if (decimals !== null && decimals !== undefined) {
                options.precision = decimals;
            }
            const formatter = valueFormatter.create(options);
            return formatter.format(finalNum);
        };

        const getCategoryTextColor = (rowIndex: number, dataView: DataView, isTotal: boolean = false): string => {
            // Determine if CF should apply based on applyTo setting
            const shouldApply = (catCFApplyTo === "valuesAndTotals") ||
                (catCFApplyTo === "valuesOnly" && !isTotal) ||
                (catCFApplyTo === "totalsOnly" && isTotal);

            if (!shouldApply) {
                // When applyTo excludes this row type, return the base text color (no static CF color)
                return textColor;
            }

            // Check categorical per-row objects (categorical mode)
            if (dataView.categorical && dataView.categorical.categories && dataView.categorical.categories.length > 0) {
                const category = dataView.categorical.categories[0];
                if (category.objects && category.objects[rowIndex]) {
                    const color = dataViewObjects.getFillColor(
                        category.objects[rowIndex],
                        { objectName: "categoryConditionalFormatting", propertyName: "textColor" }
                    );
                    if (color) {
                        return color;
                    }
                }
            }

            // Check matrix row-level objects
            if (dataView.matrix) {
                const root = dataView.matrix.rows?.root;
                if (root?.children && root.children[rowIndex]?.objects) {
                    const color = dataViewObjects.getFillColor(
                        root.children[rowIndex].objects,
                        { objectName: "categoryConditionalFormatting", propertyName: "textColor" }
                    );
                    if (color) {
                        return color;
                    }
                }
            }

            return resolvedCatTextColor;
        };

        // Helper function to apply squashing row height
        const applyRowSquash = (cell: HTMLElement, rowHeight: number, fontSize: number, wordWrap: boolean) => {
            if (rowHeight <= 2) {
                cell.style.fontSize = "0px";
                cell.style.color = "transparent";
                cell.style.padding = "0px";
                cell.style.lineHeight = "0px";
                cell.style.height = `${rowHeight}px`;
            } else {
                cell.style.fontSize = `${Math.min(fontSize, Math.max(8, rowHeight - 6))}px`;
                cell.style.height = `${rowHeight}px`;
                cell.style.padding = ""; // fallback to CSS padding
                if (!wordWrap) {
                    cell.style.lineHeight = `${rowHeight}px`;
                } else {
                    cell.style.lineHeight = "normal";
                }
            }
        };

        const applyVerticalGridBorder = (cell: HTMLElement, isLastCell: boolean) => {
            if (!isLastCell) {
                cell.style.borderRight = vertBorderValue;
            } else {
                cell.style.borderRight = "none";
            }
        };

        const applyTotalRowStyles = (cell: HTMLElement, width: number, wordWrap: boolean) => {
            cell.style.width = `${width}px`;
            cell.style.minWidth = `${width}px`;
            cell.style.maxWidth = `${width}px`;
            applyRowSquash(cell, totalRowHeight, totalRowFontSize, wordWrap);
            cell.style.fontWeight = totalRowBold ? "bold" : "normal";
            cell.style.textDecoration = totalRowUnderline ? "underline" : "none";
            cell.style.fontFamily = totalRowFontFamily;
            cell.style.fontStyle = totalRowItalic ? "italic" : "normal";
            cell.style.backgroundColor = backgroundColor;
            cell.style.color = textColor;
            cell.style.overflow = "hidden";
            cell.style.textOverflow = "ellipsis";
            cell.style.whiteSpace = wordWrap ? "normal" : "nowrap";
            if (wordWrap) {
                cell.style.wordBreak = "break-word";
            }
        }
        // Helper function to get background color for a row, supporting conditional formatting
        const getRowBackgroundColor = (rowIndex: number, isEvenRow: boolean, dataView: DataView): string => {
            const targetColorProp = isEvenRow ? "backgroundColor" : "alternateBackgroundColor";
            const defaultColor = isEvenRow ? backgroundColor : alternateBackgroundColor;

            if (dataView.categorical && dataView.categorical.categories && dataView.categorical.categories.length > 0) {
                const category = dataView.categorical.categories[0];
                if (category.objects && category.objects[rowIndex]) {
                    const color = dataViewObjects.getFillColor(
                        category.objects[rowIndex],
                        { objectName: "table", propertyName: targetColorProp }
                    );
                    if (color) {
                        return color;
                    }
                }
            }
            return defaultColor;
        };

        // Helper function to get row background color, supporting conditional formatting
        while (this.table.firstChild) {
            this.table.removeChild(this.table.firstChild);
        }

        this.dataView = options.dataViews[0];

        if (!options.dataViews || options.dataViews.length === 0) {
            let row = this.table.insertRow();
            let cell = row.insertCell();
            cell.textContent = "No data available";
            return;
        }

        let dataView: DataView = options.dataViews[0];

        // Store matrix subtotal values for "Measure" total behavior
        let matrixSubtotalValues: { [queryName: string]: number } = {};

        let hasCategories: boolean;
        let categories: any;
        let values: any;

        // Column grouping support (matrix columns field)
        let hasColumnGrouping = false;
        let columnLeaves: { path: any[] }[] = [];
        let columnHeaderGroups: { label: string, span: number }[][] = [];
        let columnLevelNames: string[] = [];
        let storedFlatRows: any[] = null;
        let storedMeasureCount = 0;
        let storedRoot: any = null;
        let storedSubtotalChild: any = null;
        let columnSubtotalValueKeys: number[] = []; // value key indices for column subtotal leaves (for "Measure" column totals)

        // Extract data from matrix structure (primary path with matrix-only mapping)
        if (dataView.matrix && dataView.matrix.rows && dataView.matrix.rows.root) {
            const matrixRows = dataView.matrix.rows;
            const root = matrixRows.root;
            const allChildren = root.children || [];
            const subtotalChild = allChildren.find((c: any) => c.isSubtotal);
            const vSources = dataView.matrix.valueSources || [];

            const hasCatLevel = matrixRows.levels && matrixRows.levels.length > 0 && matrixRows.levels[0].sources.length > 0;
            hasCategories = hasCatLevel;

            let flatRows: any[] = [];
            const flattenNode = (node: any, depth: number = 0, currentPath: any[] = []) => {
                const subTChild = (node.children || []).find((c: any) => c.isSubtotal);
                const nodeVals = node.values || subTChild?.values || {};
                
                let newPath = [...currentPath];
                newPath[depth] = node.value != null ? node.value : undefined;
                
                // Fill any missing levels with empty strings for tabular alignment
                const maxLevel = matrixRows.levels ? matrixRows.levels.length : 1;
                const pathArray = Array.from({ length: maxLevel }, (_, i) => {
                    const val = newPath[i];
                    if (val !== undefined && val !== "") return val;
                    if (node.isSubtotal && i === depth) return "Total";
                    return "";
                });

                const hasRegularChildren = node.children && node.children.some((c: any) => !c.isSubtotal);

                if (!hasRegularChildren || node.isSubtotal) {
                    flatRows.push({
                        value: newPath[depth] || "Total",
                        path: pathArray,
                        identity: node.identity,
                        objects: node.objects,
                        rawValues: nodeVals,
                        isSubtotal: !!node.isSubtotal,
                        depth: depth
                    });
                }
                
                if (node.children) {
                    node.children.filter((c: any) => !c.isSubtotal).forEach((c: any) => {
                        flattenNode(c, depth + 1, newPath);
                    });
                    
                    // Add subtotals at the end of the group
                    const stChild = node.children.find((c: any) => c.isSubtotal);
                    if (stChild) {
                         flattenNode(stChild, depth + 1, newPath);
                    }
                }
            };
            
            allChildren.filter((c: any) => !c.isSubtotal).forEach((c: any) => {
                flattenNode(c, 0, []);
            });

            if (hasCatLevel) {
                categories = {
                    sources: matrixRows.levels.map((l: any) => l.sources[0]),
                    source: matrixRows.levels[0].sources[0],
                    values: flatRows.map(r => r.value),
                    paths: flatRows.map(r => r.path),
                    objects: flatRows.map(r => r.objects || undefined),
                    identity: flatRows.map(r => r.identity)
                };
            } else {
                categories = null;
            }

            // Build values array (DataViewValueColumn-compatible objects)
            values = vSources.map((vs, mIdx) => ({
                source: vs,
                values: flatRows.map(r => r.rawValues[mIdx]?.value ?? null),
                objects: flatRows.map(r => r.rawValues[mIdx]?.objects || undefined)
            }));

            // Store references for column expansion later
            storedFlatRows = flatRows;
            storedMeasureCount = vSources.length || 1;
            storedRoot = root;
            storedSubtotalChild = subtotalChild;

            // Detect column grouping from the matrix columns hierarchy
            if (dataView.matrix.columns) {
                const matrixCols = dataView.matrix.columns;
                // Find the depth at which the measure level appears (so we stop before it)
                let measureLevelDepth = -1;
                if (matrixCols.levels) {
                    for (let i = 0; i < matrixCols.levels.length; i++) {
                        if (matrixCols.levels[i].sources.length > 0 && matrixCols.levels[i].sources[0].isMeasure) {
                            measureLevelDepth = i;
                            break;
                        }
                    }
                    columnLevelNames = matrixCols.levels
                        .filter(l => l.sources.length > 0 && !l.sources[0].isMeasure)
                        .map(l => l.sources[0].displayName);
                }
                hasColumnGrouping = columnLevelNames.length > 0;

                if (hasColumnGrouping && matrixCols.root.children && matrixCols.root.children.length > 0) {
                    // Flatten column tree to get leaf nodes, stopping before the measure level.
                    // Also track ALL leaves (including subtotals) to determine value key indices,
                    // because rawValues keys follow tree-order across all leaves including subtotals.
                    let allColumnLeafIndex = 0; // counter for ALL leaves (regular + subtotal) in tree order

                    const flattenCol = (node: any, path: any[], depth: number, isSubtotalBranch: boolean) => {
                        let newPath = [...path];
                        if (node.value !== undefined) newPath.push(node.value);
                        const allChildren = node.children || [];
                        const nonSubtotalChildren = allChildren.filter((c: any) => !c.isSubtotal);
                        const subtotalChildren = allChildren.filter((c: any) => c.isSubtotal);
                        const isSubtotal = isSubtotalBranch || !!node.isSubtotal;
                        // Stop recursing if the next level is the measure level
                        const nextIsMeasureLevel = measureLevelDepth >= 0 && (depth + 1) === measureLevelDepth;
                        if (nonSubtotalChildren.length === 0 && subtotalChildren.length === 0 || nextIsMeasureLevel) {
                            // This is a leaf node
                            if (isSubtotal) {
                                // Record the value key start index for this subtotal leaf
                                for (let m = 0; m < storedMeasureCount; m++) {
                                    columnSubtotalValueKeys.push(allColumnLeafIndex * storedMeasureCount + m);
                                }
                            } else {
                                columnLeaves.push({ path: newPath });
                            }
                            allColumnLeafIndex++;
                        } else {
                            // Recurse into non-subtotal children first (tree order)
                            nonSubtotalChildren.forEach((c: any) => flattenCol(c, newPath, depth + 1, isSubtotal));
                            // Then subtotal children
                            subtotalChildren.forEach((c: any) => flattenCol(c, newPath, depth + 1, true));
                        }
                    };
                    // Process all children (non-subtotal first, then subtotal) in tree order
                    const rootNonSubtotal = matrixCols.root.children.filter((c: any) => !c.isSubtotal);
                    const rootSubtotal = matrixCols.root.children.filter((c: any) => c.isSubtotal);
                    rootNonSubtotal.forEach((c: any) => flattenCol(c, [], 0, false));
                    rootSubtotal.forEach((c: any) => flattenCol(c, [], 0, true));

                    console.log('[timTable] column detection', JSON.stringify({
                        columnLevelNames,
                        measureLevelDepth,
                        columnLeafCount: columnLeaves.length,
                        columnLeafPaths: columnLeaves.map(l => l.path),
                        columnSubtotalValueKeys: columnSubtotalValueKeys,
                        allColumnLeafIndex: allColumnLeafIndex
                    }));

                    // Build column header grouping info for rendering multi-row headers
                    const M = storedMeasureCount;
                    for (let level = 0; level < columnLevelNames.length; level++) {
                        let groups: { label: string, span: number }[] = [];
                        let lastValue: string | null = null;
                        let currentSpan = 0;
                        columnLeaves.forEach(leaf => {
                            const val = leaf.path[level] !== undefined ? String(leaf.path[level]) : "";
                            if (val === lastValue) {
                                currentSpan += M;
                            } else {
                                if (lastValue !== null) groups.push({ label: lastValue, span: currentSpan });
                                lastValue = val;
                                currentSpan = M;
                            }
                        });
                        if (lastValue !== null) groups.push({ label: lastValue, span: currentSpan });
                        columnHeaderGroups.push(groups);
                    }
                }
            }

            // Extract subtotal values for "Measure" total
            // Path 1: subtotal child node (multi-level hierarchy)
            if (subtotalChild?.values) {
                vSources.forEach((vs, mIdx) => {
                    const stVal = subtotalChild.values[mIdx];
                    if (stVal && stVal.value !== null && stVal.value !== undefined) {
                        matrixSubtotalValues[vs.queryName] = Number(stVal.value);
                    }
                });
            }

            // Path 2: root.values (grand total at root level for single-level grouping)
            if (Object.keys(matrixSubtotalValues).length === 0 && root.values) {
                vSources.forEach((vs, mIdx) => {
                    const rootVal = root.values[mIdx];
                    if (rootVal && rootVal.value !== null && rootVal.value !== undefined) {
                        matrixSubtotalValues[vs.queryName] = Number(rootVal.value);
                    }
                });
            }

            // Debug: log subtotals found
            console.log('[timTable] matrix extraction', JSON.stringify({
                regularChildCount: flatRows.length,
                subtotalFound: !!subtotalChild,
                rootHasValues: !!root.values,
                rootKeys: Object.keys(root),
                subtotalValues: matrixSubtotalValues,
                measureCount: vSources.length,
                allChildCount: allChildren.length,
                childIsSubtotalFlags: allChildren.map((c: any) => ({ value: c.value, isSubtotal: c.isSubtotal, keys: Object.keys(c) }))
            }));

            // Populate dataView.categorical for helper functions that access it directly
            if (!dataView.categorical) {
                (dataView as any).categorical = {
                    categories: categories ? [categories] : [],
                    values: values
                };
            }
        } else if (dataView.categorical) {
            // Fallback to categorical if available
            hasCategories = dataView.categorical.categories && dataView.categorical.categories.length > 0;
            categories = hasCategories ? dataView.categorical.categories[0] : null;
            values = dataView.categorical.values || null;
        } else {
            let row = this.table.insertRow();
            let cell = row.insertCell();
            cell.textContent = "No data available";
            return;
        }

        if (!values || values.length === 0) {
            let row = this.table.insertRow();
            let cell = row.insertCell();
            cell.textContent = "No data available";
            return;
        }

        const switchValuesToRows = valuesSettings.switchValuesToRows?.value || false;
        let rowCount = hasCategories && categories.values ? categories.values.length : (values[0].values ? values[0].values.length : 1);

        // Pre-process measure settings to populate formatting model properly
        let measureHeaders: string[] = [];
        let measureHeaderOverrides: string[] = [];
        
interface MeasureSpecificSettings {
    // Values properties
    textColor: string | undefined;
    backgroundColor: string | undefined;
    alternateTextColor: string | undefined;
    alternateBackgroundColor: string | undefined;
    alignment: string | undefined;
    displayUnits: number;
    decimalPlaces: number;
    fontFamily: string | undefined;
    fontSize: number | undefined;
    bold: boolean | undefined;
    italic: boolean | undefined;
    underline: boolean | undefined;
    textWrap: boolean | undefined;
    horizontalGrid: boolean;
    transparency: number;
    // Header properties
    headerTextColor: string | undefined;
    headerBackgroundColor: string | undefined;
    headerAlignment: string | undefined;
    headerFontFamily: string | undefined;
    headerFontSize: number | undefined;
    headerBold: boolean | undefined;
    headerItalic: boolean | undefined;
    headerUnderline: boolean | undefined;
    headerTextWrap: boolean | undefined;
    headerHorizontalGrid: boolean;
    headerTransparency: number;
    // Total properties
    totalTextColor: string | undefined;
    totalBackgroundColor: string | undefined;
    totalAlignment: string | undefined;
    totalDisplayUnits: number;
    totalDecimalPlaces: number;
    totalFontFamily: string | undefined;
    totalFontSize: number | undefined;
    totalBold: boolean | undefined;
    totalItalic: boolean | undefined;
    totalUnderline: boolean | undefined;
    totalTextWrap: boolean | undefined;
    totalHorizontalGrid: boolean;
    totalTransparency: number;
}

          let measureSettingsList: MeasureSpecificSettings[] = [];
          let measureFormats: string[] = [];
          let valueColumnWidths: number[] = [];

          values.forEach((valueColumn) => {
              let specObj = valueColumn.source.objects?.specificColumn;
              let settings: MeasureSpecificSettings = {
                  textColor: dataViewObjects.getFillColor(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "textColor" }, undefined),
                  backgroundColor: dataViewObjects.getFillColor(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "backgroundColor" }, undefined),
                  alternateTextColor: dataViewObjects.getFillColor(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "alternateTextColor" }, undefined),
                  alternateBackgroundColor: dataViewObjects.getFillColor(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "alternateBackgroundColor" }, undefined),
                  alignment: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "alignment" }, undefined) as string | undefined,
                  displayUnits: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "displayUnits" }, 0),
                  decimalPlaces: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "decimalPlaces" }, null),
                  fontFamily: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "fontFamily" }, undefined) as string | undefined,
                  fontSize: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "fontSize" }, undefined) as number | undefined,
                  bold: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "bold" }, undefined) as boolean | undefined,
                  italic: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "italic" }, undefined) as boolean | undefined,
                  underline: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "underline" }, undefined) as boolean | undefined,
                  textWrap: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "textWrap" }, undefined) as boolean | undefined,
                  horizontalGrid: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "horizontalGrid" }, true),
                  transparency: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "transparency" }, 0),
                  // Header properties
                  headerTextColor: dataViewObjects.getFillColor(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "headerTextColor" }, undefined),
                  headerBackgroundColor: dataViewObjects.getFillColor(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "headerBackgroundColor" }, undefined),
                  headerAlignment: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "headerAlignment" }, undefined) as string | undefined,
                  headerFontFamily: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "headerFontFamily" }, undefined) as string | undefined,
                  headerFontSize: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "headerFontSize" }, undefined) as number | undefined,
                  headerBold: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "headerBold" }, undefined) as boolean | undefined,
                  headerItalic: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "headerItalic" }, undefined) as boolean | undefined,
                  headerUnderline: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "headerUnderline" }, undefined) as boolean | undefined,
                  headerTextWrap: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "headerTextWrap" }, undefined) as boolean | undefined,
                  headerHorizontalGrid: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "headerHorizontalGrid" }, true),
                  headerTransparency: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "headerTransparency" }, 0),
                  // Total properties
                  totalTextColor: dataViewObjects.getFillColor(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "totalTextColor" }, undefined),
                  totalBackgroundColor: dataViewObjects.getFillColor(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "totalBackgroundColor" }, undefined),
                  totalAlignment: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "totalAlignment" }, undefined) as string | undefined,
                  totalDisplayUnits: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "totalDisplayUnits" }, 0),
                  totalDecimalPlaces: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "totalDecimalPlaces" }, null),
                  totalFontFamily: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "totalFontFamily" }, undefined) as string | undefined,
                  totalFontSize: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "totalFontSize" }, undefined) as number | undefined,
                  totalBold: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "totalBold" }, undefined) as boolean | undefined,
                  totalItalic: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "totalItalic" }, undefined) as boolean | undefined,
                  totalUnderline: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "totalUnderline" }, undefined) as boolean | undefined,
                  totalTextWrap: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "totalTextWrap" }, undefined) as boolean | undefined,
                  totalHorizontalGrid: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "totalHorizontalGrid" }, true),
                  totalTransparency: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "totalTransparency" }, 0)
              };
              measureSettingsList.push(settings);
              measureFormats.push(valueColumn.source.format || "");

            let displayName = valueColumn.source.displayName || `Measure ${measureHeaders.length + 1}`;
            measureHeaders.push(displayName);
            
            let nameOverride = dataViewObjects.getValue<string>(
                valueColumn.source.objects || {},
                { objectName: "columnHeaders", propertyName: "nameOverride" },
                ""
            );
            measureHeaderOverrides.push(nameOverride !== "" ? nameOverride : displayName);

            const queryName = valueColumn.source.queryName;

              if (columnWidthSettings.alignedColumns.value) {
                valueColumnWidths.push(columnWidthSettings.valueColumnWidth.value);
              } else {
                const specificWidth = dataViewObjects.getValue<number>(
                    valueColumn.source.objects || {}, 
                    { objectName: "columnWidth", propertyName: "valueColumnWidth" },
                    columnWidthSettings.valueColumnWidth.value
                );
                valueColumnWidths.push(specificWidth);

                // Add per-measure width slice with selector so Power BI persists it per-measure
                columnWidthSettings.slices.push(new formattingSettings.NumUpDown({
                    name: "valueColumnWidth",
                    displayName: displayName + " Width",
                    value: specificWidth,
                    selector: { metadata: queryName }
                }));
              }

// Create the composite selector for per-row rule evaluation
              const wildcardSelector = dataViewWildcard.createDataViewWildcardSelector(
                  dataViewWildcard.DataViewWildcardMatchingOption.InstancesAndTotals
              );
              const compositeSelector = {
                  metadata: queryName,
                  data: wildcardSelector.data
              };

              // Build dynamic settings slice for this measure
              const defaultMeasureTextColor = dataViewObjects.getFillColor(
                          valueColumn.source.objects || {},
                          { objectName: "valueConditionalFormatting", propertyName: "textColor" },
                          textColor
                      );
            valueCFSettings.slices.push(new formattingSettings.ColorPicker({
                name: "textColor",
                displayName: displayName + " Text Color",
                value: { value: defaultMeasureTextColor },
                visible: true,
                selector: compositeSelector,
                altConstantSelector: { metadata: queryName },
                instanceKind: powerbi.VisualEnumerationInstanceKinds.ConstantOrRule
            }));

              // Read per-measure text color applyTo setting
              const txtApplyToRaw = dataViewObjects.getValue<any>(
                  valueColumn.source.objects || {},
                  { objectName: "valueConditionalFormatting", propertyName: "applyTo" },
                  "valuesOnly"
              );
              const txtApplyToItem = typeof txtApplyToRaw === "string"
                  ? { value: txtApplyToRaw, displayName: txtApplyToRaw === "valuesOnly" ? "Values only" : txtApplyToRaw === "valuesAndTotals" ? "Values and totals" : "Totals only" }
                  : txtApplyToRaw as unknown as powerbi.IEnumMember;

              valueCFSettings.slices.push(new formattingSettings.ItemDropdown({
                  name: "applyTo",
                  displayName: displayName + " Apply to",
                  value: txtApplyToItem,
                  items: [
                      { value: "valuesOnly", displayName: "Values only" },
                      { value: "valuesAndTotals", displayName: "Values and totals" },
                      { value: "totalsOnly", displayName: "Totals only" }
                  ],
                  visible: true,
                  selector: { metadata: queryName }
              }));

              const defaultMeasureBgColor = dataViewObjects.getFillColor(
                  valueColumn.source.objects || {},
                  { objectName: "valueBackgroundConditionalFormatting", propertyName: "backgroundColor" },
                  backgroundColor
              );

              // Read per-measure applyTo setting
              const bgApplyToRaw = dataViewObjects.getValue<any>(
                  valueColumn.source.objects || {},
                  { objectName: "valueBackgroundConditionalFormatting", propertyName: "applyTo" },
                  "valuesOnly"
              );
              const bgApplyToValue = typeof bgApplyToRaw === "string" ? bgApplyToRaw : (bgApplyToRaw?.value || "valuesOnly");
              const bgApplyToItem = typeof bgApplyToRaw === "string"
                  ? { value: bgApplyToRaw, displayName: bgApplyToRaw === "valuesOnly" ? "Values only" : bgApplyToRaw === "valuesAndTotals" ? "Values and totals" : "Totals only" }
                  : bgApplyToRaw as unknown as powerbi.IEnumMember;

              valueBgCFSettings.slices.push(new formattingSettings.ItemDropdown({
                  name: "applyTo",
                  displayName: displayName + " Apply to",
                  value: bgApplyToItem,
                  items: [
                      { value: "valuesOnly", displayName: "Values only" },
                      { value: "valuesAndTotals", displayName: "Values and totals" },
                      { value: "totalsOnly", displayName: "Totals only" }
                  ],
                  visible: true,
                  selector: { metadata: queryName }
              }));

              valueBgCFSettings.slices.push(new formattingSettings.ColorPicker({
                  name: "backgroundColor",
                  displayName: displayName + " Background Color",
                  value: { value: defaultMeasureBgColor },
                  visible: true,
                  selector: compositeSelector,
                  altConstantSelector: { metadata: queryName },
                  instanceKind: powerbi.VisualEnumerationInstanceKinds.ConstantOrRule
              }));

            // Data bar color CF: register per-measure slice on the simple card
            const defaultDataBarColor = dataViewObjects.getFillColor(
                valueColumn.source.objects || {},
                { objectName: "dataBarsConditionalFormatting", propertyName: "dataBarColor" },
                "#31b6fd"
            );

            // Read per-measure data bar applyTo setting
            const dbApplyToRaw = dataViewObjects.getValue<any>(
                valueColumn.source.objects || {},
                { objectName: "dataBarsConditionalFormatting", propertyName: "applyTo" },
                "valuesOnly"
            );
            const dbApplyToItem = typeof dbApplyToRaw === "string"
                ? { value: dbApplyToRaw, displayName: dbApplyToRaw === "valuesOnly" ? "Values only" : dbApplyToRaw === "valuesAndTotals" ? "Values and totals" : "Totals only" }
                : dbApplyToRaw as unknown as powerbi.IEnumMember;

            dataBarsCFSettings.slices.push(new formattingSettings.ItemDropdown({
                name: "applyTo",
                displayName: displayName + " Apply to",
                value: dbApplyToItem,
                items: [
                    { value: "valuesOnly", displayName: "Values only" },
                    { value: "valuesAndTotals", displayName: "Values and totals" },
                    { value: "totalsOnly", displayName: "Totals only" }
                ],
                visible: true,
                selector: { metadata: queryName }
            }));

            dataBarsCFSettings.slices.push(new formattingSettings.ColorPicker({
                name: "dataBarColor",
                displayName: displayName + " Data Bar Color",
                value: { value: defaultDataBarColor },
                visible: true,
                selector: compositeSelector,
                altConstantSelector: { metadata: queryName },
                instanceKind: powerbi.VisualEnumerationInstanceKinds.ConstantOrRule
            }));

            // Data bars settings
            const objects = valueColumn.source.objects || {};

            // Data bar markers settings
            const showMarker = dataViewObjects.getValue<boolean>(objects, { objectName: "dataBarMarkers", propertyName: "showMarker" }, false);
            let markerShapeRaw = dataViewObjects.getValue<any>(objects, { objectName: "dataBarMarkers", propertyName: "markerShape" }, "circle");
            const markerShape = typeof markerShapeRaw === "string" ? markerShapeRaw : (markerShapeRaw.value || "circle");
            const markerColor = dataViewObjects.getFillColor(objects, { objectName: "dataBarMarkers", propertyName: "markerColor" }, "#000000");
            const markerSize = dataViewObjects.getValue<number>(objects, { objectName: "dataBarMarkers", propertyName: "markerSize" }, 10);

            dataBarMarkersSettings.slices.push(new formattingSettings.ToggleSwitch({
                name: "showMarker",
                displayName: displayName + " Show Marker",
                value: showMarker,
                visible: true,
                selector: { metadata: queryName }
            }));

            if (showMarker) {
                const markerShapeItems = [
                    { value: "cross", displayName: "Cross" },
                    { value: "circle", displayName: "Circle" },
                    { value: "horizontalLine", displayName: "Horizontal Line" },
                    { value: "verticalLine", displayName: "Vertical Line" },
                    { value: "semiCircle", displayName: "Semi Circle" }
                ];
                const currentShapeItem = markerShapeItems.find(x => x.value === markerShape) || markerShapeItems[1];

                dataBarMarkersSettings.slices.push(new formattingSettings.ItemDropdown({
                    name: "markerShape",
                    displayName: displayName + " Marker Shape",
                    value: currentShapeItem,
                    items: markerShapeItems,
                    visible: true,
                    selector: { metadata: queryName }
                }));

                dataBarMarkersSettings.slices.push(new formattingSettings.ColorPicker({
                    name: "markerColor",
                    displayName: displayName + " Marker Color",
                    value: { value: markerColor },
                    visible: true,
                    selector: { metadata: queryName },
                    instanceKind: powerbi.VisualEnumerationInstanceKinds.ConstantOrRule
                }));

                dataBarMarkersSettings.slices.push(new formattingSettings.NumUpDown({
                    name: "markerSize",
                    displayName: displayName + " Marker Size",
                    value: markerSize,
                    visible: true,
                    selector: { metadata: queryName }
                }));
            }

          });

          // Populate totals series dropdown and apply selector to showTotalRow
          const categoryHeaders = categories?.sources.map((src: any) => src.displayName || src.queryName) || [];
          totalsSettings.series.items = categoryHeaders.map(name => ({ value: name, displayName: name }));
          const persistedTotalsSeries = dataViewObjects.getValue<string>(
              this.dataView.metadata.objects || {},
              { objectName: "totals", propertyName: "series" },
              undefined
          );
          const matchedTotalsItem = persistedTotalsSeries
              ? totalsSettings.series.items.find(i => i.value === persistedTotalsSeries)
              : null;
          totalsSettings.series.value = matchedTotalsItem || totalsSettings.series.items[0] || { value: "", displayName: "" };

          const selectedTotalsSeriesName = totalsSettings.series.value?.value as string;
          const selectedTotalsCategoryIdx = categoryHeaders.indexOf(selectedTotalsSeriesName);
          const selectedTotalsSource = selectedTotalsCategoryIdx >= 0 && categories ? categories.sources[selectedTotalsCategoryIdx] : null;
          const selectedTotalsQueryName = selectedTotalsSource?.queryName;
          const totalsSelector = selectedTotalsQueryName ? { metadata: selectedTotalsQueryName } : undefined;

          // Rebuild totalsSettings.showTotalRow to use the selector
          const tShowTotalRow = dataViewObjects.getValue<boolean>(selectedTotalsSource?.objects || {}, { objectName: "totals", propertyName: "showTotalRow" }, true);
          totalsSettings.showTotalRow = new formattingSettings.ToggleSwitch({
              name: "showTotalRow",
              displayName: "Show Total Row",
              value: tShowTotalRow,
              visible: true,
              selector: totalsSelector
          });
          const showTotalRowIdx = totalsSettings.categorySelectionGroup.slices.findIndex(s => s.name === "showTotalRow");
          if (showTotalRowIdx >= 0) {
              totalsSettings.categorySelectionGroup.slices[showTotalRowIdx] = totalsSettings.showTotalRow;
          }

          // Build totalBehavior dropdowns scoped to the selected category level
          const totalBehaviorItems = [
              { value: "Measure", displayName: "Measure" },
              { value: "Sum", displayName: "Sum" },
              { value: "Average", displayName: "Average" },
              { value: "Count", displayName: "Count" },
              { value: "Count Distinct", displayName: "Count Distinct" },
              { value: "Max", displayName: "Max" },
              { value: "Min", displayName: "Min" },
              { value: "None", displayName: "None" }
          ];

          if (selectedTotalsCategoryIdx <= 0) {
              // Top-level category (or no categories): per-measure totalBehavior for the grand total row
              values.forEach((valueColumn) => {
                  const objects = valueColumn.source.objects || {};
                  const displayName = valueColumn.source.displayName || "Measure";
                  const queryName = valueColumn.source.queryName;
                  let totalBehaviorRaw = dataViewObjects.getValue<any>(objects, { objectName: "totals", propertyName: "totalBehavior" }, "Measure");
                  const totalBehaviorVal = typeof totalBehaviorRaw === "string" ? totalBehaviorRaw : (totalBehaviorRaw.value || "Measure");
                  const currentBehaviorItem = totalBehaviorItems.find(x => x.value === totalBehaviorVal) || totalBehaviorItems[0];

                  totalsSettings.categorySelectionGroup.slices.push(new formattingSettings.ItemDropdown({
                      name: "totalBehavior",
                      displayName: displayName + " Measure Selection",
                      value: currentBehaviorItem,
                      items: totalBehaviorItems,
                      visible: true,
                      selector: { metadata: queryName }
                  }));
              });
          } else {
              // Lower-level category: per-category totalBehavior for subtotal rows at this level
              let catBehaviorRaw = dataViewObjects.getValue<any>(selectedTotalsSource?.objects || {}, { objectName: "totals", propertyName: "totalBehavior" }, "Measure");
              const catBehaviorVal = typeof catBehaviorRaw === "string" ? catBehaviorRaw : (catBehaviorRaw?.value || "Measure");
              const currentCatBehaviorItem = totalBehaviorItems.find(x => x.value === catBehaviorVal) || totalBehaviorItems[0];

              totalsSettings.categorySelectionGroup.slices.push(new formattingSettings.ItemDropdown({
                  name: "totalBehavior",
                  displayName: "Measure Selection",
                  value: currentCatBehaviorItem,
                  items: totalBehaviorItems,
                  visible: true,
                  selector: totalsSelector
              }));
          }

          // Populate columnTotals series dropdown and totalBehavior per measure
          const colTotalBehaviorItems = [
              { value: "Measure", displayName: "Measure" },
              { value: "Sum", displayName: "Sum" },
              { value: "Average", displayName: "Average" },
              { value: "Count", displayName: "Count" },
              { value: "Count Distinct", displayName: "Count Distinct" },
              { value: "Max", displayName: "Max" },
              { value: "Min", displayName: "Min" },
              { value: "None", displayName: "None" }
          ];

          // Use base measure headers for the series dropdown (before column expansion)
          const baseMeasureHeaders = measureHeaders.slice();
          const baseMeasureFormats = measureFormats.slice();
          const baseMeasureSettings = measureSettingsList.slice();
          const baseValues = values.slice();

          columnTotalsSettings.series.items = baseMeasureHeaders.map(name => ({ value: name, displayName: name }));
          const persistedColTotalsSeries = dataViewObjects.getValue<string>(
              this.dataView.metadata.objects || {},
              { objectName: "columnTotals", propertyName: "series" },
              undefined
          );
          const matchedColTotalsItem = persistedColTotalsSeries
              ? columnTotalsSettings.series.items.find(i => i.value === persistedColTotalsSeries)
              : null;
          columnTotalsSettings.series.value = matchedColTotalsItem || columnTotalsSettings.series.items[0] || { value: "", displayName: "" };

          const selectedColTotalsSeriesName = columnTotalsSettings.series.value?.value as string;
          const selectedColTotalsMeasureIdx = baseMeasureHeaders.indexOf(selectedColTotalsSeriesName);
          const selectedColTotalsValueColumn = selectedColTotalsMeasureIdx >= 0 ? baseValues[selectedColTotalsMeasureIdx] : null;
          const selectedColTotalsQueryName = selectedColTotalsValueColumn?.source?.queryName;
          const selectedColTotalsObjects = selectedColTotalsValueColumn?.source?.objects || {};
          const colTotalsSelector = selectedColTotalsQueryName ? { metadata: selectedColTotalsQueryName } : undefined;

          // Read per-measure showTotalColumn for the currently selected series
          const ctShowTotalColumn = dataViewObjects.getValue<boolean>(selectedColTotalsObjects, { objectName: "columnTotals", propertyName: "showTotalColumn" }, false);
          columnTotalsSettings.showTotalColumn = new formattingSettings.ToggleSwitch({
              name: "showTotalColumn",
              displayName: "Show Total Column",
              value: ctShowTotalColumn,
              visible: true,
              selector: colTotalsSelector
          });
          const showColTotalIdx = columnTotalsSettings.columnSelectionGroup.slices.findIndex(s => s.name === "showTotalColumn");
          if (showColTotalIdx >= 0) {
              columnTotalsSettings.columnSelectionGroup.slices[showColTotalIdx] = columnTotalsSettings.showTotalColumn;
          }

          // Per-measure totalBehavior for column totals (for selected series)
          let colTotalBehaviorRaw = dataViewObjects.getValue<any>(selectedColTotalsObjects, { objectName: "columnTotals", propertyName: "totalBehavior" }, "Measure");
          const colTotalBehaviorVal = typeof colTotalBehaviorRaw === "string" ? colTotalBehaviorRaw : (colTotalBehaviorRaw?.value || "Measure");
          const currentColTotalBehaviorItem = colTotalBehaviorItems.find(x => x.value === colTotalBehaviorVal) || colTotalBehaviorItems[0];

          columnTotalsSettings.columnSelectionGroup.slices.push(new formattingSettings.ItemDropdown({
              name: "totalBehavior",
              displayName: "Total Type",
              value: currentColTotalBehaviorItem,
              items: colTotalBehaviorItems,
              visible: true,
              selector: colTotalsSelector
          }));

          // Gate formatting group visibility on whether current series has column total enabled
          columnTotalsSettings.columnTotalsFormattingGroup.visible = ctShowTotalColumn;

          // Build per-BASE-measure column total inclusion flags and behaviors
          const baseMeasureColTotalIncluded: boolean[] = [];
          const baseMeasureColTotalBehaviors: string[] = [];
          baseValues.forEach((valueColumn) => {
              const objects = valueColumn.source.objects || {};
              const included = dataViewObjects.getValue<boolean>(objects, { objectName: "columnTotals", propertyName: "showTotalColumn" }, false);
              baseMeasureColTotalIncluded.push(included);
              let behaviorRaw = dataViewObjects.getValue<any>(objects, { objectName: "columnTotals", propertyName: "totalBehavior" }, "Measure");
              const behavior = typeof behaviorRaw === "string" ? behaviorRaw : (behaviorRaw?.value || "Measure");
              baseMeasureColTotalBehaviors.push(behavior);
          });

          // Determine if at least one base measure has showTotalColumn enabled
          showTotalColumn = baseMeasureColTotalIncluded.some(v => v);
          // Count how many total columns we will render
          const colTotalCount = baseMeasureColTotalIncluded.filter(v => v).length;

          // Populate specificColumn series dropdown and rebuild value slices with per-measure selector
          const specificColumnSettings = this.visualSettings.specificColumn;
          specificColumnSettings.series.items = measureHeaders.map(name => ({ value: name, displayName: name }));
          // Read persisted series value from dataView metadata objects
          const rawPersistedSeries = dataViewObjects.getValue<any>(
              this.dataView.metadata.objects || {},
              { objectName: "specificColumn", propertyName: "series" },
              undefined
          );
          const persistedSeries = typeof rawPersistedSeries === 'string'
              ? rawPersistedSeries
              : rawPersistedSeries?.value;
          const matchedItem = persistedSeries
              ? specificColumnSettings.series.items.find(i => i.value === persistedSeries)
              : null;
          specificColumnSettings.series.value = matchedItem || specificColumnSettings.series.items[0] || { value: "", displayName: "" };

          // Find the queryName for the selected measure so slices persist to the correct per-measure objects
          const selectedSeriesName = specificColumnSettings.series.value?.value as string;
          const selectedMeasureIdx = measureHeaders.indexOf(selectedSeriesName);
          const selectedValueColumn = selectedMeasureIdx >= 0 ? values[selectedMeasureIdx] : null;
          const selectedQueryName = selectedValueColumn?.source?.queryName;
          const selectedObjects = selectedValueColumn?.source?.objects || {};
          const selector = selectedQueryName ? { metadata: selectedQueryName } : undefined;

          // Bootstrap metadata-level persistence: if specificColumn.series doesn't exist in
          // metadata.objects yet, persist the default so the framework has an existing entry
          // to merge future dropdown changes into.
          const metaScSeries = (this.dataView.metadata.objects as any)?.specificColumn?.series;
          if (metaScSeries === undefined && selectedSeriesName) {
              this.host.persistProperties({
                  merge: [{
                      objectName: "specificColumn",
                      selector: null,
                      properties: { series: selectedSeriesName }
                  }]
              });
          }

          // Read current per-measure values for the selected column
          const scTextColor = dataViewObjects.getFillColor(selectedObjects, { objectName: "specificColumn", propertyName: "textColor" }, undefined);
          const scBgColor = dataViewObjects.getFillColor(selectedObjects, { objectName: "specificColumn", propertyName: "backgroundColor" }, undefined);
          const scAltTextColor = dataViewObjects.getFillColor(selectedObjects, { objectName: "specificColumn", propertyName: "alternateTextColor" }, undefined);
          const scAltBgColor = dataViewObjects.getFillColor(selectedObjects, { objectName: "specificColumn", propertyName: "alternateBackgroundColor" }, undefined);
          const scFontFamily = dataViewObjects.getValue<string>(selectedObjects, { objectName: "specificColumn", propertyName: "fontFamily" }, undefined);
          const scFontSize = dataViewObjects.getValue<number>(selectedObjects, { objectName: "specificColumn", propertyName: "fontSize" }, undefined);
          const scBold = dataViewObjects.getValue<boolean>(selectedObjects, { objectName: "specificColumn", propertyName: "bold" }, undefined);
          const scItalic = dataViewObjects.getValue<boolean>(selectedObjects, { objectName: "specificColumn", propertyName: "italic" }, undefined);
          const scUnderline = dataViewObjects.getValue<boolean>(selectedObjects, { objectName: "specificColumn", propertyName: "underline" }, undefined);
          const scAlignment = dataViewObjects.getValue<string>(selectedObjects, { objectName: "specificColumn", propertyName: "alignment" }, undefined);
          const scDisplayUnits = dataViewObjects.getValue<number>(selectedObjects, { objectName: "specificColumn", propertyName: "displayUnits" }, 0);
          const scDecimalPlaces = dataViewObjects.getValue<number>(selectedObjects, { objectName: "specificColumn", propertyName: "decimalPlaces" }, null);
          const scTextWrap = dataViewObjects.getValue<boolean>(selectedObjects, { objectName: "specificColumn", propertyName: "textWrap" }, undefined);
          const scHorizontalGrid = dataViewObjects.getValue<boolean>(selectedObjects, { objectName: "specificColumn", propertyName: "horizontalGrid" }, true);
          const scTransparency = dataViewObjects.getValue<number>(selectedObjects, { objectName: "specificColumn", propertyName: "transparency" }, 0);

          // Read current per-measure header values
          const scHeaderTextColor = dataViewObjects.getFillColor(selectedObjects, { objectName: "specificColumn", propertyName: "headerTextColor" }, undefined);
          const scHeaderBgColor = dataViewObjects.getFillColor(selectedObjects, { objectName: "specificColumn", propertyName: "headerBackgroundColor" }, undefined);
          const scHeaderFontFamily = dataViewObjects.getValue<string>(selectedObjects, { objectName: "specificColumn", propertyName: "headerFontFamily" }, undefined);
          const scHeaderFontSize = dataViewObjects.getValue<number>(selectedObjects, { objectName: "specificColumn", propertyName: "headerFontSize" }, undefined);
          const scHeaderBold = dataViewObjects.getValue<boolean>(selectedObjects, { objectName: "specificColumn", propertyName: "headerBold" }, undefined);
          const scHeaderItalic = dataViewObjects.getValue<boolean>(selectedObjects, { objectName: "specificColumn", propertyName: "headerItalic" }, undefined);
          const scHeaderUnderline = dataViewObjects.getValue<boolean>(selectedObjects, { objectName: "specificColumn", propertyName: "headerUnderline" }, undefined);
          const scHeaderAlignment = dataViewObjects.getValue<string>(selectedObjects, { objectName: "specificColumn", propertyName: "headerAlignment" }, undefined);
          const scHeaderTextWrap = dataViewObjects.getValue<boolean>(selectedObjects, { objectName: "specificColumn", propertyName: "headerTextWrap" }, undefined);
          const scHeaderHorizontalGrid = dataViewObjects.getValue<boolean>(selectedObjects, { objectName: "specificColumn", propertyName: "headerHorizontalGrid" }, true);
          const scHeaderTransparency = dataViewObjects.getValue<number>(selectedObjects, { objectName: "specificColumn", propertyName: "headerTransparency" }, 0);

          // Read current per-measure total values
          const scTotalTextColor = dataViewObjects.getFillColor(selectedObjects, { objectName: "specificColumn", propertyName: "totalTextColor" }, undefined);
          const scTotalBgColor = dataViewObjects.getFillColor(selectedObjects, { objectName: "specificColumn", propertyName: "totalBackgroundColor" }, undefined);
          const scTotalFontFamily = dataViewObjects.getValue<string>(selectedObjects, { objectName: "specificColumn", propertyName: "totalFontFamily" }, undefined);
          const scTotalFontSize = dataViewObjects.getValue<number>(selectedObjects, { objectName: "specificColumn", propertyName: "totalFontSize" }, undefined);
          const scTotalBold = dataViewObjects.getValue<boolean>(selectedObjects, { objectName: "specificColumn", propertyName: "totalBold" }, undefined);
          const scTotalItalic = dataViewObjects.getValue<boolean>(selectedObjects, { objectName: "specificColumn", propertyName: "totalItalic" }, undefined);
          const scTotalUnderline = dataViewObjects.getValue<boolean>(selectedObjects, { objectName: "specificColumn", propertyName: "totalUnderline" }, undefined);
          const scTotalAlignment = dataViewObjects.getValue<string>(selectedObjects, { objectName: "specificColumn", propertyName: "totalAlignment" }, undefined);
          const scTotalDisplayUnits = dataViewObjects.getValue<number>(selectedObjects, { objectName: "specificColumn", propertyName: "totalDisplayUnits" }, 0);
          const scTotalDecimalPlaces = dataViewObjects.getValue<number>(selectedObjects, { objectName: "specificColumn", propertyName: "totalDecimalPlaces" }, null);
          const scTotalTextWrap = dataViewObjects.getValue<boolean>(selectedObjects, { objectName: "specificColumn", propertyName: "totalTextWrap" }, undefined);
          const scTotalHorizontalGrid = dataViewObjects.getValue<boolean>(selectedObjects, { objectName: "specificColumn", propertyName: "totalHorizontalGrid" }, true);
          const scTotalTransparency = dataViewObjects.getValue<number>(selectedObjects, { objectName: "specificColumn", propertyName: "totalTransparency" }, 0);

          // Populate columnHeaders nameSeries dropdown and rebuild names group with per-measure selector
          columnHeadersSettings.nameSeries.items = measureHeaders.map(name => ({ value: name, displayName: name }));
          
          const rawPersistedNameSeries = dataViewObjects.getValue<any>(
              this.dataView.metadata.objects || {},
              { objectName: "columnHeaders", propertyName: "nameSeries" },
              undefined
          );
          const persistedNameSeries = typeof rawPersistedNameSeries === 'string'
              ? rawPersistedNameSeries
              : rawPersistedNameSeries?.value;
          const matchedNameItem = persistedNameSeries
              ? columnHeadersSettings.nameSeries.items.find(i => i.value === persistedNameSeries)
              : null;
          columnHeadersSettings.nameSeries.value = matchedNameItem || columnHeadersSettings.nameSeries.items[0] || { value: "", displayName: "" };

          const selectedNameSeriesName = columnHeadersSettings.nameSeries.value?.value as string;
          const selectedNameMeasureIdx = measureHeaders.indexOf(selectedNameSeriesName);
          const selectedNameValueColumn = selectedNameMeasureIdx >= 0 ? values[selectedNameMeasureIdx] : null;
          const selectedNameQueryName = selectedNameValueColumn?.source?.queryName;
          const selectedNameObjects = selectedNameValueColumn?.source?.objects || {};
          const nameSelector = selectedNameQueryName ? { metadata: selectedNameQueryName } : undefined;

          const chNameOverride = dataViewObjects.getValue<string>(selectedNameObjects, { objectName: "columnHeaders", propertyName: "nameOverride" }, "");

          // Rebuild the namesGroup slices
          columnHeadersSettings.namesGroup.slices = [
              columnHeadersSettings.nameSeries,
              new formattingSettings.TextInput({
                  name: "nameOverride",
                  displayName: "Header Name",
                  placeholder: "Enter custom header name",
                  value: chNameOverride,
                  visible: true,
                  selector: nameSelector,
                  instanceKind: powerbi.VisualEnumerationInstanceKinds.ConstantOrRule
              })
          ];

          // Rebuild the selectSeriesGroup slices (no selector = persists to metadata.objects)
          specificColumnSettings.selectSeriesGroup.slices = [
              specificColumnSettings.series
          ];

          // Rebuild the headerGroup slices with per-measure selectors
          specificColumnSettings.headerGroup.slices = [
              new formattingSettings.FontControl({
                  name: "headerFont",
                  displayName: "Font",
                  fontFamily: new formattingSettings.FontPicker({ name: "headerFontFamily", displayName: "Font Family", value: scHeaderFontFamily || "Arial, sans-serif", selector }),
                  fontSize: new formattingSettings.NumUpDown({ name: "headerFontSize", displayName: "Font Size", value: scHeaderFontSize ?? 12, selector }),
                  bold: new formattingSettings.ToggleSwitch({ name: "headerBold", displayName: "Bold", value: scHeaderBold ?? false, selector }),
                  italic: new formattingSettings.ToggleSwitch({ name: "headerItalic", displayName: "Italic", value: scHeaderItalic ?? false, selector }),
                  underline: new formattingSettings.ToggleSwitch({ name: "headerUnderline", displayName: "Underline", value: scHeaderUnderline ?? false, selector })
              }),
              new formattingSettings.ColorPicker({ name: "headerTextColor", displayName: "Text color", value: { value: scHeaderTextColor || "#00b8d4" }, visible: true, selector }),
              new formattingSettings.ColorPicker({ name: "headerBackgroundColor", displayName: "Background color", value: { value: scHeaderBgColor || "#ffffff" }, visible: true, selector }),
              new formattingSettings.AlignmentGroup({ name: "headerAlignment", displayName: "Alignment", value: scHeaderAlignment || "left", mode: powerbi.visuals.AlignmentGroupMode.Horizonal, visible: true, selector }),
              new formattingSettings.ToggleSwitch({ name: "headerTextWrap", displayName: "Text wrap", value: scHeaderTextWrap ?? false, visible: true, selector }),
              new formattingSettings.NumUpDown({ name: "headerTransparency", displayName: "Transparency (%)", value: scHeaderTransparency, visible: true, selector }),
              new formattingSettings.ToggleSwitch({ name: "headerHorizontalGrid", displayName: "Horizontal grid", value: scHeaderHorizontalGrid, visible: true, selector })
          ];

          // Rebuild the valuesGroup slices with per-measure selectors
          specificColumnSettings.valuesGroup.slices = [
              new formattingSettings.FontControl({
                  name: "font",
                  displayName: "Font",
                  fontFamily: new formattingSettings.FontPicker({ name: "fontFamily", displayName: "Font Family", value: scFontFamily || "Arial, sans-serif", selector }),
                  fontSize: new formattingSettings.NumUpDown({ name: "fontSize", displayName: "Font Size", value: scFontSize ?? 12, selector }),
                  bold: new formattingSettings.ToggleSwitch({ name: "bold", displayName: "Bold", value: scBold ?? false, selector }),
                  italic: new formattingSettings.ToggleSwitch({ name: "italic", displayName: "Italic", value: scItalic ?? false, selector }),
                  underline: new formattingSettings.ToggleSwitch({ name: "underline", displayName: "Underline", value: scUnderline ?? false, selector })
              }),
              new formattingSettings.ColorPicker({ name: "textColor", displayName: "Text color", value: { value: scTextColor || "#00b8d4" }, visible: true, selector }),
              new formattingSettings.ColorPicker({ name: "backgroundColor", displayName: "Background color", value: { value: scBgColor || "#ffffff" }, visible: true, selector }),
              new formattingSettings.ColorPicker({ name: "alternateTextColor", displayName: "Alternate text color", value: { value: scAltTextColor || "#333333" }, visible: true, selector }),
              new formattingSettings.ColorPicker({ name: "alternateBackgroundColor", displayName: "Alternate background color", value: { value: scAltBgColor || "#f5f5f5" }, visible: true, selector }),
              new formattingSettings.AlignmentGroup({ name: "alignment", displayName: "Alignment", value: scAlignment || "left", mode: powerbi.visuals.AlignmentGroupMode.Horizonal, visible: true, selector }),
              new formattingSettings.AutoDropdown({ name: "displayUnits", displayName: "Display units", value: scDisplayUnits, visible: true, selector }),
              new formattingSettings.NumUpDown({ name: "decimalPlaces", displayName: "Value decimal places", value: scDecimalPlaces, visible: true, selector, options: { placeholderText: "Auto" } as any }),
              new formattingSettings.ToggleSwitch({ name: "textWrap", displayName: "Text wrap", value: scTextWrap ?? false, visible: true, selector }),
              new formattingSettings.NumUpDown({ name: "transparency", displayName: "Value Transparency (%)", value: scTransparency, visible: true, selector }),
              new formattingSettings.ToggleSwitch({ name: "horizontalGrid", displayName: "Horizontal grid", value: scHorizontalGrid, visible: true, selector })
          ];

          // Rebuild the totalGroup slices with per-measure selectors
          specificColumnSettings.totalGroup.slices = [
              new formattingSettings.FontControl({
                  name: "totalFont",
                  displayName: "Font",
                  fontFamily: new formattingSettings.FontPicker({ name: "totalFontFamily", displayName: "Font Family", value: scTotalFontFamily || "Arial, sans-serif", selector }),
                  fontSize: new formattingSettings.NumUpDown({ name: "totalFontSize", displayName: "Font Size", value: scTotalFontSize ?? 12, selector }),
                  bold: new formattingSettings.ToggleSwitch({ name: "totalBold", displayName: "Bold", value: scTotalBold ?? false, selector }),
                  italic: new formattingSettings.ToggleSwitch({ name: "totalItalic", displayName: "Italic", value: scTotalItalic ?? false, selector }),
                  underline: new formattingSettings.ToggleSwitch({ name: "totalUnderline", displayName: "Underline", value: scTotalUnderline ?? false, selector })
              }),
              new formattingSettings.ColorPicker({ name: "totalTextColor", displayName: "Text color", value: { value: scTotalTextColor || "#00b8d4" }, visible: true, selector }),
              new formattingSettings.ColorPicker({ name: "totalBackgroundColor", displayName: "Background color", value: { value: scTotalBgColor || "#ffffff" }, visible: true, selector }),
              new formattingSettings.AlignmentGroup({ name: "totalAlignment", displayName: "Alignment", value: scTotalAlignment || "left", mode: powerbi.visuals.AlignmentGroupMode.Horizonal, visible: true, selector }),
              new formattingSettings.AutoDropdown({ name: "totalDisplayUnits", displayName: "Display units", value: scTotalDisplayUnits, visible: true, selector }),
              new formattingSettings.NumUpDown({ name: "totalDecimalPlaces", displayName: "Value decimal places", value: scTotalDecimalPlaces, visible: true, selector, options: { placeholderText: "Auto" } as any }),
              new formattingSettings.ToggleSwitch({ name: "totalTextWrap", displayName: "Text wrap", value: scTotalTextWrap ?? false, visible: true, selector }),
              new formattingSettings.NumUpDown({ name: "totalTransparency", displayName: "Transparency (%)", value: scTotalTransparency, visible: true, selector }),
              new formattingSettings.ToggleSwitch({ name: "totalHorizontalGrid", displayName: "Horizontal grid", value: scTotalHorizontalGrid, visible: true, selector })
          ];

          // Populate dataBarsSettings series dropdown and rebuild value slices with per-measure selector
          dataBarsSettings.series.items = measureHeaders.map(name => ({ value: name, displayName: name }));
          const persistedDataBarsSeries = dataViewObjects.getValue<string>(
              this.dataView.metadata.objects || {},
              { objectName: "dataBarsFormatting", propertyName: "series" },
              undefined
          );
          const matchedDataBarsItem = persistedDataBarsSeries
              ? dataBarsSettings.series.items.find(i => i.value === persistedDataBarsSeries)
              : null;
          dataBarsSettings.series.value = matchedDataBarsItem || dataBarsSettings.series.items[0] || { value: "", displayName: "" };

          const selectedDataBarsSeriesName = dataBarsSettings.series.value?.value as string;
          const selectedDataBarsMeasureIdx = measureHeaders.indexOf(selectedDataBarsSeriesName);
          const selectedDataBarsValueColumn = selectedDataBarsMeasureIdx >= 0 ? values[selectedDataBarsMeasureIdx] : null;
          const selectedDataBarsQueryName = selectedDataBarsValueColumn?.source?.queryName;
          const selectedDataBarsObjects = selectedDataBarsValueColumn?.source?.objects || {};
          const dataBarsSelector = selectedDataBarsQueryName ? { metadata: selectedDataBarsQueryName } : undefined;

          const dbShowDataBars = dataViewObjects.getValue<boolean>(selectedDataBarsObjects, { objectName: "dataBarsFormatting", propertyName: "showDataBars" }, false);
                    const dbMatchDataBarColor = dataViewObjects.getValue<boolean>(selectedDataBarsObjects, { objectName: "dataBarsFormatting", propertyName: "matchDataBarColor" }, true);
          const dbShowZeroLine = dataViewObjects.getValue<boolean>(selectedDataBarsObjects, { objectName: "dataBarsFormatting", propertyName: "showZeroLine" }, false);
          const dbZeroLineColor = dataViewObjects.getFillColor(selectedDataBarsObjects, { objectName: "dataBarsFormatting", propertyName: "zeroLineColor" }, "#000000");
          const dbZeroLineTransparency = dataViewObjects.getValue<number>(selectedDataBarsObjects, { objectName: "dataBarsFormatting", propertyName: "zeroLineTransparency" }, 0);
          const dbDataBarHeight = dataViewObjects.getValue<number>(selectedDataBarsObjects, { objectName: "dataBarsFormatting", propertyName: "dataBarHeight" }, 80);
          const dbTransparency = dataViewObjects.getValue<number>(selectedDataBarsObjects, { objectName: "dataBarsFormatting", propertyName: "transparency" }, 20);
          const dbBorderOn = dataViewObjects.getValue<boolean>(selectedDataBarsObjects, { objectName: "dataBarsFormatting", propertyName: "borderOn" }, true);
          const dbBorderThickness = dataViewObjects.getValue<number>(selectedDataBarsObjects, { objectName: "dataBarsFormatting", propertyName: "borderThickness" }, 1);
          const dbBorderColor = dataViewObjects.getFillColor(selectedDataBarsObjects, { objectName: "dataBarsFormatting", propertyName: "borderColor" }, "#000000");
          const dbAxisTypeObj = dataViewObjects.getValue<powerbi.EnumMemberValue>(selectedDataBarsObjects, { objectName: "dataBarsFormatting", propertyName: "axisType" }, "Amount");
          const dbAxisType = typeof dbAxisTypeObj === "string" ? { value: dbAxisTypeObj, displayName: dbAxisTypeObj } : dbAxisTypeObj as unknown as powerbi.IEnumMember;
          const dbMinValue = dataViewObjects.getValue<number>(selectedDataBarsObjects, { objectName: "dataBarsFormatting", propertyName: "minValue" }, null);
          const dbMaxValue = dataViewObjects.getValue<number>(selectedDataBarsObjects, { objectName: "dataBarsFormatting", propertyName: "maxValue" }, null);
          const dbLabelsOutside = dataViewObjects.getValue<boolean>(selectedDataBarsObjects, { objectName: "dataBarsFormatting", propertyName: "labelsOutside" }, false);
          const dbVerticalDataBars = dataViewObjects.getValue<boolean>(selectedDataBarsObjects, { objectName: "dataBarsFormatting", propertyName: "verticalDataBars" }, false);
          const dbShowOnRowTotals = dataViewObjects.getValue<boolean>(selectedDataBarsObjects, { objectName: "dataBarsFormatting", propertyName: "showOnRowTotals" }, true);
          const dbShowOnColumnTotals = dataViewObjects.getValue<boolean>(selectedDataBarsObjects, { objectName: "dataBarsFormatting", propertyName: "showOnColumnTotals" }, true);

          dataBarsSettings.selectSeriesGroup.slices = [
              dataBarsSettings.series
          ];

let dataBarsSlices: formattingSettings.Slice[] = [
                new formattingSettings.ToggleSwitch({ name: "showDataBars", displayName: "Show Data Bars", value: dbShowDataBars, visible: true, selector: dataBarsSelector }),
                new formattingSettings.ToggleSwitch({ name: "verticalDataBars", displayName: "Vertical Data Bars", value: dbVerticalDataBars, visible: true, selector: dataBarsSelector }),
                                new formattingSettings.NumUpDown({ name: "dataBarHeight", displayName: "Data Bar Height (%)", value: dbDataBarHeight, visible: true, selector: dataBarsSelector }),
                new formattingSettings.NumUpDown({ name: "transparency", displayName: "Transparency (%)", value: dbTransparency, visible: true, selector: dataBarsSelector }),
                new formattingSettings.ToggleSwitch({ name: "borderOn", displayName: "Border On", value: dbBorderOn, visible: true, selector: dataBarsSelector }),
                new formattingSettings.ToggleSwitch({ name: "matchDataBarColor", displayName: "Match Data Bar Color", value: dbMatchDataBarColor, visible: true, selector: dataBarsSelector }),
                new formattingSettings.NumUpDown({ name: "borderThickness", displayName: "Border Thickness", value: dbBorderThickness, visible: true, selector: dataBarsSelector })
            ];

            if (!dbMatchDataBarColor) {
                dataBarsSlices.push(new formattingSettings.ColorPicker({ name: "borderColor", displayName: "Border Color", value: { value: dbBorderColor }, visible: true, selector: dataBarsSelector }));
            }

            dataBarsSlices.push(
                new formattingSettings.ToggleSwitch({ name: "labelsOutside", displayName: "Labels Outside", value: dbLabelsOutside, visible: true, selector: dataBarsSelector }),
                new formattingSettings.ToggleSwitch({ name: "showOnRowTotals", displayName: "Show on Row Totals", value: dbShowOnRowTotals, visible: true, selector: dataBarsSelector }),
                new formattingSettings.ToggleSwitch({ name: "showOnColumnTotals", displayName: "Show on Column Totals", value: dbShowOnColumnTotals, visible: true, selector: dataBarsSelector }),
                new formattingSettings.ToggleSwitch({ name: "showZeroLine", displayName: "Show Zero Line", value: dbShowZeroLine, visible: true, selector: dataBarsSelector }),
                new formattingSettings.ColorPicker({ name: "zeroLineColor", displayName: "Zero Line Color", value: { value: dbZeroLineColor }, visible: true, selector: dataBarsSelector }),
                new formattingSettings.NumUpDown({ name: "zeroLineTransparency", displayName: "Zero Line Transparency (%)", value: dbZeroLineTransparency, visible: true, selector: dataBarsSelector })
            );

            let yAxisSlices: formattingSettings.Slice[] = [
                new formattingSettings.ItemDropdown({
                    name: "axisType",
                    displayName: "Type",
                    value: dbAxisType,
                    items: [
                        { value: "Amount", displayName: "Amount" },
                        { value: "Percentage", displayName: "By percentage" }
                    ],
                    visible: true,
                    selector: dataBarsSelector
                }),
                new formattingSettings.NumUpDown({ name: "maxValue", displayName: "Upper bound", value: dbMaxValue, visible: true, selector: dataBarsSelector, options: (dbAxisType.value === "Percentage" ? { placeholderText: "Auto", unitSymbol: "%", unitSymbolAfterInput: true } : { placeholderText: "Auto" }) as any }),
                new formattingSettings.NumUpDown({ name: "minValue", displayName: "Lower bound", value: dbMinValue, visible: true, selector: dataBarsSelector, options: (dbAxisType.value === "Percentage" ? { placeholderText: "Auto", unitSymbol: "%", unitSymbolAfterInput: true } : { placeholderText: "Auto" }) as any })
            ];

            dataBarsSettings.dataBarsGroup.slices = dataBarsSlices;
            dataBarsSettings.yAxisGroup.slices = yAxisSlices;

          // Expand values and settings arrays for column grouping (column × measure display columns)
          if (hasColumnGrouping && columnLeaves.length > 0 && storedFlatRows) {
              const M = storedMeasureCount;
              const baseValues = [...values];
              const baseMSettings = [...measureSettingsList];
              const baseMFormats = [...measureFormats];
              const baseMHeaders = [...measureHeaders];
              const baseMHeaderOvr = [...measureHeaderOverrides];
              const baseVCWidths = [...valueColumnWidths];

              values = [];
              measureSettingsList = [];
              measureFormats = [];
              measureHeaders = [];
              measureHeaderOverrides = [];
              valueColumnWidths = [];

              for (let colIdx = 0; colIdx < columnLeaves.length; colIdx++) {
                  for (let mIdx = 0; mIdx < M; mIdx++) {
                      const vKey = colIdx * M + mIdx;
                      values.push({
                          source: baseValues[mIdx].source,
                          columnPath: columnLeaves[colIdx].path,
                          values: storedFlatRows.map(r => r.rawValues[vKey]?.value ?? null),
                          objects: storedFlatRows.map(r => r.rawValues[vKey]?.objects || undefined)
                      });
                      measureSettingsList.push(baseMSettings[mIdx]);
                      measureFormats.push(baseMFormats[mIdx]);
                      measureHeaders.push(baseMHeaders[mIdx]);
                      measureHeaderOverrides.push(baseMHeaderOvr[mIdx]);
                      valueColumnWidths.push(baseVCWidths[mIdx]);
                  }
              }
          }

          // Build display column subtotals for "Measure" total behavior
          let displayColumnSubtotals: (number | null)[] = new Array(values.length).fill(null);
          if (hasColumnGrouping && columnLeaves.length > 0) {
              const M = storedMeasureCount;
              const subtotalSource = storedSubtotalChild?.values || storedRoot?.values || {};
              for (let i = 0; i < values.length; i++) {
                  const colIdx = Math.floor(i / M);
                  const mIdx = i % M;
                  const vKey = colIdx * M + mIdx;
                  const stVal = subtotalSource[vKey];
                  if (stVal && stVal.value !== null && stVal.value !== undefined) {
                      displayColumnSubtotals[i] = Number(stVal.value);
                  }
              }
          } else {
              values.forEach((vc, idx) => {
                  const qn = vc.source?.queryName;
                  if (qn && matrixSubtotalValues[qn] !== undefined) {
                      displayColumnSubtotals[idx] = matrixSubtotalValues[qn];
                  }
              });
          }

          // Compute min and max values for data bars AND Calculate totals based on selection
          let measureMins: number[] = new Array(values.length).fill(0);
          let measureMaxs: number[] = new Array(values.length).fill(0);
          let totals: number[] = new Array(values.length).fill(0);

          values.forEach((valueColumn, measureIndex) => {
            let numValues = valueColumn.values.filter(v => v !== null && v !== undefined).map(v => Number(v));
            if (numValues.length > 0) {
                measureMins[measureIndex] = Math.min(0, ...numValues); // Standard data bars anchor to 0
                measureMaxs[measureIndex] = Math.max(0, ...numValues);
            }

            const objects = valueColumn.source.objects || {};
            let totalBehaviorRaw = dataViewObjects.getValue<any>(objects, { objectName: "totals", propertyName: "totalBehavior" }, "Measure");
            const totalBehavior = typeof totalBehaviorRaw === "string" ? totalBehaviorRaw : (totalBehaviorRaw.value || "Measure");

            if (totalBehavior === "None") {
                totals[measureIndex] = null;
            } else if (totalBehavior === "Measure") {
                let semanticTotal: number | null = null;

                // Use display column subtotals (handles both column-grouped and non-grouped cases)
                if (displayColumnSubtotals[measureIndex] !== null && displayColumnSubtotals[measureIndex] !== undefined) {
                    semanticTotal = displayColumnSubtotals[measureIndex];
                }

                // Fallback: sum of row values (same as Sum behavior)
                if (semanticTotal === null && numValues.length > 0) {
                    semanticTotal = numValues.reduce((a, b) => a + b, 0);
                }

                totals[measureIndex] = semanticTotal;
            } else if (numValues.length > 0) {
                if (totalBehavior === "Sum") {
                    totals[measureIndex] = numValues.reduce((a, b) => a + b, 0);
                } else if (totalBehavior === "Average") {
                    totals[measureIndex] = numValues.reduce((a, b) => a + b, 0) / numValues.length;
                } else if (totalBehavior === "Count") {
                    totals[measureIndex] = numValues.length;
                } else if (totalBehavior === "Count Distinct") {
                    totals[measureIndex] = new Set(numValues).size;
                } else if (totalBehavior === "Max") {
                    totals[measureIndex] = Math.max(...numValues);
                } else if (totalBehavior === "Min") {
                    totals[measureIndex] = Math.min(...numValues);
                }
            }
        });

        // Compute column totals per base measure for each row
        // For each base measure mIdx, sum values across all column leaves: values[colIdx*M + mIdx]
        const M = storedMeasureCount || baseMeasureHeaders.length;
        const numColumnLeaves = hasColumnGrouping ? columnLeaves.length : 1;

        // When column grouping is active, unify data bar min/max across all column leaves
        // for the same base measure so bars scale proportionally across columns
        if (hasColumnGrouping && numColumnLeaves > 1 && M > 0) {
            for (let mIdx = 0; mIdx < M; mIdx++) {
                let unifiedMin = 0;
                let unifiedMax = 0;
                for (let colIdx = 0; colIdx < numColumnLeaves; colIdx++) {
                    const valIdx = colIdx * M + mIdx;
                    if (valIdx < values.length) {
                        unifiedMin = Math.min(unifiedMin, measureMins[valIdx]);
                        unifiedMax = Math.max(unifiedMax, measureMaxs[valIdx]);
                    }
                }
                for (let colIdx = 0; colIdx < numColumnLeaves; colIdx++) {
                    const valIdx = colIdx * M + mIdx;
                    if (valIdx < values.length) {
                        measureMins[valIdx] = unifiedMin;
                        measureMaxs[valIdx] = unifiedMax;
                    }
                }
            }
        }

        // colTotalsPerMeasure[mIdx][rowIdx] = aggregated value across column leaves for that measure
        let colTotalsPerMeasure: (number | null)[][] = [];
        for (let mIdx = 0; mIdx < M; mIdx++) {
            let rowTotals: (number | null)[] = new Array(rowCount).fill(null);
            if (baseMeasureColTotalIncluded[mIdx] && baseMeasureColTotalBehaviors[mIdx] !== "None") {
                const behavior = baseMeasureColTotalBehaviors[mIdx];
                for (let i = 0; i < rowCount; i++) {
                    if (behavior === "Measure") {
                        // Use semantic subtotal from the matrix column subtotal (DAX engine value)
                        let semanticVal: number | null = null;
                        if (hasColumnGrouping && storedFlatRows && columnSubtotalValueKeys.length > 0) {
                            // columnSubtotalValueKeys has one key per measure for the column subtotal
                            // Find the key for this base measure (mIdx)
                            const subtotalKey = columnSubtotalValueKeys[mIdx];
                            if (subtotalKey !== undefined) {
                                const rawVal = storedFlatRows[i]?.rawValues?.[subtotalKey];
                                if (rawVal && rawVal.value !== null && rawVal.value !== undefined) {
                                    semanticVal = Number(rawVal.value);
                                }
                            }
                        }
                        if (semanticVal !== null) {
                            rowTotals[i] = semanticVal;
                        } else {
                            // Fallback: sum across column leaves (same as Sum)
                            let colValues: number[] = [];
                            if (hasColumnGrouping && numColumnLeaves > 1) {
                                for (let colIdx = 0; colIdx < numColumnLeaves; colIdx++) {
                                    const expandedIdx = colIdx * M + mIdx;
                                    if (expandedIdx < values.length) {
                                        const v = values[expandedIdx].values[i];
                                        if (v !== null && v !== undefined) colValues.push(Number(v));
                                    }
                                }
                            } else {
                                const v = values[mIdx]?.values[i];
                                if (v !== null && v !== undefined) colValues.push(Number(v));
                            }
                            if (colValues.length > 0) {
                                rowTotals[i] = colValues.reduce((a, b) => a + b, 0);
                            }
                        }
                    } else {
                        // Non-Measure behaviors: aggregate from individual column values
                        let colValues: number[] = [];
                        if (hasColumnGrouping && numColumnLeaves > 1) {
                            for (let colIdx = 0; colIdx < numColumnLeaves; colIdx++) {
                                const expandedIdx = colIdx * M + mIdx;
                                if (expandedIdx < values.length) {
                                    const v = values[expandedIdx].values[i];
                                    if (v !== null && v !== undefined) colValues.push(Number(v));
                                }
                            }
                        } else {
                            const v = values[mIdx]?.values[i];
                            if (v !== null && v !== undefined) colValues.push(Number(v));
                        }
                        if (colValues.length > 0) {
                            if (behavior === "Sum") rowTotals[i] = colValues.reduce((a, b) => a + b, 0);
                            else if (behavior === "Average") rowTotals[i] = colValues.reduce((a, b) => a + b, 0) / colValues.length;
                            else if (behavior === "Count") rowTotals[i] = colValues.length;
                            else if (behavior === "Count Distinct") rowTotals[i] = new Set(colValues).size;
                            else if (behavior === "Max") rowTotals[i] = Math.max(...colValues);
                            else if (behavior === "Min") rowTotals[i] = Math.min(...colValues);
                        }
                    }
                }
            }
            colTotalsPerMeasure.push(rowTotals);
        }

        // Compute grand totals for each base measure's column total (for the row total row)
        // This is the intersection cell: apply the column total behavior to the row-total values across column leaves
        let colTotalsGrandPerMeasure: (number | null)[] = new Array(M).fill(null);
        if (showTotalRow) {
            for (let mIdx = 0; mIdx < M; mIdx++) {
                if (!baseMeasureColTotalIncluded[mIdx]) continue;
                const colBehavior = baseMeasureColTotalBehaviors[mIdx];
                if (colBehavior === "None") continue;

                // The subtotal source for the row-total row
                const subtotalSource = storedSubtotalChild?.values || storedRoot?.values || {};

                if (colBehavior === "Measure") {
                    // Use the DAX engine's column subtotal value from the row-total row
                    // columnSubtotalValueKeys[mIdx] is the value key for the column subtotal of measure mIdx
                    let semanticVal: number | null = null;
                    if (hasColumnGrouping && columnSubtotalValueKeys.length > mIdx) {
                        const subtotalKey = columnSubtotalValueKeys[mIdx];
                        const stVal = subtotalSource[subtotalKey];
                        if (stVal && stVal.value !== null && stVal.value !== undefined) {
                            semanticVal = Number(stVal.value);
                        }
                    }
                    if (semanticVal !== null) {
                        colTotalsGrandPerMeasure[mIdx] = semanticVal;
                    } else {
                        // Fallback: sum of per-row column totals
                        let grandValues = colTotalsPerMeasure[mIdx].filter(v => v !== null && v !== undefined) as number[];
                        if (grandValues.length > 0) {
                            colTotalsGrandPerMeasure[mIdx] = grandValues.reduce((a, b) => a + b, 0);
                        }
                    }
                } else {
                    // Non-Measure behaviors: aggregate the row-total row's values across column leaves
                    let colLeafTotals: number[] = [];
                    if (hasColumnGrouping && numColumnLeaves > 1) {
                        for (let colIdx = 0; colIdx < numColumnLeaves; colIdx++) {
                            const vKey = colIdx * M + mIdx;
                            const stVal = subtotalSource[vKey];
                            if (stVal && stVal.value !== null && stVal.value !== undefined) {
                                colLeafTotals.push(Number(stVal.value));
                            }
                        }
                    }
                    // If no column grouping or no subtotal source, use per-row column totals
                    if (colLeafTotals.length === 0) {
                        colLeafTotals = colTotalsPerMeasure[mIdx].filter(v => v !== null && v !== undefined) as number[];
                    }
                    if (colLeafTotals.length > 0) {
                        if (colBehavior === "Sum") colTotalsGrandPerMeasure[mIdx] = colLeafTotals.reduce((a, b) => a + b, 0);
                        else if (colBehavior === "Average") colTotalsGrandPerMeasure[mIdx] = colLeafTotals.reduce((a, b) => a + b, 0) / colLeafTotals.length;
                        else if (colBehavior === "Count") colTotalsGrandPerMeasure[mIdx] = colLeafTotals.length;
                        else if (colBehavior === "Count Distinct") colTotalsGrandPerMeasure[mIdx] = new Set(colLeafTotals).size;
                        else if (colBehavior === "Max") colTotalsGrandPerMeasure[mIdx] = Math.max(...colLeafTotals);
                        else if (colBehavior === "Min") colTotalsGrandPerMeasure[mIdx] = Math.min(...colLeafTotals);
                    }
                }
            }
        }

        // Determine column total column widths (per base measure)
        const colTotalColumnWidths = Array.from({ length: M }, (_, i) => valueColumnWidths[i]);

        // Check if column width settings changed — if so, clear manual column resize overrides
        const currentColumnWidthSnapshot = JSON.stringify([categoryColumnWidth, ...valueColumnWidths, ...colTotalColumnWidths]);
        if (currentColumnWidthSnapshot !== this.lastColumnWidthSnapshot) {
            this.manualColumnWidths.clear();
        }
        this.lastColumnWidthSnapshot = currentColumnWidthSnapshot;

        if (!switchValuesToRows) {
            // Normal horizontal table structure
            const headerBgColor = headerBackgroundColor;
            const numCategoryColumns = hasCategories ? categories.sources.length : 0;

            // Add column grouping header rows (for matrix columns field, only when multiple measures)
            if (hasColumnGrouping && columnHeaderGroups.length > 0 && storedMeasureCount > 1) {
                columnHeaderGroups.forEach((groups, levelIdx) => {
                    let colHeaderRow = this.table.insertRow();
                    colHeaderRow.className = 'table-header-row';
                    colHeaderRow.style.borderBottom = horizBorderValue;
                    colHeaderRow.style.height = `${headerRowHeight}px`;

                    // Empty cell(s) spanning category columns
                    if (hasCategories) {
                        categories.sources.forEach((source: any) => {
                            let emptyCell = colHeaderRow.insertCell();
                            emptyCell.textContent = '';
                            emptyCell.className = 'table-header-cell';
                            emptyCell.style.width = `${categoryColumnWidth}px`;
                            emptyCell.style.minWidth = `${categoryColumnWidth}px`;
                            emptyCell.style.maxWidth = `${categoryColumnWidth}px`;
                            emptyCell.style.backgroundColor = headerBgColor;
                            emptyCell.style.borderRight = vertBorderValue;
                            applyRowSquash(emptyCell, headerRowHeight, headerFontSize, headerWordWrap);
                            emptyCell.style.fontWeight = headerBold ? "bold" : "normal";
                            emptyCell.style.fontStyle = headerItalic ? "italic" : "normal";
                            emptyCell.style.textDecoration = headerUnderline ? "underline" : "none";
                            emptyCell.style.fontFamily = headerFontFamily;
                            emptyCell.style.color = headerTextColor;
                            emptyCell.style.textAlign = headerAlignment;
                        });
                    }

                    // Column grouping cells with colspan
                    let displayColOffset = 0;
                    groups.forEach(group => {
                        let cell = colHeaderRow.insertCell();
                        cell.textContent = group.label;
                        cell.colSpan = group.span;
                        cell.className = 'table-header-cell';
                        cell.style.backgroundColor = headerBgColor;
                        cell.style.borderRight = vertBorderValue;
                        cell.style.textAlign = "center";
                        applyRowSquash(cell, headerRowHeight, headerFontSize, headerWordWrap);
                        cell.style.fontWeight = headerBold ? "bold" : "normal";
                        cell.style.fontStyle = headerItalic ? "italic" : "normal";
                        cell.style.textDecoration = headerUnderline ? "underline" : "none";
                        cell.style.fontFamily = headerFontFamily;
                        cell.style.color = headerTextColor;
                        cell.style.overflow = "hidden";
                        cell.style.textOverflow = "ellipsis";
                        cell.style.whiteSpace = headerWordWrap ? "normal" : "nowrap";
                        if (headerWordWrap) {
                            cell.style.wordBreak = "break-word";
                        }
                        displayColOffset += group.span;
                    });

                    // Add empty cells for column total columns in column grouping header rows
                    if (showTotalColumn) {
                        // One "Total" spanning cell covering all enabled column total columns
                        let emptyColTotal = colHeaderRow.insertCell();
                        emptyColTotal.textContent = levelIdx === 0 ? 'Total' : '';
                        emptyColTotal.colSpan = colTotalCount;
                        emptyColTotal.className = 'table-header-cell';
                        emptyColTotal.style.backgroundColor = headerBgColor;
                        emptyColTotal.style.borderRight = vertBorderValue;
                        applyRowSquash(emptyColTotal, headerRowHeight, headerFontSize, headerWordWrap);
                        emptyColTotal.style.fontWeight = headerBold ? "bold" : "normal";
                        emptyColTotal.style.fontStyle = headerItalic ? "italic" : "normal";
                        emptyColTotal.style.textDecoration = headerUnderline ? "underline" : "none";
                        emptyColTotal.style.fontFamily = headerFontFamily;
                        emptyColTotal.style.color = headerTextColor;
                        emptyColTotal.style.textAlign = headerAlignment;
                    }
                });
            }

            // Add a "Total" grouping row when column totals are shown but no column grouping header rows exist
            if (showTotalColumn && !(hasColumnGrouping && columnHeaderGroups.length > 0 && storedMeasureCount > 1)) {
                let colTotalGroupRow = this.table.insertRow();
                colTotalGroupRow.className = 'table-header-row';
                colTotalGroupRow.style.borderBottom = horizBorderValue;
                colTotalGroupRow.style.height = `${headerRowHeight}px`;

                // Empty cell(s) spanning category columns
                if (hasCategories) {
                    categories.sources.forEach(() => {
                        let emptyCell = colTotalGroupRow.insertCell();
                        emptyCell.textContent = '';
                        emptyCell.className = 'table-header-cell';
                        emptyCell.style.width = `${categoryColumnWidth}px`;
                        emptyCell.style.minWidth = `${categoryColumnWidth}px`;
                        emptyCell.style.maxWidth = `${categoryColumnWidth}px`;
                        emptyCell.style.backgroundColor = headerBgColor;
                        emptyCell.style.borderRight = vertBorderValue;
                        applyRowSquash(emptyCell, headerRowHeight, headerFontSize, headerWordWrap);
                    });
                }

                // Empty cell spanning all measure columns
                let emptyMeasures = colTotalGroupRow.insertCell();
                emptyMeasures.textContent = '';
                emptyMeasures.colSpan = measureHeaders.length;
                emptyMeasures.className = 'table-header-cell';
                emptyMeasures.style.backgroundColor = headerBgColor;
                emptyMeasures.style.borderRight = vertBorderValue;
                applyRowSquash(emptyMeasures, headerRowHeight, headerFontSize, headerWordWrap);

                // "Total" cell spanning all column total columns
                let totalGroupCell = colTotalGroupRow.insertCell();
                totalGroupCell.textContent = 'Total';
                totalGroupCell.colSpan = colTotalCount;
                totalGroupCell.className = 'table-header-cell';
                totalGroupCell.style.backgroundColor = headerBgColor;
                totalGroupCell.style.borderRight = vertBorderValue;
                totalGroupCell.style.textAlign = 'center';
                applyRowSquash(totalGroupCell, headerRowHeight, headerFontSize, headerWordWrap);
                totalGroupCell.style.fontWeight = headerBold ? "bold" : "normal";
                totalGroupCell.style.fontStyle = headerItalic ? "italic" : "normal";
                totalGroupCell.style.textDecoration = headerUnderline ? "underline" : "none";
                totalGroupCell.style.fontFamily = headerFontFamily;
                totalGroupCell.style.color = headerTextColor;
                totalGroupCell.style.overflow = "hidden";
                totalGroupCell.style.textOverflow = "ellipsis";
                totalGroupCell.style.whiteSpace = headerWordWrap ? "normal" : "nowrap";
                if (headerWordWrap) {
                    totalGroupCell.style.wordBreak = "break-word";
                }
            }

            let headerRow = this.table.insertRow();
            headerRow.className = 'table-header-row';
            headerRow.style.borderBottom = horizBorder2xValue;
            headerRow.style.height = `${headerRowHeight}px`;

            // Add category column header if categories exist
            if (hasCategories) {
                categories.sources.forEach((source: any, levelIdx: number) => {
                    let categoryHeader = headerRow.insertCell();
                    categoryHeader.textContent = source.displayName || 'Category';
                    categoryHeader.className = 'table-header-cell';
                    const cw = levelIdx === 0 ? categoryColumnWidth : categoryColumnWidth; // Maybe configurable later, using base for now
                    categoryHeader.style.width = `${cw}px`;
                    categoryHeader.style.minWidth = `${cw}px`;
                    categoryHeader.style.maxWidth = `${cw}px`;
                    applyRowSquash(categoryHeader, headerRowHeight, headerFontSize, headerWordWrap);
                    categoryHeader.style.fontWeight = headerBold ? "bold" : "normal";
                    categoryHeader.style.fontStyle = headerItalic ? "italic" : "normal";
                    categoryHeader.style.textDecoration = headerUnderline ? "underline" : "none";
                    categoryHeader.style.fontFamily = headerFontFamily;
                    categoryHeader.style.color = headerTextColor;
                    categoryHeader.style.textAlign = headerAlignment;
                    categoryHeader.style.borderRight = vertBorderValue;
                    categoryHeader.style.backgroundColor = headerBgColor;
                    categoryHeader.style.overflow = "hidden";
                    categoryHeader.style.textOverflow = "ellipsis";
                    categoryHeader.style.whiteSpace = headerWordWrap ? "normal" : "nowrap";
                    if (headerWordWrap) {
                        categoryHeader.style.wordBreak = "break-word";
                    }
                });
            }

            // Add measure column headers (or column-value headers for single-measure + columns)
            measureHeaders.forEach((displayName, idx) => {
                // For single-measure with columns, use the column path as header text
                let headerText = measureHeaderOverrides[idx];
                if (hasColumnGrouping && columnLeaves.length > 0 && storedMeasureCount === 1) {
                    const colIdx = idx; // 1 measure, so display col idx == column leaf idx
                    if (colIdx < columnLeaves.length) {
                        headerText = columnLeaves[colIdx].path.join(' \u203A ');
                    }
                }
                const effectiveDisplayName = headerText;
                let specSettings = measureSettingsList[idx];
                let effectiveBg = specSettings.headerBackgroundColor ? specSettings.headerBackgroundColor : headerBgColor;
                let efBold = specSettings.headerBold !== undefined ? specSettings.headerBold : headerBold;
                let efItalic = specSettings.headerItalic !== undefined ? specSettings.headerItalic : headerItalic;
                let efUnderline = specSettings.headerUnderline !== undefined ? specSettings.headerUnderline : headerUnderline;
                let efFontFamily = specSettings.headerFontFamily !== undefined ? specSettings.headerFontFamily : headerFontFamily;
                let efFontSize = specSettings.headerFontSize !== undefined ? specSettings.headerFontSize : headerFontSize;
                let efWordWrap = specSettings.headerTextWrap !== undefined ? specSettings.headerTextWrap : headerWordWrap;
                let effectiveColor = specSettings.headerTextColor ? specSettings.headerTextColor : headerTextColor;
                if (specSettings.headerTransparency > 0) {
                    effectiveColor = applyTransparency(effectiveColor, specSettings.headerTransparency);
                }
                let effectiveAlign = specSettings.headerAlignment ? specSettings.headerAlignment : headerAlignment;
                let header = headerRow.insertCell();
                header.textContent = effectiveDisplayName;
                header.className = 'table-header-cell';
                header.style.width = `${valueColumnWidths[idx]}px`;
                header.style.minWidth = `${valueColumnWidths[idx]}px`;
                header.style.maxWidth = `${valueColumnWidths[idx]}px`;
                applyRowSquash(header, headerRowHeight, efFontSize, efWordWrap);
                header.style.fontWeight = efBold ? "bold" : "normal";
                header.style.fontStyle = efItalic ? "italic" : "normal";
                header.style.textDecoration = efUnderline ? "underline" : "none";
                header.style.fontFamily = efFontFamily;
                header.style.color = effectiveColor;
                header.style.textAlign = effectiveAlign;
                header.style.borderRight = vertBorderValue;

                if (specSettings.headerHorizontalGrid !== undefined) {
                    if (specSettings.headerHorizontalGrid) {
                        header.style.borderBottom = horizBorder2xValueOn;
                    } else {
                        header.style.borderBottom = 'hidden';
                    }
                }

                header.style.backgroundColor = effectiveBg;
                header.style.overflow = "hidden";
                header.style.textOverflow = "ellipsis";
                header.style.whiteSpace = efWordWrap ? "normal" : "nowrap";
                if (efWordWrap) {
                    header.style.wordBreak = "break-word";
                }
            });

            // Add column total headers — one per enabled base measure
            if (showTotalColumn) {
                for (let mIdx = 0; mIdx < M; mIdx++) {
                    if (!baseMeasureColTotalIncluded[mIdx]) continue;
                    let colTotalHeader = headerRow.insertCell();
                    colTotalHeader.textContent = baseMeasureHeaders[mIdx];
                    colTotalHeader.className = 'table-header-cell';
                    colTotalHeader.style.width = `${colTotalColumnWidths[mIdx]}px`;
                    colTotalHeader.style.minWidth = `${colTotalColumnWidths[mIdx]}px`;
                    colTotalHeader.style.maxWidth = `${colTotalColumnWidths[mIdx]}px`;
                    applyRowSquash(colTotalHeader, headerRowHeight, headerFontSize, headerWordWrap);
                    colTotalHeader.style.fontWeight = headerBold ? "bold" : "normal";
                    colTotalHeader.style.fontStyle = headerItalic ? "italic" : "normal";
                    colTotalHeader.style.textDecoration = headerUnderline ? "underline" : "none";
                    colTotalHeader.style.fontFamily = headerFontFamily;
                    colTotalHeader.style.color = headerTextColor;
                    colTotalHeader.style.textAlign = headerAlignment;
                    colTotalHeader.style.borderRight = vertBorderValue;
                    colTotalHeader.style.backgroundColor = headerBgColor;
                    colTotalHeader.style.overflow = "hidden";
                    colTotalHeader.style.textOverflow = "ellipsis";
                    colTotalHeader.style.whiteSpace = headerWordWrap ? "normal" : "nowrap";
                    if (headerWordWrap) {
                        colTotalHeader.style.wordBreak = "break-word";
                    }
                }
            }

            // One-time debug dump of valueColumn objects status
            if (values.length > 0) {
                const vc0 = values[0];
                console.log(`[DB CF INIT] measure0 name=${vc0.source.displayName} queryName=${vc0.source.queryName}`);
                console.log(`[DB CF INIT] measure0 .objects exists=${!!vc0.objects}, .objects type=${typeof vc0.objects}`);
                if (vc0.objects) {
                    console.log(`[DB CF INIT] measure0 .objects is array=${Array.isArray(vc0.objects)}, length=${(vc0.objects as any).length}`);
                    // Show first 3 entries
                    for (let z = 0; z < Math.min(3, rowCount); z++) {
                        console.log(`[DB CF INIT] measure0 .objects[${z}]=${JSON.stringify(vc0.objects[z])}`);
                    }
                }
                console.log(`[DB CF INIT] measure0 .source.objects=${JSON.stringify(vc0.source.objects)}`);
            }

            const categoryShowTotals = (categories?.sources || []).map((catSource: any) => {
                return dataViewObjects.getValue<boolean>(catSource.objects || {}, { objectName: "totals", propertyName: "showTotalRow" }, true);
            });

            // Per-category-level totalBehavior for subtotal rows
            const categoryLevelBehaviors: string[] = (categories?.sources || []).map((catSource: any) => {
                const raw = dataViewObjects.getValue<any>(catSource.objects || {}, { objectName: "totals", propertyName: "totalBehavior" }, "Measure");
                return typeof raw === "string" ? raw : (raw?.value || "Measure");
            });

            // Update global showTotalRow so the manual "Totals" at the bottom respects at least the first category's setting if categories exist.
            showTotalRow = categoryShowTotals.length > 0 ? categoryShowTotals[0] : showTotalRow;

            // Pre-scan: build sorted (value, bgColor) pairs per measure for CF interpolation on total rows
            const measureBgCFPairs: {value: number, color: string}[][] = [];
            for (let m = 0; m < values.length; m++) {
                const vc = values[m];
                const pairs: {value: number, color: string}[] = [];
                if (vc.objects) {
                    for (let r = 0; r < rowCount; r++) {
                        if (vc.objects[r]) {
                            const color = dataViewObjects.getFillColor(
                                vc.objects[r],
                                { objectName: "valueBackgroundConditionalFormatting", propertyName: "backgroundColor" }
                            );
                            const val = vc.values[r];
                            if (color && val !== null && val !== undefined) {
                                pairs.push({ value: Number(val), color });
                            }
                        }
                    }
                }
                pairs.sort((a, b) => a.value - b.value);
                measureBgCFPairs.push(pairs);
            }

            // Pre-scan: build sorted (value, dataBarColor) pairs per measure for CF interpolation on total rows
            const measureDbCFPairs: {value: number, color: string}[][] = [];
            for (let m = 0; m < values.length; m++) {
                const vc = values[m];
                const pairs: {value: number, color: string}[] = [];
                if (vc.objects) {
                    for (let r = 0; r < rowCount; r++) {
                        if (vc.objects[r]) {
                            const color = dataViewObjects.getFillColor(
                                vc.objects[r],
                                { objectName: "dataBarsConditionalFormatting", propertyName: "dataBarColor" }
                            );
                            const val = vc.values[r];
                            if (color && val !== null && val !== undefined) {
                                pairs.push({ value: Number(val), color });
                            }
                        }
                    }
                }
                pairs.sort((a, b) => a.value - b.value);
                measureDbCFPairs.push(pairs);
            }

            // Pre-scan: build sorted (value, textColor) pairs per measure for CF interpolation on total rows
            const measureTextCFPairs: {value: number, color: string}[][] = [];
            for (let m = 0; m < values.length; m++) {
                const vc = values[m];
                const pairs: {value: number, color: string}[] = [];
                if (vc.objects) {
                    for (let r = 0; r < rowCount; r++) {
                        if (vc.objects[r]) {
                            const color = dataViewObjects.getFillColor(
                                vc.objects[r],
                                { objectName: "valueConditionalFormatting", propertyName: "textColor" }
                            );
                            const val = vc.values[r];
                            if (color && val !== null && val !== undefined) {
                                pairs.push({ value: Number(val), color });
                            }
                        }
                    }
                }
                pairs.sort((a, b) => a.value - b.value);
                measureTextCFPairs.push(pairs);
            }

            // Create data rows
            for (let i = 0; i < rowCount; i++) {
                // Determine if this is a subtotal row and at which category level
                let rowTotalIdx = -1;
                let rowPaths_check: any[] | null = null;
                if (hasCategories) {
                    rowPaths_check = categories.paths ? categories.paths[i] : [categories.values[i]];
                    rowTotalIdx = rowPaths_check ? rowPaths_check.indexOf("Total") : -1;
                    if (rowTotalIdx >= 0 && !categoryShowTotals[rowTotalIdx]) {
                        continue;
                    }
                }

                let row = this.table.insertRow();
                row.className = 'table-data-row';
                row.style.borderBottom = horizBorderValue;
                // Apply alternating background colors with support for conditional formatting
                const isEvenRow = i % 2 === 0;
                const rowHeight = isEvenRow ? valueRowHeight : alternateValueRowHeight;
                row.style.height = `${rowHeight}px`;
                const rowBgColor = getRowBackgroundColor(i, isEvenRow, dataView);
                row.style.backgroundColor = rowBgColor;

                // Determine if this row is a subtotal row
                const isSubtotalRow = rowTotalIdx >= 0;

                // Add category value
                if (hasCategories) {
                    const rowPaths = categories.paths[i] || [categories.values[i]];
                    const isTotal = rowPaths.some((p: any) => p === "Total");
                    rowPaths.forEach((segmentValue: any, lvlIdx: number) => {
                        let categoryCell = row.insertCell();
                        categoryCell.textContent = String(segmentValue);
                        categoryCell.className = 'table-category-cell';
                        categoryCell.style.width = `${categoryColumnWidth}px`;
                        categoryCell.style.minWidth = `${categoryColumnWidth}px`;
                        categoryCell.style.maxWidth = `${categoryColumnWidth}px`;
                        applyRowSquash(categoryCell, rowHeight, isTotal ? totalRowFontSize : cellFontSize, isTotal ? totalRowWordWrap : categoryWordWrap);
                        categoryCell.style.fontWeight = isTotal ? (totalRowBold ? "bold" : "normal") : (valueBold ? "bold" : "normal");
                        categoryCell.style.fontStyle = isTotal ? (totalRowItalic ? "italic" : "normal") : "normal";
                        categoryCell.style.textDecoration = isTotal ? (totalRowUnderline ? "underline" : "none") : "none";
                        categoryCell.style.fontFamily = isTotal ? totalRowFontFamily : cellFontFamily;
                        categoryCell.style.fontSize = isTotal ? `${totalRowFontSize}px` : `${cellFontSize}px`;
                        categoryCell.style.borderRight = vertBorderValue;
                        categoryCell.style.backgroundColor = rowBgColor;
                        categoryCell.style.color = getCategoryTextColor(i, dataView, isTotal);
                        categoryCell.style.overflow = "hidden";
                        categoryCell.style.textOverflow = "ellipsis";
                        categoryCell.style.whiteSpace = (isTotal ? totalRowWordWrap : categoryWordWrap) ? "normal" : "nowrap";
                        if ((isTotal ? totalRowWordWrap : categoryWordWrap)) {
                            categoryCell.style.wordBreak = "break-word";
                        }
                    });
                }

                // Add measure values
                values.forEach((valueColumn, measureIndex) => {
                    if (i < 2 && measureIndex === 0) {
                        const obj = valueColumn.objects?.[i];
                        const hasObjs = !!valueColumn.objects;
                        const objKeys = obj ? Object.keys(obj).join(',') : 'none';
                        console.log(`[DB CF DEBUG] row=${i} measure=${measureIndex} hasObjects=${hasObjs} obj[i]keys=${objKeys}`);
                        if (hasObjs && valueColumn.objects[i]) {
                            console.log(`[DB CF DEBUG]   obj[${i}] full:`, JSON.stringify(valueColumn.objects[i]));
                        }
                        // Also check if valueConditionalFormatting objects exist (this card is known to work)
                        if (hasObjs) {
                            console.log(`[DB CF DEBUG]   objects array length-ish: objects is array=${Array.isArray(valueColumn.objects)}, typeof=${typeof valueColumn.objects}`);
                            // Check first few entries
                            for (let z = 0; z < Math.min(3, (valueColumn.objects as any).length || 3); z++) {
                                if (valueColumn.objects[z]) {
                                    console.log(`[DB CF DEBUG]   objects[${z}] keys: ${Object.keys(valueColumn.objects[z]).join(',')}`);
                                }
                            }
                        }
                        // Check source.objects for the measure-level defaults
                        if (valueColumn.source?.objects) {
                            console.log(`[DB CF DEBUG]   source.objects keys: ${Object.keys(valueColumn.source.objects).join(',')}`);
                        }
                    }
                    const defaultMeasureTextColor = dataViewObjects.getFillColor(
                        valueColumn.source.objects || {},
                        { objectName: "valueConditionalFormatting", propertyName: "textColor" },
                        (typeof isEvenRow !== 'undefined') ? (isEvenRow ? textColor : alternateTextColor) : textColor
                    );

                    const defaultMeasureBgColor = dataViewObjects.getFillColor(
                        valueColumn.source.objects || {},
                        { objectName: "valueBackgroundConditionalFormatting", propertyName: "backgroundColor" },
                        (typeof isEvenRow !== 'undefined') ? (isEvenRow ? backgroundColor : alternateBackgroundColor) : backgroundColor
                    );

                    let cellTextColor = defaultMeasureTextColor;
                    // Read per-measure text color applyTo
                    const txtApplyToRaw = dataViewObjects.getValue<any>(
                        valueColumn.source.objects || {},
                        { objectName: "valueConditionalFormatting", propertyName: "applyTo" },
                        "valuesOnly"
                    );
                    const measureTxtApplyTo = typeof txtApplyToRaw === "string" ? txtApplyToRaw : (txtApplyToRaw?.value || "valuesOnly");
                    // When applyTo is "totalsOnly", regular value rows should not get the static text color
                    if (measureTxtApplyTo === "totalsOnly" && !isSubtotalRow) {
                        cellTextColor = (typeof isEvenRow !== 'undefined') ? (isEvenRow ? textColor : alternateTextColor) : textColor;
                    }
                    const shouldApplyTxtCF = (measureTxtApplyTo === "valuesAndTotals") ||
                        (measureTxtApplyTo === "valuesOnly" && !isSubtotalRow) ||
                        (measureTxtApplyTo === "totalsOnly" && isSubtotalRow);
                    if (shouldApplyTxtCF) {
                        if (valueColumn.objects && valueColumn.objects[i]) {
                            const cfColor = dataViewObjects.getFillColor(
                                valueColumn.objects[i],
                                { objectName: "valueConditionalFormatting", propertyName: "textColor" }
                            );
                            if (cfColor) {
                                cellTextColor = cfColor;
                            }
                        } else if (isSubtotalRow && measureTextCFPairs[measureIndex]?.length > 0) {
                            const totalVal = valueColumn.values[i];
                            if (totalVal !== null && totalVal !== undefined) {
                                const interpolated = interpolateCFColor(Number(totalVal), measureTextCFPairs[measureIndex]);
                                if (interpolated) cellTextColor = interpolated;
                            }
                        }
                    }

                    let cellBackgroundColor = defaultMeasureBgColor;
                    // Read per-measure applyTo from source.objects (measure-level, not per-row)
                    const bgApplyToRaw = dataViewObjects.getValue<any>(
                        valueColumn.source.objects || {},
                        { objectName: "valueBackgroundConditionalFormatting", propertyName: "applyTo" },
                        "valuesOnly"
                    );
                    const measureBgApplyTo = typeof bgApplyToRaw === "string" ? bgApplyToRaw : (bgApplyToRaw?.value || "valuesOnly");
                    // When applyTo is "totalsOnly", regular value rows should not get the static bg color
                    if (measureBgApplyTo === "totalsOnly" && !isSubtotalRow) {
                        cellBackgroundColor = (typeof isEvenRow !== 'undefined') ? (isEvenRow ? backgroundColor : alternateBackgroundColor) : backgroundColor;
                    }
                    const shouldApplyBgCF = (measureBgApplyTo === "valuesAndTotals") ||
                        (measureBgApplyTo === "valuesOnly" && !isSubtotalRow) ||
                        (measureBgApplyTo === "totalsOnly" && isSubtotalRow);
                    if (shouldApplyBgCF) {
                        if (valueColumn.objects && valueColumn.objects[i]) {
                            // Regular row: PBI delivered per-row CF color
                            const cfBgColor = dataViewObjects.getFillColor(
                                valueColumn.objects[i],
                                { objectName: "valueBackgroundConditionalFormatting", propertyName: "backgroundColor" }
                            );
                            if (cfBgColor) {
                                cellBackgroundColor = cfBgColor;
                            }
                        } else if (isSubtotalRow && measureBgCFPairs[measureIndex]?.length > 0) {
                            // Total row: PBI doesn't deliver CF for totals, interpolate from regular row colors
                            const totalVal = valueColumn.values[i];
                            if (totalVal !== null && totalVal !== undefined) {
                                const interpolated = interpolateCFColor(Number(totalVal), measureBgCFPairs[measureIndex]);
                                if (interpolated) {
                                    cellBackgroundColor = interpolated;
                                }
                            }
                        }
                    }

                    let cell = row.insertCell();
                    let value = valueColumn.values[i];
                    cell.style.position = "relative"; // for data bar positioning

                    // Apply per-category totalBehavior to subtotal rows (lower levels only)
                    if (rowTotalIdx > 0 && categoryLevelBehaviors[rowTotalIdx]) {
                        const subtotalBehavior = categoryLevelBehaviors[rowTotalIdx];
                        if (subtotalBehavior === "None") {
                            value = null;
                        } else if (subtotalBehavior !== "Measure") {
                            // Re-compute from detail rows within this group
                            const groupPrefix = rowPaths_check ? rowPaths_check.slice(0, rowTotalIdx) : [];
                            const detailValues: number[] = [];
                            for (let j = 0; j < rowCount; j++) {
                                const jPaths = categories.paths ? categories.paths[j] : [categories.values[j]];
                                if (!jPaths || jPaths.indexOf("Total") >= 0) continue;
                                let match = true;
                                for (let k = 0; k < groupPrefix.length; k++) {
                                    if (jPaths[k] !== groupPrefix[k]) { match = false; break; }
                                }
                                if (match) {
                                    const v = valueColumn.values[j];
                                    if (v !== null && v !== undefined) detailValues.push(Number(v));
                                }
                            }
                            if (detailValues.length > 0) {
                                if (subtotalBehavior === "Sum") value = detailValues.reduce((a, b) => a + b, 0);
                                else if (subtotalBehavior === "Average") value = detailValues.reduce((a, b) => a + b, 0) / detailValues.length;
                                else if (subtotalBehavior === "Count") value = detailValues.length;
                                else if (subtotalBehavior === "Count Distinct") value = new Set(detailValues).size;
                                else if (subtotalBehavior === "Max") value = Math.max(...detailValues);
                                else if (subtotalBehavior === "Min") value = Math.min(...detailValues);
                            } else {
                                value = null;
                            }
                        }
                    }

                    if (value !== null && value !== undefined) {
                        let numValue = Number(value);
                        const specSettings = measureSettingsList[measureIndex];
                        const dynamicFormat = valueColumn.objects?.[i]?.general?.formatString as string;
                        const cellFormat = dynamicFormat || measureFormats[measureIndex];
                        const formattedValue = formatValue(numValue, cellFormat, specSettings.displayUnits, specSettings.decimalPlaces);

                        const objects = valueColumn.source.objects || {};
                        const showDataBars = dataViewObjects.getValue<boolean>(objects, { objectName: "dataBarsFormatting", propertyName: "showDataBars" }, false);
                        const showOnRowTotals = dataViewObjects.getValue<boolean>(objects, { objectName: "dataBarsFormatting", propertyName: "showOnRowTotals" }, true);
                        
                        if (showDataBars && (!isSubtotalRow || showOnRowTotals)) {
                            let cellDataBarColor = dataViewObjects.getFillColor(objects, { objectName: "dataBarsConditionalFormatting", propertyName: "dataBarColor" }, "#31b6fd");
                            // Reset static color when applyTo excludes this row type
                            const dbApplyToCheck = dataViewObjects.getValue<any>(objects, { objectName: "dataBarsConditionalFormatting", propertyName: "applyTo" }, "valuesOnly");
                            const dbApplyToVal = typeof dbApplyToCheck === "string" ? dbApplyToCheck : (dbApplyToCheck?.value || "valuesOnly");
                            if (dbApplyToVal === "totalsOnly" && !isSubtotalRow) cellDataBarColor = "#31b6fd";
                            const matchDataBarColor = dataViewObjects.getValue<boolean>(objects, { objectName: "dataBarsFormatting", propertyName: "matchDataBarColor" }, true);
                            const showZeroLine = dataViewObjects.getValue<boolean>(objects, { objectName: "dataBarsFormatting", propertyName: "showZeroLine" }, false);
                            const zeroLineColor = dataViewObjects.getFillColor(objects, { objectName: "dataBarsFormatting", propertyName: "zeroLineColor" }, "#000000");
                            const zeroLineTransparency = dataViewObjects.getValue<number>(objects, { objectName: "dataBarsFormatting", propertyName: "zeroLineTransparency" }, 0);
                            const dataBarHeight = dataViewObjects.getValue<number>(objects, { objectName: "dataBarsFormatting", propertyName: "dataBarHeight" }, 80);
                            const transparency = dataViewObjects.getValue<number>(objects, { objectName: "dataBarsFormatting", propertyName: "transparency" }, 20);
                            const borderOn = dataViewObjects.getValue<boolean>(objects, { objectName: "dataBarsFormatting", propertyName: "borderOn" }, true);
                            const borderThickness = dataViewObjects.getValue<number>(objects, { objectName: "dataBarsFormatting", propertyName: "borderThickness" }, 1);
                            const borderColor = dataViewObjects.getFillColor(objects, { objectName: "dataBarsFormatting", propertyName: "borderColor" }, "#000000");
                            const axisTypeRaw = dataViewObjects.getValue<any>(objects, { objectName: "dataBarsFormatting", propertyName: "axisType" }, "Amount");
                            const axisType = typeof axisTypeRaw === "string" ? axisTypeRaw : (axisTypeRaw.value || "Amount");
                            const minValueObj = dataViewObjects.getValue<number>(objects, { objectName: "dataBarsFormatting", propertyName: "minValue" }, null);
                            const maxValueObj = dataViewObjects.getValue<number>(objects, { objectName: "dataBarsFormatting", propertyName: "maxValue" }, null);
                            const labelsOutside = dataViewObjects.getValue<boolean>(objects, { objectName: "dataBarsFormatting", propertyName: "labelsOutside" }, false);
                            const verticalDataBars = dataViewObjects.getValue<boolean>(objects, { objectName: "dataBarsFormatting", propertyName: "verticalDataBars" }, false);
                            
                            // Check for conditional formatting on data bar color
                            const dbCFApplyToRaw = dataViewObjects.getValue<any>(objects, { objectName: "dataBarsConditionalFormatting", propertyName: "applyTo" }, "valuesOnly");
                            const dbCFApplyTo = typeof dbCFApplyToRaw === "string" ? dbCFApplyToRaw : (dbCFApplyToRaw?.value || "valuesOnly");
                            const shouldApplyDbCF = (dbCFApplyTo === "valuesAndTotals") ||
                                (dbCFApplyTo === "valuesOnly" && !isSubtotalRow) ||
                                (dbCFApplyTo === "totalsOnly" && isSubtotalRow);
                            if (shouldApplyDbCF) {
                                if (valueColumn.objects && valueColumn.objects[i]) {
                                    const cfDataBarColor = dataViewObjects.getFillColor(
                                        valueColumn.objects[i],
                                        { objectName: "dataBarsConditionalFormatting", propertyName: "dataBarColor" }
                                    );
                                    if (cfDataBarColor) cellDataBarColor = cfDataBarColor;
                                } else if (isSubtotalRow) {
                                    if (measureDbCFPairs[measureIndex]?.length > 0) {
                                        const interpolated = interpolateCFColor(numValue, measureDbCFPairs[measureIndex]);
                                        if (interpolated) cellDataBarColor = interpolated;
                                    } else {
                                        const staticDb = dataViewObjects.getFillColor(objects, { objectName: "dataBarsConditionalFormatting", propertyName: "dataBarColor" });
                                        if (staticDb) cellDataBarColor = staticDb;
                                    }
                                }
                            }

                            let min_raw = measureMins[measureIndex];
                            let max_raw = measureMaxs[measureIndex];
                            let min = min_raw;
                            let max = max_raw;
                            
                            let domainRange = max_raw - min_raw;
                            if (domainRange <= 0) domainRange = 1;
                            
                            if (minValueObj !== null && minValueObj !== undefined) {
                                if (axisType === "Percentage") {
                                    min = min_raw - domainRange * (minValueObj / 100);
                                } else {
                                    min = minValueObj;
                                }
                            }
                            
                            if (maxValueObj !== null && maxValueObj !== undefined) {
                                if (axisType === "Percentage") {
                                    max = max_raw + domainRange * (maxValueObj / 100);
                                } else {
                                    max = maxValueObj;
                                }
                            }
                            let range = max - min;
                            if (range <= 0) range = 1;

                            // Calculate width percentage
                            let widthPct = 0;
                            let leftPct = 0;

                            let clampedValue = Math.max(min, Math.min(max, numValue));
                            let zeroPoint = Math.max(min, Math.min(max, 0));

                            let leftMarginPct = 0;
                            let rightMarginPct = 0;
                            if (labelsOutside && !verticalDataBars) {
                                const dbFont = `${cellFontSize}px ${cellFontFamily}`;
                                const dbCellW = valueColumnWidths[measureIndex];
                                if (min < 0) leftMarginPct = computeLabelMarginPct(formatValue(min, cellFormat, specSettings.displayUnits, specSettings.decimalPlaces), dbCellW, dbFont);
                                if (max > 0) rightMarginPct = computeLabelMarginPct(formatValue(max, cellFormat, specSettings.displayUnits, specSettings.decimalPlaces), dbCellW, dbFont);
                            }
                              let scaleMultiplier = (100 - leftMarginPct - rightMarginPct) / 100;

                              if (clampedValue >= zeroPoint) {
                                  widthPct = ((clampedValue - zeroPoint) / range) * 100 * scaleMultiplier;
                                  leftPct = leftMarginPct + ((zeroPoint - min) / range) * 100 * scaleMultiplier;
                              } else {
                                  widthPct = ((zeroPoint - clampedValue) / range) * 100 * scaleMultiplier;
                                  leftPct = leftMarginPct + ((clampedValue - min) / range) * 100 * scaleMultiplier;
                              }

                            // Create data bar div
                            let dataBar = document.createElement("div");
                            dataBar.style.position = "absolute";
                            dataBar.style.backgroundColor = applyTransparency(cellDataBarColor, transparency);
                            dataBar.style.zIndex = "1";

                            if (verticalDataBars) {
                                const leftCenterPct = (100 - dataBarHeight) / 2;
                                dataBar.style.left = `${leftCenterPct}%`;
                                dataBar.style.width = `${dataBarHeight}%`;
                                dataBar.style.bottom = `${leftPct}%`;
                                dataBar.style.height = `${widthPct}%`;
                            } else {
                                const topPct = (100 - dataBarHeight) / 2;
                                dataBar.style.top = `${topPct}%`;
                                dataBar.style.height = `${dataBarHeight}%`;
                                dataBar.style.left = `${leftPct}%`;
                                dataBar.style.width = `${widthPct}%`;
                            }

                            if (borderOn) {
                                let finalBorderColor = matchDataBarColor ? cellDataBarColor : borderColor;
                                dataBar.style.border = `${borderThickness}px solid ${finalBorderColor}`;
                                dataBar.style.boxSizing = "border-box";
                            }

                            cell.appendChild(dataBar);

                            if (showZeroLine) {
                                let zeroLine = document.createElement("div");
                                zeroLine.style.position = "absolute";
                                let zPosPct = ((zeroPoint - min) / range) * 100 * scaleMultiplier + leftMarginPct;
                                if (verticalDataBars) {
                                    zeroLine.style.left = "0";
                                    zeroLine.style.right = "0";
                                    zeroLine.style.height = "2px";
                                    zeroLine.style.bottom = `calc(${zPosPct}% - 1px)`;
                                } else {
                                    zeroLine.style.top = "0";
                                    zeroLine.style.bottom = "0";
                                    zeroLine.style.width = "2px";
                                    zeroLine.style.left = `calc(${zPosPct}% - 1px)`;
                                }
                                zeroLine.style.backgroundColor = applyTransparency(zeroLineColor, zeroLineTransparency);
                                zeroLine.style.zIndex = "1"; 
                                cell.appendChild(zeroLine);
                            }

                            // Data bar markers settings
                            const showMarker = dataViewObjects.getValue<boolean>(objects, { objectName: "dataBarMarkers", propertyName: "showMarker" }, false);
                            if (showMarker) {
                                let markerShapeRaw = dataViewObjects.getValue<any>(objects, { objectName: "dataBarMarkers", propertyName: "markerShape" }, "circle");
                                const markerShape = typeof markerShapeRaw === "string" ? markerShapeRaw : (markerShapeRaw.value || "circle");
                                const markerSize = dataViewObjects.getValue<number>(objects, { objectName: "dataBarMarkers", propertyName: "markerSize" }, 10);
                                let cellMarkerColor = dataViewObjects.getFillColor(objects, { objectName: "dataBarMarkers", propertyName: "markerColor" }, "#000000");
                                
                                if (valueColumn.objects && valueColumn.objects[i]) {
                                    const cfMarkerColor = dataViewObjects.getFillColor(
                                        valueColumn.objects[i],
                                        { objectName: "dataBarMarkers", propertyName: "markerColor" }
                                    );
                                    if (cfMarkerColor) {
                                        cellMarkerColor = cfMarkerColor;
                                    }
                                }

                                let marker = document.createElement("div");
                                marker.style.position = "absolute";
                                marker.style.zIndex = "3";
                                marker.style.width = `${markerSize}px`;
                                marker.style.height = `${markerSize}px`;

                                if (verticalDataBars) {
                                    let markerBottomPct = numValue >= 0 ? leftPct + widthPct : leftPct;
                                    marker.style.left = `calc(50% - ${markerSize / 2}px)`;
                                    marker.style.bottom = `calc(${markerBottomPct}% - ${markerSize / 2}px)`;
                                } else {
                                    let markerLeftPct = numValue >= 0 ? leftPct + widthPct : leftPct;
                                    marker.style.left = `calc(${markerLeftPct}% - ${markerSize / 2}px)`;
                                    marker.style.top = `calc(50% - ${markerSize / 2}px)`;
                                }

                                if (markerShape === "circle") {
                                    marker.style.backgroundColor = cellMarkerColor;
                                    marker.style.borderRadius = "50%";
                                } else if (markerShape === "cross") {
                                    marker.style.backgroundColor = "transparent";
                                    let line1 = document.createElement("div");
                                    line1.style.position = "absolute";
                                    line1.style.backgroundColor = cellMarkerColor;
                                    line1.style.width = "100%";
                                    line1.style.height = "2px";
                                    line1.style.top = "calc(50% - 1px)";
                                    line1.style.transform = "rotate(45deg)";

                                    let line2 = document.createElement("div");
                                    line2.style.position = "absolute";
                                    line2.style.backgroundColor = cellMarkerColor;
                                    line2.style.width = "100%";
                                    line2.style.height = "2px";
                                    line2.style.top = "calc(50% - 1px)";
                                    line2.style.transform = "rotate(-45deg)";

                                    marker.appendChild(line1);
                                    marker.appendChild(line2);
                                } else if (markerShape === "horizontalLine") {
                                    marker.style.backgroundColor = cellMarkerColor;
                                    marker.style.height = "2px";
                                    marker.style.top = "calc(50% - 1px)";
                                    marker.style.width = `${markerSize}px`;
                                } else if (markerShape === "verticalLine") {
                                    marker.style.backgroundColor = cellMarkerColor;
                                    marker.style.width = "2px";
                                    if (verticalDataBars) {
                                        let markerBottomPct = numValue >= 0 ? leftPct + widthPct : leftPct;
                                        marker.style.left = `calc(50% - 1px)`;
                                        marker.style.bottom = `calc(${markerBottomPct}% - ${markerSize / 2}px)`;
                                    } else {
                                        let markerLeftPct = numValue >= 0 ? leftPct + widthPct : leftPct;
                                        marker.style.left = `calc(${markerLeftPct}% - 1px)`;
                                    }
                                } else if (markerShape === "semiCircle") {
                                    marker.style.backgroundColor = cellMarkerColor;
                                    if (verticalDataBars) {
                                        let markerBottomPct = numValue >= 0 ? leftPct + widthPct : leftPct;
                                        if (numValue >= 0) {
                                            marker.style.borderTopLeftRadius = `${markerSize}px`;
                                            marker.style.borderTopRightRadius = `${markerSize}px`;
                                            marker.style.height = `${markerSize / 2}px`;
                                            marker.style.bottom = `calc(${markerBottomPct}%)`;
                                        } else {
                                            marker.style.borderBottomLeftRadius = `${markerSize}px`;
                                            marker.style.borderBottomRightRadius = `${markerSize}px`;
                                            marker.style.height = `${markerSize / 2}px`;
                                            marker.style.bottom = `calc(${markerBottomPct}% - ${markerSize / 2}px)`;
                                        }
                                    } else {
                                        let markerLeftPct = numValue >= 0 ? leftPct + widthPct : leftPct;
                                        // Draw semi circle pointing outwards
                                        if (numValue >= 0) {
                                            marker.style.borderTopRightRadius = `${markerSize}px`;
                                            marker.style.borderBottomRightRadius = `${markerSize}px`;
                                            marker.style.width = `${markerSize / 2}px`;
                                            marker.style.left = `calc(${markerLeftPct}%)`;
                                        } else {
                                            marker.style.borderTopLeftRadius = `${markerSize}px`;
                                            marker.style.borderBottomLeftRadius = `${markerSize}px`;
                                            marker.style.width = `${markerSize / 2}px`;
                                            marker.style.left = `calc(${markerLeftPct}% - ${markerSize / 2}px)`;
                                        }
                                    }
                                }

                                cell.appendChild(marker);
                            }

                            let textDiv = document.createElement("div");
                            textDiv.style.zIndex = "2";
                            textDiv.textContent = formattedValue;
                            
                            if (labelsOutside) {
                                textDiv.style.position = "absolute";
                                textDiv.style.whiteSpace = "nowrap";
                                if (verticalDataBars) {
                                    textDiv.style.left = "50%";
                                    textDiv.style.transform = "translateX(-50%)";
                                    if (numValue >= 0) {
                                        textDiv.style.bottom = `calc(${leftPct + widthPct}% + 4px)`;
                                    } else {
                                        textDiv.style.top = `calc(${100 - leftPct}% + 4px)`;
                                    }
                                } else {
                                    textDiv.style.top = "50%";
                                    textDiv.style.transform = "translateY(-50%)";
                                    if (numValue >= 0) {
                                        textDiv.style.left = `calc(${leftPct + widthPct}% + 4px)`;
                                    } else {
                                        textDiv.style.right = `calc(${100 - leftPct}% + 4px)`;
                                    }
                                }
                            } else {
                                textDiv.style.position = "relative";
                            }
                            cell.appendChild(textDiv);
                        } else {
                            cell.textContent = formattedValue;
                        }
                    } else {
                        cell.textContent = '-';
                    }

                    cell.className = 'table-data-cell';
                    cell.style.width = `${valueColumnWidths[measureIndex]}px`;
                    cell.style.minWidth = `${valueColumnWidths[measureIndex]}px`;
                    cell.style.maxWidth = `${valueColumnWidths[measureIndex]}px`;
                    cell.style.fontWeight = valueBold ? "bold" : "normal";
                      cell.style.fontStyle = cellItalic ? "italic" : "normal";
                      cell.style.textDecoration = cellUnderline ? "underline" : "none";
                    cell.style.borderRight = vertBorderValue;
                    cell.style.backgroundColor = cellBackgroundColor;
                    cell.style.color = cellTextColor;
                    cell.style.overflow = "hidden";
                    cell.style.textOverflow = "ellipsis";

                    let specSettings = measureSettingsList[measureIndex];
                    let specRowBgColor = isEvenRow ? 
                        (specSettings.backgroundColor !== undefined ? specSettings.backgroundColor : cellBackgroundColor) : 
                        (specSettings.alternateBackgroundColor !== undefined ? specSettings.alternateBackgroundColor : cellBackgroundColor);
                    let specCellTextColor = isEvenRow ? 
                        (specSettings.textColor !== undefined ? specSettings.textColor : cellTextColor) : 
                        (specSettings.alternateTextColor !== undefined ? specSettings.alternateTextColor : cellTextColor);

                    let effectiveBg = specRowBgColor;
                    let effectiveColor = specCellTextColor;
                    if (specSettings.transparency > 0) {
                        effectiveColor = applyTransparency(effectiveColor, specSettings.transparency);
                    }

                    let efBold = specSettings.bold !== undefined ? specSettings.bold : valueBold;
                    let efItalic = specSettings.italic !== undefined ? specSettings.italic : cellItalic;
                    let efUnderline = specSettings.underline !== undefined ? specSettings.underline : cellUnderline;
                    let efFontFamily = specSettings.fontFamily !== undefined ? specSettings.fontFamily : cellFontFamily;
                    let efFontSize = specSettings.fontSize !== undefined ? specSettings.fontSize : cellFontSize;
                    let efWordWrap = specSettings.textWrap !== undefined ? specSettings.textWrap : valueWordWrap;
                    let effectiveAlign = specSettings.alignment ? specSettings.alignment : "right";

                    if (specSettings.horizontalGrid !== undefined) {
                        if (specSettings.horizontalGrid) {
                            cell.style.borderBottom = horizBorderValueOn;
                        } else {
                            cell.style.borderBottom = 'hidden';
                        }
                    }

                    // Override with totals formatting for subtotal rows
                    if (isSubtotalRow) {
                        efBold = totalRowBold;
                        efItalic = totalRowItalic;
                        efUnderline = totalRowUnderline;
                        efFontFamily = totalRowFontFamily;
                        efFontSize = totalRowFontSize;
                        efWordWrap = totalRowWordWrap;
                    }

                    applyRowSquash(cell, rowHeight, efFontSize, efWordWrap);
                    cell.style.backgroundColor = effectiveBg;
                    cell.style.color = effectiveColor;
                    cell.style.fontWeight = efBold ? "bold" : "normal";
                    cell.style.fontStyle = efItalic ? "italic" : "normal";
                    cell.style.textDecoration = efUnderline ? "underline" : "none";
                    cell.style.fontFamily = efFontFamily;
                    cell.style.fontSize = `${efFontSize}px`;
                    cell.style.whiteSpace = efWordWrap ? "normal" : "nowrap";

                    cell.style.textAlign = effectiveAlign;
                    if (efWordWrap) {
                        cell.style.wordBreak = "break-word";
                    }

                    // Tooltip for measure value cell
                    const tooltipItems: VisualTooltipDataItem[] = [];
                    if (hasCategories) {
                        const rowPaths = categories.paths[i] || [categories.values[i]];
                        rowPaths.forEach((seg: any, lvlIdx: number) => {
                            if (seg !== "Total" && seg !== "" && seg !== undefined) {
                                const catName = categories.sources[lvlIdx]?.displayName || "Category";
                                tooltipItems.push({ displayName: catName, value: String(seg) });
                            }
                        });
                    }
                    tooltipItems.push({
                        displayName: valueColumn.source.displayName || "Value",
                        value: cell.textContent || "-"
                    });
                    this.addTooltip(cell, tooltipItems);
                });

                // Add column total cells for this row — one per enabled base measure
                if (showTotalColumn) {
                    for (let mIdx = 0; mIdx < M; mIdx++) {
                        if (!baseMeasureColTotalIncluded[mIdx]) continue;
                        let colTotalCell = row.insertCell();
                        colTotalCell.style.position = "relative";
                        const colTotalVal = colTotalsPerMeasure[mIdx][i];
                        if (colTotalVal !== null && colTotalVal !== undefined) {
                            // Use dynamic format string from semantic model (per-row, per-measure)
                            let ctDynamicFormat: string | undefined;
                            if (hasColumnGrouping && columnSubtotalValueKeys.length > mIdx && storedFlatRows) {
                                ctDynamicFormat = storedFlatRows[i]?.rawValues?.[columnSubtotalValueKeys[mIdx]]?.objects?.general?.formatString;
                            }
                            if (!ctDynamicFormat && values[mIdx]?.objects) {
                                ctDynamicFormat = values[mIdx].objects[i]?.general?.formatString;
                            }
                            const ctFormat = ctDynamicFormat || baseMeasureFormats[mIdx] || "";
                            const ctDisplayUnits = baseMeasureSettings[mIdx].displayUnits;
                            const ctDecimalPlaces = baseMeasureSettings[mIdx].decimalPlaces;
                            const ctFormattedValue = formatValue(colTotalVal, ctFormat, ctDisplayUnits, ctDecimalPlaces);

                            // Check if data bars should be rendered on column total cells
                            const ctObjects = baseValues[mIdx].source.objects || {};
                            const ctShowDataBars = dataViewObjects.getValue<boolean>(ctObjects, { objectName: "dataBarsFormatting", propertyName: "showDataBars" }, false);
                            const ctShowOnColumnTotals = dataViewObjects.getValue<boolean>(ctObjects, { objectName: "dataBarsFormatting", propertyName: "showOnColumnTotals" }, true);

                            if (ctShowDataBars && ctShowOnColumnTotals) {
                                let ctDataBarColor = dataViewObjects.getFillColor(ctObjects, { objectName: "dataBarsConditionalFormatting", propertyName: "dataBarColor" }, "#31b6fd");

                                // Apply data bar CF applyTo for column total cells
                                const ctDbCFApplyToRaw = dataViewObjects.getValue<any>(ctObjects, { objectName: "dataBarsConditionalFormatting", propertyName: "applyTo" }, "valuesOnly");
                                const ctDbCFApplyTo = typeof ctDbCFApplyToRaw === "string" ? ctDbCFApplyToRaw : (ctDbCFApplyToRaw?.value || "valuesOnly");
                                if (ctDbCFApplyTo === "valuesOnly") {
                                    ctDataBarColor = "#31b6fd";
                                } else if (ctDbCFApplyTo === "valuesAndTotals" || ctDbCFApplyTo === "totalsOnly") {
                                    if (measureDbCFPairs[mIdx]?.length > 0 && colTotalVal !== null && colTotalVal !== undefined) {
                                        const interpolated = interpolateCFColor(Number(colTotalVal), measureDbCFPairs[mIdx]);
                                        if (interpolated) ctDataBarColor = interpolated;
                                    }
                                }

                                const ctMatchColor = dataViewObjects.getValue<boolean>(ctObjects, { objectName: "dataBarsFormatting", propertyName: "matchDataBarColor" }, true);
                                const ctShowZeroLine = dataViewObjects.getValue<boolean>(ctObjects, { objectName: "dataBarsFormatting", propertyName: "showZeroLine" }, false);
                                const ctZeroLineColor = dataViewObjects.getFillColor(ctObjects, { objectName: "dataBarsFormatting", propertyName: "zeroLineColor" }, "#000000");
                                const ctZeroLineTransparency = dataViewObjects.getValue<number>(ctObjects, { objectName: "dataBarsFormatting", propertyName: "zeroLineTransparency" }, 0);
                                const ctDbHeight = dataViewObjects.getValue<number>(ctObjects, { objectName: "dataBarsFormatting", propertyName: "dataBarHeight" }, 80);
                                const ctDbTransparency = dataViewObjects.getValue<number>(ctObjects, { objectName: "dataBarsFormatting", propertyName: "transparency" }, 20);
                                const ctBorderOn = dataViewObjects.getValue<boolean>(ctObjects, { objectName: "dataBarsFormatting", propertyName: "borderOn" }, true);
                                const ctBorderThickness = dataViewObjects.getValue<number>(ctObjects, { objectName: "dataBarsFormatting", propertyName: "borderThickness" }, 1);
                                const ctBorderColor = dataViewObjects.getFillColor(ctObjects, { objectName: "dataBarsFormatting", propertyName: "borderColor" }, "#000000");
                                const ctAxisTypeRaw = dataViewObjects.getValue<any>(ctObjects, { objectName: "dataBarsFormatting", propertyName: "axisType" }, "Amount");
                                const ctAxisType = typeof ctAxisTypeRaw === "string" ? ctAxisTypeRaw : (ctAxisTypeRaw.value || "Amount");
                                const ctMinValueObj = dataViewObjects.getValue<number>(ctObjects, { objectName: "dataBarsFormatting", propertyName: "minValue" }, null);
                                const ctMaxValueObj = dataViewObjects.getValue<number>(ctObjects, { objectName: "dataBarsFormatting", propertyName: "maxValue" }, null);
                                const ctLabelsOutside = dataViewObjects.getValue<boolean>(ctObjects, { objectName: "dataBarsFormatting", propertyName: "labelsOutside" }, false);
                                const ctVerticalDataBars = dataViewObjects.getValue<boolean>(ctObjects, { objectName: "dataBarsFormatting", propertyName: "verticalDataBars" }, false);

                                let numValue = Number(colTotalVal);
                                let min_raw = measureMins[mIdx];
                                let max_raw = measureMaxs[mIdx];
                                let min = min_raw;
                                let max = max_raw;
                                let domainRange = max_raw - min_raw;
                                if (domainRange <= 0) domainRange = 1;
                                if (ctMinValueObj !== null && ctMinValueObj !== undefined) {
                                    min = ctAxisType === "Percentage" ? min_raw - domainRange * (ctMinValueObj / 100) : ctMinValueObj;
                                }
                                if (ctMaxValueObj !== null && ctMaxValueObj !== undefined) {
                                    max = ctAxisType === "Percentage" ? max_raw + domainRange * (ctMaxValueObj / 100) : ctMaxValueObj;
                                }
                                let range = max - min;
                                if (range <= 0) range = 1;

                                let clampedValue = Math.max(min, Math.min(max, numValue));
                                let zeroPoint = Math.max(min, Math.min(max, 0));
                                let leftMarginPct = 0;
                                let rightMarginPct = 0;
                                if (ctLabelsOutside && !ctVerticalDataBars) {
                                    const dbFont = `${cellFontSize}px ${cellFontFamily}`;
                                    const dbCellW = colTotalColumnWidths[mIdx];
                                    if (min < 0) leftMarginPct = computeLabelMarginPct(formatValue(min, ctFormat, ctDisplayUnits, ctDecimalPlaces), dbCellW, dbFont);
                                    if (max > 0) rightMarginPct = computeLabelMarginPct(formatValue(max, ctFormat, ctDisplayUnits, ctDecimalPlaces), dbCellW, dbFont);
                                }
                                let scaleMultiplier = (100 - leftMarginPct - rightMarginPct) / 100;
                                let widthPct = 0, leftPct = 0;
                                if (clampedValue >= zeroPoint) {
                                    widthPct = ((clampedValue - zeroPoint) / range) * 100 * scaleMultiplier;
                                    leftPct = leftMarginPct + ((zeroPoint - min) / range) * 100 * scaleMultiplier;
                                } else {
                                    widthPct = ((zeroPoint - clampedValue) / range) * 100 * scaleMultiplier;
                                    leftPct = leftMarginPct + ((clampedValue - min) / range) * 100 * scaleMultiplier;
                                }

                                let dataBar = document.createElement("div");
                                dataBar.style.position = "absolute";
                                dataBar.style.backgroundColor = applyTransparency(ctDataBarColor, ctDbTransparency);
                                dataBar.style.zIndex = "1";
                                if (ctVerticalDataBars) {
                                    const leftCenterPct = (100 - ctDbHeight) / 2;
                                    dataBar.style.left = `${leftCenterPct}%`;
                                    dataBar.style.width = `${ctDbHeight}%`;
                                    dataBar.style.bottom = `${leftPct}%`;
                                    dataBar.style.height = `${widthPct}%`;
                                } else {
                                    dataBar.style.top = `${(100 - ctDbHeight) / 2}%`;
                                    dataBar.style.height = `${ctDbHeight}%`;
                                    dataBar.style.left = `${leftPct}%`;
                                    dataBar.style.width = `${widthPct}%`;
                                }
                                if (ctBorderOn) {
                                    let finalBorderColor = ctMatchColor ? ctDataBarColor : ctBorderColor;
                                    dataBar.style.border = `${ctBorderThickness}px solid ${finalBorderColor}`;
                                    dataBar.style.boxSizing = "border-box";
                                }
                                colTotalCell.appendChild(dataBar);

                                if (ctShowZeroLine) {
                                    let zeroLine = document.createElement("div");
                                    zeroLine.style.position = "absolute";
                                    let zPosPct = ((zeroPoint - min) / range) * 100 * scaleMultiplier + leftMarginPct;
                                    if (ctVerticalDataBars) {
                                        zeroLine.style.left = "0";
                                        zeroLine.style.right = "0";
                                        zeroLine.style.height = "2px";
                                        zeroLine.style.bottom = `calc(${zPosPct}% - 1px)`;
                                    } else {
                                        zeroLine.style.top = "0";
                                        zeroLine.style.bottom = "0";
                                        zeroLine.style.width = "2px";
                                        zeroLine.style.left = `calc(${zPosPct}% - 1px)`;
                                    }
                                    zeroLine.style.backgroundColor = applyTransparency(ctZeroLineColor, ctZeroLineTransparency);
                                    zeroLine.style.zIndex = "1";
                                    colTotalCell.appendChild(zeroLine);
                                }

                                let textDiv = document.createElement("div");
                                textDiv.style.zIndex = "2";
                                textDiv.textContent = ctFormattedValue;
                                if (ctLabelsOutside) {
                                    textDiv.style.position = "absolute";
                                    textDiv.style.whiteSpace = "nowrap";
                                    if (ctVerticalDataBars) {
                                        textDiv.style.left = "50%";
                                        textDiv.style.transform = "translateX(-50%)";
                                        if (numValue >= 0) {
                                            textDiv.style.bottom = `calc(${leftPct + widthPct}% + 4px)`;
                                        } else {
                                            textDiv.style.top = `calc(${100 - leftPct}% + 4px)`;
                                        }
                                    } else {
                                        textDiv.style.top = "50%";
                                        textDiv.style.transform = "translateY(-50%)";
                                        if (numValue >= 0) {
                                            textDiv.style.left = `calc(${leftPct + widthPct}% + 4px)`;
                                        } else {
                                            textDiv.style.right = `calc(${100 - leftPct}% + 4px)`;
                                        }
                                    }
                                } else {
                                    textDiv.style.position = "relative";
                                }
                                colTotalCell.appendChild(textDiv);
                            } else {
                                colTotalCell.textContent = ctFormattedValue;
                            }
                        } else {
                            colTotalCell.textContent = '-';
                        }
                        colTotalCell.className = 'table-data-cell';
                        colTotalCell.style.width = `${colTotalColumnWidths[mIdx]}px`;
                        colTotalCell.style.minWidth = `${colTotalColumnWidths[mIdx]}px`;
                        colTotalCell.style.maxWidth = `${colTotalColumnWidths[mIdx]}px`;

                        // Use Column Totals formatting from the dedicated menu
                        let specSettings = baseMeasureSettings[mIdx];
                        let effectiveBg = isEvenRow ? backgroundColor : alternateBackgroundColor;

                        // Apply background CF to column total cells if applyTo includes totals
                        const ctBgApplyToRaw = dataViewObjects.getValue<any>(
                            values[mIdx].source.objects || {},
                            { objectName: "valueBackgroundConditionalFormatting", propertyName: "applyTo" },
                            "valuesOnly"
                        );
                        const ctBgApplyTo = typeof ctBgApplyToRaw === "string" ? ctBgApplyToRaw : (ctBgApplyToRaw?.value || "valuesOnly");
                        if (ctBgApplyTo === "valuesAndTotals" || ctBgApplyTo === "totalsOnly") {
                            if (measureBgCFPairs[mIdx]?.length > 0) {
                                const ctVal = colTotalsPerMeasure[mIdx][i];
                                if (ctVal !== null && ctVal !== undefined) {
                                    const interpolated = interpolateCFColor(Number(ctVal), measureBgCFPairs[mIdx]);
                                    if (interpolated) effectiveBg = interpolated;
                                }
                            } else {
                                const staticBg = dataViewObjects.getFillColor(values[mIdx].source.objects || {}, { objectName: "valueBackgroundConditionalFormatting", propertyName: "backgroundColor" });
                                if (staticBg) effectiveBg = staticBg;
                            }
                        }

                        let effectiveColor = isEvenRow ? textColor : alternateTextColor;

                        // Apply text CF to column total cells if applyTo includes totals
                        const ctTxtApplyToRaw = dataViewObjects.getValue<any>(
                            values[mIdx].source.objects || {},
                            { objectName: "valueConditionalFormatting", propertyName: "applyTo" },
                            "valuesOnly"
                        );
                        const ctTxtApplyTo = typeof ctTxtApplyToRaw === "string" ? ctTxtApplyToRaw : (ctTxtApplyToRaw?.value || "valuesOnly");
                        if (ctTxtApplyTo === "valuesAndTotals" || ctTxtApplyTo === "totalsOnly") {
                            if (measureTextCFPairs[mIdx]?.length > 0) {
                                const ctVal = colTotalsPerMeasure[mIdx][i];
                                if (ctVal !== null && ctVal !== undefined) {
                                    const interpolated = interpolateCFColor(Number(ctVal), measureTextCFPairs[mIdx]);
                                    if (interpolated) effectiveColor = interpolated;
                                }
                            } else {
                                const staticTxt = dataViewObjects.getFillColor(values[mIdx].source.objects || {}, { objectName: "valueConditionalFormatting", propertyName: "textColor" });
                                if (staticTxt) effectiveColor = staticTxt;
                            }
                        }

                        let effectiveAlign = specSettings.alignment ? specSettings.alignment : "right";

                        applyRowSquash(colTotalCell, rowHeight, colTotalFontSize, colTotalWordWrap);
                        colTotalCell.style.fontWeight = colTotalBold ? "bold" : "normal";
                        colTotalCell.style.fontStyle = colTotalItalic ? "italic" : "normal";
                        colTotalCell.style.textDecoration = colTotalUnderline ? "underline" : "none";
                        colTotalCell.style.fontFamily = colTotalFontFamily;
                        colTotalCell.style.fontSize = `${colTotalFontSize}px`;
                        colTotalCell.style.borderRight = vertBorderValue;
                        colTotalCell.style.backgroundColor = effectiveBg;
                        colTotalCell.style.color = effectiveColor;
                        colTotalCell.style.overflow = "hidden";
                        colTotalCell.style.textOverflow = "ellipsis";
                        colTotalCell.style.whiteSpace = colTotalWordWrap ? "normal" : "nowrap";
                        colTotalCell.style.textAlign = effectiveAlign;
                        if (colTotalWordWrap) {
                            colTotalCell.style.wordBreak = "break-word";
                        }

                        // Tooltip for column total cell
                        const ctTooltipItems: VisualTooltipDataItem[] = [];
                        if (hasCategories) {
                            const rowPaths = categories.paths[i] || [categories.values[i]];
                            rowPaths.forEach((seg: any, lvlIdx: number) => {
                                if (seg !== "Total" && seg !== "" && seg !== undefined) {
                                    const catName = categories.sources[lvlIdx]?.displayName || "Category";
                                    ctTooltipItems.push({ displayName: catName, value: String(seg) });
                                }
                            });
                        }
                        ctTooltipItems.push({
                            displayName: (baseValues[mIdx].source.displayName || "Total") + " (Total)",
                            value: colTotalCell.textContent || "-"
                        });
                        this.addTooltip(colTotalCell, ctTooltipItems);
                    }
                }
            }

            // Create total row
            if (showTotalRow) {
                let totalRow = this.table.insertRow();
                totalRow.className = 'table-total-row';
            totalRow.style.borderTop = horizBorder2xValue;
            totalRow.style.borderBottom = horizBorder2xValue;
            totalRow.style.height = `${totalRowHeight}px`;
            const isTotalRowEven = rowCount % 2 === 0;
            const totalBgColor = isTotalRowEven ? backgroundColor : alternateBackgroundColor;

            if (hasCategories) {
                const numCatCols = categories.sources.length;
                for (let c = 0; c < numCatCols; c++) {
                    let totalLabelCell = totalRow.insertCell();
                    totalLabelCell.textContent = c === 0 ? 'Total' : '';
                    totalLabelCell.className = 'table-total-label-cell';
                    totalLabelCell.style.width = `${categoryColumnWidth}px`;
                    totalLabelCell.style.minWidth = `${categoryColumnWidth}px`;
                    totalLabelCell.style.maxWidth = `${categoryColumnWidth}px`;
                    applyRowSquash(totalLabelCell, totalRowHeight, totalRowFontSize, totalRowWordWrap);
                    totalLabelCell.style.fontWeight = totalRowBold ? "bold" : "normal";
                    totalLabelCell.style.textDecoration = totalRowUnderline ? "underline" : "none";
                    totalLabelCell.style.fontFamily = totalRowFontFamily;
                    totalLabelCell.style.fontStyle = totalRowItalic ? "italic" : "normal";
                    totalLabelCell.style.borderRight = vertBorderValue;
                    totalLabelCell.style.backgroundColor = totalBgColor;
                    // Apply category CF to total row label if applyTo includes totals
                    let totalLabelColor = textColor;
                    if (catCFApplyTo === "valuesAndTotals" || catCFApplyTo === "totalsOnly") {
                        totalLabelColor = resolvedCatTextColor;
                    }
                    totalLabelCell.style.color = totalLabelColor;
                    totalLabelCell.style.overflow = "hidden";
                    totalLabelCell.style.textOverflow = "ellipsis";
                    totalLabelCell.style.whiteSpace = totalRowWordWrap ? "normal" : "nowrap";
                    if (totalRowWordWrap) {
                        totalLabelCell.style.wordBreak = "break-word";
                    }
                }
            } else {
                let totalLabelCell = totalRow.insertCell();
                totalLabelCell.textContent = 'Total';
                totalLabelCell.style.display = "none";
            }

            totals.forEach((total, i) => {
                let specSettings = measureSettingsList[i];
                let baseBg = specSettings.totalBackgroundColor ? specSettings.totalBackgroundColor : totalBgColor;

                // Apply background CF to total row if applyTo includes totals
                const totalBgApplyToRaw = dataViewObjects.getValue<any>(
                    values[i].source.objects || {},
                    { objectName: "valueBackgroundConditionalFormatting", propertyName: "applyTo" },
                    "valuesOnly"
                );
                const totalBgApplyTo = typeof totalBgApplyToRaw === "string" ? totalBgApplyToRaw : (totalBgApplyToRaw?.value || "valuesOnly");
                if (totalBgApplyTo === "valuesAndTotals" || totalBgApplyTo === "totalsOnly") {
                    if (measureBgCFPairs[i]?.length > 0 && total !== null && total !== undefined) {
                        const interpolated = interpolateCFColor(Number(total), measureBgCFPairs[i]);
                        if (interpolated) baseBg = interpolated;
                    } else {
                        const staticBg = dataViewObjects.getFillColor(values[i].source.objects || {}, { objectName: "valueBackgroundConditionalFormatting", propertyName: "backgroundColor" });
                        if (staticBg) baseBg = staticBg;
                    }
                }

                let effectiveBg = baseBg;
                let effectiveColor = specSettings.totalTextColor ? specSettings.totalTextColor : textColor;

                // Apply text CF to total row if applyTo includes totals
                const totalTxtApplyToRaw = dataViewObjects.getValue<any>(
                    values[i].source.objects || {},
                    { objectName: "valueConditionalFormatting", propertyName: "applyTo" },
                    "valuesOnly"
                );
                const totalTxtApplyTo = typeof totalTxtApplyToRaw === "string" ? totalTxtApplyToRaw : (totalTxtApplyToRaw?.value || "valuesOnly");
                if (totalTxtApplyTo === "valuesAndTotals" || totalTxtApplyTo === "totalsOnly") {
                    if (measureTextCFPairs[i]?.length > 0 && total !== null && total !== undefined) {
                        const interpolated = interpolateCFColor(Number(total), measureTextCFPairs[i]);
                        if (interpolated) effectiveColor = interpolated;
                    } else {
                        const staticTxt = dataViewObjects.getFillColor(values[i].source.objects || {}, { objectName: "valueConditionalFormatting", propertyName: "textColor" });
                        if (staticTxt) effectiveColor = staticTxt;
                    }
                }

                if (specSettings.totalTransparency > 0) {
                    effectiveColor = applyTransparency(effectiveColor, specSettings.totalTransparency);
                }
                
                let efBold = specSettings.totalBold !== undefined ? specSettings.totalBold : totalRowBold;
                let efItalic = specSettings.totalItalic !== undefined ? specSettings.totalItalic : totalRowItalic;
                let efUnderline = specSettings.totalUnderline !== undefined ? specSettings.totalUnderline : totalRowUnderline;
                let efFontFamily = specSettings.totalFontFamily !== undefined ? specSettings.totalFontFamily : totalRowFontFamily;
                let efFontSize = specSettings.totalFontSize !== undefined ? specSettings.totalFontSize : totalRowFontSize;
                let efWordWrap = specSettings.totalTextWrap !== undefined ? specSettings.totalTextWrap : totalRowWordWrap;
                let effectiveAlign = specSettings.totalAlignment ? specSettings.totalAlignment : "right";
                
                let cell = totalRow.insertCell();
                cell.style.position = "relative";
                if (total === null || total === undefined) {
                    cell.textContent = "";
                } else {
                    let firstRowDynamicFormat: string;
                    if (values[i].objects) {
                        for (let obj of values[i].objects) {
                            if (obj?.general?.formatString) {
                                firstRowDynamicFormat = obj.general.formatString as string;
                                break;
                            }
                        }
                    }
                    const totalFormat = firstRowDynamicFormat || measureFormats[i];
                    const formattedTotal = formatValue(total, totalFormat, specSettings.totalDisplayUnits, specSettings.totalDecimalPlaces);

                    // Check if data bars should be rendered on the row total
                    const totalObjects = values[i].source.objects || {};
                    const totalShowDataBars = dataViewObjects.getValue<boolean>(totalObjects, { objectName: "dataBarsFormatting", propertyName: "showDataBars" }, false);
                    const totalShowOnRowTotals = dataViewObjects.getValue<boolean>(totalObjects, { objectName: "dataBarsFormatting", propertyName: "showOnRowTotals" }, true);

                    if (totalShowDataBars && totalShowOnRowTotals) {
                        let totalDataBarColor = dataViewObjects.getFillColor(totalObjects, { objectName: "dataBarsConditionalFormatting", propertyName: "dataBarColor" }, "#31b6fd");

                        // Apply data bar CF applyTo for total row
                        const totalDbCFApplyToRaw = dataViewObjects.getValue<any>(totalObjects, { objectName: "dataBarsConditionalFormatting", propertyName: "applyTo" }, "valuesOnly");
                        const totalDbCFApplyTo = typeof totalDbCFApplyToRaw === "string" ? totalDbCFApplyToRaw : (totalDbCFApplyToRaw?.value || "valuesOnly");
                        if (totalDbCFApplyTo === "valuesOnly") {
                            totalDataBarColor = "#31b6fd";
                        } else if (totalDbCFApplyTo === "valuesAndTotals" || totalDbCFApplyTo === "totalsOnly") {
                            if (measureDbCFPairs[i]?.length > 0 && total !== null && total !== undefined) {
                                const interpolated = interpolateCFColor(Number(total), measureDbCFPairs[i]);
                                if (interpolated) totalDataBarColor = interpolated;
                            }
                        }

                        const totalMatchColor = dataViewObjects.getValue<boolean>(totalObjects, { objectName: "dataBarsFormatting", propertyName: "matchDataBarColor" }, true);
                        const totalShowZeroLine = dataViewObjects.getValue<boolean>(totalObjects, { objectName: "dataBarsFormatting", propertyName: "showZeroLine" }, false);
                        const totalZeroLineColor = dataViewObjects.getFillColor(totalObjects, { objectName: "dataBarsFormatting", propertyName: "zeroLineColor" }, "#000000");
                        const totalZeroLineTransparency = dataViewObjects.getValue<number>(totalObjects, { objectName: "dataBarsFormatting", propertyName: "zeroLineTransparency" }, 0);
                        const totalDbHeight = dataViewObjects.getValue<number>(totalObjects, { objectName: "dataBarsFormatting", propertyName: "dataBarHeight" }, 80);
                        const totalDbTransparency = dataViewObjects.getValue<number>(totalObjects, { objectName: "dataBarsFormatting", propertyName: "transparency" }, 20);
                        const totalBorderOn = dataViewObjects.getValue<boolean>(totalObjects, { objectName: "dataBarsFormatting", propertyName: "borderOn" }, true);
                        const totalBorderThickness = dataViewObjects.getValue<number>(totalObjects, { objectName: "dataBarsFormatting", propertyName: "borderThickness" }, 1);
                        const totalBorderColor = dataViewObjects.getFillColor(totalObjects, { objectName: "dataBarsFormatting", propertyName: "borderColor" }, "#000000");
                        const totalAxisTypeRaw = dataViewObjects.getValue<any>(totalObjects, { objectName: "dataBarsFormatting", propertyName: "axisType" }, "Amount");
                        const totalAxisType = typeof totalAxisTypeRaw === "string" ? totalAxisTypeRaw : (totalAxisTypeRaw.value || "Amount");
                        const totalMinValueObj = dataViewObjects.getValue<number>(totalObjects, { objectName: "dataBarsFormatting", propertyName: "minValue" }, null);
                        const totalMaxValueObj = dataViewObjects.getValue<number>(totalObjects, { objectName: "dataBarsFormatting", propertyName: "maxValue" }, null);
                        const totalLabelsOutside = dataViewObjects.getValue<boolean>(totalObjects, { objectName: "dataBarsFormatting", propertyName: "labelsOutside" }, false);
                        const totalVerticalDataBars = dataViewObjects.getValue<boolean>(totalObjects, { objectName: "dataBarsFormatting", propertyName: "verticalDataBars" }, false);

                        let numValue = Number(total);
                        let min_raw = measureMins[i];
                        let max_raw = measureMaxs[i];
                        let min = min_raw;
                        let max = max_raw;
                        let domainRange = max_raw - min_raw;
                        if (domainRange <= 0) domainRange = 1;
                        if (totalMinValueObj !== null && totalMinValueObj !== undefined) {
                            min = totalAxisType === "Percentage" ? min_raw - domainRange * (totalMinValueObj / 100) : totalMinValueObj;
                        }
                        if (totalMaxValueObj !== null && totalMaxValueObj !== undefined) {
                            max = totalAxisType === "Percentage" ? max_raw + domainRange * (totalMaxValueObj / 100) : totalMaxValueObj;
                        }
                        let range = max - min;
                        if (range <= 0) range = 1;

                        let clampedValue = Math.max(min, Math.min(max, numValue));
                        let zeroPoint = Math.max(min, Math.min(max, 0));
                        let leftMarginPct = 0;
                        let rightMarginPct = 0;
                        if (totalLabelsOutside && !totalVerticalDataBars) {
                            const dbFont = `${efFontSize}px ${efFontFamily}`;
                            const dbCellW = valueColumnWidths[i];
                            if (min < 0) leftMarginPct = computeLabelMarginPct(formatValue(min, totalFormat, specSettings.totalDisplayUnits, specSettings.totalDecimalPlaces), dbCellW, dbFont);
                            if (max > 0) rightMarginPct = computeLabelMarginPct(formatValue(max, totalFormat, specSettings.totalDisplayUnits, specSettings.totalDecimalPlaces), dbCellW, dbFont);
                        }
                        let scaleMultiplier = (100 - leftMarginPct - rightMarginPct) / 100;
                        let widthPct = 0, leftPct = 0;
                        if (clampedValue >= zeroPoint) {
                            widthPct = ((clampedValue - zeroPoint) / range) * 100 * scaleMultiplier;
                            leftPct = leftMarginPct + ((zeroPoint - min) / range) * 100 * scaleMultiplier;
                        } else {
                            widthPct = ((zeroPoint - clampedValue) / range) * 100 * scaleMultiplier;
                            leftPct = leftMarginPct + ((clampedValue - min) / range) * 100 * scaleMultiplier;
                        }

                        let dataBar = document.createElement("div");
                        dataBar.style.position = "absolute";
                        dataBar.style.backgroundColor = applyTransparency(totalDataBarColor, totalDbTransparency);
                        dataBar.style.zIndex = "1";
                        if (totalVerticalDataBars) {
                            const leftCenterPct = (100 - totalDbHeight) / 2;
                            dataBar.style.left = `${leftCenterPct}%`;
                            dataBar.style.width = `${totalDbHeight}%`;
                            dataBar.style.bottom = `${leftPct}%`;
                            dataBar.style.height = `${widthPct}%`;
                        } else {
                            dataBar.style.top = `${(100 - totalDbHeight) / 2}%`;
                            dataBar.style.height = `${totalDbHeight}%`;
                            dataBar.style.left = `${leftPct}%`;
                            dataBar.style.width = `${widthPct}%`;
                        }
                        if (totalBorderOn) {
                            let finalBorderColor = totalMatchColor ? totalDataBarColor : totalBorderColor;
                            dataBar.style.border = `${totalBorderThickness}px solid ${finalBorderColor}`;
                            dataBar.style.boxSizing = "border-box";
                        }
                        cell.appendChild(dataBar);

                        if (totalShowZeroLine) {
                            let zeroLine = document.createElement("div");
                            zeroLine.style.position = "absolute";
                            let zPosPct = ((zeroPoint - min) / range) * 100 * scaleMultiplier + leftMarginPct;
                            if (totalVerticalDataBars) {
                                zeroLine.style.left = "0";
                                zeroLine.style.right = "0";
                                zeroLine.style.height = "2px";
                                zeroLine.style.bottom = `calc(${zPosPct}% - 1px)`;
                            } else {
                                zeroLine.style.top = "0";
                                zeroLine.style.bottom = "0";
                                zeroLine.style.width = "2px";
                                zeroLine.style.left = `calc(${zPosPct}% - 1px)`;
                            }
                            zeroLine.style.backgroundColor = applyTransparency(totalZeroLineColor, totalZeroLineTransparency);
                            zeroLine.style.zIndex = "1";
                            cell.appendChild(zeroLine);
                        }

                        let textDiv = document.createElement("div");
                        textDiv.style.zIndex = "2";
                        textDiv.textContent = formattedTotal;
                        if (totalLabelsOutside) {
                            textDiv.style.position = "absolute";
                            textDiv.style.whiteSpace = "nowrap";
                            if (totalVerticalDataBars) {
                                textDiv.style.left = "50%";
                                textDiv.style.transform = "translateX(-50%)";
                                if (numValue >= 0) {
                                    textDiv.style.bottom = `calc(${leftPct + widthPct}% + 4px)`;
                                } else {
                                    textDiv.style.top = `calc(${100 - leftPct}% + 4px)`;
                                }
                            } else {
                                textDiv.style.top = "50%";
                                textDiv.style.transform = "translateY(-50%)";
                                if (numValue >= 0) {
                                    textDiv.style.left = `calc(${leftPct + widthPct}% + 4px)`;
                                } else {
                                    textDiv.style.right = `calc(${100 - leftPct}% + 4px)`;
                                }
                            }
                        } else {
                            textDiv.style.position = "relative";
                        }
                        cell.appendChild(textDiv);
                    } else {
                        cell.textContent = formattedTotal;
                    }
                }
                cell.className = 'table-total-cell';
                cell.style.width = `${valueColumnWidths[i]}px`;
                cell.style.minWidth = `${valueColumnWidths[i]}px`;
                cell.style.maxWidth = `${valueColumnWidths[i]}px`;
                applyRowSquash(cell, totalRowHeight, efFontSize, efWordWrap);
                cell.style.fontWeight = efBold ? "bold" : "normal";
                cell.style.textDecoration = efUnderline ? "underline" : "none";
                cell.style.fontFamily = efFontFamily;
                cell.style.fontStyle = efItalic ? "italic" : "normal";
                cell.style.borderRight = vertBorderValue;

                if (specSettings.totalHorizontalGrid !== undefined) {
                    if (specSettings.totalHorizontalGrid) {
                        cell.style.borderBottom = horizBorder2xValueOn;
                        cell.style.borderTop = horizBorder2xValueOn;
                    } else {
                        cell.style.borderBottom = 'hidden';
                        cell.style.borderTop = 'hidden';
                    }
                }

                cell.style.backgroundColor = effectiveBg;
                cell.style.color = effectiveColor;
                cell.style.overflow = "hidden";
                cell.style.textOverflow = "ellipsis";
                cell.style.whiteSpace = efWordWrap ? "normal" : "nowrap";
                cell.style.textAlign = effectiveAlign;
                if (efWordWrap) {
                    cell.style.wordBreak = "break-word";
                }

                // Tooltip for total row cell
                const totalTooltipItems: VisualTooltipDataItem[] = [{
                    displayName: values[i].source.displayName || "Total",
                    value: cell.textContent || "-"
                }];
                this.addTooltip(cell, totalTooltipItems);
            });

            // Add column total grand total cells — one per enabled base measure
            if (showTotalColumn) {
                for (let mIdx = 0; mIdx < M; mIdx++) {
                    if (!baseMeasureColTotalIncluded[mIdx]) continue;
                    let grandCell = totalRow.insertCell();
                    grandCell.style.position = "relative";
                    const grandVal = colTotalsGrandPerMeasure[mIdx];
                    if (grandVal !== null && grandVal !== undefined) {
                        // Use dynamic format string: try column subtotal objects from first row, then source format
                        let gtDynamicFormat: string | undefined;
                        if (hasColumnGrouping && columnSubtotalValueKeys.length > mIdx && storedFlatRows && storedFlatRows.length > 0) {
                            gtDynamicFormat = storedFlatRows[0]?.rawValues?.[columnSubtotalValueKeys[mIdx]]?.objects?.general?.formatString;
                        }
                        if (!gtDynamicFormat && values[mIdx]?.objects && values[mIdx].objects.length > 0) {
                            gtDynamicFormat = values[mIdx].objects[0]?.general?.formatString;
                        }
                        const ctFormat = gtDynamicFormat || baseMeasureFormats[mIdx] || "";
                        const ctDisplayUnits = baseMeasureSettings[mIdx].displayUnits;
                        const ctDecimalPlaces = baseMeasureSettings[mIdx].decimalPlaces;
                        const grandFormattedValue = formatValue(grandVal, ctFormat, ctDisplayUnits, ctDecimalPlaces);

                        // Check if data bars should be rendered on grand total column total cells
                        const gtObjects = baseValues[mIdx].source.objects || {};
                        const gtShowDataBars = dataViewObjects.getValue<boolean>(gtObjects, { objectName: "dataBarsFormatting", propertyName: "showDataBars" }, false);
                        const gtShowOnColumnTotals = dataViewObjects.getValue<boolean>(gtObjects, { objectName: "dataBarsFormatting", propertyName: "showOnColumnTotals" }, true);

                        if (gtShowDataBars && gtShowOnColumnTotals) {
                            let gtDataBarColor = dataViewObjects.getFillColor(gtObjects, { objectName: "dataBarsConditionalFormatting", propertyName: "dataBarColor" }, "#31b6fd");

                            // Apply data bar CF applyTo for grand total cell
                            const gtDbCFApplyToRaw = dataViewObjects.getValue<any>(gtObjects, { objectName: "dataBarsConditionalFormatting", propertyName: "applyTo" }, "valuesOnly");
                            const gtDbCFApplyTo = typeof gtDbCFApplyToRaw === "string" ? gtDbCFApplyToRaw : (gtDbCFApplyToRaw?.value || "valuesOnly");
                            if (gtDbCFApplyTo === "valuesOnly") {
                                gtDataBarColor = "#31b6fd";
                            } else if (gtDbCFApplyTo === "valuesAndTotals" || gtDbCFApplyTo === "totalsOnly") {
                                if (measureDbCFPairs[mIdx]?.length > 0 && grandVal !== null && grandVal !== undefined) {
                                    const interpolated = interpolateCFColor(Number(grandVal), measureDbCFPairs[mIdx]);
                                    if (interpolated) gtDataBarColor = interpolated;
                                }
                            }

                            const gtMatchColor = dataViewObjects.getValue<boolean>(gtObjects, { objectName: "dataBarsFormatting", propertyName: "matchDataBarColor" }, true);
                            const gtShowZeroLine = dataViewObjects.getValue<boolean>(gtObjects, { objectName: "dataBarsFormatting", propertyName: "showZeroLine" }, false);
                            const gtZeroLineColor = dataViewObjects.getFillColor(gtObjects, { objectName: "dataBarsFormatting", propertyName: "zeroLineColor" }, "#000000");
                            const gtZeroLineTransparency = dataViewObjects.getValue<number>(gtObjects, { objectName: "dataBarsFormatting", propertyName: "zeroLineTransparency" }, 0);
                            const gtDbHeight = dataViewObjects.getValue<number>(gtObjects, { objectName: "dataBarsFormatting", propertyName: "dataBarHeight" }, 80);
                            const gtDbTransparency = dataViewObjects.getValue<number>(gtObjects, { objectName: "dataBarsFormatting", propertyName: "transparency" }, 20);
                            const gtBorderOn = dataViewObjects.getValue<boolean>(gtObjects, { objectName: "dataBarsFormatting", propertyName: "borderOn" }, true);
                            const gtBorderThickness = dataViewObjects.getValue<number>(gtObjects, { objectName: "dataBarsFormatting", propertyName: "borderThickness" }, 1);
                            const gtBorderColor = dataViewObjects.getFillColor(gtObjects, { objectName: "dataBarsFormatting", propertyName: "borderColor" }, "#000000");
                            const gtAxisTypeRaw = dataViewObjects.getValue<any>(gtObjects, { objectName: "dataBarsFormatting", propertyName: "axisType" }, "Amount");
                            const gtAxisType = typeof gtAxisTypeRaw === "string" ? gtAxisTypeRaw : (gtAxisTypeRaw.value || "Amount");
                            const gtMinValueObj = dataViewObjects.getValue<number>(gtObjects, { objectName: "dataBarsFormatting", propertyName: "minValue" }, null);
                            const gtMaxValueObj = dataViewObjects.getValue<number>(gtObjects, { objectName: "dataBarsFormatting", propertyName: "maxValue" }, null);
                            const gtLabelsOutside = dataViewObjects.getValue<boolean>(gtObjects, { objectName: "dataBarsFormatting", propertyName: "labelsOutside" }, false);
                            const gtVerticalDataBars = dataViewObjects.getValue<boolean>(gtObjects, { objectName: "dataBarsFormatting", propertyName: "verticalDataBars" }, false);

                            let numValue = Number(grandVal);
                            let min_raw = measureMins[mIdx];
                            let max_raw = measureMaxs[mIdx];
                            let min = min_raw;
                            let max = max_raw;
                            let domainRange = max_raw - min_raw;
                            if (domainRange <= 0) domainRange = 1;
                            if (gtMinValueObj !== null && gtMinValueObj !== undefined) {
                                min = gtAxisType === "Percentage" ? min_raw - domainRange * (gtMinValueObj / 100) : gtMinValueObj;
                            }
                            if (gtMaxValueObj !== null && gtMaxValueObj !== undefined) {
                                max = gtAxisType === "Percentage" ? max_raw + domainRange * (gtMaxValueObj / 100) : gtMaxValueObj;
                            }
                            let range = max - min;
                            if (range <= 0) range = 1;

                            let clampedValue = Math.max(min, Math.min(max, numValue));
                            let zeroPoint = Math.max(min, Math.min(max, 0));
                            let leftMarginPct = 0;
                            let rightMarginPct = 0;
                            if (gtLabelsOutside && !gtVerticalDataBars) {
                                const dbFont = `${cellFontSize}px ${cellFontFamily}`;
                                const dbCellW = colTotalColumnWidths[mIdx];
                                if (min < 0) leftMarginPct = computeLabelMarginPct(formatValue(min, ctFormat, ctDisplayUnits, ctDecimalPlaces), dbCellW, dbFont);
                                if (max > 0) rightMarginPct = computeLabelMarginPct(formatValue(max, ctFormat, ctDisplayUnits, ctDecimalPlaces), dbCellW, dbFont);
                            }
                            let scaleMultiplier = (100 - leftMarginPct - rightMarginPct) / 100;
                            let widthPct = 0, leftPct = 0;
                            if (clampedValue >= zeroPoint) {
                                widthPct = ((clampedValue - zeroPoint) / range) * 100 * scaleMultiplier;
                                leftPct = leftMarginPct + ((zeroPoint - min) / range) * 100 * scaleMultiplier;
                            } else {
                                widthPct = ((zeroPoint - clampedValue) / range) * 100 * scaleMultiplier;
                                leftPct = leftMarginPct + ((clampedValue - min) / range) * 100 * scaleMultiplier;
                            }

                            let dataBar = document.createElement("div");
                            dataBar.style.position = "absolute";
                            dataBar.style.backgroundColor = applyTransparency(gtDataBarColor, gtDbTransparency);
                            dataBar.style.zIndex = "1";
                            if (gtVerticalDataBars) {
                                const leftCenterPct = (100 - gtDbHeight) / 2;
                                dataBar.style.left = `${leftCenterPct}%`;
                                dataBar.style.width = `${gtDbHeight}%`;
                                dataBar.style.bottom = `${leftPct}%`;
                                dataBar.style.height = `${widthPct}%`;
                            } else {
                                dataBar.style.top = `${(100 - gtDbHeight) / 2}%`;
                                dataBar.style.height = `${gtDbHeight}%`;
                                dataBar.style.left = `${leftPct}%`;
                                dataBar.style.width = `${widthPct}%`;
                            }
                            if (gtBorderOn) {
                                let finalBorderColor = gtMatchColor ? gtDataBarColor : gtBorderColor;
                                dataBar.style.border = `${gtBorderThickness}px solid ${finalBorderColor}`;
                                dataBar.style.boxSizing = "border-box";
                            }
                            grandCell.appendChild(dataBar);

                            if (gtShowZeroLine) {
                                let zeroLine = document.createElement("div");
                                zeroLine.style.position = "absolute";
                                let zPosPct = ((zeroPoint - min) / range) * 100 * scaleMultiplier + leftMarginPct;
                                if (gtVerticalDataBars) {
                                    zeroLine.style.left = "0";
                                    zeroLine.style.right = "0";
                                    zeroLine.style.height = "2px";
                                    zeroLine.style.bottom = `calc(${zPosPct}% - 1px)`;
                                } else {
                                    zeroLine.style.top = "0";
                                    zeroLine.style.bottom = "0";
                                    zeroLine.style.width = "2px";
                                    zeroLine.style.left = `calc(${zPosPct}% - 1px)`;
                                }
                                zeroLine.style.backgroundColor = applyTransparency(gtZeroLineColor, gtZeroLineTransparency);
                                zeroLine.style.zIndex = "1";
                                grandCell.appendChild(zeroLine);
                            }

                            let textDiv = document.createElement("div");
                            textDiv.style.zIndex = "2";
                            textDiv.textContent = grandFormattedValue;
                            if (gtLabelsOutside) {
                                textDiv.style.position = "absolute";
                                textDiv.style.whiteSpace = "nowrap";
                                if (gtVerticalDataBars) {
                                    textDiv.style.left = "50%";
                                    textDiv.style.transform = "translateX(-50%)";
                                    if (numValue >= 0) {
                                        textDiv.style.bottom = `calc(${leftPct + widthPct}% + 4px)`;
                                    } else {
                                        textDiv.style.top = `calc(${100 - leftPct}% + 4px)`;
                                    }
                                } else {
                                    textDiv.style.top = "50%";
                                    textDiv.style.transform = "translateY(-50%)";
                                    if (numValue >= 0) {
                                        textDiv.style.left = `calc(${leftPct + widthPct}% + 4px)`;
                                    } else {
                                        textDiv.style.right = `calc(${100 - leftPct}% + 4px)`;
                                    }
                                }
                            } else {
                                textDiv.style.position = "relative";
                            }
                            grandCell.appendChild(textDiv);
                        } else {
                            grandCell.textContent = grandFormattedValue;
                        }
                    } else {
                        grandCell.textContent = "";
                    }
                    grandCell.className = 'table-total-cell';
                    grandCell.style.width = `${colTotalColumnWidths[mIdx]}px`;
                    grandCell.style.minWidth = `${colTotalColumnWidths[mIdx]}px`;
                    grandCell.style.maxWidth = `${colTotalColumnWidths[mIdx]}px`;

                    // Use Column Totals formatting for column total cells in the grand total row
                    let specSettings = baseMeasureSettings[mIdx];
                    let efTotalBg = totalBgColor;

                    // Apply background CF to grand total cell if applyTo includes totals
                    const grandBgApplyToRaw = dataViewObjects.getValue<any>(
                        values[mIdx].source.objects || {},
                        { objectName: "valueBackgroundConditionalFormatting", propertyName: "applyTo" },
                        "valuesOnly"
                    );
                    const grandBgApplyTo = typeof grandBgApplyToRaw === "string" ? grandBgApplyToRaw : (grandBgApplyToRaw?.value || "valuesOnly");
                    if (grandBgApplyTo === "valuesAndTotals" || grandBgApplyTo === "totalsOnly") {
                        if (measureBgCFPairs[mIdx]?.length > 0 && grandVal !== null && grandVal !== undefined) {
                            const interpolated = interpolateCFColor(Number(grandVal), measureBgCFPairs[mIdx]);
                            if (interpolated) efTotalBg = interpolated;
                        } else {
                            const staticBg = dataViewObjects.getFillColor(values[mIdx].source.objects || {}, { objectName: "valueBackgroundConditionalFormatting", propertyName: "backgroundColor" });
                            if (staticBg) efTotalBg = staticBg;
                        }
                    }

                    let efTotalColor = textColor;

                    // Apply text CF to grand total cell if applyTo includes totals
                    const grandTxtApplyToRaw = dataViewObjects.getValue<any>(
                        values[mIdx].source.objects || {},
                        { objectName: "valueConditionalFormatting", propertyName: "applyTo" },
                        "valuesOnly"
                    );
                    const grandTxtApplyTo = typeof grandTxtApplyToRaw === "string" ? grandTxtApplyToRaw : (grandTxtApplyToRaw?.value || "valuesOnly");
                    if (grandTxtApplyTo === "valuesAndTotals" || grandTxtApplyTo === "totalsOnly") {
                        if (measureTextCFPairs[mIdx]?.length > 0 && grandVal !== null && grandVal !== undefined) {
                            const interpolated = interpolateCFColor(Number(grandVal), measureTextCFPairs[mIdx]);
                            if (interpolated) efTotalColor = interpolated;
                        } else {
                            const staticTxt = dataViewObjects.getFillColor(values[mIdx].source.objects || {}, { objectName: "valueConditionalFormatting", propertyName: "textColor" });
                            if (staticTxt) efTotalColor = staticTxt;
                        }
                    }

                    let efTotalAlign = specSettings.totalAlignment ? specSettings.totalAlignment : "right";

                    applyRowSquash(grandCell, totalRowHeight, colTotalFontSize, colTotalWordWrap);
                    grandCell.style.fontWeight = colTotalBold ? "bold" : "normal";
                    grandCell.style.fontStyle = colTotalItalic ? "italic" : "normal";
                    grandCell.style.textDecoration = colTotalUnderline ? "underline" : "none";
                    grandCell.style.fontFamily = colTotalFontFamily;
                    grandCell.style.borderRight = vertBorderValue;
                    grandCell.style.backgroundColor = efTotalBg;
                    grandCell.style.color = efTotalColor;
                    grandCell.style.overflow = "hidden";
                    grandCell.style.textOverflow = "ellipsis";
                    grandCell.style.whiteSpace = colTotalWordWrap ? "normal" : "nowrap";
                    grandCell.style.textAlign = efTotalAlign;
                    if (colTotalWordWrap) {
                        grandCell.style.wordBreak = "break-word";
                    }

                    // Tooltip for grand total cell
                    const grandTooltipItems: VisualTooltipDataItem[] = [{
                        displayName: (baseValues[mIdx].source.displayName || "Total") + " (Grand Total)",
                        value: grandCell.textContent || "-"
                    }];
                    this.addTooltip(grandCell, grandTooltipItems);
                }
            }
            }
        } else {
            // switchValuesToRows IS TRUE (Transpose layout)

            // Update showTotalRow from per-category scoped value (mirrors non-transposed path)
            const categoryShowTotalsT = (categories?.sources || []).map((catSource: any) => {
                return dataViewObjects.getValue<boolean>(catSource.objects || {}, { objectName: "totals", propertyName: "showTotalRow" }, true);
            });
            showTotalRow = categoryShowTotalsT.length > 0 ? categoryShowTotalsT[0] : showTotalRow;

            // Create Header Row
            let headerRow = this.table.insertRow();
            headerRow.className = 'table-header-row';
            headerRow.style.borderBottom = horizBorder2xValue;
            headerRow.style.height = `${headerRowHeight}px`;
            const headerBgColor = headerBackgroundColor;

            // First header(s): Column group header (if column grouping) + "Measure"
            if (hasColumnGrouping && columnLeaves.length > 0) {
                // Create one header cell per column level
                for (let lvl = 0; lvl < columnLevelNames.length; lvl++) {
                    let colGroupHeader = headerRow.insertCell();
                    colGroupHeader.textContent = columnLevelNames[lvl];
                    colGroupHeader.className = 'table-header-cell';
                    colGroupHeader.style.width = `${categoryColumnWidth}px`;
                    colGroupHeader.style.minWidth = `${categoryColumnWidth}px`;
                    colGroupHeader.style.maxWidth = `${categoryColumnWidth}px`;
                    applyRowSquash(colGroupHeader, headerRowHeight, headerFontSize, headerWordWrap);
                    colGroupHeader.style.fontWeight = headerBold ? "bold" : "normal";
                    colGroupHeader.style.fontStyle = headerItalic ? "italic" : "normal";
                    colGroupHeader.style.textDecoration = headerUnderline ? "underline" : "none";
                    colGroupHeader.style.fontFamily = headerFontFamily;
                    colGroupHeader.style.color = headerTextColor;
                    colGroupHeader.style.textAlign = headerAlignment;
                    colGroupHeader.style.borderRight = vertBorderValue;
                    colGroupHeader.style.backgroundColor = headerBgColor;
                    colGroupHeader.style.overflow = "hidden";
                    colGroupHeader.style.textOverflow = "ellipsis";
                    colGroupHeader.style.whiteSpace = headerWordWrap ? "normal" : "nowrap";
                    if (headerWordWrap) {
                        colGroupHeader.style.wordBreak = "break-word";
                    }
                }
            }

            let measureHeader = headerRow.insertCell();
            measureHeader.textContent = "Measure";
            measureHeader.className = 'table-header-cell';
            measureHeader.style.width = `${categoryColumnWidth}px`;
            measureHeader.style.minWidth = `${categoryColumnWidth}px`;
            measureHeader.style.maxWidth = `${categoryColumnWidth}px`;
            applyRowSquash(measureHeader, headerRowHeight, headerFontSize, headerWordWrap);
            measureHeader.style.fontWeight = headerBold ? "bold" : "normal";
            measureHeader.style.fontStyle = headerItalic ? "italic" : "normal";
            measureHeader.style.textDecoration = headerUnderline ? "underline" : "none";
            measureHeader.style.fontFamily = headerFontFamily;
            measureHeader.style.color = headerTextColor;
            measureHeader.style.textAlign = headerAlignment;
            measureHeader.style.borderRight = vertBorderValue;
            measureHeader.style.backgroundColor = headerBgColor;
            measureHeader.style.overflow = "hidden";
            measureHeader.style.textOverflow = "ellipsis";
            measureHeader.style.whiteSpace = headerWordWrap ? "normal" : "nowrap";
            if (headerWordWrap) {
                measureHeader.style.wordBreak = "break-word";
            }
            
            // Next headers are Category values (or just "Value" if no categories)
            if (hasCategories) {
                for (let i = 0; i < rowCount; i++) {
                    let catHeader = headerRow.insertCell();
                    catHeader.textContent = String(categories.values[i]);
                    catHeader.className = 'table-header-cell';
                    catHeader.style.width = `${valueColumnWidths[i]}px`;
                    catHeader.style.minWidth = `${valueColumnWidths[i]}px`;
                    catHeader.style.maxWidth = `${valueColumnWidths[i]}px`;
                    applyRowSquash(catHeader, headerRowHeight, headerFontSize, headerWordWrap);
                    catHeader.style.fontWeight = headerBold ? "bold" : "normal";
                    catHeader.style.fontStyle = headerItalic ? "italic" : "normal";
                    catHeader.style.textDecoration = headerUnderline ? "underline" : "none";
                    catHeader.style.fontFamily = headerFontFamily;
                    catHeader.style.color = headerTextColor;
                    catHeader.style.textAlign = headerAlignment;
                    catHeader.style.borderRight = vertBorderValue;
                    catHeader.style.backgroundColor = headerBgColor;
                    catHeader.style.overflow = "hidden";
                    catHeader.style.textOverflow = "ellipsis";
                    catHeader.style.whiteSpace = headerWordWrap ? "normal" : "nowrap";
                    if (headerWordWrap) {
                        catHeader.style.wordBreak = "break-word";
                    }
                }
            } else {
                let catHeader = headerRow.insertCell();
                catHeader.textContent = "Value";
                catHeader.className = 'table-header-cell';
                catHeader.style.width = `${columnWidth}px`;
                catHeader.style.minWidth = `${columnWidth}px`;
                catHeader.style.maxWidth = `${columnWidth}px`;
                applyRowSquash(catHeader, headerRowHeight, headerFontSize, headerWordWrap);
                catHeader.style.fontWeight = headerBold ? "bold" : "normal";
                catHeader.style.fontStyle = headerItalic ? "italic" : "normal";
                catHeader.style.textDecoration = headerUnderline ? "underline" : "none";
                catHeader.style.fontFamily = headerFontFamily;
                catHeader.style.color = headerTextColor;
                catHeader.style.textAlign = headerAlignment;
                catHeader.style.borderRight = vertBorderValue;
                catHeader.style.backgroundColor = headerBgColor;
                catHeader.style.overflow = "hidden";
                catHeader.style.textOverflow = "ellipsis";
                catHeader.style.whiteSpace = headerWordWrap ? "normal" : "nowrap";
                if (headerWordWrap) {
                    catHeader.style.wordBreak = "break-word";
                }
            }

            if (showTotalRow) {
                let totalHeader = headerRow.insertCell();
                totalHeader.textContent = "Total";
                totalHeader.className = 'table-header-cell';
                totalHeader.style.width = `${columnWidth}px`;
                totalHeader.style.minWidth = `${columnWidth}px`;
                totalHeader.style.maxWidth = `${columnWidth}px`;
                applyRowSquash(totalHeader, headerRowHeight, headerFontSize, headerWordWrap);
                totalHeader.style.fontWeight = headerBold ? "bold" : "normal";
                totalHeader.style.fontStyle = headerItalic ? "italic" : "normal";
                totalHeader.style.textDecoration = headerUnderline ? "underline" : "none";
                totalHeader.style.fontFamily = headerFontFamily;
                totalHeader.style.color = headerTextColor;
                totalHeader.style.textAlign = headerAlignment;
                totalHeader.style.borderRight = vertBorderValue;
                totalHeader.style.backgroundColor = headerBgColor;
                totalHeader.style.overflow = "hidden";
                totalHeader.style.textOverflow = "ellipsis";
                totalHeader.style.whiteSpace = headerWordWrap ? "normal" : "nowrap";
                if (headerWordWrap) {
                    totalHeader.style.wordBreak = "break-word";
                }
            }

            // Pre-scan: build sorted (value, bgColor) pairs per measure for CF interpolation on total columns
            const measureBgCFPairs: {value: number, color: string}[][] = [];
            for (let m = 0; m < values.length; m++) {
                const vc = values[m];
                const pairs: {value: number, color: string}[] = [];
                if (vc.objects) {
                    for (let r = 0; r < rowCount; r++) {
                        if (vc.objects[r]) {
                            const color = dataViewObjects.getFillColor(
                                vc.objects[r],
                                { objectName: "valueBackgroundConditionalFormatting", propertyName: "backgroundColor" }
                            );
                            const val = vc.values[r];
                            if (color && val !== null && val !== undefined) {
                                pairs.push({ value: Number(val), color });
                            }
                        }
                    }
                }
                pairs.sort((a, b) => a.value - b.value);
                measureBgCFPairs.push(pairs);
            }

            // Pre-scan: build sorted (value, dataBarColor) pairs per measure for CF interpolation on total columns
            const measureDbCFPairs: {value: number, color: string}[][] = [];
            for (let m = 0; m < values.length; m++) {
                const vc = values[m];
                const pairs: {value: number, color: string}[] = [];
                if (vc.objects) {
                    for (let r = 0; r < rowCount; r++) {
                        if (vc.objects[r]) {
                            const color = dataViewObjects.getFillColor(
                                vc.objects[r],
                                { objectName: "dataBarsConditionalFormatting", propertyName: "dataBarColor" }
                            );
                            const val = vc.values[r];
                            if (color && val !== null && val !== undefined) {
                                pairs.push({ value: Number(val), color });
                            }
                        }
                    }
                }
                pairs.sort((a, b) => a.value - b.value);
                measureDbCFPairs.push(pairs);
            }

            // Pre-scan: build sorted (value, textColor) pairs per measure for CF interpolation on total columns
            const measureTextCFPairs: {value: number, color: string}[][] = [];
            for (let m = 0; m < values.length; m++) {
                const vc = values[m];
                const pairs: {value: number, color: string}[] = [];
                if (vc.objects) {
                    for (let r = 0; r < rowCount; r++) {
                        if (vc.objects[r]) {
                            const color = dataViewObjects.getFillColor(
                                vc.objects[r],
                                { objectName: "valueConditionalFormatting", propertyName: "textColor" }
                            );
                            const val = vc.values[r];
                            if (color && val !== null && val !== undefined) {
                                pairs.push({ value: Number(val), color });
                            }
                        }
                    }
                }
                pairs.sort((a, b) => a.value - b.value);
                measureTextCFPairs.push(pairs);
            }

            // Create Rows (each row is a Measure)
            values.forEach((valueColumn, measureIndex) => {
                let row = this.table.insertRow();
                row.className = 'table-data-row';
                
                let mObj = measureSettingsList[measureIndex];
                if (mObj && mObj.horizontalGrid !== undefined) {
                    row.style.borderBottom = mObj.horizontalGrid ? horizBorderValueOn : 'hidden';
                } else {
                    row.style.borderBottom = horizBorderValue;
                }
                
                const isEvenRow = measureIndex % 2 === 0;
                const rowHeight = isEvenRow ? valueRowHeight : alternateValueRowHeight;
                row.style.height = `${rowHeight}px`;
                const rowBgColor = isEvenRow ? backgroundColor : alternateBackgroundColor;
                row.style.backgroundColor = rowBgColor;

                // Cell 0 (optional): Column group labels when column grouping is active — one cell per level
                if (hasColumnGrouping && (valueColumn as any).columnPath) {
                    const colPath = (valueColumn as any).columnPath as any[];
                    for (let lvl = 0; lvl < columnLevelNames.length; lvl++) {
                        let colGroupCell = row.insertCell();
                        colGroupCell.textContent = lvl < colPath.length ? String(colPath[lvl]) : "";
                        colGroupCell.className = 'table-category-cell';
                        colGroupCell.style.width = `${categoryColumnWidth}px`;
                        colGroupCell.style.minWidth = `${categoryColumnWidth}px`;
                        colGroupCell.style.maxWidth = `${categoryColumnWidth}px`;
                        applyRowSquash(colGroupCell, rowHeight, cellFontSize, categoryWordWrap);
                        colGroupCell.style.fontWeight = valueBold ? "bold" : "normal";
                        colGroupCell.style.fontStyle = cellItalic ? "italic" : "normal";
                        colGroupCell.style.textDecoration = cellUnderline ? "underline" : "none";
                        colGroupCell.style.borderRight = vertBorderValue;
                        colGroupCell.style.backgroundColor = rowBgColor;
                        colGroupCell.style.color = defaultCategoryTextColor;
                        colGroupCell.style.overflow = "hidden";
                        colGroupCell.style.textOverflow = "ellipsis";
                        colGroupCell.style.whiteSpace = categoryWordWrap ? "normal" : "nowrap";
                        if (categoryWordWrap) {
                            colGroupCell.style.wordBreak = "break-word";
                        }
                    }
                }

                // Cell 1: Measure Name
                let measureNameCell = row.insertCell();
                measureNameCell.textContent = measureHeaderOverrides[measureIndex];
                measureNameCell.className = 'table-category-cell';
                measureNameCell.style.width = `${categoryColumnWidth}px`;
                measureNameCell.style.minWidth = `${categoryColumnWidth}px`;
                measureNameCell.style.maxWidth = `${categoryColumnWidth}px`;
                applyRowSquash(measureNameCell, rowHeight, cellFontSize, categoryWordWrap);
                measureNameCell.style.fontWeight = valueBold ? "bold" : "normal";
                      measureNameCell.style.fontStyle = cellItalic ? "italic" : "normal";
                      measureNameCell.style.textDecoration = cellUnderline ? "underline" : "none";
                measureNameCell.style.borderRight = vertBorderValue;
                measureNameCell.style.backgroundColor = rowBgColor;
                measureNameCell.style.color = defaultCategoryTextColor; // or some specific color
                measureNameCell.style.overflow = "hidden";
                measureNameCell.style.textOverflow = "ellipsis";
                measureNameCell.style.whiteSpace = categoryWordWrap ? "normal" : "nowrap";
                if (categoryWordWrap) {
                    measureNameCell.style.wordBreak = "break-word";
                }

                const defaultMeasureTextColor = dataViewObjects.getFillColor(
                        valueColumn.source.objects || {},
                        { objectName: "valueConditionalFormatting", propertyName: "textColor" },
                        (typeof isEvenRow !== 'undefined') ? (isEvenRow ? textColor : alternateTextColor) : textColor
                    );

                    const defaultMeasureBgColor = dataViewObjects.getFillColor(
                        valueColumn.source.objects || {},
                        { objectName: "valueBackgroundConditionalFormatting", propertyName: "backgroundColor" },
                        (typeof isEvenRow !== 'undefined') ? (isEvenRow ? backgroundColor : alternateBackgroundColor) : backgroundColor
                    );

                const objects = valueColumn.source.objects || {};
                const showDataBars = dataViewObjects.getValue<boolean>(objects, { objectName: "dataBarsFormatting", propertyName: "showDataBars" }, false);
                const showMarker = dataViewObjects.getValue<boolean>(objects, { objectName: "dataBarMarkers", propertyName: "showMarker" }, false);
                
                let cellDataBarColor = dataViewObjects.getFillColor(objects, { objectName: "dataBarsConditionalFormatting", propertyName: "dataBarColor" }, "#31b6fd");
                            const matchDataBarColor = dataViewObjects.getValue<boolean>(objects, { objectName: "dataBarsFormatting", propertyName: "matchDataBarColor" }, true);
                            const showZeroLine = dataViewObjects.getValue<boolean>(objects, { objectName: "dataBarsFormatting", propertyName: "showZeroLine" }, false);
                            const zeroLineColor = dataViewObjects.getFillColor(objects, { objectName: "dataBarsFormatting", propertyName: "zeroLineColor" }, "#000000");
                            const zeroLineTransparency = dataViewObjects.getValue<number>(objects, { objectName: "dataBarsFormatting", propertyName: "zeroLineTransparency" }, 0);
                            const dataBarHeight = dataViewObjects.getValue<number>(objects, { objectName: "dataBarsFormatting", propertyName: "dataBarHeight" }, 80);
                
                let markerShapeRaw = dataViewObjects.getValue<any>(objects, { objectName: "dataBarMarkers", propertyName: "markerShape" }, "circle");
                const markerShape = typeof markerShapeRaw === "string" ? markerShapeRaw : (markerShapeRaw.value || "circle");
                const markerSize = dataViewObjects.getValue<number>(objects, { objectName: "dataBarMarkers", propertyName: "markerSize" }, 10);
                let cellMarkerColor = dataViewObjects.getFillColor(objects, { objectName: "dataBarMarkers", propertyName: "markerColor" }, "#000000");

                const min = measureMins[measureIndex];
                const max = measureMaxs[measureIndex];
                const range = max - min;
                
                // Data Cells: Values for each category (or the 1 value if no categories)
                for (let i = 0; i < rowCount; i++) {
                    // Check if this column is a subtotal column in transposed mode
                    let transposedIsSubtotal = false;
                    if (hasCategories) {
                        const colPaths = categories.paths ? categories.paths[i] : [categories.values[i]];
                        transposedIsSubtotal = colPaths ? colPaths.some((p: any) => p === "Total") : false;
                    }

                    let cell = row.insertCell();
                    cell.style.position = "relative";
                    
                    let cellTextColor = defaultMeasureTextColor;
                    // Read per-measure text color applyTo
                    const txtApplyToRaw = dataViewObjects.getValue<any>(
                        valueColumn.source.objects || {},
                        { objectName: "valueConditionalFormatting", propertyName: "applyTo" },
                        "valuesOnly"
                    );
                    const measureTxtApplyTo = typeof txtApplyToRaw === "string" ? txtApplyToRaw : (txtApplyToRaw?.value || "valuesOnly");
                    // When applyTo is "totalsOnly", regular value columns should not get the static text color
                    if (measureTxtApplyTo === "totalsOnly" && !transposedIsSubtotal) {
                        cellTextColor = (typeof isEvenRow !== 'undefined') ? (isEvenRow ? textColor : alternateTextColor) : textColor;
                    }
                    const shouldApplyTxtCF = (measureTxtApplyTo === "valuesAndTotals") ||
                        (measureTxtApplyTo === "valuesOnly" && !transposedIsSubtotal) ||
                        (measureTxtApplyTo === "totalsOnly" && transposedIsSubtotal);
                    if (shouldApplyTxtCF) {
                        if (valueColumn.objects && valueColumn.objects[i]) {
                            const cfColor = dataViewObjects.getFillColor(
                                valueColumn.objects[i],
                                { objectName: "valueConditionalFormatting", propertyName: "textColor" }
                            );
                            if (cfColor) cellTextColor = cfColor;
                        } else if (transposedIsSubtotal && measureTextCFPairs[measureIndex]?.length > 0) {
                            const totalVal = valueColumn.values[i];
                            if (totalVal !== null && totalVal !== undefined) {
                                const interpolated = interpolateCFColor(Number(totalVal), measureTextCFPairs[measureIndex]);
                                if (interpolated) cellTextColor = interpolated;
                            }
                        }
                    }

                    let cellBackgroundColor = defaultMeasureBgColor;
                    // Read per-measure applyTo from source.objects (measure-level, not per-row)
                    const bgApplyToRaw = dataViewObjects.getValue<any>(
                        valueColumn.source.objects || {},
                        { objectName: "valueBackgroundConditionalFormatting", propertyName: "applyTo" },
                        "valuesOnly"
                    );
                    const measureBgApplyTo = typeof bgApplyToRaw === "string" ? bgApplyToRaw : (bgApplyToRaw?.value || "valuesOnly");
                    // When applyTo is "totalsOnly", regular value columns should not get the static bg color
                    if (measureBgApplyTo === "totalsOnly" && !transposedIsSubtotal) {
                        cellBackgroundColor = (typeof isEvenRow !== 'undefined') ? (isEvenRow ? backgroundColor : alternateBackgroundColor) : backgroundColor;
                    }
                    const shouldApplyBgCF = (measureBgApplyTo === "valuesAndTotals") ||
                        (measureBgApplyTo === "valuesOnly" && !transposedIsSubtotal) ||
                        (measureBgApplyTo === "totalsOnly" && transposedIsSubtotal);
                    if (shouldApplyBgCF) {
                        if (valueColumn.objects && valueColumn.objects[i]) {
                            const cfBgColor = dataViewObjects.getFillColor(
                                valueColumn.objects[i],
                                { objectName: "valueBackgroundConditionalFormatting", propertyName: "backgroundColor" }
                            );
                            if (cfBgColor) cellBackgroundColor = cfBgColor;
                        } else if (transposedIsSubtotal && measureBgCFPairs[measureIndex]?.length > 0) {
                            const totalVal = valueColumn.values[i];
                            if (totalVal !== null && totalVal !== undefined) {
                                const interpolated = interpolateCFColor(Number(totalVal), measureBgCFPairs[measureIndex]);
                                if (interpolated) cellBackgroundColor = interpolated;
                            }
                        }
                    }

                    let value = valueColumn.values[i];
                    if (value !== null && value !== undefined) {
                        let numValue = Number(value);
                        const specSettings = measureSettingsList[measureIndex];
                        const dynamicFormat = valueColumn.objects?.[i]?.general?.formatString as string;
                        const cellFormat = dynamicFormat || measureFormats[measureIndex];
                        const formattedValue = formatValue(numValue, cellFormat, specSettings.displayUnits, specSettings.decimalPlaces);

                        const objects = valueColumn.source.objects || {};
                        const showDataBars = dataViewObjects.getValue<boolean>(objects, { objectName: "dataBarsFormatting", propertyName: "showDataBars" }, false);
                        const showOnRowTotals = dataViewObjects.getValue<boolean>(objects, { objectName: "dataBarsFormatting", propertyName: "showOnRowTotals" }, true);
                        
                        if (showDataBars && (!transposedIsSubtotal || showOnRowTotals)) {
                            let cellDataBarColor = dataViewObjects.getFillColor(objects, { objectName: "dataBarsConditionalFormatting", propertyName: "dataBarColor" }, "#31b6fd");
                            // Reset static color when applyTo excludes this column type
                            const dbApplyToCheck = dataViewObjects.getValue<any>(objects, { objectName: "dataBarsConditionalFormatting", propertyName: "applyTo" }, "valuesOnly");
                            const dbApplyToVal = typeof dbApplyToCheck === "string" ? dbApplyToCheck : (dbApplyToCheck?.value || "valuesOnly");
                            if (dbApplyToVal === "totalsOnly" && !transposedIsSubtotal) cellDataBarColor = "#31b6fd";
                            const matchDataBarColor = dataViewObjects.getValue<boolean>(objects, { objectName: "dataBarsFormatting", propertyName: "matchDataBarColor" }, true);
                            const showZeroLine = dataViewObjects.getValue<boolean>(objects, { objectName: "dataBarsFormatting", propertyName: "showZeroLine" }, false);
                            const zeroLineColor = dataViewObjects.getFillColor(objects, { objectName: "dataBarsFormatting", propertyName: "zeroLineColor" }, "#000000");
                            const zeroLineTransparency = dataViewObjects.getValue<number>(objects, { objectName: "dataBarsFormatting", propertyName: "zeroLineTransparency" }, 0);
                            const dataBarHeight = dataViewObjects.getValue<number>(objects, { objectName: "dataBarsFormatting", propertyName: "dataBarHeight" }, 80);
                            const transparency = dataViewObjects.getValue<number>(objects, { objectName: "dataBarsFormatting", propertyName: "transparency" }, 20);
                            const borderOn = dataViewObjects.getValue<boolean>(objects, { objectName: "dataBarsFormatting", propertyName: "borderOn" }, true);
                            const borderThickness = dataViewObjects.getValue<number>(objects, { objectName: "dataBarsFormatting", propertyName: "borderThickness" }, 1);
                            const borderColor = dataViewObjects.getFillColor(objects, { objectName: "dataBarsFormatting", propertyName: "borderColor" }, "#000000");
                            const axisTypeRaw = dataViewObjects.getValue<any>(objects, { objectName: "dataBarsFormatting", propertyName: "axisType" }, "Amount");
                            const axisType = typeof axisTypeRaw === "string" ? axisTypeRaw : (axisTypeRaw.value || "Amount");
                            const minValueObj = dataViewObjects.getValue<number>(objects, { objectName: "dataBarsFormatting", propertyName: "minValue" }, null);
                            const maxValueObj = dataViewObjects.getValue<number>(objects, { objectName: "dataBarsFormatting", propertyName: "maxValue" }, null);
                            const labelsOutside = dataViewObjects.getValue<boolean>(objects, { objectName: "dataBarsFormatting", propertyName: "labelsOutside" }, false);
                            const verticalDataBars = dataViewObjects.getValue<boolean>(objects, { objectName: "dataBarsFormatting", propertyName: "verticalDataBars" }, false);
                            
                            // Check for conditional formatting on data bar color
                            const dbCFApplyToRaw = dataViewObjects.getValue<any>(objects, { objectName: "dataBarsConditionalFormatting", propertyName: "applyTo" }, "valuesOnly");
                            const dbCFApplyTo = typeof dbCFApplyToRaw === "string" ? dbCFApplyToRaw : (dbCFApplyToRaw?.value || "valuesOnly");
                            const shouldApplyDbCF = (dbCFApplyTo === "valuesAndTotals") ||
                                (dbCFApplyTo === "valuesOnly" && !transposedIsSubtotal) ||
                                (dbCFApplyTo === "totalsOnly" && transposedIsSubtotal);
                            if (shouldApplyDbCF) {
                                if (valueColumn.objects && valueColumn.objects[i]) {
                                    const cfDataBarColor = dataViewObjects.getFillColor(
                                        valueColumn.objects[i],
                                        { objectName: "dataBarsConditionalFormatting", propertyName: "dataBarColor" }
                                    );
                                    if (cfDataBarColor) cellDataBarColor = cfDataBarColor;
                                } else if (transposedIsSubtotal) {
                                    if (measureDbCFPairs[measureIndex]?.length > 0) {
                                        const interpolated = interpolateCFColor(numValue, measureDbCFPairs[measureIndex]);
                                        if (interpolated) cellDataBarColor = interpolated;
                                    } else {
                                        const staticDb = dataViewObjects.getFillColor(objects, { objectName: "dataBarsConditionalFormatting", propertyName: "dataBarColor" });
                                        if (staticDb) cellDataBarColor = staticDb;
                                    }
                                }
                            }

                            let min_raw = measureMins[measureIndex];
                            let max_raw = measureMaxs[measureIndex];
                            let min = min_raw;
                            let max = max_raw;
                            
                            let domainRange = max_raw - min_raw;
                            if (domainRange <= 0) domainRange = 1;
                            
                            if (minValueObj !== null && minValueObj !== undefined) {
                                if (axisType === "Percentage") {
                                    min = min_raw - domainRange * (minValueObj / 100);
                                } else {
                                    min = minValueObj;
                                }
                            }
                            
                            if (maxValueObj !== null && maxValueObj !== undefined) {
                                if (axisType === "Percentage") {
                                    max = max_raw + domainRange * (maxValueObj / 100);
                                } else {
                                    max = maxValueObj;
                                }
                            }
                            let range = max - min;
                            if (range <= 0) range = 1;

                            // Calculate width percentage
                            let widthPct = 0;
                            let leftPct = 0;

                            let clampedValue = Math.max(min, Math.min(max, numValue));
                            let zeroPoint = Math.max(min, Math.min(max, 0));

                            let leftMarginPct = 0;
                            let rightMarginPct = 0;
                            if (labelsOutside && !verticalDataBars) {
                                const dbFont = `${cellFontSize}px ${cellFontFamily}`;
                                const dbCellW = valueColumnWidths[measureIndex];
                                if (min < 0) leftMarginPct = computeLabelMarginPct(formatValue(min, cellFormat, specSettings.displayUnits, specSettings.decimalPlaces), dbCellW, dbFont);
                                if (max > 0) rightMarginPct = computeLabelMarginPct(formatValue(max, cellFormat, specSettings.displayUnits, specSettings.decimalPlaces), dbCellW, dbFont);
                            }
                              let scaleMultiplier = (100 - leftMarginPct - rightMarginPct) / 100;

                              if (clampedValue >= zeroPoint) {
                                  widthPct = ((clampedValue - zeroPoint) / range) * 100 * scaleMultiplier;
                                  leftPct = leftMarginPct + ((zeroPoint - min) / range) * 100 * scaleMultiplier;
                              } else {
                                  widthPct = ((zeroPoint - clampedValue) / range) * 100 * scaleMultiplier;
                                  leftPct = leftMarginPct + ((clampedValue - min) / range) * 100 * scaleMultiplier;
                              }

                            // Create data bar div
                            let dataBar = document.createElement("div");
                            dataBar.style.position = "absolute";
                            dataBar.style.backgroundColor = applyTransparency(cellDataBarColor, transparency);
                            dataBar.style.zIndex = "1";

                            if (verticalDataBars) {
                                const leftCenterPct = (100 - dataBarHeight) / 2;
                                dataBar.style.left = `${leftCenterPct}%`;
                                dataBar.style.width = `${dataBarHeight}%`;
                                dataBar.style.bottom = `${leftPct}%`;
                                dataBar.style.height = `${widthPct}%`;
                            } else {
                                const topPct = (100 - dataBarHeight) / 2;
                                dataBar.style.top = `${topPct}%`;
                                dataBar.style.height = `${dataBarHeight}%`;
                                dataBar.style.left = `${leftPct}%`;
                                dataBar.style.width = `${widthPct}%`;
                            }

                            if (borderOn) {
                                let finalBorderColor = matchDataBarColor ? cellDataBarColor : borderColor;
                                dataBar.style.border = `${borderThickness}px solid ${finalBorderColor}`;
                                dataBar.style.boxSizing = "border-box";
                            }

                            cell.appendChild(dataBar);

                            if (showZeroLine) {
                                let zeroLine = document.createElement("div");
                                zeroLine.style.position = "absolute";
                                let zPosPct = ((zeroPoint - min) / range) * 100 * scaleMultiplier + leftMarginPct;
                                if (verticalDataBars) {
                                    zeroLine.style.left = "0";
                                    zeroLine.style.right = "0";
                                    zeroLine.style.height = "2px";
                                    zeroLine.style.bottom = `calc(${zPosPct}% - 1px)`;
                                } else {
                                    zeroLine.style.top = "0";
                                    zeroLine.style.bottom = "0";
                                    zeroLine.style.width = "2px";
                                    zeroLine.style.left = `calc(${zPosPct}% - 1px)`;
                                }
                                zeroLine.style.backgroundColor = applyTransparency(zeroLineColor, zeroLineTransparency);
                                zeroLine.style.zIndex = "1"; 
                                cell.appendChild(zeroLine);
                            }

                            // Data bar markers settings
                            const showMarker = dataViewObjects.getValue<boolean>(objects, { objectName: "dataBarMarkers", propertyName: "showMarker" }, false);
                            if (showMarker) {
                                let markerShapeRaw = dataViewObjects.getValue<any>(objects, { objectName: "dataBarMarkers", propertyName: "markerShape" }, "circle");
                                const markerShape = typeof markerShapeRaw === "string" ? markerShapeRaw : (markerShapeRaw.value || "circle");
                                const markerSize = dataViewObjects.getValue<number>(objects, { objectName: "dataBarMarkers", propertyName: "markerSize" }, 10);
                                let cellMarkerColor = dataViewObjects.getFillColor(objects, { objectName: "dataBarMarkers", propertyName: "markerColor" }, "#000000");
                                
                                if (valueColumn.objects && valueColumn.objects[i]) {
                                    const cfMarkerColor = dataViewObjects.getFillColor(
                                        valueColumn.objects[i],
                                        { objectName: "dataBarMarkers", propertyName: "markerColor" }
                                    );
                                    if (cfMarkerColor) {
                                        cellMarkerColor = cfMarkerColor;
                                    }
                                }

                                let marker = document.createElement("div");
                                marker.style.position = "absolute";
                                marker.style.zIndex = "3";
                                marker.style.width = `${markerSize}px`;
                                marker.style.height = `${markerSize}px`;

                                if (verticalDataBars) {
                                    let markerBottomPct = numValue >= 0 ? leftPct + widthPct : leftPct;
                                    marker.style.left = `calc(50% - ${markerSize / 2}px)`;
                                    marker.style.bottom = `calc(${markerBottomPct}% - ${markerSize / 2}px)`;
                                } else {
                                    let markerLeftPct = numValue >= 0 ? leftPct + widthPct : leftPct;
                                    marker.style.left = `calc(${markerLeftPct}% - ${markerSize / 2}px)`;
                                    marker.style.top = `calc(50% - ${markerSize / 2}px)`;
                                }

                                if (markerShape === "circle") {
                                    marker.style.backgroundColor = cellMarkerColor;
                                    marker.style.borderRadius = "50%";
                                } else if (markerShape === "cross") {
                                    marker.style.backgroundColor = "transparent";
                                    let line1 = document.createElement("div");
                                    line1.style.position = "absolute";
                                    line1.style.backgroundColor = cellMarkerColor;
                                    line1.style.width = "100%";
                                    line1.style.height = "2px";
                                    line1.style.top = "calc(50% - 1px)";
                                    line1.style.transform = "rotate(45deg)";

                                    let line2 = document.createElement("div");
                                    line2.style.position = "absolute";
                                    line2.style.backgroundColor = cellMarkerColor;
                                    line2.style.width = "100%";
                                    line2.style.height = "2px";
                                    line2.style.top = "calc(50% - 1px)";
                                    line2.style.transform = "rotate(-45deg)";

                                    marker.appendChild(line1);
                                    marker.appendChild(line2);
                                } else if (markerShape === "horizontalLine") {
                                    marker.style.backgroundColor = cellMarkerColor;
                                    marker.style.height = "2px";
                                    marker.style.top = "calc(50% - 1px)";
                                    marker.style.width = `${markerSize}px`;
                                } else if (markerShape === "verticalLine") {
                                    marker.style.backgroundColor = cellMarkerColor;
                                    marker.style.width = "2px";
                                    if (verticalDataBars) {
                                        let markerBottomPct = numValue >= 0 ? leftPct + widthPct : leftPct;
                                        marker.style.left = `calc(50% - 1px)`;
                                        marker.style.bottom = `calc(${markerBottomPct}% - ${markerSize / 2}px)`;
                                    } else {
                                        let markerLeftPct = numValue >= 0 ? leftPct + widthPct : leftPct;
                                        marker.style.left = `calc(${markerLeftPct}% - 1px)`;
                                    }
                                } else if (markerShape === "semiCircle") {
                                    marker.style.backgroundColor = cellMarkerColor;
                                    if (verticalDataBars) {
                                        let markerBottomPct = numValue >= 0 ? leftPct + widthPct : leftPct;
                                        if (numValue >= 0) {
                                            marker.style.borderTopLeftRadius = `${markerSize}px`;
                                            marker.style.borderTopRightRadius = `${markerSize}px`;
                                            marker.style.height = `${markerSize / 2}px`;
                                            marker.style.bottom = `calc(${markerBottomPct}%)`;
                                        } else {
                                            marker.style.borderBottomLeftRadius = `${markerSize}px`;
                                            marker.style.borderBottomRightRadius = `${markerSize}px`;
                                            marker.style.height = `${markerSize / 2}px`;
                                            marker.style.bottom = `calc(${markerBottomPct}% - ${markerSize / 2}px)`;
                                        }
                                    } else {
                                        let markerLeftPct = numValue >= 0 ? leftPct + widthPct : leftPct;
                                        // Draw semi circle pointing outwards
                                        if (numValue >= 0) {
                                            marker.style.borderTopRightRadius = `${markerSize}px`;
                                            marker.style.borderBottomRightRadius = `${markerSize}px`;
                                            marker.style.width = `${markerSize / 2}px`;
                                            marker.style.left = `calc(${markerLeftPct}%)`;
                                        } else {
                                            marker.style.borderTopLeftRadius = `${markerSize}px`;
                                            marker.style.borderBottomLeftRadius = `${markerSize}px`;
                                            marker.style.width = `${markerSize / 2}px`;
                                            marker.style.left = `calc(${markerLeftPct}% - ${markerSize / 2}px)`;
                                        }
                                    }
                                }

                                cell.appendChild(marker);
                            }

                            let textDiv = document.createElement("div");
                            textDiv.style.zIndex = "2";
                            textDiv.textContent = formattedValue;
                            
                            if (labelsOutside) {
                                textDiv.style.position = "absolute";
                                textDiv.style.whiteSpace = "nowrap";
                                if (verticalDataBars) {
                                    textDiv.style.left = "50%";
                                    textDiv.style.transform = "translateX(-50%)";
                                    if (numValue >= 0) {
                                        textDiv.style.bottom = `calc(${leftPct + widthPct}% + 4px)`;
                                    } else {
                                        textDiv.style.top = `calc(${100 - leftPct}% + 4px)`;
                                    }
                                } else {
                                    textDiv.style.top = "50%";
                                    textDiv.style.transform = "translateY(-50%)";
                                    if (numValue >= 0) {
                                        textDiv.style.left = `calc(${leftPct + widthPct}% + 4px)`;
                                    } else {
                                        textDiv.style.right = `calc(${100 - leftPct}% + 4px)`;
                                    }
                                }
                            } else {
                                textDiv.style.position = "relative";
                            }
                            cell.appendChild(textDiv);
                        } else {
                            cell.textContent = formattedValue;
                        }
                    } else {
                        cell.textContent = '-';
                    }

                    cell.className = 'table-data-cell';
                    cell.style.width = `${valueColumnWidths[measureIndex]}px`;
                    cell.style.minWidth = `${valueColumnWidths[measureIndex]}px`;
                    cell.style.maxWidth = `${valueColumnWidths[measureIndex]}px`;
                    cell.style.fontWeight = valueBold ? "bold" : "normal";
                      cell.style.fontStyle = cellItalic ? "italic" : "normal";
                      cell.style.textDecoration = cellUnderline ? "underline" : "none";
                    cell.style.borderRight = vertBorderValue;
                    cell.style.backgroundColor = cellBackgroundColor;
                    cell.style.color = cellTextColor;
                    cell.style.overflow = "hidden";
                    cell.style.textOverflow = "ellipsis";

                    let specSettings = measureSettingsList[measureIndex];
                    let specRowBgColor = isEvenRow ? 
                        (specSettings.backgroundColor !== undefined ? specSettings.backgroundColor : cellBackgroundColor) : 
                        (specSettings.alternateBackgroundColor !== undefined ? specSettings.alternateBackgroundColor : cellBackgroundColor);
                    let specCellTextColor = isEvenRow ? 
                        (specSettings.textColor !== undefined ? specSettings.textColor : cellTextColor) : 
                        (specSettings.alternateTextColor !== undefined ? specSettings.alternateTextColor : cellTextColor);

                    let effectiveBg = specRowBgColor;
                    let effectiveColor = specCellTextColor;
                    if (specSettings.transparency > 0) {
                        effectiveColor = applyTransparency(effectiveColor, specSettings.transparency);
                    }

                    let efBold = specSettings.bold !== undefined ? specSettings.bold : valueBold;
                    let efItalic = specSettings.italic !== undefined ? specSettings.italic : cellItalic;
                    let efUnderline = specSettings.underline !== undefined ? specSettings.underline : cellUnderline;
                    let efFontFamily = specSettings.fontFamily !== undefined ? specSettings.fontFamily : cellFontFamily;
                    let efFontSize = specSettings.fontSize !== undefined ? specSettings.fontSize : cellFontSize;
                    let efWordWrap = specSettings.textWrap !== undefined ? specSettings.textWrap : valueWordWrap;
                    let effectiveAlign = specSettings.alignment ? specSettings.alignment : "right";

                    if (specSettings.horizontalGrid !== undefined) {
                        if (specSettings.horizontalGrid) {
                            cell.style.borderBottom = horizBorderValueOn;
                        } else {
                            cell.style.borderBottom = 'hidden';
                        }
                    }

                    // Override with totals formatting for subtotal columns in transposed mode
                    if (transposedIsSubtotal) {
                        efBold = totalRowBold;
                        efItalic = totalRowItalic;
                        efUnderline = totalRowUnderline;
                        efFontFamily = totalRowFontFamily;
                        efFontSize = totalRowFontSize;
                        efWordWrap = totalRowWordWrap;
                    }

                    applyRowSquash(cell, rowHeight, efFontSize, efWordWrap);
                    cell.style.backgroundColor = effectiveBg;
                    cell.style.color = effectiveColor;
                    cell.style.fontWeight = efBold ? "bold" : "normal";
                    cell.style.fontStyle = efItalic ? "italic" : "normal";
                    cell.style.textDecoration = efUnderline ? "underline" : "none";
                    cell.style.fontFamily = efFontFamily;
                    cell.style.fontSize = `${efFontSize}px`;
                    cell.style.whiteSpace = efWordWrap ? "normal" : "nowrap";

                    cell.style.textAlign = effectiveAlign;
                    if (efWordWrap) {
                        cell.style.wordBreak = "break-word";
                    }

                    // Tooltip for transposed data cell
                    const trTooltipItems: VisualTooltipDataItem[] = [];
                    if (hasCategories) {
                        const colPaths = categories.paths ? categories.paths[i] : [categories.values[i]];
                        if (colPaths) {
                            colPaths.forEach((seg: any, lvlIdx: number) => {
                                if (seg !== "Total" && seg !== "" && seg !== undefined) {
                                    const catName = categories.sources[lvlIdx]?.displayName || "Category";
                                    trTooltipItems.push({ displayName: catName, value: String(seg) });
                                }
                            });
                        }
                    }
                    trTooltipItems.push({
                        displayName: valueColumn.source.displayName || "Value",
                        value: cell.textContent || "-"
                    });
                    this.addTooltip(cell, trTooltipItems);
                }
                
                // Add the Total column cell for this measure if enabled
                if (showTotalRow) {
                    let totalCell = row.insertCell();
                    totalCell.style.position = "relative";
                    let totalVal = totals[measureIndex];
                    let specSettings = measureSettingsList[measureIndex];
                    if (totalVal === null || totalVal === undefined) {
                        totalCell.textContent = "";
                    } else {
                        let firstRowDynamicFormat: string;
                        if (values[measureIndex].objects) {
                            for (let obj of values[measureIndex].objects) {
                                if (obj?.general?.formatString) {
                                    firstRowDynamicFormat = obj.general.formatString as string;
                                    break;
                                }
                            }
                        }
                        const totalFormat = firstRowDynamicFormat || measureFormats[measureIndex];
                        const formattedTotal = formatValue(totalVal, totalFormat, specSettings.totalDisplayUnits, specSettings.totalDecimalPlaces);

                        // Check if data bars should be rendered on the row total in transposed mode
                        const totalObjects = valueColumn.source.objects || {};
                        const totalShowDataBars = dataViewObjects.getValue<boolean>(totalObjects, { objectName: "dataBarsFormatting", propertyName: "showDataBars" }, false);
                        const totalShowOnRowTotals = dataViewObjects.getValue<boolean>(totalObjects, { objectName: "dataBarsFormatting", propertyName: "showOnRowTotals" }, true);

                        if (totalShowDataBars && totalShowOnRowTotals) {
                            let totalDataBarColor = dataViewObjects.getFillColor(totalObjects, { objectName: "dataBarsConditionalFormatting", propertyName: "dataBarColor" }, "#31b6fd");

                            // Apply data bar CF applyTo for transposed row total
                            const trTotalDbCFApplyToRaw = dataViewObjects.getValue<any>(totalObjects, { objectName: "dataBarsConditionalFormatting", propertyName: "applyTo" }, "valuesOnly");
                            const trTotalDbCFApplyTo = typeof trTotalDbCFApplyToRaw === "string" ? trTotalDbCFApplyToRaw : (trTotalDbCFApplyToRaw?.value || "valuesOnly");
                            if (trTotalDbCFApplyTo === "valuesOnly") {
                                totalDataBarColor = "#31b6fd";
                            } else if (trTotalDbCFApplyTo === "valuesAndTotals" || trTotalDbCFApplyTo === "totalsOnly") {
                                if (measureDbCFPairs[measureIndex]?.length > 0 && totalVal !== null && totalVal !== undefined) {
                                    const interpolated = interpolateCFColor(Number(totalVal), measureDbCFPairs[measureIndex]);
                                    if (interpolated) totalDataBarColor = interpolated;
                                }
                            }

                            const totalMatchColor = dataViewObjects.getValue<boolean>(totalObjects, { objectName: "dataBarsFormatting", propertyName: "matchDataBarColor" }, true);
                            const totalShowZeroLine = dataViewObjects.getValue<boolean>(totalObjects, { objectName: "dataBarsFormatting", propertyName: "showZeroLine" }, false);
                            const totalZeroLineColor = dataViewObjects.getFillColor(totalObjects, { objectName: "dataBarsFormatting", propertyName: "zeroLineColor" }, "#000000");
                            const totalZeroLineTransparency = dataViewObjects.getValue<number>(totalObjects, { objectName: "dataBarsFormatting", propertyName: "zeroLineTransparency" }, 0);
                            const totalDbHeight = dataViewObjects.getValue<number>(totalObjects, { objectName: "dataBarsFormatting", propertyName: "dataBarHeight" }, 80);
                            const totalDbTransparency = dataViewObjects.getValue<number>(totalObjects, { objectName: "dataBarsFormatting", propertyName: "transparency" }, 20);
                            const totalBorderOn = dataViewObjects.getValue<boolean>(totalObjects, { objectName: "dataBarsFormatting", propertyName: "borderOn" }, true);
                            const totalBorderThickness = dataViewObjects.getValue<number>(totalObjects, { objectName: "dataBarsFormatting", propertyName: "borderThickness" }, 1);
                            const totalBorderColor = dataViewObjects.getFillColor(totalObjects, { objectName: "dataBarsFormatting", propertyName: "borderColor" }, "#000000");
                            const totalAxisTypeRaw = dataViewObjects.getValue<any>(totalObjects, { objectName: "dataBarsFormatting", propertyName: "axisType" }, "Amount");
                            const totalAxisType = typeof totalAxisTypeRaw === "string" ? totalAxisTypeRaw : (totalAxisTypeRaw.value || "Amount");
                            const totalMinValueObj = dataViewObjects.getValue<number>(totalObjects, { objectName: "dataBarsFormatting", propertyName: "minValue" }, null);
                            const totalMaxValueObj = dataViewObjects.getValue<number>(totalObjects, { objectName: "dataBarsFormatting", propertyName: "maxValue" }, null);
                            const totalLabelsOutside = dataViewObjects.getValue<boolean>(totalObjects, { objectName: "dataBarsFormatting", propertyName: "labelsOutside" }, false);
                            const totalVerticalDataBars = dataViewObjects.getValue<boolean>(totalObjects, { objectName: "dataBarsFormatting", propertyName: "verticalDataBars" }, false);

                            let numValue = Number(totalVal);
                            let min_raw = measureMins[measureIndex];
                            let max_raw = measureMaxs[measureIndex];
                            let min = min_raw;
                            let max = max_raw;
                            let domainRange = max_raw - min_raw;
                            if (domainRange <= 0) domainRange = 1;
                            if (totalMinValueObj !== null && totalMinValueObj !== undefined) {
                                min = totalAxisType === "Percentage" ? min_raw - domainRange * (totalMinValueObj / 100) : totalMinValueObj;
                            }
                            if (totalMaxValueObj !== null && totalMaxValueObj !== undefined) {
                                max = totalAxisType === "Percentage" ? max_raw + domainRange * (totalMaxValueObj / 100) : totalMaxValueObj;
                            }
                            let range = max - min;
                            if (range <= 0) range = 1;

                            let clampedValue = Math.max(min, Math.min(max, numValue));
                            let zeroPoint = Math.max(min, Math.min(max, 0));
                            let leftMarginPct = 0;
                            let rightMarginPct = 0;
                            if (totalLabelsOutside && !totalVerticalDataBars) {
                                const dbFont = `${cellFontSize}px ${cellFontFamily}`;
                                const dbCellW = valueColumnWidths[measureIndex];
                                if (min < 0) leftMarginPct = computeLabelMarginPct(formatValue(min, totalFormat, specSettings.totalDisplayUnits, specSettings.totalDecimalPlaces), dbCellW, dbFont);
                                if (max > 0) rightMarginPct = computeLabelMarginPct(formatValue(max, totalFormat, specSettings.totalDisplayUnits, specSettings.totalDecimalPlaces), dbCellW, dbFont);
                            }
                            let scaleMultiplier = (100 - leftMarginPct - rightMarginPct) / 100;
                            let widthPct = 0, leftPct = 0;
                            if (clampedValue >= zeroPoint) {
                                widthPct = ((clampedValue - zeroPoint) / range) * 100 * scaleMultiplier;
                                leftPct = leftMarginPct + ((zeroPoint - min) / range) * 100 * scaleMultiplier;
                            } else {
                                widthPct = ((zeroPoint - clampedValue) / range) * 100 * scaleMultiplier;
                                leftPct = leftMarginPct + ((clampedValue - min) / range) * 100 * scaleMultiplier;
                            }

                            let dataBar = document.createElement("div");
                            dataBar.style.position = "absolute";
                            dataBar.style.backgroundColor = applyTransparency(totalDataBarColor, totalDbTransparency);
                            dataBar.style.zIndex = "1";
                            if (totalVerticalDataBars) {
                                const leftCenterPct = (100 - totalDbHeight) / 2;
                                dataBar.style.left = `${leftCenterPct}%`;
                                dataBar.style.width = `${totalDbHeight}%`;
                                dataBar.style.bottom = `${leftPct}%`;
                                dataBar.style.height = `${widthPct}%`;
                            } else {
                                dataBar.style.top = `${(100 - totalDbHeight) / 2}%`;
                                dataBar.style.height = `${totalDbHeight}%`;
                                dataBar.style.left = `${leftPct}%`;
                                dataBar.style.width = `${widthPct}%`;
                            }
                            if (totalBorderOn) {
                                let finalBorderColor = totalMatchColor ? totalDataBarColor : totalBorderColor;
                                dataBar.style.border = `${totalBorderThickness}px solid ${finalBorderColor}`;
                                dataBar.style.boxSizing = "border-box";
                            }
                            totalCell.appendChild(dataBar);

                            if (totalShowZeroLine) {
                                let zeroLine = document.createElement("div");
                                zeroLine.style.position = "absolute";
                                let zPosPct = ((zeroPoint - min) / range) * 100 * scaleMultiplier + leftMarginPct;
                                if (totalVerticalDataBars) {
                                    zeroLine.style.left = "0";
                                    zeroLine.style.right = "0";
                                    zeroLine.style.height = "2px";
                                    zeroLine.style.bottom = `calc(${zPosPct}% - 1px)`;
                                } else {
                                    zeroLine.style.top = "0";
                                    zeroLine.style.bottom = "0";
                                    zeroLine.style.width = "2px";
                                    zeroLine.style.left = `calc(${zPosPct}% - 1px)`;
                                }
                                zeroLine.style.backgroundColor = applyTransparency(totalZeroLineColor, totalZeroLineTransparency);
                                zeroLine.style.zIndex = "1";
                                totalCell.appendChild(zeroLine);
                            }

                            let textDiv = document.createElement("div");
                            textDiv.style.zIndex = "2";
                            textDiv.textContent = formattedTotal;
                            if (totalLabelsOutside) {
                                textDiv.style.position = "absolute";
                                textDiv.style.whiteSpace = "nowrap";
                                if (totalVerticalDataBars) {
                                    textDiv.style.left = "50%";
                                    textDiv.style.transform = "translateX(-50%)";
                                    if (numValue >= 0) {
                                        textDiv.style.bottom = `calc(${leftPct + widthPct}% + 4px)`;
                                    } else {
                                        textDiv.style.top = `calc(${100 - leftPct}% + 4px)`;
                                    }
                                } else {
                                    textDiv.style.top = "50%";
                                    textDiv.style.transform = "translateY(-50%)";
                                    if (numValue >= 0) {
                                        textDiv.style.left = `calc(${leftPct + widthPct}% + 4px)`;
                                    } else {
                                        textDiv.style.right = `calc(${100 - leftPct}% + 4px)`;
                                    }
                                }
                            } else {
                                textDiv.style.position = "relative";
                            }
                            totalCell.appendChild(textDiv);
                        } else {
                            totalCell.textContent = formattedTotal;
                        }
                    }
                    totalCell.className = 'table-data-cell';
                    totalCell.style.width = `${valueColumnWidths[measureIndex]}px`;
                    totalCell.style.minWidth = `${valueColumnWidths[measureIndex]}px`;
                    totalCell.style.maxWidth = `${valueColumnWidths[measureIndex]}px`;
                    let efTotalBold = specSettings.totalBold !== undefined ? specSettings.totalBold : totalRowBold;
                    let efTotalItalic = specSettings.totalItalic !== undefined ? specSettings.totalItalic : totalRowItalic;
                    let efTotalUnderline = specSettings.totalUnderline !== undefined ? specSettings.totalUnderline : totalRowUnderline;
                    let efTotalFontFamily = specSettings.totalFontFamily !== undefined ? specSettings.totalFontFamily : totalRowFontFamily;
                    let efTotalFontSize = specSettings.totalFontSize !== undefined ? specSettings.totalFontSize : totalRowFontSize;
                    let efTotalWordWrap = specSettings.totalTextWrap !== undefined ? specSettings.totalTextWrap : totalRowWordWrap;
                    let efTotalBg = specSettings.totalBackgroundColor ? specSettings.totalBackgroundColor : backgroundColor;

                    // Apply background CF to transposed total cell if applyTo includes totals
                    const trTotalBgApplyToRaw = dataViewObjects.getValue<any>(
                        valueColumn.source.objects || {},
                        { objectName: "valueBackgroundConditionalFormatting", propertyName: "applyTo" },
                        "valuesOnly"
                    );
                    const trTotalBgApplyTo = typeof trTotalBgApplyToRaw === "string" ? trTotalBgApplyToRaw : (trTotalBgApplyToRaw?.value || "valuesOnly");
                    if (trTotalBgApplyTo === "valuesAndTotals" || trTotalBgApplyTo === "totalsOnly") {
                        if (measureBgCFPairs[measureIndex]?.length > 0 && totalVal !== null && totalVal !== undefined) {
                            const interpolated = interpolateCFColor(Number(totalVal), measureBgCFPairs[measureIndex]);
                            if (interpolated) efTotalBg = interpolated;
                        } else {
                            const staticBg = dataViewObjects.getFillColor(valueColumn.source.objects || {}, { objectName: "valueBackgroundConditionalFormatting", propertyName: "backgroundColor" });
                            if (staticBg) efTotalBg = staticBg;
                        }
                    }

                    let efTotalColor = specSettings.totalTextColor ? specSettings.totalTextColor : textColor;

                    // Apply text CF to transposed total cell if applyTo includes totals
                    const trTotalTxtApplyToRaw = dataViewObjects.getValue<any>(
                        valueColumn.source.objects || {},
                        { objectName: "valueConditionalFormatting", propertyName: "applyTo" },
                        "valuesOnly"
                    );
                    const trTotalTxtApplyTo = typeof trTotalTxtApplyToRaw === "string" ? trTotalTxtApplyToRaw : (trTotalTxtApplyToRaw?.value || "valuesOnly");
                    if (trTotalTxtApplyTo === "valuesAndTotals" || trTotalTxtApplyTo === "totalsOnly") {
                        if (measureTextCFPairs[measureIndex]?.length > 0 && totalVal !== null && totalVal !== undefined) {
                            const interpolated = interpolateCFColor(Number(totalVal), measureTextCFPairs[measureIndex]);
                            if (interpolated) efTotalColor = interpolated;
                        } else {
                            const staticTxt = dataViewObjects.getFillColor(valueColumn.source.objects || {}, { objectName: "valueConditionalFormatting", propertyName: "textColor" });
                            if (staticTxt) efTotalColor = staticTxt;
                        }
                    }

                    let efTotalAlign = specSettings.totalAlignment ? specSettings.totalAlignment : "right";
                    applyRowSquash(totalCell, rowHeight, efTotalFontSize, efTotalWordWrap);
                    totalCell.style.fontWeight = efTotalBold ? "bold" : "normal";
                    totalCell.style.fontFamily = efTotalFontFamily;
                    totalCell.style.fontStyle = efTotalItalic ? "italic" : "normal";
                    totalCell.style.textDecoration = efTotalUnderline ? "underline" : "none";
                    totalCell.style.borderRight = `1px solid ${gridBorderColor}`;
                    totalCell.style.backgroundColor = efTotalBg;
                    totalCell.style.color = efTotalColor;
                    totalCell.style.textAlign = efTotalAlign;

                    if (specSettings.totalHorizontalGrid !== undefined) {
                        if (specSettings.totalHorizontalGrid) {
                            totalCell.style.borderBottom = horizBorderValueOn;
                        } else {
                            totalCell.style.borderBottom = 'hidden';
                        }
                    }
                    totalCell.style.overflow = "hidden";
                    totalCell.style.textOverflow = "ellipsis";
                    totalCell.style.whiteSpace = efTotalWordWrap ? "normal" : "nowrap";
                    if (efTotalWordWrap) {
                        totalCell.style.wordBreak = "break-word";
                    }

                    // Tooltip for transposed total cell
                    const trTotalTooltipItems: VisualTooltipDataItem[] = [{
                        displayName: valueColumn.source.displayName || "Total",
                        value: totalCell.textContent || "-"
                    }];
                    this.addTooltip(totalCell, trTotalTooltipItems);
                }
            });

            // Add column totals rows in transposed layout — one row per enabled base measure
            if (showTotalColumn) {
                let isFirstColTotal = true;

                // When no column grouping, add a "Total" section header row before column total rows
                if (!hasColumnGrouping || columnLeaves.length === 0) {
                    let totalSectionRow = this.table.insertRow();
                    totalSectionRow.className = 'table-total-row';
                    totalSectionRow.style.borderTop = horizBorder2xValue;
                    totalSectionRow.style.borderBottom = horizBorderValue;
                    totalSectionRow.style.height = `${valueRowHeight}px`;
                    let totalSectionCell = totalSectionRow.insertCell();
                    totalSectionCell.textContent = 'Total';
                    // Span: 1 (measure) + rowCount (data) + (showTotalRow ? 1 : 0)
                    totalSectionCell.colSpan = 1 + rowCount + (showTotalRow ? 1 : 0);
                    totalSectionCell.className = 'table-total-label-cell';
                    totalSectionCell.style.fontWeight = "bold";
                    totalSectionCell.style.fontFamily = cellFontFamily;
                    totalSectionCell.style.color = textColor;
                    totalSectionCell.style.backgroundColor = backgroundColor;
                    totalSectionCell.style.borderRight = vertBorderValue;
                    applyRowSquash(totalSectionCell, valueRowHeight, cellFontSize, valueWordWrap);
                    totalSectionCell.style.overflow = "hidden";
                }

                for (let mIdx = 0; mIdx < M; mIdx++) {
                    if (!baseMeasureColTotalIncluded[mIdx]) continue;

                    let colTotalRow = this.table.insertRow();
                    colTotalRow.className = 'table-total-row';
                    colTotalRow.style.borderTop = isFirstColTotal ? horizBorder2xValue : horizBorderValue;
                    colTotalRow.style.borderBottom = horizBorder2xValue;
                    colTotalRow.style.height = `${valueRowHeight}px`;

                    // Column group spacer cells when column grouping is active — one per level
                    if (hasColumnGrouping && columnLeaves.length > 0) {
                        for (let lvl = 0; lvl < columnLevelNames.length; lvl++) {
                            let colGroupSpacer = colTotalRow.insertCell();
                            colGroupSpacer.className = 'table-total-label-cell';
                            colGroupSpacer.style.width = `${categoryColumnWidth}px`;
                            colGroupSpacer.style.minWidth = `${categoryColumnWidth}px`;
                            colGroupSpacer.style.maxWidth = `${categoryColumnWidth}px`;
                            applyRowSquash(colGroupSpacer, valueRowHeight, cellFontSize, valueWordWrap);
                            colGroupSpacer.style.borderRight = vertBorderValue;
                            colGroupSpacer.style.backgroundColor = backgroundColor;
                            colGroupSpacer.textContent = (isFirstColTotal && lvl === 0) ? "Total" : "";
                        }
                    }

                    // Label cell — use Column Totals formatting
                    let colTotalLabel = colTotalRow.insertCell();
                    colTotalLabel.textContent = baseMeasureHeaders[mIdx];
                    colTotalLabel.className = 'table-total-label-cell';
                    colTotalLabel.style.width = `${categoryColumnWidth}px`;
                    colTotalLabel.style.minWidth = `${categoryColumnWidth}px`;
                    colTotalLabel.style.maxWidth = `${categoryColumnWidth}px`;
                    applyRowSquash(colTotalLabel, valueRowHeight, colTotalFontSize, colTotalWordWrap);
                    colTotalLabel.style.fontWeight = colTotalBold ? "bold" : "normal";
                    colTotalLabel.style.fontStyle = colTotalItalic ? "italic" : "normal";
                    colTotalLabel.style.textDecoration = colTotalUnderline ? "underline" : "none";
                    colTotalLabel.style.fontFamily = colTotalFontFamily;
                    colTotalLabel.style.borderRight = vertBorderValue;
                    colTotalLabel.style.backgroundColor = backgroundColor;
                    colTotalLabel.style.color = textColor;
                    colTotalLabel.style.overflow = "hidden";
                    colTotalLabel.style.textOverflow = "ellipsis";
                    colTotalLabel.style.whiteSpace = colTotalWordWrap ? "normal" : "nowrap";
                    if (colTotalWordWrap) {
                        colTotalLabel.style.wordBreak = "break-word";
                    }

                    // For each category column, use precomputed column totals for this measure
                    for (let i = 0; i < rowCount; i++) {
                        let cell = colTotalRow.insertCell();
                        cell.style.position = "relative";
                        const colTotalVal = colTotalsPerMeasure[mIdx][i];
                        if (colTotalVal !== null && colTotalVal !== undefined) {
                            // Use dynamic format string from semantic model
                            let ctDynamicFormat: string | undefined;
                            if (hasColumnGrouping && columnSubtotalValueKeys.length > mIdx && storedFlatRows) {
                                ctDynamicFormat = storedFlatRows[i]?.rawValues?.[columnSubtotalValueKeys[mIdx]]?.objects?.general?.formatString;
                            }
                            if (!ctDynamicFormat && values[mIdx]?.objects) {
                                ctDynamicFormat = values[mIdx].objects[i]?.general?.formatString;
                            }
                            const ctFormat = ctDynamicFormat || baseMeasureFormats[mIdx] || "";
                            const ctDisplayUnits = baseMeasureSettings[mIdx].displayUnits;
                            const ctDecimalPlaces = baseMeasureSettings[mIdx].decimalPlaces;
                            const ctFormattedValue = formatValue(colTotalVal, ctFormat, ctDisplayUnits, ctDecimalPlaces);

                            // Check if data bars should be rendered on column total cells in transposed mode
                            const ctObjects = baseValues[mIdx].source.objects || {};
                            const ctShowDataBars = dataViewObjects.getValue<boolean>(ctObjects, { objectName: "dataBarsFormatting", propertyName: "showDataBars" }, false);
                            const ctShowOnColumnTotals = dataViewObjects.getValue<boolean>(ctObjects, { objectName: "dataBarsFormatting", propertyName: "showOnColumnTotals" }, true);

                            if (ctShowDataBars && ctShowOnColumnTotals) {
                                let ctDataBarColor = dataViewObjects.getFillColor(ctObjects, { objectName: "dataBarsConditionalFormatting", propertyName: "dataBarColor" }, "#31b6fd");

                                // Apply data bar CF applyTo for column total cells in transposed mode
                                const ctDbCFApplyToRaw = dataViewObjects.getValue<any>(ctObjects, { objectName: "dataBarsConditionalFormatting", propertyName: "applyTo" }, "valuesOnly");
                                const ctDbCFApplyTo = typeof ctDbCFApplyToRaw === "string" ? ctDbCFApplyToRaw : (ctDbCFApplyToRaw?.value || "valuesOnly");
                                if (ctDbCFApplyTo === "valuesOnly") {
                                    ctDataBarColor = "#31b6fd";
                                } else if (ctDbCFApplyTo === "valuesAndTotals" || ctDbCFApplyTo === "totalsOnly") {
                                    if (measureDbCFPairs[mIdx]?.length > 0 && colTotalVal !== null && colTotalVal !== undefined) {
                                        const interpolated = interpolateCFColor(Number(colTotalVal), measureDbCFPairs[mIdx]);
                                        if (interpolated) ctDataBarColor = interpolated;
                                    }
                                }

                                const ctMatchColor = dataViewObjects.getValue<boolean>(ctObjects, { objectName: "dataBarsFormatting", propertyName: "matchDataBarColor" }, true);
                                const ctShowZeroLine = dataViewObjects.getValue<boolean>(ctObjects, { objectName: "dataBarsFormatting", propertyName: "showZeroLine" }, false);
                                const ctZeroLineColor = dataViewObjects.getFillColor(ctObjects, { objectName: "dataBarsFormatting", propertyName: "zeroLineColor" }, "#000000");
                                const ctZeroLineTransparency = dataViewObjects.getValue<number>(ctObjects, { objectName: "dataBarsFormatting", propertyName: "zeroLineTransparency" }, 0);
                                const ctDbHeight = dataViewObjects.getValue<number>(ctObjects, { objectName: "dataBarsFormatting", propertyName: "dataBarHeight" }, 80);
                                const ctDbTransparency = dataViewObjects.getValue<number>(ctObjects, { objectName: "dataBarsFormatting", propertyName: "transparency" }, 20);
                                const ctBorderOn = dataViewObjects.getValue<boolean>(ctObjects, { objectName: "dataBarsFormatting", propertyName: "borderOn" }, true);
                                const ctBorderThickness = dataViewObjects.getValue<number>(ctObjects, { objectName: "dataBarsFormatting", propertyName: "borderThickness" }, 1);
                                const ctBorderColor = dataViewObjects.getFillColor(ctObjects, { objectName: "dataBarsFormatting", propertyName: "borderColor" }, "#000000");
                                const ctAxisTypeRaw = dataViewObjects.getValue<any>(ctObjects, { objectName: "dataBarsFormatting", propertyName: "axisType" }, "Amount");
                                const ctAxisType = typeof ctAxisTypeRaw === "string" ? ctAxisTypeRaw : (ctAxisTypeRaw.value || "Amount");
                                const ctMinValueObj = dataViewObjects.getValue<number>(ctObjects, { objectName: "dataBarsFormatting", propertyName: "minValue" }, null);
                                const ctMaxValueObj = dataViewObjects.getValue<number>(ctObjects, { objectName: "dataBarsFormatting", propertyName: "maxValue" }, null);
                                const ctLabelsOutside = dataViewObjects.getValue<boolean>(ctObjects, { objectName: "dataBarsFormatting", propertyName: "labelsOutside" }, false);
                                const ctVerticalDataBars = dataViewObjects.getValue<boolean>(ctObjects, { objectName: "dataBarsFormatting", propertyName: "verticalDataBars" }, false);

                                let numValue = Number(colTotalVal);
                                let min_raw = measureMins[mIdx];
                                let max_raw = measureMaxs[mIdx];
                                let min = min_raw;
                                let max = max_raw;
                                let domainRange = max_raw - min_raw;
                                if (domainRange <= 0) domainRange = 1;
                                if (ctMinValueObj !== null && ctMinValueObj !== undefined) {
                                    min = ctAxisType === "Percentage" ? min_raw - domainRange * (ctMinValueObj / 100) : ctMinValueObj;
                                }
                                if (ctMaxValueObj !== null && ctMaxValueObj !== undefined) {
                                    max = ctAxisType === "Percentage" ? max_raw + domainRange * (ctMaxValueObj / 100) : ctMaxValueObj;
                                }
                                let range = max - min;
                                if (range <= 0) range = 1;

                                let clampedValue = Math.max(min, Math.min(max, numValue));
                                let zeroPoint = Math.max(min, Math.min(max, 0));
                                let leftMarginPct = 0;
                                let rightMarginPct = 0;
                                if (ctLabelsOutside && !ctVerticalDataBars) {
                                    const dbFont = `${cellFontSize}px ${cellFontFamily}`;
                                    const dbCellW = valueColumnWidths[0] || colTotalColumnWidths[mIdx];
                                    if (min < 0) leftMarginPct = computeLabelMarginPct(formatValue(min, ctFormat, ctDisplayUnits, ctDecimalPlaces), dbCellW, dbFont);
                                    if (max > 0) rightMarginPct = computeLabelMarginPct(formatValue(max, ctFormat, ctDisplayUnits, ctDecimalPlaces), dbCellW, dbFont);
                                }
                                let scaleMultiplier = (100 - leftMarginPct - rightMarginPct) / 100;
                                let widthPct = 0, leftPct = 0;
                                if (clampedValue >= zeroPoint) {
                                    widthPct = ((clampedValue - zeroPoint) / range) * 100 * scaleMultiplier;
                                    leftPct = leftMarginPct + ((zeroPoint - min) / range) * 100 * scaleMultiplier;
                                } else {
                                    widthPct = ((zeroPoint - clampedValue) / range) * 100 * scaleMultiplier;
                                    leftPct = leftMarginPct + ((clampedValue - min) / range) * 100 * scaleMultiplier;
                                }

                                let dataBar = document.createElement("div");
                                dataBar.style.position = "absolute";
                                dataBar.style.backgroundColor = applyTransparency(ctDataBarColor, ctDbTransparency);
                                dataBar.style.zIndex = "1";
                                if (ctVerticalDataBars) {
                                    const leftCenterPct = (100 - ctDbHeight) / 2;
                                    dataBar.style.left = `${leftCenterPct}%`;
                                    dataBar.style.width = `${ctDbHeight}%`;
                                    dataBar.style.bottom = `${leftPct}%`;
                                    dataBar.style.height = `${widthPct}%`;
                                } else {
                                    dataBar.style.top = `${(100 - ctDbHeight) / 2}%`;
                                    dataBar.style.height = `${ctDbHeight}%`;
                                    dataBar.style.left = `${leftPct}%`;
                                    dataBar.style.width = `${widthPct}%`;
                                }
                                if (ctBorderOn) {
                                    let finalBorderColor = ctMatchColor ? ctDataBarColor : ctBorderColor;
                                    dataBar.style.border = `${ctBorderThickness}px solid ${finalBorderColor}`;
                                    dataBar.style.boxSizing = "border-box";
                                }
                                cell.appendChild(dataBar);

                                if (ctShowZeroLine) {
                                    let zeroLine = document.createElement("div");
                                    zeroLine.style.position = "absolute";
                                    let zPosPct = ((zeroPoint - min) / range) * 100 * scaleMultiplier + leftMarginPct;
                                    if (ctVerticalDataBars) {
                                        zeroLine.style.left = "0";
                                        zeroLine.style.right = "0";
                                        zeroLine.style.height = "2px";
                                        zeroLine.style.bottom = `calc(${zPosPct}% - 1px)`;
                                    } else {
                                        zeroLine.style.top = "0";
                                        zeroLine.style.bottom = "0";
                                        zeroLine.style.width = "2px";
                                        zeroLine.style.left = `calc(${zPosPct}% - 1px)`;
                                    }
                                    zeroLine.style.backgroundColor = applyTransparency(ctZeroLineColor, ctZeroLineTransparency);
                                    zeroLine.style.zIndex = "1";
                                    cell.appendChild(zeroLine);
                                }

                                let textDiv = document.createElement("div");
                                textDiv.style.zIndex = "2";
                                textDiv.textContent = ctFormattedValue;
                                if (ctLabelsOutside) {
                                    textDiv.style.position = "absolute";
                                    textDiv.style.whiteSpace = "nowrap";
                                    if (ctVerticalDataBars) {
                                        textDiv.style.left = "50%";
                                        textDiv.style.transform = "translateX(-50%)";
                                        if (numValue >= 0) {
                                            textDiv.style.bottom = `calc(${leftPct + widthPct}% + 4px)`;
                                        } else {
                                            textDiv.style.top = `calc(${100 - leftPct}% + 4px)`;
                                        }
                                    } else {
                                        textDiv.style.top = "50%";
                                        textDiv.style.transform = "translateY(-50%)";
                                        if (numValue >= 0) {
                                            textDiv.style.left = `calc(${leftPct + widthPct}% + 4px)`;
                                        } else {
                                            textDiv.style.right = `calc(${100 - leftPct}% + 4px)`;
                                        }
                                    }
                                } else {
                                    textDiv.style.position = "relative";
                                }
                                cell.appendChild(textDiv);
                            } else {
                                cell.textContent = ctFormattedValue;
                            }
                        } else {
                            cell.textContent = "";
                        }
                        cell.className = 'table-data-cell';
                        cell.style.width = `${valueColumnWidths[0] || colTotalColumnWidths[mIdx]}px`;
                        cell.style.minWidth = `${valueColumnWidths[0] || colTotalColumnWidths[mIdx]}px`;
                        cell.style.maxWidth = `${valueColumnWidths[0] || colTotalColumnWidths[mIdx]}px`;

                        // Use Column Totals formatting
                        let specSettings = baseMeasureSettings[mIdx];
                        let effectiveAlign = specSettings.alignment ? specSettings.alignment : "right";

                        applyRowSquash(cell, valueRowHeight, colTotalFontSize, colTotalWordWrap);
                        cell.style.fontWeight = colTotalBold ? "bold" : "normal";
                        cell.style.fontStyle = colTotalItalic ? "italic" : "normal";
                        cell.style.textDecoration = colTotalUnderline ? "underline" : "none";
                        cell.style.fontFamily = colTotalFontFamily;
                        cell.style.borderRight = vertBorderValue;

                        // Apply background CF to transposed column total cells if applyTo includes totals
                        let trCtBg = backgroundColor;
                        const trCtBgApplyToRaw = dataViewObjects.getValue<any>(
                            baseValues[mIdx].source.objects || {},
                            { objectName: "valueBackgroundConditionalFormatting", propertyName: "applyTo" },
                            "valuesOnly"
                        );
                        const trCtBgApplyTo = typeof trCtBgApplyToRaw === "string" ? trCtBgApplyToRaw : (trCtBgApplyToRaw?.value || "valuesOnly");
                        if (trCtBgApplyTo === "valuesAndTotals" || trCtBgApplyTo === "totalsOnly") {
                            if (measureBgCFPairs[mIdx]?.length > 0) {
                                const ctVal = colTotalsPerMeasure[mIdx][i];
                                if (ctVal !== null && ctVal !== undefined) {
                                    const interpolated = interpolateCFColor(Number(ctVal), measureBgCFPairs[mIdx]);
                                    if (interpolated) trCtBg = interpolated;
                                }
                            } else {
                                const staticBg = dataViewObjects.getFillColor(baseValues[mIdx].source.objects || {}, { objectName: "valueBackgroundConditionalFormatting", propertyName: "backgroundColor" });
                                if (staticBg) trCtBg = staticBg;
                            }
                        }

                        cell.style.backgroundColor = trCtBg;

                        // Apply text CF to transposed column total cells if applyTo includes totals
                        let trCtTextColor = textColor;
                        const trCtTxtApplyToRaw = dataViewObjects.getValue<any>(
                            baseValues[mIdx].source.objects || {},
                            { objectName: "valueConditionalFormatting", propertyName: "applyTo" },
                            "valuesOnly"
                        );
                        const trCtTxtApplyTo = typeof trCtTxtApplyToRaw === "string" ? trCtTxtApplyToRaw : (trCtTxtApplyToRaw?.value || "valuesOnly");
                        if (trCtTxtApplyTo === "valuesAndTotals" || trCtTxtApplyTo === "totalsOnly") {
                            if (measureTextCFPairs[mIdx]?.length > 0) {
                                const ctVal = colTotalsPerMeasure[mIdx][i];
                                if (ctVal !== null && ctVal !== undefined) {
                                    const interpolated = interpolateCFColor(Number(ctVal), measureTextCFPairs[mIdx]);
                                    if (interpolated) trCtTextColor = interpolated;
                                }
                            } else {
                                const staticTxt = dataViewObjects.getFillColor(baseValues[mIdx].source.objects || {}, { objectName: "valueConditionalFormatting", propertyName: "textColor" });
                                if (staticTxt) trCtTextColor = staticTxt;
                            }
                        }

                        cell.style.color = trCtTextColor;
                        cell.style.overflow = "hidden";
                        cell.style.textOverflow = "ellipsis";
                        cell.style.whiteSpace = colTotalWordWrap ? "normal" : "nowrap";
                        cell.style.textAlign = effectiveAlign;
                        if (colTotalWordWrap) {
                            cell.style.wordBreak = "break-word";
                        }

                        // Tooltip for transposed column total cell
                        const trCtTooltipItems: VisualTooltipDataItem[] = [];
                        if (hasCategories) {
                            const colPaths = categories.paths ? categories.paths[i] : [categories.values[i]];
                            if (colPaths) {
                                colPaths.forEach((seg: any, lvlIdx: number) => {
                                    if (seg !== "Total" && seg !== "" && seg !== undefined) {
                                        const catName = categories.sources[lvlIdx]?.displayName || "Category";
                                        trCtTooltipItems.push({ displayName: catName, value: String(seg) });
                                    }
                                });
                            }
                        }
                        trCtTooltipItems.push({
                            displayName: (baseValues[mIdx].source.displayName || "Total") + " (Total)",
                            value: cell.textContent || "-"
                        });
                        this.addTooltip(cell, trCtTooltipItems);
                    }

                    // Grand total cell (intersection) if row totals also shown
                    if (showTotalRow) {
                        let grandCell = colTotalRow.insertCell();
                        const grandVal = colTotalsGrandPerMeasure[mIdx];
                        if (grandVal !== null && grandVal !== undefined) {
                            // Use dynamic format string from semantic model
                            let gtDynamicFormat: string | undefined;
                            if (hasColumnGrouping && columnSubtotalValueKeys.length > mIdx && storedFlatRows && storedFlatRows.length > 0) {
                                gtDynamicFormat = storedFlatRows[0]?.rawValues?.[columnSubtotalValueKeys[mIdx]]?.objects?.general?.formatString;
                            }
                            if (!gtDynamicFormat && values[mIdx]?.objects && values[mIdx].objects.length > 0) {
                                gtDynamicFormat = values[mIdx].objects[0]?.general?.formatString;
                            }
                            const ctFormat = gtDynamicFormat || baseMeasureFormats[mIdx] || "";
                            const ctDisplayUnits = baseMeasureSettings[mIdx].displayUnits;
                            const ctDecimalPlaces = baseMeasureSettings[mIdx].decimalPlaces;
                            grandCell.textContent = formatValue(grandVal, ctFormat, ctDisplayUnits, ctDecimalPlaces);
                        } else {
                            grandCell.textContent = "";
                        }
                        grandCell.className = 'table-total-cell';
                        grandCell.style.width = `${colTotalColumnWidths[mIdx]}px`;
                        grandCell.style.minWidth = `${colTotalColumnWidths[mIdx]}px`;
                        grandCell.style.maxWidth = `${colTotalColumnWidths[mIdx]}px`;

                        // Use Row Totals formatting for the intersection
                        let specSettings = baseMeasureSettings[mIdx];
                        let efTotalBold = specSettings.totalBold !== undefined ? specSettings.totalBold : totalRowBold;
                        let efTotalItalic = specSettings.totalItalic !== undefined ? specSettings.totalItalic : totalRowItalic;
                        let efTotalUnderline = specSettings.totalUnderline !== undefined ? specSettings.totalUnderline : totalRowUnderline;
                        let efTotalFontFamily = specSettings.totalFontFamily !== undefined ? specSettings.totalFontFamily : totalRowFontFamily;
                        let efTotalFontSize = specSettings.totalFontSize !== undefined ? specSettings.totalFontSize : totalRowFontSize;
                        let efTotalWordWrap = specSettings.totalTextWrap !== undefined ? specSettings.totalTextWrap : totalRowWordWrap;
                        let efTotalBg = specSettings.totalBackgroundColor ? specSettings.totalBackgroundColor : backgroundColor;

                        // Apply background CF to transposed grand total cell if applyTo includes totals
                        const trGrandBgApplyToRaw = dataViewObjects.getValue<any>(
                            baseValues[mIdx].source.objects || {},
                            { objectName: "valueBackgroundConditionalFormatting", propertyName: "applyTo" },
                            "valuesOnly"
                        );
                        const trGrandBgApplyTo = typeof trGrandBgApplyToRaw === "string" ? trGrandBgApplyToRaw : (trGrandBgApplyToRaw?.value || "valuesOnly");
                        if (trGrandBgApplyTo === "valuesAndTotals" || trGrandBgApplyTo === "totalsOnly") {
                            if (measureBgCFPairs[mIdx]?.length > 0 && grandVal !== null && grandVal !== undefined) {
                                const interpolated = interpolateCFColor(Number(grandVal), measureBgCFPairs[mIdx]);
                                if (interpolated) efTotalBg = interpolated;
                            } else {
                                const staticBg = dataViewObjects.getFillColor(baseValues[mIdx].source.objects || {}, { objectName: "valueBackgroundConditionalFormatting", propertyName: "backgroundColor" });
                                if (staticBg) efTotalBg = staticBg;
                            }
                        }

                        let efTotalColor = specSettings.totalTextColor ? specSettings.totalTextColor : textColor;

                        // Apply text CF to transposed grand total cell if applyTo includes totals
                        const trGrandTxtApplyToRaw = dataViewObjects.getValue<any>(
                            baseValues[mIdx].source.objects || {},
                            { objectName: "valueConditionalFormatting", propertyName: "applyTo" },
                            "valuesOnly"
                        );
                        const trGrandTxtApplyTo = typeof trGrandTxtApplyToRaw === "string" ? trGrandTxtApplyToRaw : (trGrandTxtApplyToRaw?.value || "valuesOnly");
                        if (trGrandTxtApplyTo === "valuesAndTotals" || trGrandTxtApplyTo === "totalsOnly") {
                            if (measureTextCFPairs[mIdx]?.length > 0 && grandVal !== null && grandVal !== undefined) {
                                const interpolated = interpolateCFColor(Number(grandVal), measureTextCFPairs[mIdx]);
                                if (interpolated) efTotalColor = interpolated;
                            } else {
                                const staticTxt = dataViewObjects.getFillColor(baseValues[mIdx].source.objects || {}, { objectName: "valueConditionalFormatting", propertyName: "textColor" });
                                if (staticTxt) efTotalColor = staticTxt;
                            }
                        }

                        let efTotalAlign = specSettings.totalAlignment ? specSettings.totalAlignment : "right";

                        applyRowSquash(grandCell, totalRowHeight, efTotalFontSize, efTotalWordWrap);
                        grandCell.style.fontWeight = efTotalBold ? "bold" : "normal";
                        grandCell.style.fontStyle = efTotalItalic ? "italic" : "normal";
                        grandCell.style.textDecoration = efTotalUnderline ? "underline" : "none";
                        grandCell.style.fontFamily = efTotalFontFamily;
                        grandCell.style.borderRight = vertBorderValue;
                        grandCell.style.backgroundColor = efTotalBg;
                        grandCell.style.color = efTotalColor;
                        grandCell.style.overflow = "hidden";
                        grandCell.style.textOverflow = "ellipsis";
                        grandCell.style.whiteSpace = efTotalWordWrap ? "normal" : "nowrap";
                        grandCell.style.textAlign = efTotalAlign;
                        if (efTotalWordWrap) {
                            grandCell.style.wordBreak = "break-word";
                        }

                        // Tooltip for transposed grand total cell
                        const trGrandTooltipItems: VisualTooltipDataItem[] = [{
                            displayName: (baseValues[mIdx].source.displayName || "Total") + " (Grand Total)",
                            value: grandCell.textContent || "-"
                        }];
                        this.addTooltip(grandCell, trGrandTooltipItems);
                    }
                    isFirstColTotal = false;
                }
            }
        }

        // ── Apply section borders (Border sub-menu) ──
        // These are applied as outer-edge borders for each section of the table.
        const rows = this.table.rows;
        if (rows.length > 0) {
            // Identify header rows and data rows
            const headerRows: HTMLTableRowElement[] = [];
            const dataRows: HTMLTableRowElement[] = [];
            for (let r = 0; r < rows.length; r++) {
                if (rows[r].className.indexOf('table-header-row') >= 0) {
                    headerRows.push(rows[r]);
                } else if (rows[r].className.indexOf('table-data-row') >= 0 || rows[r].className.indexOf('table-total-row') >= 0) {
                    dataRows.push(rows[r]);
                }
            }

            // Helper: apply edge borders to an area of cells
            const applyAreaBorder = (
                areaRows: HTMLTableRowElement[],
                borders: { top: string; bottom: string; left: string; right: string },
                cellFilter?: (cell: HTMLTableCellElement) => boolean
            ) => {
                if (areaRows.length === 0) return;
                for (let r = 0; r < areaRows.length; r++) {
                    const row = areaRows[r];
                    const cells: HTMLTableCellElement[] = [];
                    for (let c = 0; c < row.cells.length; c++) {
                        const cell = row.cells[c];
                        if (!cellFilter || cellFilter(cell)) {
                            cells.push(cell);
                        }
                    }
                    if (cells.length === 0) continue;

                    // Top border: first row of area
                    if (r === 0 && borders.top) {
                        cells.forEach(cell => cell.style.borderTop = borders.top);
                    }
                    // Bottom border: last row of area
                    if (r === areaRows.length - 1 && borders.bottom) {
                        cells.forEach(cell => cell.style.borderBottom = borders.bottom);
                    }
                    // Left border: first cell in each row
                    if (borders.left && cells.length > 0) {
                        cells[0].style.borderLeft = borders.left;
                    }
                    // Right border: last cell in each row
                    if (borders.right && cells.length > 0) {
                        cells[cells.length - 1].style.borderRight = borders.right;
                    }
                }
            };

            // Apply column header borders to header rows
            applyAreaBorder(headerRows, colHeaderBorders);

            // For data rows, split cells into row headers (category) and values
            if (!switchValuesToRows) {
                // Normal layout: category cells are class 'table-category-cell', values are the rest
                applyAreaBorder(dataRows, rowHeaderBorders, (cell) => cell.className.indexOf('table-category-cell') >= 0);
                applyAreaBorder(dataRows, valuesBorders, (cell) => cell.className.indexOf('table-category-cell') < 0);
            } else {
                // Transposed layout: category cells (class 'table-category-cell') are row headers
                applyAreaBorder(dataRows, rowHeaderBorders, (cell) => cell.className.indexOf('table-category-cell') >= 0);
                applyAreaBorder(dataRows, valuesBorders, (cell) => cell.className.indexOf('table-category-cell') < 0);
            }
        }

        // ── Sticky row & column headers ──
        // Transfer row-level borders to cells (border-collapse: separate ignores <tr> borders)
        for (let r = 0; r < this.table.rows.length; r++) {
            const row = this.table.rows[r];
            const rBorderBottom = row.style.borderBottom;
            const rBorderTop = row.style.borderTop;
            if (rBorderBottom || rBorderTop) {
                for (let c = 0; c < row.cells.length; c++) {
                    const cell = row.cells[c];
                    if (rBorderBottom && !cell.style.borderBottom) {
                        cell.style.borderBottom = rBorderBottom;
                    }
                    if (rBorderTop && !cell.style.borderTop) {
                        cell.style.borderTop = rBorderTop;
                    }
                }
            }
        }

        // Move header rows into <thead> so sticky top works in Chromium.
        // <td> in implicit <tbody> ignores position:sticky for vertical axis.
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');
        while (this.table.rows.length > 0) {
            const row = this.table.rows[0];
            if (row.className.indexOf('table-header-row') >= 0) {
                thead.appendChild(row);
            } else {
                tbody.appendChild(row);
            }
        }
        // Remove leftover implicit tbody(s)
        while (this.table.tBodies.length > 0) {
            this.table.tBodies[0].remove();
        }
        if (this.table.tHead) { this.table.tHead.remove(); }
        this.table.appendChild(thead);
        this.table.appendChild(tbody);

        // Create <colgroup> with <col> elements for reliable column-width control
        // (table-layout: fixed uses <col> widths first, bypassing first-row colspan issues)
        const colgroup = document.createElement('colgroup');
        this.colElements = [];
        const lastHdrRow = thead.rows[thead.rows.length - 1];
        let totalTableWidth = 0;
        for (let i = 0; i < lastHdrRow.cells.length; i++) {
            const col = document.createElement('col');
            const w = parseInt(lastHdrRow.cells[i].style.width) || 100;
            col.style.width = `${w}px`;
            colgroup.appendChild(col);
            this.colElements.push(col);
            totalTableWidth += w;
        }
        this.table.insertBefore(colgroup, this.table.firstChild);
        this.table.style.width = `${totalTableWidth}px`;

        // Apply sticky top to all header-row cells (now inside <thead>)
        // Helper: detect if a bg color is missing or transparent
        const isTransparentBg = (bg: string): boolean => {
            if (!bg) return true;
            const v = bg.trim().toLowerCase();
            if (v === '' || v === 'transparent' || v === 'rgba(0, 0, 0, 0)' || v === 'initial' || v === 'inherit') return true;
            // Detect rgba with alpha 0
            const m = v.match(/rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*([\d.]+)\s*\)/);
            if (m && parseFloat(m[1]) === 0) return true;
            return false;
        };
        let cumulativeTop = 0;
        for (let r = 0; r < thead.rows.length; r++) {
            const row = thead.rows[r];
            const rowH = parseInt(row.style.height) || headerRowHeight;
            for (let c = 0; c < row.cells.length; c++) {
                const cell = row.cells[c];
                cell.style.position = 'sticky';
                cell.style.top = `${cumulativeTop}px`;
                cell.style.zIndex = '100';
                // Ensure opaque bg so scrolling content is hidden behind sticky cell
                if (isTransparentBg(cell.style.backgroundColor)) {
                    const fallback = row.style.backgroundColor && !isTransparentBg(row.style.backgroundColor)
                        ? row.style.backgroundColor
                        : (!isTransparentBg(headerBackgroundColor) ? headerBackgroundColor : '#f0f0f0');
                    cell.style.backgroundColor = fallback;
                }
            }
            cumulativeTop += rowH;
        }

        // Apply manual column width overrides and attach resize handles FIRST so sticky leftOffset sees correct widths
        this.applyManualWidths();
        this.attachResizeHandles();

        // Count row-header columns from first data row (handles both transposed and normal layouts)
        this.numRowHeaderCols = 0;
        if (tbody.rows.length > 0) {
            for (let c = 0; c < tbody.rows[0].cells.length; c++) {
                const cls = tbody.rows[0].cells[c].className;
                if (cls.indexOf('table-category-cell') >= 0 || cls.indexOf('table-total-label-cell') >= 0) {
                    this.numRowHeaderCols++;
                } else {
                    break;
                }
            }
        }

        // Apply sticky left to category / total-label cells (row headers)
        const allRows = Array.from(this.table.rows);
        for (let r = 0; r < allRows.length; r++) {
            const row = allRows[r];
            const isHeaderRow = row.className.indexOf('table-header-row') >= 0;
            let leftOffset = 0;
            for (let c = 0; c < row.cells.length; c++) {
                const cell = row.cells[c];
                const isCat = cell.className.indexOf('table-category-cell') >= 0;
                const isTotalLabel = cell.className.indexOf('table-total-label-cell') >= 0;
                if (!isCat && !isTotalLabel) {
                    // In header rows, the first N cells (matching row-header column count) are also row-header corners
                    if (isHeaderRow && c < this.numRowHeaderCols) {
                        cell.style.position = 'sticky';
                        cell.style.left = `${leftOffset}px`;
                        cell.style.zIndex = '200'; // corner: above both axes
                        if (isTransparentBg(cell.style.backgroundColor)) {
                            const fb = !isTransparentBg(row.style.backgroundColor) ? row.style.backgroundColor
                                : (!isTransparentBg(headerBackgroundColor) ? headerBackgroundColor : '#f0f0f0');
                            cell.style.backgroundColor = fb;
                        }
                        leftOffset += parseInt(cell.style.width) || categoryColumnWidth;
                        continue;
                    }
                    break; // done with row-header cells for this row
                }
                cell.style.position = 'sticky';
                cell.style.left = `${leftOffset}px`;
                if (isHeaderRow) {
                    cell.style.zIndex = '200'; // corner cell: sticky top + left
                } else {
                    cell.style.zIndex = '50';
                }
                // Ensure opaque bg so scrolling content is hidden behind sticky cell
                if (isTransparentBg(cell.style.backgroundColor)) {
                    const fb = !isTransparentBg(row.style.backgroundColor) ? row.style.backgroundColor : '#ffffff';
                    cell.style.backgroundColor = fb;
                }
                leftOffset += parseInt(cell.style.width) || categoryColumnWidth;
            }
        }
    }
}









