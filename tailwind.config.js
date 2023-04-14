/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans' : 'Montserrat, sans-serif',
      'serif' : '"Roboto Slab", serif', 
    }, 
    opacity: {
      '0': '0',
      '10': '.1',
      '20': '.2',
      '30': '.3',
      '40': '.4',
      '50': '.5',
      '60': '.6',
      '70': '.7',
      '80': '.8',
      '90': '.9',
      '100': '1',
    },
    extend: {
      fontFamily: { 
        'cursive': 'Kalam, cursive', 
      },
      colors: { 
        'scred': '#f88282',
        'scred-100': '#f95d5d',
        'scred-200': '#f83535', 
        'scgrey': '#435C65',
        'scgrey-100': '#35444a',
        'scgrey-200': '#222b2f', 
        'scfooterbg': '#35444a',
      },
      screens: {
        '2xl': '1600px',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      maxWidth: theme => {
        return {
          'screen-2xl': theme('screens.2xl'),
        }
      },
    },
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus'],
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
  ],
};
