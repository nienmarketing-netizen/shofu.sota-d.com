const fs = require('fs');
let file = 'src/components/shofu/ShofuOffers.tsx';
let content = fs.readFileSync(file, 'utf8');

// The original lines before I removed them were:
// <span className="text-slate-300 font-semibold">8.155.000đ</span>
// <span className="text-[#00ADEF] font-heading font-extrabold text-lg sm:text-xl">3.415.000đ</span>
//
// <span className="text-slate-300 font-semibold">7.250.000đ</span>
// <span className="text-[#C43838] font-heading font-extrabold text-lg sm:text-xl">3.250.000đ</span>

// Right now they look like this:
//                   <span className="text-slate-400">Tổng giá trị:</span>
//                   
//                 </div>
//                 <div className="flex justify-between items-center text-sm">
//                   <span className="text-slate-300 font-medium">Mức đầu tư ưu đãi:</span>
//                   <span className="text-[#00ADEF] font-heading font-extrabold text-lg sm:text-xl">Ưu Đãi Đặc Biệt</span>

let replaceBlock1 = `<span className="text-slate-400">Tổng giá trị:</span>
                  
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-300 font-medium">Mức đầu tư ưu đãi:</span>
                  <span className="text-[#00ADEF] font-heading font-extrabold text-lg sm:text-xl">Ưu Đãi Đặc Biệt</span>`;

let newBlock1 = `<span className="text-slate-400">Tổng giá trị:</span>
                  <span className="text-slate-300 font-semibold">8.155.000đ</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-300 font-medium">Mức đầu tư ưu đãi:</span>
                  <span className="text-[#00ADEF] font-heading font-extrabold text-lg sm:text-xl">3.415.000đ</span>`;


let replaceBlock2 = `<span className="text-slate-400">Tổng giá trị:</span>
                  
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-300 font-medium">Mức đầu tư ưu đãi:</span>
                  <span className="text-[#C43838] font-heading font-extrabold text-lg sm:text-xl">Ưu Đãi Đặc Biệt</span>`;

let newBlock2 = `<span className="text-slate-400">Tổng giá trị:</span>
                  <span className="text-slate-300 font-semibold">7.250.000đ</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-300 font-medium">Mức đầu tư ưu đãi:</span>
                  <span className="text-[#C43838] font-heading font-extrabold text-lg sm:text-xl">3.250.000đ</span>`;


content = content.replace(replaceBlock1, newBlock1);
content = content.replace(replaceBlock2, newBlock2);

fs.writeFileSync(file, content);
console.log('Restored ShofuOffers prices');
