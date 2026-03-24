import json

with open('capabilities.json', 'r', encoding='utf-8') as f:
    caps = json.load(f)

totals_props = {
    "showTotalRow": {
        "type": { "bool": True }
    },
    "totalBehavior": {
        "type": {
            "enumeration": [
                { "value": "Measure", "displayName": "Measure" },
                { "value": "Sum", "displayName": "Sum" },
                { "value": "Average", "displayName": "Average" },
                { "value": "Count", "displayName": "Count" },
                { "value": "Count Distinct", "displayName": "Count Distinct" },
                { "value": "Max", "displayName": "Max" },
                { "value": "Min", "displayName": "Min" }
            ]
        }
    }
}

caps['objects']['totals'] = {
    "properties": totals_props
}

with open('capabilities.json', 'w', encoding='utf-8') as f:
    json.dump(caps, f, indent=4)

print("Updated capabilities.json")
