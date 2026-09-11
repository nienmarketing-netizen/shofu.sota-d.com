const fs = require('fs');

const filePath = 'src/components/shofu/ShofuSolutions.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

const oldArray = `  const solutions = [
    {
      id: 'indirect',
      slug: 'phuc-hinh-gian-tiep',
      title: 'Phục Hình Gián Tiếp',
      icon: Gem,
      bgClass: 'bg-gradient-to-br from-[#33BDF2]/80 to-[#00ADEF]/80',
    },
    {
      id: 'direct',
      slug: 'phuc-hinh-truc-tiep',
      title: 'Phục Hình Trực Tiếp',
      icon: Syringe,
      bgClass: 'bg-gradient-to-br from-[#00ADEF]/80 to-[#007AA8]/80',
    },
    {
      id: 'preventive',
      slug: 'nha-khoa-phong-ngua',
      title: 'Nha Khoa Phòng Ngừa',
      icon: ShieldPlus,
      bgClass: 'bg-gradient-to-br from-[#E54848]/80 to-[#C43838]/80',
    },
    {
      id: 'masterclass',
      slug: 'giai-phap-toan-dien',
      title: 'Giải Pháp Toàn Diện',
      icon: Layers,
      bgClass: 'bg-gradient-to-br from-[#C43838]/80 to-[#8C2828]/80',
    }
  ];`;

const newArray = `  const solutions = [
    {
      id: 'preventive',
      slug: 'nha-khoa-phong-ngua',
      title: 'Nha Khoa Phòng Ngừa',
      icon: ShieldPlus,
      bgClass: 'bg-gradient-to-br from-[#E54848]/80 to-[#C43838]/80',
    },
    {
      id: 'direct',
      slug: 'phuc-hinh-truc-tiep',
      title: 'Phục Hồi Trực Tiếp',
      icon: Syringe,
      bgClass: 'bg-gradient-to-br from-[#00ADEF]/80 to-[#007AA8]/80',
    },
    {
      id: 'indirect',
      slug: 'phuc-hinh-gian-tiep',
      title: 'Phục Hình Gián Tiếp',
      icon: Gem,
      bgClass: 'bg-gradient-to-br from-[#33BDF2]/80 to-[#00ADEF]/80',
    },
    {
      id: 'masterclass',
      slug: 'giai-phap-toan-dien',
      title: 'Giải Pháp Toàn Diện',
      icon: Layers,
      bgClass: 'bg-gradient-to-br from-[#C43838]/80 to-[#8C2828]/80',
    }
  ];`;

if (content.includes(oldArray)) {
  content = content.replace(oldArray, newArray);
  fs.writeFileSync(filePath, content);
  console.log("Reordered solutions array.");
} else {
  console.log("Could not find the array block to replace.");
}
