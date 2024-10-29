/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./public/**/*.js",
  ],
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

