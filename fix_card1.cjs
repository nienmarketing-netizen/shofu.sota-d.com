const fs = require('fs');
let file_path = "/app/applet/src/components/shofu/solutions/DirectRestoration.tsx";
let content = fs.readFileSync(file_path, 'utf8');

const oldCard1 = `<div className="col-span-1 lg:col-span-2 bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-3xl p-8 hover:border-[#00ADEF]/50 hover:shadow-[0_0_30px_rgba(0,173,239,0.15)] transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="flex-1">
                  <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-blue-500/20 text-blue-400 font-mono font-bold text-xs mb-4 border border-blue-500/30">1. Bằng chứng Lâm sàng Dài hạn Độc lập</div>
                  <h3 className="font-heading font-bold text-2xl text-white mb-2">Tạp chí JADA - Đại học Florida</h3>
                  <p className="text-slate-400 font-body text-sm mb-6">Bảo chứng quan trọng nhất dập tắt nghi ngờ về độ bền và nguy cơ sâu răng thứ phát dưới lớp trám.</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-slate-900/50 rounded-2xl p-5 border border-slate-700/50">
                      <div className="text-[#00ADEF] font-mono font-bold text-sm mb-2">Theo dõi 8 năm (Công bố trên JADA 2007)</div>
                      <p className="text-xs text-slate-400 mb-3 italic">Nghiên cứu của GS. Valeria V. Gordan trên phục hình Xoang I & II ghi nhận:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span><strong className="text-white">0%</strong> Thất bại phục hình (Failures)</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span><strong className="text-white">0%</strong> Sâu răng thứ phát bờ viền dán</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span><strong className="text-white">0%</strong> Ê buốt / Nhạy cảm ngà sau điều trị</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-slate-900/50 rounded-2xl p-5 border border-slate-700/50">
                      <div className="text-[#00ADEF] font-mono font-bold text-sm mb-2">Theo dõi 13 năm (Báo cáo IADR 2013 / JADA 2014)</div>
                      <p className="text-xs text-slate-400 mb-3 italic">Khẳng định khả năng duy trì bền bỉ dài hạn:</p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2 text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span><strong className="text-[#00ADEF] text-lg">96%</strong> Phục hình hoàn toàn không xuất hiện sâu răng thứ phát</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span><strong className="text-white">0%</strong> ê buốt/ nhạy cảm sau điều trị</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;

const newCard1 = `<div className="col-span-1 lg:col-span-2 relative rounded-3xl p-6 sm:p-8 pb-0 sm:pb-8 transition-all flex flex-col justify-between group">
              <div className="absolute inset-0 rounded-3xl border border-slate-700/50 bg-slate-800/50 backdrop-blur-md pointer-events-none group-hover:border-[#00ADEF]/50 group-hover:shadow-[0_0_30px_rgba(0,173,239,0.15)] transition-all duration-300 [mask-image:linear-gradient(to_bottom,black_0px,black_185px,transparent_240px)] [-webkit-mask-image:linear-gradient(to_bottom,black_0px,black_185px,transparent_240px)] sm:[mask-image:none] sm:[-webkit-mask-image:none]" />
              
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center h-full">
                <div className="flex-1 w-full h-full flex flex-col">
                  <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-blue-500/20 text-blue-400 font-mono font-bold text-xs mb-4 border border-blue-500/30 w-max">1. Bằng chứng Lâm sàng Dài hạn Độc lập</div>
                  <h3 className="font-heading font-bold text-2xl text-white mb-2">Tạp chí JADA - Đại học Florida</h3>
                  <p className="text-slate-400 font-body text-sm mb-6">Bảo chứng quan trọng nhất dập tắt nghi ngờ về độ bền và nguy cơ sâu răng thứ phát dưới lớp trám.</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 -mx-6 sm:mx-0 mt-auto">
                    <div className="bg-slate-900/50 rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-slate-700/50">
                      <div className="text-[#00ADEF] font-mono font-bold text-sm mb-2">Theo dõi 8 năm (Công bố trên JADA 2007)</div>
                      <p className="text-xs text-slate-400 mb-3 italic">Nghiên cứu của GS. Valeria V. Gordan trên phục hình Xoang I & II ghi nhận:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span><strong className="text-white">0%</strong> Thất bại phục hình (Failures)</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span><strong className="text-white">0%</strong> Sâu răng thứ phát bờ viền dán</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span><strong className="text-white">0%</strong> Ê buốt / Nhạy cảm ngà sau điều trị</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-slate-900/50 rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-slate-700/50">
                      <div className="text-[#00ADEF] font-mono font-bold text-sm mb-2">Theo dõi 13 năm (Báo cáo IADR 2013 / JADA 2014)</div>
                      <p className="text-xs text-slate-400 mb-3 italic">Khẳng định khả năng duy trì bền bỉ dài hạn:</p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2 text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span><strong className="text-[#00ADEF] text-lg">96%</strong> Phục hình hoàn toàn không xuất hiện sâu răng thứ phát</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span><strong className="text-white">0%</strong> ê buốt/ nhạy cảm sau điều trị</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;

if (content.includes(oldCard1)) {
    content = content.replace(oldCard1, newCard1);
    fs.writeFileSync(file_path, content);
    console.log("Card 1 successfully updated.");
} else {
    console.log("Card 1 text not found!");
}
