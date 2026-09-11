const fs = require('fs');

let file1 = 'src/components/shofu/ShofuOffers.tsx';
let content1 = fs.readFileSync(file1, 'utf8');
content1 = content1.replace(/<span className="text-slate-300 font-semibold">8\.155\.000đ<\/span>/g, '');
content1 = content1.replace(/<span className="text-\[#00ADEF\] font-heading font-extrabold text-lg sm:text-xl">3\.415\.000đ<\/span>/g, '<span className="text-[#00ADEF] font-heading font-extrabold text-lg sm:text-xl">Ưu Đãi Đặc Biệt</span>');
content1 = content1.replace(/<span className="text-slate-300 font-semibold">7\.250\.000đ<\/span>/g, '');
content1 = content1.replace(/<span className="text-\[#C43838\] font-heading font-extrabold text-lg sm:text-xl">3\.250\.000đ<\/span>/g, '<span className="text-[#C43838] font-heading font-extrabold text-lg sm:text-xl">Ưu Đãi Đặc Biệt</span>');
fs.writeFileSync(file1, content1);

let file2 = 'src/components/shofu/solutions/IndirectRestoration.tsx';
let content2 = fs.readFileSync(file2, 'utf8');
content2 = content2.replace(/<p className="text-slate-400 text-2xl md:text-3xl font-bold line-through decoration-red-500\/50 decoration-2">5\.915\.000đ<\/p>/g, '');
content2 = content2.replace(/<p className="text-xs text-slate-500 mt-1">\(Combo 3\.415\.000đ \+ Quà tặng 2\.500\.000đ\)<\/p>/g, '');
content2 = content2.replace(/<p className="font-heading font-extrabold text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">3\.415\.000đ<\/p>/g, '<p className="font-heading font-extrabold text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200 text-center">Liên hệ báo giá</p>');
fs.writeFileSync(file2, content2);

let file3 = 'src/components/shofu/solutions/DirectRestoration.tsx';
let content3 = fs.readFileSync(file3, 'utf8');
content3 = content3.replace(/<p className="text-slate-400 text-2xl md:text-3xl font-bold line-through decoration-red-500\/50 decoration-2">~ 7\.250\.000đ<\/p>/g, '');
content3 = content3.replace(/<p className="font-heading font-extrabold text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">3\.250\.000đ<\/p>/g, '<p className="font-heading font-extrabold text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200 text-center">Liên hệ báo giá</p>');
fs.writeFileSync(file3, content3);

let file4 = 'src/components/ValueStackSection.tsx';
let content4 = fs.readFileSync(file4, 'utf8');
content4 = content4.replace(/ trị giá [0-9.]+đ/g, '');
content4 = content4.replace(/ \(trị giá [0-9.]+đ\)/g, '');
fs.writeFileSync(file4, content4);

console.log('Done others');
