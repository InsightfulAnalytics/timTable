import re

with open('src/visual.ts', 'r', encoding='utf-8') as f:
    c = f.read()

c = re.sub(r'totalHeader\.style\.width\s*=\s*[^;]+;', r'totalHeader.style.width = \x24{columnWidth}px;', c)
c = re.sub(r'totalHeader\.style\.minWidth\s*=\s*[^;]+;', r'totalHeader.style.minWidth = \x24{columnWidth}px;', c)
c = re.sub(r'totalHeader\.style\.maxWidth\s*=\s*[^;]+;', r'totalHeader.style.maxWidth = \x24{columnWidth}px;', c)
c = re.sub(r'totalHeader\.style\.borderRight\s*=\s*[^;]+;', r'totalHeader.style.borderRight = 1px solid \x24{gridBorderColor};', c)

c = re.sub(r'totalCell\.style\.width\s*=\s*[^;]+;', r'totalCell.style.width = \x24{columnWidth}px;', c)
c = re.sub(r'totalCell\.style\.minWidth\s*=\s*[^;]+;', r'totalCell.style.minWidth = \x24{columnWidth}px;', c)
c = re.sub(r'totalCell\.style\.maxWidth\s*=\s*[^;]+;', r'totalCell.style.maxWidth = \x24{columnWidth}px;', c)
c = re.sub(r'totalCell\.style\.borderRight\s*=\s*[^;]+;', r'totalCell.style.borderRight = 1px solid \x24{gridBorderColor};', c)

with open('src/visual.ts', 'w', encoding='utf-8') as f:
    f.write(c)

print("Syntax fixed!")
