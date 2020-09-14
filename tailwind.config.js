const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  plugins: [require('@tailwindcss/typography')],
  purge: {
    // layers: ["components", "utilities"],
    mode: "all",
    content: ['*.html'],
  },
  theme: {
    container: {
      center: true,
      padding: {
        default: '1.5rem',
        md: '0',
        lg: '0',
        xl: '0',
      },
    },
    colors: {
      black: "#000000",
      white: "#ffffff",
      'body': '#343D4B',
      transparent: 'transparent',
      pos: {
        'lightblue': "#E2EEFA",
        'blue': '#3A8DDE',
        'darkblue': '#194F90',
        'page-bg': '#F5F6FC',
        'divider': '#dddddd',
        'green': '#45A041',
        'pink': "#E81F76",
        negative: '#D50037',
        'page-bg': "#f5f6fa",
        'icon-normal': '#8589A0',
        lightgrey: '#DFE3EC'
      }
    },
    extend: {
      boxShadow: {
        box: '0px 10px 30px rgba(52, 61, 75, 0.3)'
      },
      fontFamily: {
        sans: ['Gotham', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      }
    }
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    preserveHtmlElements: false
  }
};
