const fs = require('fs');
let file_path = "/app/applet/src/components/shofu/solutions/DirectRestoration.tsx";
let content = fs.readFileSync(file_path, 'utf8');

// 1. JADA Outer
const jada_outer_old = `className="col-span-1 lg:col-span-2 bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-3xl p-8 hover:border-[#00ADEF]/50 hover:shadow-[0_0_30px_rgba(0,173,239,0.15)] transition-all duration-300"`;
const jada_outer_new = `className="col-span-1 lg:col-span-2 max-md:bg-gradient-to-b max-md:from-slate-800/80 max-md:via-slate-800/10 max-md:to-transparent md:bg-slate-800/50 backdrop-blur-md border border-slate-700/50 max-md:border-b-transparent rounded-3xl p-6 md:p-8 hover:border-[#00ADEF]/50 hover:shadow-[0_0_30px_rgba(0,173,239,0.15)] transition-all duration-300"`;
content = content.replace(jada_outer_old, jada_outer_new);

// 2. JADA Inner (2 occurrences)
const jada_inner_old = `className="bg-slate-900/50 rounded-2xl p-5 border border-slate-700/50"`;
const jada_inner_new = `className="max-md:bg-transparent md:bg-slate-900/50 max-md:rounded-none md:rounded-2xl max-md:p-0 md:p-5 max-md:border-0 md:border border-slate-700/50"`;
content = content.split(jada_inner_old).join(jada_inner_new);

// 3. Molecular Outer
const mol_outer_old = `className="col-span-1 bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-3xl p-6 sm:p-8 hover:border-[#00ADEF]/50 hover:shadow-[0_0_30px_rgba(0,173,239,0.15)] transition-all duration-300 flex flex-col"`;
const mol_outer_new = `className="col-span-1 max-md:bg-gradient-to-b max-md:from-slate-800/80 max-md:via-slate-800/10 max-md:to-transparent md:bg-slate-800/50 backdrop-blur-md border border-slate-700/50 max-md:border-b-transparent rounded-3xl p-6 md:p-8 hover:border-[#00ADEF]/50 hover:shadow-[0_0_30px_rgba(0,173,239,0.15)] transition-all duration-300 flex flex-col"`;
content = content.replace(mol_outer_old, mol_outer_new);

// 4. Molecular Inner
const mol_inner_old = `className="text-sm text-slate-300 leading-relaxed bg-slate-900/50 p-3 rounded-xl border border-slate-700/50"`;
const mol_inner_new = `className="text-sm text-slate-300 leading-relaxed max-md:bg-transparent md:bg-slate-900/50 max-md:p-0 md:p-3 max-md:rounded-none md:rounded-xl max-md:border-0 md:border border-slate-700/50"`;
content = content.replace(mol_inner_old, mol_inner_new);

// 5. BBX and Composite Outer (2 occurrences)
const bbx_outer_old = `className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-3xl p-6 sm:p-8 hover:border-[#00ADEF]/50 hover:shadow-[0_0_30px_rgba(0,173,239,0.15)] transition-all duration-300 flex-1"`;
const bbx_outer_new = `className="max-md:bg-gradient-to-b max-md:from-slate-800/80 max-md:via-slate-800/10 max-md:to-transparent md:bg-slate-800/50 backdrop-blur-md border border-slate-700/50 max-md:border-b-transparent rounded-3xl p-6 md:p-8 hover:border-[#00ADEF]/50 hover:shadow-[0_0_30px_rgba(0,173,239,0.15)] transition-all duration-300 flex-1"`;
content = content.split(bbx_outer_old).join(bbx_outer_new);

// 6. Composite Inner (2 occurrences)
const comp_inner_old = `className="bg-slate-900/50 rounded-xl p-3 border border-slate-700/50"`;
const comp_inner_new = `className="max-md:bg-transparent md:bg-slate-900/50 max-md:rounded-none md:rounded-xl max-md:p-0 md:p-3 max-md:border-0 md:border border-slate-700/50"`;
content = content.split(comp_inner_old).join(comp_inner_new);

fs.writeFileSync(file_path, content);
console.log("Mobile responsive styles applied to Section 5.");
