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

replaceInFile('src/components/shofu/solutions/IndirectRestoration.tsx', [
  {
    oldText: 'Bảo chứng y văn vững chắc và hiệu suất thực tế được kiểm chứng bởi Bác sĩ trên hơn 100 quốc gia và vùng lãnh thổ.',
    newText: '<strong className="text-slate-900">Bảo chứng y văn vững chắc</strong> và hiệu suất thực tế được <strong className="text-emerald-600">kiểm chứng bởi Bác sĩ trên hơn 100 quốc gia</strong> và vùng lãnh thổ.'
  },
  {
    oldText: 'Keo dán chứa HEMA hoạt động như "bọt biển" ngậm dịch ngà. Theo thời gian, HEMA bị thủy phân phân hủy lớp lai, gây bong sút, rò rỉ vi kẽ và ê buốt muộn tàn nhẫn cho bệnh nhân.',
    newText: 'Keo dán chứa HEMA hoạt động như "bọt biển" <strong className="text-slate-300">ngậm dịch ngà</strong>. Theo thời gian, HEMA bị <strong className="text-red-400">thủy phân phân hủy lớp lai</strong>, gây <strong className="text-red-400">bong sút, rò rỉ vi kẽ</strong> và <strong className="text-amber-400">ê buốt muộn tàn nhẫn</strong> cho bệnh nhân.'
  },
  {
    oldText: 'Lớp màng (film thickness) của xi măng/keo cũ quá dày (30-50µm) làm "đội" các phục hình Veneer, Tabletop siêu mỏng, gây cộm khớp, buộc phải mài chỉnh hoặc chịu rủi ro nứt vỡ sứ giòn.',
    newText: 'Lớp màng (film thickness) của xi măng/keo cũ <strong className="text-red-400">quá dày (30-50µm)</strong> làm "đội" các phục hình Veneer, Tabletop siêu mỏng, <strong className="text-amber-400">gây cộm khớp</strong>, buộc phải mài chỉnh hoặc chịu rủi ro <strong className="text-red-400">nứt vỡ sứ giòn</strong>.'
  },
  {
    oldText: 'Vòi trộn Automix lãng phí 0.25g - 0.44g xi măng kẹt lại mỗi lần bơm. Mỗi ca gắn vứt đi hàng chục ngàn đồng. Cộng thêm hàng tá chai Primer sứ lỉnh kỉnh dễ bay hơi làm phồng rộp chi phí.',
    newText: 'Vòi trộn Automix <strong className="text-red-400">lãng phí 0.25g - 0.44g xi măng</strong> kẹt lại mỗi lần bơm. Mỗi ca gắn <strong className="text-amber-400">vứt đi hàng chục ngàn đồng</strong>. Cộng thêm hàng tá chai Primer sứ lỉnh kỉnh dễ bay hơi làm <strong className="text-red-400">phồng rộp chi phí</strong>.'
  },
  {
    oldText: 'Để thấu hiểu "ma trận chai lọ", cần nhìn vào bản chất hóa học riêng biệt của từng giao diện bám dính.',
    newText: 'Để thấu hiểu "ma trận chai lọ", cần nhìn vào <strong className="text-white">bản chất hóa học riêng biệt</strong> của từng <strong className="text-amber-400">giao diện bám dính</strong>.'
  },
  {
    oldText: '<h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 mb-4 uppercase">HÀNG NGÀN NHA SĨ VÀ CHUYÊN GIA ĐÃ CHỌN</h2>',
    newText: '<h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 mb-4 uppercase"><span className="text-[#00ADEF]">HÀNG NGÀN NHA SĨ VÀ CHUYÊN GIA</span> ĐÃ CHỌN</h2>'
  }
]);
