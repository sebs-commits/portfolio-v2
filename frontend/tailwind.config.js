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
      keyframes: {
        bobbing: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        bobbing: "bobbing 1s ease-in-out infinite",
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#000000',
            h1: {
              color: '#000000',
            },
            h2: {
              color: '#000000',
            },
            h3: {
              color: '#000000',
            },
            strong: {
              color: '#000000',
            },
            a: {
              color: '#000000',
            },
            li: {
              color: '#000000',
            },
          },
        },
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography"),
  ],
};
