/* eslint-disable */
require("dotenv").config();
const constants = require("./src/constants");

const url = process.env.URL || constants.docsLink;

const isNodeEnvProd = process.env.NODE_ENV === "production";
const isNodeEnvDev = process.env.NODE_ENV === "development";
const sentryDsn = process.env.SENTRY_DSN;

const baseUrl = process.env.BASE_URL || "/";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ZetaDocs",
  tagline: "Secure, Seamless Blockchain Interoperability",
  url,
  baseUrl,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/favicon/favicon.png?v=2",
  trailingSlash: true,
  organizationName: "zeta-chain", // Usually your GitHub org/user name.
  projectName: "zeta-docs", // Usually your repo name.

  customFields: {
    isNodeEnvProd,
    isNodeEnvDev,
    sentryDsn,
  },

  plugins: [
    "docusaurus-node-polyfills",
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            from: "/developers/quickstart-tutorials/deploy-first-zevm-contract/",
            to: "/developers/omnichain/tutorials/hello/",
          },
          {
            from: "/developers/omnichain-smart-contracts/examples/single-input-multiple-output/",
            to: "/developers/omnichain/tutorials/single-input-multiple-output/",
          },
          {
            from: "/developers/tutorials/examples/system-contract",
            to: "/developers/omnichain/system-contract",
          },
          {
            from: "/developers/cross-chain-messaging/connector-api/",
            to: "/developers/cross-chain-messaging/connector/",
          },
          {
            from: "/developers/concepts/omnichain-toolkit/",
            to: "/developers/cross-chain-messaging/overview/",
          },
          {
            from: "/developers/omnichain-smart-contracts/overview/",
            to: "/developers/omnichain/tutorials/hello/",
          },
          {
            from: "/learn/faq/",
            to: "/reference/faq/",
          },
          {
            from: "/reference/using-zetascan/",
            to: "/reference/explorers/",
          },
        ],
      },
    ],
    async function (context, options) {
      return {
        name: "postcss-tailwindcss-loader",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(
            require("tailwindcss"),
            require("autoprefixer")
          );

          return postcssOptions;
        },
      };
    },
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        // whether to index docs pages
        indexDocs: true,

        // Whether to also index the titles of the parent categories in the sidebar of a doc page.
        // 0 disables this feature.
        // 1 indexes the direct parent category in the sidebar of a doc page
        // 2 indexes up to two nested parent categories of a doc page
        // 3...
        //
        // Do _not_ use Infinity, the value must be a JSON-serializable integer.
        indexDocSidebarParentCategories: 0,

        // whether to index blog pages
        indexBlog: false,

        // whether to index static pages
        // /404.html is never indexed
        indexPages: false,

        // language of your documentation, see next section
        language: "en",

        // setting this to "none" will prevent the default CSS to be included. The default CSS
        // comes from autocomplete-theme-classic, which you can read more about here:
        // https://www.algolia.com/doc/ui-libraries/autocomplete/api-reference/autocomplete-theme-classic/
        // When you want to overwrite CSS variables defined by the default theme, make sure to suffix your
        // overwrites with `!important`, because they might otherwise not be applied as expected. See the
        // following comment for more information: https://github.com/cmfcmf/docusaurus-search-local/issues/107#issuecomment-1119831938.
        style: "none",

        // The maximum number of search results shown to the user. This does _not_ affect performance of
        // searches, but simply does not display additional search results that have been found.
        maxSearchResults: 8,

        // lunr.js-specific settings
        lunr: {
          // When indexing your documents, their content is split into "tokens".
          // Text entered into the search box is also tokenized.
          // This setting configures the separator used to determine where to split the text into tokens.
          // By default, it splits the text at whitespace and dashes.
          //
          // Note: Does not work for "ja" and "th" languages, since these use a different tokenizer.
          tokenizerSeparator: /[\s\-]+/,
          // https://lunrjs.com/guides/customising.html#similarity-tuning
          //
          // This parameter controls the importance given to the length of a document and its fields. This
          // value must be between 0 and 1, and by default it has a value of 0.75. Reducing this value
          // reduces the effect of different length documents on a term’s importance to that document.
          b: 0.75,
          // This controls how quickly the boost given by a common word reaches saturation. Increasing it
          // will slow down the rate of saturation and lower values result in quicker saturation. The
          // default value is 1.2. If the collection of documents being indexed have high occurrences
          // of words that are not covered by a stop word filter, these words can quickly dominate any
          // similarity calculation. In these cases, this value can be reduced to get more balanced results.
          k1: 1.2,
          // By default, we rank pages where the search term appears in the title higher than pages where
          // the search term appears in just the text. This is done by "boosting" title matches with a
          // higher value than content matches. The concrete boosting behavior can be controlled by changing
          // the following settings.
          titleBoost: 5,
          contentBoost: 1,
          tagsBoost: 3,
          parentCategoriesBoost: 2, // Only used when indexDocSidebarParentCategories > 0
        },
      },
    ],
  ],

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // editUrl: 'https://github.com/zeta-chain/zeta-docs',
          routeBasePath: "/",
          // sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateTime: true,
          include: ["**/*.md", "**/*.mdx"],
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
      }),
    ],
  ],
  markdown: {
    mermaid: true,
  },
  themes: ["docusaurus-theme-github-codeblock", "@docusaurus/theme-mermaid"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      codeblock: {
        showGithubLink: false,
        showRunmeLink: false,
      },
      colorMode: {
        defaultMode: "dark",
        respectPrefersColorScheme: true,
      },
      prism: {
        theme: require("prism-react-renderer/themes/github"),
        darkTheme: require("prism-react-renderer/themes/dracula"),
        additionalLanguages: ["solidity"],
        magicComments: [
          {
            className: "theme-code-block-highlighted-line",
            line: "highlight-next-line",
            block: { start: "highlight-start", end: "highlight-end" },
          },
          {
            className: "code-block-removed-line",
            line: "remove-next-line",
            block: { start: "remove-start", end: "remove-end" },
          },
        ],
      },
      scroll: {
        smooth: true,
      },
      metadata: [
        { property: "og:title", content: "ZetaDocs" },
        {
          property: "og:description",
          content:
            "ZetaChain Docs. ZetaChain is the only decentralized blockchain and smart contract platform built for omnichain interoperability.",
        },
        { property: "og:url", content: "https://www.zetachain.com/docs/" },
        {
          property: "og:image",
          content: "https://www.zetachain.com/docs/img/logos/og-banner.png",
        },
        { property: "og:image:alt", content: "ZetaChain" },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "ZetaChain" },
        { name: "twitter:creator", content: "@zetablockchain" },
        { name: "twitter:domain", content: "zetachain.com" },
        { name: "twitter:url", content: "https://www.zetachain.com/docs/" },
        { name: "twitter:title", content: "ZetaDocs" },
        {
          name: "twitter:description",
          content:
            "ZetaChain Docs. ZetaChain is the only decentralized blockchain and smart contract platform built for omnichain interoperability.",
        },
        {
          name: "twitter:image",
          content: "https://www.zetachain.com/docs/img/logos/og-banner.png",
        },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    },
};

module.exports = config;
