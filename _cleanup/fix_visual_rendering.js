const fs = require('fs');
let code = fs.readFileSync('B:/VS Code Files/Visuals/timTable/src/visual.ts', 'utf8');

// Update header applying rules
code = code.replace(/let effectiveBg = specSettings\.applyToHeader && specSettings\.backgroundColor \? specSettings\.backgroundColor : headerBgColor;/g,
`let effectiveBg = specSettings.applyToHeader && specSettings.backgroundColor ? specSettings.backgroundColor : headerBgColor;
                let efBold = specSettings.applyToHeader && specSettings.bold !== undefined ? specSettings.bold : headerBold;
                let efItalic = specSettings.applyToHeader && specSettings.italic !== undefined ? specSettings.italic : headerItalic;
                let efUnderline = specSettings.applyToHeader && specSettings.underline !== undefined ? specSettings.underline : headerUnderline;
                let efFontFamily = specSettings.applyToHeader && specSettings.fontFamily !== undefined ? specSettings.fontFamily : headerFontFamily;
                let efFontSize = specSettings.applyToHeader && specSettings.fontSize !== undefined ? specSettings.fontSize : headerFontSize;
                let efWordWrap = specSettings.applyToHeader && specSettings.textWrap !== undefined ? specSettings.textWrap : headerWordWrap;`);

code = code.replace(/applyRowSquash\(header, headerRowHeight, headerFontSize, headerWordWrap\);\n\s*header\.style\.fontWeight = headerBold \? "bold" : "normal";\n\s*header\.style\.fontStyle = headerItalic \? "italic" : "normal";\n\s*header\.style\.textDecoration = headerUnderline \? "underline" : "none";\n\s*header\.style\.fontFamily = headerFontFamily;/g,
`applyRowSquash(header, headerRowHeight, efFontSize, efWordWrap);
                header.style.fontWeight = efBold ? "bold" : "normal";
                header.style.fontStyle = efItalic ? "italic" : "normal";
                header.style.textDecoration = efUnderline ? "underline" : "none";
                header.style.fontFamily = efFontFamily;`);

// Update row values applying rules
code = code.replace(/let effectiveBg = specSettings\.applyToValues && specSettings\.backgroundColor \? specSettings\.backgroundColor : rowBgColor;\n\s*let effectiveColor = specSettings\.applyToValues && specSettings\.textColor \? specSettings\.textColor : cellTextColor;/g,
`let specRowBgColor = isEvenRow ? 
                        (specSettings.backgroundColor !== undefined ? specSettings.backgroundColor : rowBgColor) : 
                        (specSettings.alternateBackgroundColor !== undefined ? specSettings.alternateBackgroundColor : rowBgColor);
                    let specCellTextColor = isEvenRow ? 
                        (specSettings.textColor !== undefined ? specSettings.textColor : cellTextColor) : 
                        (specSettings.alternateTextColor !== undefined ? specSettings.alternateTextColor : cellTextColor);

                    let effectiveBg = specSettings.applyToValues ? specRowBgColor : rowBgColor;
                    let effectiveColor = specSettings.applyToValues ? specCellTextColor : cellTextColor;

                    let efBold = specSettings.applyToValues && specSettings.bold !== undefined ? specSettings.bold : valueBold;
                    let efItalic = specSettings.applyToValues && specSettings.italic !== undefined ? specSettings.italic : cellItalic;
                    let efUnderline = specSettings.applyToValues && specSettings.underline !== undefined ? specSettings.underline : cellUnderline;
                    let efFontFamily = specSettings.applyToValues && specSettings.fontFamily !== undefined ? specSettings.fontFamily : cellFontFamily;
                    let efFontSize = specSettings.applyToValues && specSettings.fontSize !== undefined ? specSettings.fontSize : cellFontSize;
                    let efWordWrap = specSettings.applyToValues && specSettings.textWrap !== undefined ? specSettings.textWrap : valueWordWrap;`);

