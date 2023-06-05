const path = require("path");

module.exports = {
  extends: [".eslintrc.base.js"],
  settings: {
    "import/resolver": {
      typescript: {
        project: path.join(__dirname, "tsconfig.json"),
      },
    },
  },
  overrides: [
    {
      files: ["**/*"],
      rules: {
        "@next/next/no-img-element": "off",
      },
    },
  ],
};
