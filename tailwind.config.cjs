// tailwind.config.cjs

module.exports = {
  // add this section
  mode: "jit",
  purge: [
    './src/**/*.html',
    './src/**/*.svelte'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "chula": "#de5c8e",
        "courseville": "#FFA200",
        primary: "#018ADA"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}