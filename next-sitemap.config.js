const SITE_URL = (process.env.SITE_URL || "https://www.zetachain.com/docs").replace(/\/+$/, "");

/**
 * Nextra i18n pages are files like `faq.en-US.mdx`, so next-sitemap sees paths
 * such as `/about/info/faq.en-US`. Map them to the URLs the site actually serves:
 * `/about/info/faq` for the default locale and `/zh-CN/about/info/faq` for zh-CN.
 * www.zetachain.com serves docs without a trailing slash, so drop it.
 */
const toServedPath = (path) => {
  const match = path.replace(/\/+$/, "").match(/^(.*?)\.(en-US|zh-CN)$/);
  if (!match) return path.replace(/\/+$/, "");
  const [, file, locale] = match;
  // Only the docs root is served without /index; folder index pages
  // (e.g. /about/services/index) are served at /index.
  const base = file === "/index" ? "" : file;
  return locale === "zh-CN" ? `/zh-CN${base}` : base;
};

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  trailingSlash: false,
  exclude: ["/404*", "/451*", "/500*", "*/404*", "*/451*", "*/500*"],
  transform: async (config, path) => ({
    loc: `${SITE_URL}${toServedPath(path)}`,
    changefreq: config.changefreq,
    priority: config.priority,
    lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
  }),
};
