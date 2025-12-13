import React from 'react';
import { components, colors, ColorTheme } from '../../config/design-system';

export type CTAButtonProps = {
  variant: 'primary' | 'ghost';
  theme: ColorTheme;
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};

/**
 * CTAButton Component
 * White slim CTA button (primary/ghost variants)
 * Owns: Button styling, hover/active/focus states
 * Does NOT own: Layout spacing
 */
export function CTAButton({
  variant,
  theme,
  label,
  onClick,
  type = 'button',
  className = '',
}: CTAButtonProps) {
  // Use semantic tokens only - no theme branching
  // Primary variant: uses semantic CTA tokens (black in light mode, white in dark mode)
  // Ghost variant: uses semantic border/text tokens
  const baseClasses = variant === 'primary' 
    ? components.button.primary.base 
    : components.button.secondary.base;
  
  let variantClasses: string;
  
  if (variant === 'primary') {
    // Primary uses semantic CTA tokens (no theme branching)
    // Hover and active states use token-based classes that adapt automatically
    variantClasses = `${colors.light.primary.bg} ${colors.light.primary.text} ${colors.light.primary.hover} ${colors.light.primary.active}`;
  } else {
    // Ghost variant: semantic tokens in both modes (no theme branching)
    // Enhanced hover: background + border color change for better visibility
    // Active state slightly stronger than hover
    variantClasses = `bg-transparent border border-border-subtle text-text-primary hover:bg-bg-neutral-hover hover:border-border-strong active:bg-bg-neutral-active active:border-border-strong`;
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} cursor-pointer ${className}`}
    >
      {label}
    </button>
  );
}
