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

export class Visual implements IVisual {
    private tableContainer: HTMLDivElement;
    private table: HTMLTableElement;
    private formattingSettingsService: FormattingSettingsService;
    private visualSettings: VisualSettings;
    private dataView: DataView;

    constructor(options: VisualConstructorOptions) {
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
        const colTotalTextColor = columnTotalsSettings.textColor.value.value;
        const colTotalBgColor = columnTotalsSettings.backgroundColor.value.value;

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
        const categoryCFSettings = this.visualSettings.categoryConditionalFormatting;
        const defaultCategoryTextColor = categoryCFSettings.textColor.value.value;
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

        const getCategoryTextColor = (rowIndex: number, dataView: DataView): string => {
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
            return defaultCategoryTextColor;
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
                let columnLevelNames: string[] = [];
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
    textColor: string | undefined;
    backgroundColor: string | undefined;
    alternateTextColor: string | undefined;
    alternateBackgroundColor: string | undefined;
    alignment: string | undefined;
    applyToHeader: boolean;
    applyToValues: boolean;
    applyToTotal: boolean;
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
                  applyToHeader: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "applyToHeader" }, true),
                  applyToValues: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "applyToValues" }, true),
                  applyToTotal: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "applyToTotal" }, true),
                  displayUnits: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "displayUnits" }, 0),
                  decimalPlaces: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "decimalPlaces" }, null),
                  fontFamily: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "fontFamily" }, undefined) as string | undefined,
                  fontSize: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "fontSize" }, undefined) as number | undefined,
                  bold: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "bold" }, undefined) as boolean | undefined,
                  italic: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "italic" }, undefined) as boolean | undefined,
                  underline: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "underline" }, undefined) as boolean | undefined,
                  textWrap: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "textWrap" }, undefined) as boolean | undefined,
                  horizontalGrid: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "horizontalGrid" }, true),
                  transparency: dataViewObjects.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "transparency" }, 0)
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

              const defaultMeasureBgColor = dataViewObjects.getFillColor(
                  valueColumn.source.objects || {},
                  { objectName: "valueBackgroundConditionalFormatting", propertyName: "backgroundColor" },
                  backgroundColor
              );
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
          const persistedSeries = dataViewObjects.getValue<string>(
              this.dataView.metadata.objects || {},
              { objectName: "specificColumn", propertyName: "series" },
              undefined
          );
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

          // Read current per-measure values for the selected column
          const scTextColor = dataViewObjects.getFillColor(selectedObjects, { objectName: "specificColumn", propertyName: "textColor" }, undefined);
          const scBgColor = dataViewObjects.getFillColor(selectedObjects, { objectName: "specificColumn", propertyName: "backgroundColor" }, undefined);
          const scAltTextColor = dataViewObjects.getFillColor(selectedObjects, { objectName: "specificColumn", propertyName: "alternateTextColor" }, undefined);
          const scAltBgColor = dataViewObjects.getFillColor(selectedObjects, { objectName: "specificColumn", propertyName: "alternateBackgroundColor" }, undefined);
          const scApplyToHeader = dataViewObjects.getValue<boolean>(selectedObjects, { objectName: "specificColumn", propertyName: "applyToHeader" }, true);
          const scApplyToValues = dataViewObjects.getValue<boolean>(selectedObjects, { objectName: "specificColumn", propertyName: "applyToValues" }, true);
          const scApplyToTotal = dataViewObjects.getValue<boolean>(selectedObjects, { objectName: "specificColumn", propertyName: "applyToTotal" }, true);
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

          // Populate columnHeaders nameSeries dropdown and rebuild names group with per-measure selector
          columnHeadersSettings.nameSeries.items = measureHeaders.map(name => ({ value: name, displayName: name }));
          
          const persistedNameSeries = dataViewObjects.getValue<string>(
              this.dataView.metadata.objects || {},
              { objectName: "columnHeaders", propertyName: "nameSeries" },
              undefined
          );
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

          // Rebuild the applySettingsGroup slices with selectors
          specificColumnSettings.applySettingsGroup.slices = [
              specificColumnSettings.series,
              new formattingSettings.ToggleSwitch({ name: "applyToHeader", displayName: "Apply to header", value: scApplyToHeader, visible: true, selector }),
              new formattingSettings.ToggleSwitch({ name: "applyToTotal", displayName: "Apply to total", value: scApplyToTotal, visible: true, selector }),
              new formattingSettings.ToggleSwitch({ name: "applyToValues", displayName: "Apply to values", value: scApplyToValues, visible: true, selector })
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

          dataBarsSettings.selectSeriesGroup.slices = [
              dataBarsSettings.series
          ];

let dataBarsSlices: formattingSettings.Slice[] = [
                new formattingSettings.ToggleSwitch({ name: "showDataBars", displayName: "Show Data Bars", value: dbShowDataBars, visible: true, selector: dataBarsSelector }),
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

        // Determine column total column width
        const colTotalColumnWidth = columnWidthSettings.valueColumnWidth.value;

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
                        emptyColTotal.textContent = '';
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
                let effectiveBg = specSettings.applyToHeader && specSettings.backgroundColor ? specSettings.backgroundColor : headerBgColor;
                let efBold = specSettings.applyToHeader && specSettings.bold !== undefined ? specSettings.bold : headerBold;
                let efItalic = specSettings.applyToHeader && specSettings.italic !== undefined ? specSettings.italic : headerItalic;
                let efUnderline = specSettings.applyToHeader && specSettings.underline !== undefined ? specSettings.underline : headerUnderline;
                let efFontFamily = specSettings.applyToHeader && specSettings.fontFamily !== undefined ? specSettings.fontFamily : headerFontFamily;
                let efFontSize = specSettings.applyToHeader && specSettings.fontSize !== undefined ? specSettings.fontSize : headerFontSize;
                let efWordWrap = specSettings.applyToHeader && specSettings.textWrap !== undefined ? specSettings.textWrap : headerWordWrap;
                let effectiveColor = specSettings.applyToHeader && specSettings.textColor ? specSettings.textColor : headerTextColor;
                if (specSettings.applyToHeader && specSettings.transparency > 0) {
                    effectiveColor = applyTransparency(effectiveColor, specSettings.transparency);
                }
                let effectiveAlign = specSettings.applyToHeader && specSettings.alignment ? specSettings.alignment : headerAlignment;
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

                if (specSettings.applyToHeader && specSettings.horizontalGrid !== undefined) {
                    if (specSettings.horizontalGrid) {
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
                    colTotalHeader.textContent = baseMeasureHeaders[mIdx] + " Total";
                    colTotalHeader.className = 'table-header-cell';
                    colTotalHeader.style.width = `${colTotalColumnWidth}px`;
                    colTotalHeader.style.minWidth = `${colTotalColumnWidth}px`;
                    colTotalHeader.style.maxWidth = `${colTotalColumnWidth}px`;
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
                        categoryCell.style.color = isTotal ? (isEvenRow ? textColor : alternateTextColor) : getCategoryTextColor(i, dataView);
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
                    if (valueColumn.objects && valueColumn.objects[i]) {
                        const cfColor = dataViewObjects.getFillColor(
                            valueColumn.objects[i],
                            { objectName: "valueConditionalFormatting", propertyName: "textColor" }
                        );
                        if (cfColor) {
                            cellTextColor = cfColor;
                        }
                    }

                    let cellBackgroundColor = defaultMeasureBgColor;
                    if (valueColumn.objects && valueColumn.objects[i]) {
                        const cfBgColor = dataViewObjects.getFillColor(
                            valueColumn.objects[i],
                            { objectName: "valueBackgroundConditionalFormatting", propertyName: "backgroundColor" }
                        );
                        if (cfBgColor) {
                            cellBackgroundColor = cfBgColor;
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
                        
                        if (showDataBars) {
                            let cellDataBarColor = dataViewObjects.getFillColor(objects, { objectName: "dataBarsConditionalFormatting", propertyName: "dataBarColor" }, "#31b6fd");
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
                            
                            // Check for conditional formatting on data bar color (using simple card objectName)
                            if (valueColumn.objects && valueColumn.objects[i]) {
                                const cfDataBarColor = dataViewObjects.getFillColor(
                                    valueColumn.objects[i],
                                    { objectName: "dataBarsConditionalFormatting", propertyName: "dataBarColor" }
                                );
                                if (cfDataBarColor) {
                                    cellDataBarColor = cfDataBarColor;
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

                            let leftMarginPct = (labelsOutside && min < 0) ? 25 : 0;
                              let rightMarginPct = (labelsOutside && max > 0) ? 25 : 0;
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
                            const topPct = (100 - dataBarHeight) / 2;
                            dataBar.style.top = `${topPct}%`;
                            dataBar.style.height = `${dataBarHeight}%`;
                            dataBar.style.left = `${leftPct}%`;
                            dataBar.style.width = `${widthPct}%`;
                            dataBar.style.backgroundColor = applyTransparency(cellDataBarColor, transparency);

                            dataBar.style.zIndex = "1";

                            if (borderOn) {
                                let finalBorderColor = matchDataBarColor ? cellDataBarColor : borderColor;
                                dataBar.style.border = `${borderThickness}px solid ${finalBorderColor}`;
                                dataBar.style.boxSizing = "border-box";
                            }

                            cell.appendChild(dataBar);

                            if (showZeroLine) {
                                let zeroLine = document.createElement("div");
                                zeroLine.style.position = "absolute";
                                zeroLine.style.top = "0";
                                zeroLine.style.bottom = "0";
                                zeroLine.style.width = "2px";
                                let zLeftPct = ((zeroPoint - min) / range) * 100 * scaleMultiplier + leftMarginPct;
                                zeroLine.style.left = `calc(${zLeftPct}% - 1px)`;
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

                                let markerLeftPct = numValue >= 0 ? leftPct + widthPct : leftPct;
                                marker.style.left = `calc(${markerLeftPct}% - ${markerSize / 2}px)`;
                                marker.style.top = `calc(50% - ${markerSize / 2}px)`;
                                marker.style.width = `${markerSize}px`;
                                marker.style.height = `${markerSize}px`;

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
                                    marker.style.left = `calc(${markerLeftPct}% - 1px)`;
                                } else if (markerShape === "semiCircle") {
                                    marker.style.backgroundColor = cellMarkerColor;
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

                                cell.appendChild(marker);
                            }

                            let textDiv = document.createElement("div");
                            textDiv.style.zIndex = "2";
                            textDiv.textContent = formattedValue;
                            
                            if (labelsOutside) {
                                textDiv.style.position = "absolute";
                                textDiv.style.top = "50%";
                                textDiv.style.transform = "translateY(-50%)";
                                textDiv.style.whiteSpace = "nowrap";
                                if (numValue >= 0) {
                                    textDiv.style.left = `calc(${leftPct + widthPct}% + 4px)`;
                                } else {
                                    textDiv.style.right = `calc(${100 - leftPct}% + 4px)`;
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
                    applyRowSquash(cell, rowHeight, cellFontSize, valueWordWrap);
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

                    let effectiveBg = specSettings.applyToValues ? specRowBgColor : cellBackgroundColor;
                    let effectiveColor = specSettings.applyToValues ? specCellTextColor : cellTextColor;
                    if (specSettings.applyToValues && specSettings.transparency > 0) {
                        effectiveColor = applyTransparency(effectiveColor, specSettings.transparency);
                    }

                    let efBold = specSettings.applyToValues && specSettings.bold !== undefined ? specSettings.bold : valueBold;
                    let efItalic = specSettings.applyToValues && specSettings.italic !== undefined ? specSettings.italic : cellItalic;
                    let efUnderline = specSettings.applyToValues && specSettings.underline !== undefined ? specSettings.underline : cellUnderline;
                    let efFontFamily = specSettings.applyToValues && specSettings.fontFamily !== undefined ? specSettings.fontFamily : cellFontFamily;
                    let efFontSize = specSettings.applyToValues && specSettings.fontSize !== undefined ? specSettings.fontSize : cellFontSize;
                    let efWordWrap = specSettings.applyToValues && specSettings.textWrap !== undefined ? specSettings.textWrap : valueWordWrap;
                    let effectiveAlign = specSettings.applyToValues && specSettings.alignment ? specSettings.alignment : "right";

                    if (specSettings.applyToValues && specSettings.horizontalGrid !== undefined) {
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
                });

                // Add column total cells for this row — one per enabled base measure
                if (showTotalColumn) {
                    for (let mIdx = 0; mIdx < M; mIdx++) {
                        if (!baseMeasureColTotalIncluded[mIdx]) continue;
                        let colTotalCell = row.insertCell();
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
                            colTotalCell.textContent = formatValue(colTotalVal, ctFormat, ctDisplayUnits, ctDecimalPlaces);
                        } else {
                            colTotalCell.textContent = '-';
                        }
                        colTotalCell.className = 'table-data-cell';
                        colTotalCell.style.width = `${colTotalColumnWidth}px`;
                        colTotalCell.style.minWidth = `${colTotalColumnWidth}px`;
                        colTotalCell.style.maxWidth = `${colTotalColumnWidth}px`;

                        // Inherit formatting from Values menu, with per-measure specificColumn overrides
                        let specSettings = baseMeasureSettings[mIdx];
                        let cellBackgroundColor = isEvenRow ? backgroundColor : alternateBackgroundColor;
                        let cellTextColor = isEvenRow ? textColor : alternateTextColor;
                        let specRowBgColor = isEvenRow ?
                            (specSettings.backgroundColor !== undefined ? specSettings.backgroundColor : cellBackgroundColor) :
                            (specSettings.alternateBackgroundColor !== undefined ? specSettings.alternateBackgroundColor : cellBackgroundColor);
                        let specCellTextColor = isEvenRow ?
                            (specSettings.textColor !== undefined ? specSettings.textColor : cellTextColor) :
                            (specSettings.alternateTextColor !== undefined ? specSettings.alternateTextColor : cellTextColor);

                        let effectiveBg = specSettings.applyToValues ? specRowBgColor : cellBackgroundColor;
                        let effectiveColor = specSettings.applyToValues ? specCellTextColor : cellTextColor;
                        if (specSettings.applyToValues && specSettings.transparency > 0) {
                            effectiveColor = applyTransparency(effectiveColor, specSettings.transparency);
                        }

                        let efBold = specSettings.applyToValues && specSettings.bold !== undefined ? specSettings.bold : valueBold;
                        let efItalic = specSettings.applyToValues && specSettings.italic !== undefined ? specSettings.italic : cellItalic;
                        let efUnderline = specSettings.applyToValues && specSettings.underline !== undefined ? specSettings.underline : cellUnderline;
                        let efFontFamily = specSettings.applyToValues && specSettings.fontFamily !== undefined ? specSettings.fontFamily : cellFontFamily;
                        let efFontSize = specSettings.applyToValues && specSettings.fontSize !== undefined ? specSettings.fontSize : cellFontSize;
                        let efWordWrap = specSettings.applyToValues && specSettings.textWrap !== undefined ? specSettings.textWrap : valueWordWrap;
                        let effectiveAlign = specSettings.applyToValues && specSettings.alignment ? specSettings.alignment : "right";

                        applyRowSquash(colTotalCell, rowHeight, efFontSize, efWordWrap);
                        colTotalCell.style.fontWeight = efBold ? "bold" : "normal";
                        colTotalCell.style.fontStyle = efItalic ? "italic" : "normal";
                        colTotalCell.style.textDecoration = efUnderline ? "underline" : "none";
                        colTotalCell.style.fontFamily = efFontFamily;
                        colTotalCell.style.fontSize = `${efFontSize}px`;
                        colTotalCell.style.borderRight = vertBorderValue;
                        colTotalCell.style.backgroundColor = effectiveBg;
                        colTotalCell.style.color = effectiveColor;
                        colTotalCell.style.overflow = "hidden";
                        colTotalCell.style.textOverflow = "ellipsis";
                        colTotalCell.style.whiteSpace = efWordWrap ? "normal" : "nowrap";
                        colTotalCell.style.textAlign = effectiveAlign;
                        if (efWordWrap) {
                            colTotalCell.style.wordBreak = "break-word";
                        }
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
            const totalBgColor = backgroundColor;

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
                    totalLabelCell.style.color = textColor;
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
                let effectiveBg = specSettings.applyToTotal && specSettings.backgroundColor ? specSettings.backgroundColor : backgroundColor;
                let effectiveColor = specSettings.applyToTotal && specSettings.textColor ? specSettings.textColor : textColor;
                if (specSettings.applyToTotal && specSettings.transparency > 0) {
                    effectiveColor = applyTransparency(effectiveColor, specSettings.transparency);
                }
                
                let efBold = specSettings.applyToTotal && specSettings.bold !== undefined ? specSettings.bold : totalRowBold;
                let efItalic = specSettings.applyToTotal && specSettings.italic !== undefined ? specSettings.italic : totalRowItalic;
                let efUnderline = specSettings.applyToTotal && specSettings.underline !== undefined ? specSettings.underline : totalRowUnderline;
                let efFontFamily = specSettings.applyToTotal && specSettings.fontFamily !== undefined ? specSettings.fontFamily : totalRowFontFamily;
                let efFontSize = specSettings.applyToTotal && specSettings.fontSize !== undefined ? specSettings.fontSize : totalRowFontSize;
                let efWordWrap = specSettings.applyToTotal && specSettings.textWrap !== undefined ? specSettings.textWrap : totalRowWordWrap;
                let effectiveAlign = specSettings.applyToTotal && specSettings.alignment ? specSettings.alignment : "right";
                
                let cell = totalRow.insertCell();
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
                    cell.textContent = formatValue(total, totalFormat, specSettings.displayUnits, specSettings.decimalPlaces);
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

                if (specSettings.applyToTotal && specSettings.horizontalGrid !== undefined) {
                    if (specSettings.horizontalGrid) {
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
            });

            // Add column total grand total cells — one per enabled base measure
            if (showTotalColumn) {
                for (let mIdx = 0; mIdx < M; mIdx++) {
                    if (!baseMeasureColTotalIncluded[mIdx]) continue;
                    let grandCell = totalRow.insertCell();
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
                        grandCell.textContent = formatValue(grandVal, ctFormat, ctDisplayUnits, ctDecimalPlaces);
                    } else {
                        grandCell.textContent = "";
                    }
                    grandCell.className = 'table-total-cell';
                    grandCell.style.width = `${colTotalColumnWidth}px`;
                    grandCell.style.minWidth = `${colTotalColumnWidth}px`;
                    grandCell.style.maxWidth = `${colTotalColumnWidth}px`;

                    // Use Row Totals formatting (same as other total row cells)
                    let specSettings = baseMeasureSettings[mIdx];
                    let efTotalBold = specSettings.applyToTotal && specSettings.bold !== undefined ? specSettings.bold : totalRowBold;
                    let efTotalItalic = specSettings.applyToTotal && specSettings.italic !== undefined ? specSettings.italic : totalRowItalic;
                    let efTotalUnderline = specSettings.applyToTotal && specSettings.underline !== undefined ? specSettings.underline : totalRowUnderline;
                    let efTotalFontFamily = specSettings.applyToTotal && specSettings.fontFamily !== undefined ? specSettings.fontFamily : totalRowFontFamily;
                    let efTotalFontSize = specSettings.applyToTotal && specSettings.fontSize !== undefined ? specSettings.fontSize : totalRowFontSize;
                    let efTotalWordWrap = specSettings.applyToTotal && specSettings.textWrap !== undefined ? specSettings.textWrap : totalRowWordWrap;
                    let efTotalBg = specSettings.applyToTotal && specSettings.backgroundColor ? specSettings.backgroundColor : backgroundColor;
                    let efTotalColor = specSettings.applyToTotal && specSettings.textColor ? specSettings.textColor : textColor;
                    let efTotalAlign = specSettings.applyToTotal && specSettings.alignment ? specSettings.alignment : "right";

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
                }
            }
            }
        } else {
            // switchValuesToRows IS TRUE (Transpose layout)
            
            // Create Header Row
            let headerRow = this.table.insertRow();
            headerRow.className = 'table-header-row';
            headerRow.style.borderBottom = horizBorder2xValue;
            headerRow.style.height = `${headerRowHeight}px`;
            const headerBgColor = headerBackgroundColor;

            // First header is "Measure"
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

            // Create Rows (each row is a Measure)
            values.forEach((valueColumn, measureIndex) => {
                let row = this.table.insertRow();
                row.className = 'table-data-row';
                
                let mObj = measureSettingsList[measureIndex];
                if (mObj && mObj.horizontalGrid !== undefined && mObj.applyToValues) {
                    row.style.borderBottom = mObj.horizontalGrid ? horizBorderValueOn : 'hidden';
                } else {
                    row.style.borderBottom = horizBorderValue;
                }
                
                const isEvenRow = measureIndex % 2 === 0;
                const rowHeight = isEvenRow ? valueRowHeight : alternateValueRowHeight;
                row.style.height = `${rowHeight}px`;
                const rowBgColor = isEvenRow ? backgroundColor : alternateBackgroundColor;
                row.style.backgroundColor = rowBgColor;

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
                    if (valueColumn.objects && valueColumn.objects[i]) {
                        const cfColor = dataViewObjects.getFillColor(
                            valueColumn.objects[i],
                            { objectName: "valueConditionalFormatting", propertyName: "textColor" }
                        );
                        if (cfColor) cellTextColor = cfColor;
                        
                        
                    }

                    let cellBackgroundColor = defaultMeasureBgColor;
                    if (valueColumn.objects && valueColumn.objects[i]) {
                        const cfBgColor = dataViewObjects.getFillColor(
                            valueColumn.objects[i],
                            { objectName: "valueBackgroundConditionalFormatting", propertyName: "backgroundColor" }
                        );
                        if (cfBgColor) cellBackgroundColor = cfBgColor;
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
                        
                        if (showDataBars) {
                            let cellDataBarColor = dataViewObjects.getFillColor(objects, { objectName: "dataBarsConditionalFormatting", propertyName: "dataBarColor" }, "#31b6fd");
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
                            
                            // Check for conditional formatting on data bar color (using simple card objectName)
                            if (valueColumn.objects && valueColumn.objects[i]) {
                                const cfDataBarColor = dataViewObjects.getFillColor(
                                    valueColumn.objects[i],
                                    { objectName: "dataBarsConditionalFormatting", propertyName: "dataBarColor" }
                                );
                                if (cfDataBarColor) {
                                    cellDataBarColor = cfDataBarColor;
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

                            let leftMarginPct = (labelsOutside && min < 0) ? 25 : 0;
                              let rightMarginPct = (labelsOutside && max > 0) ? 25 : 0;
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
                            const topPct = (100 - dataBarHeight) / 2;
                            dataBar.style.top = `${topPct}%`;
                            dataBar.style.height = `${dataBarHeight}%`;
                            dataBar.style.left = `${leftPct}%`;
                            dataBar.style.width = `${widthPct}%`;
                            dataBar.style.backgroundColor = applyTransparency(cellDataBarColor, transparency);

                            dataBar.style.zIndex = "1";

                            if (borderOn) {
                                let finalBorderColor = matchDataBarColor ? cellDataBarColor : borderColor;
                                dataBar.style.border = `${borderThickness}px solid ${finalBorderColor}`;
                                dataBar.style.boxSizing = "border-box";
                            }

                            cell.appendChild(dataBar);

                            if (showZeroLine) {
                                let zeroLine = document.createElement("div");
                                zeroLine.style.position = "absolute";
                                zeroLine.style.top = "0";
                                zeroLine.style.bottom = "0";
                                zeroLine.style.width = "2px";
                                let zLeftPct = ((zeroPoint - min) / range) * 100 * scaleMultiplier + leftMarginPct;
                                zeroLine.style.left = `calc(${zLeftPct}% - 1px)`;
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

                                let markerLeftPct = numValue >= 0 ? leftPct + widthPct : leftPct;
                                marker.style.left = `calc(${markerLeftPct}% - ${markerSize / 2}px)`;
                                marker.style.top = `calc(50% - ${markerSize / 2}px)`;
                                marker.style.width = `${markerSize}px`;
                                marker.style.height = `${markerSize}px`;

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
                                    marker.style.left = `calc(${markerLeftPct}% - 1px)`;
                                } else if (markerShape === "semiCircle") {
                                    marker.style.backgroundColor = cellMarkerColor;
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

                                cell.appendChild(marker);
                            }

                            let textDiv = document.createElement("div");
                            textDiv.style.zIndex = "2";
                            textDiv.textContent = formattedValue;
                            
                            if (labelsOutside) {
                                textDiv.style.position = "absolute";
                                textDiv.style.top = "50%";
                                textDiv.style.transform = "translateY(-50%)";
                                textDiv.style.whiteSpace = "nowrap";
                                if (numValue >= 0) {
                                    textDiv.style.left = `calc(${leftPct + widthPct}% + 4px)`;
                                } else {
                                    textDiv.style.right = `calc(${100 - leftPct}% + 4px)`;
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
                    applyRowSquash(cell, rowHeight, cellFontSize, valueWordWrap);
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

                    let effectiveBg = specSettings.applyToValues ? specRowBgColor : cellBackgroundColor;
                    let effectiveColor = specSettings.applyToValues ? specCellTextColor : cellTextColor;
                    if (specSettings.applyToValues && specSettings.transparency > 0) {
                        effectiveColor = applyTransparency(effectiveColor, specSettings.transparency);
                    }

                    let efBold = specSettings.applyToValues && specSettings.bold !== undefined ? specSettings.bold : valueBold;
                    let efItalic = specSettings.applyToValues && specSettings.italic !== undefined ? specSettings.italic : cellItalic;
                    let efUnderline = specSettings.applyToValues && specSettings.underline !== undefined ? specSettings.underline : cellUnderline;
                    let efFontFamily = specSettings.applyToValues && specSettings.fontFamily !== undefined ? specSettings.fontFamily : cellFontFamily;
                    let efFontSize = specSettings.applyToValues && specSettings.fontSize !== undefined ? specSettings.fontSize : cellFontSize;
                    let efWordWrap = specSettings.applyToValues && specSettings.textWrap !== undefined ? specSettings.textWrap : valueWordWrap;
                    let effectiveAlign = specSettings.applyToValues && specSettings.alignment ? specSettings.alignment : "right";

                    if (specSettings.applyToValues && specSettings.horizontalGrid !== undefined) {
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
                }
                
                // Add the Total column cell for this measure if enabled
                if (showTotalRow) {
                    let totalCell = row.insertCell();
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
                        totalCell.textContent = formatValue(totalVal, totalFormat, specSettings.displayUnits, specSettings.decimalPlaces);
                    }
                    totalCell.className = 'table-data-cell';
                    totalCell.style.width = `${valueColumnWidths[measureIndex]}px`;
                    totalCell.style.minWidth = `${valueColumnWidths[measureIndex]}px`;
                    totalCell.style.maxWidth = `${valueColumnWidths[measureIndex]}px`;
                    let efTotalBold = specSettings.applyToTotal && specSettings.bold !== undefined ? specSettings.bold : totalRowBold;
                    let efTotalItalic = specSettings.applyToTotal && specSettings.italic !== undefined ? specSettings.italic : totalRowItalic;
                    let efTotalUnderline = specSettings.applyToTotal && specSettings.underline !== undefined ? specSettings.underline : totalRowUnderline;
                    let efTotalFontFamily = specSettings.applyToTotal && specSettings.fontFamily !== undefined ? specSettings.fontFamily : totalRowFontFamily;
                    let efTotalFontSize = specSettings.applyToTotal && specSettings.fontSize !== undefined ? specSettings.fontSize : totalRowFontSize;
                    let efTotalWordWrap = specSettings.applyToTotal && specSettings.textWrap !== undefined ? specSettings.textWrap : totalRowWordWrap;
                    let efTotalBg = specSettings.applyToTotal && specSettings.backgroundColor ? specSettings.backgroundColor : backgroundColor;
                    let efTotalColor = specSettings.applyToTotal && specSettings.textColor ? specSettings.textColor : textColor;
                    let efTotalAlign = specSettings.applyToTotal && specSettings.alignment ? specSettings.alignment : "right";
                    applyRowSquash(totalCell, rowHeight, efTotalFontSize, efTotalWordWrap);
                    totalCell.style.fontWeight = efTotalBold ? "bold" : "normal";
                    totalCell.style.fontFamily = efTotalFontFamily;
                    totalCell.style.fontStyle = efTotalItalic ? "italic" : "normal";
                    totalCell.style.textDecoration = efTotalUnderline ? "underline" : "none";
                    totalCell.style.borderRight = `1px solid ${gridBorderColor}`;
                    totalCell.style.backgroundColor = efTotalBg;
                    totalCell.style.color = efTotalColor;
                    totalCell.style.textAlign = efTotalAlign;

                    if (specSettings.applyToTotal && specSettings.horizontalGrid !== undefined) {
                        if (specSettings.horizontalGrid) {
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
                }
            });

            // Add column totals rows in transposed layout — one row per enabled base measure
            if (showTotalColumn) {
                for (let mIdx = 0; mIdx < M; mIdx++) {
                    if (!baseMeasureColTotalIncluded[mIdx]) continue;

                    let colTotalRow = this.table.insertRow();
                    colTotalRow.className = 'table-total-row';
                    colTotalRow.style.borderTop = horizBorder2xValue;
                    colTotalRow.style.borderBottom = horizBorder2xValue;
                    colTotalRow.style.height = `${valueRowHeight}px`;

                    // Label cell — use Values menu formatting
                    let colTotalLabel = colTotalRow.insertCell();
                    colTotalLabel.textContent = baseMeasureHeaders[mIdx] + " Total";
                    colTotalLabel.className = 'table-total-label-cell';
                    colTotalLabel.style.width = `${categoryColumnWidth}px`;
                    colTotalLabel.style.minWidth = `${categoryColumnWidth}px`;
                    colTotalLabel.style.maxWidth = `${categoryColumnWidth}px`;
                    applyRowSquash(colTotalLabel, valueRowHeight, cellFontSize, valueWordWrap);
                    colTotalLabel.style.fontWeight = valueBold ? "bold" : "normal";
                    colTotalLabel.style.fontStyle = cellItalic ? "italic" : "normal";
                    colTotalLabel.style.textDecoration = cellUnderline ? "underline" : "none";
                    colTotalLabel.style.fontFamily = cellFontFamily;
                    colTotalLabel.style.borderRight = vertBorderValue;
                    colTotalLabel.style.backgroundColor = backgroundColor;
                    colTotalLabel.style.color = textColor;
                    colTotalLabel.style.overflow = "hidden";
                    colTotalLabel.style.textOverflow = "ellipsis";
                    colTotalLabel.style.whiteSpace = valueWordWrap ? "normal" : "nowrap";
                    if (valueWordWrap) {
                        colTotalLabel.style.wordBreak = "break-word";
                    }

                    // For each category column, use precomputed column totals for this measure
                    for (let i = 0; i < rowCount; i++) {
                        let cell = colTotalRow.insertCell();
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
                            cell.textContent = formatValue(colTotalVal, ctFormat, ctDisplayUnits, ctDecimalPlaces);
                        } else {
                            cell.textContent = "";
                        }
                        cell.className = 'table-data-cell';
                        cell.style.width = `${valueColumnWidths[0] || colTotalColumnWidth}px`;
                        cell.style.minWidth = `${valueColumnWidths[0] || colTotalColumnWidth}px`;
                        cell.style.maxWidth = `${valueColumnWidths[0] || colTotalColumnWidth}px`;

                        // Use Values menu formatting
                        let specSettings = baseMeasureSettings[mIdx];
                        let efBold = specSettings.applyToValues && specSettings.bold !== undefined ? specSettings.bold : valueBold;
                        let efItalic = specSettings.applyToValues && specSettings.italic !== undefined ? specSettings.italic : cellItalic;
                        let efUnderline = specSettings.applyToValues && specSettings.underline !== undefined ? specSettings.underline : cellUnderline;
                        let efFontFamily = specSettings.applyToValues && specSettings.fontFamily !== undefined ? specSettings.fontFamily : cellFontFamily;
                        let efFontSize = specSettings.applyToValues && specSettings.fontSize !== undefined ? specSettings.fontSize : cellFontSize;
                        let efWordWrap = specSettings.applyToValues && specSettings.textWrap !== undefined ? specSettings.textWrap : valueWordWrap;
                        let effectiveAlign = specSettings.applyToValues && specSettings.alignment ? specSettings.alignment : "right";

                        applyRowSquash(cell, valueRowHeight, efFontSize, efWordWrap);
                        cell.style.fontWeight = efBold ? "bold" : "normal";
                        cell.style.fontStyle = efItalic ? "italic" : "normal";
                        cell.style.textDecoration = efUnderline ? "underline" : "none";
                        cell.style.fontFamily = efFontFamily;
                        cell.style.borderRight = vertBorderValue;
                        cell.style.backgroundColor = backgroundColor;
                        cell.style.color = textColor;
                        cell.style.overflow = "hidden";
                        cell.style.textOverflow = "ellipsis";
                        cell.style.whiteSpace = efWordWrap ? "normal" : "nowrap";
                        cell.style.textAlign = effectiveAlign;
                        if (efWordWrap) {
                            cell.style.wordBreak = "break-word";
                        }
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
                        grandCell.style.width = `${colTotalColumnWidth}px`;
                        grandCell.style.minWidth = `${colTotalColumnWidth}px`;
                        grandCell.style.maxWidth = `${colTotalColumnWidth}px`;

                        // Use Row Totals formatting for the intersection
                        let specSettings = baseMeasureSettings[mIdx];
                        let efTotalBold = specSettings.applyToTotal && specSettings.bold !== undefined ? specSettings.bold : totalRowBold;
                        let efTotalItalic = specSettings.applyToTotal && specSettings.italic !== undefined ? specSettings.italic : totalRowItalic;
                        let efTotalUnderline = specSettings.applyToTotal && specSettings.underline !== undefined ? specSettings.underline : totalRowUnderline;
                        let efTotalFontFamily = specSettings.applyToTotal && specSettings.fontFamily !== undefined ? specSettings.fontFamily : totalRowFontFamily;
                        let efTotalFontSize = specSettings.applyToTotal && specSettings.fontSize !== undefined ? specSettings.fontSize : totalRowFontSize;
                        let efTotalWordWrap = specSettings.applyToTotal && specSettings.textWrap !== undefined ? specSettings.textWrap : totalRowWordWrap;
                        let efTotalBg = specSettings.applyToTotal && specSettings.backgroundColor ? specSettings.backgroundColor : backgroundColor;
                        let efTotalColor = specSettings.applyToTotal && specSettings.textColor ? specSettings.textColor : textColor;
                        let efTotalAlign = specSettings.applyToTotal && specSettings.alignment ? specSettings.alignment : "right";

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
                    }
                }
            }
        }
    }
}









