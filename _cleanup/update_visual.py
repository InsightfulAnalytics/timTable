import re

with open('src/visual.ts', 'r', encoding='utf8') as f:
    vis = f.read()

# Remove old borderColor and gridTransparency variables
vis = re.sub(r'\s*const borderColor = tableSettings\.borderColor\.value\.value;\n', '\n', vis)
vis = re.sub(r'\s*const gridTransparency = tableSettings\.gridTransparency\.value;\n', '\n        const gridSettings = this.visualSettings.gridMenu;\n', vis)

# Replace gridBorderColor calculation with new grid logic
new_grid_logic = '''
        const horizLines = gridSettings.horizontalGridlines.value;
        const horizColor = applyTransparency(gridSettings.horizontalGridColor.value.value, gridSettings.horizontalGridTransparency.value);
        const horizWidth = gridSettings.horizontalGridWidth.value;
        const horizBorderValue = horizLines ? ${horizWidth}px solid  : 'none';
        const horizBorder2xValue = horizLines ? ${horizWidth * 2}px solid  : 'none';

        const vertLines = gridSettings.verticalGridlines.value;
        const vertColor = applyTransparency(gridSettings.verticalGridColor.value.value, gridSettings.verticalGridTransparency.value);
        const vertWidth = gridSettings.verticalGridWidth.value;
        const vertBorderValue = vertLines ? ${vertWidth}px solid  : 'none';
'''
vis = vis.replace('const gridBorderColor = applyTransparency(borderColor, gridTransparency);', new_grid_logic.strip())

# Replace usages
vis = vis.replace('2px solid ', 'horizBorder2xValue')
# Row bottoms are horizontal borders, cell rights are vertical borders
vis = vis.replace('borderBottom = 1px solid ', 'borderBottom = horizBorderValue')
vis = vis.replace('borderTop = 1px solid ', 'borderTop = horizBorderValue')
vis = vis.replace('borderRight = 1px solid ', 'borderRight = vertBorderValue')
vis = vis.replace('borderLeft = 1px solid ', 'borderLeft = vertBorderValue')

with open('src/visual.ts', 'w', encoding='utf8') as f:
    f.write(vis)

print("Updated visual.ts")
