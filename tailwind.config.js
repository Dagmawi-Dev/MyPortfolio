/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {  
    },
    colors:{
      dark_blue:"#1b1f24",
      white_text: '#fff',
      light_blue:'#13bbff',
      other_color: "#c3cad5",
    },
    fontFamily:{
      inter: ["Inter", 'sans-serif']
    }
  },
  plugins: [],
}

