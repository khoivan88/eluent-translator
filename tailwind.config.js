const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  // future: 'all',
  purge: {
    mode: 'all',
    content: ['./src/**/*.html', './src/**/*.md'],
  },
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      // fontSize: {
      //   '7xl': '5rem',
      // },
      // gridTemplateRows: {
      //   layout: 'auto 1fr auto',
      // },
      // inset: {
      //   '-20': '-5rem',
      // },
      // margin: {
      //   '-1px': '-1px',
      // },
    },
  },
  variants: {
    // inset: ['responsive', 'focus'],
  },
  plugins: [
    // require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
