const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/DirectRestoration.tsx', 'utf-8');

const oldS = `<div className="space-y-4">
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00ADEF] shrink-0 mt-1" />
                <p className="text-slate-700 font-body"><strong>Cơ chế sạc và nhả Fluoride ($F^-$) vĩnh cửu:</strong> Phóng thích ion bảo vệ và tự sạc lại Fluoride ngoại sinh mỗi khi bệnh nhân đánh răng để tái khoáng hóa mô ngà răng thật.</p>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#fb2c36] shrink-0 mt-1" />
                <p className="text-slate-700 font-body"><strong>Kháng khuẩn ở cấp độ phân tử (Nghiên cứu Nature 2018):</strong> Ion Borate ($BO_3^{"{3-}"}$) ức chế trực tiếp gen pdh operon của vi khuẩn Streptococcus mutans, bẻ gãy nguồn năng lượng sống và triệt tiêu khả năng bám dính tạo mảng sinh học (biofilm) ngay cả khi có đường sucrose.</p>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00ADEF] shrink-0 mt-1" />
                <p className="text-slate-700 font-body"><strong>Trung hòa Axit chủ động (pH-buffering):</strong> Phóng thích Aluminium, Sodium và Silicate để kiềm hóa môi trường vi mô quanh miếng trám khi pH rơi xuống dưới 5.5, đưa pH về mức an toàn để chặn đứng sự khử khoáng men ngà.</p>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00ADEF] shrink-0 mt-1" />
                <p className="text-slate-700 font-body"><strong>Bảo vệ mô nướu bờ viền săn chắc:</strong> Kháng mảng bám sinh học giúp giữ vùng nướu quanh đường hoàn tất phục hình luôn hồng hào, săn chắc, giảm thiểu tối đa viêm nướu quanh răng.</p>
              </div>
            </div>`;

const newS = `<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#00ADEF]" />
                </div>
                <h4 className="font-heading font-bold text-slate-900 text-[15px]">Cơ chế sạc và nhả Fluoride ($F^-$) vĩnh cửu</h4>
                <p className="text-sm text-slate-600 font-body leading-relaxed">Phóng thích ion bảo vệ và tự sạc lại Fluoride ngoại sinh mỗi khi bệnh nhân đánh răng để tái khoáng hóa mô ngà răng thật.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-red-500" />
                </div>
                <h4 className="font-heading font-bold text-slate-900 text-[15px]">Kháng khuẩn ở cấp độ phân tử</h4>
                <p className="text-sm text-slate-600 font-body leading-relaxed">Ion Borate ức chế trực tiếp gen của S. mutans, triệt tiêu khả năng bám dính tạo mảng sinh học (Nghiên cứu Nature 2018).</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                  <Droplets className="w-5 h-5 text-emerald-500" />
                </div>
                <h4 className="font-heading font-bold text-slate-900 text-[15px]">Trung hòa Axit chủ động</h4>
                <p className="text-sm text-slate-600 font-body leading-relaxed">Phóng thích ion để kiềm hóa môi trường quanh miếng trám khi pH &lt; 5.5, chặn đứng khử khoáng men ngà.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
                  <Award className="w-5 h-5 text-amber-500" />
                </div>
                <h4 className="font-heading font-bold text-slate-900 text-[15px]">Bảo vệ bờ viền phục hình</h4>
                <p className="text-sm text-slate-600 font-body leading-relaxed">Kháng mảng bám sinh học giúp giữ vùng nướu quanh đường hoàn tất luôn hồng hào, săn chắc dài lâu.</p>
              </div>
            </div>`;

content = content.replace(oldS, newS);
fs.writeFileSync('src/components/shofu/solutions/DirectRestoration.tsx', content);
