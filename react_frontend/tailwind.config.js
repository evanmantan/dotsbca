/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      backgroundImage: {
        "about-us": "url(src/assets/home/about_us.png)"
      },
      boxShadow: {
        "top": "-20px 0px rgba(0, 0, 0, 1)"
      },
      colors: {
        primary: "#1645AE",
        secondary: "#E85D17",
        'white': "#FAFBFC"
      },
      dropShadow: { text: "0 4px 4px rgba(0, 0, 0, 0.25)" },
    },
  },
  plugins: [],
}

