const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

const oldStr = `        <div className="w-[90%] lg:w-[80%] mx-auto relative z-10">
          <div className="bg-white rounded-[2.5rem] p-2 shadow-[0_0_40px_rgba(251,191,36,0.2)] max-w-5xl mx-auto">
        <div className="bg-slate-900 rounded-[2.2rem] p-8 md:p-12 lg:p-16 text-white text-center relative overflow-hidden">`;

const newStr = `        <div className="w-[90%] lg:w-[80%] mx-auto relative z-10">
          <div className="max-w-5xl mx-auto">
        <div className="bg-slate-900 rounded-[2.2rem] p-8 md:p-12 lg:p-16 text-white text-center relative overflow-hidden">`;

let updated = content.replace(oldStr, newStr);

if (updated !== content) {
    fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', updated);
    console.log("Updated");
} else {
    console.log("Failed to match");
}
