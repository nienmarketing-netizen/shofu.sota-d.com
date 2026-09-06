const fs = require('fs');
let css = fs.readFileSync('src/global.css', 'utf-8');

// Remove my previous fallback if it exists
css = css.replace(/\/\* Fallback for cursors just in case \*\/[\s\S]*?(EOF|$)/, '');

css += `
/* Comprehensive Cursor Fix */
@layer utilities {
  .cursor-pointer, .cursor-pointer * {
    cursor: pointer !important;
  }
}
button, button *, 
a, a *, 
[role="button"], [role="button"] * {
  cursor: pointer !important;
}
button:disabled, button:disabled *,
[disabled], [disabled] *,
.cursor-not-allowed, .cursor-not-allowed * {
  cursor: not-allowed !important;
}
`;
fs.writeFileSync('src/global.css', css);
