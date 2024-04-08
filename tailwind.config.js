/** @type {import('tailwindcss').Config} */
import colors from './src/+core/themes/colors.ts';
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        ...colors,
        'primary-red': '#dd3f24',
        'secondary-red': '#c43820',
        'red-300': '#FEEEEB',
        'primary-gray': '#262a36',
        'secondary-gray': '#1b1d26',
        'secondary-white': '#f9fafb',
        main: '#292929',
      },
      keyframes: {
        'slide-top': {
          '0%': {
            '-webkit-transform': 'translateY(10px);',
            transform: 'translateY(10px);',
          },
          '100%': {
            '-webkit-transform': 'translateY(0px);',
            transform: 'translateY(0px);',
          },
        },
      },
      animation: {
        'slide-top': 'slide-top 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
      },
    },
  },
  plugins: [],
};
