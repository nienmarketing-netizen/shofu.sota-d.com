const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf-8');

// Remove the layer base completely
css = css.replace(/@layer base \{\s*button, a, \[role="button"\] \{\s*cursor: pointer !important;\s*\}\s*\}/g, '');

// Append raw CSS without layers
css += `
/* RAW FORCE CURSOR POINTER */
button,
a,
[role="button"],
.cursor-pointer,
[class*="cursor-pointer"] {
  cursor: pointer !important;
}
`;

fs.writeFileSync('src/index.css', css);
console.log("Applied RAW CSS");
