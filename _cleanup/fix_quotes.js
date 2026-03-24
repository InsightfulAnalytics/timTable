const fs = require("fs");
let f = fs.readFileSync("B:/VS Code Files/Visuals/timTable/src/visual.ts", "utf8");
f = f.split("\\x22").join("\"");
fs.writeFileSync("B:/VS Code Files/Visuals/timTable/src/visual.ts", f);
console.log("done");
