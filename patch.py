import sys

with open('src/visual.ts', 'r', encoding='utf8') as f:
    text = f.read()

old_block = '''                            const borderColor = dataViewObjects.getFillColor(objects, { objectName: "dataBarsFormatting", propertyName: "borderColor" }, "#000000");
                            const minValueObj = dataViewObjects.getValue<number>(objects, { objectName: "dataBarsFormatting", propertyName: "minValue" }, null);
                            const maxValueObj = dataViewObjects.getValue<number>(objects, { objectName: "dataBarsFormatting", propertyName: "maxValue" }, null);
                            const labelsOutside = dataViewObjects.getValue<boolean>(objects, { objectName: "dataBarsFormatting", propertyName: "labelsOutside" }, false);'''

new_block = '''                            const borderColor = dataViewObjects.getFillColor(objects, { objectName: "dataBarsFormatting", propertyName: "borderColor" }, "#000000");
                            const axisTypeRaw = dataViewObjects.getValue<any>(objects, { objectName: "dataBarsFormatting", propertyName: "axisType" }, "Amount");
                            const axisType = typeof axisTypeRaw === "string" ? axisTypeRaw : (axisTypeRaw.value || "Amount");
                            const minValueObj = dataViewObjects.getValue<number>(objects, { objectName: "dataBarsFormatting", propertyName: "minValue" }, null);
                            const maxValueObj = dataViewObjects.getValue<number>(objects, { objectName: "dataBarsFormatting", propertyName: "maxValue" }, null);
                            const labelsOutside = dataViewObjects.getValue<boolean>(objects, { objectName: "dataBarsFormatting", propertyName: "labelsOutside" }, false);'''

text = text.replace(old_block, new_block)

old_calc = '''                            const min = minValueObj !== null && minValueObj !== undefined ? minValueObj : measureMins[measureIndex];
                            const max = maxValueObj !== null && maxValueObj !== undefined ? maxValueObj : measureMaxs[measureIndex];'''

new_calc = '''                            let min_raw = measureMins[measureIndex];
                            let max_raw = measureMaxs[measureIndex];
                            let min = min_raw;
                            let max = max_raw;
                            
                            let domainRange = max_raw - min_raw;
                            if (domainRange <= 0) domainRange = 1;
                            
                            if (minValueObj !== null && minValueObj !== undefined) {
                                if (axisType === "Percentage") {
                                    min = min_raw - domainRange * (minValueObj / 100);
                                } else {
                                    min = minValueObj;
                                }
                            }
                            
                            if (maxValueObj !== null && maxValueObj !== undefined) {
                                if (axisType === "Percentage") {
                                    max = max_raw + domainRange * (maxValueObj / 100);
                                } else {
                                    max = maxValueObj;
                                }
                            }'''

text = text.replace(old_calc, new_calc)

with open('src/visual.ts', 'w', encoding='utf8') as f:
    f.write(text)
