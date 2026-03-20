const fs = require('fs');

let c = fs.readFileSync('src/visual.ts', 'utf-8');

const regexOldMins = /\/\/ Compute min and max values for data bars[\s\S]*?measureMaxs\[measureIndex\] = Math\.max\(0, \.\.\.numValues\);\n            \}\n        \}\);/m;

const replacement = \// Compute min and max values for data bars AND calculate Totals
        let measureMins: number[] = new Array(values.length).fill(0);
        let measureMaxs: number[] = new Array(values.length).fill(0);
        let totals: number[] = new Array(values.length).fill(0);

        values.forEach((valueColumn, measureIndex) => {
            let numValues = valueColumn.values.filter(v => v !== null && v !== undefined).map(v => Number(v));
            if (numValues.length > 0) {
                measureMins[measureIndex] = Math.min(0, ...numValues); // Standard data bars anchor to 0
                measureMaxs[measureIndex] = Math.max(0, ...numValues);
            }

            const objects = valueColumn.source.objects || {};
            let totalBehaviorRaw = dataViewObjects.getValue<any>(objects, { objectName: "totals", propertyName: "totalBehavior" }, "Sum");
            const totalBehavior = typeof totalBehaviorRaw === "string" ? totalBehaviorRaw : (totalBehaviorRaw.value || "Sum");

            if (numValues.length > 0) {
                if (totalBehavior === "Sum" || totalBehavior === "Measure") {
                    totals[measureIndex] = numValues.reduce((a, b) => a + b, 0);
                } else if (totalBehavior === "Average") {
                    totals[measureIndex] = numValues.reduce((a, b) => a + b, 0) / numValues.length;
                } else if (totalBehavior === "Count") {
                    totals[measureIndex] = numValues.length;
                } else if (totalBehavior === "Count Distinct") {
                    totals[measureIndex] = new Set(numValues).size;
                } else if (totalBehavior === "Max") {
                    totals[measureIndex] = Math.max(...numValues);
                } else if (totalBehavior === "Min") {
                    totals[measureIndex] = Math.min(...numValues);
                }
            }
        });\;

c = c.replace(regexOldMins, replacement);

c = c.replace('let totals: number[] = new Array(values.length).fill(0);', '');
c = c.replace('totals[measureIndex] += numValue;', '');
c = c.replace('totals[measureIndex] += numValue;', '');

fs.writeFileSync('src/visual.ts', c, 'utf-8');
console.log("Replaced");
