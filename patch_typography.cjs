const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

// Target 1: span
let t1 = `<span className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 mb-6 max-w-full overflow-hidden font-mono text-[9px] min-[375px]:text-[10px] sm:text-xs font-bold text-amber-400 tracking-tight sm:tracking-wide uppercase">
              ĐẶC QUYỀN ĐỒNG HÀNH KHÔNG THỂ TỪ CHỐI
            </span>`;
let r1 = `<span className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 mb-6 max-w-full overflow-hidden font-mono text-[9px] min-[375px]:text-[10px] sm:text-xs font-bold text-amber-400 tracking-tight sm:tracking-wide">
              Đặc quyền đồng hành không thể từ chối
            </span>`;
content = content.replace(t1, r1);

// Target 2: h2
let t2 = `<h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-10 leading-tight uppercase">
              GÓI GIẢI PHÁP ĐỒNG BỘ "GIOMER KHÔNG Ê BUỐT" – AN TÂM LÂM SÀNG
            </h2>`;
let r2 = `<h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-white leading-[1.3] mb-10 tracking-tight">
              Gói giải pháp đồng bộ <br className="hidden sm:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">"Giomer không ê buốt"</span> – An tâm lâm sàng
            </h2>`;
content = content.replace(t2, r2);

// Target 3: h3 combo
let t3 = `<h3 className="font-heading font-bold text-xl sm:text-2xl text-amber-400 mb-4 border-b border-slate-700 pb-4">Combo Dán - Gắn Đồng Bộ trị giá 3.415.000đ</h3>`;
let r3 = `<h3 className="font-heading font-bold text-xl md:text-2xl text-amber-400 mb-4 border-b border-slate-700 pb-4">Combo dán - gắn đồng bộ trị giá 3.415.000đ</h3>`;
content = content.replace(t3, r3);

// Target 4: h3 gift
let t4 = `<h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-4 border-b border-amber-500/30 pb-4 flex items-center gap-2">
                <Gift className="w-6 h-6 text-amber-400" /> BỘ QUÀ TẶNG ĐẶC QUYỀN (Trị giá 2.500.000đ)
              </h3>`;
let r4 = `<h3 className="font-heading font-bold text-xl md:text-2xl text-white mb-4 border-b border-amber-500/30 pb-4 flex items-center gap-2">
                <Gift className="w-6 h-6 text-amber-400" /> Bộ quà tặng đặc quyền (Trị giá 2.500.000đ)
              </h3>`;
content = content.replace(t4, r4);

fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);
console.log("Updated typography");
