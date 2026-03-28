$file = 'B:\VS Code Files\Visuals\timTable\src\visual.ts'
$content = Get-Content $file -Raw

# 1. Add settings variable
$content = $content -replace 'valueCFSettings.slices = \[\]; // Will be populated dynamically per-measure', "valueCFSettings.slices = []; // Will be populated dynamically per-measure
        const valueBgCFSettings = this.visualSettings.valueBackgroundConditionalFormatting;
        valueBgCFSettings.slices = []; // Will be populated dynamically per-measure"

# 2. Add slice logic
$oldSlice = '              valueCFSettings.slices.push\(new formattingSettings.ColorPicker\(\{[^}]+\}\)\);'
$newSlice = "$&

              const defaultMeasureBgColor = dataViewObjects.getFillColor(
                  valueColumn.source.objects || {},
                  { objectName: "valueBackgroundConditionalFormatting", propertyName: "backgroundColor" },
                  backgroundColor
              );
              valueBgCFSettings.slices.push(new formattingSettings.ColorPicker({
                  name: "backgroundColor",
                  displayName: displayName + " Background Color",
                  value: { value: defaultMeasureBgColor },
                  visible: true,
                  selector: compositeSelector,
                  altConstantSelector: { metadata: queryName },
                  instanceKind: powerbi.VisualEnumerationInstanceKinds.ConstantOrRule
              }));"
$content = [regex]::Replace($content, $oldSlice, $newSlice)

# 3. Add defaultMeasureBgColor calculation
$oldDefault = '(?m)const defaultMeasureTextColor = dataViewObjects\.getFillColor\(\s*valueColumn\.source\.objects \|\| \{\},\s*\{ objectName: "valueConditionalFormatting", propertyName: "textColor" \},\s*\(typeof isEvenRow !== ''undefined''\) \? \(isEvenRow \? textColor : alternateTextColor\) : textColor\s*\);'
$newDefault = "$&

                    const defaultMeasureBgColor = dataViewObjects.getFillColor(
                        valueColumn.source.objects || {},
                        { objectName: "valueBackgroundConditionalFormatting", propertyName: "backgroundColor" },
                        (typeof isEvenRow !== 'undefined') ? (isEvenRow ? backgroundColor : alternateBackgroundColor) : backgroundColor
                    );"
$content = [regex]::Replace($content, $oldDefault, $newDefault)

# 4. Add row evaluation logic
$oldRow1 = '(?m)let cellTextColor = defaultMeasureTextColor;\s*if \(valueColumn\.objects && valueColumn\.objects\[i\]\) \{\s*const cfColor = dataViewObjects\.getFillColor\(\s*valueColumn\.objects\[i\],\s*\{ objectName: "valueConditionalFormatting", propertyName: "textColor" \}\s*\);\s*if \(cfColor\) \{\s*cellTextColor = cfColor;\s*\}\s*\}'
$newRow1 = "$&

                    let cellBackgroundColor = defaultMeasureBgColor;
                    if (valueColumn.objects && valueColumn.objects[i]) {
                        const cfBgColor = dataViewObjects.getFillColor(
                            valueColumn.objects[i],
                            { objectName: "valueBackgroundConditionalFormatting", propertyName: "backgroundColor" }
                        );
                        if (cfBgColor) {
                            cellBackgroundColor = cfBgColor;
                        }
                    }"
$content = [regex]::Replace($content, $oldRow1, $newRow1)

$oldRow2 = '(?m)let cellTextColor = defaultMeasureTextColor;\s*if \(valueColumn\.objects && valueColumn\.objects\[i\]\) \{\s*const cfColor = dataViewObjects\.getFillColor\(\s*valueColumn\.objects\[i\],\s*\{ objectName: "valueConditionalFormatting", propertyName: "textColor" \}\s*\);\s*if \(cfColor\) cellTextColor = cfColor;\s*\}'
$newRow2 = "$&

                    let cellBackgroundColor = defaultMeasureBgColor;
                    if (valueColumn.objects && valueColumn.objects[i]) {
                        const cfBgColor = dataViewObjects.getFillColor(
                            valueColumn.objects[i],
                            { objectName: "valueBackgroundConditionalFormatting", propertyName: "backgroundColor" }
                        );
                        if (cfBgColor) cellBackgroundColor = cfBgColor;
                    }"
$content = [regex]::Replace($content, $oldRow2, $newRow2)

# 5. Apply the cellBackgroundColor
$oldApply = '(?m)cell\.style\.backgroundColor = rowBgColor;(\r?\n\s*)cell\.style\.color = cellTextColor;(\r?\n\s*)cell\.style\.overflow = "hidden";(\r?\n\s*)cell\.style\.textOverflow = "ellipsis";(\r?\n\s*)let specSettings = measureSettingsList\[measureIndex\];(\r?\n\s*)let specRowBgColor = isEvenRow \? (\r?\n\s*)\(specSettings\.backgroundColor !== undefined \? specSettings\.backgroundColor : rowBgColor\) : (\r?\n\s*)\(specSettings\.alternateBackgroundColor !== undefined \? specSettings\.alternateBackgroundColor : rowBgColor\);(\r?\n\s*)let specCellTextColor = isEvenRow \? (\r?\n\s*)\(specSettings\.textColor !== undefined \? specSettings\.textColor : cellTextColor\) : (\r?\n\s*)\(specSettings\.alternateTextColor !== undefined \? specSettings\.alternateTextColor : cellTextColor\);(\r?\n\s*)let effectiveBg = specSettings\.applyToValues \? specRowBgColor : rowBgColor;'
$newApply = 'cell.style.backgroundColor = cellBackgroundColor;.style.color = cellTextColor;.style.overflow = "hidden";.style.textOverflow = "ellipsis"; specSettings = measureSettingsList[measureIndex]; specRowBgColor = isEvenRow ? (specSettings.backgroundColor !== undefined ? specSettings.backgroundColor : cellBackgroundColor) : (specSettings.alternateBackgroundColor !== undefined ? specSettings.alternateBackgroundColor : cellBackgroundColor); specCellTextColor = isEvenRow ? (specSettings.textColor !== undefined ? specSettings.textColor : cellTextColor) : (specSettings.alternateTextColor !== undefined ? specSettings.alternateTextColor : cellTextColor); effectiveBg = specSettings.applyToValues ? specRowBgColor : cellBackgroundColor;'

$content = [regex]::Replace($content, $oldApply, $newApply)

Set-Content -Path $file -Value $content -NoNewline
