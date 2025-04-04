/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FBB03B',
          dark: '#F59E0B',
          light: '#FCD34D'
        },
        dark: {
          DEFAULT: '#1A1A1A',
          light: '#2A2A2A',
          lighter: '#3A3A3A'
        }
      }
    },
  },
  plugins: [],
};