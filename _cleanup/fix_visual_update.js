const fs = require('fs');
let code = fs.readFileSync('B:/VS Code Files/Visuals/timTable/src/visual.ts', 'utf8');

// We need to inject the measureSettingsList extraction inside update(), right after values.forEach
const measureSettingsCode = `
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

          let measureSettingsList: MeasureSpecificSettings[] = [];

          values.forEach((valueColumn) => {
              measureHeaders.push(valueColumn.source.displayName || "");
              let obj = valueColumn.source.objects?.specificColumn;
              let settings: MeasureSpecificSettings = {
                  textColor: obj && obj.textColor ? dataViewObjects.getFillColorByPropertyName(obj, "textColor") : undefined,
                  backgroundColor: obj && obj.backgroundColor ? dataViewObjects.getFillColorByPropertyName(obj, "backgroundColor") : undefined,
                  alignment: obj && obj.alignment ? dataViewObjects.getValue(obj, "alignment", undefined) : undefined,
                  applyToHeader: dataViewObjects.getValue(obj, "applyToHeader", false),
                  applyToValues: dataViewObjects.getValue(obj, "applyToValues", false),
                  applyToTotal: dataViewObjects.getValue(obj, "applyToTotal", false),
                  displayUnits: dataViewObjects.getValue(obj, "displayUnits", 0),
                  decimalPlaces: dataViewObjects.getValue(obj, "decimalPlaces", 1)
              };
              measureSettingsList.push(settings);
          });
`;

code = code.replace(/          let measureHeaders: string\[\] = \[\];\s*values\.forEach\(\(valueColumn\) => \{\s*measureHeaders\.push\(valueColumn\.source\.displayName \|\| ""\);\s*\}\);/, measureSettingsCode);

fs.writeFileSync('B:/VS Code Files/Visuals/timTable/src/visual.ts', code);
console.log('Done injecting measureSettingsList');
