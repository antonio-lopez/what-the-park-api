/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        softWhite: '#F5F5F5',
        msuGreen: '#243B35',
        red: '#FE0B0B',
        darkSlateBlue: '#4E4A99',
        sheenGreen: '#62D905',
      },
    },
  },
  plugins: [],
};
