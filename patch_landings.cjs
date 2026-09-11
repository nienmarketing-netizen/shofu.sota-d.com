const fs = require('fs');

let file1 = 'src/components/shofu/solutions/IndirectRestoration.tsx';
let content1 = fs.readFileSync(file1, 'utf8');

const replaceIndirect = `<div className="flex items-baseline justify-center md:justify-start gap-2">
                    
                  </div>
                  `;
const newIndirect = `<div className="flex items-baseline justify-center md:justify-start gap-2">
                    <p className="text-slate-400 text-2xl md:text-3xl font-bold line-through decoration-red-500/50 decoration-2">8.155.000đ</p>
                  </div>
                  `;
content1 = content1.replace(replaceIndirect, newIndirect);
content1 = content1.replace(
  '<p className="font-heading font-extrabold text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200 text-center">Liên hệ báo giá</p>',
  '<p className="font-heading font-extrabold text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">3.415.000đ</p>'
);
fs.writeFileSync(file1, content1);

let file2 = 'src/components/shofu/solutions/DirectRestoration.tsx';
let content2 = fs.readFileSync(file2, 'utf8');

const replaceDirect = `<div className="flex items-baseline justify-center md:justify-start gap-2">
                
              </div>`;
const newDirect = `<div className="flex items-baseline justify-center md:justify-start gap-2">
                <p className="text-slate-400 text-2xl md:text-3xl font-bold line-through decoration-red-500/50 decoration-2">7.250.000đ</p>
              </div>`;
content2 = content2.replace(replaceDirect, newDirect);
content2 = content2.replace(
  '<p className="font-heading font-extrabold text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200 text-center">Liên hệ báo giá</p>',
  '<p className="font-heading font-extrabold text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">3.250.000đ</p>'
);
fs.writeFileSync(file2, content2);

console.log('Restored prices for landing pages');
