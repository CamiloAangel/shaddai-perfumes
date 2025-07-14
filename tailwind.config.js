/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#1D352F',
        accent: '#32286F',
      },
      boxShadow: {
        ios: '0 4px 30px rgba(0, 0, 0, 0.8)',
      },
      borderRadius: {
        ios: '1.25rem', // para tarjetas tipo iPhone
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
