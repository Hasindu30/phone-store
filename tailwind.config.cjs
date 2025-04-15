const { default: colors } = require("@tailwindcss/postcss7-compat/colors");
const { Container } = require("postcss");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#36bcf3",
        secondary:"#fb923c"
      },
      container:{
        center:true,
        padding:{
          DEFAULT:'1rem',
          sm:'2rem',
          lg:"4rem",
          xl:"5rem",
          "2xl":"6rem",
        },
      },
    },
  },
  plugins: [],
};
