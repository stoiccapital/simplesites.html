import React from 'react';
import { spacing, typography, colors, components, ColorTheme } from '../../config/design-system';

export type FAQItemProps = {
  theme: ColorTheme;
  question: string;
  answer: string;
  index: number;
};

/**
 * FAQItem Component
 * Single FAQ accordion item
 * Owns: Accordion behavior, arrow rotation, collapse motion, ARIA attributes, divider styling
 * Does NOT own: Section-level spacing
 */
export function FAQItem({ theme, question, answer, index }: FAQItemProps) {
  const themeColors = colors[theme];
  const isDark = theme === 'dark';

  return (
    <details className={spacing.block.y.lg}>
      <summary 
        className="w-full flex items-center justify-between cursor-pointer list-none hover:text-link-hover transition-colors"
        aria-expanded="false"
        aria-controls={`faq-answer-${index}`}
      >
        <h3 className={`${typography.h3} text-text-primary`}>
          {question}
        </h3>
        <svg
          className={`w-5 h-5 shrink-0 ${components.transition.default} [details[open]_&]:rotate-90 text-text-primary`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </summary>
      <div 
        id={`faq-answer-${index}`}
        className={spacing.block.y.md}
        role="region"
        aria-hidden="true"
      >
        <p className={`${typography.body} text-text-secondary`}>
          {answer}
        </p>
      </div>
      <div className={`w-full border-t ${spacing.block.y.sm} border-border-subtle`} />
    </details>
  );
}
