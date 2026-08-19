import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ShieldCheck, Microscope, Link as LinkIcon, Users, Star, Quote, ShoppingCart, ArrowUpRight, CheckCircle2, TrendingUp } from 'lucide-react';

export function ShofuSocialProof() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 10000, stopOnInteraction: true })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const testimonials = [
    {
      name: 'Dr. Shukan Kanuga, DDS, MSD',
      role: 'Chuyên khoa Nha nhi (ABPD), California, Mỹ',
      topic: 'Nha khoa trẻ em & Hiệu quả vận hành phòng khám',
      content: 'Dòng sản phẩm tự dán ứng dụng công nghệ S-PRG hoạt động như một phép màu giúp tăng tốc quy trình lâm sàng cho các bé nhỏ hiếu động nhờ loại bỏ 2 bước nhạy cảm kỹ thuật là etch và bond. Đây thực sự là một công cụ thu hút khách hàng tuyệt vời cho phòng khám khi các bậc cha mẹ luôn hạnh phúc chia sẻ câu chuyện thành công này với người thân của họ!',
      avatar: 'https://ui-avatars.com/api/?name=SK&background=00ADEF&color=fff'
    },
    {
      name: 'BS. Dương Bảo Ngọc',
      role: 'Chuyên gia Phục hồi Thẩm mỹ',
      topic: 'Thẩm mỹ & Bảo vệ tối ưu',
      content: 'Chất lượng bề mặt và đặc tính quang học của Beautifil Injectable X thực sự khác biệt. Tính năng kháng khuẩn từ hạt S-PRG mang lại sự an tâm tuyệt đối khi tôi thực hiện các ca trám răng sau phức tạp.',
      avatar: 'https://cdn.jsdelivr.net/gh/nienmarketing-netizen/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988/BS.Ngo%CC%A3c.png'
    },
    {
      name: 'Dr. Jennifer Bell, DDS, FAGD, FICD',
      role: 'Thành viên Viện Thẩm mỹ Nha khoa Quốc tế, Mỹ',
      topic: 'Sự dịch chuyển sang Nha khoa trị liệu sinh học',
      content: 'Nha khoa hiện đại đang dịch chuyển mạnh mẽ sang xu hướng lựa chọn các vật liệu sinh học có khả năng tự sửa chữa mô răng và duy trì lợi ích trị liệu lâu dài cho bệnh nhân sau khi kết thúc điều trị. Hệ thống Giomer đáp ứng trọn vẹn điều này nhờ cơ chế trung hòa axit, phóng thích và tái nạp ion liên tục, cùng khả năng kháng khuẩn vượt trội.',
      avatar: 'https://ui-avatars.com/api/?name=JB&background=C43838&color=fff'
    },
    {
      name: 'ThS.BS Trần Quang Khánh',
      role: 'Trainer MiCD Global Network',
      topic: 'Khóa kín viền ngà & Không ê buốt',
      content: 'Hệ thống Cement dán của Shofu không chỉ đơn thuần là kết dính. Việc khóa kín viền ngà và giải phóng Fluoride liên tục đã giải quyết hoàn toàn vấn đề ê buốt sau phục hình gián tiếp mà nhiều bác sĩ e ngại.',
      avatar: 'https://cdn.jsdelivr.net/gh/nienmarketing-netizen/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988/BS%20Kha%CC%81nh.png'
    },
    {
      name: 'Dr. Frank J. Milnar, DDS, AAACD',
      role: 'Chuyên gia Thẩm mỹ Nha khoa (AACD), Mỹ',
      topic: 'Thẩm mỹ tự nhiên – "Hòa sắc vô ảnh" không đắp lớp',
      content: 'Khả năng khúc xạ, truyền truyền và khuếch tán ánh sáng tương đồng tự nhiên với cả men và ngà răng thật giúp miếng trám tệp màu hoàn hảo vào mô răng xung quanh. Nhờ hiệu ứng tắc kè hoa đỉnh cao này, Bác sĩ chỉ cần sử dụng kỹ thuật đơn giản vẫn đạt được kết quả thẩm mỹ tối ưu mà không cần đắp lớp layering phức tạp.',
      avatar: 'https://ui-avatars.com/api/?name=FM&background=00ADEF&color=fff'
    },
    {
      name: 'Professor Keiichi Hosaka',
      role: 'Trưởng khoa Phục hồi tái tạo, Đại học Tokushima, Nhật Bản',
      topic: 'Sức mạnh liên kết siêu mỏng & Khít sát vi thể',
      content: 'Việc ứng dụng lớp keo dán siêu mỏng dưới 5 micron không chỉ tối ưu hóa khoảng xi măng ghép giúp phục hình gián tiếp đạt độ khít sát tuyệt đối, mà còn là chiếc cầu nối lý tưởng giúp các ion sinh học từ hạt độn S-PRG phía trên dễ dàng khuếch tán xuyên qua để bảo vệ mô răng sống bên dưới lớp lai.',
      avatar: 'https://ui-avatars.com/api/?name=KH&background=C43838&color=fff'
    },
    {
      name: 'Dr. Valeria V. Gordan, DDS, MS',
      role: 'Giám đốc Nghiên cứu Lâm sàng Đại học Florida, Mỹ',
      topic: 'Bảo chứng lâm sàng dài hạn và không sâu tái phát',
      content: 'Qua nghiên cứu lâm sàng độc lập dài hạn, hệ thống dán dính và vật liệu sinh học Giomer chứng minh độ bền bỉ đáng kinh ngạc. Sau 8 năm theo dõi, chúng tôi ghi nhận tỷ lệ lưu giữ phục hình là 100%, hoàn toàn không có sâu răng thứ phát và không có nhạy cảm hậu phẫu. Thậm chí sau 13 năm, có tới 96% phục hình vẫn hoàn toàn sạch bóng sâu răng tái phát.',
      avatar: 'https://ui-avatars.com/api/?name=VG&background=00ADEF&color=fff'
    }
  ];

  return (
    <section id="social-proof" className="py-24 relative border-b border-slate-200 bg-slate-50 bg-grid-pattern overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50"></div>
      <div className="w-[90%] max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center gap-2 bg-[#00ADEF]/10 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full mb-6 border border-[#00ADEF]/20">
            <ShieldCheck className="w-4 h-4 text-[#00ADEF]" />
            <span className="font-mono text-xs font-bold text-[#00ADEF] uppercase tracking-widest">Bảo Chứng Toàn Cầu</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-slate-900 mb-6 leading-[1.4] max-w-3xl mx-auto uppercase">
            4 Trụ Cột Khoa Học <br className="hidden md:block" />Khẳng Định Vị Thế
          </h2>
          <p className="font-body text-lg text-slate-600 max-w-2xl mx-auto">
            Hệ thống dữ liệu lâm sàng độc lập, nghiêm ngặt và minh bạch nhất từ các viện nghiên cứu hàng đầu thế giới minh chứng cho chất lượng của Shofu.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-24">
          {/* Pillar 1 */}
          <div className="bg-white rounded-[20px] lg:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
            <div className="flex items-center justify-between mb-4 lg:mb-6">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#C43838]/10 rounded-xl lg:rounded-2xl flex items-center justify-center border border-[#C43838]/20">
                <ShieldCheck className="w-5 h-5 lg:w-6 lg:h-6 text-[#C43838]" />
              </div>
              <div className="font-mono text-[10px] font-bold text-[#C43838] bg-[#C43838]/5 px-3 py-1 rounded-full border border-[#C43838]/10 uppercase tracking-wider">Đại học Florida (JADA)</div>
            </div>
            
            <h3 className="font-heading font-bold text-[1.05rem] sm:text-2xl text-slate-900 mb-3 lg:mb-6 tracking-tight sm:tracking-normal whitespace-nowrap sm:whitespace-normal">
              Bảo chứng lâm sàng 13 năm
            </h3>
            
            <div className="space-y-2 lg:space-y-4 mt-auto">
              <div className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden">
                <div className="bg-slate-100/50 px-3 py-1.5 lg:px-4 lg:py-2 border-b border-slate-100 font-bold text-slate-800 text-xs">Kết quả sau 8 năm (JADA 2007)</div>
                <div className="grid grid-cols-3 divide-x divide-slate-100">
                  <div className="p-2 lg:p-3 text-center">
                    <div className="text-2xl font-extrabold text-[#C43838] mb-1">100<span className="text-sm">%</span></div>
                    <div className="text-[10px] font-medium text-slate-500 uppercase tracking-wide leading-tight">Lưu giữ</div>
                  </div>
                  <div className="p-2 lg:p-3 text-center">
                    <div className="text-2xl font-extrabold text-[#C43838] mb-1">0<span className="text-sm">%</span></div>
                    <div className="text-[10px] font-medium text-slate-500 uppercase tracking-wide leading-tight">Sâu răng</div>
                  </div>
                  <div className="p-2 lg:p-3 text-center">
                    <div className="text-2xl font-extrabold text-[#C43838] mb-1">0<span className="text-sm">%</span></div>
                    <div className="text-[10px] font-medium text-slate-500 uppercase tracking-wide leading-tight">Nhạy cảm</div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden flex items-center justify-between p-4">
                <div className="font-bold text-slate-800 text-sm">Tái khám 13 năm <span className="block text-[10px] font-normal text-slate-500 mt-0.5">Sạch sâu răng viền dán</span></div>
                <div className="text-3xl font-extrabold text-[#C43838]">97<span className="text-lg">%</span></div>
              </div>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white rounded-[20px] lg:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
            <div className="flex items-center justify-between mb-4 lg:mb-6">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#00ADEF]/10 rounded-xl lg:rounded-2xl flex items-center justify-center border border-[#00ADEF]/20">
                <Microscope className="w-5 h-5 lg:w-6 lg:h-6 text-[#00ADEF]" />
              </div>
              <div className="font-mono text-[10px] font-bold text-[#00ADEF] bg-[#00ADEF]/5 px-3 py-1 rounded-full border border-[#00ADEF]/10 uppercase tracking-wider">ĐH Osaka (Nature 2018)</div>
            </div>
            
            <h3 className="font-heading font-bold text-[1.05rem] sm:text-2xl text-slate-900 mb-3 lg:mb-6 tracking-tight sm:tracking-normal whitespace-nowrap sm:whitespace-normal">
              Bằng chứng sinh học phân tử
            </h3>
            
            <div className="space-y-2 lg:space-y-3 mt-auto">
              <div className="bg-slate-50 p-3 lg:p-4 rounded-xl lg:rounded-2xl border border-slate-100 flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#00ADEF]/10 flex items-center justify-center shrink-0 border border-[#00ADEF]/20">
                  <span className="font-bold text-[#00ADEF] text-sm">1</span>
                </div>
                <div>
                  <div className="font-bold text-slate-800 text-sm mb-1">Ức chế Gen (pdh operon)</div>
                  <p className="text-xs text-slate-600">Cắt đứt nguồn năng lượng của vi khuẩn S. mutans.</p>
                </div>
              </div>
              
              <div className="bg-slate-50 p-3 lg:p-4 rounded-xl lg:rounded-2xl border border-slate-100 flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#00ADEF]/10 flex items-center justify-center shrink-0 border border-[#00ADEF]/20">
                  <span className="font-bold text-[#00ADEF] text-sm">2</span>
                </div>
                <div>
                  <div className="font-bold text-slate-800 text-sm mb-1">Phá hủy Biofilm</div>
                  <p className="text-xs text-slate-600">Suy yếu bám dính kỵ nước, dễ dàng bị rửa trôi.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white rounded-[20px] lg:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
            <div className="flex items-center justify-between mb-4 lg:mb-6">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#C43838]/10 rounded-xl lg:rounded-2xl flex items-center justify-center border border-[#C43838]/20">
                <LinkIcon className="w-5 h-5 lg:w-6 lg:h-6 text-[#C43838]" />
              </div>
              <div className="font-mono text-[10px] font-bold text-[#C43838] bg-[#C43838]/5 px-3 py-1 rounded-full border border-[#C43838]/10 uppercase tracking-wider">Dental Advisor & SUNY</div>
            </div>
            
            <h3 className="font-heading font-bold text-[1.05rem] sm:text-2xl text-slate-900 mb-3 lg:mb-6 tracking-tight sm:tracking-normal whitespace-nowrap sm:whitespace-normal">
              Chứng cứ thép về lực dán
            </h3>
            
            <div className="space-y-2 lg:space-y-4 mt-auto">
              <div className="bg-slate-50 p-3 lg:p-4 rounded-xl lg:rounded-2xl border border-slate-100 flex flex-col gap-2 sm:block sm:gap-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:mb-2 gap-1 sm:gap-0">
                  <div className="font-bold text-slate-800 text-sm leading-tight">BeautiLink SA <span className="text-[10px] font-normal text-slate-500 inline">(Trên Zirconia)</span></div>
                  <div className="text-[9px] font-bold text-[#C43838] uppercase tracking-wider bg-[#C43838]/10 px-2 py-0.5 rounded w-fit">5.000 Chu kỳ lão hóa</div>
                </div>
                <div className="flex items-end gap-1">
                  <div className="text-3xl font-extrabold text-[#C43838] leading-none">45-50</div>
                  <div className="text-xs font-bold text-slate-400 mb-0.5">MPa</div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden">
                <div className="bg-slate-100/50 px-3 py-1.5 lg:px-4 lg:py-2 border-b border-slate-100 font-bold text-slate-800 text-xs">BeautiBond (Không cần Etch)</div>
                <div className="grid grid-cols-2 divide-x divide-slate-100">
                  <div className="p-2 lg:p-3 text-center">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Men răng</div>
                    <div className="text-xl font-extrabold text-slate-800">26.4 <span className="text-xs font-normal text-slate-400">MPa</span></div>
                  </div>
                  <div className="p-2 lg:p-3 text-center">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Ngà răng</div>
                    <div className="text-xl font-extrabold text-slate-800">27.8 <span className="text-xs font-normal text-slate-400">MPa</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="bg-white rounded-[20px] lg:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
            <div className="flex items-center justify-between mb-4 lg:mb-6">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#00ADEF]/10 rounded-xl lg:rounded-2xl flex items-center justify-center border border-[#00ADEF]/20">
                <Users className="w-5 h-5 lg:w-6 lg:h-6 text-[#00ADEF]" />
              </div>
              <div className="font-mono text-[10px] font-bold text-[#00ADEF] bg-[#00ADEF]/5 px-3 py-1 rounded-full border border-[#00ADEF]/10 uppercase tracking-wider">Khảo sát 350 Bác sĩ</div>
            </div>
            
            <h3 className="font-heading font-bold text-[1.05rem] sm:text-2xl text-slate-900 mb-3 lg:mb-6 tracking-tight sm:tracking-normal whitespace-nowrap sm:whitespace-normal">
              Thực tế lâm sàng
            </h3>
            
            <div className="flex flex-col gap-2 lg:gap-3 mt-auto">
              <div className="bg-slate-50 p-3 lg:p-4 rounded-xl lg:rounded-2xl border border-slate-100 flex items-center gap-4 text-left">
                <div className="text-4xl font-extrabold text-[#00ADEF] shrink-0 w-[4.5rem]">75<span className="text-xl">%</span></div>
                <div>
                  <div className="text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">Thao tác tốt hơn</div>
                  <p className="font-body text-[10px] text-slate-500 leading-tight">Đặc tính thao tác, trộn và độ chảy lỏng vượt trội.</p>
                </div>
              </div>
              
              <div className="bg-slate-50 p-3 lg:p-4 rounded-xl lg:rounded-2xl border border-slate-100 flex items-center gap-4 text-left">
                <div className="text-4xl font-extrabold text-[#00ADEF] shrink-0 w-[4.5rem]">86<span className="text-xl">%</span></div>
                <div>
                  <div className="text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">Thong thả thao tác</div>
                  <p className="font-body text-[10px] text-slate-500 leading-tight">Thời gian làm việc (Working time) lý tưởng.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button After Pillars */}
        <div className="mt-8 mb-20 flex justify-center">
          <button className="group relative inline-flex items-center justify-center gap-2 bg-[#00ADEF] text-white px-8 py-4 rounded-full font-heading font-bold text-base sm:text-lg hover:bg-slate-900 hover:shadow-xl hover:shadow-slate-900/20 transition-all duration-300 hover:-translate-y-1">
            <ShoppingCart className="w-5 h-5" />
            <span>Xem ưu đãi và đặt hàng</span>
            <ArrowUpRight className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </button>
        </div>

        {/* Testimonials Quotes */}
        <div className="relative overflow-hidden bg-transparent" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {testimonials.map((test, index) => (
              <div key={index} className="w-full md:w-1/2 shrink-0 px-2 lg:px-4">
                <div className="bg-white rounded-[20px] lg:rounded-3xl p-6 sm:p-8 lg:p-10 relative shadow-sm border border-slate-200 h-full flex flex-col max-w-4xl mx-auto cursor-grab active:cursor-grabbing">
                  <Quote className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 w-10 h-10 lg:w-12 lg:h-12 text-slate-100" />
                  <div className="flex items-center gap-1 mb-4 lg:mb-6">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star key={star} className="w-4 h-4 fill-[#00ADEF] text-[#00ADEF]" />
                    ))}
                  </div>
                  <div className="font-heading font-bold text-lg sm:text-xl text-slate-900 mb-4">{test.topic}</div>
                  <p className="font-body text-slate-700 italic leading-relaxed mb-8 relative z-10 flex-grow">
                    "{test.content}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <img src={test.avatar} alt={test.name} className="w-12 h-12 lg:w-14 lg:h-14 rounded-full object-cover object-top bg-white p-0.5 border border-slate-200" />
                    <div>
                      <div className="font-heading font-bold text-slate-900">{test.name}</div>
                      <div className="font-body text-xs text-slate-500 mt-0.5 max-w-md">{test.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex ? 'w-6 bg-[#00ADEF]' : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <button className="group relative inline-flex items-center justify-center gap-2 bg-[#00ADEF] text-white px-8 py-4 rounded-full font-heading font-bold text-base sm:text-lg hover:bg-slate-900 hover:shadow-xl hover:shadow-slate-900/20 transition-all duration-300 hover:-translate-y-1">
            <ShoppingCart className="w-5 h-5" />
            <span>Xem ưu đãi và đặt hàng</span>
            <ArrowUpRight className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </button>
        </div>

      </div>
    </section>
  );
}

