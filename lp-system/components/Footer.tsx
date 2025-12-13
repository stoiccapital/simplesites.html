import React from 'react';
import { spacing, layout, footer, typography } from '../config/design-system';

export type FooterLabels = {
  copyright: string;
  links: {
    privacy: string;
    terms: string;
    contact: string;
  };
};

export type FooterProps = {
  theme: 'light' | 'dark'; // Keep for API compatibility, but not used internally
  labels: FooterLabels;
};

export function Footer({ labels }: FooterProps) {
  return (
    <footer aria-label="Footer" className={`${footer.bg} border-t ${footer.borderColor} ${footer.section.padding.y}`}>
      <div className={`${layout.container.maxWidth} ${layout.container.px} mx-auto`}>
        <div className={`flex flex-col md:flex-row justify-between items-center ${spacing.gap.sm}`}>
          <div className={`${typography.textXs} ${footer.text.muted}`}>
            {labels.copyright}
          </div>
          <nav aria-label="Footer navigation" className={`flex items-center ${spacing.gap.md}`}>
            <a href="#" className={`${typography.textXs} ${footer.text.muted} hover:text-link-hover transition-colors`}>
              {labels.links.privacy}
            </a>
            <a href="#" className={`${typography.textXs} ${footer.text.muted} hover:text-link-hover transition-colors`}>
              {labels.links.terms}
            </a>
            <a href="#" className={`${typography.textXs} ${footer.text.muted} hover:text-link-hover transition-colors`}>
              {labels.links.contact}
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
