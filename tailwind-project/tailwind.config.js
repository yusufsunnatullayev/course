/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-red": "rgb(245, 56, 85)",
        "custom-blue": "rgb(11, 19, 42)",
        "custom-white": "rgb(255, 255, 255)",
        "custom-gray": "rgb(79, 86, 101)",
        "custom-pink": "rgb(255, 236, 236)",
        "custom-light": "rgb(238, 239, 242)",
        "custom-221": "rgb(221, 221, 221)",
        "custom-221-224": "rgb(221, 224, 228)",
        "custom-248": "rgb(248, 248, 248)",
      },
      fontSize: {
        "custom-16px": "16px",
        "custom-50px": "50px",
      },
    },
  },
  plugins: [],
};
