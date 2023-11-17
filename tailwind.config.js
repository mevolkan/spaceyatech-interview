/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "advice-bg": "#202632",
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)"
        ]
      }
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      manrope:["Manrope", "sans-serif"]
    },
  },
  plugins: [],
};
