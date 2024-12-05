/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        // lightText: "#555",
        lightText: "#475569",
        // lightText: "#313133;",
        darkText: "rgba(53,53,53)",
        lighterText: "rgb(191, 189, 189)",
        adminPrimary: "rgba(232,41,104)",
        lightPrimary: "#e8f4eb",
        primary: "#0a7274",
        darkPrimary: "#1c252e",
        darkSecondary: "#0a2744",
        lightBg: {
          100: "#F8F9FB",
          200: "#F0F3FB",
        },
        button: {
          primary: "#fae0bd",
        },
      },

      borderColor: {
        lightPrimaryBd: "#c4d6d4",
      },
      maxWidth: {
        pscreen: "70rem",
      },

      screens: {
        searchP: { max: "1000px" },

        base: { max: "900px" },
        lg: { min: "900px" },
        mobile: { max: "380px" },
        xs: { min: "380px" },
        tablet: { max: "768px" },
        md: { min: "768px" },

        // base:{max:"9"},
        laptop: "1034px",
      },
      fontSize: {
        small: "13px",
        medium: "15px",
        normal: "17px",
        large: "20px",
        extra: "30px",
      },
    },
  },
  plugins: [require("autoprefixer")],
};
