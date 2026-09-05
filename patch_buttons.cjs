const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

// The baseline classes
const baselineClasses = "gap-1.5 sm:gap-2 bg-[#00ADEF] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap";

const baselineGiftIcon = '<Gift className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" />';
const baselineArrowIcon = '<ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />';

// Replace Section 2 button
content = content.replace(
  'gap-1 sm:gap-2 bg-[#00ADEF] text-white px-0.5 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-[11.5px] min-[400px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap',
  baselineClasses
);

// Replace generic button classes for sections 3, 4, 5, 6, 8
const genericOldClass = 'gap-2 bg-[#00ADEF] text-white px-8 py-4 rounded-full font-mono text-sm font-bold uppercase tracking-wider hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto';
const genericNewClass = baselineClasses;
content = content.split(genericOldClass).join(genericNewClass);

// Replace section 3 without w-full sm:w-auto (if it misses it)
const sec3OldClass = 'gap-2 bg-[#00ADEF] text-white px-8 py-4 rounded-full font-mono text-sm font-bold uppercase tracking-wider hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1"';
const sec3NewClass = baselineClasses + '"';
content = content.split(sec3OldClass).join(sec3NewClass);

// Section 7 special button class
const sec7OldClass = 'gap-2 bg-[#00ADEF] text-white px-8 py-4 rounded-full font-mono text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-slate-900 hover:shadow-xl hover:shadow-white/20 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto';
const sec7NewClass = 'gap-1.5 sm:gap-2 bg-[#00ADEF] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-white hover:text-slate-900 hover:shadow-xl hover:shadow-white/20 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap';
content = content.split(sec7OldClass).join(sec7NewClass);

// Now, replace icons and add truncate to spans for all these buttons
// For icons, we can replace:
// <Gift className="w-5 h-5 shrink-0" />
// with
// <Gift className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" />
content = content.split('<Gift className="w-5 h-5 shrink-0" />').join('<Gift className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" />');

// <ArrowRight className="w-5 h-5 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
content = content.split('<ArrowRight className="w-5 h-5 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />').join('<ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />');

// Section 7 ArrowRight is slightly different:
// <ArrowRight className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
content = content.split('<ArrowRight className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />').join('<ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />');

// Now, spans that need truncate:
// <span>Yêu cầu tư vấn</span> -> <span className="truncate">Yêu cầu tư vấn</span>
// <span>Tư vấn giải pháp tối ưu chi phí</span> -> <span className="truncate">Tư vấn giải pháp tối ưu chi phí</span>
// <span>Trải nghiệm phác đồ 3 bước</span> -> <span className="truncate">Trải nghiệm phác đồ 3 bước</span>
// <span>Gia nhập cộng đồng nha sĩ tinh hoa</span> -> <span className="truncate">Gia nhập cộng đồng nha sĩ tinh hoa</span>
// <span>ĐĂNG KÝ "GIOMER KHÔNG Ê BUỐT" - NHẬN QUÀ 2.5TR!</span> -> <span className="truncate">ĐĂNG KÝ "GIOMER KHÔNG Ê BUỐT" - NHẬN QUÀ 2.5TR!</span>
// <span>Bác sĩ còn câu hỏi? Nhận tư vấn ngay</span> -> <span className="truncate">Bác sĩ còn câu hỏi? Nhận tư vấn ngay</span>
content = content.split('<span>Yêu cầu tư vấn</span>').join('<span className="truncate">Yêu cầu tư vấn</span>');
content = content.split('<span>Tư vấn giải pháp tối ưu chi phí</span>').join('<span className="truncate">Tư vấn giải pháp tối ưu chi phí</span>');
content = content.split('<span>Trải nghiệm phác đồ 3 bước</span>').join('<span className="truncate">Trải nghiệm phác đồ 3 bước</span>');
content = content.split('<span>Gia nhập cộng đồng nha sĩ tinh hoa</span>').join('<span className="truncate">Gia nhập cộng đồng nha sĩ tinh hoa</span>');
content = content.split('<span>ĐĂNG KÝ "GIOMER KHÔNG Ê BUỐT" - NHẬN QUÀ 2.5TR!</span>').join('<span className="truncate">ĐĂNG KÝ "GIOMER KHÔNG Ê BUỐT" - NHẬN QUÀ 2.5TR!</span>');
content = content.split('<span>Bác sĩ còn câu hỏi? Nhận tư vấn ngay</span>').join('<span className="truncate">Bác sĩ còn câu hỏi? Nhận tư vấn ngay</span>');


fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);
