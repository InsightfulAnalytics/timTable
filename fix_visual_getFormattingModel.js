const fs = require('fs');
let code = fs.readFileSync('B:/VS Code Files/Visuals/timTable/src/visual.ts', 'utf8');

const regex = /public getFormattingModel\(\)[\s\S]*?buildFormattingModel\(this\.visualSettings\);\n\s*\}/;

const replacement = `public getFormattingModel(): powerbi.visuals.FormattingModel {
        const specificCol = this.visualSettings.specificColumn;
        if (this.dataView && this.dataView.categorical && this.dataView.categorical.values) {
            const values = this.dataView.categorical.values;
            const items = values.map(v => {
                return {
                    value: v.source.queryName,
                    displayName: v.source.displayName || v.source.queryName
                };
            });
            if (items.length > 0) {
                specificCol.series.items = items;
                
                let savedSeries: string | undefined = undefined;
                const globalObjs = this.dataView.metadata.objects;
                if (globalObjs && globalObjs["specificColumn"]) {
                    savedSeries = dataViewObjects.getValue(globalObjs, { objectName: "specificColumn", propertyName: "series" }, undefined) as string | undefined;
                }

                if (savedSeries && items.find(i => String(i.value) === savedSeries)) {
                    specificCol.series.value = items.find(i => String(i.value) === savedSeries);
                } else if (!specificCol.series.value || !items.find(i => String(i.value) === String(specificCol.series.value.value))) {
                    specificCol.series.value = items[0];
                }
                
                const selectedQueryName = String(specificCol.series.value.value);
                const selectedValueColumn = values.find(v => v.source.queryName === selectedQueryName);
                
                if (selectedValueColumn) {
                    const objs = selectedValueColumn.source.objects || {};
                    
                    specificCol.applyToHeader.selector = { metadata: selectedQueryName };
                    specificCol.applyToTotal.selector = { metadata: selectedQueryName };
                    specificCol.applyToValues.selector = { metadata: selectedQueryName };
                    specificCol.textColor.selector = { metadata: selectedQueryName };
                    specificCol.backgroundColor.selector = { metadata: selectedQueryName };
                    specificCol.alternateTextColor.selector = { metadata: selectedQueryName };
                    specificCol.alternateBackgroundColor.selector = { metadata: selectedQueryName };
                    specificCol.alignment.selector = { metadata: selectedQueryName };
                    specificCol.displayUnits.selector = { metadata: selectedQueryName };
                    specificCol.decimalPlaces.selector = { metadata: selectedQueryName };
                    specificCol.textWrap.selector = { metadata: selectedQueryName };
                    specificCol.font.fontFamily.selector = { metadata: selectedQueryName };
                    specificCol.font.fontSize.selector = { metadata: selectedQueryName };
                    specificCol.font.bold.selector = { metadata: selectedQueryName };
                    specificCol.font.italic.selector = { metadata: selectedQueryName };
                    specificCol.font.underline.selector = { metadata: selectedQueryName };
                    
                    specificCol.applyToHeader.value = dataViewObjects.getValue(objs, { objectName: "specificColumn", propertyName: "applyToHeader" }, true);
                    specificCol.applyToTotal.value = dataViewObjects.getValue(objs, { objectName: "specificColumn", propertyName: "applyToTotal" }, true);
                    specificCol.applyToValues.value = dataViewObjects.getValue(objs, { objectName: "specificColumn", propertyName: "applyToValues" }, true);
                    
                    let tc = dataViewObjects.getFillColor(objs, { objectName: "specificColumn", propertyName: "textColor" }, undefined);
                    if (tc) specificCol.textColor.value = { value: tc };
                    
                    let bc = dataViewObjects.getFillColor(objs, { objectName: "specificColumn", propertyName: "backgroundColor" }, undefined);
                    if (bc) specificCol.backgroundColor.value = { value: bc };

                    let atc = dataViewObjects.getFillColor(objs, { objectName: "specificColumn", propertyName: "alternateTextColor" }, undefined);
                    if (atc) specificCol.alternateTextColor.value = { value: atc };

                    let abc = dataViewObjects.getFillColor(objs, { objectName: "specificColumn", propertyName: "alternateBackgroundColor" }, undefined);
                    if (abc) specificCol.alternateBackgroundColor.value = { value: abc };
                    
                    specificCol.alignment.value = dataViewObjects.getValue(objs, { objectName: "specificColumn", propertyName: "alignment" }, "left") as string;
                    specificCol.displayUnits.value = dataViewObjects.getValue(objs, { objectName: "specificColumn", propertyName: "displayUnits" }, 0) as number;
                    specificCol.decimalPlaces.value = dataViewObjects.getValue(objs, { objectName: "specificColumn", propertyName: "decimalPlaces" }, 1) as number;
                    specificCol.textWrap.value = dataViewObjects.getValue(objs, { objectName: "specificColumn", propertyName: "textWrap" }, false) as boolean;
                    
                    specificCol.font.fontFamily.value = dataViewObjects.getValue(objs, { objectName: "specificColumn", propertyName: "fontFamily" }, "Arial, sans-serif") as string;
                    specificCol.font.fontSize.value = dataViewObjects.getValue(objs, { objectName: "specificColumn", propertyName: "fontSize" }, 12) as number;
                    specificCol.font.bold.value = dataViewObjects.getValue(objs, { objectName: "specificColumn", propertyName: "bold" }, false) as boolean;
                    specificCol.font.italic.value = dataViewObjects.getValue(objs, { objectName: "specificColumn", propertyName: "italic" }, false) as boolean;
                    specificCol.font.underline.value = dataViewObjects.getValue(objs, { objectName: "specificColumn", propertyName: "underline" }, false) as boolean;
                }
                
            } else {
                specificCol.series.items = [{ value: "None", displayName: "None" }];
                specificCol.series.value = { value: "None", displayName: "None" };
            }
        } else {
            specificCol.series.items = [{ value: "None", displayName: "None" }];
            specificCol.series.value = { value: "None", displayName: "None" };
        }
        return this.formattingSettingsService.buildFormattingModel(this.visualSettings);
    }`;

if (!regex.test(code)) {
    console.error('Could not match getFormattingModel in visual.ts');
    process.exit(1);
}
code = code.replace(regex, replacement);

fs.writeFileSync('B:/VS Code Files/Visuals/timTable/src/visual.ts', code);
console.log('Fixed getFormattingModel in visual.ts');
