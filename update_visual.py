import re

with open('src/visual.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# I need to add totalBehavior parsing to measureHeaders loop in visual.ts

old_measure_header_loop = '''            // Build dynamic settings slice for this measure
            const queryName = valueColumn.source.queryName;'''

new_measure_header_loop = '''            // Build dynamic settings slice for this measure
            const queryName = valueColumn.source.queryName;
            
            // Total settings per measure
            const objects = valueColumn.source.objects || {};
            let totalBehaviorRaw = dataViewObjects.getValue<any>(objects, { objectName: "totals", propertyName: "totalBehavior" }, "Sum");
            const totalBehavior = typeof totalBehaviorRaw === "string" ? totalBehaviorRaw : (totalBehaviorRaw.value || "Sum");
            
            const totalBehaviorItems = [
                { value: "Measure", displayName: "Measure" },
                { value: "Sum", displayName: "Sum" },
                { value: "Average", displayName: "Average" },
                { value: "Count", displayName: "Count" },
                { value: "Count Distinct", displayName: "Count Distinct" },
                { value: "Max", displayName: "Max" },
                { value: "Min", displayName: "Min" }
            ];
            const currentTotalBehaviorItem = totalBehaviorItems.find(x => x.value === totalBehavior) || totalBehaviorItems[1];

            totalsSettings.slices.push(new formattingSettings.ItemDropdown({
                name: "totalBehavior",
                displayName: displayName + " Total Behavior",
                value: currentTotalBehaviorItem,
                items: totalBehaviorItems,
                visible: true,
                selector: { metadata: queryName }
            }));
'''
content = content.replace(old_measure_header_loop, new_measure_header_loop)

# 2. Add totalsSettings init
old_init = '''        const tableSettings = this.visualSettings.table;'''
new_init = '''        const tableSettings = this.visualSettings.table;
        const totalsSettings = this.visualSettings.totals;
        totalsSettings.slices = [totalsSettings.showTotalRow];
        const showTotalRow = totalsSettings.showTotalRow.value;'''
content = content.replace(old_init, new_init)

# 3. Calculate totals logic update
old_totals_loop = '''                    if (value !== null && value !== undefined) {
                        let numValue = Number(value);
                        const formattedValue = numValue.toLocaleString(undefined, {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 0
                        });
                        totals[measureIndex] += numValue;'''

new_totals_loop = '''                    if (value !== null && value !== undefined) {
                        let numValue = Number(value);
                        const formattedValue = numValue.toLocaleString(undefined, {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 0
                        });'''
content = content.replace(old_totals_loop, new_totals_loop)

# Calculate totals completely
old_compute_mins = '''        // Compute min and max values for data bars
        let measureMins: number[] = new Array(values.length).fill(0);
        let measureMaxs: number[] = new Array(values.length).fill(0);
        values.forEach((valueColumn, measureIndex) => {
            let numValues = valueColumn.values.filter(v => v !== null && v !== undefined).map(v => Number(v));
            if (numValues.length > 0) {
                measureMins[measureIndex] = Math.min(0, ...numValues); // Standard data bars anchor to 0
                measureMaxs[measureIndex] = Math.max(0, ...numValues);
            }
        });'''

new_compute_mins = '''        // Compute min and max values for data bars AND Calculate totals based on selection
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
        });'''
content = content.replace(old_compute_mins, new_compute_mins)

# Remove old totals initialization
content = content.replace('let totals: number[] = new Array(values.length).fill(0);', '')


# Now wrap the total row creation with if (showTotalRow)
old_total_row_normal = '''            // Create total row
            let totalRow = this.table.insertRow();'''
new_total_row_normal = '''            // Create total row
            if (showTotalRow) {
                let totalRow = this.table.insertRow();'''
content = content.replace(old_total_row_normal, new_total_row_normal)

old_total_row_normal_end = '''                if (valueWordWrap) {
                    cell.style.wordBreak = "break-word";
                }
            });'''
new_total_row_normal_end = '''                if (valueWordWrap) {
                    cell.style.wordBreak = "break-word";
                }
            });
            }'''
# Wait, this might match too many things.
# I'll just use regex to wrap the total row creation in normal mode.
