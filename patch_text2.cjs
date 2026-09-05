const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

const targetStr = `<div className="mb-6 lg:mb-8">
                <p className="font-body text-sm md:text-base text-slate-600 leading-relaxed text-center lg:text-left">
                  <strong className="text-slate-900">Chuẩn hóa quy trình</strong>, <strong className="text-[#00ADEF]">làm chủ lượng vật tư</strong> sử dụng, <strong className="text-slate-900">cắt giảm chi phí</strong> dán gắn về mức tối thiểu và giữ lại <strong className="text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded font-bold">nguồn lợi nhuận khổng lồ</strong> cho phòng khám.
                </p>
              </div>`;

const replacementStr = `<div>
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-[#00ADEF] shrink-0" />
                  <h4 className="font-heading font-bold text-sm md:text-lg text-slate-900">Tối ưu lợi nhuận với BeautiLink SA</h4>
                </div>
                <p className="font-body text-sm text-slate-600 leading-relaxed mb-6">
                  <strong className="text-slate-900">Chuẩn hóa quy trình</strong>, <strong className="text-[#00ADEF]">làm chủ lượng vật tư</strong> sử dụng, <strong className="text-slate-900">cắt giảm chi phí</strong> dán gắn về mức tối thiểu và giữ lại <strong className="text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded font-bold">nguồn lợi nhuận khổng lồ</strong> cho phòng khám.
                </p>
              </div>`;

if (content.includes(targetStr)) {
    content = content.replace(targetStr, replacementStr);
    fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);
    console.log("Updated!");
} else {
    console.log("Target not found");
}
