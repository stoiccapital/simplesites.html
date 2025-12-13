import React from 'react';
import { spacing, typography, colors, components, ColorTheme } from '../../config/design-system';
import { CTAButton } from './CTAButton';

export type PricingCardProps = {
  title: string;
  price: string;
  body: string;
  features: string[];
  ctaLabel: string;
  theme: ColorTheme;
  isHighlighted?: boolean;
  className?: string;
};

/**
 * PricingCard Component
 * Pricing plan card with title, price, description, features, and CTA
 * Owns: Internal layout, spacing, card styling
 * Does NOT own: Section-level spacing
 */
export function PricingCard({
  title,
  price,
  body,
  features,
  ctaLabel,
  theme,
  isHighlighted = false,
  className = '',
}: PricingCardProps) {
  const themeColors = colors[theme];
  const isDark = theme === 'dark';
  const bgColor = isDark ? colors.dark.surface.default : themeColors.surface.default;
  const borderColor = isDark ? colors.dark.border.subtle : themeColors.border.subtle;

  return (
    <div
      className={`
        ${bgColor}
        ${borderColor}
        border
        ${components.card.base}
        ${spacing.card.padding.md}
        ${components.shadow.surface1}
        flex flex-col h-full
        ${components.transition.default}
        hover:shadow-card-hover
        ${className}
      `}
    >
      <h3 className={`${typography.h3} text-text-primary ${spacing.block.y.sm}`}>
        {title}
      </h3>
      
      <div className={`${typography.h2} text-text-primary ${spacing.block.y.md}`}>
        {price}
      </div>
      
      <p className={`${typography.body} ${typography.textXs} text-text-muted ${spacing.block.y.md}`}>
        {body}
      </p>
      
      <ul className={`flex flex-col ${spacing.block.y.md} flex-grow text-text-secondary`}>
        {features.map((feature, index) => (
          <li key={index} className={`flex items-start ${index > 0 ? spacing.element.y.xs : ''}`}>
            <span className="mr-2">✓</span>
            <span className={typography.body}>{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="grow flex flex-col justify-end">
        <CTAButton variant="primary" theme={theme} label={ctaLabel} className="w-full" />
      </div>
    </div>
  );
}
