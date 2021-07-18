const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    preserveHtmlElements: true,
    content: ['./src/**/*.tsx', './src/**/*.ts', './public/*.html', './src/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-10': '-10',
        '-20': '-20',
        '-30': '-30',
        '-40': '-40',
        '-50': '-50',
      },
      screens: {
        '2xl': '1536px',
        '3xl': '1680px',
      },
      colors: {
        primary: '#f0ba96',
        secondary: '#f5ceb1',
        tertiary: '#fdfcdd',
      },
      stroke: {
        white: '#ffffff',
        black: '#000000',
      },
      fontSize: {
        xxxs: ['.3rem', { lineHeight: '.5rem' }],
        xxs: ['.5rem', { lineHeight: '.75rem' }],
      },
      lineHeight: {
        0: '0',
      },
      fontFamily: {
        roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
        bokka: ['Bokka', ...defaultTheme.fontFamily.sans],
      },
    },
    variantsOrder: ['first', 'last'],
    variants: {
      margin: ['responsive', 'first', 'last'],
      extend: {},
    },
    plugins: [],
    corePlugins: {
      animation: false,
      blur: true,
    },
  },
};
