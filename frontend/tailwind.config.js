/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: {
          800: "#2A2B2B",
          500: "#2D2C2C",
        },
      },
    },
  },
  plugins: [],
};
