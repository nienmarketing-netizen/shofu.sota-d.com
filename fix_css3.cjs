const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf-8');

// The extra brace happens at the end of the file before the force block
css = css.replace(/animation-play-state: paused;\s*\}\s*\}\s*\}/g, 'animation-play-state: paused;\n  }\n}');

fs.writeFileSync('src/index.css', css);
console.log("Fixed CSS brace");
