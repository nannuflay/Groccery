const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Ital', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        '00': '270px',
        '84': '21rem',
        '96': '24rem',
      },
      colors: {
        gray: {
          '10': '#FAFAFA'
        },
        green: {
          '350': '#689f38',
          '340': '#6d9900',
        },
        red: {
          '00': '#c24039',
        },
        yellow : {
          '0' : '#ef820d'
        },
        blue: {
          '10': '#3b5998'
        }
      },
      width: {
        '99': '850px',
        '100': '1200px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
