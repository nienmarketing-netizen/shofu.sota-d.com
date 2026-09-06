const fs = require('fs');
let css = fs.readFileSync('src/global.css', 'utf-8');
css = css.replace(/\/\*\s*CRITICAL FIX[\s\S]*/, '');
fs.writeFileSync('src/global.css', css);
console.log("Deleted the rest of the hack");
