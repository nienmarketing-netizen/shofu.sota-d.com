const fs = require('fs');

function replaceInFile(filePath, replacements) {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  
  for (const { oldText, newText } of replacements) {
    if (content.includes(oldText)) {
      content = content.replace(oldText, newText);
      changed = true;
    } else {
      console.log(`Not found in ${filePath}: ${oldText.substring(0, 50)}...`);
    }
  }
  
  if (changed) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${filePath}`);
  }
}

// ShofuSolutions.tsx
replaceInFile('src/components/shofu/ShofuSolutions.tsx', [
  {
    oldText: 'Giải Pháp Lâm Sàng Trọng Tâm',
    newText: 'Giải Pháp Lâm Sàng <span className="text-[#00ADEF]">Trọng Tâm</span>'
  },
  {
    oldText: 'Khám phá hệ sinh thái sản phẩm Shofu được thiết kế chuyên sâu cho từng chỉ định lâm sàng, giúp nâng cao chất lượng điều trị và tối ưu chi phí vận hành tại phòng khám.',
    newText: 'Khám phá hệ sinh thái sản phẩm Shofu được thiết kế <strong className="text-slate-900">chuyên sâu cho từng chỉ định lâm sàng</strong>, giúp <strong className="text-emerald-600">nâng cao chất lượng điều trị</strong> và <strong className="text-amber-600">tối ưu chi phí vận hành</strong> tại phòng khám.'
  }
]);

// ShofuAbout.tsx
replaceInFile('src/components/shofu/ShofuAbout.tsx', [
  {
    oldText: 'Di Sản 100 Năm <br />\n              Nha Khoa Nhật Bản',
    newText: 'Di Sản <span className="text-[#C43838]">100 Năm</span> <br />\n              Nha Khoa <span className="text-[#00ADEF]">Nhật Bản</span>'
  },
  {
    oldText: 'Kể từ khi thành lập năm 1922 tại Kyoto, Shofu đã không ngừng tiên phong trong việc phát triển các vật liệu nha khoa mang tính đột phá. Sự tỉ mỉ, độ chính xác và cam kết chất lượng tuyệt đối của người Nhật được đúc kết trong từng sản phẩm.',
    newText: 'Kể từ khi thành lập năm 1922 tại Kyoto, Shofu đã không ngừng <strong className="text-slate-900">tiên phong</strong> trong việc phát triển các vật liệu nha khoa mang tính <strong className="text-[#00ADEF]">đột phá</strong>. Sự tỉ mỉ, độ chính xác và <strong className="text-[#C43838]">cam kết chất lượng tuyệt đối</strong> của người Nhật được đúc kết trong từng sản phẩm.'
  },
  {
    oldText: 'Hôm nay, Shofu tự hào là một trong những tập đoàn nha khoa toàn cầu, mang đến giải pháp lâm sàng đáng tin cậy cho hàng triệu Bác sĩ tại hơn 100 quốc gia.',
    newText: 'Hôm nay, Shofu tự hào là một trong những tập đoàn nha khoa toàn cầu, mang đến <strong className="text-slate-900">giải pháp lâm sàng đáng tin cậy</strong> cho hàng triệu Bác sĩ tại <strong className="text-[#00ADEF]">hơn 100 quốc gia</strong>.'
  }
]);

// ShofuHero.tsx
replaceInFile('src/components/shofu/ShofuHero.tsx', [
  {
    oldText: 'Hệ sinh thái vật liệu nha khoa tiên tiến tích hợp công nghệ hạt độn sinh học <strong className="text-slate-900">S-PRG độc quyền</strong>. Tối ưu quy trình lâm sàng, mang lại hiệu quả phục hình bền vững và bảo vệ mô răng chủ động.',
    newText: 'Hệ sinh thái vật liệu nha khoa tiên tiến tích hợp công nghệ hạt độn sinh học <strong className="text-[#00ADEF]">S-PRG độc quyền</strong>. <strong className="text-slate-900">Tối ưu quy trình lâm sàng</strong>, mang lại hiệu quả <strong className="text-slate-900">phục hình bền vững</strong> và <strong className="text-emerald-600">bảo vệ mô răng chủ động</strong>.'
  }
]);

// ShofuSocialProof.tsx
replaceInFile('src/components/shofu/ShofuSocialProof.tsx', [
  {
    oldText: '4 Trụ Cột Khoa Học <br className="hidden md:block" />Khẳng Định Vị Thế',
    newText: '<span className="text-[#00ADEF]">4 Trụ Cột Khoa Học</span> <br className="hidden md:block" />Khẳng Định Vị Thế'
  },
  {
    oldText: 'Hệ thống dữ liệu lâm sàng độc lập, nghiêm ngặt và minh bạch nhất từ các viện nghiên cứu hàng đầu thế giới minh chứng cho chất lượng của Shofu.',
    newText: 'Hệ thống dữ liệu lâm sàng <strong className="text-slate-900">độc lập, nghiêm ngặt và minh bạch</strong> nhất từ các viện nghiên cứu hàng đầu thế giới <strong className="text-emerald-600">minh chứng cho chất lượng</strong> của Shofu.'
  }
]);

// ShofuCaseStudies.tsx
replaceInFile('src/components/shofu/ShofuCaseStudies.tsx', [
  {
    oldText: 'Khám phá những ca điều trị thành công sử dụng vật liệu nha khoa Shofu.\n            Công nghệ S-PRG và hệ thống vật liệu tiên tiến mang lại kết quả thẩm mỹ và độ bền tối ưu.',
    newText: 'Khám phá những ca điều trị thành công sử dụng vật liệu nha khoa Shofu.\n            <strong className="text-slate-900">Công nghệ S-PRG</strong> và hệ thống vật liệu tiên tiến mang lại <strong className="text-emerald-600">kết quả thẩm mỹ</strong> và <strong className="text-amber-600">độ bền tối ưu</strong>.'
  }
]);

// ShofuLeadMagnet.tsx
replaceInFile('src/components/shofu/ShofuLeadMagnet.tsx', [
  {
    oldText: 'Đăng ký ngay để nhận báo giá chiết khấu đặc biệt dành cho Phòng khám/Nha khoa, kèm theo cẩm nang lâm sàng chi tiết quy trình ứng dụng vật liệu Shofu.',
    newText: 'Đăng ký ngay để nhận <strong className="text-amber-600">báo giá chiết khấu đặc biệt</strong> dành cho Phòng khám/Nha khoa, kèm theo <strong className="text-[#00ADEF]">cẩm nang lâm sàng chi tiết</strong> quy trình ứng dụng vật liệu Shofu.'
  }
]);

// ShofuOffers.tsx
replaceInFile('src/components/shofu/ShofuOffers.tsx', [
  {
    oldText: 'Triệt tiêu ê buốt tức thì nhờ màng dán dính khóa kín ống ngà từ Keo dán BeautiBond Xtreme (HEMA-Free) kỵ nước tuyệt đối, chống thoái hóa lớp lai. Xi măng tự dán BeautiLink SA phóng thích 6 ion sinh học S-PRG liên tục tái khoáng ngà răng, bảo vệ khỏi sâu răng tái phát.',
    newText: 'Triệt tiêu ê buốt tức thì nhờ màng dán dính khóa kín ống ngà từ Keo dán BeautiBond Xtreme (HEMA-Free) <strong className="text-[#00ADEF]">kỵ nước tuyệt đối</strong>, <strong className="text-emerald-400">chống thoái hóa lớp lai</strong>. Xi măng tự dán BeautiLink SA phóng thích 6 ion sinh học S-PRG liên tục tái khoáng ngà răng, <strong className="text-emerald-400">bảo vệ khỏi sâu răng tái phát</strong>.'
  },
  {
    oldText: 'Đồng bộ hóa quy trình trám thẩm mỹ từ dán dính đến đánh bóng chỉ trong một gói giải pháp. Loại bỏ các bước nhạy cảm kỹ thuật, bịt kín xoang sâu phức tạp, kết thúc bằng bộ mũi mài mịn màng chính hãng giúp mô nướu lành thương hồng hào và ngăn mảng bám tích tụ.',
    newText: 'Đồng bộ hóa quy trình trám thẩm mỹ từ dán dính đến đánh bóng chỉ trong một gói giải pháp. <strong className="text-emerald-400">Loại bỏ các bước nhạy cảm kỹ thuật</strong>, bịt kín xoang sâu phức tạp, kết thúc bằng bộ mũi mài mịn màng chính hãng giúp <strong className="text-amber-400">mô nướu lành thương hồng hào</strong> và <strong className="text-emerald-400">ngăn mảng bám tích tụ</strong>.'
  }
]);
