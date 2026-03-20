import re

with open('src/visual.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Add the 'Total' header in transposed mode
old_transposed_cat_end = '''                    catHeader.style.whiteSpace = valueWordWrap ? "normal" : "nowrap";
                    if (valueWordWrap) {
                        catHeader.style.wordBreak = "break-word";
                    }
                }
            } else {'''

# Wait, we already replaced valueWordWrap with headerWordWrap in headers!
old_transposed_cat_end = '''                    catHeader.style.whiteSpace = headerWordWrap ? "normal" : "nowrap";
                    if (headerWordWrap) {
                        catHeader.style.wordBreak = "break-word";
                    }
                }
            } else {'''

new_transposed_cat_end = '''                    catHeader.style.whiteSpace = headerWordWrap ? "normal" : "nowrap";
                    if (headerWordWrap) {
                        catHeader.style.wordBreak = "break-word";
                    }
                }
            } else {'''

# Actually, let's just find the exact spot to insert the 'Total' header in transposed mode
# It's right before // Create Rows (each row is a Measure)
match = re.search(r'// Create Rows \(each row is a Measure\)', content)
if match:
    insert_pos = match.start()
    total_header_code = '''            if (showTotalRow) {
                let totalHeader = headerRow.insertCell();
                totalHeader.textContent = "Total";
                totalHeader.className = 'table-header-cell';
                totalHeader.style.width = \\px\;
                totalHeader.style.minWidth = \\px\;
                totalHeader.style.maxWidth = \\px\;
                applyRowSquash(totalHeader, headerRowHeight, headerFontSize, headerWordWrap);
                totalHeader.style.fontWeight = headerBold ? "bold" : "normal";
                totalHeader.style.borderRight = \1px solid \\;
                totalHeader.style.backgroundColor = headerBgColor;
                totalHeader.style.overflow = "hidden";
                totalHeader.style.textOverflow = "ellipsis";
                totalHeader.style.whiteSpace = headerWordWrap ? "normal" : "nowrap";
                if (headerWordWrap) {
                    totalHeader.style.wordBreak = "break-word";
                }
            }

            '''
    content = content[:insert_pos] + total_header_code + content[insert_pos:]

# Next, inside the loop where we process categories for each measure:
old_data_loop_end = '''                    if (valueWordWrap) {
                        cell.style.wordBreak = "break-word";
                    }
                }
            });
        }
    }'''

new_data_loop_end = '''                    if (valueWordWrap) {
                        cell.style.wordBreak = "break-word";
                    }
                }
                
                // Add the Total column cell for this measure if enabled
                if (showTotalRow) {
                    let totalCell = row.insertCell();
                    let totalVal = totals[measureIndex];
                    totalCell.textContent = totalVal.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 0
                    });
                    totalCell.className = 'table-data-cell';
                    totalCell.style.width = \\px\;
                    totalCell.style.minWidth = \\px\;
                    totalCell.style.maxWidth = \\px\;
                    applyRowSquash(totalCell, rowHeight, cellFontSize, valueWordWrap);
                    totalCell.style.fontWeight = totalRowBold ? "bold" : "normal";
                    totalCell.style.textDecoration = totalRowUnderline ? "underline" : "none";
                    totalCell.style.borderRight = \1px solid \\;
                    totalCell.style.backgroundColor = getTotalRowColor(dataView);
                    totalCell.style.overflow = "hidden";
                    totalCell.style.textOverflow = "ellipsis";
                    totalCell.style.whiteSpace = valueWordWrap ? "normal" : "nowrap";
                    if (valueWordWrap) {
                        totalCell.style.wordBreak = "break-word";
                    }
                }
            });
        }
    }'''

content = content.replace(old_data_loop_end, new_data_loop_end)

with open('src/visual.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Added total column to transposed mode")
