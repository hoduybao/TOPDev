/** @type {import('tailwindcss').Config} */
import colors from './src/+core/themes/colors.ts';
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
};
