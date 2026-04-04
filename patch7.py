with open("B:/VS Code Files/Visuals/timTable/src/visual.ts", "r", encoding="utf-8") as f:
    lines = f.readlines()

new_lines = []
skip = False
for line in lines:
    if "categoryTotals.slices = [" in line:
        skip = True
    if skip and "];" in line:
        skip = False
        continue
    if not skip and "categoryTotals.measuresGroup.slices.push" not in line:
        new_lines.append(line)
    elif "categoryTotals.measuresGroup.slices.push" in line:
        new_lines.append(line) # keep this one

with open("B:/VS Code Files/Visuals/timTable/src/visual.ts", "w", encoding="utf-8") as f:
    f.writelines(new_lines)
print("Removed invalid slices assignment")
