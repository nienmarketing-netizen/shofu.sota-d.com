const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf-8');

// Remove the messy parts we added
css = css.replace(/button,\s*a,\s*\[role="button"\],\s*input\[type="button"\],\s*input\[type="submit"\],\s*input\[type="reset"\],\s*\.cursor-pointer \{\s*cursor: pointer !important;\s*\}/g, '');
css = css.replace(/\/\* Restore cursor pointer for buttons and links \(Tailwind v4 removed this\) \*\/\s*button,\s*a,\s*\[role="button"\],\s*input\[type="button"\],\s*input\[type="submit"\],\s*input\[type="reset"\] \{\s*cursor: pointer;\s*\}/g, '');
css = css.replace(/\/\* Force cursor pointer for utilities \*\/\s*\.cursor-pointer \{\s*cursor: pointer !important;\s*\}/g, '');

// Append cleanly at the end
css += `
@layer base {
  button,
  a,
  [role="button"],
  input[type="button"],
  input[type="submit"],
  input[type="reset"] {
    cursor: pointer !important;
  }
}

@layer utilities {
  .cursor-pointer {
    cursor: pointer !important;
  }
}
`;

fs.writeFileSync('src/index.css', css);
console.log("Rewrote CSS");
