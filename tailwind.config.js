/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-sm': { 'max': '334px' },
      },
      animation: {
        'b-text-move': 'b-text-move 3s ease-in-out infinite',
        'bmove': 'bmove 3s ease-in-out infinite',
      },
      keyframes: {
        'b-text-move': {
          "0%": { "background-position": "20% 50%" },
          "50%": { "background-position": "100% 20%", 'backgruond-size': '150%'},
          "100%": { "background-position": "20% 50%" },
        },
        'bmove': {
          "0%": { "background-position": "50% 50%" },
          "50%": { "background-position": "100% 0%" },
          "100%": { "background-position": "50% 50%" },
        }
      },
      boxShadow: {
        'custom': 'inset 0 0 1px 1px #fff, 0 0 0 1px rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .01), 0 3px 5px rgba(0, 0, 0, .01), 0 5px 9px rgba(0, 0, 0, .02), 0 7px 16px rgba(0, 0, 0, .02)', 
      }
    },
  },
  plugins: [],
};

