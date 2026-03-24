const fs = require('fs');
let code = fs.readFileSync('B:/VS Code Files/Visuals/timTable/src/visual.ts', 'utf8');

const vars = ['categoryHeader', 'header', 'measureHeader', 'catHeader', 'totalHeader'];

for (const v of vars) {
    const search = new RegExp(`(\\s*)(${v}\\.style\\.fontWeight = headerBold \\? "bold" : "normal";)`, 'g');
    const replace = `$1$2$1${v}.style.fontStyle = headerItalic ? "italic" : "normal";$1${v}.style.textDecoration = headerUnderline ? "underline" : "none";$1${v}.style.fontFamily = headerFontFamily;$1${v}.style.color = headerTextColor;$1${v}.style.textAlign = headerAlignment;`;
    code = code.replace(search, replace);
}

fs.writeFileSync('B:/VS Code Files/Visuals/timTable/src/visual.ts', code);
console.log('Done visual styles update');
