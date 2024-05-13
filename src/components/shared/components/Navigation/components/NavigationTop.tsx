import { Toolbar } from "@mui/material";
import clsx from "clsx";

import { IconZetaDocsLogo } from "../../Icons";
import { ThemeToggle } from "../../ThemeToggle";
import { MobileMenuButton } from "./MobileMenuButton";

export const NavigationTop: React.FC<{
  className?: string;
  isOpen: boolean;
  toggle: () => void;
}> = ({ isOpen, toggle }) => {
  return (
    <Toolbar className="fixed sm:static z-[100] sm:z-auto flex items-stretch w-full p-0 bg-grey-50 dark:bg-grey-900">
      <div
        className={clsx(
          "flex items-center justify-between sm:justify-end flex-grow p-5 sm:py-8 sm:px-6 md:px-[72px] sm:border-none",
          {
            "border-b border-grey-200 dark:border-grey-700": !isOpen,
          }
        )}
      >
        {/* desktop */}
        <ThemeToggle className="hidden sm:flex" />

        {/* mobile */}
        <IconZetaDocsLogo className="text-green-700 dark:text-grey-50 sm:hidden" />
        <MobileMenuButton className="sm:hidden mt-1.5 text-black dark:text-grey-50" isOpen={isOpen} toggle={toggle} />
      </div>
    </Toolbar>
  );
};
