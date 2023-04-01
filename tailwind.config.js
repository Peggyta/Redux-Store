/** @type {import('tailwindcss').Config} */

module.exports = {

  purge: ["./src/**/*.{html,js}"],
  
  theme: {
    colors: {
      'grey': '#919294',
      'rosewood': '#d8a496',
      'lightblue': '#f4f5f7',
      'cherry': '#e52635',
      'grass': '#0eba80',
      'olive': '#237841',
      'cement': '#cccdcf',
      'sakura': '#e65c67',
      'cream': '#e0aba3',
      'black': '#000000',
      'navy': '#1c1e2a',
      'blue': '#c5c6d0',
      'yellow': '#e6cc00',
      'green': '#0a6522',
      'white': '#ffffff',
      'stone': '#434b56'
    },
    extend: {
      spacing: {
        '1.5px': '1.5px',
        '260px': '260px',
        '0.75px': '0.75px',
        '32px': '32px',
        '35px': '35px',
        '300px': '300px',
        '400px': '400px',
        '450px': '450px',
        '670px': '670px',
        '350px': '350px'
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