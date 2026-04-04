with open("B:/VS Code Files/Visuals/timTable/src/visual.ts", "r", encoding="utf-8") as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    if "specificSubtotalBgColor = dataViewObjects.getFillColor" in line:
        continue
    if "specificSubtotalTextColor = dataViewObjects.getFillColor" in line:
        continue
    if "specificSubtotalBold =" in line and "cObjects" in line:
        continue
    if "specificSubtotalItalic =" in line and "cObjects" in line:
        continue
    if "specificSubtotalUnderline =" in line and "cObjects" in line:
        continue
    if "specificSubtotalFontFamily =" in line and "cObjects" in line:
        continue
    if "specificSubtotalFontSize =" in line and "cObjects" in line:
        continue
    if "specificSubtotalWordWrap =" in line and "cObjects" in line:
        continue
    new_lines.append(line)

with open("B:/VS Code Files/Visuals/timTable/src/visual.ts", "w", encoding="utf-8") as f:
    f.writelines(new_lines)
print("Removed dynamic formatting from subtotals")
