const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf-8');

// Remove our previous manual global cursor force
css = css.replace(/\/\* FORCE CURSOR POINTER GLOBALLY \*\/[\s\S]*?cursor: pointer !important;\s*\}/g, '');

// Clean up
css += `
@layer base {
  button, a, [role="button"] {
    cursor: pointer !important;
  }
}
`;

fs.writeFileSync('src/index.css', css);
console.log("Applied clean layer base");
