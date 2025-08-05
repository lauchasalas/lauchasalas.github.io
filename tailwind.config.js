/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    "./src/**/*.{njk,html,js}",
    "./src/css/**/*.css"
  ],
  theme: {
    extend: {
      keyframes: {
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '0.5' },
          '100%': { transform: 'scale(2.5)', opacity: '0' },
        }
      },
      animation: {
        ripple: 'ripple 0.6s ease-out',
      }
    }
  },
  plugins: [],
};
