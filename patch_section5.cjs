const fs = require('fs');
let file_path = "/app/applet/src/components/shofu/solutions/DirectRestoration.tsx";
let content = fs.readFileSync(file_path, 'utf8');

const targetOld = `{/* SECTION 5: SOCIAL PROOF */}
      <section className="py-20 lg:py-28 bg-slate-900 relative border-y border-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-light opacity-100 pointer-events-none"></div>
        <div className="w-[90%] lg:w-[80%] mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-white leading-[1.3] mb-4 tracking-tight">Chứng cứ lâm sàng & đánh giá</h2>
            <p className="font-body text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
              Sota-D mang đến những bằng chứng thép từ các <strong className="font-bold text-white bg-slate-800/80 px-1.5 rounded">nghiên cứu lâm sàng độc lập uy tín nhất thế giới đăng trên tạp chí JADA</strong> (Journal of the American Dental Association):
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 hover:border-[#00ADEF]/50 hover:shadow-[0_0_30px_rgba(0,173,239,0.15)] transition-all duration-300 rounded-3xl p-8 text-center flex flex-col items-center">
              <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#00ADEF]/20 text-[#00ADEF] font-mono font-bold text-sm mb-4">Theo dõi 8 năm</div>
              <div className="text-6xl font-extrabold text-[#00ADEF] mb-4">100%</div>
              <h3 className="font-heading font-bold text-xl text-white mb-4">Tỷ lệ lưu giữ</h3>
              <p className="text-slate-400 font-body text-sm mb-4">0% Ê buốt | 0% Thất bại | 0% Sâu răng</p>
              <p className="text-slate-300 font-body leading-relaxed">Kết quả theo dõi lâm sàng sau 8 năm (Đại học Florida): Ghi nhận đạt 100% tỷ lệ lưu giữ phục hình, hoàn toàn không phát hiện bất kỳ ca thất bại phục hình, ê buốt sau điều trị hay sâu răng thứ phát bờ viền dán nào.</p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 hover:border-[#00ADEF]/50 hover:shadow-[0_0_30px_rgba(0,173,239,0.15)] transition-all duration-300 rounded-3xl p-8 text-center flex flex-col items-center">
              <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#00ADEF]/20 text-[#00ADEF] font-mono font-bold text-sm mb-4">Theo dõi 13 năm</div>
              <div className="text-6xl font-extrabold text-[#00ADEF] mb-4">96%</div>
              <h3 className="font-heading font-bold text-xl text-white mb-4">Phục hình sạch bóng sâu răng</h3>
              <p className="text-slate-400 font-body text-sm mb-4">Kháng vi thấm vững bền tuyệt đối</p>
              <p className="text-slate-300 font-body leading-relaxed">Kết quả theo dõi lâm sàng sau 13 năm (Đại học Florida): Đạt 96% tỷ lệ phục hồi không xuất hiện sâu răng thứ phát, chứng minh khả năng phòng thủ sinh học và kháng vi thấm vững bền tuyệt đối theo thời gian.</p>
            </div>
          </div>
          
          <div className="w-full max-w-4xl mx-auto">
            <ImagePlaceholder 
              className="aspect-[21/9] w-full bg-slate-800 border-slate-700" 
              text="Mockup tài liệu góc chụp bài báo cáo lâm sàng chính thức từ Đại học Florida đăng trên JADA, kết hợp biểu đồ hình tròn hiển thị nổi bật hai con số 100% và 96% bằng màu Cyan thương hiệu cực kỳ bắt mắt." 
            />
          </div>
          
          <div className="flex justify-center mt-12 w-full">
            <CtaButton ctaName="TaiBaoCaoLamSang" 
               onClick={() => openCampaignModal("Tải Full báo cáo lâm sàng 13 năm Đại Học Florida")}
              className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#00ADEF] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"
            >
              <span className="truncate">TẢI FULL BÁO CÁO LÂM SÀNG TỪ ĐẠI HỌC FLORIDA</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </CtaButton>
          </div>
        </div>
      </section>`;

const targetOldEscaped = targetOld.replace(/[.*+?^$\\{}()|[\\]]/g, '\\$&');
const targetRegex = new RegExp(targetOldEscaped.replace(/\\n/g, '\\s*\\n\\s*').replace(/\\s+/g, '\\s+'));


