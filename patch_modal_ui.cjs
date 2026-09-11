const fs = require('fs');
let file = 'src/components/shofu/ShofuOfferModal.tsx';
let content = fs.readFileSync(file, 'utf8');

const targetBlock = `<div className="relative z-10 flex flex-col gap-2 sm:gap-3 mb-4 bg-slate-800/50 p-3.5 sm:p-4 rounded-xl">
                      <div className="flex justify-between items-center text-[11px] sm:text-xs">
                        <span className="text-slate-400 whitespace-nowrap">Tổng giá trị:</span>
                        <span className="text-slate-300 font-semibold whitespace-nowrap">{activeOffer.totalValue}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs sm:text-[13px]">
                        <span className="text-slate-200 font-medium whitespace-nowrap">Mức đầu tư ưu đãi:</span>
                        <span className={\`\${themeText} font-heading font-extrabold text-lg sm:text-xl whitespace-nowrap\`}>
                          {activeOffer.price}
                        </span>
                      </div>
                    </div>`;

const newBlock = `{activeOffer.totalValue && (
                    <div className="relative z-10 flex flex-col gap-2 sm:gap-3 mb-4 bg-slate-800/50 p-3.5 sm:p-4 rounded-xl">
                      <div className="flex justify-between items-center text-[11px] sm:text-xs">
                        <span className="text-slate-400 whitespace-nowrap">Tổng giá trị:</span>
                        <span className="text-slate-300 font-semibold whitespace-nowrap">{activeOffer.totalValue}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs sm:text-[13px]">
                        <span className="text-slate-200 font-medium whitespace-nowrap">Mức đầu tư ưu đãi:</span>
                        <span className={\`\${themeText} font-heading font-extrabold text-lg sm:text-xl whitespace-nowrap\`}>
                          {activeOffer.price}
                        </span>
                      </div>
                    </div>
                    )}`;

content = content.replace(targetBlock, newBlock);
fs.writeFileSync(file, content);
console.log('done');
