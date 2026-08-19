import os

filepath = 'src/components/shofu/ShofuHero.tsx'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# We need to replace the entire <div className="w-[90%] lg:w-[80%] mx-auto relative z-10"> block

start_str = '<div className="w-[90%] lg:w-[80%] mx-auto relative z-10">'
end_str = '    </section>'

start_idx = content.find(start_str)
end_idx = content.find(end_str)

if start_idx != -1 and end_idx != -1:
    new_content = content[:start_idx] + """<div className="w-[90%] lg:w-[80%] mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Main Image */}
          <div className="w-full max-w-5xl mx-auto mb-10 md:mb-12 rounded-3xl overflow-hidden shadow-2xl border border-slate-200/50">
            <img
              src="https://raw.githubusercontent.com/nienmarketing-netizen/sota-d/main/background-hero-section-full-solution-shofu.jpg"
              alt="Shofu Full Solution"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Content */}
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00ADEF] animate-pulse shrink-0"></span>
              <span className="font-mono text-xs font-medium text-slate-700 tracking-wide">
                <strong className="font-bold text-[#C43838]">Sota-D</strong> - Đối tác phân phối chính thức Shofu tại Việt Nam
              </span>
            </div>
            
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-[1.1] mb-6">
              Giải Pháp Nha Khoa <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ADEF] to-blue-600">
                Chuẩn Mực Nhật Bản
              </span>
            </h1>
            
            <p className="font-body text-base sm:text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              Hệ sinh thái vật liệu nha khoa tiên tiến tích hợp công nghệ hạt độn sinh học <strong className="text-slate-900">S-PRG độc quyền</strong>. Tối ưu quy trình lâm sàng, mang lại hiệu quả phục hình bền vững và bảo vệ mô răng chủ động.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button 
                onClick={onCTA}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#00ADEF] text-white font-mono text-sm font-bold uppercase tracking-wider hover:bg-sky-500 transition-all shadow-xl shadow-sky-500/30 flex items-center justify-center gap-2 group"
              >
                Nhận Tư Vấn Ngay
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 pt-8 border-t border-slate-200 w-full max-w-3xl mx-auto">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[#C43838] shrink-0" />
                <div className="text-left">
                  <div className="font-mono text-xs font-bold text-slate-900 mb-0.5">KIỂM ĐỊNH LÂM SÀNG</div>
                  <div className="font-body text-[13px] text-slate-600 leading-snug">Hơn 20 năm nghiên cứu & phát triển Giomer</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Microscope className="w-6 h-6 text-[#00ADEF] shrink-0" />
                <div className="text-left">
                  <div className="font-mono text-xs font-bold text-slate-900 mb-0.5">CÔNG NGHỆ ĐỘC QUYỀN</div>
                  <div className="font-body text-[13px] text-slate-600 leading-snug">Phóng thích & tái sạc 6 loại ion sinh học</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
""" + content[end_idx:]

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Updated successfully")
else:
    print("Could not find the block to replace")

