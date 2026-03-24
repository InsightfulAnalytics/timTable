const fs = require('fs');

const code = fs.readFileSync('src/visual.ts', 'utf8');

const regex = /(\s*const objects = (?:valueColumn\.source\.objects \|\| \{\}|valueColumn\.source\.objects \|\| \{\});\s*const showDataBars = dataViewObjects\.getValue<boolean>\(objects, \{ objectName: "dataBarsFormatting", propertyName: "showDataBars" \}, false\);\s*if \(showDataBars\) \{)(.*?)(let textDiv = document\.createElement\("div"\);\s*textDiv\.style\.position = "relative";\s*textDiv\.style\.zIndex = "2";\s*textDiv\.textContent = formattedValue;\s*cell\.appendChild\(textDiv\);\s*\})/s;

const newProps = `
                            let cellPositiveColor = dataViewObjects.getFillColor(objects, { objectName: "dataBarsFormatting", propertyName: "positiveColor" }, "#31b6fd");
                            let cellNegativeColor = dataViewObjects.getFillColor(objects, { objectName: "dataBarsFormatting", propertyName: "negativeColor" }, "#d96570");
                            const dataBarHeight = dataViewObjects.getValue<number>(objects, { objectName: "dataBarsFormatting", propertyName: "dataBarHeight" }, 80);
                            const transparency = dataViewObjects.getValue<number>(objects, { objectName: "dataBarsFormatting", propertyName: "transparency" }, 20);
                            const borderOn = dataViewObjects.getValue<boolean>(objects, { objectName: "dataBarsFormatting", propertyName: "borderOn" }, true);
                            const borderThickness = dataViewObjects.getValue<number>(objects, { objectName: "dataBarsFormatting", propertyName: "borderThickness" }, 1);
                            const borderColor = dataViewObjects.getFillColor(objects, { objectName: "dataBarsFormatting", propertyName: "borderColor" }, "#000000");
                            const minValueObj = dataViewObjects.getValue<number>(objects, { objectName: "dataBarsFormatting", propertyName: "minValue" }, null);
                            const maxValueObj = dataViewObjects.getValue<number>(objects, { objectName: "dataBarsFormatting", propertyName: "maxValue" }, null);
                            const labelsOutside = dataViewObjects.getValue<boolean>(objects, { objectName: "dataBarsFormatting", propertyName: "labelsOutside" }, false);
                            
                            // Check for conditional formatting on positive color
                            if (valueColumn.objects && valueColumn.objects[i]) {
                                const cfPosColor = dataViewObjects.getFillColor(
                                    valueColumn.objects[i],
                                    { objectName: "dataBarsFormatting", propertyName: "positiveColor" }
                                );
                                if (cfPosColor) {
                                    cellPositiveColor = cfPosColor;
                                }
                            }

                            const min = minValueObj !== null && minValueObj !== undefined ? minValueObj : measureMins[measureIndex];
                            const max = maxValueObj !== null && maxValueObj !== undefined ? maxValueObj : measureMaxs[measureIndex];
                            let range = max - min;
                            if (range <= 0) range = 1;

                            // Calculate width percentage
                            let widthPct = 0;
                            let leftPct = 0;

                            let clampedValue = Math.max(min, Math.min(max, numValue));
                            let zeroPoint = Math.max(min, Math.min(max, 0));
                            
                            if (clampedValue >= zeroPoint) {
                                widthPct = ((clampedValue - zeroPoint) / range) * 100;
                                leftPct = ((zeroPoint - min) / range) * 100;
                            } else {
                                widthPct = ((zeroPoint - clampedValue) / range) * 100;
                                leftPct = ((clampedValue - min) / range) * 100;
                            }

                            // Create data bar div
                            let dataBar = document.createElement("div");
                            dataBar.style.position = "absolute";
                            const topPct = (100 - dataBarHeight) / 2;
                            dataBar.style.top = \`\${topPct}%\`;
                            dataBar.style.height = \`\${dataBarHeight}%\`;
                            dataBar.style.left = \`\${leftPct}%\`;
                            dataBar.style.width = \`\${widthPct}%\`;
                            dataBar.style.backgroundColor = numValue >= 0 ? cellPositiveColor : cellNegativeColor;
                            dataBar.style.opacity = \`\${(100 - transparency) / 100}\`;
                            dataBar.style.zIndex = "1";
                            
                            if (borderOn) {
                                dataBar.style.border = \`\${borderThickness}px solid \${borderColor}\`;
                                dataBar.style.boxSizing = "border-box";
                            }
                            
                            cell.appendChild(dataBar);

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
                                marker.style.left = \`calc(\${markerLeftPct}% - \${markerSize / 2}px)\`;
                                marker.style.top = \`calc(50% - \${markerSize / 2}px)\`;
                                marker.style.width = \`\${markerSize}px\`;
                                marker.style.height = \`\${markerSize}px\`;

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
                                    marker.style.width = \`\${markerSize}px\`;
                                } else if (markerShape === "verticalLine") {
                                    marker.style.backgroundColor = cellMarkerColor;
                                    marker.style.width = "2px";
                                    marker.style.left = \`calc(\${markerLeftPct}% - 1px)\`;
                                } else if (markerShape === "semiCircle") {
                                    marker.style.backgroundColor = cellMarkerColor;
                                    // Draw semi circle pointing outwards
                                    if (numValue >= 0) {
                                        marker.style.borderTopRightRadius = \`\${markerSize}px\`;
                                        marker.style.borderBottomRightRadius = \`\${markerSize}px\`;
                                        marker.style.width = \`\${markerSize / 2}px\`;
                                        marker.style.left = \`calc(\${markerLeftPct}%)\`;
                                    } else {
                                        marker.style.borderTopLeftRadius = \`\${markerSize}px\`;
                                        marker.style.borderBottomLeftRadius = \`\${markerSize}px\`;
                                        marker.style.width = \`\${markerSize / 2}px\`;
                                        marker.style.left = \`calc(\${markerLeftPct}% - \${markerSize / 2}px)\`;
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
                                    textDiv.style.left = \`calc(\${leftPct + widthPct}% + 4px)\`;
                                } else {
                                    textDiv.style.right = \`calc(\${100 - leftPct}% + 4px)\`;
                                }
                            } else {
                                textDiv.style.position = "relative";
                            }
                            cell.appendChild(textDiv);
`;

const globalRegex = new RegExp(regex.source, 'gs');
let matchCount = 0;
const newCode = code.replace(globalRegex, (match, prefix, body, suffix) => {
    matchCount++;
    return prefix + newProps + '                        }';
});

fs.writeFileSync('src/visual.ts', newCode);
console.log('Matches replaced: ' + matchCount);
