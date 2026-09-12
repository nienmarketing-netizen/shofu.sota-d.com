const fs = require('fs');

let file_path = "/app/applet/src/components/shofu/solutions/DirectRestoration.tsx";
let content = fs.readFileSync(file_path, 'utf8');

const target = `<ImagePlaceholder 
                  className="aspect-[4/3] w-full max-w-[480px] bg-white shadow-lg rounded-2xl border border-slate-200" 
                  text="Ảnh chụp cận cảnh tuýp composite Beautifil II LS màu sắc sang trọng bên cạnh hình ảnh cùi răng sau khi hoàn thiện phục hồi mặt nhai, các múi răng được điêu khắc sắc nét, chân thực không tì vết." 
                />`;

const replacement = `<div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[460px] -ml-8 sm:-ml-10 lg:ml-0 -z-10 lg:z-auto">
                  <img 
                    src="/image/phuc-hoi-truc-tiep-Shofu-beautifill-II-LS.webp" 
                    alt="Phục hồi trực tiếp Shofu Beautifil II LS" 
                    className="w-full h-auto object-contain block [mask-image:linear-gradient(to_bottom,black_0%,black_75%,rgba(0,0,0,0.5)_85%,transparent_96%),linear-gradient(to_right,transparent_0%,black_15%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_75%,rgba(0,0,0,0.5)_85%,transparent_96%),linear-gradient(to_right,transparent_0%,black_15%)] [mask-composite:intersect] [-webkit-mask-composite:source-in] lg:[mask-image:radial-gradient(ellipse_80%_74%_at_62%_38%,black_45%,rgba(0,0,0,0.85)_58%,rgba(0,0,0,0.4)_68%,transparent_78%)] lg:[-webkit-mask-image:radial-gradient(ellipse_80%_74%_at_62%_38%,black_45%,rgba(0,0,0,0.85)_58%,rgba(0,0,0,0.4)_68%,transparent_78%)] lg:[mask-composite:add] lg:[-webkit-mask-composite:source-over]"
                    loading="lazy"
                  />
                </div>`;

content = content.replace(target, replacement);

fs.writeFileSync(file_path, content);
console.log("Replaced ImagePlaceholder with img");
