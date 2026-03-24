const fs = require('fs');
let code = fs.readFileSync('B:/VS Code Files/Visuals/timTable/src/visual.ts', 'utf8');
let lines = code.split('\n');

// 730
lines[728] = `
                    let specSettings = measureSettingsList[i];
                    let effectiveBg = specSettings.applyToValues && specSettings.backgroundColor ? specSettings.backgroundColor : rowBgColor;
                    let effectiveColor = specSettings.applyToValues && specSettings.textColor ? specSettings.textColor : cellTextColor;
                    let effectiveAlign = specSettings.applyToValues && specSettings.alignment ? specSettings.alignment : "right";
                    cell.style.backgroundColor = effectiveBg;
                    cell.style.color = effectiveColor;
`;

// 788-793
lines[787] = `
                let specSettings = measureSettingsList[i];
                let effectiveBg = specSettings.applyToTotal && specSettings.backgroundColor ? specSettings.backgroundColor : totalBgColor;
                let effectiveColor = specSettings.applyToTotal && specSettings.textColor ? specSettings.textColor : totalRowTextColor;
                let effectiveAlign = specSettings.applyToTotal && specSettings.alignment ? specSettings.alignment : "right";
                cell.style.backgroundColor = effectiveBg;
`;
lines[788] = `                cell.style.color = effectiveColor;`;

// 1158
lines[1156] = `
                    let specSettings = measureSettingsList[i];
                    let effectiveBg = specSettings.applyToValues && specSettings.backgroundColor ? specSettings.backgroundColor : rowBgColor;
                    let effectiveColor = specSettings.applyToValues && specSettings.textColor ? specSettings.textColor : cellTextColor;
                    let effectiveAlign = specSettings.applyToValues && specSettings.alignment ? specSettings.alignment : "right";
                    cell.style.backgroundColor = effectiveBg;
                    cell.style.color = effectiveColor;
`;

fs.writeFileSync('B:/VS Code Files/Visuals/timTable/src/visual.ts', lines.join('\n'));
console.log('Fixed lines explicitly');
