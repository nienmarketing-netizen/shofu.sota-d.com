import React from 'react';
import { Crown, Sparkles, Layers, ShieldPlus, ArrowUpRight, Syringe, Gem, ShoppingCart } from 'lucide-react';

export function ShofuSolutions() {
  const solutions = [
    {
      id: 'indirect',
      title: 'Phục Hình Gián Tiếp',
      icon: Gem,
      bgClass: 'bg-gradient-to-br from-[#33BDF2]/80 to-[#00ADEF]/80',
    },
    {
      id: 'direct',
      title: 'Phục Hình Trực Tiếp',
      icon: Syringe,
      bgClass: 'bg-gradient-to-br from-[#00ADEF]/80 to-[#007AA8]/80',
    },
    {
      id: 'preventive',
      title: 'Nha Khoa Phòng Ngừa',
      icon: ShieldPlus,
      bgClass: 'bg-gradient-to-br from-[#E54848]/80 to-[#C43838]/80',
    },
    {
      id: 'masterclass',
      title: 'Giải Pháp Toàn Diện',
      icon: Layers,
      bgClass: 'bg-gradient-to-br from-[#C43838]/80 to-[#8C2828]/80',
    }
  ];

  return (
    <section id="solutions" className="py-20 relative border-b border-slate-200 bg-slate-200 bg-grid-pattern">
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 mb-4 uppercase">
            Giải Pháp Lâm Sàng Trọng Tâm
          </h2>
          <p className="font-body text-base text-slate-600 max-w-2xl mx-auto">
            Khám phá hệ sinh thái sản phẩm Shofu được thiết kế chuyên sâu cho từng chỉ định lâm sàng, giúp nâng cao chất lượng điều trị và tối ưu chi phí vận hành tại phòng khám.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {solutions.map((sol) => (
            <div 
              key={sol.id}
              className={`relative overflow-hidden rounded-xl sm:rounded-2xl p-8 sm:p-10 flex flex-col items-center justify-center text-center group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${sol.bgClass}`}
            >
              {/* Subtle Pattern Overlay */}
              <div className="absolute inset-0 opacity-10 bg-grid-pattern mix-blend-overlay"></div>
              
              <sol.icon className="w-10 h-10 sm:w-12 sm:h-12 text-white mb-4 sm:mb-5 stroke-[1.5] relative z-10 group-hover:scale-110 transition-transform duration-300" />
              
              <h3 className="font-mono font-bold text-xs sm:text-sm text-white tracking-widest uppercase relative z-10">
                {sol.title}
              </h3>
              
              {/* Corner CTA Triangle */}
              <div 
                className="absolute top-0 right-0 w-14 h-14 bg-white/20 group-hover:bg-white/40 transition-colors pointer-events-none"
                style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
              >
                <ArrowUpRight className="absolute top-2 right-2 w-5 h-5 text-white opacity-70 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Product Showcase */}
        <div className="mt-16 lg:mt-20 relative z-20">
          <div className="text-center mb-8">
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 uppercase">
              Sản phẩm bán chạy
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Product 1 */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 flex flex-col items-center text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-full aspect-[16/9] bg-slate-100 rounded-xl mb-5 overflow-hidden flex items-center justify-center p-0">
                <img src="https://cdn.jsdelivr.net/gh/nienmarketing-netizen/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988/beautifil-injectable-x.png" alt="Beautifil Injectable X" className="w-full h-full object-cover mix-blend-multiply" />
              </div>
              <div className="font-mono text-[10px] text-[#00ADEF] font-semibold uppercase tracking-widest mb-2">COMPOSITE LỎNG CAO CẤP</div>
              <h4 className="font-heading font-bold text-lg sm:text-xl text-slate-900 mb-2 leading-tight">Beautifil Injectable X</h4>
              <div className="font-mono text-xs text-slate-500">Độ bóng & Độ bền vượt trội</div>
            </div>

            {/* Product 2 */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 flex flex-col items-center text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-full aspect-[16/9] bg-slate-100 rounded-xl mb-5 overflow-hidden flex items-center justify-center p-0">
                <img src="https://cdn.jsdelivr.net/gh/nienmarketing-netizen/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988/beautibond-xtreme.png" alt="BeautiBond Xtreme" className="w-full h-full object-cover mix-blend-multiply" />
              </div>
              <div className="font-mono text-[10px] text-[#00ADEF] font-semibold uppercase tracking-widest mb-2">KEO DÁN ĐA NĂNG HEMA-FREE</div>
              <h4 className="font-heading font-bold text-lg sm:text-xl text-slate-900 mb-2 leading-tight">BeautiBond Xtreme</h4>
              <div className="font-mono text-xs text-slate-500">Lực dán chắc chắn mọi bề mặt</div>
            </div>

            {/* Product 3 */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 flex flex-col items-center text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-full aspect-[16/9] bg-slate-100 rounded-xl mb-5 overflow-hidden flex items-center justify-center p-0">
                <img src="https://cdn.jsdelivr.net/gh/nienmarketing-netizen/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988/BeautilinkSA.png" alt="Beautilink SA" className="w-full h-full object-cover mix-blend-multiply" />
              </div>
              <div className="font-mono text-[10px] text-[#C43838] font-semibold uppercase tracking-widest mb-2">XI MĂNG TỰ DÁN THẾ HỆ MỚI</div>
              <h4 className="font-heading font-bold text-lg sm:text-xl text-slate-900 mb-2 leading-tight">Beautilink SA</h4>
              <div className="font-mono text-xs text-slate-500">One-Sweep sạch xi măng dư</div>
            </div>

            {/* Product 4 */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 flex flex-col items-center text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-full aspect-[16/9] bg-slate-100 rounded-xl mb-5 overflow-hidden flex items-center justify-center p-0">
                <img src="/images/super-snap-xtreme.png" alt="Super-Snap Xtreme" className="w-full h-full object-cover mix-blend-multiply" />
              </div>
              <div className="font-mono text-[10px] text-[#00ADEF] font-semibold uppercase tracking-widest mb-2">HỆ THỐNG ĐÁNH BÓNG</div>
              <h4 className="font-heading font-bold text-lg sm:text-xl text-slate-900 mb-2 leading-tight">Super-Snap Xtreme</h4>
              <div className="font-mono text-xs text-slate-500">Độ bóng 3D hoàn hảo</div>
            </div>
            
          </div>

          <div className="mt-10 sm:mt-12 flex justify-center">
            <button className="group relative inline-flex items-center justify-center gap-2 bg-[#00ADEF] text-white px-8 py-4 rounded-full font-heading font-bold text-base sm:text-lg hover:bg-slate-900 hover:shadow-xl hover:shadow-slate-900/20 transition-all duration-300 hover:-translate-y-1">
              <ShoppingCart className="w-5 h-5" />
              <span>Xem ưu đãi và đặt hàng</span>
              <ArrowUpRight className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
