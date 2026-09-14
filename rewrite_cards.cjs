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
              <div className="absolute inset-0 rounded-3xl border border-slate-700/50 bg-slate-800/50 backdrop-blur-md pointer-events-none group-hover:border-[#00ADEF]/50 group-hover:shadow-[0_0_30px_rgba(0,173,239,0.15)] transition-all duration-300 [mask-image:linear-gradient(to_bottom,black_0px,black_60%,transparent_95%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0px,black_60%,transparent_95%)] sm:[mask-image:none] sm:[-webkit-mask-image:none]" />
              
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="flex-1 w-full">
                  <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-blue-500/20 text-blue-400 font-mono font-bold text-xs mb-4 border border-blue-500/30">1. Bằng chứng Lâm sàng Dài hạn Độc lập</div>
                  <h3 className="font-heading font-bold text-2xl text-white mb-2">Tạp chí JADA - Đại học Florida</h3>
                  <p className="text-slate-400 font-body text-sm mb-6">Bảo chứng quan trọng nhất dập tắt nghi ngờ về độ bền và nguy cơ sâu răng thứ phát dưới lớp trám.</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 -mx-6 sm:mx-0">
                    <div className="bg-slate-900/80 sm:bg-slate-900/50 rounded-none sm:rounded-2xl p-5 border-y sm:border border-slate-700/50 sm:border-slate-700/50 backdrop-blur-sm sm:backdrop-blur-none">
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
                    <div className="bg-slate-900/80 sm:bg-slate-900/50 rounded-none sm:rounded-2xl p-5 border-y border-t-0 sm:border-t sm:border border-slate-700/50 backdrop-blur-sm sm:backdrop-blur-none shadow-[0_10px_20px_rgba(0,0,0,0.2)] sm:shadow-none">
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

const oldCard2 = `<div className="col-span-1 bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-3xl p-6 sm:p-8 hover:border-[#00ADEF]/50 hover:shadow-[0_0_30px_rgba(0,173,239,0.15)] transition-all duration-300 flex flex-col">
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
            </div>`;

const newCard2 = `<div className="col-span-1 relative rounded-3xl p-6 sm:p-8 pb-0 sm:pb-8 transition-all flex flex-col group">
              <div className="absolute inset-0 rounded-3xl border border-slate-700/50 bg-slate-800/50 backdrop-blur-md pointer-events-none group-hover:border-[#00ADEF]/50 group-hover:shadow-[0_0_30px_rgba(0,173,239,0.15)] transition-all duration-300 [mask-image:linear-gradient(to_bottom,black_0px,black_45%,transparent_90%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0px,black_45%,transparent_90%)] sm:[mask-image:none] sm:[-webkit-mask-image:none]" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-purple-500/20 text-purple-400 font-mono font-bold text-xs mb-4 border border-purple-500/30 w-max">2. Cơ chế Phân tử & Kháng khuẩn</div>
                <h3 className="font-heading font-bold text-xl text-white mb-2">Tạp chí Scientific Reports (Nature Research)</h3>
                <p className="text-slate-400 font-body text-[13px] mb-5">Bằng chứng "trị liệu sinh học chủ động" vượt trội so với composite trơ (Đại học Osaka, 2018).</p>
                
                <ul className="space-y-0 sm:space-y-4 flex-1 -mx-6 sm:mx-0 flex flex-col justify-end">
                  <li className="text-sm text-slate-300 leading-relaxed px-6 sm:px-0 mb-4 sm:mb-0">
                    <strong className="text-white block mb-1">Cơ chế can thiệp di truyền:</strong> 
                    Dịch chiết S-PRG (phóng thích 6 ion: Fluoride, Strontium, Sodium, Borate, Aluminum, Silicate) kìm hãm trực tiếp <strong className="text-purple-400 font-mono">gen pdh operon</strong> (Pyruvate Dehydrogenase) thuộc con đường chuyển hóa đường Embden-Meyerhof-Parnas của vi khuẩn <em className="text-slate-400">Streptococcus mutans</em>.
                  </li>
                  <li className="text-sm text-slate-300 leading-relaxed bg-slate-900/80 sm:bg-slate-900/50 p-5 sm:p-4 rounded-none sm:rounded-xl border-y sm:border border-slate-700/50 backdrop-blur-sm sm:backdrop-blur-none shadow-[0_10px_20px_rgba(0,0,0,0.2)] sm:shadow-none">
                    <strong className="text-[#00ADEF] block mb-1">Ý nghĩa lâm sàng:</strong> 
                    Cắt đứt nguồn năng lượng sống của vi khuẩn, triệt tiêu khả năng bám dính tạo mảng sinh học (biofilm) ngay cả khi có mặt đường sucrose, <strong className="text-white underline decoration-sky-500 decoration-2 underline-offset-2">giúp bảo vệ bờ viền phục hình 24/7</strong>.
                  </li>
                </ul>
              </div>
            </div>`;


content = content.replace(oldCard1, newCard1);
content = content.replace(oldCard2, newCard2);

// Now apply to Card 3 & 4
const oldCard3 = `<div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-3xl p-6 sm:p-8 hover:border-[#00ADEF]/50 hover:shadow-[0_0_30px_rgba(0,173,239,0.15)] transition-all duration-300 flex-1">
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
                    <span><strong className="text-[#00ADEF]">HEMA-Free kỵ nước & Acetone:</strong> Tự thẩm thấu sâu, triệt tiêu ê buốt.</span>
                  </li>
                </ul>
              </div>`;

