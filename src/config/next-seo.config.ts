export const defaultTitle = "ZetaDocs";
export const defaultDescription = "ZetaChain documentation.";
export const defaultBaseUrl = "https://docs.zetachain.com/";

// eslint-disable-next-line import/no-default-export
export default {
  title: defaultTitle,
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
