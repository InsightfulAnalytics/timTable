const fs = require('fs');
let code = fs.readFileSync('B:/VS Code Files/Visuals/timTable/src/visual.ts', 'utf8');

// Replace tableSettings occurrences with columnHeadersSettings where appropriate
code = code.replace(/const headerWordWrap = tableSettings\.headerWordWrap\?\.value \|\| false;/g, 'const columnHeadersSettings = this.visualSettings.columnHeaders;\n        const headerWordWrap = columnHeadersSettings.textWrap?.value || false;');

code = code.replace(/const headerRowHeight = tableSettings\.headerRowHeight\.value;/g, 'const headerRowHeight = columnHeadersSettings.headerRowHeight.value;');

code = code.replace(/const headerFontSize = tableSettings\.headerFontSize\.value;/g, 'const headerFontSize = columnHeadersSettings.font.fontSize.value;');

code = code.replace(/const headerBold = tableSettings\.headerBold\.value;/g, 'const headerBold = columnHeadersSettings.font.bold.value;\n        const headerItalic = columnHeadersSettings.font.italic.value;\n        const headerUnderline = columnHeadersSettings.font.underline.value;\n        const headerFontFamily = columnHeadersSettings.font.fontFamily.value;\n        const headerAlignment = columnHeadersSettings.alignment.value;');

code = code.replace(/const headerBackgroundColor = tableSettings\.headerBackgroundColor\.value\.value;/g, 'const headerBackgroundColor = columnHeadersSettings.backgroundColor.value.value;\n        const headerTextColor = columnHeadersSettings.textColor.value.value;');

fs.writeFileSync('B:/VS Code Files/Visuals/timTable/src/visual.ts', code);
console.log('Done visual.ts update');
