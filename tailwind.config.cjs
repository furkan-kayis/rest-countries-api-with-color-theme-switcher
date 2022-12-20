/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,tsx}', './index.html'],
  darkMode: 'class',
  theme: {
    fontFamily: { sans: ['Nunito Sans', 'sans-serif'] },
    extend: {
      colors: {
        /* Dark Mode Elements */ 'dark-blue': '#2b3945',
        /* Dark Mode Background */ 'very-dark-blue': '#202c37',
        /* Light Mode Text */ 'very-dark-blue-2': '#111517',
        /* Light Mode Input */ 'dark-gray': '#858585',
        /* Light Mode Background */ 'very-light-gray': '#fafafa',
        /* Dark Mode Text & Light Mode Elements */ white: '#ffffff',
      },
      fontWeight: {
        light: '300',
        'semi-bold': '600',
        'extra-bold': '800',
      },
    },
  },
  plugins: [],
};
