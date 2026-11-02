import React from 'react';

export interface UspItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export interface PainPointItem {
  id: string;
  iconName?: string;
  title: string;
  description: string;
}

export interface IonItem {
  id: string;
  ionName: string;
  description: string;
  colorTheme?: string;
}

export interface ProductFeatureItem {
  title: string;
  description: string;
}

export interface PreventiveProductItem {
  tag: string;
  title: string;
  image: string;
  description: string;
  features: ProductFeatureItem[];
}

export interface EvidenceStudyItem {
  title: string;
  points: string[];
}

export interface TestimonialItem {
  quote: string;
  name: string;
  title: string;
}

export interface FaqItem {
  id: string;
  q: string;
  a: string;
}

export interface CtaConfig {
  ctaText: string;
  ctaFormTitle?: string;
  ctaFormDesc?: string;
  ctaFormExtraHtml?: string;
  ctaRedirectThanks?: boolean;
  ctaTargetUrl?: string;
  ctaResourceTitle?: string;
}

export interface PreventiveDentistryData {
  hero: {
    badge: string;
    headline: string;
    body: string;
    image: string;
    imageSizeNote?: string;
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
    description: string;
    items: PainPointItem[];
    calloutText: string;
    image: string;
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
    description: string;
    sPrgTitle: string;
    sPrgDesc: string;
    image: string;
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
    product1: PreventiveProductItem;
    product2: PreventiveProductItem;
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
    quote: string;
    study1: EvidenceStudyItem;
    study2: {
      title: string;
      description: string;
    };
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
      title: string;
      image: string;
      items: string[];
    };
    originalPrice: string;
    salePrice: string;
    guaranteeText: string;
    ctaText: string;
    ctaFormTitle?: string;
    ctaFormDesc?: string;
    ctaFormExtraHtml?: string;
    ctaRedirectThanks?: boolean;
    ctaTargetUrl?: string;
    ctaResourceTitle?: string;
  };
  leadMagnet: {
    headline: string;
    description: string;
    ebookCard: {
      badge: string;
      title: string;
      description: string;
      ctaText: string;
      ctaFormTitle?: string;
      ctaFormDesc?: string;
      ctaFormExtraHtml?: string;
      ctaRedirectThanks?: boolean;
      ctaTargetUrl?: string;
      ctaResourceTitle?: string;
    };
    sampleCard: {
      badge: string;
      title: string;
      description: string;
      ctaText: string;
      ctaFormTitle?: string;
      ctaFormDesc?: string;
      ctaFormExtraHtml?: string;
      ctaRedirectThanks?: boolean;
      ctaTargetUrl?: string;
      ctaResourceTitle?: string;
    };
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
  tag: 'strong' | 'red' | 'emerald' | 'amber',
  setter: React.Dispatch<React.SetStateAction<string>>
) => {
  const selection = window.getSelection()?.toString();
  if (!selection) {
    alert('Vui lòng bôi đen đoạn chữ cần định dạng trước khi bấm nút.');
    return;
  }
  let wrapped = '';
  if (tag === 'strong') wrapped = `<strong>${selection}</strong>`;
  if (tag === 'red') wrapped = `<span class="text-[#C43838] font-bold">${selection}</span>`;
  if (tag === 'emerald') wrapped = `<span class="text-emerald-600 font-bold">${selection}</span>`;
  if (tag === 'amber') wrapped = `<span class="text-amber-300 font-bold">${selection}</span>`;

  setter((prev) => prev.replace(selection, wrapped));
};

