/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          "hover-light": "var(--hover-light)",
          "hover-dark": "var(--hover-dark)",
          bg: "var(--bg-color)",
          100: "#feeedb",
          200: "#fbd6aa",
          link: "#f9b769",
          400: "#f7a749",
          default: "#f69728", // default
          hover: "#e27e09", // hover
          dark: "#c16c08", // dark
          800: "#a05a07",
          900: "#804705",
        },
      },
      fontFamily: {
        sans: ["Plex Sans", ...defaultTheme.fontFamily.sans],
      },
      strokeWidth: {
        "0": "0px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
}
