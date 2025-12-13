'use client';

import React, { useEffect, useState } from 'react';
import { THEME_COOKIE_KEY, type Theme } from '../../config/preferences';

/**
 * ThemeToggle Component
 * Client-only toggle for switching between light and dark themes
 * Updates cookie and <html> class/attribute immediately
 */
export function ThemeToggle() {
  const [currentTheme, setCurrentTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  // Determine current theme from DOM on mount
  useEffect(() => {
    const html = document.documentElement;
    // Check if dark class is present (Tailwind's authoritative selector)
    const isDark = html.classList.contains('dark');
    const detectedTheme: Theme = isDark ? 'dark' : 'light';
    setCurrentTheme(detectedTheme);
    setMounted(true);
  }, []);

  const handleToggle = () => {
    const nextTheme: Theme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Update cookie
    document.cookie = `${THEME_COOKIE_KEY}=${nextTheme}; path=/; max-age=31536000; samesite=lax`;
    
    // Update <html> element using Tailwind's class selector
    const html = document.documentElement;
    if (nextTheme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    // Keep data-theme as mirror for consistency
    html.dataset.theme = nextTheme;
    
    setCurrentTheme(nextTheme);
  };

  const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
  const ariaLabel = `Switch to ${nextTheme} mode`;

  // Moon icon for dark theme, sun icon for light theme
  const MoonIcon = () => (
    <svg 
      viewBox="0 0 35 35" 
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.44,34.68a18.22,18.22,0,0,1-2.94-.24,18.18,18.18,0,0,1-15-20.86A18.06,18.06,0,0,1,9.59.63,2.42,2.42,0,0,1,12.2.79a2.39,2.39,0,0,1,1,2.41L11.9,3.1l1.23.22A15.66,15.66,0,0,0,23.34,21h0a15.82,15.82,0,0,0,8.47.53A2.44,2.44,0,0,1,34.47,25,18.18,18.18,0,0,1,18.44,34.68ZM10.67,2.89a15.67,15.67,0,0,0-5,22.77A15.66,15.66,0,0,0,32.18,24a18.49,18.49,0,0,1-9.65-.64A18.18,18.18,0,0,1,10.67,2.89Z"/>
    </svg>
  );

  const SunIcon = () => (
    <svg 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="currentColor"
      aria-hidden="true"
    >
      <g clipPath="url(#sun-clip)">
        <path d="M12 0a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1ZM4.929 3.515a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 0 0 1.414-1.414L4.93 3.515ZM1 11a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H1ZM18 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM17.657 16.243a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 1 0 1.414-1.414l-2.828-2.828ZM7.757 17.657a1 1 0 1 0-1.414-1.414L3.515 19.07a1 1 0 1 0 1.414 1.414l2.828-2.828ZM20.485 4.929a1 1 0 0 0-1.414-1.414l-2.828 2.828a1 1 0 1 0 1.414 1.414l2.828-2.828ZM13 19a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"/>
      </g>
      <defs>
        <clipPath id="sun-clip">
          <path d="M0 0h24v24H0z"/>
        </clipPath>
      </defs>
    </svg>
  );

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Switch theme"
        className="px-2 py-1 text-sm rounded cursor-pointer transition-colors text-text-primary hover:bg-bg-neutral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-ring-focus opacity-0"
        disabled
      >
        <SunIcon />
      </button>
    );
  }

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
      {currentTheme === 'dark' ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
