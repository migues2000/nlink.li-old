const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/pages/**/*.tsx', 'src/components/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        base: colors.neutral,
        primary: colors.blue,
      },
    },
  },
  plugins: [],
};
