"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var powerbi_visuals_utils_formattingutils_1 = require("powerbi-visuals-utils-formattingutils");
console.log(powerbi_visuals_utils_formattingutils_1.valueFormatter.create({ format: "#,0.0," }).format(4627.2));
console.log(powerbi_visuals_utils_formattingutils_1.valueFormatter.create({ format: "#,0.0,;(#,0.0,)" }).format(-4627.2));
console.log(powerbi_visuals_utils_formattingutils_1.valueFormatter.create({ format: "#,0,;(#,0,)" }).format(-2970));
console.log(powerbi_visuals_utils_formattingutils_1.valueFormatter.create({ format: "0\\ %;-0\\ %;0\\ %" }).format(0.239));
