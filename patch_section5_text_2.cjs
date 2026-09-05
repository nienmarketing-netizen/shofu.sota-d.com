const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

content = content.replace('<p className="text-slate-300 leading-relaxed text-base sm:text-lg">Tỷ lệ <strong className="text-white">chi phí vật tư (COGS)', '<p className="text-slate-300 leading-relaxed text-sm sm:text-base">Tỷ lệ <strong className="text-white">chi phí vật tư (COGS)');
content = content.replace('<p className="text-slate-300 leading-relaxed text-base sm:text-lg">Sự gia tăng tuyến tính của số lượng thao tác', '<p className="text-slate-300 leading-relaxed text-sm sm:text-base">Sự gia tăng tuyến tính của số lượng thao tác');
content = content.replace('<p className="text-slate-300 leading-relaxed text-base sm:text-lg">Chỉ một khoảnh khắc đưa nhầm chai Primer', '<p className="text-slate-300 leading-relaxed text-sm sm:text-base">Chỉ một khoảnh khắc đưa nhầm chai Primer');

content = content.replace('<p className="text-red-200 leading-relaxed text-base sm:text-lg max-w-3xl">\n                  Hậu quả trực tiếp: <strong className="text-red-400 font-bold">Bong tróc phục hình', '<p className="text-red-200 leading-relaxed text-sm sm:text-base max-w-3xl">\n                  Hậu quả trực tiếp: <strong className="text-red-400 font-bold">Bong tróc phục hình');

fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);
console.log("Text sizes updated");
