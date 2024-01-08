/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    colors: {
      
      shades: {
        '100': '#43A046',
        '200': '#388E3B',
        '300': '#237D31',
        '400': '#1B5E1F',
        '500': '#103E13',
      },
      tint: {
        '100': '#66BB69'
      }
     
      
    },
    
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['monospace'],
    },
    extend: {
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

