const fs = require('fs');

let content = fs.readFileSync('src/visual.ts', 'utf-8');

// The first block is category header in normal mode:
// applyRowSquash(categoryHeader, headerRowHeight, headerFontSize, categoryWordWrap);
// categoryHeader.style.whiteSpace = categoryWordWrap ? 'normal' : 'nowrap';
// if (categoryWordWrap) { categoryHeader.style.wordBreak = 'break-word'; }

const oldNormalCatHeader = \pplyRowSquash(categoryHeader, headerRowHeight, headerFontSize, categoryWordWrap);
                categoryHeader.style.fontWeight = headerBold ? "bold" : "normal";
                categoryHeader.style.borderRight = \\\1px solid \\\\\\;
                categoryHeader.style.backgroundColor = headerBgColor;
                categoryHeader.style.overflow = "hidden";
                categoryHeader.style.textOverflow = "ellipsis";
                categoryHeader.style.whiteSpace = categoryWordWrap ? "normal" : "nowrap";
                if (categoryWordWrap) {\;

const newNormalCatHeader = \pplyRowSquash(categoryHeader, headerRowHeight, headerFontSize, headerWordWrap);
                categoryHeader.style.fontWeight = headerBold ? "bold" : "normal";
                categoryHeader.style.borderRight = \\\1px solid \\\\\\;
                categoryHeader.style.backgroundColor = headerBgColor;
                categoryHeader.style.overflow = "hidden";
                categoryHeader.style.textOverflow = "ellipsis";
                categoryHeader.style.whiteSpace = headerWordWrap ? "normal" : "nowrap";
                if (headerWordWrap) {\;

content = content.replace(oldNormalCatHeader, newNormalCatHeader);


const oldNormalMeasHeader = \pplyRowSquash(header, headerRowHeight, headerFontSize, valueWordWrap);
                header.style.fontWeight = headerBold ? "bold" : "normal";
                header.style.borderRight = \\\1px solid \\\\\\;
                header.style.backgroundColor = headerBgColor;
                header.style.overflow = "hidden";
                header.style.textOverflow = "ellipsis";
                header.style.whiteSpace = valueWordWrap ? "normal" : "nowrap";
                if (valueWordWrap) {\;

const newNormalMeasHeader = \pplyRowSquash(header, headerRowHeight, headerFontSize, headerWordWrap);
                header.style.fontWeight = headerBold ? "bold" : "normal";
                header.style.borderRight = \\\1px solid \\\\\\;
                header.style.backgroundColor = headerBgColor;
                header.style.overflow = "hidden";
                header.style.textOverflow = "ellipsis";
                header.style.whiteSpace = headerWordWrap ? "normal" : "nowrap";
                if (headerWordWrap) {\;

content = content.replace(oldNormalMeasHeader, newNormalMeasHeader);

const oldTransposedMeasHeader = \pplyRowSquash(measureHeader, headerRowHeight, headerFontSize, categoryWordWrap);
            measureHeader.style.fontWeight = headerBold ? "bold" : "normal";
            measureHeader.style.borderRight = \\\1px solid \\\\\\;
            measureHeader.style.backgroundColor = headerBgColor;
            measureHeader.style.overflow = "hidden";
            measureHeader.style.textOverflow = "ellipsis";
            measureHeader.style.whiteSpace = categoryWordWrap ? "normal" : "nowrap";\;

const newTransposedMeasHeader = \pplyRowSquash(measureHeader, headerRowHeight, headerFontSize, headerWordWrap);
            measureHeader.style.fontWeight = headerBold ? "bold" : "normal";
            measureHeader.style.borderRight = \\\1px solid \\\\\\;
            measureHeader.style.backgroundColor = headerBgColor;
            measureHeader.style.overflow = "hidden";
            measureHeader.style.textOverflow = "ellipsis";
            measureHeader.style.whiteSpace = headerWordWrap ? "normal" : "nowrap";
            if (headerWordWrap) { measureHeader.style.wordBreak = "break-word"; }\;

content = content.replace(oldTransposedMeasHeader, newTransposedMeasHeader);

const oldTransposedCatHeader = \pplyRowSquash(catHeader, headerRowHeight, headerFontSize, valueWordWrap);
                    catHeader.style.fontWeight = headerBold ? "bold" : "normal";
                    catHeader.style.borderRight = \\\1px solid \\\\\\;
                    catHeader.style.backgroundColor = headerBgColor;
                    catHeader.style.overflow = "hidden";
                    catHeader.style.textOverflow = "ellipsis";
                    catHeader.style.whiteSpace = valueWordWrap ? "normal" : "nowrap";
                    if (valueWordWrap) {\;

const newTransposedCatHeader = \pplyRowSquash(catHeader, headerRowHeight, headerFontSize, headerWordWrap);
                    catHeader.style.fontWeight = headerBold ? "bold" : "normal";
                    catHeader.style.borderRight = \\\1px solid \\\\\\;
                    catHeader.style.backgroundColor = headerBgColor;
                    catHeader.style.overflow = "hidden";
                    catHeader.style.textOverflow = "ellipsis";
                    catHeader.style.whiteSpace = headerWordWrap ? "normal" : "nowrap";
                    if (headerWordWrap) {\;

content = content.replace(oldTransposedCatHeader, newTransposedCatHeader);

const oldTransposedCatHeader2 = \pplyRowSquash(catHeader, headerRowHeight, headerFontSize, valueWordWrap);
                catHeader.style.fontWeight = headerBold ? "bold" : "normal";
                catHeader.style.borderRight = \\\1px solid \\\\\\;
                catHeader.style.backgroundColor = headerBgColor;
                catHeader.style.overflow = "hidden";
                catHeader.style.textOverflow = "ellipsis";
                catHeader.style.whiteSpace = valueWordWrap ? "normal" : "nowrap";
                if (valueWordWrap) {\;

const newTransposedCatHeader2 = \pplyRowSquash(catHeader, headerRowHeight, headerFontSize, headerWordWrap);
                catHeader.style.fontWeight = headerBold ? "bold" : "normal";
                catHeader.style.borderRight = \\\1px solid \\\\\\;
                catHeader.style.backgroundColor = headerBgColor;
                catHeader.style.overflow = "hidden";
                catHeader.style.textOverflow = "ellipsis";
                catHeader.style.whiteSpace = headerWordWrap ? "normal" : "nowrap";
                if (headerWordWrap) {\;

content = content.replace(oldTransposedCatHeader2, newTransposedCatHeader2);

fs.writeFileSync('src/visual.ts', content, 'utf-8');
console.log('Done replacement');
