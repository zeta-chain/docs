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
          <IconSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-grey-300 dark:text-grey-400" />
          <button
            onClick={openChatbase}
            className="absolute text-[12px] leading-[130%] bg-white dark:bg-[#006579] rounded-full right-1 top-1/2 -translate-y-1/2 px-2 py-1.5 text-grey-400 dark:text-white hover:text-black dark:hover:bg-opacity-[0.85] transition-colors flex items-center gap-1"
            aria-label="Docs Bot"
          >
            <svg
              width="27"
              height="16"
              viewBox="0 0 27 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[26px] h-4"
            >
              <path
                d="M21.834 0.00012207C24.6871 0.00012207 27 2.31302 27 5.16614C27 8.01929 24.6871 10.3322 21.834 10.3322H21.2197L19.415 12.4308L19.418 10.3322H14.3242C11.4711 10.3321 9.1582 8.01926 9.1582 5.16614C9.15824 2.31304 11.4711 0.000157983 14.3242 0.00012207H21.834Z"
                fill="#FF5AF1"
              />
              <path
                d="M11.2742 5.44812C13.6599 5.44829 15.5935 7.3827 15.5935 9.76843C15.5933 12.154 13.6597 14.0876 11.2742 14.0878H7.43628L7.43921 15.9999L5.7937 14.0878H4.83667C2.45096 14.0878 0.51656 12.1541 0.516357 9.76843C0.516357 7.3826 2.45083 5.44812 4.83667 5.44812H11.2742Z"
                fill="#9AEA4A"
              />
              <path
                d="M11.2744 5.44812C13.6601 5.44829 15.5937 7.38272 15.5938 9.76843C15.5937 9.95948 15.5797 10.1474 15.5557 10.3319H14.3242C11.5657 10.3319 9.31245 8.1701 9.16602 5.44812H11.2744Z"
                fill="#521A4D"
              />
            </svg>
            Docs Bot
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
