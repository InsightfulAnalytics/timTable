const fs = require('fs');
let code = fs.readFileSync('B:/VS Code Files/Visuals/timTable/src/visual.ts', 'utf8');

const formatFunction = `
        const formatNumber = (num: number, units: number, decimals: number): string => {
            let divisor = 1;
            let suffix = "";
            if (units === 0) { // Auto
                let absNum = Math.abs(num);
                if (absNum >= 1000000000000) { divisor = 1000000000000; suffix = "T"; }
                else if (absNum >= 1000000000) { divisor = 1000000000; suffix = "bn"; }
                else if (absNum >= 1000000) { divisor = 1000000; suffix = "M"; }
                else if (absNum >= 1000) { divisor = 1000; suffix = "K"; }
            } else if (units > 1) {
                divisor = units;
                if (units === 1000) suffix = "K";
                else if (units === 1000000) suffix = "M";
                else if (units === 1000000000) suffix = "bn";
                else if (units === 1000000000000) suffix = "T";
            }
            
            return (num / divisor).toLocaleString(undefined, {
                maximumFractionDigits: decimals,
                minimumFractionDigits: decimals
            }) + suffix;
        };
`;

code = code.replace(/        const getCategoryTextColor = \(rowIndex: number, dataView: DataView\): string => \{/, formatFunction + '\n        const getCategoryTextColor = (rowIndex: number, dataView: DataView): string => {');

// Fix 584 (standard values)
code = code.replace(/let numValue = Number\(value\);\n\s*const formattedValue = numValue\.toLocaleString\(undefined, \{\n\s*maximumFractionDigits: 2,\n\s*minimumFractionDigits: 0\n\s*\}\);/g, 
`let numValue = Number(value);
                        let specSettings = measureSettingsList[measureIndex];
                        const formattedValue = formatNumber(numValue, specSettings.displayUnits, specSettings.decimalPlaces);`);

// Fix 783 (standard total)
code = code.replace(/cell\.textContent = total\.toLocaleString\(undefined, \{\n\s*maximumFractionDigits: 2,\n\s*minimumFractionDigits: 0\n\s*\}\);/g, 
`let specSettings = measureSettingsList[i];
                cell.textContent = formatNumber(total, specSettings.displayUnits, specSettings.decimalPlaces);`);

// Fix 1026 (transposed values)
code = code.replace(/let numValue = Number\(value\);\n\s*const formattedValue = numValue\.toLocaleString\(undefined, \{\n\s*maximumFractionDigits: 2,\n\s*minimumFractionDigits: 0\n\s*\}\);/g,
`let numValue = Number(value);
                        let specSettings = measureSettingsList[idx];
                        const formattedValue = formatNumber(numValue, specSettings.displayUnits, specSettings.decimalPlaces);`);

// Fix 1191 (transposed total)
code = code.replace(/totalCell\.textContent = totalVal\.toLocaleString\(undefined, \{\n\s*maximumFractionDigits: 2,\n\s*minimumFractionDigits: 0\n\s*\}\);/g,
`totalCell.textContent = formatNumber(totalVal, specSettings.displayUnits, specSettings.decimalPlaces);`);

fs.writeFileSync('B:/VS Code Files/Visuals/timTable/src/visual.ts', code);
console.log('Fixed formatNumber usage');
