/**
 * Design System Primitives
 * 
 * This file defines all visual tokens and layout patterns that can be used
 * across all landing pages. No custom spacing, colors, or layouts beyond these.
 */

// ============================================================================
// SPACING TOKENS
// ============================================================================

export const spacing = {
  // Section vertical spacing (NO margins between sections)
  section: {
    y: {
      lg: 'py-16 lg:py-20',   // Footer bottom (smaller than default)
      xl: 'py-20 lg:py-24',   // New default: All mid-page sections (upgraded from old section.y.lg)
      '2xl': 'py-24 lg:py-32', // Extra large: Hero bottom, Final CTA top (upgraded from old section.y.xl)
    },
    // Separate top/bottom spacing for FinalCTA
    top: {
      '2xl': 'pt-24 lg:pt-32', // FinalCTA top spacing
    },
    bottom: {
      xl: 'pb-20 lg:pb-24', // FinalCTA bottom spacing
    },
  },
  // Internal block vertical spacing
  block: {
    y: {
      sm: 'mb-6',   // Upgraded: Tight spacing (was mb-4, now uses old block.y.md value)
      md: 'mb-8',   // Upgraded: Medium spacing (was mb-6, now uses old block.y.lg value)
      lg: 'mb-16',  // Upgraded: Large spacing (increased from mb-12 to mb-16 for more generous feature spacing)
      xl: 'mb-20',  // Extra large: Step gap, feature gap
      '2xl': 'mb-16 lg:mb-20', // New: Extra large spacing for Hero text→media on mobile/tablet
    },
  },
  // Element micro vertical spacing
  element: {
    y: {
      xs: 'mb-2',   // Very small spacing: Name → Role, Badge → Label, micro text
    },
  },
  // Grid spacing
  grid: {
    x: {
      md: 'gap-x-8',
      lg: 'gap-x-12',
    },
    y: {
      md: 'gap-y-8',
      lg: 'gap-y-12',
    },
  },
  // Horizontal spacing
  gutter: {
    x: {
      md: 'gap-6',  // Default horizontal gap between grid columns/cards (NO CHANGE)
    },
  },
  // Container horizontal padding
  container: {
    px: 'px-4 lg:px-8',  // Horizontal padding for main container (NO CHANGE)
  },
  // Legacy gap spacing (for backward compatibility, will be replaced with gutter.x.md)
  gap: {
    sm: 'gap-4',    // Small gaps (button groups)
    md: 'gap-6',    // Medium gaps (grid items) - maps to gutter.x.md
    lg: 'gap-8',    // Large gaps (split grid)
    xl: 'gap-12',   // Extra large gaps (split grid desktop)
  },
  // Card padding
  card: {
    padding: {
      md: 'px-6 py-6',  // Standard card padding
      lg: 'px-6 py-8',  // Large card padding
    },
    px: 'px-6',
    py: 'py-6',     // Standard card padding (legacy)
    pyLg: 'py-8',   // Large card padding (legacy)
  },
  // Logo-specific spacing
  logo: {
    pad: {
      md: 'px-4 py-3',  // Internal padding for each LogoCell
    },
    height: {
      sm: 'h-8',        // Small logo height
      md: 'h-12',      // Medium logo height (larger)
    },
    width: {
      md: 'min-w-[120px]', // Minimum width for logo cell
    },
  },
} as const;

// ============================================================================
// TYPOGRAPHY TOKENS
// ============================================================================

export const typography = {
  h1: 'text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight',
  h2: 'text-3xl lg:text-4xl font-bold tracking-tight',
  h3: 'text-xl lg:text-2xl font-semibold',
  body: 'text-base lg:text-lg leading-relaxed',
  label: 'text-sm font-medium',
  textXs: 'text-xs',
} as const;

// ============================================================================
// COLOR TOKENS
// ============================================================================

export type ColorTheme = 'light' | 'dark';

