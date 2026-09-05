const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

const targetStr = `<div className="mt-8 pt-6 border-t border-slate-100 grid gap-4">
              <div className="flex gap-4 items-center bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <div className="font-heading font-black text-4xl text-[#00ADEF] tracking-tighter leading-none shrink-0">75<span className="text-2xl">%</span></div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Đánh giá thao tác & dọn dư <strong className="text-slate-800">tốt hơn</strong> các dòng đang dùng.
                </p>
              </div>
              <div className="flex gap-4 items-center bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <div className="font-heading font-black text-4xl text-amber-500 tracking-tighter leading-none shrink-0">86<span className="text-2xl">%</span></div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Đánh giá thời gian làm việc <strong className="text-slate-800">vừa vặn</strong>, không gây áp lực.
                </p>
              </div>
            </div>`;

const replacementStr = `<div className="mt-8 pt-6 border-t border-slate-100 flex justify-center">
              <img 
                src="https://raw.githubusercontent.com/nienmarketing-netizen/shofu.sota-d.com/main/public/images/feedback-beautilink-SA.webp?v=${Date.now()}" 
                alt="Đánh giá từ Bác sĩ về BeautiLink SA" 
                className="w-full h-auto object-contain"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>`;

if (content.includes(targetStr)) {
    content = content.replace(targetStr, replacementStr);
    fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);
    console.log("Successfully replaced block with feedback image!");
} else {
    console.log("Target string not found.");
}
