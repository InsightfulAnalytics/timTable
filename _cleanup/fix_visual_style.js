const fs = require('fs');
let visual = fs.readFileSync('B:\\VS Code Files\\Visuals\\timTable\\src\\visual.ts', 'utf8');

// Update getFillColor fallback to textColor/alternateTextColor
visual = visual.replace(
    /const defaultMeasureTextColor = dataViewObjects\.getFillColor\(\s*valueColumn\.source\.objects \|\| \{\},\s*\{\s*objectName: "valueConditionalFormatting",\s*propertyName: "textColor"\s*\},\s*"#333333"\s*\);/g,
    `const defaultMeasureTextColor = dataViewObjects.getFillColor(
                        valueColumn.source.objects || {},
                        { objectName: "valueConditionalFormatting", propertyName: "textColor" },
                        (typeof isEvenRow !== 'undefined') ? (isEvenRow ? textColor : alternateTextColor) : textColor
                    );`
);

// Add styling for font family, italic, and underline wherever cell or totalCell is styled
// Let's do it right after cell.style.fontWeight = ...
visual = visual.replace(
    /cell\.style\.fontWeight = valueBold \? "bold" : "normal";/g,
    `cell.style.fontWeight = valueBold ? "bold" : "normal";
                      cell.style.fontFamily = cellFontFamily;
                      cell.style.fontStyle = cellItalic ? "italic" : "normal";
                      cell.style.textDecoration = cellUnderline ? "underline" : "none";`
);

// Same for totalCell (measure totals)
visual = visual.replace(
    /totalCell\.style\.fontWeight = totalRowBold \? "bold" : "normal";/g,
    `totalCell.style.fontWeight = totalRowBold ? "bold" : "normal";
                      totalCell.style.fontFamily = cellFontFamily;
                      totalCell.style.fontStyle = cellItalic ? "italic" : "normal";
                      // Note: totalRowUnderline is defined in table settings, so we append to it or replace.
                      // Let's keep totalRowUnderline overriding or adding to it. 
                      // In original it just set underline or none, let's keep original totalRowUnderline.`
);

// Same for measureNameCell in transposed view
visual = visual.replace(
    /measureNameCell\.style\.fontWeight = valueBold \? "bold" : "normal";/g,
    `measureNameCell.style.fontWeight = valueBold ? "bold" : "normal";
                      measureNameCell.style.fontFamily = cellFontFamily;
                      measureNameCell.style.fontStyle = cellItalic ? "italic" : "normal";
                      measureNameCell.style.textDecoration = cellUnderline ? "underline" : "none";`
);

fs.writeFileSync('B:\\VS Code Files\\Visuals\\timTable\\src\\visual.ts', visual);
console.log('Done');
