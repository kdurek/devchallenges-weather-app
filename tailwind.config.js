module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      ral: ["Raleway", "sans-serif"],
      mon: ["Montserrat", "sans-serif"],
      // heb: ["Heebo", "sans-serif"],
      // pop: ["Poppins", "sans-serif"],
    },
    colors: {
      transparent: {
        DEFAULT: "transparent",
      },
      white: {
        DEFAULT: "#FFFFFF",
      },
      black: {
        DEFAULT: "#000000",
      },
      gray: {
        cE7E7EB: "#E7E7EB",
        c6E707A: "#6E707A",
        cA09FB1: "#A09FB1",
        c616475: "#616475",
        // cA9A9A9: "#A9A9A9",
        // cE0E0E0: "#E0E0E0",
        // cF2F2F2: "#F2F2F2",
        // c333333: "#333333",
        // c4F4F4F: "#4F4F4F",
        // c828282: "#828282",
        // cBDBDBD: "#BDBDBD",
      },
      red: {
        // cEB5757: "#EB5757",
      },
      green: {
        // c27AE60: "#27AE60",
      },
      blue: {
        c1E213A: "#1E213A",
        c88869D: "#88869D",
        c100E1D: "#100E1D",
        // c2D9CDB: "#2D9CDB",
        // c100E1D: "#100E1D",
      },
    },
    flex: {
      1: "1 1 0%",
      full: "1 0 100%",
      auto: "1 1 auto",
      initial: "0 1 auto",
      inherit: "inherit",
      none: "none",
      2: "2 2 0%",
    },
    extend: {
      backgroundImage: (theme) => ({
        "cloud-background": "url('/Cloud-background.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
