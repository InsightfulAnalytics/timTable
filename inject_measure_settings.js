const fs = require('fs');
let code = fs.readFileSync('B:/VS Code Files/Visuals/timTable/src/visual.ts', 'utf8');

const interfaceDef = `
interface MeasureSpecificSettings {
    textColor: string | undefined;
    backgroundColor: string | undefined;
    alignment: string | undefined;
    applyToHeader: boolean;
    applyToValues: boolean;
    applyToTotal: boolean;
    displayUnits: number;
    decimalPlaces: number;
}
`;

const measureSettingsInit = `let measureSettingsList: MeasureSpecificSettings[] = [];\n          values.forEach((valueColumn) => {`;

const measureSettingsPopulate = `
              let specObj = valueColumn.source.objects?.specificColumn;
              let settings: MeasureSpecificSettings = {
                  textColor: specObj && specObj.textColor && specObj.textColor.solid ? specObj.textColor.solid.color : undefined,
                  backgroundColor: specObj && specObj.backgroundColor && specObj.backgroundColor.solid ? specObj.backgroundColor.solid.color : undefined,
                  alignment: specObj && specObj.alignment ? String(specObj.alignment) : undefined,
                  applyToHeader: specObj && specObj.applyToHeader !== undefined ? Boolean(specObj.applyToHeader) : true,
                  applyToValues: specObj && specObj.applyToValues !== undefined ? Boolean(specObj.applyToValues) : true,
                  applyToTotal:  specObj && specObj.applyToTotal  !== undefined ? Boolean(specObj.applyToTotal)  : true,
                  displayUnits:  specObj && specObj.displayUnits  !== undefined ? Number(specObj.displayUnits)   : 0,
                  decimalPlaces: specObj && specObj.decimalPlaces !== undefined ? Number(specObj.decimalPlaces)  : 1
              };
              measureSettingsList.push(settings);
`;

code = code.replace(/values\.forEach\(\(valueColumn\) => \{/g, interfaceDef + '\n' + measureSettingsInit + measureSettingsPopulate);

fs.writeFileSync('B:/VS Code Files/Visuals/timTable/src/visual.ts', code);
console.log('Done injecting measureSettingsList');
