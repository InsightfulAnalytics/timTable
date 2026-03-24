const fs = require('fs');

let content = fs.readFileSync('src/visual.ts', 'utf-8');

content = content.replace(/totalHeader\.style\.width = \\px;/g, 'totalHeader.style.width = \\px\;');
content = content.replace(/totalHeader\.style\.minWidth = \\px;/g, 'totalHeader.style.minWidth = \\px\;');
content = content.replace(/totalHeader\.style\.maxWidth = \\px;/g, 'totalHeader.style.maxWidth = \\px\;');
content = content.replace(/totalHeader\.style\.borderRight = 1px solid \\;/g, 'totalHeader.style.borderRight = \1px solid \\;');

content = content.replace(/totalCell\.style\.width = \\px;/g, 'totalCell.style.width = \\px\;');
content = content.replace(/totalCell\.style\.minWidth = \\px;/g, 'totalCell.style.minWidth = \\px\;');
content = content.replace(/totalCell\.style\.maxWidth = \\px;/g, 'totalCell.style.maxWidth = \\px\;');
content = content.replace(/totalCell\.style\.borderRight = 1px solid \\;/g, 'totalCell.style.borderRight = \1px solid \\;');

fs.writeFileSync('src/visual.ts', content, 'utf-8');
console.log('Fixed syntax with node');
