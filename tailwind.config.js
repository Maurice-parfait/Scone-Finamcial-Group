/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./index.js",],
  theme: {
    extend: {
      fontFamily:{
        Roboto: "Roboto",
        Manropa : "Manrope",
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

