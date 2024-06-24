/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors: {
        primary: "#1645AE",
        secondary: "#E85D17",
        'white': "#FAFBFC"
      }
    },
  },
  plugins: [],
}

