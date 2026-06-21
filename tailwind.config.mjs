import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Noto Sans Grantha', 'Georgia', 'ui-serif', 'serif']
      }
    }
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        trattoria: {
          primary: '#005867',            // Deep Teal
          'primary-content': '#ffffff',  // White text for high contrast
          secondary: '#e4be73',          // Warm Gold
          'secondary-content': '#1e292d',// Dark slate text for high contrast
          accent: '#4c7a8c',             // Slate Blue
          'accent-content': '#ffffff',   // White text
          neutral: '#1e292d',            // Dark Slate (very dark charcoal-teal)
          'neutral-content': '#f5f9fc',  // Very light blue-white text
          'base-100': '#f5f9fc',         // Light base background
          'base-200': '#dbeaf7',         // Ice Blue background
          'base-300': '#bed4e7',         // Slightly darker ice blue for borders
          'base-content': '#1e292d',     // Primary text color
          brown: '#3a2c29',              // Brown for food photos and accents
          info: '#1d4ed8',
          success: '#15803d',
          warning: '#a16207',
          error: '#b91c1c'
        }
      }
    ]
  }
};
