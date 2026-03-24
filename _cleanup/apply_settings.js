const fs = require('fs');
let code = fs.readFileSync('B:/VS Code Files/Visuals/timTable/src/visual.ts', 'utf8');

// 1. apply header specific settings for !switchValuesToRows
code = code.replace(/header\.style\.fontFamily = headerFontFamily;/g, 'header.style.fontFamily = headerFontFamily;');

code = code.replace(/values\.forEach\(\(valCol, i\) => \{\n\s*let header = headerRow\.insertCell\(\);\n\s*header\.textContent = measureHeaders\[i\];\n\s*header\.className = 'table-header-cell';\n\s*header\.style\.width = \`\$\{columnWidth\}px\`;\n\s*header\.style\.minWidth = \`\$\{columnWidth\}px\`;\n\s*header\.style\.maxWidth = \`\$\{columnWidth\}px\`;/g, 
`values.forEach((valCol, i) => {
    let header = headerRow.insertCell();
    header.textContent = measureHeaders[i];
    header.className = 'table-header-cell';
    header.style.width = \`\${columnWidth}px\`;
    header.style.minWidth = \`\${columnWidth}px\`;
    header.style.maxWidth = \`\${columnWidth}px\`;

    let specSettings = measureSettingsList[i];
    let effectiveBg = specSettings.applyToHeader && specSettings.backgroundColor ? specSettings.backgroundColor : headerBgColor;
    let effectiveColor = specSettings.applyToHeader && specSettings.textColor ? specSettings.textColor : headerTextColor;
    let effectiveAlign = specSettings.applyToHeader && specSettings.alignment ? specSettings.alignment : headerAlignment;
`);

code = code.replace(/header\.style\.color = headerTextColor;\n\s*header\.style\.textAlign = headerAlignment;\n\s*header\.style\.borderRight = vertBorderValue;\n\s*header\.style\.backgroundColor = headerBgColor;/g,
`header.style.color = effectiveColor;
    header.style.textAlign = effectiveAlign;
    header.style.borderRight = vertBorderValue;
    header.style.backgroundColor = effectiveBg;`);

// 2. apply values specific settings for !switchValuesToRows
code = code.replace(/values\.forEach\(\(valCol, i\) => \{\n\s*let cell = row\.insertCell\(\);\n\s*let val = valCol\.values\[rowIndex\];/g,
`values.forEach((valCol, i) => {
    let cell = row.insertCell();
    let val = valCol.values[rowIndex];
    let specSettings = measureSettingsList[i];
    let effectiveBg = specSettings.applyToValues && specSettings.backgroundColor ? specSettings.backgroundColor : rowBgColor;
    let effectiveColor = specSettings.applyToValues && specSettings.textColor ? specSettings.textColor : cellTextColor;
    let effectiveAlign = specSettings.applyToValues && specSettings.alignment ? specSettings.alignment : "right";
`);

code = code.replace(/cell\.style\.backgroundColor = rowBgColor;\n\s*cell\.style\.color = cellTextColor;/g,
`cell.style.backgroundColor = effectiveBg;
    cell.style.color = effectiveColor;`);

// ensure we add textAlign if not there
code = code.replace(/cell\.style\.whiteSpace = valueWordWrap \? "normal" : "nowrap";/g, 'cell.style.whiteSpace = valueWordWrap ? "normal" : "nowrap";\n    cell.style.textAlign = effectiveAlign;');

// 3. apply total specific settings for !switchValuesToRows
code = code.replace(/values\.forEach\(\(valCol, i\) => \{\n\s*let cell = totalRow\.insertCell\(\);/g,
`values.forEach((valCol, i) => {
    let cell = totalRow.insertCell();
    let specSettings = measureSettingsList[i];
    let effectiveBg = specSettings.applyToTotal && specSettings.backgroundColor ? specSettings.backgroundColor : totalBgColor;
    let effectiveColor = specSettings.applyToTotal && specSettings.textColor ? specSettings.textColor : totalRowTextColor;
    let effectiveAlign = specSettings.applyToTotal && specSettings.alignment ? specSettings.alignment : "right";
`);

code = code.replace(/cell\.style\.backgroundColor = totalBgColor; cell\.style\.color = totalRowTextColor;/g,
`cell.style.backgroundColor = effectiveBg;
    cell.style.color = effectiveColor;`);

code = code.replace(/cell\.style\.whiteSpace = totalRowWordWrap \? "normal" : "nowrap";/g, 'cell.style.whiteSpace = totalRowWordWrap ? "normal" : "nowrap";\n    cell.style.textAlign = effectiveAlign;');

fs.writeFileSync('B:/VS Code Files/Visuals/timTable/src/visual.ts', code);
console.log('Done apply_settings part 1');
