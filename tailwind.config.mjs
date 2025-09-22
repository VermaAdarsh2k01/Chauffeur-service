/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'count-up': 'count-up 2s ease-out forwards',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'count-up': {
          from: { 'counter-set': 'number 0' },
          to: { 'counter-set': 'number var(--target-number)' },
        },
      },
    },
  },
  plugins: [],
};