const newCard3 = `<div className="relative rounded-3xl p-6 sm:p-8 pb-0 sm:pb-8 transition-all flex flex-col flex-1 group">
                <div className="absolute inset-0 rounded-3xl border border-slate-700/50 bg-slate-800/50 backdrop-blur-md pointer-events-none group-hover:border-[#00ADEF]/50 group-hover:shadow-[0_0_30px_rgba(0,173,239,0.15)] transition-all duration-300 [mask-image:linear-gradient(to_bottom,black_0px,black_45%,transparent_90%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0px,black_45%,transparent_90%)] sm:[mask-image:none] sm:[-webkit-mask-image:none]" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-400 font-mono font-bold text-xs mb-4 border border-amber-500/30 w-max">3. Thử nghiệm Kỹ thuật Keo dán</div>
                  <h3 className="font-heading font-bold text-xl text-white mb-2">Độ Bền Dán BeautiBond Xtreme</h3>
                  <p className="text-slate-400 font-body text-[13px] mb-4">Giải quyết triệt để "điểm đau" ê buốt và thoái hóa màng keo.</p>
                  
                  <div className="-mx-6 sm:mx-0 flex-1 flex flex-col justify-end mt-4 sm:mt-0">
                    <ul className="space-y-3 bg-slate-900/80 sm:bg-transparent p-5 sm:p-0 rounded-none sm:rounded-none border-y sm:border-0 border-slate-700/50 backdrop-blur-sm sm:backdrop-blur-none shadow-[0_10px_20px_rgba(0,0,0,0.2)] sm:shadow-none">
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
                        <span><strong className="text-[#00ADEF]">HEMA-Free kỵ nước & Acetone:</strong> Tự thẩm thấu sâu, triệt tiêu ê buốt.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>`;

const oldCard4 = `<div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-3xl p-6 sm:p-8 hover:border-[#00ADEF]/50 hover:shadow-[0_0_30px_rgba(0,173,239,0.15)] transition-all duration-300 flex-1">
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
              </div>`;

const newCard4 = `<div className="relative rounded-3xl p-6 sm:p-8 pb-0 sm:pb-8 transition-all flex flex-col flex-1 group">
                <div className="absolute inset-0 rounded-3xl border border-slate-700/50 bg-slate-800/50 backdrop-blur-md pointer-events-none group-hover:border-[#00ADEF]/50 group-hover:shadow-[0_0_30px_rgba(0,173,239,0.15)] transition-all duration-300 [mask-image:linear-gradient(to_bottom,black_0px,black_45%,transparent_90%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0px,black_45%,transparent_90%)] sm:[mask-image:none] sm:[-webkit-mask-image:none]" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono font-bold text-xs mb-4 border border-emerald-500/30 w-max">4. Bằng chứng Cơ học Composite</div>
                  <h3 className="font-heading font-bold text-xl text-white mb-2">Beautifil II LS & Injectable X</h3>
                  <p className="text-slate-400 font-body text-[13px] mb-4">Giải quyết nỗi lo co ngót, nứt vi kẽ và bọt khí xoang II.</p>
                  
                  <div className="space-y-0 sm:space-y-4 -mx-6 sm:mx-0 flex flex-col justify-end mt-4 sm:mt-0">
                    <div className="bg-slate-900/80 sm:bg-slate-900/50 rounded-none sm:rounded-xl p-5 sm:p-4 border-t sm:border border-slate-700/50 backdrop-blur-sm sm:backdrop-blur-none shadow-[0_10px_20px_rgba(0,0,0,0.2)] sm:shadow-none">
                      <strong className="text-emerald-400 block text-sm mb-1">Beautifil II LS (Đặc)</strong>
                      <p className="text-[13px] text-slate-300 leading-relaxed">Tỷ lệ hạt độn 83 wt%, độ co rút kỷ lục <strong className="text-white">0.85% Vol</strong>, ứng suất <strong className="text-white">1.37 MPa</strong>. Lực nén 364 MPa, uốn 120 MPa chịu lực nhai lớn mà không mẻ vỡ.</p>
                    </div>
                    <div className="bg-slate-900/80 sm:bg-slate-900/50 rounded-none sm:rounded-xl p-5 sm:p-4 border-y sm:border border-slate-700/50 backdrop-blur-sm sm:backdrop-blur-none shadow-[0_10px_20px_rgba(0,0,0,0.2)] sm:shadow-none">
                      <strong className="text-emerald-400 block text-sm mb-1">Beautifil Injectable X (Lỏng)</strong>
                      <p className="text-[13px] text-slate-300 leading-relaxed">Lưu biến thông minh (Thixotropic) bít kín hốc sâu không đọng bọt khí. Lực nén siêu cường <strong className="text-white">400 MPa</strong> cho phép đắp khối trực tiếp.</p>
                    </div>
                  </div>
                </div>
              </div>`;

content = content.replace(oldCard3, newCard3);
content = content.replace(oldCard4, newCard4);

fs.writeFileSync(file_path, content);
console.log("All 4 cards in Section 5 patched.");
