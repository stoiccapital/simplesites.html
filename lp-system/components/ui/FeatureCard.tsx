import React from 'react';
import { spacing, typography, colors, components, ColorTheme } from '../../config/design-system';

export type FeatureCardProps = {
  icon?: React.ReactNode;
  title: string;
  body: string;
  theme: ColorTheme;
  className?: string;
};

/**
 * FeatureCard Component
 * Icon + H3 + body card
 * Owns: Icon/title/body layout, internal spacing
 * Does NOT own: Section-level spacing
 */
export function FeatureCard({ icon, title, body, theme, className = '' }: FeatureCardProps) {
  const themeColors = colors[theme];
  const isDark = theme === 'dark';

  return (
    <div className={className}>
      {icon && (
        <div className={`
          ${isDark ? colors.dark.surface.elevated : themeColors.surface.default}
          ${components.surface.radius}
          w-12 h-12
          flex items-center justify-center
          ${spacing.block.y.sm}
          ${isDark ? colors.dark.accent.primary : themeColors.accent.primary}
          ${components.transition.default}
          hover:bg-bg-neutral
        `}>
          {icon}
        </div>
      )}
      
      <h3 className={`${typography.h3} text-text-primary ${spacing.block.y.md}`}>
        {title}
      </h3>
      
      <p className={`${typography.body} text-text-secondary`}>
        {body}
      </p>
    </div>
  );
}
