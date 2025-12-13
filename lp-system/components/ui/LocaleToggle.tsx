'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { getOppositeLocale, type Locale, LOCALES } from '../../config/preferences';

/**
 * LocaleToggle Component
 * Client-only toggle for switching between locales
 * Preserves [vertical] and [slug] segments exactly
 */
export function LocaleToggle() {
  const pathname = usePathname();
  const router = useRouter();

  // Extract locale from pathname
  // Path format: /{locale}/{vertical}/{slug}
  const pathParts = pathname.split('/').filter(Boolean);
  const firstSegment = pathParts[0];
  
  // Determine current locale with fallback
  let currentLocale: Locale = 'en';
  if (firstSegment && LOCALES.includes(firstSegment as Locale)) {
    currentLocale = firstSegment as Locale;
  }

  const otherLocale = getOppositeLocale(currentLocale);
  
  // Build new path: replace first segment (locale) only, preserve rest
  const newPathParts = [otherLocale, ...pathParts.slice(1)];
  const newPath = '/' + newPathParts.join('/');

  const ariaLabel = `Switch language to ${otherLocale === 'en' ? 'English' : 'German'}`;

  const handleToggle = () => {
    router.replace(newPath);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={ariaLabel}
      className="px-2 py-1 text-sm rounded cursor-pointer transition-colors text-text-primary hover:bg-bg-neutral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-ring-focus"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleToggle();
        }
      }}
    >
      {otherLocale.toUpperCase()}
    </button>
  );
}
