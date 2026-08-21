import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, Zap, Coins, AlertTriangle, HeartPulse, Banknote, 
  Droplet, Microscope, ArrowRight, Gift, ChevronDown, CheckCircle2,
  Clock, Shield, BarChart3, TestTube, Quote
} from 'lucide-react';

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white mb-4 transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left font-heading font-bold text-slate-900 focus:outline-none"
      >
        <span className="text-lg pr-8">{question}</span>
        <ChevronDown className={`w-5 h-5 text-[#00ADEF] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export function IndirectRestoration() {
  const openOffer = () => {
    window.dispatchEvent(new CustomEvent("open-offer-modal", { detail: { offerId: 1 } }));
  };

  return (
    <div className="space-y-24">
      {/* SECTION 1: HERO SECTION */}
      <section className="bg-white rounded-[2.5rem] p-8 md:p-12 lg:p-16 border border-slate-200 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#00ADEF]/10 to-transparent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
          <div className="w-full lg:w-[60%]">
            <span className="inline-block px-4 py-1.5 bg-[#00ADEF]/10 text-[#008BBF] text-xs md:text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              XU THẾ NHA KHOA CAN THIỆP TỐI THIỂU (MiCD) & PHỤC HỒI BIOPLASTIC 2026
            </span>
            <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-slate-900 leading-[1.1] mb-6">
              CHẤM DỨT ÁM ẢNH SÚT MÃO, Ê BUỐT SAU GẮN VÀ LÃNG PHÍ VẬT TƯ!
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Kiến tạo liên kết sinh học kỵ nước siêu mỏng 24µm với bộ đôi <strong className="text-slate-900">BeautiBond Xtreme (HEMA-Free)</strong> & <strong className="text-slate-900">BeautiLink SA (S-PRG)</strong>. Dán chặt Zirconia ~50 MPa, lột sạch xi măng dư sau 1-2 giây Tack-cure và tối ưu hóa chi phí chạm đáy chỉ ~16.600đ/ca gắn.
            </p>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-1">
                  <ShieldCheck className="w-5 h-5 text-[#C43838]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Triệt ê buốt tức thì và muộn</h4>
                  <p className="text-slate-600">Bảo vệ tủy răng sống bằng màng ngăn kỵ nước không chứa HEMA.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-1">
                  <Zap className="w-5 h-5 text-[#00ADEF]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Quy trình "True Universal" 1 bước</h4>
                  <p className="text-slate-600">Gắn chặt Zirconia, sứ Lithium Disilicate mà không cần Primer rời lách cách.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center shrink-0 mt-1">
                  <Coins className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Hiệu năng kinh tế đỉnh cao</h4>
                  <p className="text-slate-600">Ống Handmix khổng lồ 15.6g thực hiện tới 120 ca lâm sàng.</p>
                </div>
              </li>
            </ul>

            <button 
              onClick={openOffer}
              className="w-full sm:w-auto bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-white font-bold px-8 py-5 rounded-2xl shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center group"
            >
              <span className="text-lg md:text-xl mb-1 flex items-center gap-2">
                NHẬN MẪU THỬ BBX 2ml & ƯU ĐÃI <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="text-sm font-medium opacity-90 block">Trọn gói giải pháp bảo chứng bởi JADA & Dental Advisor</span>
            </button>
          </div>
          
          <div className="w-full lg:w-[40%] relative">
            {/* Visual Halo Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00ADEF]/20 to-[#C43838]/20 blur-3xl rounded-full scale-110 z-0 animate-pulse"></div>
            
            <div className="relative z-10 grid grid-cols-2 gap-4 items-center">
              <div className="space-y-4">
                <img src="https://cdn.jsdelivr.net/gh/nienmarketing-netizen/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988/beautibond-xtreme.png" alt="BeautiBond Xtreme" className="w-full rounded-2xl bg-white shadow-lg p-4 mix-blend-multiply border border-slate-100" />
                <div className="bg-white/80 backdrop-blur-sm border border-slate-100 p-3 rounded-xl text-center shadow-sm">
                  <span className="block text-[#00ADEF] font-bold text-xs uppercase tracking-widest">Pretreatment</span>
                  <span className="font-heading font-black text-sm text-slate-900">BeautiBond Xtreme</span>
                </div>
              </div>
              <div className="space-y-4 -mt-12">
                <img src="https://cdn.jsdelivr.net/gh/nienmarketing-netizen/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988/BeautilinkSA.png" alt="BeautiLink SA" className="w-full rounded-2xl bg-white shadow-lg p-4 mix-blend-multiply border border-slate-100" />
                <div className="bg-white/80 backdrop-blur-sm border border-slate-100 p-3 rounded-xl text-center shadow-sm">
                  <span className="block text-[#C43838] font-bold text-xs uppercase tracking-widest">Luting Cement</span>
                  <span className="font-heading font-black text-sm text-slate-900">BeautiLink SA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE PAIN POINTS */}
      <section className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 lg:p-16 relative overflow-hidden text-center -mx-4 md:mx-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 mix-blend-overlay"></div>
        <div className="relative z-10 max-w-4xl mx-auto mb-16">
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-6 uppercase">
            CÓ PHẢI BÁC SĨ ĐANG ÂM THẦM CHỊU ĐỰNG NHỮNG RỦI RO NÀY MỖI NGÀY?
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto"></div>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-md border border-red-500/30 rounded-3xl p-8 hover:border-red-500/60 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] transition-all duration-300 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-6 border border-red-500/30">
              <HeartPulse className="w-8 h-8 text-red-400" />
            </div>
            <h3 className="font-heading font-bold text-xl text-white mb-4">Sút phục hình & Ê buốt muộn</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Keo dán chứa HEMA hoạt động như "bọt biển" ngậm dịch ngà. Theo thời gian, HEMA bị thủy phân phân hủy lớp lai, gây bong sút, rò rỉ vi kẽ và ê buốt muộn tàn nhẫn cho bệnh nhân.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-md border border-red-500/30 rounded-3xl p-8 hover:border-red-500/60 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] transition-all duration-300 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-6 border border-red-500/30">
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
            <h3 className="font-heading font-bold text-xl text-white mb-4">Kênh cộm khớp & Hở đường viền</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Lớp màng (film thickness) của xi măng/keo cũ quá dày (30-50µm) làm "đội" các phục hình Veneer, Tabletop siêu mỏng, gây cộm khớp, buộc phải mài chỉnh hoặc chịu rủi ro nứt vỡ sứ giòn.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-md border border-red-500/30 rounded-3xl p-8 hover:border-red-500/60 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] transition-all duration-300 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-6 border border-red-500/30">
              <Banknote className="w-8 h-8 text-red-400" />
            </div>
            <h3 className="font-heading font-bold text-xl text-white mb-4">"Đốt tiền" do Thể tích chết Automix</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Vòi trộn Automix lãng phí 0.25g - 0.44g xi măng kẹt lại mỗi lần bơm. Mỗi ca gắn vứt đi hàng chục ngàn đồng. Cộng thêm hàng tá chai Primer sứ lỉnh kỉnh dễ bay hơi làm phồng rộp chi phí.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE GOLD STANDARD */}
      <section className="space-y-12">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-slate-900 mb-4">
            TIÊU CHUẨN VÀNG MỚI:<br/>BỘ ĐÔI LIÊN KẾT SINH HỌC KHÔNG THỂ PHÁ HỦY
          </h2>
          <p className="text-slate-600 text-lg">Sự kết hợp hoàn hảo tạo nên khoảng ghép vô hình 24µm vững chắc.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-[#00ADEF]/5 to-[#007AA8]/10 rounded-[2rem] p-8 md:p-12 border border-[#00ADEF]/20 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-heading font-black text-2xl text-slate-900 mb-2">Keo dán BeautiBond Xtreme</h3>
              <p className="text-[#007AA8] font-bold text-sm uppercase tracking-wider mb-8">Universal Thế hệ thứ 8</p>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                    <Microscope className="w-6 h-6 text-[#00ADEF]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Màng keo kỷ lục 5µm</h4>
                    <p className="text-slate-600 text-sm mt-1">Mỏng nhất thế giới, khóa chặt vi kẽ mà không lo cộm khớp.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                    <div className="relative">
                      <Droplet className="w-6 h-6 text-slate-400" />
                      <div className="absolute inset-0 bg-red-500 w-[2px] h-[30px] rotate-45 transform origin-center -translate-x-1 -translate-y-1"></div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Công nghệ HEMA-Free kỵ nước</h4>
                    <p className="text-slate-600 text-sm mt-1">Tuyệt đối không hút nước, chống thủy phân và ngăn ngừa nhạy cảm ngà vĩnh viễn.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                    <Zap className="w-6 h-6 text-[#00ADEF]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Quadra-Functional & ARS</h4>
                    <p className="text-slate-600 text-sm mt-1">Bọc giáp Silane kháng axit giúp dán bền bỉ lên men, ngà, Zirconia, sứ Lithium Disilicate không cần Primer rời.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#C43838]/5 to-[#8C2828]/10 rounded-[2rem] p-8 md:p-12 border border-[#C43838]/20 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-heading font-black text-2xl text-slate-900 mb-2">Xi măng BeautiLink SA</h3>
              <p className="text-[#C43838] font-bold text-sm uppercase tracking-wider mb-8">Tự dán sinh học Dual-Cure</p>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                    <Microscope className="w-6 h-6 text-[#C43838]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Màng phim siêu mỏng 14µm</h4>
                    <p className="text-slate-600 text-sm mt-1">Chảy loang thixotropic tuyệt hảo tạo đường hoàn tất vô hình.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                    <Clock className="w-6 h-6 text-[#C43838]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Dọn dư "One-Sweep" 1-2 giây</h4>
                    <p className="text-slate-600 text-sm mt-1">Hóa dẻo dạng gel dai cao su, lột sạch nguyên khối chỉ bằng một đường gạt.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                    <Shield className="w-6 h-6 text-[#C43838]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Hạt độn hoạt tính sinh học S-PRG</h4>
                    <p className="text-slate-600 text-sm mt-1">Liên tục phóng thích 6 ion đệm giúp trung hòa axit, kháng mảng bám, ngăn ngừa sâu răng dưới viền dán.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* The 24um Diagram */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm max-w-3xl mx-auto">
          <h4 className="text-center font-heading font-bold text-xl text-slate-900 mb-8">Cấu Trúc Lớp Lai Kép Siêu Mỏng Khít Sát Tuyệt Đối</h4>
          <div className="flex flex-col items-center w-full max-w-md mx-auto">
            {/* Lòng mão sứ */}
            <div className="w-full h-12 bg-slate-200 rounded-t-xl flex items-center justify-center border-b-2 border-white">
              <span className="font-bold text-slate-500 uppercase tracking-widest text-xs">Lòng mão sứ / Zirconia</span>
            </div>
            {/* BBX Layer */}
            <div className="w-full h-8 bg-[#00ADEF]/20 flex items-center justify-between px-4 border-b-2 border-white relative group">
              <span className="font-mono text-xs font-bold text-[#008BBF]">BBX</span>
              <span className="font-mono text-xs font-bold text-[#008BBF] bg-white px-2 py-0.5 rounded-full shadow-sm">5µm</span>
            </div>
            {/* BeautiLink SA Layer */}
            <div className="w-full h-16 bg-[#C43838]/20 flex items-center justify-between px-4 border-b-2 border-white relative">
              <span className="font-mono text-xs font-bold text-[#A62C2C]">BeautiLink SA</span>
              <span className="font-mono text-xs font-bold text-[#A62C2C] bg-white px-2 py-0.5 rounded-full shadow-sm">14µm</span>
            </div>
            {/* BBX Layer */}
            <div className="w-full h-8 bg-[#00ADEF]/20 flex items-center justify-between px-4 border-b-2 border-white">
              <span className="font-mono text-xs font-bold text-[#008BBF]">BBX</span>
              <span className="font-mono text-xs font-bold text-[#008BBF] bg-white px-2 py-0.5 rounded-full shadow-sm">5µm</span>
            </div>
            {/* Cùi răng */}
            <div className="w-full h-24 bg-amber-50 rounded-b-xl flex items-center justify-center border-t-2 border-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjZmVmM2M3IiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-50"></div>
              <span className="font-bold text-amber-700 uppercase tracking-widest text-xs relative z-10">Cùi ngà răng</span>
            </div>
            <div className="mt-4 bg-slate-900 text-white px-4 py-2 rounded-full font-mono font-bold text-sm shadow-md flex items-center gap-2">
              Tổng chiều dày khoảng ghép = <span className="text-yellow-400">24µm</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: DEEP DIVE INTO USPS */}
      <section className="space-y-8">
        <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-slate-900 text-center mb-12">SỨC MẠNH THUYẾT PHỤC TUYỆT ĐỐI</h2>
        
        {/* USP 1 */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-8 items-center hover:border-slate-300 transition-colors">
          <div className="w-full md:w-1/2 space-y-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 text-white mb-2">
              <span className="font-heading font-black text-xl">1</span>
            </div>
            <h3 className="font-heading font-black text-2xl text-slate-900">Lực dán siêu cường ~50 MPa trên Zirconia – Kháng mỏi nhiệt</h3>
            <p className="text-slate-600 leading-relaxed">
              BeautiLink SA sở hữu liên kết hóa học hóa trị trực tiếp với oxit kim loại của Zirconia. Báo cáo của The Dental Advisor (Số 168 - Tháng 8/2024) ghi nhận sản phẩm đạt lực dán trượt khổng lồ <strong className="text-slate-900">~50 MPa</strong> và phẳng lì không suy giảm sau 5.000 chu kỳ sốc nhiệt (Thermocycling).
            </p>
          </div>
          <div className="w-full md:w-1/2 bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center relative overflow-hidden">
            <BarChart3 className="w-24 h-24 text-slate-200 absolute -bottom-4 -right-4" />
            <h4 className="font-bold text-slate-900 mb-6 relative z-10">Lực dán trượt (MPa) trên Zirconia sau Lão hóa nhiệt</h4>
            <div className="flex items-end justify-center gap-4 h-40 relative z-10">
              <div className="flex flex-col items-center">
                <span className="font-bold text-slate-500 mb-2">~35</span>
                <div className="w-16 bg-slate-300 h-[60%] rounded-t-md"></div>
                <span className="text-xs text-slate-500 mt-2 font-medium w-16 text-center leading-tight">Đối thủ A</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold text-[#00ADEF] text-xl mb-2">~50</span>
                <div className="w-20 bg-gradient-to-t from-[#00ADEF] to-[#33BDF2] h-[95%] rounded-t-md shadow-lg"></div>
                <span className="text-xs font-bold text-slate-900 mt-2 w-20 text-center leading-tight">BeautiLink SA</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold text-slate-500 mb-2">~40</span>
                <div className="w-16 bg-slate-300 h-[75%] rounded-t-md"></div>
                <span className="text-xs text-slate-500 mt-2 font-medium w-16 text-center leading-tight">Đối thủ B</span>
              </div>
            </div>
          </div>
        </div>

        {/* USP 2 & 3 in Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-10 shadow-sm hover:border-slate-300 transition-colors">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 text-white mb-6">
              <span className="font-heading font-black text-xl">2</span>
            </div>
            <h3 className="font-heading font-black text-2xl text-slate-900 mb-4">Sát thủ dọn dư "One-Sweep"</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Giải phóng 30% thời gian trên ghế nha. Không còn cạo vụn xi măng cứng ngắc làm tứa máu nướu. Chiếu đèn 1-2 giây (Tack-cure), xi măng hóa gel dai dẻo. Dùng thám châm bóc nguyên khối trong một đường gạt.
            </p>
            <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <Clock className="w-6 h-6 text-amber-500" />
              <span className="font-bold text-slate-800 text-sm">Tiết kiệm thời gian, tăng trải nghiệm bệnh nhân</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-10 shadow-sm hover:border-slate-300 transition-colors">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 text-white mb-6">
              <span className="font-heading font-black text-xl">3</span>
            </div>
            <h3 className="font-heading font-black text-2xl text-slate-900 mb-4">Lá chắn Sinh học S-PRG</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              S-PRG là "bình ắc quy sinh học". 6 Ion (F-, Sr2+, BO33-, Al3+, SiO32-, Na+) liên tục khuếch tán qua màng dán để bít kín ống ngà hở, trung hòa axit và tạo lớp màng kháng biofilm ngăn mảng bám.
            </p>
            <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <Shield className="w-6 h-6 text-emerald-500" />
              <span className="font-bold text-slate-800 text-sm">Bảo vệ tủy sống & margins nướu vĩnh viễn</span>
            </div>
          </div>
        </div>

        {/* USP 4 */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-700">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-[45%]">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#00ADEF] text-white mb-6">
                <span className="font-heading font-black text-xl">4</span>
              </div>
              <h3 className="font-heading font-black text-3xl text-white mb-4">Tối ưu ROI – "Tuyên chiến" với lãng phí</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Thể tích chết trong vòi trộn Automix ngốn 0.25g - 0.44g xi măng mỗi ca. Định dạng Handmix khổng lồ 15.6g (9ml) của BeautiLink SA triệt tiêu 95% sự lãng phí này. Cho hiệu suất kỷ lục 120 ca gắn thực tế.
              </p>
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 font-bold px-4 py-2 rounded-lg">
                <Banknote className="w-5 h-5" /> Tiết kiệm đến 130.000đ/ca gắn
              </div>
            </div>
            
            <div className="w-full md:w-[55%]">
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="p-4 font-bold text-slate-500 w-1/3">Chỉ số so sánh</th>
                      <th className="p-4 font-bold text-slate-900 w-1/3 border-l border-slate-200 text-center bg-red-50/30">Automix (8.6g)</th>
                      <th className="p-4 font-black text-[#00ADEF] w-1/3 border-l border-slate-200 text-center bg-blue-50/50">Handmix Shofu (15.6g)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="p-4 text-slate-600 font-medium">Hao hụt thể tích chết</td>
                      <td className="p-4 text-center text-slate-900 border-l border-slate-200">0.25g - 0.44g / ca</td>
                      <td className="p-4 text-center font-bold text-emerald-600 border-l border-slate-200 bg-blue-50/20">Gần như 0%</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-slate-600 font-medium">Số ca gắn thực tế</td>
                      <td className="p-4 text-center text-slate-900 border-l border-slate-200">~20 - 22 ca</td>
                      <td className="p-4 text-center font-bold text-emerald-600 border-l border-slate-200 bg-blue-50/20">120 ca lâm sàng</td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="p-4 font-bold text-slate-900">Chi phí trung bình / Ca</td>
                      <td className="p-4 text-center font-bold text-red-500 border-l border-slate-200">~150.000đ</td>
                      <td className="p-4 text-center font-black text-[#00ADEF] text-lg border-l border-slate-200 bg-blue-50/50">~16.600đ</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CLINICAL WORKFLOW */}
      <section className="py-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-slate-900 mb-4">QUY TRÌNH PHỐI HỢP DÁN - GẮN TIÊU CHUẨN</h2>
          <p className="text-slate-600 text-lg">5 phút giải phóng ghế nha với quy trình "True Universal" tối giản</p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-10 right-10 h-1 bg-slate-200 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-200 group-hover:border-[#00ADEF] transition-colors flex items-center justify-center text-slate-400 group-hover:text-[#00ADEF] mb-6 shadow-sm">
                <span className="font-heading font-black text-3xl">1</span>
              </div>
              <h4 className="font-bold text-slate-900 mb-3">Sửa soạn cùi ngà</h4>
              <p className="text-sm text-slate-600 leading-relaxed">Xịt hạt nhôm oxit cát nhẹ. Giữ cùi răng ẩm nhẹ (moist ngà), <strong className="text-red-500">không thổi khô cong</strong> làm sụp Collagen.</p>
            </div>
            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-200 group-hover:border-[#00ADEF] transition-colors flex items-center justify-center text-slate-400 group-hover:text-[#00ADEF] mb-6 shadow-sm">
                <span className="font-heading font-black text-3xl">2</span>
              </div>
              <h4 className="font-bold text-slate-900 mb-3">Quét BBX (Cùi răng)</h4>
              <p className="text-sm text-slate-600 leading-relaxed">Quét 1 lớp BBX 5s. Thổi hơi 3s bay dung môi dàn mỏng 5µm. Chiếu đèn LED 5s.</p>
            </div>
            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-200 group-hover:border-[#00ADEF] transition-colors flex items-center justify-center text-slate-400 group-hover:text-[#00ADEF] mb-6 shadow-sm">
                <span className="font-heading font-black text-3xl">3</span>
              </div>
              <h4 className="font-bold text-slate-900 mb-3">Xử lý lòng mão</h4>
              <p className="text-sm text-slate-600 leading-relaxed">Làm sạch lòng mão. Quét lớp mỏng BBX, thổi khô mạnh. <strong className="text-slate-900">Không cần Primer sứ rời.</strong></p>
            </div>
            {/* Step 4 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-200 group-hover:border-[#C43838] transition-colors flex items-center justify-center text-slate-400 group-hover:text-[#C43838] mb-6 shadow-sm">
                <span className="font-heading font-black text-3xl">4</span>
              </div>
              <h4 className="font-bold text-slate-900 mb-3">Trộn BeautiLink SA</h4>
              <p className="text-sm text-slate-600 leading-relaxed">Lấy tỷ lệ 1:1, trộn tay trên giấy 10s. Thoa một lớp mỏng xi măng vào lòng phục hình.</p>
            </div>
            {/* Step 5 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-200 group-hover:border-[#C43838] transition-colors flex items-center justify-center text-slate-400 group-hover:text-[#C43838] mb-6 shadow-sm">
                <span className="font-heading font-black text-3xl">5</span>
              </div>
              <h4 className="font-bold text-slate-900 mb-3">Gắn & Dọn dư "One-Sweep"</h4>
              <p className="text-sm text-slate-600 leading-relaxed">Ấn nhẹ mão. Chiếu đèn 1-2s. Lột sạch dư nguyên mảng. Chiếu hoàn thiện 10s/mặt.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: SOCIAL PROOF */}
      <section className="bg-slate-100 rounded-[2.5rem] p-8 md:p-12 lg:p-16 relative">
        <Quote className="absolute top-8 left-8 w-32 h-32 text-slate-200 opacity-50" />
        <div className="text-center max-w-4xl mx-auto mb-16 relative z-10">
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-slate-900 mb-4">HÀNG NGÀN NHA SĨ VÀ CHUYÊN GIA ĐÃ CHỌN</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
          <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col">
            <p className="text-slate-600 italic mb-8 leading-relaxed flex-1">
              "Dòng sản phẩm tự dán ứng dụng công nghệ S-PRG hoạt động như một phép màu giúp tăng tốc quy trình lâm sàng cho các bé nhỏ hiếu động nhờ loại bỏ các bước nhạy cảm kỹ thuật. Đây thực sự là công cụ thu hút khách hàng tuyệt vời!"
            </p>
            <div className="border-t border-slate-100 pt-6">
              <h4 className="font-bold text-slate-900">Dr. Shukan Kanuga</h4>
              <p className="text-xs text-slate-500 mt-1">Nha nhi - Hiệp hội Nha khoa Trẻ em Hoa Kỳ, Santa Clarita, CA</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col">
            <p className="text-slate-600 italic mb-8 leading-relaxed flex-1">
              "Nha khoa hiện đại đang dịch chuyển sang vật liệu sinh học tự trị liệu mô răng lâu dài. Hệ thống Giomer đáp ứng trọn vẹn điều này nhờ cơ chế trung hòa axit, giải phóng và tái sạc ion liên tục."
            </p>
            <div className="border-t border-slate-100 pt-6">
              <h4 className="font-bold text-slate-900">Dr. Jennifer Bell</h4>
              <p className="text-xs text-slate-500 mt-1">Thành viên Viện Thẩm mỹ Nha khoa Quốc tế, Raleigh, NC</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col">
            <p className="text-slate-600 italic mb-8 leading-relaxed flex-1">
              "Lớp keo dán siêu mỏng dưới 5 micron tối ưu hóa khoảng ghép khít sát tuyệt đối, đồng thời là chiếc cầu nối lý tưởng giúp ion sinh học từ S-PRG khuếch tán xuyên qua để bảo vệ mô răng sống bên dưới lớp lai."
            </p>
            <div className="border-t border-slate-100 pt-6">
              <h4 className="font-bold text-slate-900">Prof. Keiichi Hosaka</h4>
              <p className="text-xs text-slate-500 mt-1">Trưởng khoa Nha khoa Phục hồi tái tạo, ĐH Tokushima, Nhật Bản</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: THE CORE OFFER */}
      <section className="bg-white rounded-[2.5rem] border-[3px] border-amber-400 p-2 shadow-[0_0_40px_rgba(251,191,36,0.2)]">
        <div className="bg-slate-900 rounded-[2.2rem] p-8 md:p-12 lg:p-16 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-amber-500/20 text-amber-400 text-sm font-bold uppercase tracking-wider rounded-full mb-6 border border-amber-500/30">
              ĐẶC QUYỀN ĐỒNG HÀNH KHÔNG THỂ TỪ CHỐI
            </span>
            <h2 className="font-heading font-black text-3xl md:text-4xl text-white mb-10 leading-tight">
              GÓI GIẢI PHÁP ĐỒNG BỘ "GIOMER KHÔNG Ê BUỐT" – AN TÂM LÂM SÀNG
            </h2>
            
            <div className="bg-slate-800/80 rounded-2xl p-6 md:p-8 border border-slate-700 mb-8 text-left">
              <h3 className="font-bold text-xl text-amber-400 mb-4 border-b border-slate-700 pb-4">Combo Dán - Gắn Đồng Bộ trị giá 3.415.000đ</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-slate-300">01 Lọ Keo dán Universal BeautiBond Xtreme (5ml)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-slate-300">01 Ống Xi măng BeautiLink SA Handmix (15.6g) khổng lồ</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-2xl p-6 md:p-8 border border-amber-500/30 mb-10 text-left">
              <h3 className="font-bold text-xl text-white mb-4 border-b border-amber-500/30 pb-4 flex items-center gap-2">
                <Gift className="w-6 h-6 text-amber-400" /> BỘ QUÀ TẶNG ĐẶC QUYỀN (Trị giá 2.500.000đ)
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1"><Gift className="w-4 h-4 text-amber-400" /></div>
                  <p className="text-slate-300"><strong className="text-white">Quà tặng vật lý:</strong> 01 Lọ BBX Trial (2ml) để trải nghiệm thực tế ngay tại phòng khám trước khi khui lọ chính.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1"><Gift className="w-4 h-4 text-amber-400" /></div>
                  <p className="text-slate-300"><strong className="text-white">Tài liệu số chuyên sâu:</strong> Sổ tay E-Guide "Khoảng Xi Măng Ghép Lâm Sàng & Quy Trình Xử Lý Bề Mặt Sứ".</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1"><Gift className="w-4 h-4 text-amber-400" /></div>
                  <p className="text-slate-300"><strong className="text-white">Đặc quyền đào tạo:</strong> Vé tham gia Group Học Thuật Kín gỡ rối ca lâm sàng trực tiếp qua Zalo 1:1.</p>
                </li>
              </ul>
            </div>

            <button 
              onClick={openOffer}
              className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-black text-lg md:text-xl px-8 py-6 rounded-2xl shadow-xl shadow-red-500/20 hover:shadow-red-500/40 hover:-translate-y-1 transition-all duration-300 animate-bounce hover:animate-none"
            >
              ĐĂNG KÝ "GIOMER KHÔNG Ê BUỐT" - NHẬN QUÀ 2.5TR!
            </button>
            
            <p className="mt-6 text-sm text-slate-400 flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Cam kết hoàn tiền 100% trong 30 ngày nếu xảy ra ê buốt do vật liệu.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8: FAQ */}
      <section className="max-w-3xl mx-auto pb-12">
        <h2 className="font-heading font-extrabold text-3xl text-slate-900 text-center mb-10">GIẢI ĐÁP HOÀI NGHI LÂM SÀNG</h2>
        
        <FaqItem 
          question="Xi măng trộn tay (Handmix) liệu có đều và đồng nhất bằng vòi Automix tự động không?"
          answer="Hoàn toàn đều và đồng nhất! Hai thành phần BeautiLink SA được thiết kế có màu sắc tương phản rõ rệt. Khi trộn tay trên giấy trong 10 giây, sự hòa quyện màu sắc đồng nhất 100% sẽ là báo hiệu trực quan chính xác nhất giúp Bác sĩ nhận biết hỗn hợp đã sẵn sàng dán gắn, loại bỏ hoàn toàn sai số trộn."
        />
        <FaqItem 
          question="Keo dán BeautiBond Xtreme kỵ nước và HEMA-free thì có khó thâm nhập vào ống ngà ẩm không?"
          answer="Hoàn toàn không. BBX ứng dụng hệ dung môi Acetone thẩm thấu và bay hơi cực nhanh, giúp vận chuyển các monomer liên kết kỵ nước thâm nhập sâu vào ống ngà để tạo tua nhựa resin dẻo dai bít kín ống ngà, triệt tiêu ê buốt tức thì ngay cả trên cùi ngà ẩm nhẹ."
        />
        <FaqItem 
          question="Keo dán màng 5µm và xi măng 14µm thì có ảnh hưởng lực dán cơ học của phục hình gián tiếp không?"
          answer="Ngược lại, đây là độ dày màng lý tưởng nhất cho phục hình gián tiếp! Lớp màng mỏng giúp giảm thiểu tối đa khoảng rỗng của xi măng, ngăn ngừa vi kẽ đường viền dán dính và tối ưu hóa sự truyền lực dán hóa học bền vững lên tới ~50 MPa của toàn bộ hệ thống."
        />
      </section>

    </div>
  );
}
