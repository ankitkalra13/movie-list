/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      sm: {'max': '728px'},
      md: {'max': '991px'},
      lg: {'max': '1454px'},
      padding: {
        DEFAULT: '3.25rem',
        sm: '1.25rem',
        md: '3rem',
        lg: '3rem',
        xl: '5rem',
      }
    },
    screens: {
      'sm': { 'min': '320px', 'max': '980px' },
      // => @media (min-width: 320px and max-width: 767px) { ... }

      'md': { 'min': '981px', 'max': '1239px' },
      // => @media (min-width: 768px and max-width: 1024px) { ... }
      'lg': { 'min': '1240px' },
      // => @media (min-width: 1024px ) { ... }

      'xl': { 'min': '1600px' },

      'xxl': { 'min': '1920px' },
       
      'tablet': '640px',
      'desktop': '1280px',
      'desktop-2': { 'min': '1240px', 'max': '1366px' },
      'desktop-3': '1440px',
      'desktop-4': '1600px',
      'desktop-5': '1680px',
      'desktop-6': '1920px',
      'desktop-small': { 'min': '1365px', 'max': '1600px' },
      'desktop-large': { 'min': '1601px', 'max': '1920px' },

    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '728px',
          },
          '@screen md': {
            maxWidth: '90%',
          },
          '@screen lg': {
            maxWidth: '1454px',
          },
          '@screen xl': {
            paddingLeft: '0px',
            paddingRight: '0px',
          },
         
        }
      })
    }
  ],
  
}



