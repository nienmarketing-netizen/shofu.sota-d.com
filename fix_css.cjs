const fs = require('fs');
let css = fs.readFileSync('src/global.css', 'utf-8');
css = css.replace(/\/\* Comprehensive Cursor Fix \*\/[\s\S]*?(?=\n\n|\Z)/, '');
css = css.replace(/button > \*, a > \*, \[role="button"\] > \*, \.cursor-pointer > \* \{[\s\S]*?\}/, '');
css = css.replace(/button:disabled, button:disabled \*,[\s\S]*?\{[\s\S]*?\}/, '');
css = css.replace(/button, a, \[role="button"\], \.cursor-pointer \{[\s\S]*?\}/, '');
fs.writeFileSync('src/global.css', css);
console.log("Reverted global css hacks");
