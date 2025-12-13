import React from 'react';
import { spacing, typography, colors, components, ColorTheme } from '../../config/design-system';

export type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
  metric?: string;
  theme: ColorTheme;
  className?: string;
};

/**
 * TestimonialCard Component
 * Quote + name + role + optional metric card
 * Owns: Quote/name/role/metric layout
 * Does NOT own: Section-level spacing
 */
export function TestimonialCard({
  quote,
  name,
  role,
  metric,
  theme,
  className = '',
}: TestimonialCardProps) {
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
        ${spacing.card.px}
        ${spacing.card.pyLg}
        ${components.shadow.surface1}
        ${components.transition.default}
        hover:shadow-card-hover
        ${className}
      `}
    >
      <p className={`${typography.body} text-text-secondary italic ${spacing.block.y.md}`}>
        "{quote}"
      </p>
      
      <div className={`${typography.h3} text-text-primary ${spacing.block.y.sm}`}>
        {name}
      </div>
      
      <div className={`${typography.label} text-text-muted ${spacing.block.y.sm}`}>
        {role}
      </div>
      
      {metric && (
        <div className={`
          ${typography.textXs}
          ${isDark ? colors.dark.accent.primary : themeColors.accent.primary}
          font-medium
          ${spacing.block.y.sm}
        `}>
          {metric}
        </div>
      )}
    </div>
  );
}
