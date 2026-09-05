const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

// Combo box
content = content.replace('<span className="text-slate-300">01 Lọ Keo dán Universal BeautiBond Xtreme (5ml)</span>', '<span className="text-slate-300 text-sm sm:text-base leading-relaxed">01 Lọ Keo dán Universal BeautiBond Xtreme (5ml)</span>');
content = content.replace('<span className="text-slate-300">01 Ống Xi măng BeautiLink SA Handmix (15.6g) khổng lồ</span>', '<span className="text-slate-300 text-sm sm:text-base leading-relaxed">01 Ống Xi măng BeautiLink SA Handmix (15.6g) khổng lồ</span>');

// Gift box
content = content.replace('<p className="text-slate-300"><strong className="text-white">Quà tặng vật lý:</strong> 01 Lọ BBX Trial (2ml) để trải nghiệm thực tế ngay tại phòng khám trước khi khui lọ chính.</p>', '<p className="text-slate-300 text-sm sm:text-base leading-relaxed"><strong className="text-white">Quà tặng vật lý:</strong> 01 Lọ BBX Trial (2ml) để trải nghiệm thực tế ngay tại phòng khám trước khi khui lọ chính.</p>');
content = content.replace('<p className="text-slate-300"><strong className="text-white">Tài liệu số chuyên sâu:</strong> Sổ tay E-Guide "Khoảng Xi Măng Ghép Lâm Sàng & Quy Trình Xử Lý Bề Mặt Sứ".</p>', '<p className="text-slate-300 text-sm sm:text-base leading-relaxed"><strong className="text-white">Tài liệu số chuyên sâu:</strong> Sổ tay E-Guide "Khoảng Xi Măng Ghép Lâm Sàng & Quy Trình Xử Lý Bề Mặt Sứ".</p>');
content = content.replace('<p className="text-slate-300"><strong className="text-white">Đặc quyền đào tạo:</strong> Vé tham gia Group Học Thuật Kín gỡ rối ca lâm sàng trực tiếp qua Zalo 1:1.</p>', '<p className="text-slate-300 text-sm sm:text-base leading-relaxed"><strong className="text-white">Đặc quyền đào tạo:</strong> Vé tham gia Group Học Thuật Kín gỡ rối ca lâm sàng trực tiếp qua Zalo 1:1.</p>');

fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);
console.log("Text sizes updated");
