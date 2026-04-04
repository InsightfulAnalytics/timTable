with open("B:/VS Code Files/Visuals/timTable/src/visual.ts", "r", encoding="utf-8") as f:
    for i, line in enumerate(f):
        if "objectName" in line and "totals" in line:
            print(f"{i+1}: {line.strip()}")
