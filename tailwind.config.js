const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  future: 'all',
  purge: ['./src/**/*.html', './src/**/*.md'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        display: ['Cambria', 'serif'],
      },
      fontSize: {
        '7xl': '5rem',
      },
      gridTemplateRows: {
        layout: 'auto 1fr auto',
      },
      inset: {
        '-20': '-5rem',
      },
      margin: {
        '-1px': '-1px',
      },
    },
  },
  variants: {
    inset: ['responsive', 'focus'],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/custom-forms'),
  ],
};
