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
                
                // Safely read the globally saved "series" value
                let savedSeries: string | undefined = undefined;
                const globalObjs = this.dataView.metadata.objects;
                if (globalObjs && globalObjs["specificColumn"]) {
                    savedSeries = dataViewObjects.getValue(globalObjs, { objectName: "specificColumn", propertyName: "series" }, undefined) as string | undefined;
                }

                // If we found a saved series and it exists in our items, use it
                if (savedSeries && items.find(i => String(i.value) === savedSeries)) {
                    specificCol.series.value = items.find(i => String(i.value) === savedSeries);
                } else if (!specificCol.series.value || !items.find(i => String(i.value) === String(specificCol.series.value.value))) {
                    specificCol.series.value = items[0];
                }
                
                const selectedQueryName = String(specificCol.series.value.value);
                const selectedValueColumn = values.find(v => v.source.queryName === selectedQueryName);
                
                if (selectedValueColumn) {
                    const objs = selectedValueColumn.source.objects || {};
                    
                    // Set selectors for properties
                    specificCol.applyToHeader.selector = { metadata: selectedQueryName };
                    specificCol.applyToTotal.selector = { metadata: selectedQueryName };
                    specificCol.applyToValues.selector = { metadata: selectedQueryName };
                    specificCol.textColor.selector = { metadata: selectedQueryName };
                    specificCol.backgroundColor.selector = { metadata: selectedQueryName };
                    specificCol.alignment.selector = { metadata: selectedQueryName };
                    specificCol.displayUnits.selector = { metadata: selectedQueryName };
                    specificCol.decimalPlaces.selector = { metadata: selectedQueryName };
                    
                    // Manually overwrite populated values with instance values
                    specificCol.applyToHeader.value = dataViewObjects.getValue(objs, { objectName: "specificColumn", propertyName: "applyToHeader" }, true);
                    specificCol.applyToTotal.value = dataViewObjects.getValue(objs, { objectName: "specificColumn", propertyName: "applyToTotal" }, true);
                    specificCol.applyToValues.value = dataViewObjects.getValue(objs, { objectName: "specificColumn", propertyName: "applyToValues" }, true);
                    
                    let tc = dataViewObjects.getFillColor(objs, { objectName: "specificColumn", propertyName: "textColor" }, undefined);
                    specificCol.textColor.value = tc ? { value: tc } : { value: "#00b8d4" };
                    
                    let bc = dataViewObjects.getFillColor(objs, { objectName: "specificColumn", propertyName: "backgroundColor" }, undefined);
                    specificCol.backgroundColor.value = bc ? { value: bc } : { value: "#ffffff" };
                    
                    specificCol.alignment.value = dataViewObjects.getValue(objs, { objectName: "specificColumn", propertyName: "alignment" }, "left") as string;
                    specificCol.displayUnits.value = dataViewObjects.getValue(objs, { objectName: "specificColumn", propertyName: "displayUnits" }, 0) as number;
                    specificCol.decimalPlaces.value = dataViewObjects.getValue(objs, { objectName: "specificColumn", propertyName: "decimalPlaces" }, 1) as number;
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

code = code.replace(regex, replacement);

fs.writeFileSync('B:/VS Code Files/Visuals/timTable/src/visual.ts', code);
console.log('Fixed dropdown persistence in getFormattingModel');
