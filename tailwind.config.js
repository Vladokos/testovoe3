/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        caveat: ['Caveat', 'cursive']
      },
      colors: {
        beige: {
          100: "#fef9f2",
          200: "#fef3e4",
          300: "#fdedd7",
          400: "#fde7c9",
          500: "#fce1bc",
          600: "#cab496",
          700: "#978771",
          800: "#655a4b",
          900: "#322d26"
        },
        darkWhite: {
          100: "#fdfdfd",
          200: "#fbfbfb",
          300: "#f9f9f9",
          400: "#f7f7f7",
          500: "#f5f5f5",
          600: "#c4c4c4",
          700: "#939393",
          800: "#626262",
          900: "#313131"
        },

      },
      width: {
        w97: "97%"
      },
      maxWidth: {
        w78_5: "77.5rem"
      },
      height: {
        h100: "57rem",
        h1114: "1114px",
        h116vh: "116vh",
      },

    },
  },
  plugins: [],
}