const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

const targetStr = `className="w-full h-auto object-contain rounded-xl drop-shadow-sm border border-slate-200"`;
const replacementStr = `className="w-full h-auto object-contain"`;

if (content.includes(targetStr)) {
    content = content.replace(targetStr, replacementStr);
    fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);
    console.log("Image classes updated");
} else {
    console.log("Target not found");
}
