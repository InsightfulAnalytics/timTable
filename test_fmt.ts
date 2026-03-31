import { valueFormatter } from "powerbi-visuals-utils-formattingutils";
console.log(valueFormatter.create({format: "#,0.0,"}).format(4627.2));
console.log(valueFormatter.create({format: "#,0.0,;(#,0.0,)"}).format(-4627.2));
console.log(valueFormatter.create({format: "#,0,;(#,0,)"}).format(-2970));
console.log(valueFormatter.create({format: "0\\ %;-0\\ %;0\\ %"}).format(0.239));