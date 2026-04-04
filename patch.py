with open("B:/VS Code Files/Visuals/timTable/src/visual.ts", "r", encoding="utf-8") as f:
    lines = f.readlines()

new_code = """              let totalBehaviorRaw = dataViewObjects.getValue<any>(objects, { objectName: "categoryTotals", propertyName: "totalBehavior" }, "Measure");
              const totalBehaviorVal = typeof totalBehaviorRaw === "string" ? totalBehaviorRaw : (totalBehaviorRaw.value || "Measure");

              const totalBehaviorItems = [
                  { value: "Measure", displayName: "Measure" },
                  { value: "Sum", displayName: "Sum" },
                  { value: "Average", displayName: "Average" },
                  { value: "Count", displayName: "Count" },
                  { value: "Count Distinct", displayName: "Count Distinct" },
                  { value: "Max", displayName: "Max" },
                  { value: "Min", displayName: "Min" },
                  { value: "None", displayName: "None" }
              ];
              const currentBehaviorItem = totalBehaviorItems.find(x => x.value === totalBehaviorVal) || totalBehaviorItems[0];

              categoryTotals.measuresGroup.slices.push(new formattingSettings.ItemDropdown({
                  name: "totalBehavior",
                  displayName: displayName + " Measure Selection",
                  value: currentBehaviorItem,
                  items: totalBehaviorItems,
                  visible: true,
                  selector: { metadata: queryName }
              }));
          });

          // Populate categoryTotals series dropdown and apply selector to showTotalRow
          const categoryHeaders = categories?.sources.map((src: any) => src.displayName || src.queryName) || [];
          categoryTotals.series.items = [
              { value: "Global", displayName: "Grand Total / Global" },
              ...categoryHeaders.map(name => ({ value: name, displayName: name }))
          ];
          const persistedTotalsSeries = dataViewObjects.getValue<string>(
              this.dataView.metadata.objects || {},
              { objectName: "categoryTotals", propertyName: "series" },
              undefined
          );
          const matchedTotalsItem = persistedTotalsSeries
              ? categoryTotals.series.items.find(i => i.value === persistedTotalsSeries)
              : null;
          categoryTotals.series.value = matchedTotalsItem || categoryTotals.series.items[0] || { value: "Global", displayName: "Grand Total / Global" };

          const selectedTotalsSeriesName = categoryTotals.series.value?.value as string;
          const selectedTotalsCategoryIdx = categoryHeaders.indexOf(selectedTotalsSeriesName);
          // Only map to target source if it's a category. If "Global", it will use base settings (totalsSelector = undefined).
          const selectedTotalsSource = selectedTotalsCategoryIdx >= 0 && categories ? categories.sources[selectedTotalsCategoryIdx] : null;
          const selectedTotalsQueryName = selectedTotalsSource?.queryName;
          const totalsSelector = selectedTotalsQueryName ? { metadata: selectedTotalsQueryName } : undefined;

          // Identify base objects for Global Settings fallbacks or explicit lookup
          const baseTotalsObjects = this.dataView.metadata.objects || {};
          const explicitBaseShowRowValue = dataViewObjects.getValue<boolean>(baseTotalsObjects, { objectName: "categoryTotals", propertyName: "showTotalRow" }, true);
          
          // Rebuild categoryTotals.categoryGroup to use the selector
          const activeTotalsObjects = selectedTotalsSource ? (selectedTotalsSource.objects || {}) : baseTotalsObjects;
          const tShowTotalRow = dataViewObjects.getValue<boolean>(activeTotalsObjects, { objectName: "categoryTotals", propertyName: "showTotalRow" }, explicitBaseShowRowValue);

          categoryTotals.categoryGroup.slices = [
              categoryTotals.series,
              new formattingSettings.ToggleSwitch({
                  name: "showTotalRow",
                  displayName: "Show Total Row",
                  value: tShowTotalRow,
                  visible: true,
                  selector: totalsSelector
              })
          ];

"""
new_lines = lines[:731] + [new_code] + lines[824:]

with open("B:/VS Code Files/Visuals/timTable/src/visual.ts", "w", encoding="utf-8") as f:
    f.writelines(new_lines)
print("Replaced dynamic properties for categoryTotals!")
