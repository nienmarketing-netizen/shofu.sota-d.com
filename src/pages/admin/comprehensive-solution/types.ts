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
