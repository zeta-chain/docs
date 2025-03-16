import { darkMode } from "@zetachain/ui-toolkit/theme/mui.dark.theme";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

import { defaultBaseUrl, defaultDescription, defaultTitle } from "~/config/next-seo.config";

import { PreloadedFonts } from "./PreloadedFonts";

export const AppHead: React.FC = () => {
  const { asPath } = useRouter();
  const config = useConfig();

  // Get page metadata - fallback to defaults if not available
  const title = config.title || defaultTitle;
  const description = config.description || defaultDescription;
  const url = `${defaultBaseUrl}${asPath}`;

  // Create JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: title,
    description: description,
    image: `${defaultBaseUrl}img/logos/og-banner.png`,
    publisher: {
      "@type": "Organization",
      name: "ZetaChain",
      logo: {
        "@type": "ImageObject",
        url: `${defaultBaseUrl}img/logo.png`,
      },
    },
    url: url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    dateModified: new Date().toISOString().split("T")[0],
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
