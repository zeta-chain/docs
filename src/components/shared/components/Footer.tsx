import Link from "next/link";

import { globalLinks } from "~/constants";

import { IconDiscord, IconTelegram, IconTwitter, IconZetaDocsLogo } from "./Icons";

const links = [
  {
    text: "ZetaChain",
    href: globalLinks.marketingSiteUrl,
    target: "_blank",
  },
  {
    text: "Docs",
    href: "/",
    target: "_self",
  },
  {
    text: "Explorer",
    href: globalLinks.explorerUrl,
    target: "_blank",
  },
  {
    text: "Labs",
    href: globalLinks.labsLink,
    target: "_blank",
  },
  {
    text: "Blog",
    href: globalLinks.blogUrl,
    target: "_blank",
  },
  {
    text: "Terms",
    href: globalLinks.termsOfUseLink,
    target: "_blank",
  },
  {
    text: "Privacy Policy",
    href: globalLinks.privacyLink,
    target: "_blank",
  },
];

const social = [
  {
    text: "Twitter",
    href: globalLinks.twitterLink,
    icon: <IconTwitter size={34} />,
  },
  {
    text: "Telegram",
    href: globalLinks.telegramLink,
    icon: <IconTelegram size={34} />,
  },
  {
    text: "Discord",
    href: globalLinks.discordLink,
    icon: <IconDiscord size={34} />,
  },
];

const socialLinks = (
  <nav>
    <ul className="flex gap-2 md:gap-4 text-grey-400 dark:text-white">
      {social.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-grey-300 dark:hover:text-grey-400 transition-all"
          >
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black border-t border-grey-200 dark:border-grey-600">
      <div className="w-full max-w-screen-xl mx-auto grid gap-9 md:gap-6 px-4 md:px-8 py-10">
        <section className="flex gap-10 md:gap-5 flex-col md:flex-row md:items-center md:justify-between">
          <Link className="order-1" href="/">
            <IconZetaDocsLogo className="text-green-700 dark:text-white" />
          </Link>

          <nav className="order-3 md:order-2 text-grey-500 dark:text-white">
            <ul className="flex flex-col md:flex-row flex-wrap gap-2 md:gap-4 text-sm">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    className="hover:text-grey-300 dark:hover:text-grey-400 transition-all"
                    href={link.href}
                    target={link.target}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="order-2 md:order-3">{socialLinks}</div>
        </section>

        <section className="flex gap-8 md:flex-row-reverse md:items-center md:h-14 md:justify-center">
          <p className="text-sm text-grey-400 dark:text-grey-300">© {new Date().getFullYear()} Meta Protocol, Inc</p>
        </section>
      </div>
    </footer>
  );
};
