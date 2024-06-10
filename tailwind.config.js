const tailwindTheme = require("@zetachain/ui-toolkit/theme/tailwind.config");

tailwindTheme.content = ["./src/**/*.{ts,tsx,js,jsx,md,mdx}"];
tailwindTheme.plugins = [require("@tailwindcss/line-clamp")];
tailwindTheme.theme.screens = {
  ...tailwindTheme.theme.screens,
  xl: "1512px",
};

module.exports = tailwindTheme;
