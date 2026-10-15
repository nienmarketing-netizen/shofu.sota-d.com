import React from 'react';

export interface PainPointItem {
  id: string;
  title: string;
  description: string;
}

export interface UspItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export interface StepFeature {
  iconName?: string;
  title: string;
  description: string;
}

export interface StepItem {
  stepNumber: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  suggestedSize: string;
  specs?: string[];
  features?: StepFeature[];
}

export interface FaqItem {
  id: string;
  q: string;
  a: string;
}

export interface EvidenceItem {
  id: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  text: string;
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
  if (tag === 'red') wrapped = `<span class="text-[#8C2828] font-bold">${selection}</span>`;
  if (tag === 'u') wrapped = `<u class="decoration-[#00ADEF]">${selection}</u>`;

  setter((prev) => prev.replace(selection, wrapped));
};
