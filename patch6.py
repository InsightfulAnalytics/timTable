with open("B:/VS Code Files/Visuals/timTable/src/visual.ts", "r", encoding="utf-8") as f:
    text = f.read()

# Replace any totalsSettings with categoryTotals everywhere EXCEPT where we already replaced it in the top block
text = text.replace("totalsSettings.", "categoryTotals.")
text = text.replace('objectName: "totals"', 'objectName: "categoryTotals"')

# But wait, we must remove the dynamic overrides for formatting!
# Let's replace the whole categoryGroup.slices assignment
old_block = """          categoryTotals.categoryGroup.slices = [
              categoryTotals.series,
              new formattingSettings.ToggleSwitch({
                  name: "showTotalRow",
                  displayName: "Show Total Row",
                  value: tShowTotalRow,
                  visible: true,
                  selector: totalsSelector
              }),
              new formattingSettings.FontControl({
                  name: "font",
                  displayName: "Font",
                  fontFamily: new formattingSettings.FontPicker({ name: "fontFamily", displayName: "Font Family", value: tFontFamily, selector: totalsSelector }),
                  fontSize: new formattingSettings.NumUpDown({ name: "fontSize", displayName: "Font Size", value: tFontSize, selector: totalsSelector }),
                  bold: new formattingSettings.ToggleSwitch({ name: "bold", displayName: "Bold", value: tBold, selector: totalsSelector }),
                  italic: new formattingSettings.ToggleSwitch({ name: "italic", displayName: "Italic", value: tItalic, selector: totalsSelector }),
                  underline: new formattingSettings.ToggleSwitch({ name: "underline", displayName: "Underline", value: tUnderline, selector: totalsSelector })
              }),
              new formattingSettings.ColorPicker({ name: "textColor", displayName: "Text color", value: { value: tTextColor }, visible: true, selector: totalsSelector }),
              new formattingSettings.ColorPicker({ name: "backgroundColor", displayName: "Background color", value: { value: tBgColor }, visible: true, selector: totalsSelector }),
              new formattingSettings.ToggleSwitch({ name: "textWrap", displayName: "Text wrap", value: tTextWrap, visible: true, selector: totalsSelector })
          ];"""

new_block = """          categoryTotals.categoryGroup.slices = [
              categoryTotals.series,
              new formattingSettings.ToggleSwitch({
                  name: "showTotalRow",
                  displayName: "Show Total Row",
                  value: tShowTotalRow,
                  visible: true,
                  selector: totalsSelector
              })
          ];"""

text = text.replace(old_block, new_block)

# And remove specific overrides inside the loop
old_specific = """                        specificSubtotalBgColor = dataViewObjects.getFillColor(cObjects, { objectName: "categoryTotals", propertyName: "backgroundColor" }, totalRowBackgroundColor);
                        specificSubtotalTextColor = dataViewObjects.getFillColor(cObjects, { objectName: "categoryTotals", propertyName: "textColor" }, totalRowTextColor);
                        specificSubtotalBold = dataViewObjects.getValue<boolean>(cObjects, { objectName: "categoryTotals", propertyName: "bold" }, totalRowBold);
                        specificSubtotalItalic = dataViewObjects.getValue<boolean>(cObjects, { objectName: "categoryTotals", propertyName: "italic" }, totalRowItalic);
                        specificSubtotalUnderline = dataViewObjects.getValue<boolean>(cObjects, { objectName: "categoryTotals", propertyName: "underline" }, totalRowUnderline);
                        specificSubtotalFontFamily = dataViewObjects.getValue<string>(cObjects, { objectName: "categoryTotals", propertyName: "fontFamily" }, totalRowFontFamily);
                        specificSubtotalFontSize = dataViewObjects.getValue<number>(cObjects, { objectName: "categoryTotals", propertyName: "fontSize" }, totalRowFontSize);
                        specificSubtotalWordWrap = dataViewObjects.getValue<boolean>(cObjects, { objectName: "categoryTotals", propertyName: "textWrap" }, totalRowWordWrap);"""
text = text.replace(old_specific, "")

# And we shouldn't forget to delete these unused variables
old_vars = """          const tFontFamily = dataViewObjects.getValue<string>(activeTotalsObjects, { objectName: "categoryTotals", propertyName: "fontFamily" }, baseFont.fontFamily.value as string);
          const tFontSize = dataViewObjects.getValue<number>(activeTotalsObjects, { objectName: "categoryTotals", propertyName: "fontSize" }, baseFont.fontSize.value as number);
          const tBold = dataViewObjects.getValue<boolean>(activeTotalsObjects, { objectName: "categoryTotals", propertyName: "bold" }, baseFont.bold.value as boolean);
          const tItalic = dataViewObjects.getValue<boolean>(activeTotalsObjects, { objectName: "categoryTotals", propertyName: "italic" }, baseFont.italic.value as boolean);
          const tUnderline = dataViewObjects.getValue<boolean>(activeTotalsObjects, { objectName: "categoryTotals", propertyName: "underline" }, baseFont.underline.value as boolean);
          const tTextColor = dataViewObjects.getFillColor(activeTotalsObjects, { objectName: "categoryTotals", propertyName: "textColor" }, baseTextColor.value.value);
          const tBgColor = dataViewObjects.getFillColor(activeTotalsObjects, { objectName: "categoryTotals", propertyName: "backgroundColor" }, baseBackgroundColor.value.value);
          const tTextWrap = dataViewObjects.getValue<boolean>(activeTotalsObjects, { objectName: "categoryTotals", propertyName: "textWrap" }, baseTextWrap.value as boolean);"""
text = text.replace(old_vars, "")

old_base_vars = """          // Default fallbacks from visual settings
          const { font: baseFont, textColor: baseTextColor, backgroundColor: baseBackgroundColor, textWrap: baseTextWrap } = categoryTotals;"""
text = text.replace(old_base_vars, "")

with open("B:/VS Code Files/Visuals/timTable/src/visual.ts", "w", encoding="utf-8") as f:
    f.write(text)
print("Changes applied!")
