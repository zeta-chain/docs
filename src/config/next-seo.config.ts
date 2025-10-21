import { NextSeoProps } from "next-seo";

export const defaultTitle = "ZetaChain Docs";
export const defaultDescription = "ZetaChain Docs are designed to help you build with ZetaChain.";
export const defaultBaseUrl = "https://www.zetachain.com/docs/";

export const nextSeoProps: NextSeoProps = {
  titleTemplate: `%s – ${defaultTitle}`,
  description: defaultDescription,
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    locale: "en",
    type: "website",
    site_name: defaultTitle,
    url: defaultBaseUrl,
    images: [
      {
        url: `${defaultBaseUrl}img/logos/og-banner.png`,
        alt: "ZetaChain",
      },
    ],
  },
  twitter: {
    handle: "@zetachain",
    cardType: "summary_large_image",
  },
};
