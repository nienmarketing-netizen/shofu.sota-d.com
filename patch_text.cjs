const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

const targetStr = `<div className="text-center mb-6">
                <h4 className="font-heading font-bold text-sm md:text-lg text-slate-900 mb-4">Tối ưu lợi nhuận với BeautiLink SA</h4>
                <div className="flex flex-col items-center gap-1.5 sm:gap-2">
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-amber-50 text-amber-600 font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-sm border border-amber-200 whitespace-nowrap">
                    <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> 
                    <span>Tiết kiệm ~800 triệu VNĐ/năm</span>
                  </div>
                  <span className="text-[10px] sm:text-xs italic text-slate-500">Với quy mô ~500 răng sứ/tháng</span>
                </div>
              </div>`;

const replacementStr = `<div className="mb-6 lg:mb-8">
                <p className="font-body text-sm md:text-base text-slate-600 leading-relaxed text-center lg:text-left">
                  <strong className="text-slate-900">Chuẩn hóa quy trình</strong>, <strong className="text-[#00ADEF]">làm chủ lượng vật tư</strong> sử dụng, <strong className="text-slate-900">cắt giảm chi phí</strong> dán gắn về mức tối thiểu và giữ lại <strong className="text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded font-bold">nguồn lợi nhuận khổng lồ</strong> cho phòng khám.
                </p>
              </div>`;

if (content.includes(targetStr)) {
    content = content.replace(targetStr, replacementStr);
    fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);
    console.log("Successfully replaced block with new text!");
} else {
    console.log("Target string not found.");
}
