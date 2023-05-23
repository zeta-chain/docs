const themeTw = require("@zetachain/ui-toolkit/theme/tailwind.config");

module.exports = {
  ...themeTw,
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    screens: {
      ...themeTw.theme.screens,
      xs: "320px",
      sm: "600px",
      md: "997px",
      lg: "1200px",
      xl: "1536px",
    },
    colors: {
      ...themeTw.theme.colors,
    },
    fontSize: {
      ...themeTw.theme.fontSize,
    },
    extend: {
      ...themeTw.theme.extend,
      screens: themeTw.theme.extend.screens,
    },
  },
  plugins: [],
};
