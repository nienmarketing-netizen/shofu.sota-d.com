import React from 'react';

export interface UspItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export interface PainPointCard {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface IonItem {
  id: string;
  ionName: string;
  title: string;
  description: string;
}

export interface EcosystemProductItem {
  id: string;
  stepNumber: string;
  tag: string;
  name: string;
  image: string;
  features: string[];
}

export interface ScientificPillarItem {
  id: number;
  icon: string;
  title: string;
  points: string[];
}

export interface TestimonialItem {
  quote: string;
  name: string;
  title: string;
}

export interface CommitmentItem {
  title: string;
  desc: string;
}

export interface FaqItem {
  id: string;
  q: string;
  a: string;
}

export interface ComprehensiveSolutionData {
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    image: string;
    mobileImage?: string;
    usps: UspItem[];
    ctaText: string;
    secondaryCtaText: string;
    ctaFormTitle?: string;
    ctaFormDesc?: string;
    ctaFormExtraHtml?: string;
    ctaRedirectThanks?: boolean;
    ctaTargetUrl?: string;
    ctaResourceTitle?: string;
  };
  painPoints: {
    badge: string;
    headline: string;
    subheadline: string;
    cards: PainPointCard[];
    calloutText: string;
    ctaText: string;
    ctaFormTitle?: string;
    ctaFormDesc?: string;
    ctaFormExtraHtml?: string;
    ctaRedirectThanks?: boolean;
    ctaTargetUrl?: string;
    ctaResourceTitle?: string;
  };
  bioactive: {
    badge: string;
    headline: string;
    intro: string;
    batteryTitle: string;
    batteryDesc: string;
    ions: IonItem[];
    ctaText: string;
    ctaFormTitle?: string;
    ctaFormDesc?: string;
    ctaFormExtraHtml?: string;
    ctaRedirectThanks?: boolean;
    ctaTargetUrl?: string;
    ctaResourceTitle?: string;
  };
  coreProducts: {
    headline: string;
    intro: string;
    products: EcosystemProductItem[];
    ctaText: string;
    ctaFormTitle?: string;
    ctaFormDesc?: string;
    ctaFormExtraHtml?: string;
    ctaRedirectThanks?: boolean;
    ctaTargetUrl?: string;
    ctaResourceTitle?: string;
  };
  evidence: {
    headline: string;
    subheadline: string;
    scientificPillars: ScientificPillarItem[];
    testimonialsHeadline: string;
    testimonialsRow1: TestimonialItem[];
    testimonialsRow2: TestimonialItem[];
    ctaText: string;
    ctaFormTitle?: string;
    ctaFormDesc?: string;
    ctaFormExtraHtml?: string;
    ctaRedirectThanks?: boolean;
    ctaTargetUrl?: string;
    ctaResourceTitle?: string;
  };
  offer: {
    badge: string;
    headline: string;
    subheadline: string;
    coreBox: {
      title: string;
      image: string;
      items: string[];
    };
    giftBox: {
      badge: string;
      title: string;
      image: string;
      items: string[];
    };
    originalPrice: string;
    salePrice: string;
    commitments: CommitmentItem[];
    ctaText: string;
    ctaFormTitle?: string;
    ctaFormDesc?: string;
    ctaFormExtraHtml?: string;
    ctaRedirectThanks?: boolean;
    ctaTargetUrl?: string;
    ctaResourceTitle?: string;
  };
  faq: {
    headline: string;
    items: FaqItem[];
    ctaText: string;
    ctaFormTitle?: string;
    ctaFormDesc?: string;
    ctaFormExtraHtml?: string;
    ctaRedirectThanks?: boolean;
    ctaTargetUrl?: string;
    ctaResourceTitle?: string;
  };
}

export const applyFormat = (
  tag: 'strong' | 'cyan' | 'red' | 'amber' | 'br',
  setter: React.Dispatch<React.SetStateAction<string>>,
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
    alert('Vui lòng bôi đen đoạn chữ cần định dạng trước khi bấm nút.');
    return;
  }
  let wrapped = '';
  if (tag === 'strong') wrapped = `<strong>${selection}</strong>`;
  if (tag === 'cyan') wrapped = `<span class="text-[#00ADEF] font-bold">${selection}</span>`;
  if (tag === 'red') wrapped = `<span class="text-[#8C2828] font-bold">${selection}</span>`;
  if (tag === 'amber') wrapped = `<span class="text-slate-900 bg-amber-400 px-1.5 py-0.5 rounded font-bold">${selection}</span>`;
  setter((prev) => prev.replace(selection, wrapped));
};
