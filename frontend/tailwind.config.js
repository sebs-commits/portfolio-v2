/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Chalkboard SE"', '"Comic Sans MS"', "cursive"],
        body: ["Roboto", "Arial", "sans-serif"],
        main: ['"Comic Sans MS"'],
      },
    },
  },
  plugins: [require("daisyui")],
};
