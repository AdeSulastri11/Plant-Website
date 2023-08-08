/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "index.html"],
  theme: {
    extend: {},
    fontSize: {
      '3.5xl': '32px',
    },
  },
  plugins: [require("daisyui")],
}

