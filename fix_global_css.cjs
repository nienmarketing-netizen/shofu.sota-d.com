const fs = require('fs');
let css = fs.readFileSync('src/global.css', 'utf-8');
css = css.replace(/\/\* RAW FORCE CURSOR POINTER \*\/[\s\S]*/, '');
css += `
@layer utilities {
  .cursor-pointer {
    cursor: pointer !important;
  }
}
button, a, [role="button"] {
  cursor: pointer !important;
}
`;
fs.writeFileSync('src/global.css', css);
