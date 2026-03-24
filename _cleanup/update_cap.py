import json
import re

with open('capabilities.json', 'r', encoding='utf8') as f:
    cap = json.load(f)

# Remove borderColor and gridTransparency from table
table_props = cap['objects']['table']['properties']
table_props.pop('borderColor', None)
table_props.pop('gridTransparency', None)

# Add grid object
cap['objects']['grid'] = {
    'properties': {
        'horizontalGridlines': { 'type': { 'bool': True } },
        'horizontalGridColor': { 'type': { 'fill': { 'solid': { 'color': True } } } },
        'horizontalGridWidth': { 'type': { 'numeric': True } },
        'horizontalGridTransparency': { 'type': { 'numeric': True } },
        'verticalGridlines': { 'type': { 'bool': True } },
        'verticalGridColor': { 'type': { 'fill': { 'solid': { 'color': True } } } },
        'verticalGridWidth': { 'type': { 'numeric': True } },
        'verticalGridTransparency': { 'type': { 'numeric': True } }
    }
}

with open('capabilities.json', 'w', encoding='utf8') as f:
    json.dump(cap, f, indent=4)
print("Updated capabilities.json")
