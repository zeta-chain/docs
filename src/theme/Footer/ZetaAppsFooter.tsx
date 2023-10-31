import clsx from "clsx";
import React from "react";

import {
  IconDiscord,
  IconTelegram,
  IconTwitter,
} from "../Icons";
import { IconZetaDocsLogo } from "../Icons/components/IconZetaDocsLogo";

type ZetaAppsFooterProps = {
  languagePicker?: React.ReactNode;
  onFeedbackClick?: () => void;
};

const links = [
  {
    text: "ZetaChain",
    href: "https://zetachain.com/",
  },
  {
    text: "Docs",
    href: "https://docs.zetachain.com/",
  },
  {
    text: "Explorer",
    href: "https://explorer.zetachain.com/",
  },
  {
    text: "Labs",
    href: "https://labs.zetachain.com/",
  },
  {
    text: "Blog",
    href: "https://blog.zetachain.com/",
  },
  {
    text: "Terms",
    href: "https://www.zetachain.com/terms-of-use",
  },
  {
    text: "Privacy Policy",
    href: "https://zetachain.com/privacy",
  },
];

const social = [
  {
    text: "Twitter",
    href: "https://twitter.com/zetablockchain",
    icon: <IconTwitter size={34} />,
  },
  {
    text: "Telegram",
    href: "https://t.me/zetachainofficial",
    icon: <IconTelegram size={34} />,
  },
  {
    text: "Discord",
    href: "https://discord.gg/zetachain",
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

export const ZetaAppsFooter = ({
  languagePicker,
  onFeedbackClick,
}: ZetaAppsFooterProps) => {
  const hasLanguagePicker = Boolean(languagePicker);

  return (
    <footer className="bg-white dark:bg-black border-t border-grey-200 dark:border-grey-600">
      <div className="w-full max-w-screen-xl mx-auto grid gap-9 md:gap-6 px-4 md:px-8 py-10">
        {/* Top section */}
        <section className="flex gap-10 md:gap-5 flex-col md:flex-row md:items-center md:justify-between">
          {/* Logo is always first (top left) */}
          <a className="order-1" href="/" rel="noopener noreferrer">
            <IconZetaDocsLogo className="text-green-700 dark:text-white" />
          </a>

          {/* Navigation links are second (top center) in desktop and third in mobile */}
          <nav className="order-3 md:order-2 text-grey-500 dark:text-white">
            <ul className="flex flex-col md:flex-row flex-wrap gap-2 md:gap-4 text-sm">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    className="hover:text-grey-300 dark:hover:text-grey-400 transition-all"
                    href={link.href}
                    rel="noopener noreferrer"
                  >
                    {link.text}
                  </a>
                </li>
              ))}

              {onFeedbackClick && (
                <li>
                  <button
                    type="button"
                    className="hover:text-grey-300 dark:hover:text-grey-400 transition-all"
                    onClick={onFeedbackClick}
                  >
                    Feedback
                  </button>
                </li>
              )}
            </ul>
          </nav>

          {/* Language picker or Social links are third (top right) in desktop and second in mobile */}
          <div className="order-2 md:order-3">
            {hasLanguagePicker ? languagePicker : socialLinks}
          </div>
        </section>

        {/**
         * Bottom section
         * When language picker is present above, Legal text is displayed on the left
         * and Social links are displayed on the right
         * When there is no language picker, only Legal text is displayed on the right
         */}
        <section
          className={clsx(
            "flex gap-8 md:flex-row-reverse md:items-center md:h-14",
            {
              "flex-col justify-between": hasLanguagePicker,
              "md:justify-center": !hasLanguagePicker,
            }
          )}
        >
          {hasLanguagePicker && socialLinks}

          <p className="text-sm text-grey-400 dark:text-grey-300">
            © {new Date().getFullYear()} Meta Protocol, Inc
          </p>
        </section>
      </div>
    </footer>
  );
};
