with open('src/visual.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add headerWordWrap extraction
old_settings = '''const categoryColumnWidth = tableSettings.categoryColumnWidth.value;
        const categoryWordWrap = tableSettings.categoryWordWrap.value;
        const valueWordWrap = tableSettings.valueWordWrap.value;
        const columnWidth = tableSettings.columnWidth.value;'''
new_settings = '''const categoryColumnWidth = tableSettings.categoryColumnWidth.value;
        const categoryWordWrap = tableSettings.categoryWordWrap.value;
        const valueWordWrap = tableSettings.valueWordWrap.value;
        const headerWordWrap = tableSettings.headerWordWrap?.value || false;
        const columnWidth = tableSettings.columnWidth.value;'''
content = content.replace(old_settings, new_settings)

# 2. Update categoryHeader in standard mode (line ~371)
old_cat_head = '''applyRowSquash(categoryHeader, headerRowHeight, headerFontSize, categoryWordWrap);
                categoryHeader.style.fontWeight = headerBold ? "bold" : "normal";
                categoryHeader.style.borderRight = \1px solid \\;
                categoryHeader.style.backgroundColor = headerBgColor;
                categoryHeader.style.overflow = "hidden";
                categoryHeader.style.textOverflow = "ellipsis";
                categoryHeader.style.whiteSpace = categoryWordWrap ? "normal" : "nowrap";
                if (categoryWordWrap) {
                    categoryHeader.style.wordBreak = "break-word";
                }'''
new_cat_head = '''applyRowSquash(categoryHeader, headerRowHeight, headerFontSize, headerWordWrap);
                categoryHeader.style.fontWeight = headerBold ? "bold" : "normal";
                categoryHeader.style.borderRight = \1px solid \\;
                categoryHeader.style.backgroundColor = headerBgColor;
                categoryHeader.style.overflow = "hidden";
                categoryHeader.style.textOverflow = "ellipsis";
                categoryHeader.style.whiteSpace = headerWordWrap ? "normal" : "nowrap";
                if (headerWordWrap) {
                    categoryHeader.style.wordBreak = "break-word";
                }'''
content = content.replace(old_cat_head, new_cat_head)

# 3. Update measure headers in standard mode (line ~391)
old_meas_head = '''applyRowSquash(header, headerRowHeight, headerFontSize, valueWordWrap);
                header.style.fontWeight = headerBold ? "bold" : "normal";
                header.style.borderRight = \1px solid \\;
                header.style.backgroundColor = headerBgColor;
                header.style.overflow = "hidden";
                header.style.textOverflow = "ellipsis";
                header.style.whiteSpace = valueWordWrap ? "normal" : "nowrap";
                if (valueWordWrap) {
                    header.style.wordBreak = "break-word";
                }'''
new_meas_head = '''applyRowSquash(header, headerRowHeight, headerFontSize, headerWordWrap);
                header.style.fontWeight = headerBold ? "bold" : "normal";
                header.style.borderRight = \1px solid \\;
                header.style.backgroundColor = headerBgColor;
                header.style.overflow = "hidden";
                header.style.textOverflow = "ellipsis";
                header.style.whiteSpace = headerWordWrap ? "normal" : "nowrap";
                if (headerWordWrap) {
                    header.style.wordBreak = "break-word";
                }'''
content = content.replace(old_meas_head, new_meas_head)

# 4. Update measureHeader in transposed mode (line ~710)
old_transp_meas_head = '''applyRowSquash(measureHeader, headerRowHeight, headerFontSize, categoryWordWrap);
            measureHeader.style.fontWeight = headerBold ? "bold" : "normal";
            measureHeader.style.borderRight = \1px solid \\;
            measureHeader.style.backgroundColor = headerBgColor;
            measureHeader.style.overflow = "hidden";
            measureHeader.style.textOverflow = "ellipsis";
            measureHeader.style.whiteSpace = categoryWordWrap ? "normal" : "nowrap";'''
new_transp_meas_head = '''applyRowSquash(measureHeader, headerRowHeight, headerFontSize, headerWordWrap);
            measureHeader.style.fontWeight = headerBold ? "bold" : "normal";
            measureHeader.style.borderRight = \1px solid \\;
            measureHeader.style.backgroundColor = headerBgColor;
            measureHeader.style.overflow = "hidden";
            measureHeader.style.textOverflow = "ellipsis";
            measureHeader.style.whiteSpace = headerWordWrap ? "normal" : "nowrap";
            if (headerWordWrap) {
                measureHeader.style.wordBreak = "break-word";
            }'''
content = content.replace(old_transp_meas_head, new_transp_meas_head)

# 5. Update category headers (catHeader) in transposed mode (lines ~727 and ~745)
old_transp_cat_head = '''applyRowSquash(catHeader, headerRowHeight, headerFontSize, valueWordWrap);
                    catHeader.style.fontWeight = headerBold ? "bold" : "normal";
                    catHeader.style.borderRight = \1px solid \\;
                    catHeader.style.backgroundColor = headerBgColor;
                    catHeader.style.overflow = "hidden";
                    catHeader.style.textOverflow = "ellipsis";
                    catHeader.style.whiteSpace = valueWordWrap ? "normal" : "nowrap";
                    if (valueWordWrap) {
                        catHeader.style.wordBreak = "break-word";
                    }'''
new_transp_cat_head = '''applyRowSquash(catHeader, headerRowHeight, headerFontSize, headerWordWrap);
                    catHeader.style.fontWeight = headerBold ? "bold" : "normal";
                    catHeader.style.borderRight = \1px solid \\;
                    catHeader.style.backgroundColor = headerBgColor;
                    catHeader.style.overflow = "hidden";
                    catHeader.style.textOverflow = "ellipsis";
                    catHeader.style.whiteSpace = headerWordWrap ? "normal" : "nowrap";
                    if (headerWordWrap) {
                        catHeader.style.wordBreak = "break-word";
                    }'''
content = content.replace(old_transp_cat_head, new_transp_cat_head)

# Also fix the one without indentation for if (!hasCategories)
old_transp_cat_head2 = '''applyRowSquash(catHeader, headerRowHeight, headerFontSize, valueWordWrap);
                catHeader.style.fontWeight = headerBold ? "bold" : "normal";
                catHeader.style.borderRight = \1px solid \\;
                catHeader.style.backgroundColor = headerBgColor;
                catHeader.style.overflow = "hidden";
                catHeader.style.textOverflow = "ellipsis";
                catHeader.style.whiteSpace = valueWordWrap ? "normal" : "nowrap";
                if (valueWordWrap) {
                    catHeader.style.wordBreak = "break-word";
                }'''
new_transp_cat_head2 = '''applyRowSquash(catHeader, headerRowHeight, headerFontSize, headerWordWrap);
                catHeader.style.fontWeight = headerBold ? "bold" : "normal";
                catHeader.style.borderRight = \1px solid \\;
                catHeader.style.backgroundColor = headerBgColor;
                catHeader.style.overflow = "hidden";
                catHeader.style.textOverflow = "ellipsis";
                catHeader.style.whiteSpace = headerWordWrap ? "normal" : "nowrap";
                if (headerWordWrap) {
                    catHeader.style.wordBreak = "break-word";
                }'''
content = content.replace(old_transp_cat_head2, new_transp_cat_head2)

with open('src/visual.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updates applied to visual.ts")
