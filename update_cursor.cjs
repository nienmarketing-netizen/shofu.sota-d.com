const fs = require('fs');
let css = fs.readFileSync('src/global.css', 'utf-8');
css = css.replace(/\/\* RAW FORCE CURSOR POINTER \*\/[\s\S]*/, '');
css += `
/* RAW FORCE CURSOR POINTER */
button, button *,
a, a *,
[role="button"], [role="button"] *,
.cursor-pointer, .cursor-pointer *,
[class*="cursor-pointer"], [class*="cursor-pointer"] * {
  cursor: pointer !important;
}
`;
fs.writeFileSync('src/global.css', css);
console.log("Updated global.css");
