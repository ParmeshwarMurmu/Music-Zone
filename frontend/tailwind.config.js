/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    colors: {
      
      neutral:{
         'black': '#263238',
         'dark-grey': '#4D4D4D',
         'gery': '#717171',
         'large-grey': '#89939E',
         'grey-blue': '#ABBED1',
         'silver': '#F5F7FA',
         'white': '#FFFFFF',
         'info': '#2194f3',
      },
      shades: {
        '100': '#43A046',
        '200': '#388E3B',
        '300': '#237D31',
        '400': '#1B5E1F',
        '500': '#103E13',
      },
      tint: {
        '100': '#66BB69',
        '200': '#81C784',
        '300': '#A5D6A7',
        '400': '#C8E6C9',
        '500': '#E8F5E9',
      },
      action:{
        'warning': '#FBC02D',
        'error': '#E53835',
        'success': '#2E7D31',
      }
     
      
    },

    screens: {
      // 'mobiles': '640px',
      // 'xs': '420px',
      
      'mobiles-max': { 'max': '639px'},
      'small':{'max': '420px'},
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    fontFamily: {
      Inter: 'Inter',
      openSans:'Open Sans'
    },

    fontSize: {
      '14': '14px',
      '16': '16px',
      '12': '12px'
    },
    extend: {
      height: {
         '124': '124px'
      },
      width: {
        '124': '124px',
        '108': '108px'
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}

