const fs = require('fs');
let code = fs.readFileSync('B:/VS Code Files/Visuals/timTable/src/visual.ts', 'utf8');

// The transpose branch starts with:
// if (hasCategories) { ... for (let i = 0; i < rowCount; i++) { let catHeader = headerRow.insertCell(); ... }

code = code.replace(/values\.forEach\(\(valCol, idx\) => \{\n\s*let row = this\.table\.insertRow\(\);\n\s*row\.className = 'table-data-row';\n\s*row\.style\.borderBottom = horizBorderValue;\n\s*row\.style\.height = \`\$\{valueRowHeight\}px\`;\n\s*const rowBgColor = idx % 2 === 0 \? backgroundColor : alternateBackgroundColor;\n\s*const cellTextColor = idx % 2 === 0 \? textColor : alternateTextColor;\n\n\s*let measureNameCell = row\.insertCell\(\);/g,
`values.forEach((valCol, idx) => {
    let specSettings = measureSettingsList[idx];
    
    let row = this.table.insertRow();
    row.className = 'table-data-row';
    row.style.borderBottom = horizBorderValue;
    row.style.height = \`\${valueRowHeight}px\`;
    const rowBgColor = idx % 2 === 0 ? backgroundColor : alternateBackgroundColor;
    const cellTextColor = idx % 2 === 0 ? textColor : alternateTextColor;
    
    // Header styling logic (measureNameCell is the header when transposed!)
    let headerEffectiveBg = specSettings.applyToHeader && specSettings.backgroundColor ? specSettings.backgroundColor : rowBgColor;
    let headerEffectiveColor = specSettings.applyToHeader && specSettings.textColor ? specSettings.textColor : defaultCategoryTextColor; // or some specific color
    let headerEffectiveAlign = specSettings.applyToHeader && specSettings.alignment ? specSettings.alignment : "left";

    // Value styling logic
    let effectiveBg = specSettings.applyToValues && specSettings.backgroundColor ? specSettings.backgroundColor : rowBgColor;
    let effectiveColor = specSettings.applyToValues && specSettings.textColor ? specSettings.textColor : cellTextColor;
    let effectiveAlign = specSettings.applyToValues && specSettings.alignment ? specSettings.alignment : "right";

    let measureNameCell = row.insertCell();`);

code = code.replace(/measureNameCell\.style\.backgroundColor = rowBgColor;\n\s*measureNameCell\.style\.color = defaultCategoryTextColor;/g,
`measureNameCell.style.backgroundColor = headerEffectiveBg;
    measureNameCell.style.color = headerEffectiveColor;
    measureNameCell.style.textAlign = headerEffectiveAlign;`);

code = code.replace(/for \(let i = 0; i < rowCount; i\+\+\) \{\n\s*let cell = row\.insertCell\(\);/g,
`for (let i = 0; i < rowCount; i++) {
        let cell = row.insertCell();`);

code = code.replace(/cell\.style\.backgroundColor = rowBgColor;\n\s*cell\.style\.color = cellTextColor;/g,
`cell.style.backgroundColor = effectiveBg;
        cell.style.color = effectiveColor;`);

code = code.replace(/cell\.style\.whiteSpace = valueWordWrap \? "normal" : "nowrap";\n\s*cell\.style\.textAlign = "right";/g,
`cell.style.whiteSpace = valueWordWrap ? "normal" : "nowrap";
        cell.style.textAlign = effectiveAlign;`);


// And the total row inside transpose (which is actually a column at the end!)
// values.forEach((valCol, idx) => { ... let totalCell = row.insertCell();
// Oh wait, inside transpose, the total column is added on the same row!
code = code.replace(/if \(showTotalRow\) \{\n\s*let totalCell = row\.insertCell\(\);\n\s*let totalValue = getColumnTotal\(valCol\);/g,
`if (showTotalRow) {
        let totalCell = row.insertCell();
        let totalValue = getColumnTotal(valCol);
        let totalEffectiveBg = specSettings.applyToTotal && specSettings.backgroundColor ? specSettings.backgroundColor : totalRowBackgroundColor;
        let totalEffectiveColor = specSettings.applyToTotal && specSettings.textColor ? specSettings.textColor : totalRowTextColor;
        let totalEffectiveAlign = specSettings.applyToTotal && specSettings.alignment ? specSettings.alignment : "right";
`);

code = code.replace(/totalCell\.style\.backgroundColor = totalRowBackgroundColor;\n\s*totalCell\.style\.color = totalRowTextColor;/g,
`totalCell.style.backgroundColor = totalEffectiveBg;
        totalCell.style.color = totalEffectiveColor;`);

code = code.replace(/totalCell\.style\.whiteSpace = totalRowWordWrap \? "normal" : "nowrap";\n\s*totalCell\.style\.textAlign = "right";/g,
`totalCell.style.whiteSpace = totalRowWordWrap ? "normal" : "nowrap";
        totalCell.style.textAlign = totalEffectiveAlign;`);

fs.writeFileSync('B:/VS Code Files/Visuals/timTable/src/visual.ts', code);
console.log('Done apply_settings transpose');
