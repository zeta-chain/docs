import { darkMode } from "@zetachain/ui-toolkit/theme/mui.dark.theme";
import Head from "next/head";
import { DefaultSeo } from "next-seo";

import SEO, { defaultBaseUrl, defaultTitle } from "~/config/next-seo.config";

import { PreloadedFonts } from "./PreloadedFonts";

export const AppHead: React.FC = () => (
  <>
    <Head>
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
      <PreloadedFonts />
    </Head>

    <DefaultSeo {...SEO} canonical={typeof window !== "undefined" ? window.location.href : defaultBaseUrl} />
  </>
);
