const fs = require('fs');
let code = fs.readFileSync('B:/VS Code Files/Visuals/timTable/src/visual.ts', 'utf8');

// add private dataView
code = code.replace(/private visualSettings: VisualSettings;/g, 'private visualSettings: VisualSettings;\n    private dataView: DataView;');

// populate dataView in update
code = code.replace(/if \(!options\.dataViews \|\| options\.dataViews\.length === 0\) \{/g, 'this.dataView = options.dataViews[0];\n\n        if (!options.dataViews || options.dataViews.length === 0) {');

// update getFormattingModel
code = code.replace(/public getFormattingModel\(\): powerbi\.visuals\.FormattingModel \{\s*return this\.formattingSettingsService\.buildFormattingModel\(this\.visualSettings\);\s*\}/g, 
`public getFormattingModel(): powerbi.visuals.FormattingModel {
        const specificCol = this.visualSettings.specificColumn;
        if (this.dataView && this.dataView.categorical && this.dataView.categorical.values) {
            const values = this.dataView.categorical.values;
            const items = values.map(v => {
                return {
                    value: v.source.displayName,
                    displayName: v.source.displayName
                };
            });
            if (items.length > 0) {
                specificCol.series.items = items;
                // If the current value is not in items, set it to the first item
                if (!specificCol.series.value || !items.find(i => i.value === specificCol.series.value.value)) {
                    specificCol.series.value = items[0];
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
    }`);

fs.writeFileSync('B:/VS Code Files/Visuals/timTable/src/visual.ts', code);
console.log('Done visual.ts specificColumn update');
