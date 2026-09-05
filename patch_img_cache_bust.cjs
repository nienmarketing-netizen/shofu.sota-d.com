const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

const targetStr = `src="https://raw.githubusercontent.com/nienmarketing-netizen/shofu.sota-d.com/main/public/images/voi-tron-automix-lang-phi-vat-lieu.webp"`;
const replacementStr = `src="https://raw.githubusercontent.com/nienmarketing-netizen/shofu.sota-d.com/main/public/images/voi-tron-automix-lang-phi-vat-lieu.webp?v=${Date.now()}"`;

if (content.includes(targetStr)) {
    content = content.replace(targetStr, replacementStr);
    fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);
    console.log("Image URL updated with cache buster");
} else {
    console.log("Target not found");
}
