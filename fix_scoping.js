const fs = require('fs');
let code = fs.readFileSync('B:/VS Code Files/Visuals/timTable/src/visual.ts', 'utf8');

// I'll replace the undefined variables by using the correct measureSettingsList[i].
// Let's find exactly the lines with effectiveBg and replace them safely.

// Line 730:
code = code.replace(/cell\.style\.backgroundColor = rowBgColor;\n\s*cell\.style\.color = cellTextColor;\n\s*cell\.style\.overflow = "hidden";\n\s*cell\.style\.textOverflow = "ellipsis";\n\s*cell\.style\.whiteSpace = valueWordWrap \? "normal" : "nowrap";\n\s*cell\.style\.textAlign = effectiveAlign;/g, 
`let specSettings = measureSettingsList[i];
                    let effectiveBg = specSettings.applyToValues && specSettings.backgroundColor ? specSettings.backgroundColor : rowBgColor;
                    let effectiveColor = specSettings.applyToValues && specSettings.textColor ? specSettings.textColor : cellTextColor;
                    let effectiveAlign = specSettings.applyToValues && specSettings.alignment ? specSettings.alignment : "right";
                    cell.style.backgroundColor = effectiveBg;
                    cell.style.color = effectiveColor;
                    cell.style.overflow = "hidden";
                    cell.style.textOverflow = "ellipsis";
                    cell.style.whiteSpace = valueWordWrap ? "normal" : "nowrap";
                    cell.style.textAlign = effectiveAlign;`);

// Line 788:
code = code.replace(/cell\.style\.backgroundColor = effectiveBg;\n\s*cell\.style\.color = effectiveColor;\n\s*cell\.style\.overflow = "hidden";\n\s*cell\.style\.textOverflow = "ellipsis";\n\s*cell\.style\.whiteSpace = totalRowWordWrap \? "normal" : "nowrap";\n\s*cell\.style\.textAlign = effectiveAlign;/g, 
`let specSettings = measureSettingsList[i];
                let effectiveBg = specSettings.applyToTotal && specSettings.backgroundColor ? specSettings.backgroundColor : totalBgColor;
                let effectiveColor = specSettings.applyToTotal && specSettings.textColor ? specSettings.textColor : totalRowTextColor;
                let effectiveAlign = specSettings.applyToTotal && specSettings.alignment ? specSettings.alignment : "right";
                cell.style.backgroundColor = effectiveBg;
                cell.style.color = effectiveColor;
                cell.style.overflow = "hidden";
                cell.style.textOverflow = "ellipsis";
                cell.style.whiteSpace = totalRowWordWrap ? "normal" : "nowrap";
                cell.style.textAlign = effectiveAlign;`);

// Line 1158 (inside else of transpose):
code = code.replace(/cell\.style\.backgroundColor = rowBgColor;\n\s*cell\.style\.color = cellTextColor;\n\s*cell\.style\.overflow = "hidden";\n\s*cell\.style\.textOverflow = "ellipsis";\n\s*cell\.style\.whiteSpace = valueWordWrap \? "normal" : "nowrap";\n\s*cell\.style\.textAlign = effectiveAlign;/g,
`let specSettings = measureSettingsList[i];
                    let effectiveBg = specSettings.applyToValues && specSettings.backgroundColor ? specSettings.backgroundColor : rowBgColor;
                    let effectiveColor = specSettings.applyToValues && specSettings.textColor ? specSettings.textColor : cellTextColor;
                    let effectiveAlign = specSettings.applyToValues && specSettings.alignment ? specSettings.alignment : "right";
                    cell.style.backgroundColor = effectiveBg;
                    cell.style.color = effectiveColor;
                    cell.style.overflow = "hidden";
                    cell.style.textOverflow = "ellipsis";
                    cell.style.whiteSpace = valueWordWrap ? "normal" : "nowrap";
                    cell.style.textAlign = effectiveAlign;`);

fs.writeFileSync('B:/VS Code Files/Visuals/timTable/src/visual.ts', code);
console.log('Done fix_scoping');
