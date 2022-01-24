module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'lobster':['Lobster', 'cursive'],
      },
      height:{
        '352':'88rem'
      },
      colors:{
        'backdrop':'rgba(0,0,0,.4)'
      },
      margin:{
        '1/2':'50%'
      }
    },
  },
  plugins: [],
}