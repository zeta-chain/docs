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
const baseNextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@zetachain/ui-toolkit"],
  experimental: {
    externalDir: true,
    /**
     * Generating source maps consumes extra memory during the build process.
     * https://nextjs.org/docs/app/building-your-application/optimizing/memory-usage#disable-source-maps
     */
    serverSourceMaps: false,
    /**
     * The Webpack build worker allows you to run Webpack compilations inside a separate Node.js worker
     * which will decrease memory usage of your application during builds.
     * https://nextjs.org/docs/app/building-your-application/optimizing/memory-usage#webpack-build-worker
     */
    webpackBuildWorker: true,
  },
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  /**
   * Generating source maps consumes extra memory during the build process.
   * https://nextjs.org/docs/app/building-your-application/optimizing/memory-usage#disable-source-maps
   */
  productionBrowserSourceMaps: false,
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

// Run next build with EXPORT env var set to make a static build compatible with linkinator
if (process.env.EXPORT) {
  baseNextConfig.images = { unoptimized: true };
  baseNextConfig.output = "export";
}

const configWithNextra = withNextra(baseNextConfig);

module.exports = withBundleAnalyzer(configWithNextra);
