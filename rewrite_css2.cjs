const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf-8');

// Remove the previously added layer blocks
css = css.replace(/@layer base \{[\s\S]*?\}/g, '');
css = css.replace(/@layer utilities \{\s*\.cursor-pointer \{[\s\S]*?\}\s*\}/g, '');

// Append plain raw CSS with high specificity
css += `
/* FORCE CURSOR POINTER GLOBALLY */
button, 
button *,
a, 
a *,
[role="button"], 
[role="button"] *,
.cursor-pointer,
.cursor-pointer * {
  cursor: pointer !important;
}
`;

fs.writeFileSync('src/index.css', css);
console.log("Rewrote CSS for pointers");
