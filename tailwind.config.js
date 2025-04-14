/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // make sure it covers your files
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'background': 'backgroundShift 20s infinite linear',
        'card-hover': 'cardHover 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        backgroundShift: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        cardHover: {
          '0%': { transform: 'scale(1)', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' },
          '100%': { transform: 'scale(1.05)', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)' },
        }
      },
    },
  },
  plugins: [],
}
