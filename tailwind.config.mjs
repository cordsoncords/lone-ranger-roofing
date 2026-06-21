/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#ECECF4',
          100: '#D4D5E6',
          200: '#AAB0D9',
          DEFAULT: '#282993',
          500: '#3D3EB5',
          600: '#282993',
          700: '#202176',
          800: '#19195C',
          900: '#111140',
        },
        accent: {
          DEFAULT: '#C73632',
          500: '#E34C48',
          600: '#C73632',
          700: '#A32926',
        },
        gold: {
          DEFAULT: '#E1B544',
          400: '#ECC765',
          500: '#E1B544',
          600: '#B8902B',
        },
      },
      fontFamily: {
        display: ['"Rye"', 'serif'],
        sans:    ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
