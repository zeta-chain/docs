import { Toolbar } from "@mui/material";
import clsx from "clsx";
import Link from "next/link";

import { ClientOnlyPortal } from "../../ClientOnlyPortal";
import { IconSearch, IconZetaDocsLogo } from "../../Icons";
import { MobileMenuButton } from "./MobileMenuButton";

export const Header: React.FC<{
  className?: string;
  isLeftDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
  setIsLeftDrawerOpen: (isOpen: boolean) => void;
}> = ({ isLeftDrawerOpen, toggleDrawerOpen, setIsLeftDrawerOpen }) => {
  const openChatbase = () => {
    if (window.chatbase) {
      window.chatbase("open");
    }
  };

  return (
    <>
      <ClientOnlyPortal selector=".nextra-search">
        <div className="flex items-center gap-2">
          <IconSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-grey-400 dark:text-grey-300" />
          <button
            onClick={openChatbase}
            className="absolute text-sm right-4 top-1/2 -translate-y-1/2 p-2 text-grey-400 hover:text-grey-600 dark:text-grey-300 dark:hover:text-grey-100 transition-colors"
            aria-label="Open chat"
          >
            Ask AI
          </button>
        </div>
      </ClientOnlyPortal>

      <Toolbar className="sm:hidden fixed z-[100] flex items-stretch w-full p-0 bg-grey-50 dark:bg-grey-900">
        <div
          className={clsx("flex items-center justify-between flex-grow p-4", {
            "border-b border-grey-200 dark:border-grey-700": !isLeftDrawerOpen,
          })}
        >
          <Link href="/" onClick={() => setIsLeftDrawerOpen(false)}>
            <IconZetaDocsLogo className="text-green-700 dark:text-grey-50" />
          </Link>

          <MobileMenuButton
            className="mt-1.5 text-black dark:text-grey-50"
            isOpen={isLeftDrawerOpen}
            toggle={toggleDrawerOpen}
          />
        </div>
      </Toolbar>
    </>
  );
};
