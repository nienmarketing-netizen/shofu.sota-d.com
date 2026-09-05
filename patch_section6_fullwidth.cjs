const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

const target1 = `<div className="text-center max-w-4xl mx-auto mb-16 relative z-10">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 mb-4"><span className="text-[#00ADEF]">Hàng ngàn nha sĩ và chuyên gia</span> đã chọn</h2>
        </div>
        
                {/* Marquee Wrapper */}`;

const replacement1 = `<div className="text-center max-w-4xl mx-auto mb-16 relative z-10">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 mb-4"><span className="text-[#00ADEF]">Hàng ngàn nha sĩ và chuyên gia</span> đã chọn</h2>
        </div>
        </div> {/* Close w-[90%] container here so marquee can be full width */}
        
        {/* Marquee Wrapper (Full Width) */}`;

const target2 = `        </div>
<div className="mt-12 md:mt-16 text-center relative z-10">
          <button 
            onClick={openOffer}`;

const replacement2 = `        </div>
        
        {/* Re-open w-[90%] container for the button */}
        <div className="w-[90%] lg:w-[80%] mx-auto relative z-10">
<div className="mt-12 md:mt-16 text-center relative z-10">
          <button 
            onClick={openOffer}`;

let newContent = content.replace(target1, replacement1);
newContent = newContent.replace(target2, replacement2);

if (content === newContent) {
  console.log("No changes made. Targets might be wrong.");
  process.exit(1);
} else {
  fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', newContent);
  console.log("Updated");
}
