const fs = require('fs');

let file_path = "/app/applet/src/components/shofu/solutions/DirectRestoration.tsx";
let content = fs.readFileSync(file_path, 'utf8');

const target1 = `<div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end order-4 lg:order-none my-6 lg:my-0 w-full">
                <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[460px] -ml-8 sm:-ml-10 lg:ml-0 -z-10 lg:z-auto">
                  <img 
                    src="/image/phuc-hoi-truc-tiep-shofu-beautifil-injectable-x.webp" 
                    alt="Phục hồi trực tiếp Shofu Beautifil Injectable X" 
                    className="w-full h-auto object-contain block [mask-image:linear-gradient(to_bottom,black_0%,black_75%,rgba(0,0,0,0.5)_85%,transparent_96%),linear-gradient(to_right,transparent_0%,black_15%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_75%,rgba(0,0,0,0.5)_85%,transparent_96%),linear-gradient(to_right,transparent_0%,black_15%)] [mask-composite:intersect] [-webkit-mask-composite:source-in] lg:[mask-image:radial-gradient(ellipse_80%_74%_at_62%_38%,black_45%,rgba(0,0,0,0.85)_58%,rgba(0,0,0,0.4)_68%,transparent_78%)] lg:[-webkit-mask-image:radial-gradient(ellipse_80%_74%_at_62%_38%,black_45%,rgba(0,0,0,0.85)_58%,rgba(0,0,0,0.4)_68%,transparent_78%)] lg:[mask-composite:add] lg:[-webkit-mask-composite:source-over]"
                    loading="lazy"
                  />`;

const replacement1 = `<div className="w-full lg:w-1/2 flex items-center justify-end order-4 lg:order-none my-6 lg:my-0 w-full">
                <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[460px] ml-auto -mr-4 sm:-mr-6 lg:mr-0 -z-10 lg:z-auto">
                  <img 
                    src="/image/phuc-hoi-truc-tiep-shofu-beautifil-injectable-x.webp" 
                    alt="Phục hồi trực tiếp Shofu Beautifil Injectable X" 
                    className="w-full h-auto object-contain block [mask-image:linear-gradient(to_bottom,black_0%,black_85%,rgba(0,0,0,0.5)_92%,transparent_98%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_85%,rgba(0,0,0,0.5)_92%,transparent_98%)] lg:[mask-image:radial-gradient(ellipse_80%_74%_at_62%_38%,black_45%,rgba(0,0,0,0.85)_58%,rgba(0,0,0,0.4)_68%,transparent_78%)] lg:[-webkit-mask-image:radial-gradient(ellipse_80%_74%_at_62%_38%,black_45%,rgba(0,0,0,0.85)_58%,rgba(0,0,0,0.4)_68%,transparent_78%)]"
                    loading="lazy"
                  />`;

content = content.replace(target1, replacement1);

fs.writeFileSync(file_path, content);
console.log("Replaced Step 3 layout and mask");
