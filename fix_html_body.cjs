const fs = require('fs');
let css = fs.readFileSync('src/global.css', 'utf-8');

// Remove the html, body block that was aggressively forcing clip
css = css.replace(/html,\s*body\s*\{[\s\S]*?\}/g, 'html, body {\n  margin: 0;\n  padding: 0;\n  overflow-x: hidden;\n}');
css = css.replace(/#root\s*\{[\s\S]*?\}/g, '#root {\n  position: relative;\n  overflow-x: hidden;\n}');
css = css.replace(/main,\s*section,\s*header,\s*footer\s*\{[\s\S]*?\}/g, 'main, section, header, footer {\n  position: relative;\n}');

fs.writeFileSync('src/global.css', css);
console.log("CSS cleaned up html, body");