const replacementNew = `{/* SECTION 5: SOCIAL PROOF */}
      <section className="py-20 lg:py-28 bg-slate-900 relative border-y border-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-light opacity-100 pointer-events-none"></div>
        <div className="w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-white leading-[1.3] mb-4 tracking-tight">Hệ thống Bằng chứng Khoa học</h2>
            <p className="font-body text-base sm:text-lg text-slate-400 max-w-3xl mx-auto">
              Sota-D mang đến những bằng chứng thép từ các <strong className="font-bold text-white bg-slate-800/80 px-1.5 rounded">nghiên cứu độc lập uy tín nhất thế giới</strong>, bảo chứng tuyệt đối cho chất lượng phục hình.
            </p>
          </div>
          
          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            
            {/* 1. Clinical Evidence JADA */}
            <div className="col-span-1 lg:col-span-2 bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-3xl p-8 hover:border-[#00ADEF]/50 hover:shadow-[0_0_30px_rgba(0,173,239,0.15)] transition-all duration-300">
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
                          <span><strong className="text-white">100%</strong> Tỷ lệ lưu giữ phục hình (Retention rate)</span>
                        </li>
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
                          <span><strong className="text-[#00ADEF] text-lg">96%</strong> Phục hình hoàn toàn không xuất hiện sâu răng thứ phát (tỷ lệ sâu răng tái phát chỉ 3%)</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>Tỷ lệ lưu giữ phục hình duy trì bền vững từ <strong className="text-white">61% – 66%</strong> qua 13 năm</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Molecular Mechanism */}
            <div className="col-span-1 bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-3xl p-6 sm:p-8 hover:border-[#00ADEF]/50 hover:shadow-[0_0_30px_rgba(0,173,239,0.15)] transition-all duration-300 flex flex-col">
              <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-purple-500/20 text-purple-400 font-mono font-bold text-xs mb-4 border border-purple-500/30 w-max">2. Cơ chế Phân tử & Kháng khuẩn</div>
              <h3 className="font-heading font-bold text-xl text-white mb-2">Tạp chí Scientific Reports (Nature Research)</h3>
              <p className="text-slate-400 font-body text-[13px] mb-5">Bằng chứng "trị liệu sinh học chủ động" vượt trội so với composite trơ (Đại học Osaka, 2018).</p>
              <ul className="space-y-4 flex-1">
                <li className="text-sm text-slate-300 leading-relaxed">
                  <strong className="text-white block mb-1">Cơ chế can thiệp di truyền:</strong> 
                  Dịch chiết S-PRG (phóng thích 6 ion: Fluoride, Strontium, Sodium, Borate, Aluminum, Silicate) kìm hãm trực tiếp <strong className="text-purple-400 font-mono">gen pdh operon</strong> (Pyruvate Dehydrogenase) thuộc con đường chuyển hóa đường Embden-Meyerhof-Parnas của vi khuẩn <em className="text-slate-400">Streptococcus mutans</em>.
                </li>
                <li className="text-sm text-slate-300 leading-relaxed bg-slate-900/50 p-3 rounded-xl border border-slate-700/50">
                  <strong className="text-[#00ADEF] block mb-1">Ý nghĩa lâm sàng:</strong> 
                  Cắt đứt nguồn năng lượng sống của vi khuẩn, triệt tiêu khả năng bám dính tạo mảng sinh học (biofilm) ngay cả khi có mặt đường sucrose, <strong className="text-white underline decoration-sky-500 decoration-2 underline-offset-2">giúp bảo vệ bờ viền phục hình 24/7</strong>.
                </li>
              </ul>
            </div>

            {/* Column 3 & 4 */}
            <div className="col-span-1 flex flex-col gap-6 lg:gap-8">
              
              {/* 3. BeautiBond Xtreme */}
              <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-3xl p-6 sm:p-8 hover:border-[#00ADEF]/50 hover:shadow-[0_0_30px_rgba(0,173,239,0.15)] transition-all duration-300 flex-1">
                <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-400 font-mono font-bold text-xs mb-4 border border-amber-500/30 w-max">3. Thử nghiệm Kỹ thuật Keo dán</div>
                <h3 className="font-heading font-bold text-xl text-white mb-2">Độ Bền Dán BeautiBond Xtreme</h3>
                <p className="text-slate-400 font-body text-[13px] mb-4">Giải quyết triệt để "điểm đau" ê buốt và thoái hóa màng keo.</p>
                <ul className="space-y-3">
                  <li className="text-[13px] text-slate-300 leading-relaxed flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5"></span>
                    <span><strong className="text-white">Độ chuyển đổi Monomer đạt 92% – 97%:</strong> Trùng hợp gần tuyệt đối kháng thủy phân dài lâu.</span>
                  </li>
                  <li className="text-[13px] text-slate-300 leading-relaxed flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5"></span>
                    <span><strong className="text-white">Lực dán trượt 30 – 35 MPa:</strong> Giữ vững ngay cả sau nhồi nhiệt 5.000 chu kỳ.</span>
                  </li>
                  <li className="text-[13px] text-slate-300 leading-relaxed flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5"></span>
                    <span><strong className="text-white">Ổn định trên ngà bất thường:</strong> Hiệu quả dán cao nhất trên cả ngà lành và ngà suy thoái.</span>
                  </li>
                  <li className="text-[13px] text-slate-300 leading-relaxed flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5"></span>
                    <span><strong className="text-white">Màng dán siêu mỏng ~5µm:</strong> Lan chảy hoàn hảo, triệt tiêu vi kẽ hở.</span>
                  </li>
                  <li className="text-[13px] text-slate-300 leading-relaxed flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5"></span>
                    <span><strong className="text-[#00ADEF]">HEMA-Free kỵ nước & Acetone:</strong> Tự thẩm thấu sâu, triệt tiêu 100% ê buốt.</span>
                  </li>
                </ul>
              </div>

              {/* 4. Composite Mechanics */}
              <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-3xl p-6 sm:p-8 hover:border-[#00ADEF]/50 hover:shadow-[0_0_30px_rgba(0,173,239,0.15)] transition-all duration-300 flex-1">
                <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono font-bold text-xs mb-4 border border-emerald-500/30 w-max">4. Bằng chứng Cơ học Composite</div>
                <h3 className="font-heading font-bold text-xl text-white mb-2">Beautifil II LS & Injectable X</h3>
                <p className="text-slate-400 font-body text-[13px] mb-4">Giải quyết nỗi lo co ngót, nứt vi kẽ và bọt khí xoang II.</p>
                <div className="space-y-4">
                  <div className="bg-slate-900/50 rounded-xl p-3 border border-slate-700/50">
                    <strong className="text-emerald-400 block text-sm mb-1">Beautifil II LS (Đặc)</strong>
                    <p className="text-[13px] text-slate-300 leading-relaxed">Tỷ lệ hạt độn 83 wt%, độ co rút kỷ lục <strong className="text-white">0.85% Vol</strong>, ứng suất <strong className="text-white">1.37 MPa</strong>. Lực nén 364 MPa, uốn 120 MPa chịu lực nhai lớn mà không mẻ vỡ.</p>
                  </div>
                  <div className="bg-slate-900/50 rounded-xl p-3 border border-slate-700/50">
                    <strong className="text-emerald-400 block text-sm mb-1">Beautifil Injectable X (Lỏng)</strong>
                    <p className="text-[13px] text-slate-300 leading-relaxed">Lưu biến thông minh (Thixotropic) bít kín hốc sâu không đọng bọt khí. Lực nén siêu cường <strong className="text-white">400 MPa</strong> cho phép đắp khối trực tiếp.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          
          <div className="flex justify-center mt-12 w-full">
            <CtaButton ctaName="TaiBaoCaoLamSang" 
               onClick={() => openCampaignModal("Tải bộ Bằng chứng Khoa học từ ĐH Florida & Osaka")}
              className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#00ADEF] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"
            >
              <span className="truncate">TẢI BỘ BẰNG CHỨNG LÂM SÀNG TỪ FLORIDA & OSAKA</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </CtaButton>
          </div>
        </div>
      </section>`;

let startIndex = content.indexOf('{/* SECTION 5: SOCIAL PROOF */}');
let endIndex = content.indexOf('{/* SECTION 5.5: SOCIAL PROOF MARQUEE */}');

if (startIndex !== -1 && endIndex !== -1) {
  content = content.substring(0, startIndex) + replacementNew + '\n\n      ' + content.substring(endIndex);
  fs.writeFileSync(file_path, content);
  console.log("Section 5 replaced successfully.");
} else {
  console.log("Could not find section 5 boundaries.");
}
