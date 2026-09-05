const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

const oldCardClass = 'bg-slate-800/50 backdrop-blur-md border border-red-500/30 rounded-3xl px-3 py-6 sm:p-8 hover:border-red-500/60 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] transition-all duration-300 flex flex-col items-center text-center';
const newCardClass = 'bg-slate-800/50 backdrop-blur-md border border-red-500/30 rounded-3xl px-1 sm:px-3 py-6 sm:p-8 hover:border-red-500/60 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] transition-all duration-300 flex flex-col items-center text-center';
content = content.split(oldCardClass).join(newCardClass);

const oldH3Class3 = '<h3 className="font-heading font-bold text-[13px] min-[375px]:text-[14.5px] min-[400px]:text-[15.5px] sm:text-xl text-white mb-4 whitespace-nowrap sm:whitespace-normal tracking-tight sm:tracking-normal">"Đốt tiền" do Thể tích chết Automix</h3>';
const newH3Class3 = '<h3 className="font-heading font-bold text-[14.5px] min-[375px]:text-[16px] min-[400px]:text-[17px] sm:text-xl text-white mb-4 whitespace-nowrap sm:whitespace-normal tracking-tight sm:tracking-normal">"Đốt tiền" do Thể tích chết Automix</h3>';
content = content.replace(oldH3Class3, newH3Class3);

fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);
console.log('Updated');
