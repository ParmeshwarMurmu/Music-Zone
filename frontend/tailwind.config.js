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
         'loader': 'rgb(203 213 225)',
         'darkThemeBackground': 'rgb(17 24 39)',
         'lightThemeBackground': 'white',
         'headingDarkThemeColor': '#E0E0E0',
         'textDarkThemeColor': '#A0A0A0',
         'lightThemeTextColor': 'rgb(75 85 99)',
         'lightThemeHeadingColor':'rgb(17 24 39)',
         'playerBackground': 'rgb(209 213 219)',
         'try': '#F2F2F2',
         'try2': '#EAEAEA',
         'try3': '#000428',
         'try4': '#302b63',
         'try5': '#004e92',
         'try6': '#000000',
         'try7': '#ffffff',
         'try9': '#ffffff',
         'showMusic1': '#0f0c29',
         'showMusic2': '#302b63',
         'showMusic3': '#24243e',
         'navbarBg1': '#8e9eab',
         'navbarBg2': '#eef2f3',
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
      '12': '12px',
      '18': '18px',
      '20': '20px',
      '30': '25px'
    },
    extend: {

      borderRadius:{
        '4': '4px'

      },

      inset:{
        '10': '-12px',
        '20': '140px',
        '15': '9px',
        '16': '300px',
        '21': '-18px',
        '52': '140px',
        '53': '-6px',
        '99': '30px',
        '98': '10px',
        '97': '179px'
      },

      height: {
         '124': '124px',
         '269': '269px',
         '50': '160px',
         '51': '80px',
         
      },
      width: {
        '124': '124px',
        '108': '108px',
        '269': '269px',
        '50': '50%'
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      margin:{
        '100': '270px'
      }
    },
  },
  plugins: [],
}

