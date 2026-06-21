import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'ui-serif', 'serif']
      }
    }
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        trattoria: {
          primary: '#9b2c2c',
          secondary: '#1f6f5b',
          accent: '#d69e2e',
          neutral: '#262626',
          'base-100': '#fffaf3',
          'base-200': '#f4eadb',
          'base-300': '#dfd0bd',
          info: '#2563eb',
          success: '#2f855a',
          warning: '#b7791f',
          error: '#c53030'
        }
      }
    ]
  }
};
