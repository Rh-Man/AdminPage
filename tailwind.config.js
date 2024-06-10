/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#319684",
        secondary: "#F6F6F8",
        tiers: "#9399A5",
      },
    },
  },
  plugins: [],
};
