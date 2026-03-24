const fs = require('fs');
let code = fs.readFileSync('B:/VS Code Files/Visuals/timTable/src/visual.ts', 'utf8');

// Fix 1: The row loop accessing measureSettingsList[i] should use measureIndex
code = code.replace(/let specSettings = measureSettingsList\[i\];\n\s*let effectiveBg = specSettings\.applyToValues/g, 
`let specSettings = measureSettingsList[measureIndex];
                    let effectiveBg = specSettings.applyToValues`);

// Fix 2: The headers loop in standard layout (line 499)
const oldHeaderLoop = `            measureHeaders.forEach((displayName) => {
                let header = headerRow.insertCell();
                header.textContent = displayName;
                header.className = 'table-header-cell';
                header.style.width = \`\${columnWidth}px\`;
                header.style.minWidth = \`\${columnWidth}px\`;
                header.style.maxWidth = \`\${columnWidth}px\`;
                applyRowSquash(header, headerRowHeight, headerFontSize, headerWordWrap);
                header.style.fontWeight = headerBold ? "bold" : "normal";
                header.style.fontStyle = headerItalic ? "italic" : "normal";
                header.style.textDecoration = headerUnderline ? "underline" : "none";
                header.style.fontFamily = headerFontFamily;
                header.style.color = headerTextColor;
                header.style.textAlign = headerAlignment;
                header.style.borderRight = vertBorderValue;
                header.style.backgroundColor = headerBgColor;`;

const newHeaderLoop = `            measureHeaders.forEach((displayName, idx) => {
                let specSettings = measureSettingsList[idx];
                let effectiveBg = specSettings.applyToHeader && specSettings.backgroundColor ? specSettings.backgroundColor : headerBgColor;
                let effectiveColor = specSettings.applyToHeader && specSettings.textColor ? specSettings.textColor : headerTextColor;
                let effectiveAlign = specSettings.applyToHeader && specSettings.alignment ? specSettings.alignment : headerAlignment;

                let header = headerRow.insertCell();
                header.textContent = displayName;
                header.className = 'table-header-cell';
                header.style.width = \`\${columnWidth}px\`;
                header.style.minWidth = \`\${columnWidth}px\`;
                header.style.maxWidth = \`\${columnWidth}px\`;
                applyRowSquash(header, headerRowHeight, headerFontSize, headerWordWrap);
                header.style.fontWeight = headerBold ? "bold" : "normal";
                header.style.fontStyle = headerItalic ? "italic" : "normal";
                header.style.textDecoration = headerUnderline ? "underline" : "none";
                header.style.fontFamily = headerFontFamily;
                header.style.color = effectiveColor;
                header.style.textAlign = effectiveAlign;
                header.style.borderRight = vertBorderValue;
                header.style.backgroundColor = effectiveBg;`;

code = code.replace(oldHeaderLoop, newHeaderLoop);

fs.writeFileSync('B:/VS Code Files/Visuals/timTable/src/visual.ts', code);
console.log('Fixed the two main bugs.');
