const fs = require('fs');
let code = fs.readFileSync('B:/VS Code Files/Visuals/timTable/src/visual.ts', 'utf8');
let lines = code.split('\n');

// Find measureHeaders.forEach
let headerIdx = -1;
for (let i = 480; i < 520; i++) {
  if (lines[i].includes('measureHeaders.forEach((displayName) => {')) {
    headerIdx = i;
    break;
  }
}

if (headerIdx !== -1) {
    lines[headerIdx] = `            measureHeaders.forEach((displayName, idx) => {
                let specSettings = measureSettingsList[idx];
                let effectiveBg = specSettings.applyToHeader && specSettings.backgroundColor ? specSettings.backgroundColor : headerBgColor;
                let effectiveColor = specSettings.applyToHeader && specSettings.textColor ? specSettings.textColor : headerTextColor;
                let effectiveAlign = specSettings.applyToHeader && specSettings.alignment ? specSettings.alignment : headerAlignment;`;
                
    for (let j = headerIdx; j < headerIdx + 25; j++) {
        if (lines[j] && lines[j].includes('header.style.color = headerTextColor;')) {
            lines[j] = `                header.style.color = effectiveColor;`;
        }
        if (lines[j] && lines[j].includes('header.style.textAlign = headerAlignment;')) {
            lines[j] = `                header.style.textAlign = effectiveAlign;`;
        }
        if (lines[j] && lines[j].includes('header.style.backgroundColor = headerBgColor;')) {
            lines[j] = `                header.style.backgroundColor = effectiveBg;`;
        }
    }
}

fs.writeFileSync('B:/VS Code Files/Visuals/timTable/src/visual.ts', lines.join('\n'));
console.log('Fixed header loop by line logic.');
