const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

const target = '<AlertTriangle className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />';
if (content.includes(target)) {
    // Only remove the first instance of this exact string in Section 5, or just replace it since it's unique enough or we can be specific.
    // Wait, let's look at the context to be safer.
    const fullContext = `<div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-bold text-[10px] min-[375px]:text-[11px] sm:text-xs md:text-sm tracking-wide mb-6 whitespace-nowrap">
                <AlertTriangle className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span>Triệt tiêu sai số lâm sàng & tài chính</span>
              </div>`;
    const replacement = `<div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-bold text-[10px] min-[375px]:text-[11px] sm:text-xs md:text-sm tracking-wide mb-6 whitespace-nowrap">
                <span>Triệt tiêu sai số lâm sàng & tài chính</span>
              </div>`;
    
    content = content.replace(fullContext, replacement);
    fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);
    console.log("Icon removed successfully");
} else {
    console.log("Target not found");
}
