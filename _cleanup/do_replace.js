const fs = require("fs");
let f = fs.readFileSync("B:/VS Code Files/Visuals/timTable/src/visual.ts", "utf8");
let searchStr = "// Calculate width percentage";
let searchEnd = "// Data bar markers settings";
let idx = f.indexOf(searchStr);
while (idx !== -1) {
    let idx2 = f.indexOf(searchEnd, idx);
    if (idx2 === -1) break;
    let newBlock = `// Calculate width percentage
                            let widthPct = 0;
                            let leftPct = 0;

                            let clampedValue = Math.max(min, Math.min(max, numValue));
                            let zeroPoint = Math.max(min, Math.min(max, 0));

                            let scale = labelsOutside ? 0.75 : 1;

                            if (clampedValue >= zeroPoint) {
                                widthPct = ((clampedValue - zeroPoint) / range) * 100 * scale;
                                leftPct = ((zeroPoint - min) / range) * 100 * scale;
                            } else {
                                widthPct = ((zeroPoint - clampedValue) / range) * 100 * scale;
                                leftPct = ((clampedValue - min) / range) * 100 * scale;
                            }

                            // Create data bar div
                            let dataBar = document.createElement("div");
                            dataBar.style.position = "absolute";
                            const topPct = (100 - dataBarHeight) / 2;
                            dataBar.style.top = \`\${topPct}%\`;
                            dataBar.style.height = \`\${dataBarHeight}%\`;
                            dataBar.style.left = \`\${leftPct}%\`;
                            dataBar.style.width = \`\${widthPct}%\`;
                            dataBar.style.backgroundColor = applyTransparency(cellDataBarColor, transparency);

                            dataBar.style.zIndex = "1";

                            if (borderOn) {
                                let finalBorderColor = matchDataBarColor ? cellDataBarColor : borderColor;
                                dataBar.style.border = \`\${borderThickness}px solid \${finalBorderColor}\`;
                                dataBar.style.boxSizing = "border-box";
                            }

                            cell.appendChild(dataBar);

                            if (showZeroLine) {
                                let zeroLine = document.createElement("div");
                                zeroLine.style.position = "absolute";
                                zeroLine.style.top = "0";
                                zeroLine.style.bottom = "0";
                                zeroLine.style.width = "2px";
                                let zLeftPct = ((zeroPoint - min) / range) * 100 * scale;
                                zeroLine.style.left = \`calc(\${zLeftPct}% - 1px)\`;
                                zeroLine.style.backgroundColor = applyTransparency(zeroLineColor, zeroLineTransparency);
                                zeroLine.style.zIndex = "1"; 
                                cell.appendChild(zeroLine);
                            }

                            `;
    f = f.substring(0, idx) + newBlock + f.substring(idx2);
    idx = f.indexOf(searchStr, idx + newBlock.length);
}
fs.writeFileSync("B:/VS Code Files/Visuals/timTable/src/visual.ts", f);
console.log("done!");
