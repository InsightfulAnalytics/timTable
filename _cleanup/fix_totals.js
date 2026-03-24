const fs = require('fs');

let c = fs.readFileSync('src/visual.ts', 'utf-8');

// The compute min and max values for data bars is before the if switchValuesToRows block.
let old_compute_mins = \        // Compute min and max values for data bars
        let measureMins: number[] = new Array(values.length).fill(0);
        let measureMaxs: number[] = new Array(values.length).fill(0);
        values.forEach((valueColumn, measureIndex) => {
            let numValues = valueColumn.values.filter(v => v !== null && v !== undefined).map(v => Number(v));
            if (numValues.length > 0) {
                measureMins[measureIndex] = Math.min(0, ...numValues); // Standard data bars anchor to 0
                measureMaxs[measureIndex] = Math.max(0, ...numValues);
            }
        });\;

let new_compute_mins = \        // Compute min and max values for data bars AND calculate Totals
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

c = c.replace(old_compute_mins, new_compute_mins);

// We need to remove the other totals declaration
c = c.replace('let totals: number[] = new Array(values.length).fill(0);', '');

// And remove the simple total sum from both branches
c = c.replace('totals[measureIndex] += numValue;', '');
c = c.replace('totals[measureIndex] += numValue;', ''); // it appears in both branches possibly

fs.writeFileSync('src/visual.ts', c, 'utf-8');
console.log("Fixed totals logic");
