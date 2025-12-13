import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lp-system/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Use class selector on <html> element
  theme: {
    extend: {
      colors: {
        // Semantic color tokens backed by CSS variables
        bg: {
          default: 'var(--bg-default)',
          neutral: 'var(--bg-neutral)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
        border: {
          subtle: 'var(--border-subtle)',
        },
        ring: {
          focus: 'var(--ring-color)',
        },
        'ring-offset': {
          focus: 'var(--ring-offset)',
        },
        cta: {
          bg: 'var(--cta-bg)',
          text: 'var(--cta-text)',
          hover: 'var(--cta-hover)',
          active: 'var(--cta-active)',
        },
        link: {
          hover: 'var(--link-hover)',
        },
      },
      boxShadow: {
        'card-hover': 'var(--card-hover-shadow)',
      },
    },
  },
  plugins: [],
};

export default config;

