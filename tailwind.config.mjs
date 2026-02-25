/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#000000',
        'bg-warm': '#0a0908',
        text: '#f5f5f0',
        'text-muted': '#8a8a85',
        accent: '#d4a853',
        'accent-dim': '#a38542',
        line: '#2a2a28'
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['DM Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif']
      }
    }
  },
  plugins: []
};
