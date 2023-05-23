module.exports = {
  presets: [
    require.resolve("@docusaurus/core/lib/babel/preset"),
    // [
    //   "next/babel",
    //   {
    //     "preset-react": {
    //       runtime: "automatic",
    //       importSource: "@emotion/react",
    //     },
    //   },
    // ],
  ],
  plugins: [
    ["@babel/plugin-proposal-private-methods", { loose: false }],
    ["@babel/plugin-proposal-private-property-in-object", { loose: false }],
    "@emotion/babel-plugin",
    "babel-plugin-twin",
    "babel-plugin-macros",
  ],
};
