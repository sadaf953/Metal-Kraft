const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.blue,
        custom: {
          blue: {
            light: '#0A61C9',
            medium: '#064089',
            dark: '#07326A',
          },
          gray: {
            hero: '#799496', // New hero background color
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-custom)', 'Goldman', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
};
