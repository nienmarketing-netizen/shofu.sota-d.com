const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/DirectRestoration.tsx', 'utf-8');

const target = `<p className="font-body text-slate-600 leading-relaxed text-base sm:text-lg">
                  Khó cô lập hoàn toàn, dễ bị nhiễm ẩm, khó tạo tiếp xúc bên, và đặc biệt là áp lực co ngót vật liệu kéo giật cùi răng gây hở vi kẽ. Nhiều Bác sĩ trẻ thường tự đổ lỗi cho kỹ năng thao tác thổi khô sai kỹ thuật của mình.
                </p>`;

const replacement = `<div className="space-y-3 mb-5">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
                    <span className="font-body text-slate-700 text-base sm:text-lg">Khó cô lập hoàn toàn</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
                    <span className="font-body text-slate-700 text-base sm:text-lg">Dễ bị nhiễm ẩm</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
                    <span className="font-body text-slate-700 text-base sm:text-lg">Khó tạo tiếp xúc bên</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
                    <span className="font-body text-slate-700 text-base sm:text-lg">Áp lực co ngót vật liệu kéo giật cùi răng gây hở vi kẽ</span>
                  </div>
                </div>
                <div className="pt-5 border-t border-slate-100">
                  <p className="font-body text-slate-600 leading-relaxed text-base sm:text-lg italic">
                    "Nhiều Bác sĩ trẻ thường tự đổ lỗi cho kỹ năng thao tác thổi khô sai kỹ thuật của mình."
                  </p>
                </div>`;

content = content.replace(target, replacement);
fs.writeFileSync('src/components/shofu/solutions/DirectRestoration.tsx', content);
