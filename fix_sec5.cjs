const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/DirectRestoration.tsx', 'utf-8');

const old1 = '<div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 text-center">';
const new1 = '<div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 hover:border-[#00ADEF]/50 hover:shadow-[0_0_30px_rgba(0,173,239,0.15)] transition-all duration-300 rounded-3xl p-8 text-center flex flex-col items-center">';

content = content.replaceAll(old1, new1);
fs.writeFileSync('src/components/shofu/solutions/DirectRestoration.tsx', content);
