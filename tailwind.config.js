/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'grey': '#919294',
      'rosewood': '#d8a496',
      'lightblue': '#f4f5f7',
    },
    extend: {
      spacing: {
        '1.5px': '1.5px',
        '260px': '260px',
      }
    },
  },
  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
    },
  ],
  
}