const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/ShofuCaseStudies.tsx', 'utf-8');

// 1. Remove the old Desktop navigation buttons
content = content.replace(
  /\{\/\* Navigation Buttons \(Desktop\) \*\/\}[\s\S]*?\{\/\* Content \*\/\}/,
  '{/* Content */}'
);

// 2. Replace the Mobile Nav Overlay with unified Navigation Buttons
const mobileNavOld = `                {/* Mobile Nav Overlay */}
                {hasMultipleImages && (
                  <div className="absolute inset-0 flex items-center justify-between px-2 sm:hidden pointer-events-none z-[120]">
                    <button 
                      onClick={handlePrev} 
                      className="pointer-events-auto p-2 bg-black/40 rounded-full text-white/70 hover:text-white"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                      onClick={handleNext} 
                      className="pointer-events-auto p-2 bg-black/40 rounded-full text-white/70 hover:text-white"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                )}`;

const unifiedNavNew = `                {/* Navigation Buttons (Unified) */}
                {hasMultipleImages && (
                  <>
                    <button 
                      onClick={handlePrev} 
                      className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-black/40 rounded-full text-white/70 hover:text-white hover:bg-black/60 transition-colors z-[120]"
                    >
                      <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
                    </button>
                    <button 
                      onClick={handleNext} 
                      className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-black/40 rounded-full text-white/70 hover:text-white hover:bg-black/60 transition-colors z-[120]"
                    >
                      <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
                    </button>
                  </>
                )}`;

content = content.replace(mobileNavOld, unifiedNavNew);

fs.writeFileSync('src/components/shofu/ShofuCaseStudies.tsx', content);
console.log("Arrows patched!");
