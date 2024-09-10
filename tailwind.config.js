/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "core": '#c9bab7',
        "secondary": "#e0cdca"
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}