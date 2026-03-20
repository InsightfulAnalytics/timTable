with open('src/visual.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# wrap normal total row
old_normal_total = '''            // Create total row
            let totalRow = this.table.insertRow();
            totalRow.className = 'table-total-row';'''

new_normal_total = '''            // Create total row
            if (showTotalRow) {
                let totalRow = this.table.insertRow();
                totalRow.className = 'table-total-row';'''
content = content.replace(old_normal_total, new_normal_total)

old_normal_total_end = '''                if (valueWordWrap) {
                    cell.style.wordBreak = "break-word";
                }
            });

        } else {'''

new_normal_total_end = '''                if (valueWordWrap) {
                    cell.style.wordBreak = "break-word";
                }
            });
            }
        } else {'''
content = content.replace(old_normal_total_end, new_normal_total_end)

with open('src/visual.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done wrapping normal total")
