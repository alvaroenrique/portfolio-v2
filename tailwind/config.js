module.exports = {
  purge: ["./src/pages/**/*.tsx", "./src/components/**/*.tsx"],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  theme: {
    fontFamily: {
      sans: "Inter, system-ui, -apple-system",
    },
    colors: {
      secondary: "#8C8C8C",
    },
    backgroundColor: theme => ({
      primary: "#131415",
    }),
  },
}
