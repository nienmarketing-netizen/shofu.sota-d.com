const fs = require('fs');
let css = fs.readFileSync('src/global.css', 'utf-8');

// Replace the comprehensive cursor fix with a better one
const target = "/* Comprehensive Cursor Fix */";
if (css.includes(target)) {
  css = css.split(target)[0] + target + `
button, a, [role="button"], .cursor-pointer {
  cursor: pointer !important;
}

/* 
  CRITICAL FIX: 
  Prevent children of buttons/links from intercepting pointer events.
  This stops the browser from switching event targets to <span> or <svg> 
  inside the button, which often causes the cursor to flicker or disappear 
  if there's a transition or React state update.
*/
button > *, a > *, [role="button"] > *, .cursor-pointer > * {
  pointer-events: none !important;
}

button:disabled, button:disabled *,
[disabled], [disabled] *,
.cursor-not-allowed, .cursor-not-allowed * {
  cursor: not-allowed !important;
  pointer-events: none !important;
}
`;
  fs.writeFileSync('src/global.css', css);
  console.log("Applied children pointer-events fix");
}
