/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"],
      },
      boxShadow: {
        "custom-light": "0px 4px 10px 4px rgba(254, 230, 139, 0.3)",
      },
    },
  },
  plugins: [],
};
