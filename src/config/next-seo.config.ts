import { NextSeoProps } from "next-seo";

export const defaultTitle = "ZetaDocs";
export const defaultDescription =
  "ZetaChain Docs. ZetaChain is the only decentralized blockchain and smart contract platform built for omnichain interoperability.";
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
    handle: "@zetablockchain",
    cardType: "summary_large_image",
  },
};
