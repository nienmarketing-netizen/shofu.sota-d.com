const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/ShofuOfferModal.tsx', 'utf-8');

// The original aspect ratio was aspect-[16/9] sm:aspect-[2/1]
// I had changed it to aspect-[4/3]
// I will revert it back to the original layout

const oldJsx = `<div className={\`relative aspect-[4/3] w-full flex items-center justify-center p-0 bg-slate-100\`}>`;
const newJsx = `<div className={\`relative aspect-[16/9] sm:aspect-[2/1] w-full flex items-center justify-center p-0 bg-slate-100\`}>`;

content = content.replace(oldJsx, newJsx);

fs.writeFileSync('src/components/shofu/ShofuOfferModal.tsx', content);
console.log("Patched aspect ratio!");
