const fs = require('fs');

let file_path = "/app/applet/src/components/shofu/solutions/DirectRestoration.tsx";
let content = fs.readFileSync(file_path, 'utf8');

// Helper to replace step content
function updateStep(content, stepNum, targetImgCol, targetTextCol) {
  // We need to inject order classes into the text column children, and contents class into the text column.
  // And order class to the image column.
  
  // Step 1:
  if (stepNum === 1) {
    content = content.replace(targetImgCol, `<div className="w-full lg:w-1/2 flex items-center justify-start lg:justify-end order-4 lg:order-none mb-6 lg:mb-0">`);
    
    const textColRepl = `<div className="w-full lg:w-1/2 lg:pl-4 contents lg:block">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 font-mono text-xs font-bold mb-4 order-1 lg:order-none mt-2 lg:mt-0">
                  Bước 1
                </div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 mb-3 order-2 lg:order-none">Keo dán universal kỵ nước BeautiBond Xtreme (BBX)</h3>
                <h4 className="font-heading font-bold text-[#00ADEF] text-sm md:text-lg mb-2 order-3 lg:order-none">Khóa chặt ống ngà kỵ nước – Chấm dứt hiện tượng thủy phân liên kết dán</h4>
                <p className="font-body text-sm text-slate-600 leading-relaxed mb-6 order-5 lg:order-none">`;
    content = content.replace(targetTextCol, textColRepl);
    
    // Add order-6 to the space-y-4 container
    content = content.replace(`<div className="space-y-4">`, `<div className="space-y-4 order-6 lg:order-none">`);
  }
  
  if (stepNum === 2) {
    content = content.replace(targetImgCol, `<div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start order-4 lg:order-none mb-6 lg:mb-0">`);
    
    const textColRepl = `<div className="w-full lg:w-1/2 lg:pr-4 contents lg:block">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 font-mono text-xs font-bold mb-4 order-1 lg:order-none mt-2 lg:mt-0">
                  Bước 2
                </div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 mb-3 order-2 lg:order-none">Composite đặc giảm co rút Beautifil II LS</h3>
                <h4 className="font-heading font-bold text-[#00ADEF] text-sm md:text-lg mb-2 order-3 lg:order-none">Điêu khắc múi rãnh vững chãi – Triệt tiêu ứng suất co ngót trùng hợp</h4>
                <p className="font-body text-sm text-slate-600 leading-relaxed mb-6 order-5 lg:order-none">`;
    content = content.replace(targetTextCol, textColRepl);
    
    // Add order-6 to the space-y-4 container (only the first one after Step 2 text)
    // We will do this globally by matching the specific text block.
  }

  if (stepNum === 3) {
    content = content.replace(targetImgCol, `<div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end order-4 lg:order-none mb-6 lg:mb-0">`);
    
    const textColRepl = `<div className="w-full lg:w-1/2 lg:pl-4 contents lg:block">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 font-mono text-xs font-bold mb-4 order-1 lg:order-none mt-2 lg:mt-0">
                  Bước 3
                </div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 mb-3 order-2 lg:order-none">Composite đắp lớp Beautifil Injectable X</h3>
                <h4 className="font-heading font-bold text-[#00ADEF] text-sm md:text-lg mb-2 order-3 lg:order-none">Sức mạnh hạt độn Nano-Optimized Silane – Lấp đầy mọi hốc sâu vi thể</h4>
                <p className="font-body text-sm text-slate-600 leading-relaxed mb-6 order-5 lg:order-none">`;
    content = content.replace(targetTextCol, textColRepl);
  }
  
  return content;
}

// Step 1
const s1_img = `<div className="w-full lg:w-1/2 flex items-center justify-start lg:justify-end">`;
const s1_txt = `<div className="w-full lg:w-1/2 lg:pl-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 font-mono text-xs font-bold mb-4">
                  Bước 1
                </div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 mb-3">Keo dán universal kỵ nước BeautiBond Xtreme (BBX)</h3>
                <h4 className="font-heading font-bold text-[#00ADEF] text-sm md:text-lg mb-2">Khóa chặt ống ngà kỵ nước – Chấm dứt hiện tượng thủy phân liên kết dán</h4>
                <p className="font-body text-sm text-slate-600 leading-relaxed mb-6">`;
content = updateStep(content, 1, s1_img, s1_txt);

// Step 2
const s2_img = `<div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start">`;
const s2_txt = `<div className="w-full lg:w-1/2 lg:pr-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 font-mono text-xs font-bold mb-4">
                  Bước 2
                </div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 mb-3">Composite đặc giảm co rút Beautifil II LS</h3>
                <h4 className="font-heading font-bold text-[#00ADEF] text-sm md:text-lg mb-2">Điêu khắc múi rãnh vững chãi – Triệt tiêu ứng suất co ngót trùng hợp</h4>
                <p className="font-body text-sm text-slate-600 leading-relaxed mb-6">`;
content = updateStep(content, 2, s2_img, s2_txt);

// Step 3
const s3_img = `<div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end">`;
const s3_txt = `<div className="w-full lg:w-1/2 lg:pl-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 font-mono text-xs font-bold mb-4">
                  Bước 3
                </div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 mb-3">Composite đắp lớp Beautifil Injectable X</h3>
                <h4 className="font-heading font-bold text-[#00ADEF] text-sm md:text-lg mb-2">Sức mạnh hạt độn Nano-Optimized Silane – Lấp đầy mọi hốc sâu vi thể</h4>
                <p className="font-body text-sm text-slate-600 leading-relaxed mb-6">`;
content = updateStep(content, 3, s3_img, s3_txt);

// We need to carefully replace the `<div className="space-y-4">` only for the 3 steps.
// Since they appear exactly 3 times in this section, we can replace all 3.
let occurrences = 0;
content = content.replace(/<div className="space-y-4">/g, match => {
  occurrences++;
  // We only want the first 3, or actually all of them inside this section are fine.
  return `<div className="space-y-4 order-6 lg:order-none">`;
});

fs.writeFileSync(file_path, content);
console.log("Replaced step layouts.");
