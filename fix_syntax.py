import re

with open('src/visual.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix broken interpolations from my bad script
content = content.replace('totalHeader.style.width = \\px\;', 'totalHeader.style.width = \px;')
content = content.replace('totalHeader.style.minWidth = \\px\;', 'totalHeader.style.minWidth = \px;')
content = content.replace('totalHeader.style.maxWidth = \\px\;', 'totalHeader.style.maxWidth = \px;')
content = content.replace('totalHeader.style.borderRight = \1px solid \\;', 'totalHeader.style.borderRight = 1px solid \;')

content = content.replace('totalCell.style.width = \\px\;', 'totalCell.style.width = \px;')
content = content.replace('totalCell.style.minWidth = \\px\;', 'totalCell.style.minWidth = \px;')
content = content.replace('totalCell.style.maxWidth = \\px\;', 'totalCell.style.maxWidth = \px;')
content = content.replace('totalCell.style.borderRight = \1px solid \\;', 'totalCell.style.borderRight = 1px solid \;')

with open('src/visual.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed syntax")
