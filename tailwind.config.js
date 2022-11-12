/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}", "./src/**/*.{html,js}", "./editorial/**/*.{html,js}"],
  theme: {
    extend: {
      flexBasis: {
        "1/7": "14.25%",
      },
      fontSize: {
        "10xl": [
          "clamp(3rem, 1rem + 9vw, 5rem)",
          {
            lineHeight: ".8em",
            letterSpacing: "-0.04em",
            fontWeight: "400",
          },
        ],
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
