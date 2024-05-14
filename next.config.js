/* eslint-disable no-process-env */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('nextra').NextraConfig} */
const nextraConfig = {
  theme: "nextra-theme-docs",
  themeConfig: "./src/theme.config.tsx",
  latex: true,
  defaultShowCopyCode: true,
};

const withNextra = require("nextra")(nextraConfig);

const { nextHeadersConfig } = require("./src/config/headers.config.json");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  transpilePackages: ["@zetachain/ui-toolkit"],
  experimental: {
    externalDir: true,
  },

  basePath: process.env.NEXT_PUBLIC_BASE_PATH,

  headers: async () => nextHeadersConfig,

  webpack(config) {
    // eslint-disable-next-line no-param-reassign
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
    };

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

const configWithNextra = withNextra(nextConfig);

module.exports = withBundleAnalyzer(configWithNextra);
