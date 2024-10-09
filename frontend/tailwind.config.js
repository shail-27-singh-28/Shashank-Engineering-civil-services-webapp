/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-sarif"],
      },
      colors: {
        primary: "#f2b827"
      },
      container: {
        center:true,
        padding:{
          DEFAULT: "1rem",
          sm: "3rem",
        },
      }
    },
  },
  plugins: [],
}

