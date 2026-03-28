import re

with open('B:/VS Code Files/Visuals/timTable/src/visual.ts', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('const tableSettings = this.visualSettings.table;', 'const rowHeightSettings = this.visualSettings.rowHeight;')
content = content.replace('const categoryWordWrap = tableSettings.categoryWordWrap.value;', 'const categoryWordWrap = columnWidthSettings.categoryWordWrap.value;')
content = content.replace('const valueRowHeight = tableSettings.valueRowHeight.value;', 'const valueRowHeight = rowHeightSettings.valueRowHeight.value;')
content = content.replace('const alternateValueRowHeight = tableSettings.alternateValueRowHeight.value;', 'const alternateValueRowHeight = rowHeightSettings.alternateValueRowHeight.value;')
content = content.replace('const totalRowHeight = tableSettings.totalRowHeight.value;', 'const totalRowHeight = rowHeightSettings.totalRowHeight.value;')
content = content.replace('const switchValuesToRows = tableSettings.switchValuesToRows?.value || false;', 'const switchValuesToRows = valuesSettings.switchValuesToRows?.value || false;')

with open('B:/VS Code Files/Visuals/timTable/src/visual.ts', 'w', encoding='utf-8') as f:
    f.write(content)
