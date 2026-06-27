import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Inter', 'ui-sans-serif', 'sans-serif']
      }
    }
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        jamsa: {
          primary: '#005b56',            // Deepest teal from palette — 7.98:1 vs white
          'primary-content': '#ffffff',
          secondary: '#f8b648',          // Warm gold from palette — 8.35:1 vs dark slate
          'secondary-content': '#1e292d',
          accent: '#901b2e',             // Maroon from palette — 8.82:1 vs white
          'accent-content': '#ffffff',
          neutral: '#1e292d',            // Unchanged dark slate (not part of new palette)
          'neutral-content': '#f5f9fc',
          'base-100': '#f5f9fc',         // Unchanged light background
          'base-200': '#dbeaf7',
          'base-300': '#bed4e7',
          'base-content': '#1e292d',
          brown: '#b0731a',
          info: '#1d4ed8',
          success: '#15803d',
          warning: '#a16207',
          error: '#b91c1c'
        }
      }
    ]
  }
};
