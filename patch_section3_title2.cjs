const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

const targetStr = `<div className="text-center max-w-4xl mx-auto">
          <h2 className="font-heading font-extrabold text-2xl min-[375px]:text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl text-slate-900 leading-[1.3] mb-4 tracking-tight">
            <span className="text-amber-500">Tiêu chuẩn vàng</span> mới:<br />Bộ đôi liên kết sinh học <span className="text-[#00ADEF]">không thể phá hủy</span>
          </h2>`;

const replacementStr = `<div className="text-center w-full max-w-6xl mx-auto">
          <h2 className="font-heading font-extrabold text-2xl min-[375px]:text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3rem] text-slate-900 leading-[1.3] mb-4 tracking-tight">
            <span className="text-amber-500">Tiêu chuẩn vàng</span> mới:<br />
            <span className="inline-block lg:whitespace-nowrap">Bộ đôi liên kết sinh học <span className="text-[#00ADEF]">không thể phá hủy</span></span>
          </h2>`;

if (content.includes(targetStr)) {
    content = content.replace(targetStr, replacementStr);
    fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);
    console.log("Updated title");
} else {
    console.log("Target not found");
}
