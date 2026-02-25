/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#030303',
        surface: '#0C0C0C',
        border: '#1A1A1A',
        text: '#F5F5F0',
        'text-muted': '#6B6B6B',
        accent: '#3B82F6',
        'accent-hover': '#60A5FA',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['DM Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      }
    }
  },
  plugins: []
};
