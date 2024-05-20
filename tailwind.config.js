const tailwindTheme = require("@zetachain/ui-toolkit/theme/tailwind.config");

tailwindTheme.content = ["./src/**/*.{ts,tsx,js,jsx,md,mdx}"];
tailwindTheme.plugins = [require("@tailwindcss/line-clamp")];

module.exports = tailwindTheme;
