const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

const target1 = `className="flex flex-col justify-between lg:bg-white/40 lg:border lg:border-white/60 lg:rounded-2xl lg:p-8 lg:shadow-sm"`;
const replacement1 = `className="flex flex-col justify-between bg-white/40 border border-white/60 rounded-2xl p-6 lg:p-8 shadow-sm"`;

const target2 = `className="flex flex-col lg:bg-white/40 lg:border lg:border-white/60 lg:rounded-2xl lg:p-8 lg:shadow-sm"`;
const replacement2 = `className="flex flex-col bg-white/40 border border-white/60 rounded-2xl p-6 lg:p-8 shadow-sm"`;

if (content.includes(target1) && content.includes(target2)) {
    content = content.replace(target1, replacement1);
    content = content.replace(target2, replacement2);
    fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);
    console.log("Success");
} else {
    console.log("Targets not found");
}
