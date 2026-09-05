const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/ShofuOfferModal.tsx', 'utf-8');

// Update productDetails
const oldProductDetails = `  const productDetails: Record<1 | 2 | 3 | 4, any> = {
    1: {
      name: 'Mua 1 Tặng 1 Xi Măng Gắn BeautiLink SA 15.6g',
      badge: 'TIẾT KIỆM GẦN 50%',
      headerText: 'BeautiLink SA 15.6g',
      title: 'Mua 1 Tặng 1',
      subtitle: 'Xi Măng Gắn BeautiLink SA 15.6g',
      desc: 'Mua 01 hộp BeautiLink SA 15.6g, tặng ngay 01 bộ keo dán Universal BeautiBond Xtreme (trị giá 1.420.000đ).',
      oldPrice: 'Giá gốc: 2.995.000đ',
      newPrice: 'Giá ưu đãi: 1.575.000đ',
      isBlueHeader: true
    },
    2: {
      name: 'Mua 7 Tặng 2 Dòng Composite BeautiFil',
      badge: 'TẶNG 2 TUÝP',
      headerText: 'BeautiFil Composite',
      title: 'Mua 7 Tặng 2',
      subtitle: 'Dòng Composite BeautiFil',
      desc: 'Áp dụng cho BeautiFil Injectable X/X SL hoặc BeautiFil II. Giảm sâu chi phí vốn trên mỗi ca phục hình.',
      oldPrice: 'Giá gốc: 495.000đ - 595.000đ',
      newPrice: 'Giá ưu đãi /tuýp: 385.000đ - 463.000đ',
      isBlueHeader: true
    },
    3: {
      name: 'Mua 4 Tặng 1 Composite Thẩm Mỹ BeautiFil II LS',
      badge: 'TIẾT KIỆM 20%',
      headerText: 'BeautiFil II LS',
      title: 'Mua 4 Tặng 1',
      subtitle: 'Composite Thẩm Mỹ BeautiFil II LS',
      desc: 'Sở hữu dòng composite có độ co rút cực thấp (0.85% Vol) và kháng mòn cao.',
      oldPrice: 'Giá gốc: 695.000đ',
      newPrice: 'Giá ưu đãi /tuýp: 556.000đ',
      isBlueHeader: true
    },
    4: {
      name: 'Trợ Giá Trực Tiếp Keo Dán BeautiBond Xtreme',
      badge: 'GIẢM 430K',
      headerImage: 'https://cdn.jsdelivr.net/gh/nienmarketing-netizen/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988/beautibond-xtreme.png',
      title: 'Trợ Giá Trực Tiếp',
      subtitle: 'Keo Dán BeautiBond Xtreme (BBX)',
      desc: 'Trải nghiệm keo dán công nghệ Quadra-Functional Monomer (chứa 10-MDP) với mức giá cực kỳ tối ưu.',
      oldPrice: 'Giá gốc: 1.420.000đ',
      newPrice: 'Giá ưu đãi: 990.000đ',
      isBlueHeader: false
    }
  };`;

const newProductDetails = `  const productDetails: Record<1 | 2 | 3 | 4, any> = {
    1: {
      name: 'Mua 7 Tặng 2 Dòng Composite BeautiFil',
      badge: 'TẶNG 2 TUÝP',
      headerText: 'BeautiFil Composite',
      headerImage: '/images/CTKM-mua-7-tang-2-Beautifill-II.webp',
      title: 'Mua 7 Tặng 2',
      subtitle: 'Dòng Composite BeautiFil',
      desc: 'Áp dụng cho BeautiFil Injectable X/X SL hoặc BeautiFil II. Giảm sâu chi phí vốn trên mỗi ca phục hình.',
      oldPrice: 'Giá gốc: 495.000đ - 595.000đ',
      newPrice: 'Giá ưu đãi /tuýp: 385.000đ - 463.000đ',
      isBlueHeader: true
    },
    2: {
      name: 'Mua 4 Tặng 1 Composite Thẩm Mỹ BeautiFil II LS',
      badge: 'TIẾT KIỆM 20%',
      headerText: 'BeautiFil II LS',
      headerImage: '/images/CTKM-mua-4-tang-1-Beautifil-II-LS.webp',
      title: 'Mua 4 Tặng 1',
      subtitle: 'Composite Thẩm Mỹ BeautiFil II LS',
      desc: 'Sở hữu dòng composite có độ co rút cực thấp (0.85% Vol) và kháng mòn cao.',
      oldPrice: 'Giá gốc: 695.000đ',
      newPrice: 'Giá ưu đãi /tuýp: 556.000đ',
      isBlueHeader: true
    },
    3: {
      name: 'Trợ Giá Trực Tiếp Keo Dán BeautiBond Xtreme',
      badge: 'GIẢM TRỰC TIẾP',
      headerImage: '/images/CTKM-giam-gia-truc-tiep-BBX.webp',
      headerText: 'BeautiBond Xtreme',
      title: 'Trợ Giá Trực Tiếp',
      subtitle: 'Keo Dán BeautiBond Xtreme (BBX)',
      desc: 'Trải nghiệm keo dán công nghệ Quadra-Functional Monomer (chứa 10-MDP) với mức giá cực kỳ tối ưu.',
      oldPrice: 'Giá gốc: 1.420.000đ',
      newPrice: 'Giá ưu đãi: 990.000đ',
      isBlueHeader: false
    },
    4: {
      name: 'Mua 1 Tặng 1 Xi Măng Gắn BeautiLink SA 15.6g',
      badge: 'TIẾT KIỆM GẦN 50%',
      headerText: 'BeautiLink SA 15.6g',
      headerImage: '/images/CTKM-mua-1-tang-1-BLSA-BBX.webp',
      title: 'Mua 1 Tặng 1',
      subtitle: 'Xi Măng Gắn BeautiLink SA 15.6g',
      desc: 'Mua 01 hộp BeautiLink SA 15.6g, tặng ngay 01 bộ keo dán Universal BeautiBond Xtreme (trị giá 1.420.000đ).',
      oldPrice: 'Giá gốc: 2.995.000đ',
      newPrice: 'Giá ưu đãi: 1.575.000đ',
      isBlueHeader: true
    }
  };`;

content = content.replace(oldProductDetails, newProductDetails);

// Fix the JSX to render the images beautifully
const oldJsx = `<div className={\`relative aspect-[16/9] sm:aspect-[2/1] w-full flex items-center justify-center p-4 \${offer.isBlueHeader ? 'bg-[#007ba7]' : 'bg-[#e2e8f0]'}\`}>
                          {offer.headerImage && (
                            <img src={offer.headerImage} alt={offer.headerText} className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90" />
                          )}`;
const newJsx = `<div className={\`relative aspect-[4/3] w-full flex items-center justify-center p-0 bg-slate-100\`}>
                          {offer.headerImage && (
                            <img src={offer.headerImage} alt={offer.headerText} className="absolute inset-0 w-full h-full object-cover" />
                          )}`;
content = content.replace(oldJsx, newJsx);

fs.writeFileSync('src/components/shofu/ShofuOfferModal.tsx', content);
console.log("Patched modal!");
