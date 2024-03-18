/** @type {import('tailwindcss').Config} */
import colors from './src/+core/themes/colors.ts';
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-red': '#dd3f24',
        'primary-gray': '#262a36',
        'secondary-gray': '#1b1d26',
        'secondary-white': '#f9fafb',
      },
    },
  },
  plugins: [],
};
