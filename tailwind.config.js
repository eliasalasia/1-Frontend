/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        btnblue: 'rgba(47, 128, 237, 1)', 
      },
    },
  },
  plugins: [],
}