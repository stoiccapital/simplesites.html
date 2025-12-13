'use client';

import React, { useState } from 'react';
import { spacing, layout, navbar, ColorTheme } from '../config/design-system';
import { CTAButton } from './ui/CTAButton';
import { LocaleToggle } from './ui/LocaleToggle';
import { ThemeToggle } from './ui/ThemeToggle';

export type NavbarLabels = {
  brand: string;
  links: {
    features: string;
    pricing: string;
    useCases: string;
    faq: string;
  };
  cta: string;
  ariaLabels: {
    goToHomepage: string;
    switchToEnglish: string;
    switchToGerman: string;
    openMenu: string;
    closeMenu: string;
  };
};

export type NavbarProps = {
  theme: ColorTheme;
  labels: NavbarLabels;
  locale: 'en' | 'de';
};

export function Navbar({ theme, labels, locale }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Scroll to section handler
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Logo click handler - scroll to Hero
  const handleLogoClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    scrollToSection('hero');
    setIsOpen(false); // Close mobile menu if open
  };

  // Nav link click handlers
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
    setIsOpen(false); // Close mobile menu after clicking a link
  };

  // Navigation links configuration
  const navLinks = [
    { id: 'features', label: labels.links.features },
    { id: 'pricing', label: labels.links.pricing },
    { id: 'use-cases', label: labels.links.useCases },
    { id: 'faq', label: labels.links.faq },
  ];

  return (
    <nav aria-label="Main navigation" className="nav-surface sticky top-0 z-40 w-full border-b">
      <div className={`${layout.container.maxWidth} ${layout.container.px} mx-auto`}>
        <div className={`flex items-center justify-between ${navbar.height}`}>
          {/* Left: Logo */}
          <div 
            className="text-xl font-bold text-text-primary cursor-pointer hover:text-link-hover transition-colors"
            onClick={handleLogoClick}
            role="button"
            tabIndex={0}
            aria-label={labels.ariaLabels.goToHomepage}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleLogoClick(e as any);
              }
            }}
          >
            {labels.brand}
          </div>
          
          {/* Middle: Navigation Links (Desktop Only) */}
          <div className={`hidden md:flex items-center ${navbar.link.spacing.x}`}>
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                onClick={(e) => handleNavClick(e, link.id)}
                className="text-text-secondary hover:text-link-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-ring-focus rounded"
              >
                {link.label}
              </a>
            ))}
          </div>
          
          {/* Right: Toggle Cluster + CTA + Hamburger (Mobile) */}
          <div className={`flex items-center ${spacing.gap.sm}`}>
            {/* Toggle Cluster (Desktop): LocaleToggle, ThemeToggle, CTA */}
            <div className={`hidden md:flex items-center ${spacing.gap.sm}`}>
              <LocaleToggle />
              <ThemeToggle />
              <CTAButton variant="primary" theme={theme} label={labels.cta} />
            </div>

            {/* Hamburger Button (Mobile Only) */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? labels.ariaLabels.closeMenu : labels.ariaLabels.openMenu}
              className="md:hidden p-2 rounded text-text-primary hover:bg-bg-neutral transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-ring-focus"
            >
              {/* Hamburger Icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  // Close icon (X)
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  // Hamburger icon (three lines)
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isOpen && (
          <div
            id="mobile-menu"
            className={`md:hidden border-t ${navbar.borderColor} ${spacing.block.y.md}`}
          >
            <div className={`flex flex-col ${spacing.block.y.md}`}>
              {/* Toggle Cluster (Mobile): LocaleToggle, ThemeToggle */}
              <div className={`flex items-center ${spacing.gap.sm} ${spacing.block.y.sm}`}>
                <LocaleToggle />
                <ThemeToggle />
              </div>

              {/* Navigation Links (Mobile) */}
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`text-text-secondary hover:text-link-hover transition-colors ${spacing.block.y.sm} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-ring-focus rounded`}
                >
                  {link.label}
                </a>
              ))}

              {/* CTA Button (Mobile) */}
              <div className={spacing.block.y.sm}>
                <CTAButton variant="primary" theme={theme} label={labels.cta} onClick={() => setIsOpen(false)} />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
