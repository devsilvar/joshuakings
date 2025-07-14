/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { boxShadow: {
        deep: `
          0px 1.85px 3.15px 0px #44444406,
          0px 8.15px 6.52px 0px #4444440A,
          0px 20px 13px 0px #4444440D,
          0px 38.52px 25.48px 0px #4444440F,
          0px 64.81px 46.85px 0px #44444413,
          0px 100px 80px 0px #4444441A
        `
      },  fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    
    },
  },
  plugins: [],
}