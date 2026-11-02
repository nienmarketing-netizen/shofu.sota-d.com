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

export interface FeatureItem {
  iconName?: string;
  iconSvg?: string;
  title: string;
  description: string;
}

export interface ProductItem {
  title: string;
  subtitle: string;
  image: string;
  features: FeatureItem[];
}

export interface DiagramConfig {
  title: string;
  image: string;
  description: string;
  points: string[];
}

export interface WorkflowInterfaceItem {
  title: string;
  image: string;
  description: string;
}

export interface WorkflowStepItem {
  stepNumber: string;
  title: string;
  description: string;
}

export interface FaqItem {
  id: string;
  q: string;
  a: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  text: string;
}

export interface WorkflowConsequenceItem {
  iconName?: string;
  iconSvg?: string;
  iconColor?: string;
  text: string;
}

export interface WorkflowData {
  badge: string;
  headline: string;
  image: string;
  interfacesTitle: string;
  interfacesSubtitle: string;
  interfaces: WorkflowInterfaceItem[];
  calloutText?: string;
  consequencesTitle?: string;
  consequences?: (string | WorkflowConsequenceItem)[];
  consequencesFlowImage?: string;
  consequencesWarning?: string;
  protocolTitle: string;
  protocolSubtitle: string;
  protocolImage: string;
  steps: WorkflowStepItem[];
  ctaText: string;
  ctaFormTitle?: string;
  ctaFormDesc?: string;
  ctaFormExtraHtml?: string;
  ctaRedirectThanks?: boolean;
  ctaTargetUrl?: string;
  ctaResourceTitle?: string;
}

export interface IndirectRestorationData {
  hero: {
    badge: string;
    headline: string;
    body: string;
    image: string;
    imageSizeNote?: string;
    usps: UspItem[];
    ctaText: string;
    footerNote?: string;
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
    ctaText: string;
    ctaFormTitle?: string;
    ctaFormDesc?: string;
    ctaFormExtraHtml?: string;
    ctaRedirectThanks?: boolean;
    ctaTargetUrl?: string;
    ctaResourceTitle?: string;
  };
  goldStandard: {
    badge: string;
    headline: string;
    description: string;
    product1: ProductItem;
    product2: ProductItem;
    diagram: DiagramConfig;
    ctaText: string;
    ctaFormTitle?: string;
    ctaFormDesc?: string;
    ctaFormExtraHtml?: string;
    ctaRedirectThanks?: boolean;
    ctaTargetUrl?: string;
    ctaResourceTitle?: string;
  };
  evidence: {
    badge: string;
    headline: string;
    description: string;
    usp1: {
      title: string;
      image: string;
      description: string;
    };
    usp2: {
      title: string;
      youtubeId: string;
      description: string;
      feedbackImage: string;
    };
    usp3: {
      title: string;
      description: string;
      image: string;
      points: string[];
    };
    usp4: {
      title: string;
      problemTitle: string;
      problemDescription: string;
      problemImage: string;
      solutionTitle: string;
      solutionDescription: string;
      solutionImage: string;
    };
    ctaText: string;
    ctaFormTitle?: string;
    ctaFormDesc?: string;
    ctaFormExtraHtml?: string;
    ctaRedirectThanks?: boolean;
    ctaTargetUrl?: string;
    ctaResourceTitle?: string;
  };
  workflow: WorkflowData & {
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
    comboTitle: string;
    comboImage: string;
    comboItems: string[];
    giftsTitle: string;
    giftImage: string;
    gifts: string[];
    originalPrice: string;
    offerPrice: string;
    ctaText: string;
    guarantee: string;
    ctaFormTitle?: string;
    ctaFormDesc?: string;
    ctaFormExtraHtml?: string;
    ctaRedirectThanks?: boolean;
    ctaTargetUrl?: string;
    ctaResourceTitle?: string;
  };
  testimonials: {
    headline: string;
    ctaText: string;
    row1: TestimonialItem[];
    row2: TestimonialItem[];
    ctaFormTitle?: string;
    ctaFormDesc?: string;
    ctaFormExtraHtml?: string;
    ctaRedirectThanks?: boolean;
    ctaTargetUrl?: string;
    ctaResourceTitle?: string;
  };
  faqs: FaqItem[];
}

// Helper for applying HTML formatting to active input
export const applyFormat = (
  tag: 'strong' | 'cyan' | 'red' | 'u',
  setter: React.Dispatch<React.SetStateAction<string>>
) => {
  const selection = window.getSelection()?.toString();
  if (!selection) {
    alert('Vui lòng bôi đen đoạn chữ cần định dạng trước khi bấm nút.');
    return;
  }
  let wrapped = '';
  if (tag === 'strong') wrapped = `<strong>${selection}</strong>`;
  if (tag === 'cyan') wrapped = `<span class="text-[#00ADEF] font-bold">${selection}</span>`;
  if (tag === 'red') wrapped = `<span class="text-red-500 font-bold">${selection}</span>`;
  if (tag === 'u') wrapped = `<u class="decoration-[#00ADEF]">${selection}</u>`;

  setter((prev) => prev.replace(selection, wrapped));
};
