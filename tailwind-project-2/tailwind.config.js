/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      purple: "rgb(173, 31, 234)",
      orange: "rgb(244, 159, 133)",
      gray: "rgb(100, 113, 150)",
      white: {
        600: "rgb(242, 244, 255)",
        700: "rgb(247, 248, 253)",
        800: "rgb(255, 255, 255)",
      },
      blue: {
        400: "rgb(98, 188, 250)",
        500: "rgb(70, 97, 230)",
        600: "rgb(58, 67, 116)",
        700: "rgb(55, 63, 104)",
      },
    },
    extend: {
      width: {
        255: "255px",
        825: "825px",
        69: "69px",
      },
      height: {
        53: "53px",
        32: "32px",
      },

      backgroundImage: {
        "custom-radial":
          "radial-gradient(195.14% 166.19% at 104% -10%, rgb(232, 77, 112), rgb(163, 55, 246) 53.089%, rgb(40, 167, 237) 100%)",
      },
    },
  },
  plugins: [],
};
