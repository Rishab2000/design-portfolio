module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "sd-plus": "url('/src/img/sdplus.png')",
      }),
      textColor: {
        "title-colour": "#161616",
        "desc-colour": "#525252",
      },
      zIndex: {
        "-10": "-10",
      },
      width: {
        "context-images": '48%',
        99: "22rem",
        100: "28.1rem",
        200: "58rem",
        300: "64rem",
      },

      height: (theme) => ({
        "lg-image": "36rem",
        100: "28.1rem",
        110: "33rem",
        200: "42rem",
      }),
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",

      "120%": "120%",

      16: "4rem",
    },
    fontFamily: {
      "avenir-roman": ["avenir-roman"],

      "avenir-book": ["avenir-book"],

      "avenir-medium": ["avenir-medium"],

      "avenir-bold": ["avenir-bold"],

      "avenir-black": ["avenir-black"],
    },
    colors: {
      gray10: "#f4f4f4",
      gray40: "#a8a8a8",
      gray20: "#e0e0e0",
      gray50: "#8D8D8D",
      "cool-gray20": "#DDE1E6",
      "link-hover-color": "#be203d",
      red: "#ff2d55",
      "background-color": "#F3F6FB",
      white: "#f4f4f4",
      "green-sdplus": "#24A148",
      "blue-sdplus": "#1192E8",
      "blue-chiral": "#1192E8",
      "blue-ibm": "#0F62FE",
      "background-CSS": "#EE5396",
      "blue-behance": "#0F62FE",
    },
    fontSize: {
      xs: ".625rem",

      sm: ".875rem",

      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",

      "3xl": "1.875rem",

      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",

      "7xl": "5rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
