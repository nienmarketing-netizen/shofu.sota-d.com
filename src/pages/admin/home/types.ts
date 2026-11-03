// Types for Home Page CMS
export interface UspItem {
  id: string;
  icon: string;
  title: string;
}

export interface HomeHeroSection {
  badgePrefix: string;
  badgeHighlight: string;
  badgeSuffix: string;
  headline: string;
  subheadline: string;
  image: string;
  mobileImage?: string;
  usps: UspItem[];
  // CTA 1: Consult
  ctaText: string;
  ctaFormTitle?: string;
  ctaFormDesc?: string;
  ctaFormExtraHtml?: string;
  ctaRedirectThanks?: boolean;
  ctaTargetUrl?: string;
  ctaResourceTitle?: string;
}

export interface SolutionCardItem {
  id: string;
  slug: string;
  title: string;
  badge?: string;
  icon: string;
  bgClass: string;
}

export interface BestsellerProductItem {
  id: string;
  category: string;
  name: string;
  tagline: string;
  image: string;
}

export interface SpecialOfferItem {
  id: number;
  badge: string;
  headerImage: string;
  headerText?: string;
  title: string;
  subtitle: string;
  desc: string;
  oldPrice?: string;
  newPrice?: string;
}

export interface HomeSolutionsSection {
  headline: string;
  subheadline: string;
  solutions: SolutionCardItem[];
  bestsellersHeadline: string;
  bestsellers: BestsellerProductItem[];
  ctaText: string;
  offerModalFormTitle?: string;
  offerModalFormDesc?: string;
  specialOffers?: SpecialOfferItem[];
  ctaFormTitle?: string;
  ctaFormDesc?: string;
  ctaFormExtraHtml?: string;
  ctaRedirectThanks?: boolean;
  ctaTargetUrl?: string;
  ctaResourceTitle?: string;
}

export interface OfferPackageItem {
  id: number;
  badge: string;
  title1: string;
  title2: string;
  description: string;
  originalPrice: string;
  salePrice: string;
  refundBadge: string;
  spotsLeftText: string;
  accentColor: string;
  ctaText: string;
  ctaFormTitle?: string;
  ctaFormDesc?: string;
  ctaFormExtraHtml?: string;
  ctaRedirectThanks?: boolean;
  ctaTargetUrl?: string;
  ctaResourceTitle?: string;
}

export interface HomeOffersSection {
  badge: string;
  headline: string;
  countdownDays: number;
  countdownHours: number;
  countdownMinutes: number;
  countdownSeconds: number;
  packages: OfferPackageItem[];
}

export interface IonBioItem {
  name: string;
  desc: string;
  color: string;
}

export interface AboutCardItem {
  number: string;
  title: string;
  desc: string;
}

export interface AboutStatItem {
  value: string;
  label: string;
}