export const colors = {
  light: {
    // Background tokens - use semantic var-backed classes
    background: {
      default: 'bg-bg-default',
      neutral: 'bg-bg-neutral',
    },
    // Surface tokens - use semantic var-backed classes
    surface: {
      default: 'bg-bg-default',
      elevated: 'bg-bg-default',
    },
    // Text tokens - use semantic var-backed classes
    text: {
      primary: 'text-text-primary',
      secondary: 'text-text-secondary',
      muted: 'text-text-muted',
    },
    // Neutral palette - use semantic var-backed classes
    neutral: {
      darkest: 'bg-bg-default',
      surface: 'bg-bg-default',
      lightest: 'text-text-primary',
      light: 'text-text-secondary',
      midLight: 'text-text-muted',
    },
    // Primary (CTA only) - uses semantic tokens for Stripe-grade black button
    primary: {
      bg: 'bg-cta-bg',
      text: 'text-cta-text',
      hover: 'hover:bg-cta-hover',
      active: 'active:bg-cta-active',
    },
    // Accent
    accent: {
      primary: 'text-blue-600',
    },
    // Borders - use semantic var-backed classes
    border: {
      subtle: 'border-border-subtle',
    },
    divider: {
      subtle: 'border-border-subtle',
    },
    // Card backgrounds - use semantic var-backed classes
    card: {
      bg: 'bg-bg-default',
      border: 'border-border-subtle',
    },
  },
  dark: {
    // Background tokens (dark mode) - use semantic var-backed classes
    background: {
      darkest: 'bg-bg-default',  // Page background
      darker: 'bg-bg-default',    // Section variants, cards
      dark: 'bg-bg-neutral',      // Section variants, icon containers
      default: 'bg-bg-default',
      neutral: 'bg-bg-neutral',
    },
    // Surface tokens (dark mode) - use semantic var-backed classes
    surface: {
      default: 'bg-bg-default',
      elevated: 'bg-bg-neutral',
    },
    // Text tokens (dark mode) - use semantic var-backed classes
    text: {
      primary: 'text-text-primary',   // Headlines
      secondary: 'text-text-secondary', // Body text
      muted: 'text-text-muted',    // Muted text
    },
    // Text tokens (dark mode) - legacy - use semantic var-backed classes
    neutral: {
      lightest: 'text-text-primary',   // Headlines (very bright)
      light: 'text-text-secondary',     // Body text
      midLight: 'text-text-muted',  // Muted text
      dark: 'text-text-primary',       // Alias for lightest (headlines)
      medium: 'text-text-secondary',    // Body text (use light for body)
    },
    // Background classes for containers (icon boxes, etc.) - use semantic var-backed classes
    bg: {
      icon: 'bg-bg-neutral',        // Icon container backgrounds
      card: 'bg-bg-default',        // Card backgrounds
    },
    // CTA button tokens - use semantic tokens for default surfaces
    cta: {
      white: {
        bg: 'bg-cta-bg',
        text: 'text-cta-text',
        hover: 'hover:bg-cta-hover',
        active: 'active:bg-cta-active',
      },
      ghost: {
        bg: 'bg-transparent',
        border: 'border-border-subtle',
        text: 'text-text-primary',
        hover: 'hover:bg-bg-neutral',
        active: 'active:bg-bg-neutral',
      },
    },
    // Electric blue accent (for icons, highlights, underlines, metrics)
    accent: {
      primary: 'text-sky-400',      // Main electric blue
      secondary: 'text-emerald-400',
      blue: {
        primary: 'text-sky-400',      // Main electric blue
        hover: 'text-sky-300',        // Hover state
        subtle: 'text-sky-500',       // Subtle variant
      },
    },
    // Borders (subtle neutral-dark-light) - use semantic var-backed classes
    border: {
      subtle: 'border-border-subtle',
    },
    divider: {
      subtle: 'border-border-subtle',
    },
    // Card backgrounds - use semantic var-backed classes
    card: {
      bg: 'bg-bg-default',
      border: 'border-border-subtle',
    },
  },
} as const;

// ============================================================================
// LAYOUT PATTERNS
// ============================================================================

/**
 * Pattern 1: Split-Grid (50/50)
 * Left: text block (H2 → subhead → body → CTA)
 * Right: media container
 */
