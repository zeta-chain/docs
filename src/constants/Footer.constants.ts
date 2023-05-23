import constants from ".";

export type FooterLink = {
  title: string;
  href: string;
  external?: boolean;
};

export type FooterLinksGroup = {
  title: string;
  links: FooterLink[];
};

/**
 * @todo (Manu): Add commented links when ready
 */
export const footerLinksGroups: FooterLinksGroup[] = [
  {
    title: "About",
    links: [
      {
        title: "Company",
        href: constants.aboutLink,
        external: true,
      },
      {
        title: "Blog",
        href: constants.blogUrl,
        external: true,
      },
      {
        title: "Careers",
        href: constants.jobsLink,
        external: true,
      },
      // {
      //   title: "Academy",
      // },
      {
        title: "Privacy Policy",
        href: constants.privacyLink,
        external: true,
      },
      {
        title: "Press Kit",
        href: constants.pressKit,
      },
      {
        title: "Terms of Use",
        href: constants.termsOfUseLink,
        external: true,
      },
      // {
      //   title: "Partnerships",
      // },
      {
        title: "Get in touch",
        href: constants.helpLink,
      },
    ],
  },
  {
    title: "Developers",
    links: [
      // {
      //   title: "Overview",
      // },
      {
        title: "Docs",
        href: "/",
      },
      {
        title: "Whitepaper",
        href: constants.whitepaperLink,
        external: true,
      },
      {
        title: "GitHub",
        href: constants.githubLink,
        external: true,
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        title: "Discord",
        href: constants.discordLink,
        external: true,
      },
      {
        title: "Twitter",
        href: constants.twitterLink,
        external: true,
      },
      {
        title: "Telegram",
        href: constants.telegramLink,
        external: true,
      },
    ],
  },
  {
    title: "Ecosystem",
    links: [
      // {
      //   title: "ZetaHub",
      // },
      {
        title: "ZetaLabs (testnet)",
        href: constants.labsLink,
        external: true,
      },
      {
        title: "Explorer",
        href: constants.explorerUrl,
        external: true,
      },
      // {
      //   title: "Zeta Token",
      // },
      // {
      //   title: "App Ecosystem",
      // },
    ],
  },
];
