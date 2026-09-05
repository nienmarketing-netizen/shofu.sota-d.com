const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

// 1. Add import
const importToAdd = `import { CampaignModal } from '../../CampaignModal';\n`;
if (!content.includes('CampaignModal')) {
    content = content.replace(`import { ArrowRight`, importToAdd + `import { ArrowRight`);
}

// 2. Add state inside IndirectRestoration
const stateToAdd = `  const [isCampaignModalOpen, setIsCampaignModalOpen] = useState(false);
  const [campaignModalTitle, setCampaignModalTitle] = useState('');

  const openCampaignModal = (title: string) => {
    setCampaignModalTitle(title);
    setIsCampaignModalOpen(true);
  };\n`;
if (!content.includes('openCampaignModal')) {
    content = content.replace(`const openOffer = () => {`, stateToAdd + `\n  const openOffer = () => {`);
}

// 3. Replace all openOffer clicks with openCampaignModal clicks
content = content.replace(
    `onClick={openOffer}\n              className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#00ADEF] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"\n            >\n              <Gift className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" />\n              <span className="truncate">NHẬN MẪU THỬ BBX 2ml & ƯU ĐÃI</span>`,
    `onClick={() => openCampaignModal("Nhận mẫu thử BBX 2ml & Ưu đãi")}\n              className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#00ADEF] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"\n            >\n              <Gift className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" />\n              <span className="truncate">NHẬN MẪU THỬ BBX 2ml & ƯU ĐÃI</span>`
);

content = content.replace(
    `onClick={openOffer}\n            className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#00ADEF] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"\n          >\n            <Gift className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" />\n            <span className="truncate">TƯ VẤN GIẢI PHÁP TRIỆT TIÊU RỦI RO</span>`,
    `onClick={() => openCampaignModal("Tư vấn giải pháp triệt tiêu rủi ro")}\n            className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#00ADEF] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"\n          >\n            <Gift className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" />\n            <span className="truncate">TƯ VẤN GIẢI PHÁP TRIỆT TIÊU RỦI RO</span>`
);

content = content.replace(
    `onClick={openOffer}\n            className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#00ADEF] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"\n          >\n            <Gift className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" />\n            <span className="truncate">Yêu cầu tư vấn</span>`,
    `onClick={() => openCampaignModal("Yêu cầu tư vấn")}\n            className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#00ADEF] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"\n          >\n            <Gift className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" />\n            <span className="truncate">Yêu cầu tư vấn</span>`
);

content = content.replace(
    `onClick={openOffer}\n            className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#00ADEF] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"\n          >\n            <Gift className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" />\n            <span className="truncate">Tư vấn giải pháp tối ưu chi phí</span>`,
    `onClick={() => openCampaignModal("Tư vấn giải pháp tối ưu chi phí")}\n            className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#00ADEF] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"\n          >\n            <Gift className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" />\n            <span className="truncate">Tư vấn giải pháp tối ưu chi phí</span>`
);

content = content.replace(
    `onClick={openOffer}\n              className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#00ADEF] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"\n            >\n              <Gift className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" />\n              <span className="truncate">Trải nghiệm phác đồ 3 bước</span>`,
    `onClick={() => openCampaignModal("Trải nghiệm phác đồ 3 bước")}\n              className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#00ADEF] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"\n            >\n              <Gift className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" />\n              <span className="truncate">Trải nghiệm phác đồ 3 bước</span>`
);

content = content.replace(
    `onClick={openOffer}\n            className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#00ADEF] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"\n          >\n            <Gift className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" />\n            <span className="truncate">Gia nhập cộng đồng MiCD</span>`,
    `onClick={() => openCampaignModal("Gia nhập cộng đồng MiCD")}\n            className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#00ADEF] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"\n          >\n            <Gift className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" />\n            <span className="truncate">Gia nhập cộng đồng MiCD</span>`
);

content = content.replace(
    `onClick={openOffer}\n                  className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#00ADEF] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-white hover:text-slate-900 hover:shadow-xl hover:shadow-white/20 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"\n                >\n                  <span className="truncate">ĐĂNG KÝ COMBO "GIOMER KHÔNG Ê BUỐT"</span>`,
    `onClick={() => openCampaignModal("Đăng ký combo 'Giomer không ê buốt'")}\n                  className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#00ADEF] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-white hover:text-slate-900 hover:shadow-xl hover:shadow-white/20 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"\n                >\n                  <span className="truncate">ĐĂNG KÝ COMBO "GIOMER KHÔNG Ê BUỐT"</span>`
);

content = content.replace(
    `onClick={openOffer}\n              className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#00ADEF] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"\n            >\n              <Gift className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" />\n              <span className="truncate">Bác sĩ còn câu hỏi? Nhận tư vấn ngay</span>`,
    `onClick={() => openCampaignModal("Bác sĩ còn câu hỏi? Nhận tư vấn ngay")}\n              className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#00ADEF] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"\n            >\n              <Gift className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" />\n              <span className="truncate">Bác sĩ còn câu hỏi? Nhận tư vấn ngay</span>`
);

// Add the modal component at the very end of the main div
if (!content.includes('<CampaignModal')) {
    content = content.replace(`    </div>\n  );\n}\n`, `      <CampaignModal\n        isOpen={isCampaignModalOpen}\n        onClose={() => setIsCampaignModalOpen(false)}\n        title={campaignModalTitle}\n      />\n    </div>\n  );\n}\n`);
}

fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);
console.log("Successfully patched IndirectRestoration.tsx");
