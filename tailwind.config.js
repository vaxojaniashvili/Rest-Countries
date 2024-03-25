/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        headerFont: ["Nunito Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

