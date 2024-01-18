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
    },
  },
  plugins: [],
};

