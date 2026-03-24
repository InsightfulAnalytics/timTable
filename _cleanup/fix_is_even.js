const fs = require('fs');
let visual = fs.readFileSync('B:\\VS Code Files\\Visuals\\timTable\\src\\visual.ts', 'utf8');

const toReplace = `            const defaultMeasureTextColor = dataViewObjects.getFillColor(
                        valueColumn.source.objects || {},
                        { objectName: "valueConditionalFormatting", propertyName: "textColor" },
                        (typeof isEvenRow !== 'undefined') ? (isEvenRow ? textColor : alternateTextColor) : textColor
                    );`;
const replacement = `            const defaultMeasureTextColor = dataViewObjects.getFillColor(
                        valueColumn.source.objects || {},
                        { objectName: "valueConditionalFormatting", propertyName: "textColor" },
                        textColor
                    );`;

visual = visual.replace(toReplace, replacement);

fs.writeFileSync('B:\\VS Code Files\\Visuals\\timTable\\src\\visual.ts', visual);
console.log('Done');