export interface HomeAboutSection {
  // Brand History
  historyHeadline: string;
  historyDesc1: string;
  historyDesc2: string;
  historyStats: AboutStatItem[];
  historyImage: string;
  // S-PRG Technology Report
  reportBadge: string;
  reportHeadline: string;
  reportDesc: string;
  reportButtonText: string;
  reportExpandedByDefault?: boolean;
  // 3 Layers
  layersHeadline: string;
  layersSubtitle: string;
  layers: AboutCardItem[];
  // 6 Ions
  ionsHeadline: string;
  ionsSubtitle: string;
  ions: IonBioItem[];
  phBufferingDesc: string;
  rechargeReleaseDesc: string;
  // Evidence
  natureBadge: string;
  natureHeadline: string;
  natureDesc: string;
  naturePoints: { title: string; desc: string }[];
  floridaBadge: string;
  floridaHeadline: string;
  floridaDesc: string;
  floridaStat1Value: string;
  floridaStat1Label: string;
  floridaStat1Desc: string;
  floridaStat2Value: string;
  floridaStat2Label: string;
  floridaStat2Desc: string;
  floridaStat3Desc: string;
  // ROI section
  roiHeadline: string;
  roiDesc: string;
  roiCards: { title: string; desc: string }[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  topic: string;
  content: string;
  avatar: string;
}

export interface SciencePillar1 {
  tag?: string;
  title?: string;
  box1Title?: string;
  stat1Value?: string;
  stat1Label?: string;
  stat2Value?: string;
  stat2Label?: string;
  stat3Value?: string;
  stat3Label?: string;
  box2Title?: string;
  box2Desc?: string;
  box2Value?: string;
}

export interface SciencePillar2 {
  tag?: string;
  title?: string;
  point1Title?: string;
  point1Desc?: string;
  point2Title?: string;
  point2Desc?: string;
}

export interface SciencePillar3 {
  tag?: string;
  title?: string;
  item1Name?: string;
  item1Sub?: string;
  item1Badge?: string;
  item1Value?: string;
  item1Unit?: string;
  item2Name?: string;
  enamelLabel?: string;
  enamelValue?: string;
  dentinLabel?: string;
  dentinValue?: string;
}

export interface SciencePillar4 {
  tag?: string;
  title?: string;
  stat1Value?: string;
  stat1Title?: string;
  stat1Desc?: string;
  stat2Value?: string;
  stat2Title?: string;
  stat2Desc?: string;
}

export interface HomeSocialProofSection {
  badge?: string;
  headline: string;
  subheadline: string;
  pillar1?: SciencePillar1;
  pillar2?: SciencePillar2;
  pillar3?: SciencePillar3;
  pillar4?: SciencePillar4;
  ctaText1?: string;
  ctaText2?: string;
  testimonials: TestimonialItem[];
}

export interface CaseStudyImageItem {
  url: string;
  note: string;
}

export interface CaseStudyItem {
  id: number;
  title: string;
  doctor: string;
  coverImage: string;
  description: string;
  images: CaseStudyImageItem[];
}

export interface HomeCaseStudiesSection {
  badge?: string;
  headline: string;
  subheadline: string;
  caseStudies: CaseStudyItem[];
}

export interface HomeLeadMagnetSection {
  badge: string;
  headline: string;
  subheadline: string;
  coverImage: string;
  benefits: string[];
  ctaButtonText: string;
  ctaFormTitle?: string;
  ctaFormDesc?: string;
  ctaFormExtraHtml?: string;
  ctaRedirectThanks?: boolean;
  ctaTargetUrl?: string;
  ctaResourceTitle?: string;
}

export interface HomePageData {
  hero: HomeHeroSection;
  solutions: HomeSolutionsSection;
  offers: HomeOffersSection;
  about: HomeAboutSection;
  socialProof: HomeSocialProofSection;
  caseStudies: HomeCaseStudiesSection;
  leadMagnet: HomeLeadMagnetSection;
}

export const applyFormat = (
  tag: 'strong' | 'cyan' | 'red' | 'amber' | 'br',
  setter: (val: string | ((prev: string) => string)) => void,
  textareaId?: string
) => {
  const el = textareaId ? (document.getElementById(textareaId) as HTMLTextAreaElement | null) : null;
  if (el) {
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const val = el.value;
    const selected = val.substring(start, end);
    let replacement = '';
    if (tag === 'strong') replacement = `<strong>${selected || 'chữ in đậm'}</strong>`;
    else if (tag === 'cyan') replacement = `<span class="text-[#00ADEF] font-bold">${selected || 'chữ xanh'}</span>`;
    else if (tag === 'red') replacement = `<span class="text-[#8C2828] font-bold">${selected || 'chữ đỏ'}</span>`;
    else if (tag === 'amber') replacement = `<span class="text-slate-900 bg-amber-400 px-1.5 py-0.5 rounded font-bold">${selected || 'nổi bật'}</span>`;
    else if (tag === 'br') replacement = `<br/>\n`;

    const newVal = val.substring(0, start) + replacement + val.substring(end);
    setter(newVal);
    setTimeout(() => {
      el.focus();
      const cursor = start + replacement.length;
      el.setSelectionRange(cursor, cursor);
    }, 20);
    return;
  }

  const selection = window.getSelection()?.toString();
  if (tag === 'br') {
    setter((prev) => prev + '<br/>\n');
    return;
  }
  if (!selection) {
    return;
  }
  let wrapped = '';
  if (tag === 'strong') wrapped = `<strong>${selection}</strong>`;
  if (tag === 'cyan') wrapped = `<span class="text-[#00ADEF] font-bold">${selection}</span>`;
  if (tag === 'red') wrapped = `<span class="text-[#8C2828] font-bold">${selection}</span>`;
  if (tag === 'amber') wrapped = `<span class="text-slate-900 bg-amber-400 px-1.5 py-0.5 rounded font-bold">${selection}</span>`;
  setter((prev) => prev.replace(selection, wrapped));
};
