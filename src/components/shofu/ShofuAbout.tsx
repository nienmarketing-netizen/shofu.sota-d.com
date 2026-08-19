import React, { useState } from 'react';
import { Hexagon, Activity, ShieldCheck, Zap, Layers, Microscope, Award, TrendingUp, BookOpen, Target, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function ShofuAbout() {
  const [isReportExpanded, setIsReportExpanded] = useState(false);

  const ions = [
    { name: 'Fluoride', desc: 'Tái khoáng hóa men răng', icon: ShieldCheck, color: 'text-[#00ADEF]' },
    { name: 'Borate', desc: 'Kháng khuẩn mạnh mẽ', icon: Activity, color: 'text-[#C43838]' },
    { name: 'Aluminum', desc: 'Giảm ê buốt chủ động', icon: Zap, color: 'text-[#00ADEF]' },
    { name: 'Silicate', desc: 'Thúc đẩy canxi hóa', icon: Hexagon, color: 'text-[#C43838]' },
    { name: 'Strontium', desc: 'Trung hòa axit mảng bám', icon: ShieldCheck, color: 'text-[#00ADEF]' },
    { name: 'Sodium', desc: 'Xúc tác phản ứng sinh học', icon: Zap, color: 'text-[#C43838]' },
  ];

  return (
    <section id="about-shofu" className="py-20 relative border-b border-slate-200 bg-slate-100 bg-grid-pattern">
      <div className="w-[90%] lg:w-[80%] mx-auto">
        
        {/* Brand History */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 mb-6 uppercase">
              Di Sản 100 Năm <br />
              Nha Khoa Nhật Bản
            </h2>
            <p className="font-body text-base text-slate-600 mb-6 leading-relaxed">
              Kể từ khi thành lập năm 1922 tại Kyoto, Shofu đã không ngừng tiên phong trong việc phát triển các vật liệu nha khoa mang tính đột phá. Sự tỉ mỉ, độ chính xác và cam kết chất lượng tuyệt đối của người Nhật được đúc kết trong từng sản phẩm.
            </p>
            <p className="font-body text-base text-slate-600 mb-8 leading-relaxed">
              Hôm nay, Shofu tự hào là một trong những tập đoàn nha khoa toàn cầu, mang đến giải pháp lâm sàng đáng tin cậy cho hàng triệu Bác sĩ tại hơn 100 quốc gia.
            </p>
            <div className="flex items-center gap-6 pt-6 border-t border-slate-200">
              <div>
                <div className="font-heading font-bold text-3xl text-[#C43838]">1922</div>
                <div className="font-mono text-xs text-slate-500 uppercase mt-1">Năm Thành Lập</div>
              </div>
              <div className="w-[1px] h-10 bg-slate-200"></div>
              <div>
                <div className="font-heading font-bold text-3xl text-[#00ADEF]">100+</div>
                <div className="font-mono text-xs text-slate-500 uppercase mt-1">Quốc Gia Phân Phối</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00ADEF]/20 to-[#C43838]/20 rounded-3xl blur-3xl transform -rotate-6 opacity-60"></div>
            <img 
              src="/images/Shofu-1922-office.png" 
              alt="Shofu History 1922" 
              className="relative w-full h-auto object-cover rounded-3xl mix-blend-multiply"
              style={{ 
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)',
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)' 
              }}
            />
          </div>
        </div>

        {/* Technology Report - S-PRG */}
        <div className="pt-8 sm:pt-12">
          
          {/* Report Header */}
          <div className="bg-slate-900 rounded-[2.5rem] px-8 py-12 sm:px-12 relative overflow-hidden mb-8 shadow-xl shadow-slate-900/10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00ADEF] opacity-20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C43838] opacity-20 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-sm">
                <BookOpen className="w-4 h-4 text-[#00ADEF]" />
                <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">Báo cáo Chuyên môn</span>
              </div>
              <h3 className="font-heading font-extrabold text-3xl md:text-5xl text-white mb-6 leading-tight">
                Công nghệ hạt độn sinh học <span className="text-[#00ADEF]">S-PRG</span>
              </h3>
              <p className="font-body text-lg text-slate-300 max-w-3xl leading-relaxed mb-8">
                Từ phục hồi thụ động sang trị liệu sinh học chủ động. S-PRG không đơn thuần là hạt độn, mà là một cỗ máy vi thể thay đổi hoàn toàn môi trường phục hình.
              </p>
              
              <button 
                onClick={() => setIsReportExpanded(!isReportExpanded)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#00ADEF] text-white font-bold hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm sm:text-base"
              >
                {isReportExpanded ? 'Thu gọn báo cáo' : 'Xem toàn bộ thông tin'}
                {isReportExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isReportExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="space-y-16 sm:space-y-20 pb-8">
            
            {/* 1. Cấu trúc 3 lớp */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-2xl text-slate-900">Cấu trúc 3 lớp phức hợp</h4>
                  <p className="font-mono text-sm text-[#00ADEF] font-semibold uppercase">Biên độ an toàn vượt trội</p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200 hover:border-[#00ADEF]/30 transition-colors">
                  <div className="font-heading font-bold text-4xl text-slate-200 mb-4">01</div>
                  <h5 className="font-heading font-bold text-lg text-slate-900 mb-2">Lõi thủy tinh đa chức năng</h5>
                  <p className="font-body text-sm text-slate-600 leading-relaxed">Kho dự trữ ion khổng lồ từ phức hợp fluoro-boro-alumino-silicate.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200 hover:border-[#00ADEF]/30 transition-colors">
                  <div className="font-heading font-bold text-4xl text-slate-200 mb-4">02</div>
                  <h5 className="font-heading font-bold text-lg text-slate-900 mb-2">Lớp pha Glass-ionomer</h5>
                  <p className="font-body text-sm text-slate-600 leading-relaxed">Hình thành từ phản ứng với axit polyacrylic, tạo ma trận trao đổi ion ổn định.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200 hover:border-[#00ADEF]/30 transition-colors">
                  <div className="font-heading font-bold text-4xl text-slate-200 mb-4">03</div>
                  <h5 className="font-heading font-bold text-lg text-slate-900 mb-2">Lớp biến tính bề mặt</h5>
                  <p className="font-body text-sm text-slate-600 leading-relaxed">Bảo vệ lõi thủy tinh khỏi suy thoái cơ học nhưng vẫn duy trì kênh dẫn ion.</p>
                </div>
              </div>
            </div>

            {/* 2. Lá chắn 6 ion */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-[#00ADEF] shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-2xl text-slate-900">Lá chắn 6 ion sinh học</h4>
                  <p className="font-mono text-sm text-[#00ADEF] font-semibold uppercase">Cơ chế pH-buffering & Recharge/Release</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
                {ions.map((ion) => (
                  <div key={ion.name} className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                    <ion.icon className={`w-8 h-8 shrink-0 ${ion.color}`} />
                    <div>
                      <h4 className="font-heading font-bold text-slate-900 mb-1">{ion.name}</h4>
                      <p className="font-body text-xs text-slate-500 leading-snug">{ion.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-slate-900 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <h5 className="font-heading font-bold text-xl text-white mb-3">Cơ chế pH-buffering</h5>
                  <p className="font-body text-sm text-slate-300 leading-relaxed">Khi pH môi trường giảm xuống dưới ngưỡng <span className="text-[#00ADEF] font-bold">5.5</span>, vật liệu chủ động giải phóng ion để trung hòa axit, ngăn chặn khử khoáng ngà răng.</p>
                </div>
                <div className="w-px h-16 bg-slate-700 hidden md:block"></div>
                <div className="w-full h-px bg-slate-700 block md:hidden"></div>
                <div className="flex-1">
                  <h5 className="font-heading font-bold text-xl text-white mb-3">Sạc & Nhả (Recharge & Release)</h5>
                  <p className="font-body text-sm text-slate-300 leading-relaxed">Hấp thụ F- từ các nguồn ngoại sinh (kem đánh răng) để duy trì đặc tính trị liệu suốt đời phục hình. Lớp bảo hiểm vững chắc cho bệnh nhân.</p>
                </div>
              </div>
            </div>

            {/* 3. Bằng chứng khoa học */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Nature */}
              <div className="rounded-3xl border border-slate-200 overflow-hidden flex flex-col shadow-sm">
                <div className="bg-white p-6 sm:p-8 border-b border-slate-200">
                  <div className="flex items-center justify-between mb-4">
                    <Microscope className="w-8 h-8 text-[#00ADEF]" />
                    <span className="font-mono text-[10px] sm:text-xs font-bold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">Nature Research 2018</span>
                  </div>
                  <h4 className="font-heading font-bold text-2xl text-slate-900 mb-2">Đột phá kháng khuẩn cấp độ phân tử</h4>
                  <p className="font-body text-sm text-slate-600">Đại học Osaka chứng minh cơ chế ức chế gen độc bản của dịch chiết S-PRG.</p>
                </div>
                <div className="p-6 sm:p-8 flex-1 bg-white space-y-4">
                  <div className="flex gap-3">
                    <Target className="w-5 h-5 text-[#C43838] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-sm text-slate-900 mb-1">Vô hiệu hóa gen "pdh operon"</strong>
                      <span className="text-xs text-slate-600 leading-relaxed">Kìm hãm cụm gen Pyruvate Dehydrogenase của vi khuẩn S. mutans.</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Target className="w-5 h-5 text-[#C43838] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-sm text-slate-900 mb-1">Đứt gãy con đường sinh hóa</strong>
                      <span className="text-xs text-slate-600 leading-relaxed">Triệt tiêu nguồn năng lượng từ quá trình chuyển hóa đường của vi khuẩn.</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Target className="w-5 h-5 text-[#C43838] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-sm text-slate-900 mb-1">Cơ chế bỏ đói (Starvation)</strong>
                      <span className="text-xs text-slate-600 leading-relaxed">Vi khuẩn không thể tạo ra axit và màng sinh học ngay cả khi có mặt đường sucrose.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Florida */}
              <div className="rounded-3xl border border-slate-200 overflow-hidden flex flex-col shadow-sm">
                <div className="bg-white p-6 sm:p-8 border-b border-slate-200">
                  <div className="flex items-center justify-between mb-4">
                    <Award className="w-8 h-8 text-[#C43838]" />
                    <span className="font-mono text-[10px] sm:text-xs font-bold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">JADA - Univ of Florida</span>
                  </div>
                  <h4 className="font-heading font-bold text-2xl text-slate-900 mb-2">Bảo chứng lâm sàng 8 năm</h4>
                  <p className="font-body text-sm text-slate-600">Nghiên cứu độc lập từ TS. Valeria V. Gordan chứng minh độ bền vững tuyệt đối.</p>
                </div>
                <div className="p-6 sm:p-8 flex-1 bg-white space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-sky-50 flex items-center justify-center border border-sky-100 shrink-0">
                      <span className="font-heading font-bold text-lg sm:text-xl text-[#00ADEF]">100%</span>
                    </div>
                    <div>
                      <strong className="block text-sm text-slate-900">Tỷ lệ lưu giữ thành công</strong>
                      <span className="text-xs text-slate-600">Không ghi nhận ca sâu răng thứ phát hay thất bại lâm sàng nào sau 8 năm.</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-red-50 flex items-center justify-center border border-red-100 shrink-0">
                      <span className="font-heading font-bold text-lg sm:text-xl text-[#C43838]">0%</span>
                    </div>
                    <div>
                      <strong className="block text-sm text-slate-900">Nhạy cảm sau điều trị</strong>
                      <span className="text-xs text-slate-600">Triệt tiêu hoàn toàn ê buốt, bảo vệ uy tín phòng khám.</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200 shrink-0">
                      <Microscope className="w-6 h-6 text-slate-700" />
                    </div>
                    <div>
                      <strong className="block text-sm text-slate-900">Bằng chứng SEM</strong>
                      <span className="text-xs text-slate-600">Tích tụ vi khuẩn tối thiểu so với bám dính dày đặc trên composite thường.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. ROI & Vận hành */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-64 h-64 bg-slate-100/50 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
              
              <div className="text-center mb-10 max-w-2xl mx-auto relative z-10">
                <TrendingUp className="w-10 h-10 text-slate-700 mx-auto mb-4" />
                <h4 className="font-heading font-bold text-2xl md:text-3xl text-slate-900 mb-4">Thực chiến lâm sàng & tối ưu ROI</h4>
                <p className="font-body text-slate-600">Quyết định đầu tư chiến lược bảo vệ lợi nhuận và gia tăng Brand Equity cho phòng khám.</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 relative z-10">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center hover:-translate-y-1 transition-transform">
                  <div className="w-12 h-12 rounded-full bg-sky-50 flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-5 h-5 text-[#00ADEF]" />
                  </div>
                  <strong className="block text-slate-900 mb-2">Tối ưu hóa quy trình</strong>
                  <p className="text-xs text-slate-600 leading-relaxed">Hiệu ứng Chameleon truyền sáng mô phỏng men và ngà tự nhiên, thẩm mỹ cao không cần đắp lớp phức tạp.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center hover:-translate-y-1 transition-transform">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
                    <Activity className="w-5 h-5 text-slate-700" />
                  </div>
                  <strong className="block text-slate-900 mb-2">Đặc tính vận hành</strong>
                  <p className="text-xs text-slate-600 leading-relaxed">Độ nhớt lý tưởng, không dính dụng cụ (non-sticky), hỗ trợ thao tác điêu khắc nhanh chóng, chính xác.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center hover:-translate-y-1 transition-transform">
                  <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="w-5 h-5 text-[#C43838]" />
                  </div>
                  <strong className="block text-slate-900 mb-2">Giảm chi phí ẩn</strong>
                  <p className="text-xs text-slate-600 leading-relaxed">Triệt tiêu ê buốt và co ngót cực thấp (0.85%) giúp chấm dứt ca bảo hành không sinh lời.</p>
                </div>
              </div>
            </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
