const fs = require('fs');

let content = fs.readFileSync('src/components/shofu/solutions/DirectRestoration.tsx', 'utf-8');

let step1Index = content.indexOf('BƯỚC 1');
let step2Index = content.indexOf('BƯỚC 2');
let step3Index = content.indexOf('BƯỚC 3');
let section4Index = content.indexOf('SECTION 4');

if (step1Index === -1 || step2Index === -1 || step3Index === -1 || section4Index === -1) {
  console.log("Could not find section markers");
  process.exit(1);
}

let before = content.slice(0, step1Index);
let section3 = content.slice(step1Index, section4Index);
let after = content.slice(section4Index);

// Replace in section 3
section3 = section3.replace(/<div className="flex items-start gap-3">/g, '<div className="flex items-start gap-3 bg-white border border-slate-200 rounded-xl p-4 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:border-sky-200 hover:shadow-md transition-all">');

// Also fix the uppercase tags while we're at it
section3 = section3.replace(/BƯỚC 1/g, 'Bước 1');
section3 = section3.replace(/BƯỚC 2/g, 'Bước 2');
section3 = section3.replace(/BƯỚC 3/g, 'Bước 3');

fs.writeFileSync('src/components/shofu/solutions/DirectRestoration.tsx', before + section3 + after);
console.log("Updated USPs styles in Section 3");
