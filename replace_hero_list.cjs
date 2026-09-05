const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/DirectRestoration.tsx', 'utf-8');

const oldPara = `<p className="font-body text-[14.5px] min-[375px]:text-[15.5px] sm:text-lg text-slate-600 mb-8 leading-[1.7] max-w-2xl mx-auto lg:mx-0">
              Trải nghiệm bước dịch chuyển đột phá từ "Phục hồi cơ học thụ động" sang <strong>"Trị liệu sinh học chủ động"</strong> với hệ sinh thái Giomer ứng dụng công nghệ hạt độn S-PRG từ Shofu Nhật Bản. Quy trình lâm sàng được tối giản hóa tối đa, giúp bảo tồn cấu trúc ngà sống và giải phóng hoàn toàn áp lực nhạy cảm kỹ thuật cho Bác sĩ.
            </p>`;

const newPara = `<p className="font-body text-base sm:text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Trải nghiệm bước dịch chuyển đột phá từ "Phục hồi cơ học thụ động" sang <strong className="text-slate-900">"Trị liệu sinh học chủ động"</strong> với hệ sinh thái Giomer ứng dụng công nghệ hạt độn S-PRG từ <strong className="text-slate-900">Shofu Nhật Bản</strong>. Quy trình lâm sàng được tối giản hóa tối đa, giúp <strong className="text-slate-900">bảo tồn cấu trúc ngà sống</strong> và giải phóng hoàn toàn áp lực nhạy cảm kỹ thuật cho Bác sĩ.
            </p>`;

const oldUl = `<ul className="space-y-4 mb-10 text-left max-w-2xl mx-auto lg:mx-0">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#00ADEF] shrink-0 mt-0.5" />
                <span className="font-body text-slate-700 leading-relaxed">
                  <strong>Triệt tiêu 100% nguy cơ ê buốt tức thì</strong> nhờ màng dán kỵ nước HEMA-Free của keo dán thế hệ 8 BeautiBond Xtreme.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#00ADEF] shrink-0 mt-0.5" />
                <span className="font-body text-slate-700 leading-relaxed">
                  <strong>Chống vi thấm và hở kẽ đường viền</strong> nhờ dòng composite đặc Beautifil II LS sở hữu độ co rút thể tích cực thấp kỷ lục chỉ 0.85% Vol.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#00ADEF] shrink-0 mt-0.5" />
                <span className="font-body text-slate-700 leading-relaxed">
                  <strong>Thiết lập màng khiên bảo vệ sinh học 24/7</strong> chống sâu răng tái phát nhờ cơ chế phóng thích và tự sạc lại 6 loại ion của hạt độn S-PRG.
                </span>
              </li>
            </ul>`;

const newUl = `<ul className="space-y-3 mb-10">
              <li className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl border border-slate-200/80 bg-white/50 backdrop-blur-sm shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-[#C43838]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-[15px] mb-1 leading-snug">Triệt tiêu 100% nguy cơ ê buốt tức thì</h4>
                  <p className="text-slate-600 text-[13px] sm:text-sm leading-relaxed">Nhờ màng dán kỵ nước HEMA-Free của keo dán thế hệ 8 BeautiBond Xtreme.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl border border-slate-200/80 bg-white/50 backdrop-blur-sm shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                  <Layers className="w-4 h-4 text-[#00ADEF]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-[15px] mb-1 leading-snug">Chống vi thấm và hở kẽ đường viền</h4>
                  <p className="text-slate-600 text-[13px] sm:text-sm leading-relaxed">Nhờ dòng composite đặc Beautifil II LS sở hữu độ co rút thể tích cực thấp kỷ lục chỉ 0.85% Vol.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl border border-slate-200/80 bg-white/50 backdrop-blur-sm shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
                <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-[15px] mb-1 leading-snug">Màng khiên bảo vệ sinh học 24/7</h4>
                  <p className="text-slate-600 text-[13px] sm:text-sm leading-relaxed">Chống sâu răng tái phát nhờ cơ chế phóng thích và tự sạc lại 6 loại ion của hạt độn S-PRG.</p>
                </div>
              </li>
            </ul>`;

content = content.replace(oldPara, newPara);
content = content.replace(oldUl, newUl);

fs.writeFileSync('src/components/shofu/solutions/DirectRestoration.tsx', content);
