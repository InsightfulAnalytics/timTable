import re

with open('B:/VS Code Files/Visuals/timTable/src/visual.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. settings var
content = content.replace(
    'valueCFSettings.slices = []; // Will be populated dynamically per-measure',
    'valueCFSettings.slices = []; // Will be populated dynamically per-measure\n        const valueBgCFSettings = this.visualSettings.valueBackgroundConditionalFormatting;\n        valueBgCFSettings.slices = []; // Will be populated dynamically per-measure'
)

# 2. slice logic
old_slice = r'(valueCFSettings\.slices\.push\(new formattingSettings\.ColorPicker\({[^}]+}\)\);)'
new_slice = r'\1\n\n              const defaultMeasureBgColor = dataViewObjects.getFillColor(\n                  valueColumn.source.objects || {},\n                  { objectName: "valueBackgroundConditionalFormatting", propertyName: "backgroundColor" },\n                  backgroundColor\n              );\n              valueBgCFSettings.slices.push(new formattingSettings.ColorPicker({\n                  name: "backgroundColor",\n                  displayName: displayName + " Background Color",\n                  value: { value: defaultMeasureBgColor },\n                  visible: true,\n                  selector: compositeSelector,\n                  altConstantSelector: { metadata: queryName },\n                  instanceKind: powerbi.VisualEnumerationInstanceKinds.ConstantOrRule\n              }));'
content = re.sub(old_slice, new_slice, content)

# 3. defaultMeasureBgColor
old_def = r'(const defaultMeasureTextColor = dataViewObjects\.getFillColor\(\s*valueColumn\.source\.objects \|\| \{\},\s*\{ objectName: "valueConditionalFormatting", propertyName: "textColor" \},\s*\(typeof isEvenRow !== \'undefined\'\) \? \(isEvenRow \? textColor : alternateTextColor\) : textColor\s*\);)'
new_def = r'\1\n\n                    const defaultMeasureBgColor = dataViewObjects.getFillColor(\n                        valueColumn.source.objects || {},\n                        { objectName: "valueBackgroundConditionalFormatting", propertyName: "backgroundColor" },\n                        (typeof isEvenRow !== \'undefined\') ? (isEvenRow ? backgroundColor : alternateBackgroundColor) : backgroundColor\n                    );'
content = re.sub(old_def, new_def, content)

# 4. cellBackgroundColor blocks
old_row1 = r'(let cellTextColor = defaultMeasureTextColor;\s*if \(valueColumn\.objects && valueColumn\.objects\[i\]\) \{\s*const cfColor = dataViewObjects\.getFillColor\(\s*valueColumn\.objects\[i\],\s*\{ objectName: "valueConditionalFormatting", propertyName: "textColor" \}\s*\);\s*if \(cfColor\) \{\s*cellTextColor = cfColor;\s*\}\s*\})'
new_row1 = r'\1\n\n                    let cellBackgroundColor = defaultMeasureBgColor;\n                    if (valueColumn.objects && valueColumn.objects[i]) {\n                        const cfBgColor = dataViewObjects.getFillColor(\n                            valueColumn.objects[i],\n                            { objectName: "valueBackgroundConditionalFormatting", propertyName: "backgroundColor" }\n                        );\n                        if (cfBgColor) {\n                            cellBackgroundColor = cfBgColor;\n                        }\n                    }'
content = re.sub(old_row1, new_row1, content)

old_row2 = r'(let cellTextColor = defaultMeasureTextColor;\s*if \(valueColumn\.objects && valueColumn\.objects\[i\]\) \{\s*const cfColor = dataViewObjects\.getFillColor\(\s*valueColumn\.objects\[i\],\s*\{ objectName: "valueConditionalFormatting", propertyName: "textColor" \}\s*\);\s*if \(cfColor\) cellTextColor = cfColor;\s*\n\s*\n\s*\})'
new_row2 = r'\1\n\n                    let cellBackgroundColor = defaultMeasureBgColor;\n                    if (valueColumn.objects && valueColumn.objects[i]) {\n                        const cfBgColor = dataViewObjects.getFillColor(\n                            valueColumn.objects[i],\n                            { objectName: "valueBackgroundConditionalFormatting", propertyName: "backgroundColor" }\n                        );\n                        if (cfBgColor) cellBackgroundColor = cfBgColor;\n                    }'
content = re.sub(old_row2, new_row2, content)

# 5. apply cellBackgroundColor
old_apply = r'cell\.style\.backgroundColor = rowBgColor;(\r?\n\s*)cell\.style\.color = cellTextColor;(\r?\n\s*)cell\.style\.overflow = "hidden";(\r?\n\s*)cell\.style\.textOverflow = "ellipsis";(\r?\n\s*)let specSettings = measureSettingsList\[measureIndex\];(\r?\n\s*)let specRowBgColor = isEvenRow \? (\r?\n\s*)\(specSettings\.backgroundColor !== undefined \? specSettings\.backgroundColor : rowBgColor\) : (\r?\n\s*)\(specSettings\.alternateBackgroundColor !== undefined \? specSettings\.alternateBackgroundColor : rowBgColor\);(\r?\n\s*)let specCellTextColor = isEvenRow \? (\r?\n\s*)\(specSettings\.textColor !== undefined \? specSettings\.textColor : cellTextColor\) : (\r?\n\s*)\(specSettings\.alternateTextColor !== undefined \? specSettings\.alternateTextColor : cellTextColor\);(\r?\n\s*)let effectiveBg = specSettings\.applyToValues \? specRowBgColor : rowBgColor;'
new_apply = r'cell.style.backgroundColor = cellBackgroundColor;\1cell.style.color = cellTextColor;\2cell.style.overflow = "hidden";\3cell.style.textOverflow = "ellipsis";\4let specSettings = measureSettingsList[measureIndex];\5let specRowBgColor = isEvenRow ? \6(specSettings.backgroundColor !== undefined ? specSettings.backgroundColor : cellBackgroundColor) : \7(specSettings.alternateBackgroundColor !== undefined ? specSettings.alternateBackgroundColor : cellBackgroundColor);\8let specCellTextColor = isEvenRow ? \9(specSettings.textColor !== undefined ? specSettings.textColor : cellTextColor) : \10(specSettings.alternateTextColor !== undefined ? specSettings.alternateTextColor : cellTextColor);\11let effectiveBg = specSettings.applyToValues ? specRowBgColor : cellBackgroundColor;'
content = re.sub(old_apply, new_apply, content)

with open('B:/VS Code Files/Visuals/timTable/src/visual.ts', 'w', encoding='utf-8') as f:
    f.write(content)
