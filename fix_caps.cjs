const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/DirectRestoration.tsx', 'utf-8');

content = content.replace(/GÓC KHUẤT LÂM SÀNG/g, 'Góc khuất lâm sàng');
content = content.replace(/SỞ HỮU TRỌN BỘ GIẢI PHÁP TRÁM SINH HỌC & ĐẶC QUYỀN ĐÀO TẠO 1:1/g, 'Sở hữu trọn bộ giải pháp trám sinh học & Đặc quyền đào tạo 1:1');
content = content.replace(/>BƯỚC 1</g, '>Bước 1<');
content = content.replace(/>BƯỚC 2</g, '>Bước 2<');
content = content.replace(/>BƯỚC 3</g, '>Bước 3<');
content = content.replace(/TẢI MIỄN PHÍ PHÁC ĐỒ 'KIỂM SOÁT CO NGÓT XOANG II' CHO PHÒNG KHÁM/g, "Tải miễn phí phác đồ 'Kiểm soát co ngót xoang II' cho phòng khám");
content = content.replace(/CÔNG NGHỆ HẠT ĐỘN SINH HỌC S-PRG – <span className="text-\[#00ADEF\]">"BÌNH ẮC QUY" ION BẢO VỆ CHỦ ĐỘNG<\/span>/g, 'Công nghệ hạt độn sinh học S-PRG – <span className="text-[#00ADEF]">"Bình ắc quy" ion bảo vệ chủ động</span>');
content = content.replace(/THEO DÕI 8 NĂM/g, 'Theo dõi 8 năm');
content = content.replace(/THEO DÕI 13 NĂM/g, 'Theo dõi 13 năm');

fs.writeFileSync('src/components/shofu/solutions/DirectRestoration.tsx', content);
