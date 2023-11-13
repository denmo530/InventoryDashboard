/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#302C37",
        secondary: "#6F6B76",
        accent: "rgb(202, 0, 93)",
      },
    },
  },
  plugins: [],
};
