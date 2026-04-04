with open("B:/VS Code Files/Visuals/timTable/src/visual.ts", "r", encoding="utf-8") as f:
    text = f.read()

text = text.replace("objectName: \"totals\"", "objectName: \"categoryTotals\"")

with open("B:/VS Code Files/Visuals/timTable/src/visual.ts", "w", encoding="utf-8") as f:
    f.write(text)

with open("B:/VS Code Files/Visuals/timTable/src/settings.ts", "r", encoding="utf-8") as f:
    text = f.read()

text = text.replace("export class CategoryTotalsSettings extends formattingSettings.CompositeCard", "export class CategoryTotalsSettings extends formattingSettings.CompositeCard")
