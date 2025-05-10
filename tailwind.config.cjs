const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
    darkMode: ['class'],
    content: [
    './index.html',
    './src/**/*.{ts,tsx}', 
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ['Inter']
  		},
  		colors: {
  			background: '#f2f8ff',
  			foreground: '#fbfbf9',
  			primary: {
  				DEFAULT: '#A4D8E1',
  			},
  			secondary: {
  				DEFAULT: '#3A7D9A',
  			},
  			muted: {
  				DEFAULT: '#D4E4E9',
  			},
  		}
  	}
  },
  plugins: [require('tailwindcss-animate')], 
};
