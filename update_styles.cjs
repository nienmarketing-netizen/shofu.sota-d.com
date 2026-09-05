const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/DirectRestoration.tsx', 'utf-8');

// H1 updates
content = content.replace(
  /<h1 className="font-heading font-extrabold text-3xl md:text-5xl lg:text-5xl text-slate-900 leading-\[1.2\] mb-6 tracking-tight">/g,
  '<h1 className="font-heading font-extrabold text-2xl min-[375px]:text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl text-slate-900 leading-[1.3] mb-6 tracking-tight lg:pr-4 xl:pr-0 lg:-mr-8 xl:-mr-12">'
);
content = content.replace(
  /CHẤM DỨT ÁM ẢNH Ê BUỐT SAU TRÁM & SÂU RĂNG THỨ PHÁT TRONG/g,
  'Chấm dứt ám ảnh ê buốt sau trám & sâu răng thứ phát trong'
);
content = content.replace(
  /PHỤC HỒI XOANG II RĂNG SAU/g,
  'phục hồi xoang II răng sau'
);

// H2 updates - Slate 900
content = content.replace(
  /<h2 className="font-heading font-extrabold text-3xl md:text-4xl text-slate-900 mb-6">/g,
  '<h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-slate-900 leading-[1.3] mb-4 tracking-tight">'
);
// H2 updates - White
content = content.replace(
  /<h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-6">/g,
  '<h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-white leading-[1.3] mb-4 tracking-tight">'
);

// Specific H2 text
content = content.replace(/CÔNG NGHỆ HẠT ĐỘN SINH HỌC S-PRG – "BÌNH ẮC QUY" ION BẢO VỆ CHỦ ĐỘNG/g, 'Công nghệ hạt độn sinh học S-PRG – "Bình ắc quy" ion bảo vệ chủ động');
content = content.replace(/CHỨNG CỨ LÂM SÀNG & ĐÁNH GIÁ/g, 'Chứng cứ lâm sàng & đánh giá');
content = content.replace(/GIẢI PHÁP ĐỒNG BỘ: COMBO PHỤC HỒI XOANG II KINH ĐIỂN TỪ SHOFU/g, 'Giải pháp đồng bộ: Combo phục hồi xoang II kinh điển từ Shofu');
content = content.replace(/Câu Hỏi Thường Gặp/g, 'Câu hỏi thường gặp');

// H3 updates
content = content.replace(
  /<h3 className="font-heading font-bold text-2xl md:text-3xl text-slate-900 mb-2">/g,
  '<h3 className="font-heading font-bold text-xl text-slate-900 mb-4">'
);
content = content.replace(/TỶ LỆ LƯU GIỮ/g, 'Tỷ lệ lưu giữ');
content = content.replace(/PHỤC HÌNH SẠCH BÓNG SÂU RĂNG/g, 'Phục hình sạch bóng sâu răng');

// Offer H2
content = content.replace(
  /<h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-\[1.3\] mb-10 tracking-tight">/g,
  '<h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-white leading-[1.3] mb-10 tracking-tight">'
);
content = content.replace(
  /MỞ KHÓA COMBO TRÁM MiCD CHỈ VỚI 3\.250\.000đ & NHẬN BỘ KÍT MÀI BÓNG/g,
  'Mở khóa combo trám MiCD chỉ với 3.250.000đ & nhận bộ kít mài bóng'
);
content = content.replace(
  /MỞ KHÓA ƯU ĐÃI ĐỘC QUYỀN/g,
  'Mở khóa ưu đãi độc quyền'
);

// H3 in Offer section
content = content.replace(/Bộ 3 Sản Phẩm Cốt Lõi/g, 'Bộ 3 sản phẩm cốt lõi');
content = content.replace(/🎁 Bộ 3 Quà Tặng Tài Trợ 100%/g, '🎁 Bộ 3 quà tặng tài trợ 100%');

// H4 in Offer section
content = content.replace(/BẢO CHỨNG ĐỒNG HÀNH 3 LỚP \(RỦI RO BẰNG 0\)/g, 'Bảo chứng đồng hành 3 lớp (Rủi ro bằng 0)');

// Sub-headline updates (the p tags under headings)
content = content.replace(
  /<p className="font-body text-base md:text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">/g,
  '<p className="font-body text-[14.5px] min-[375px]:text-[15.5px] sm:text-lg text-slate-600 mb-8 leading-[1.7] max-w-2xl mx-auto lg:mx-0">'
);

// Call to action button text (uppercase in classes but let's see if we should match exact case)
content = content.replace(/ĐĂNG KÝ NHẬN ƯU ĐÃI NGAY/g, 'ĐĂNG KÝ NHẬN ƯU ĐÃI NGAY'); 

fs.writeFileSync('src/components/shofu/solutions/DirectRestoration.tsx', content);
console.log('Updated DirectRestoration.tsx');
