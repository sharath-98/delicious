module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      minWidth:{
        210:"210px",
        350:"350px",
        620: "620px"
      },
      colors: {
        headingColor:"#2e2e2e",
        textColor:"#515151",
        cartNumBg:"#e80013",
        primary:"#f5f3f3",
        cardOverlay:"rgba(256,256,256,0.4)"
      },
      screens:{
        sm:"640px",
        md:"768px",
        lg:"1024px",
        xl:"1280px",
        "2xl":"1536px"
      }
    },
  },
  plugins: [],
}
