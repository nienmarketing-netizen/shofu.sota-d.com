const fs = require('fs');

let file_path = "/app/applet/src/components/shofu/solutions/DirectRestoration.tsx";
let content = fs.readFileSync(file_path, 'utf8');

const target = `<div className="w-[90%] lg:w-[80%] mx-auto relative z-10 flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          <div className="w-full lg:w-1/2">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-slate-900 leading-[1.3] mb-4 tracking-tight">
              Công nghệ hạt độn sinh học S-PRG – <span className="text-[#00ADEF]">"Bình ắc quy" ion bảo vệ chủ động</span>
            </h2>
            <p className="font-body text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              Điểm cốt lõi làm nên sức mạnh trị liệu vượt trội của hệ sinh thái Giomer là hạt độn sinh học S-PRG độc quyền của Shofu. Cấu trúc hạt độn 3 lớp gồm lõi thủy tinh đa chức năng đã phản ứng trước, hoạt động như một "bình ắc quy sinh học" liên tục giải phóng và tự sạc lại 6 loại ion sinh học giúp tái khoáng hóa ngà răng và chống mảng bám vĩnh cửu.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">`;

const replacement = `<div className="w-[90%] lg:w-[80%] mx-auto relative z-10 flex flex-col lg:flex-row gap-0 lg:gap-12 items-center lg:items-start">
          <div className="w-full lg:w-1/2 contents lg:block">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-slate-900 leading-[1.3] mb-2 lg:mb-4 tracking-tight order-1 lg:order-none w-full text-center lg:text-left">
              Công nghệ hạt độn sinh học S-PRG – <span className="text-[#00ADEF] block sm:inline mt-1 sm:mt-0">"Bình ắc quy" ion bảo vệ chủ động</span>
            </h2>
            <p className="font-body text-base sm:text-lg text-slate-600 leading-relaxed mb-8 order-3 lg:order-none w-full text-center lg:text-left">
              Điểm cốt lõi làm nên sức mạnh trị liệu vượt trội của hệ sinh thái Giomer là hạt độn sinh học S-PRG độc quyền của Shofu. Cấu trúc hạt độn 3 lớp gồm lõi thủy tinh đa chức năng đã phản ứng trước, hoạt động như một "bình ắc quy sinh học" liên tục giải phóng và tự sạc lại 6 loại ion sinh học giúp tái khoáng hóa ngà răng và chống mảng bám vĩnh cửu.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 order-4 lg:order-none w-full">`;

const targetImage = `<div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
             <img 
              src="/image/Shofu-S-PRG-technology.webp"`;

const replacementImage = `<div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-2 lg:order-none my-6 lg:my-0 w-full">
             <img 
              src="/image/Shofu-S-PRG-technology.webp"`;

content = content.replace(target, replacement);
content = content.replace(targetImage, replacementImage);

fs.writeFileSync(file_path, content);
console.log("Patched Section 4 mobile layout");
