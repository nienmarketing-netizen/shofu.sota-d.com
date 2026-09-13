const fs = require('fs');

let file_path = "/app/applet/src/components/shofu/solutions/DirectRestoration.tsx";
let content = fs.readFileSync(file_path, 'utf8');

const target = `<div className="flex justify-center mt-12 w-full">
            <CtaButton ctaName="TuVanCongNgheSPRG"`;

const replacement = `<div className="flex justify-center mt-6 lg:mt-12 w-full order-5 lg:order-none">
            <CtaButton ctaName="TuVanCongNgheSPRG"`;

content = content.replace(target, replacement);

fs.writeFileSync(file_path, content);
console.log("Patched CTA mobile position");
