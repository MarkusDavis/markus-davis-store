module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
       primary: "#ff0390",
       secondary: "#d3d3d3",
       
        light: {
          primary: "#fff",
          secondary: "#d3d3d3"
        },
        dark: {
          primary: "#000",
          secondary: "#323232"
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/line-clamp")]
};
