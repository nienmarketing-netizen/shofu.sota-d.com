const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/DirectRestoration.tsx', 'utf-8');

// Fix body text
content = content.replace(/text-base md:text-lg/g, 'text-base sm:text-lg');
content = content.replace(/className="font-body text-slate-600 max-w-2xl mx-auto text-lg"/g, 'className="font-body text-base sm:text-lg text-slate-600 max-w-2xl mx-auto"');
content = content.replace(/className="font-body text-slate-600 leading-relaxed mb-6"/g, 'className="font-body text-sm text-slate-600 leading-relaxed mb-6"');
content = content.replace(/className="font-body text-slate-600 leading-relaxed mb-8 text-lg"/g, 'className="font-body text-base sm:text-lg text-slate-600 leading-relaxed mb-8"');
content = content.replace(/className="font-body text-slate-400 max-w-2xl mx-auto text-lg"/g, 'className="font-body text-base sm:text-lg text-slate-400 max-w-2xl mx-auto"');
content = content.replace(/className="font-body text-slate-700 font-medium max-w-3xl mx-auto leading-relaxed text-base sm:text-lg mt-4"/g, 'className="font-body text-base sm:text-lg text-slate-700 font-medium max-w-3xl mx-auto leading-relaxed mt-4"');

// Fix specific text cases
content = content.replace(/Khóa chặt ống ngà kỵ nước – Chấm dứt hiện tượng thủy phân liên kết dán/g, 'Khóa chặt ống ngà kỵ nước – Chấm dứt hiện tượng thủy phân liên kết dán');

fs.writeFileSync('src/components/shofu/solutions/DirectRestoration.tsx', content);
