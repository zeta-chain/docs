import { useColorMode } from "@docusaurus/theme-common";
import { translate } from "@docusaurus/Translate";
import useIsBrowser from "@docusaurus/useIsBrowser";
import clsx from "clsx";
import React from "react";

const HeroIconMoon = ({ color, ...otherProps }) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...otherProps}
    className={clsx(otherProps?.className, { "text-grey-500 dark:text-grey-300": !otherProps?.className })}
  >
    <path
      d="M20.3542 15.3542C19.3176 15.7708 18.1856 16.0001 17 16.0001C12.0294 16.0001 8 11.9706 8 7.00006C8 5.81449 8.22924 4.68246 8.64581 3.64587C5.33648 4.9758 3 8.21507 3 12.0001C3 16.9706 7.02944 21.0001 12 21.0001C15.785 21.0001 19.0243 18.6636 20.3542 15.3542Z"
      stroke={color || "currentColor"}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HeroIconSun = ({ color, ...otherProps }) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...otherProps}
    className={clsx(otherProps?.className, { "text-grey-500 dark:text-grey-300": !otherProps?.className })}
  >
    <path
      d="M12 3V4M12 20V21M21 12H20M4 12H3M18.364 18.364L17.6569 17.6569M6.34315 6.34315L5.63604 5.63604M18.364 5.63609L17.6569 6.3432M6.3432 17.6569L5.63609 18.364M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
      stroke={color || "currentColor"}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function ColorModeToggle({ className }) {
  const isBrowser = useIsBrowser();
  const { setColorMode, colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";

  const title = translate(
    {
      message: "Switch between dark and light mode (currently {mode})",
      id: "theme.colorToggle.ariaLabel",
      description: "The ARIA label for the navbar color mode toggle",
    },
    {
      mode:
        isDarkMode === "dark"
          ? translate({
              message: "dark mode",
              id: "theme.colorToggle.ariaLabel.mode.dark",
              description: "The name for the dark color mode",
            })
          : translate({
              message: "light mode",
              id: "theme.colorToggle.ariaLabel.mode.light",
              description: "The name for the light color mode",
            }),
    }
  );

  return (
    <button
      className={clsx(
        `flex items-center justify-between md:justify-center gap-3 bg-grey-100 dark:bg-grey-700 md:bg-[transparent] md:dark:bg-[transparent] py-2 px-4 md:p-2
        md:hover:bg-grey-100 md:dark:hover:bg-grey-700 text-grey-900 dark:text-white transition-all rounded w-full`,
        className
      )}
      type="button"
      onClick={() => setColorMode(isDarkMode ? "light" : "dark")}
      disabled={!isBrowser}
      title={title}
      aria-label={title}
      aria-live="polite"
    >
      <div className="md:hidden">Theme</div>
      {isDarkMode && <HeroIconMoon className="text-current w-5 h-5" />}
      {!isDarkMode && <HeroIconSun className="text-current w-5 h-5" />}
    </button>
  );
}
export default React.memo(ColorModeToggle);