export const layoutPatterns = {
  splitGrid: {
    container: `grid grid-cols-1 lg:grid-cols-2 ${spacing.gutter.x.md} items-center`,
    textColumn: '',
    mediaColumn: '',
  },
  /**
   * Pattern 2: Centered Layout
   * H2 centered, max width token, content grid below
   */
  centered: {
    container: 'max-w-4xl mx-auto text-center',
    contentGrid: {
      two: `grid grid-cols-1 md:grid-cols-2 ${spacing.gutter.x.md}`,
      three: `grid grid-cols-1 md:grid-cols-3 ${spacing.gutter.x.md}`,
      six: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 ${spacing.gutter.x.md}`,
    },
  },
  /**
   * Pattern 3: Left-Aligned Single Column
   * One vertical stack
   */
  singleColumn: {
    container: 'max-w-3xl mx-auto',
    stack: `flex flex-col ${spacing.block.y.md}`,
  },
} as const;

// ============================================================================
// COMPONENT TOKENS
// ============================================================================

export const components = {
  button: {
    // White, slim CTA buttons
    primary: {
      base: 'px-5 py-2 rounded-full font-medium transition-all duration-150 ease-out focus:outline-none focus:ring-2 focus:ring-ring-focus focus:ring-offset-2 focus:ring-offset-ring-focus',
      // Slim vertical padding (py-2), horizontal padding (px-5)
      // Rounded-full for pill shape
    },
    secondary: {
      base: 'px-5 py-2 rounded-full font-medium transition-all duration-150 ease-out border focus:outline-none focus:ring-2 focus:ring-ring-focus focus:ring-offset-2 focus:ring-offset-ring-focus',
      // Ghost variant with border
    },
    radius: 'rounded-full', // Pill-shaped radius token
  },
  // Surface radius token (single radius for all surfaces)
  surface: {
    radius: 'rounded-xl', // Single radius token for all surface components
  },
  radius: {
    card: 'rounded-xl',
    button: 'rounded-full',
    media: 'rounded-xl',
  },
  card: {
    base: 'rounded-xl border', // Updated to use surface.radius
    padding: 'px-6 py-6',
  },
  media: {
    aspectRatios: {
      '16:9': 'aspect-video',
      '4:3': 'aspect-video', // Using aspect-video as closest standard (16:9 ≈ 4:3 for most use cases)
      '1:1': 'aspect-square',
    },
    maxWidth: {
      sm: 'max-w-lg',   // ~512px
      md: 'max-w-xl',   // ~576px
      lg: 'max-w-2xl',  // ~672px
      xl: 'max-w-4xl',  // ~896px
    },
    // Tokenized media overlay (gradient option)
    overlay: 'before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/5 before:to-transparent before:pointer-events-none before:z-[1]',
  },
  shadow: {
    surface1: 'shadow-sm',
    surface2: 'shadow-md',
  },
  // Motion tokens
  motion: {
    duration: {
      fast: 'duration-150',
      normal: 'duration-200',
    },
    easing: {
      standard: 'ease-out',
    },
  },
  // Transition tokens for micro-interactions
  transition: {
    default: 'transition-all duration-150 ease-out',
    hover: 'hover:transition-all hover:duration-150 hover:ease-out',
  },
} as const;

// ============================================================================
// RESPONSIVE BREAKPOINTS
// ============================================================================

// Using Tailwind defaults:
// sm: 640px
// md: 768px
// lg: 1024px
// xl: 1280px

// Max text width for readability (70-75 characters)
export const maxTextWidth = 'max-w-2xl';

// Layout tokens
export const layout = {
  container: {
    maxWidth: 'max-w-[1150px]',
    px: 'px-4 lg:px-8',  // Horizontal padding for content wrapper
  },
  gutter: {
    x: 'gap-6',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
} as const;

// ============================================================================
// NAVBAR TOKENS
// ============================================================================

export const navbar = {
  height: 'py-4',
  // Use semantic classes backed by CSS variables (no theme branching needed)
  bg: 'bg-bg-default',
  borderColor: 'border-border-subtle',
  link: {
    spacing: {
      x: spacing.gap.md,
    },
    typography: typography.body,
  },
} as const;

// ============================================================================
// FOOTER TOKENS
// ============================================================================

export const footer = {
  // Use semantic classes backed by CSS variables (no theme branching needed)
  bg: 'bg-bg-default',
  borderColor: 'border-border-subtle',
  section: {
    padding: {
      y: spacing.section.y.lg,
    },
  },
  text: {
    muted: 'text-text-muted',
    default: 'text-text-secondary',
  },
} as const;

// ============================================================================
// GLOBAL BACKGROUND TOKEN (MANDATORY)
// ============================================================================

/**
 * Global Background Rule: Every section MUST use bg-bg-default
 * NO alternating backgrounds, NO variants, NO gradients
 * Single uniform background across entire landing page
 */
export const globalBackground = {
  neutral: {
    darkest: 'bg-bg-default', // Use semantic token backed by CSS variable
  },
} as const;