code = code.replace(/applyRowSquash\(cell, rowHeight, cellFontSize, valueWordWrap\);\n\s*cell\.style\.fontWeight = valueBold \? "bold" : "normal";\n\s*cell\.style\.fontStyle = cellItalic \? "italic" : "normal";\n\s*cell\.style\.textDecoration = cellUnderline \? "underline" : "none";\n\s*cell\.style\.fontFamily = cellFontFamily;/g,
`applyRowSquash(cell, rowHeight, efFontSize, efWordWrap);
                    cell.style.fontWeight = efBold ? "bold" : "normal";
                    cell.style.fontStyle = efItalic ? "italic" : "normal";
                    cell.style.textDecoration = efUnderline ? "underline" : "none";
                    cell.style.fontFamily = efFontFamily;`);

code = code.replace(/cell\.style\.whiteSpace = valueWordWrap \? "normal" : "nowrap";\n\s*cell\.style\.textAlign = effectiveAlign;\n\s*if \(valueWordWrap\) \{/g,
`cell.style.whiteSpace = efWordWrap ? "normal" : "nowrap";
                    cell.style.textAlign = effectiveAlign;
                    if (efWordWrap) {`);

// Update total row applying rules
code = code.replace(/let effectiveBg = specSettings\.applyToTotal && specSettings\.backgroundColor \? specSettings\.backgroundColor : totalBgColor;\n\s*let effectiveColor = specSettings\.applyToTotal && specSettings\.textColor \? specSettings\.textColor : totalRowTextColor;/g,
`let effectiveBg = specSettings.applyToTotal && specSettings.backgroundColor ? specSettings.backgroundColor : totalBgColor;
                let effectiveColor = specSettings.applyToTotal && specSettings.textColor ? specSettings.textColor : totalRowTextColor;
                
                let efBold = specSettings.applyToTotal && specSettings.bold !== undefined ? specSettings.bold : totalRowBold;
                let efItalic = specSettings.applyToTotal && specSettings.italic !== undefined ? specSettings.italic : totalRowItalic;
                let efUnderline = specSettings.applyToTotal && specSettings.underline !== undefined ? specSettings.underline : totalRowUnderline;
                let efFontFamily = specSettings.applyToTotal && specSettings.fontFamily !== undefined ? specSettings.fontFamily : totalRowFontFamily;
                let efFontSize = specSettings.applyToTotal && specSettings.fontSize !== undefined ? specSettings.fontSize : totalRowFontSize;
                let efWordWrap = specSettings.applyToTotal && specSettings.textWrap !== undefined ? specSettings.textWrap : totalRowWordWrap;`);

code = code.replace(/applyRowSquash\(cell, totalRowHeight, totalRowFontSize, totalRowWordWrap\);\n\s*cell\.style\.fontWeight = totalRowBold \? "bold" : "normal";\n\s*cell\.style\.textDecoration = totalRowUnderline \? "underline" : "none";\n\s*cell\.style\.fontFamily = totalRowFontFamily;\n\s*cell\.style\.fontStyle = totalRowItalic \? "italic" : "normal";/g,
`applyRowSquash(cell, totalRowHeight, efFontSize, efWordWrap);
                cell.style.fontWeight = efBold ? "bold" : "normal";
                cell.style.textDecoration = efUnderline ? "underline" : "none";
                cell.style.fontFamily = efFontFamily;
                cell.style.fontStyle = efItalic ? "italic" : "normal";`);

code = code.replace(/cell\.style\.whiteSpace = totalRowWordWrap \? "normal" : "nowrap";\n\s*cell\.style\.textAlign = effectiveAlign;\n\s*if \(totalRowWordWrap\) \{/g,
`cell.style.whiteSpace = efWordWrap ? "normal" : "nowrap";
                cell.style.textAlign = effectiveAlign;
                if (efWordWrap) {`);

fs.writeFileSync('B:/VS Code Files/Visuals/timTable/src/visual.ts', code);
console.log('Fixed visual rendering styles');
