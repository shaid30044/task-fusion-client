/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A1EDB1",
        past: "#F0F0F4",
      },
    },
  },
  plugins: [require("daisyui")],
};
