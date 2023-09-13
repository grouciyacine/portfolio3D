/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode:'jit',
  theme: {
    extend: {
      colors:{
        "blue-dark":"#00002a",
        "blue-one":"#00008b",
        "dark-blue":"	#00001c"
      },
      backgroundImage:{
        "bg":"url('https://www.cjoint.com/doc/23_09/MInta0ulCzO_blue.png')"
      }
    },
  },
  plugins: [],
}