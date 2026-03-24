const fs = require('fs');
let code = fs.readFileSync('src/visual.ts', 'utf8');

// The line to replace
const oldLine = 'dataBar.style.backgroundColor = numValue >= 0 ? cellPositiveColor : cellNegativeColor;';
const newLine = 'dataBar.style.backgroundColor = applyTransparency(numValue >= 0 ? cellPositiveColor : cellNegativeColor, transparency);';

code = code.split(oldLine).join(newLine);

// The line to remove
const oldOpacity = 'dataBar.style.opacity = `${(100 - transparency) / 100}`;';
code = code.split(oldOpacity).join('');

fs.writeFileSync('src/visual.ts', code);
console.log('Fixed opacity issue!');