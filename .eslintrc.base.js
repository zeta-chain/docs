const path = require("path");

const OFF = 0;
const WARN = 1;
const ERROR = 2;

/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "simple-import-sort", "prettier", "unused-imports", "zeta-eslint"],
  extends: ["prettier"],
  env: {
    es6: true,
    node: true,
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
      },
    },
  },
  parserOptions: {
    project: [path.join(__dirname, "tsconfig.base.json"), path.join(__dirname, "tsconfig.eslint.json")],
  },
  rules: {
    "no-process-env": "error",
    "no-underscore-dangle": OFF,
    "zeta-eslint/enum-prefer-pascal-case": WARN,
    "@typescript-eslint/ban-ts-comment": WARN,
    "zeta-eslint/to-do-enforcer": [WARN, { names: ["Andy", "Juan", "Manu", "Martin", "Lucas", "Guille"] }],
    "prettier/prettier": [
      ERROR,
      {
        endOfLine: "auto",
      },
    ],
    "import/prefer-default-export": OFF,
    "simple-import-sort/imports": ERROR,
    "simple-import-sort/exports": ERROR,
    "no-console": ["error", { allow: ["error"] }],
    "import/extensions": OFF,
    "react/jsx-filename-extension": [ERROR, { extensions: [".jsx", "tsx"] }],
    "import/no-default-export": WARN,
    "@typescript-eslint/naming-convention": [
      ERROR,
      {
        selector: "variable",
        format: ["camelCase", "UPPER_CASE", "snake_case", "PascalCase"],
        leadingUnderscore: "allow",
      },
    ],
  }
};
