const path = require("path");

const OFF = 0;
const WARN = 1;
const ERROR = 2;

/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "simple-import-sort", "prettier", "unused-imports"],
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
    project: [path.join(__dirname, "tsconfig.json"), path.join(__dirname, "tsconfig.eslint.json")],
  },
  rules: {
    "no-process-env": OFF,
    "no-underscore-dangle": OFF,
    "@typescript-eslint/ban-ts-comment": WARN,
    "prettier/prettier": [
      ERROR,
      {
        endOfLine: "auto",
      },
    ],
    "import/prefer-default-export": OFF,
    "simple-import-sort/imports": ERROR,
    "simple-import-sort/exports": ERROR,
    "import/extensions": OFF,
    "@typescript-eslint/naming-convention": [
      ERROR,
      {
        selector: "variable",
        format: ["camelCase", "UPPER_CASE", "snake_case", "PascalCase"],
        leadingUnderscore: "allow",
      },
    ],
  },
  overrides: [
    {
      files: ["./src"],
      plugins: ["react", "react-hooks"],
      extends: ["plugin:@next/next/recommended", "airbnb", "airbnb-typescript"],
      rules: {
        "react/function-component-definition": OFF,
        "react/prop-types": OFF,
        "jsx-a11y/anchor-is-valid": OFF,
        "react/require-default-props": OFF,
        "react/jsx-props-no-spreading": OFF,
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "arrow-body-style": "off",
      },
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      env: {
        browser: true,
        es6: true,
      },
      settings: {
        react: {
          version: "detect",
        },
      },
      globals: {
        React: true,
        JSX: true,
      },
    },
    {
      files: ["./src/pages/**/*", "*.d.ts", "next-seo.config.js"],
      rules: {
        "import/no-default-export": OFF,
      },
    },
    {
      // @description Allow param reassign on redux files (immer.js)
      files: ["*.redux.js", "*.redux.ts", "*.slice.js", "*.slice.ts", "*.reducer.ts", "*.reducer.js"],
      rules: {
        "no-param-reassign": OFF,
      },
    },
  ],
};
