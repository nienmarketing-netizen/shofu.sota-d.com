import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Zap, Shield, PiggyBank, BookOpen, MessageSquare, Target, Clock, ArrowRight, ShoppingCart } from 'lucide-react';

export function IndirectRestoration() {
  const openOffer = () => {
    window.dispatchEvent(new CustomEvent("open-offer-modal", { detail: { offerId: 1 } }));
  };

  return (
    <div className="space-y-24">
      {/* 1. Danh sách sản phẩm & Mô tả */}
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-blue-100 text-[#00ADEF] text-xs font-bold uppercase tracking-wider rounded-full mb-4">Sản Phẩm Cốt Lõi</span>
              <h3 className="font-heading font-extrabold text-2xl text-slate-900 mb-3">Xi măng BeautiLink SA (Dual-Cure)</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Dòng xi măng nhựa lưỡng trùng hợp, tự dán (self-adhesive) gồm hai thành phần. Thiết kế tích hợp sẵn các monomer axit đa chức năng (phosphonic acid và carboxylic acid) và silane hoạt tính tươi.
              </p>
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <h4 className="font-bold text-sm text-slate-900 mb-3 flex items-center gap-2">
                  <Target className="w-4 h-4 text-[#00ADEF]" /> Chỉ định lâm sàng
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Thích hợp cho dải rộng phục hình gián tiếp: crown, cầu răng, inlay, onlay, veneer, tabletop, cầu dán (Maryland) và phục hình trên Implant. Tự động liên kết mạnh mẽ lên mọi bề mặt cùi răng và phục hình mà không cần primer hỗ trợ.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-50 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-sky-100 text-[#007AA8] text-xs font-bold uppercase tracking-wider rounded-full mb-4">Sản Phẩm Phối Hợp</span>
              <h3 className="font-heading font-extrabold text-2xl text-slate-900 mb-3">Keo dán BeautiBond Xtreme</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Keo dán đa năng thế hệ mới (True Universal) một chai duy nhất, hoàn toàn không chứa monomer ưa nước HEMA (HEMA-Free).
              </p>
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <h4 className="font-bold text-sm text-slate-900 mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#007AA8]" /> Vai trò hiệp đồng
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Hoạt động như tác nhân tăng cường liên kết (pretreatment agent) tối cao cho các ca phục hình có độ lưu giữ kém hoặc không lưu giữ cơ học (Veneer mỏng, Tabletop, Onlay sứ thủy tinh Lithium Disilicate, sứ lai).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. USP Sản phẩm */}
      <div className="space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading font-extrabold text-3xl text-slate-900 mb-4">4 Điểm Ưu Việt Chinh Phục Lâm Sàng & Kinh Tế</h2>
          <p className="text-slate-600">Sự kết hợp hoàn hảo mang lại hiệu quả điều trị tối đa và biên lợi nhuận tối ưu cho phòng khám.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-[#00ADEF]/30 transition-colors">
            <div className="w-14 h-14 bg-blue-50 text-[#00ADEF] rounded-2xl flex items-center justify-center mb-6">
              <Zap className="w-7 h-7" />
            </div>
            <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">Liên kết siêu cường ~50 MPa</h3>
            <p className="text-slate-600 text-sm mb-5 leading-relaxed">
              Monomer phosphonic acid tạo liên kết hóa học trực tiếp với ion canxi của mô răng và oxit kim loại trên Zirconia. Bền bỉ kịch trần, không suy giảm theo thời gian hay nhiệt độ.
            </p>
            <div className="bg-slate-50 px-4 py-3 rounded-xl border-l-2 border-[#00ADEF]">
              <p className="text-sm font-medium text-slate-800"><span className="text-[#00ADEF] font-bold">Ý nghĩa lâm sàng:</span> Giải phóng hoàn toàn các chai primer rời lỉnh kỉnh, giảm thiểu 100% rủi ro thao tác sai quy trình.</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-[#00ADEF]/30 transition-colors">
            <div className="w-14 h-14 bg-sky-50 text-[#007AA8] rounded-2xl flex items-center justify-center mb-6">
              <Clock className="w-7 h-7" />
            </div>
            <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">One-Sweep dọn sạch trong 1-2s</h3>
            <p className="text-slate-600 text-sm mb-5 leading-relaxed">
              Hệ xúc tác nhạy sáng độc quyền. Chiếu đèn 1-2 giây, xi măng chuyển trạng thái gel dai dẻo. Dùng thám châm gạt nhẹ một đường, xi măng dư bong ra nguyên khối.
            </p>
            <div className="bg-slate-50 px-4 py-3 rounded-xl border-l-2 border-[#007AA8]">
              <p className="text-sm font-medium text-slate-800"><span className="text-[#007AA8] font-bold">Ý nghĩa lâm sàng:</span> Tiết kiệm 30% thời gian, loại bỏ hoàn toàn việc cạo vụn xi măng bám dính gây tứa máu nướu bệnh nhân.</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-[#C43838]/30 transition-colors">
            <div className="w-14 h-14 bg-red-50 text-[#C43838] rounded-2xl flex items-center justify-center mb-6">
              <Shield className="w-7 h-7" />
            </div>
            <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">Bảo vệ margins vĩnh viễn</h3>
            <p className="text-slate-600 text-sm mb-5 leading-relaxed">
              Tích hợp công nghệ hạt độn S-PRG liên tục phóng thích và tái sạc 6 ion sinh học. Tự động trung hòa axit khi pH quanh viền rớt dưới 5.5.
            </p>
            <div className="bg-slate-50 px-4 py-3 rounded-xl border-l-2 border-[#C43838]">
              <p className="text-sm font-medium text-slate-800"><span className="text-[#C43838] font-bold">Ý nghĩa lâm sàng:</span> Tái khoáng hóa bảo vệ tủy răng sống, giải phóng màng kháng mảng bám giúp viền nướu luôn săn chắc, không viêm đỏ.</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-emerald-500/30 transition-colors">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
              <PiggyBank className="w-7 h-7" />
            </div>
            <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">Khoảng ghép siêu mỏng & Hiệu quả Handmix</h3>
            <p className="text-slate-600 text-sm mb-5 leading-relaxed">
              Màng keo dán BBX (~5µm) + phim xi măng BeautiLink SA (14µm) tạo khoảng ghép vô hình, triệt tiêu nguy cơ kênh khớp hay vi kẽ.
            </p>
            <div className="bg-slate-50 px-4 py-3 rounded-xl border-l-2 border-emerald-500">
              <p className="text-sm font-medium text-slate-800"><span className="text-emerald-600 font-bold">Bài toán kinh tế:</span> Tuýp Handmix 15.6g triệt tiêu lãng phí "thể tích chết", hiệu suất lên tới 120 ca (so với 22 ca của Automix 8.6g), chi phí chạm đáy chỉ ~26.600đ/ca.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Y văn & Nghiên cứu */}
      <div className="space-y-8 bg-slate-900 text-white p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 w-96 h-96 bg-grid-pattern mix-blend-overlay"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-[#00ADEF]" />
            </div>
            <h2 className="font-heading font-bold text-2xl md:text-3xl">Bảo Chứng Nghiên Cứu & Y Văn</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl backdrop-blur-sm">
              <h4 className="text-lg font-bold text-[#33BDF2] mb-3">1. Thử nghiệm lão hóa nhiệt khắt khe từ Dental Advisor (Tháng 8/2024)</h4>
              <p className="text-slate-300 mb-4 text-sm md:text-base leading-relaxed">
                Tiến hành kiểm định lực dán trượt (Shear Bond Strength) của BeautiLink SA trên phục hình Zirconia. BeautiLink SA đạt lực dán ổn định nhất từ <strong className="text-white">45 - 50 MPa</strong> sau thử thách lão hóa nhiệt ngặt nghèo 5.000 chu kỳ sốc nhiệt.
              </p>
              <div className="bg-white/10 rounded-xl p-4 text-sm text-slate-200 border-l-2 border-[#33BDF2]">
                <strong className="text-white">Failure mode:</strong> Ghi nhận kiểu gãy liên kết chủ yếu là mixed hoặc cohesive (gãy nội bộ xi măng), chứng minh lực bám dính hóa học bền vững hơn cả độ bền liên kết cơ học của chính khối xi măng.
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl backdrop-blur-sm">
              <h4 className="text-lg font-bold text-[#33BDF2] mb-3">2. Thử nghiệm dán sứ Lithium Disilicate (IPS e.max Press)</h4>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                Nghiên cứu của Dental Advisor chứng minh: Việc kết hợp quét một lớp lót BeautiBond Xtreme lên bề mặt cùi răng và mặt sứ, sau đó gắn bằng BeautiLink SA mang lại lực dán trượt tối ưu và ổn định tuyệt đối ngay cả sau lão hóa đối với sứ thủy tinh không tính lưu giữ.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl backdrop-blur-sm">
              <h4 className="text-lg font-bold text-[#33BDF2] mb-3">3. Nghiên cứu lâm sàng 13 năm của Đại học Florida</h4>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                Sức mạnh bảo vệ sinh học của công nghệ S-PRG được chứng thực bởi Tiến sĩ Valeria V. Gordan trên JADA. Nghiên cứu ghi nhận sau 8 năm đạt <strong className="text-white">100% tỷ lệ lưu giữ</strong>, không nhạy cảm ngà. Đến năm thứ 13, có tới <strong className="text-white">96% phục hình hoàn toàn sạch bóng sâu răng thứ phát</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Feedback */}
      <div className="space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading font-extrabold text-3xl text-slate-900 mb-4">Khảo Sát Thực Tế Từ 350+ Nha Sĩ</h2>
          <p className="text-slate-600">Những đánh giá chân thực nhất về dòng BeautiLink SA dạng Handmix trong quá trình ứng dụng lâm sàng.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative">
            <div className="absolute -top-5 -left-5 w-12 h-12 bg-[#00ADEF] text-white rounded-full flex items-center justify-center shadow-lg">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div className="flex items-end gap-3 mb-6">
              <span className="font-heading font-black text-5xl text-slate-900">75<span className="text-3xl text-[#00ADEF]">%</span></span>
              <span className="font-bold text-slate-600 pb-1">đánh giá "Tốt hơn" về Handling</span>
            </div>
            <div className="space-y-4">
              <p className="italic text-slate-600 text-sm bg-slate-50 p-4 rounded-xl border-l-2 border-slate-200">
                "Độ loang chảy lỏng và tính chất dễ trộn cực kỳ xuất sắc."
              </p>
              <p className="italic text-slate-600 text-sm bg-slate-50 p-4 rounded-xl border-l-2 border-slate-200">
                "Xi măng không bị chảy tràn vô tội vạ dù chỉ dùng một lượng rất nhỏ."
              </p>
              <p className="italic text-slate-600 text-sm bg-slate-50 p-4 rounded-xl border-l-2 border-slate-200">
                "Sự tương phản màu sắc khi trộn hai tuýp kem giúp dễ nhận biết khi xi măng được hòa trộn đồng nhất."
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative">
            <div className="absolute -top-5 -left-5 w-12 h-12 bg-[#00ADEF] text-white rounded-full flex items-center justify-center shadow-lg">
              <Clock className="w-5 h-5" />
            </div>
            <div className="flex items-end gap-3 mb-6">
              <span className="font-heading font-black text-5xl text-slate-900">86<span className="text-3xl text-[#00ADEF]">%</span></span>
              <span className="font-bold text-slate-600 pb-1">đánh giá "Tuyệt vời" về Working Time</span>
            </div>
            <div className="space-y-4">
              <p className="italic text-slate-600 text-sm bg-slate-50 p-4 rounded-xl border-l-2 border-[#00ADEF]">
                "Thời gian làm việc cực kỳ vừa vặn. Nó cho phép tôi thong thả thực hiện quy trình từ lúc trộn kem, đặt phục hình lên cùi răng cho tới lúc chiếu đèn dọn xi măng dư mà không phải vội vã, sợ đông cứng sớm."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Offer & Call to action */}
      <div className="bg-gradient-to-br from-[#00ADEF] to-[#007AA8] rounded-3xl p-10 md:p-16 text-center text-white shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl mb-6">Bắt Đầu Nâng Cấp Phục Hình Gián Tiếp</h2>
          <p className="text-white/90 text-lg mb-10 leading-relaxed">
            Sở hữu Combo Phục Hình Gián Tiếp chuyên sâu (Xi măng BeautiLink SA & Keo dán BeautiBond Xtreme) với mức giá ưu đãi đặc biệt ngay hôm nay.
          </p>
          <button 
            onClick={openOffer}
            className="inline-flex items-center gap-2 bg-white text-[#007AA8] px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <ShoppingCart className="w-5 h-5" />
            Nhận Ưu Đãi Đặt Hàng
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
