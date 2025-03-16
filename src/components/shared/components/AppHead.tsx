import { darkMode } from "@zetachain/ui-toolkit/theme/mui.dark.theme";

import { defaultBaseUrl, defaultDescription, defaultTitle } from "~/config/next-seo.config";

import { PreloadedFonts } from "./PreloadedFonts";

export const AppHead: React.FC = () => {
  // Create JSON-LD structured data for the documentation site
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: defaultTitle,
    description: defaultDescription || "Official documentation for the ZetaChain blockchain platform",
    url: defaultBaseUrl,
    publisher: {
      "@type": "Organization",
      name: "ZetaChain",
      logo: {
        "@type": "ImageObject",
        url: `${defaultBaseUrl}img/logo.png`,
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${defaultBaseUrl}?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png?v=2" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg?v=2" color={darkMode.palette.primary.main} />
      <link rel="icon" type="image/png" href="/favicon/favicon.png?v=2" />
      <meta name="apple-mobile-web-app-title" content={defaultTitle} />
      <meta name="application-name" content={defaultTitle} />
      <meta name="msapplication-TileColor" content={darkMode.palette.primary.main} />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content={darkMode.palette.primary.main} />

      {/* JSON-LD structured data for AI tools and LLMs */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PreloadedFonts />
    </>
  );
};
