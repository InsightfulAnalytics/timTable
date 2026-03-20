
const fs = require("fs");
let c = fs.readFileSync("src/visual.ts", "utf8");
c = c.replace(/totalHeader\.style\.width = \$\{columnWidth\}px;/g, "totalHeader.style.width = `\${columnWidth}px`;");
c = c.replace(/totalHeader\.style\.minWidth = \$\{columnWidth\}px;/g, "totalHeader.style.minWidth = `\${columnWidth}px`;");
c = c.replace(/totalHeader\.style\.maxWidth = \$\{columnWidth\}px;/g, "totalHeader.style.maxWidth = `\${columnWidth}px`;");
c = c.replace(/totalHeader\.style\.borderRight = 1px solid ;/g, "totalHeader.style.borderRight = `1px solid \${gridBorderColor}`;");
c = c.replace(/totalCell\.style\.width = \$\{columnWidth\}px;/g, "totalCell.style.width = `\${columnWidth}px`;");
c = c.replace(/totalCell\.style\.minWidth = \$\{columnWidth\}px;/g, "totalCell.style.minWidth = `\${columnWidth}px`;");
c = c.replace(/totalCell\.style\.maxWidth = \$\{columnWidth\}px;/g, "totalCell.style.maxWidth = `\${columnWidth}px`;");
c = c.replace(/totalCell\.style\.borderRight = 1px solid ;/g, "totalCell.style.borderRight = `1px solid \${gridBorderColor}`;");
fs.writeFileSync("src/visual.ts", c);
console.log("Fixed!");

