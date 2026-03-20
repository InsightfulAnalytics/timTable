import re

with open('src/visual.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# I will find the start of 'if (!switchValuesToRows) {'
start_idx = content.find('if (!switchValuesToRows) {')
end_idx = content.find('public getFormattingModel()') - 5

# We replace everything from start_idx to end_idx with our new logic.
new_code = '''if (!switchValuesToRows) {
            // Normal horizontal table structure
            let headerRow = this.table.insertRow();
            headerRow.className = 'table-header-row';
            headerRow.style.borderBottom = 2px solid \;
            headerRow.style.height = \px;
            const headerBgColor = getHeaderColor(dataView);

            // Add category column header if categories exist
            if (hasCategories) {
                let categoryHeader = headerRow.insertCell();
                categoryHeader.textContent = categories.source.displayName || 'Category';
                categoryHeader.className = 'table-header-cell';
                categoryHeader.style.width = \px;
                categoryHeader.style.minWidth = \px;
                categoryHeader.style.maxWidth = \px;
                applyRowSquash(categoryHeader, headerRowHeight, headerFontSize, categoryWordWrap);
                categoryHeader.style.fontWeight = headerBold ? "bold" : "normal";
                categoryHeader.style.borderRight = 1px solid \;
                categoryHeader.style.backgroundColor = headerBgColor;
                categoryHeader.style.overflow = "hidden";
                categoryHeader.style.textOverflow = "ellipsis";
                categoryHeader.style.whiteSpace = categoryWordWrap ? "normal" : "nowrap";
                if (categoryWordWrap) {
                    categoryHeader.style.wordBreak = "break-word";
                }
            }

            // Add measure column headers
            measureHeaders.forEach((displayName) => {
                let header = headerRow.insertCell();
                header.textContent = displayName;
                header.className = 'table-header-cell';
                header.style.width = \px;
                header.style.minWidth = \px;
                header.style.maxWidth = \px;
                applyRowSquash(header, headerRowHeight, headerFontSize, valueWordWrap);
                header.style.fontWeight = headerBold ? "bold" : "normal";
                header.style.borderRight = 1px solid \;
                header.style.backgroundColor = headerBgColor;
                header.style.overflow = "hidden";
                header.style.textOverflow = "ellipsis";
                header.style.whiteSpace = valueWordWrap ? "normal" : "nowrap";
                if (valueWordWrap) {
                    header.style.wordBreak = "break-word";
                }
            });

            // Create data rows
            let totals: number[] = new Array(values.length).fill(0);

            for (let i = 0; i < rowCount; i++) {
                let row = this.table.insertRow();
                row.className = 'table-data-row';
                row.style.borderBottom = 1px solid \;
                // Apply alternating background colors with support for conditional formatting
                const isEvenRow = i % 2 === 0;
                const rowHeight = isEvenRow ? valueRowHeight : alternateValueRowHeight;
                row.style.height = \px;
                const rowBgColor = getRowBackgroundColor(i, isEvenRow, dataView);
                row.style.backgroundColor = rowBgColor;

                // Add category value
                if (hasCategories) {
                    let categoryCell = row.insertCell();
                    categoryCell.textContent = String(categories.values[i]);
                    categoryCell.className = 'table-category-cell';
                    categoryCell.style.width = \px;
                    categoryCell.style.minWidth = \px;
                    categoryCell.style.maxWidth = \px;
                    applyRowSquash(categoryCell, rowHeight, cellFontSize, categoryWordWrap);
                    categoryCell.style.fontWeight = valueBold ? "bold" : "normal";
                    categoryCell.style.borderRight = 1px solid \;
                    categoryCell.style.backgroundColor = rowBgColor;
                    categoryCell.style.color = getCategoryTextColor(i, dataView);
                    categoryCell.style.overflow = "hidden";
                    categoryCell.style.textOverflow = "ellipsis";
                    categoryCell.style.whiteSpace = categoryWordWrap ? "normal" : "nowrap";
                    if (categoryWordWrap) {
                        categoryCell.style.wordBreak = "break-word";
                    }
                }

                // Add measure values
                values.forEach((valueColumn, measureIndex) => {
                    const defaultMeasureTextColor = dataViewObjects.getFillColor(
                        valueColumn.source.objects || {},
                        { objectName: "valueConditionalFormatting", propertyName: "textColor" },
                        "#333333"
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

                    let cell = row.insertCell();
                    let value = valueColumn.values[i];
                    cell.style.position = "relative"; // for data bar positioning

                    if (value !== null && value !== undefined) {
                        let numValue = Number(value);
                        const formattedValue = numValue.toLocaleString(undefined, {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 0
                        });
                        totals[measureIndex] += numValue;

                        const objects = valueColumn.source.objects || {};
                        const showDataBars = dataViewObjects.getValue<boolean>(objects, { objectName: "dataBarsFormatting", propertyName: "showDataBars" }, false);
                        
                        if (showDataBars) {
                            let cellPositiveColor = dataViewObjects.getFillColor(objects, { objectName: "dataBarsFormatting", propertyName: "positiveColor" }, "#31b6fd");
                            if (valueColumn.objects && valueColumn.objects[i]) {
                                const cfPosColor = dataViewObjects.getFillColor(
                                    valueColumn.objects[i],
                                    { objectName: "dataBarsFormatting", propertyName: "positiveColor" }
                                );
                                if (cfPosColor) {
                                    cellPositiveColor = cfPosColor;
                                }
                            }

                            let cellNegativeColor = dataViewObjects.getFillColor(objects, { objectName: "dataBarsFormatting", propertyName: "negativeColor" }, "#d96570");
                            if (valueColumn.objects && valueColumn.objects[i]) {
                                const cfNegColor = dataViewObjects.getFillColor(
                                    valueColumn.objects[i],
                                    { objectName: "dataBarsFormatting", propertyName: "negativeColor" }
                                );
                                if (cfNegColor) {
                                    cellNegativeColor = cfNegColor;
                                }
                            }

                            const dataBarHeight = dataViewObjects.getValue<number>(objects, { objectName: "dataBarsFormatting", propertyName: "dataBarHeight" }, 80);

                            const min = measureMins[measureIndex];
                            const max = measureMaxs[measureIndex];
                            const range = max - min;
                            
                            // Calculate width percentage
                            let widthPct = 0;
                            let leftPct = 0;

                            if (range > 0) {
                                if (numValue >= 0) {
                                    widthPct = (numValue / range) * 100;
                                    leftPct = ((0 - min) / range) * 100;
                                } else {
                                    widthPct = (Math.abs(numValue) / range) * 100;
                                    leftPct = ((numValue - min) / range) * 100;
                                }
                            }

                            // Create data bar div
                            let dataBar = document.createElement("div");
                            dataBar.style.position = "absolute";
                            const topPct = (100 - dataBarHeight) / 2;
                            dataBar.style.top = \%;
                            dataBar.style.height = \%;
                            dataBar.style.left = \%;
                            dataBar.style.width = \%;
                            dataBar.style.backgroundColor = numValue >= 0 ? cellPositiveColor : cellNegativeColor;
                            dataBar.style.opacity = "0.6"; // semi-transparent so text is readable
                            dataBar.style.zIndex = "1";
                            cell.appendChild(dataBar);

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
                                
                                // Calculate marker left position (end of the bar)
                                let markerLeftPct = numValue >= 0 ? leftPct + widthPct : leftPct;
                                marker.style.left = calc(\% - \px);
                                marker.style.top = calc(50% - \px);
                                marker.style.width = \px;
                                marker.style.height = \px;

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
                                    marker.style.width = \px;
                                } else if (markerShape === "verticalLine") {
                                    marker.style.backgroundColor = cellMarkerColor;
                                    marker.style.width = "2px";
                                    marker.style.left = calc(\% - 1px);
                                } else if (markerShape === "semiCircle") {
                                    marker.style.backgroundColor = cellMarkerColor;
                                    // Draw semi circle pointing outwards
                                    if (numValue >= 0) {
                                        marker.style.borderTopRightRadius = \px;
                                        marker.style.borderBottomRightRadius = \px;
                                        marker.style.width = \px;
                                        marker.style.left = calc(\%);
                                    } else {
                                        marker.style.borderTopLeftRadius = \px;
                                        marker.style.borderBottomLeftRadius = \px;
                                        marker.style.width = \px;
                                        marker.style.left = calc(\% - \px);
                                    }
                                }

                                cell.appendChild(marker);
                            }
                            
                            // Create text div
                            let textDiv = document.createElement("div");
                            textDiv.style.position = "relative";
                            textDiv.style.zIndex = "2";
                            textDiv.textContent = formattedValue;
                            cell.appendChild(textDiv);
                        } else {
                            cell.textContent = formattedValue;
                        }
                    } else {
                        cell.textContent = '-';
                    }

                    cell.className = 'table-data-cell';
                    cell.style.width = \px;
                    cell.style.minWidth = \px;
                    cell.style.maxWidth = \px;
                    applyRowSquash(cell, rowHeight, cellFontSize, valueWordWrap);
                    cell.style.fontWeight = valueBold ? "bold" : "normal";
                    cell.style.borderRight = 1px solid \;
                    cell.style.backgroundColor = rowBgColor;
                    cell.style.color = cellTextColor;
                    cell.style.overflow = "hidden";
                    cell.style.textOverflow = "ellipsis";
                    cell.style.whiteSpace = valueWordWrap ? "normal" : "nowrap";
                    if (valueWordWrap) {
                        cell.style.wordBreak = "break-word";
                    }
                });
            }

            // Create total row
            let totalRow = this.table.insertRow();
            totalRow.className = 'table-total-row';
            totalRow.style.borderTop = 2px solid \;
            totalRow.style.borderBottom = 2px solid \;
            totalRow.style.height = \px;
            const totalBgColor = getTotalRowColor(dataView);

            if (hasCategories) {
                let totalLabelCell = totalRow.insertCell();
                totalLabelCell.textContent = 'Total';
                totalLabelCell.className = 'table-total-label-cell';
                totalLabelCell.style.width = \px;
                totalLabelCell.style.minWidth = \px;
                totalLabelCell.style.maxWidth = \px;
                applyRowSquash(totalLabelCell, totalRowHeight, cellFontSize, categoryWordWrap);
                totalLabelCell.style.fontWeight = totalRowBold ? "bold" : "normal";
                totalLabelCell.style.textDecoration = totalRowUnderline ? "underline" : "none";
                totalLabelCell.style.borderRight = 1px solid \;
                totalLabelCell.style.backgroundColor = totalBgColor;
                totalLabelCell.style.overflow = "hidden";
                totalLabelCell.style.textOverflow = "ellipsis";
                totalLabelCell.style.whiteSpace = categoryWordWrap ? "normal" : "nowrap";
                if (categoryWordWrap) {
                    totalLabelCell.style.wordBreak = "break-word";
                }
            } else {
                let totalLabelCell = totalRow.insertCell();
                totalLabelCell.textContent = 'Total';
                totalLabelCell.style.display = "none";
            }

            totals.forEach((total) => {
                let cell = totalRow.insertCell();
                cell.textContent = total.toLocaleString(undefined, {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 0
                });
                cell.className = 'table-total-cell';
                cell.style.width = \px;
                cell.style.minWidth = \px;
                cell.style.maxWidth = \px;
                applyRowSquash(cell, totalRowHeight, cellFontSize, valueWordWrap);
                cell.style.fontWeight = totalRowBold ? "bold" : "normal";
                cell.style.textDecoration = totalRowUnderline ? "underline" : "none";
                cell.style.borderRight = 1px solid \;
                cell.style.backgroundColor = totalBgColor;
                cell.style.overflow = "hidden";
                cell.style.textOverflow = "ellipsis";
                cell.style.whiteSpace = valueWordWrap ? "normal" : "nowrap";
                if (valueWordWrap) {
                    cell.style.wordBreak = "break-word";
                }
            });

        } else {
            // switchValuesToRows IS TRUE (Transpose layout)
            
            // Create Header Row
            let headerRow = this.table.insertRow();
            headerRow.className = 'table-header-row';
            headerRow.style.borderBottom = 2px solid \;
            headerRow.style.height = \px;
            const headerBgColor = getHeaderColor(dataView);

            // First header is "Measure"
            let measureHeader = headerRow.insertCell();
            measureHeader.textContent = "Measure";
            measureHeader.className = 'table-header-cell';
            measureHeader.style.width = \px;
            measureHeader.style.minWidth = \px;
            measureHeader.style.maxWidth = \px;
            applyRowSquash(measureHeader, headerRowHeight, headerFontSize, categoryWordWrap);
            measureHeader.style.fontWeight = headerBold ? "bold" : "normal";
            measureHeader.style.borderRight = 1px solid \;
            measureHeader.style.backgroundColor = headerBgColor;
            measureHeader.style.overflow = "hidden";
            measureHeader.style.textOverflow = "ellipsis";
            measureHeader.style.whiteSpace = categoryWordWrap ? "normal" : "nowrap";
            
            // Next headers are Category values (or just "Value" if no categories)
            if (hasCategories) {
                for (let i = 0; i < rowCount; i++) {
                    let catHeader = headerRow.insertCell();
                    catHeader.textContent = String(categories.values[i]);
                    catHeader.className = 'table-header-cell';
                    catHeader.style.width = \px;
                    catHeader.style.minWidth = \px;
                    catHeader.style.maxWidth = \px;
                    applyRowSquash(catHeader, headerRowHeight, headerFontSize, valueWordWrap);
                    catHeader.style.fontWeight = headerBold ? "bold" : "normal";
                    catHeader.style.borderRight = 1px solid \;
                    catHeader.style.backgroundColor = headerBgColor;
                    catHeader.style.overflow = "hidden";
                    catHeader.style.textOverflow = "ellipsis";
                    catHeader.style.whiteSpace = valueWordWrap ? "normal" : "nowrap";
                    if (valueWordWrap) {
                        catHeader.style.wordBreak = "break-word";
                    }
                }
            } else {
                let catHeader = headerRow.insertCell();
                catHeader.textContent = "Value";
                catHeader.className = 'table-header-cell';
                catHeader.style.width = \px;
                catHeader.style.minWidth = \px;
                catHeader.style.maxWidth = \px;
                applyRowSquash(catHeader, headerRowHeight, headerFontSize, valueWordWrap);
                catHeader.style.fontWeight = headerBold ? "bold" : "normal";
                catHeader.style.borderRight = 1px solid \;
                catHeader.style.backgroundColor = headerBgColor;
                catHeader.style.overflow = "hidden";
                catHeader.style.textOverflow = "ellipsis";
                catHeader.style.whiteSpace = valueWordWrap ? "normal" : "nowrap";
                if (valueWordWrap) {
                    catHeader.style.wordBreak = "break-word";
                }
            }

            // Create Rows (each row is a Measure)
            values.forEach((valueColumn, measureIndex) => {
                let row = this.table.insertRow();
                row.className = 'table-data-row';
                row.style.borderBottom = 1px solid \;
                
                const isEvenRow = measureIndex % 2 === 0;
                const rowHeight = isEvenRow ? valueRowHeight : alternateValueRowHeight;
                row.style.height = \px;
                const rowBgColor = isEvenRow ? backgroundColor : alternateBackgroundColor;
                row.style.backgroundColor = rowBgColor;

                // Cell 1: Measure Name
                let measureNameCell = row.insertCell();
                measureNameCell.textContent = measureHeaders[measureIndex];
                measureNameCell.className = 'table-category-cell';
                measureNameCell.style.width = \px;
                measureNameCell.style.minWidth = \px;
                measureNameCell.style.maxWidth = \px;
                applyRowSquash(measureNameCell, rowHeight, cellFontSize, categoryWordWrap);
                measureNameCell.style.fontWeight = valueBold ? "bold" : "normal";
                measureNameCell.style.borderRight = 1px solid \;
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
                    "#333333"
                );

                const objects = valueColumn.source.objects || {};
                const showDataBars = dataViewObjects.getValue<boolean>(objects, { objectName: "dataBarsFormatting", propertyName: "showDataBars" }, false);
                const showMarker = dataViewObjects.getValue<boolean>(objects, { objectName: "dataBarMarkers", propertyName: "showMarker" }, false);
                
                let cellPositiveColor = dataViewObjects.getFillColor(objects, { objectName: "dataBarsFormatting", propertyName: "positiveColor" }, "#31b6fd");
                let cellNegativeColor = dataViewObjects.getFillColor(objects, { objectName: "dataBarsFormatting", propertyName: "negativeColor" }, "#d96570");
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
                    let cell = row.insertCell();
                    cell.style.position = "relative";
                    
                    let cellTextColor = defaultMeasureTextColor;
                    if (valueColumn.objects && valueColumn.objects[i]) {
                        const cfColor = dataViewObjects.getFillColor(
                            valueColumn.objects[i],
                            { objectName: "valueConditionalFormatting", propertyName: "textColor" }
                        );
                        if (cfColor) cellTextColor = cfColor;
                        
                        const cfPosColor = dataViewObjects.getFillColor(
                            valueColumn.objects[i],
                            { objectName: "dataBarsFormatting", propertyName: "positiveColor" }
                        );
                        if (cfPosColor) cellPositiveColor = cfPosColor;

                        const cfNegColor = dataViewObjects.getFillColor(
                            valueColumn.objects[i],
                            { objectName: "dataBarsFormatting", propertyName: "negativeColor" }
                        );
                        if (cfNegColor) cellNegativeColor = cfNegColor;

                        const cfMarkerColor = dataViewObjects.getFillColor(
                            valueColumn.objects[i],
                            { objectName: "dataBarMarkers", propertyName: "markerColor" }
                        );
                        if (cfMarkerColor) cellMarkerColor = cfMarkerColor;
                    }

                    let value = valueColumn.values[i];
                    if (value !== null && value !== undefined) {
                        let numValue = Number(value);
                        const formattedValue = numValue.toLocaleString(undefined, {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 0
                        });

                        if (showDataBars) {
                            let widthPct = 0;
                            let leftPct = 0;

                            if (range > 0) {
                                if (numValue >= 0) {
                                    widthPct = (numValue / range) * 100;
                                    leftPct = ((0 - min) / range) * 100;
                                } else {
                                    widthPct = (Math.abs(numValue) / range) * 100;
                                    leftPct = ((numValue - min) / range) * 100;
                                }
                            }

                            // Create data bar div
                            let dataBar = document.createElement("div");
                            dataBar.style.position = "absolute";
                            const topPct = (100 - dataBarHeight) / 2;
                            dataBar.style.top = \%;
                            dataBar.style.height = \%;
                            dataBar.style.left = \%;
                            dataBar.style.width = \%;
                            dataBar.style.backgroundColor = numValue >= 0 ? cellPositiveColor : cellNegativeColor;
                            dataBar.style.opacity = "0.6";
                            dataBar.style.zIndex = "1";
                            cell.appendChild(dataBar);

                            if (showMarker) {
                                let marker = document.createElement("div");
                                marker.style.position = "absolute";
                                marker.style.zIndex = "3";
                                
                                let markerLeftPct = numValue >= 0 ? leftPct + widthPct : leftPct;
                                marker.style.left = calc(\% - \px);
                                marker.style.top = calc(50% - \px);
                                marker.style.width = \px;
                                marker.style.height = \px;

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
                                    marker.style.width = \px;
                                } else if (markerShape === "verticalLine") {
                                    marker.style.backgroundColor = cellMarkerColor;
                                    marker.style.width = "2px";
                                    marker.style.left = calc(\% - 1px);
                                } else if (markerShape === "semiCircle") {
                                    marker.style.backgroundColor = cellMarkerColor;
                                    if (numValue >= 0) {
                                        marker.style.borderTopRightRadius = \px;
                                        marker.style.borderBottomRightRadius = \px;
                                        marker.style.width = \px;
                                        marker.style.left = calc(\%);
                                    } else {
                                        marker.style.borderTopLeftRadius = \px;
                                        marker.style.borderBottomLeftRadius = \px;
                                        marker.style.width = \px;
                                        marker.style.left = calc(\% - \px);
                                    }
                                }

                                cell.appendChild(marker);
                            }

                            let textDiv = document.createElement("div");
                            textDiv.style.position = "relative";
                            textDiv.style.zIndex = "2";
                            textDiv.textContent = formattedValue;
                            cell.appendChild(textDiv);
                        } else {
                            cell.textContent = formattedValue;
                        }
                    } else {
                        cell.textContent = '-';
                    }

                    cell.className = 'table-data-cell';
                    cell.style.width = \px;
                    cell.style.minWidth = \px;
                    cell.style.maxWidth = \px;
                    applyRowSquash(cell, rowHeight, cellFontSize, valueWordWrap);
                    cell.style.fontWeight = valueBold ? "bold" : "normal";
                    cell.style.borderRight = 1px solid \;
                    cell.style.backgroundColor = rowBgColor;
                    cell.style.color = cellTextColor;
                    cell.style.overflow = "hidden";
                    cell.style.textOverflow = "ellipsis";
                    cell.style.whiteSpace = valueWordWrap ? "normal" : "nowrap";
                    if (valueWordWrap) {
                        cell.style.wordBreak = "break-word";
                    }
                }
            });
        }
    }
'''

with open('src/visual.ts', 'w', encoding='utf-8') as f:
    f.write(content[:start_idx] + new_code + '\n' + content[end_idx:])

print("Fixed!")
