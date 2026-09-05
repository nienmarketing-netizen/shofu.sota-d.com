const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

const targetStr = `              <div className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-2xl p-6 md:p-8 border border-amber-500/30 mb-10 w-full text-left">
                <h3 className="font-heading font-bold text-xl md:text-2xl text-white mb-4 border-b border-amber-500/30 pb-4 flex items-center gap-2">
                  <Gift className="w-6 h-6 text-amber-400" /> Bộ quà tặng đặc quyền
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
              </div>`;

const replacementStr = `              <div className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-2xl p-6 md:p-8 border border-amber-500/30 mb-10 w-full text-left flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-xl md:text-2xl text-white mb-4 border-b border-amber-500/30 pb-4 flex items-center gap-2">
                    <Gift className="w-6 h-6 text-amber-400" /> Bộ quà tặng đặc quyền
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
                
                <div className="w-full md:w-[40%] lg:w-[35%] flex justify-center items-center">
                  <img 
                    src="https://raw.githubusercontent.com/nienmarketing-netizen/shofu.sota-d.com/main/public/images/qua-tang-giomer-khong-e-buot.webp" 
                    alt="Bộ quà tặng đặc quyền Giomer" 
                    className="w-full max-w-[196px] h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" 
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>`;

if (content.includes(targetStr)) {
    content = content.replace(targetStr, replacementStr);
    fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);
    console.log("Gift section updated");
} else {
    console.log("Target not found");
}
