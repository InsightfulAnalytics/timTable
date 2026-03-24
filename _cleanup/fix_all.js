const fs = require('fs');
let f = fs.readFileSync('B:/VS Code Files/Visuals/timTable/src/visual.ts', 'utf8');

// fix cellPositiveColor block
let search2 = 'let cellPositiveColor';
let end2 = 'const dataBarHeight';
let idx2 = f.indexOf(search2);
while(idx2 !== -1) {
    let e2 = f.indexOf(end2, idx2);
    let newStr = 'let cellDataBarColor = dataViewObjects.getFillColor(objects, { objectName: "dataBarsFormatting", propertyName: "dataBarColor" }, "#31b6fd");\r\n                            const matchDataBarColor = dataViewObjects.getValue<boolean>(objects, { objectName: "dataBarsFormatting", propertyName: "matchDataBarColor" }, true);\r\n                            const showZeroLine = dataViewObjects.getValue<boolean>(objects, { objectName: "dataBarsFormatting", propertyName: "showZeroLine" }, false);\r\n                            const zeroLineColor = dataViewObjects.getFillColor(objects, { objectName: "dataBarsFormatting", propertyName: "zeroLineColor" }, "#000000");\r\n                            const zeroLineTransparency = dataViewObjects.getValue<number>(objects, { objectName: "dataBarsFormatting", propertyName: "zeroLineTransparency" }, 0);\r\n                            ';
    f = f.substring(0, idx2) + newStr + f.substring(e2);
    idx2 = f.indexOf(search2, idx2 + newStr.length);
}

// fix cf check
let search3 = '// Check for conditional formatting on positive color';
let end3 = 'const min = minValueObj';
let idx3 = f.indexOf(search3);
while(idx3 !== -1) {
    let e3 = f.indexOf(end3, idx3);
    let newStr = '// Check for conditional formatting on data bar color\r\n                            if (valueColumn.objects && valueColumn.objects[i]) {\r\n                                const cfDataBarColor = dataViewObjects.getFillColor(\r\n                                    valueColumn.objects[i],\r\n                                    { objectName: "dataBarsFormatting", propertyName: "dataBarColor" }\r\n                                );\r\n                                if (cfDataBarColor) {\r\n                                    cellDataBarColor = cfDataBarColor;\r\n                                }\r\n                            }\r\n\r\n                            ';
    f = f.substring(0, idx3) + newStr + f.substring(e3);
    idx3 = f.indexOf(search3, idx3 + newStr.length);
}

fs.writeFileSync('B:/VS Code Files/Visuals/timTable/src/visual.ts', f);
console.log('Fixed second block');
