import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { PropsWithChildren, useEffect, useMemo, useState } from "react";

import { useCurrentBreakpoint } from "~/hooks/useCurrentBreakpoint";
import { getRevealProps } from "~/lib/helpers/animations";

import { Footer } from "../../Footer";
import { IconZetaDocsLogo } from "../../Icons";
import { ThemeToggle } from "../../ThemeToggle";
import { closeDrawerWidth, LeftNavDrawer, navMainItems } from "../Layout.constants";
import { Header } from "./Header";
import { NavigationItem } from "./NavigationItem";

type NavigationLayoutProps = PropsWithChildren<{
  isMainPage: boolean;
  setIsCmdkOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>;

export const NavigationLayout: React.FC<NavigationLayoutProps> = ({ isMainPage, children, setIsCmdkOpen }) => {
  const { upSm } = useCurrentBreakpoint();

  const [isLeftDrawerOpen, setIsLeftDrawerOpen] = useState(true);

  // To prevent a flash of the drawer on first render given that useCurrentBreakpoint has an issue always returning false for the first render for upLg and others
  useEffect(() => {
    if (upSm) setIsLeftDrawerOpen(true);
    else setIsLeftDrawerOpen(false);
  }, [upSm]);

  return (
    <>
      <motion.div
        className={clsx("fixed z-[99] top-0 left-0 h-full", {
          "w-screen sm:w-[200px]": isLeftDrawerOpen,
        })}
        {...getRevealProps({ y: 0 })}
      >
        <LeftNavDrawer
          variant="permanent"
          open={isLeftDrawerOpen}
          closeDrawerWidth={upSm ? closeDrawerWidth : 0}
          className={clsx("sm:h-full sm:flex sm:flex-col sm:overflow-hidden", {
            "sm:w-[200px] sm:border-r sm:border-grey-200 dark:sm:border-grey-700": isMainPage,
            "sm:w-[200px] sm:border-r-0": !isMainPage,
          })}
          classes={{
            paper: `shadow-none rounded-none bg-grey-50 dark:bg-grey-900 !border-r-0 sm:!border-r !border-grey-200 dark:!border-grey-700 ${
              isLeftDrawerOpen && isMainPage
                ? `!w-screen sm:!w-[200px]`
                : isLeftDrawerOpen && !isMainPage
                ? "!w-screen sm:!w-[200px] sm:!border-r-0"
                : ""
            }`,
          }}
        >
          <div className="hidden sm:flex items-center h-[104px] py-6 pl-4 sm:pl-6">
            <Link href="/">
              <IconZetaDocsLogo className="text-green-700 dark:text-grey-50" />
            </Link>
          </div>

          <div className="flex flex-col gap-6 flex-grow">
            <div className="flex-grow flex flex-col pt-24 sm:pt-0">
              {navMainItems.map((items, index) => (
                <div
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  className="flex flex-col"
                >
                  <List className="w-full font-medium">
                    {items.map((item) => (
                      <NavigationItem
                        key={item.label}
                        item={item}
                        isOpen={isLeftDrawerOpen}
                        onClick={() => {
                          if (!upSm) setIsLeftDrawerOpen(false);
                        }}
                      />
                    ))}
                  </List>

                  {index < navMainItems.length - 1 && (
                    <Divider className="border-grey-200 dark:border-grey-600 w-6 my-3 self-center" />
                  )}
                </div>
              ))}
            </div>

            <div className="pb-6">
              <div className="sm:hidden pl-2 pt-8 text-grey-400 dark:text-grey-300">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </LeftNavDrawer>
      </motion.div>

      <div
        className={clsx("relative min-h-screen flex flex-col", {
          "sm:pl-[200px] bg-grey-50 dark:bg-grey-900": isMainPage,
          "sm:w-[calc(100%-200px)] sm:!translate-x-[200px] sm:rounded-l-2xl bg-grey-50 dark:bg-grey-800 sm:z-[100] sm:shadow-[0_0_30px_0_rgba(31,32,33,0.15)]":
            !isMainPage,
        })}
      >
        <Header
          setIsCmdkOpen={setIsCmdkOpen}
          isLeftDrawerOpen={isLeftDrawerOpen}
          toggleDrawerOpen={() => setIsLeftDrawerOpen((prev) => !prev)}
          setIsLeftDrawerOpen={setIsLeftDrawerOpen}
          upSm={upSm}
        />

        <motion.div
          {...getRevealProps({ y: 0 })}
          className="relative flex-grow text-black dark:text-white pt-[62px] sm:pt-0"
        >
          {children}
        </motion.div>

        <Footer />
      </div>
    </>
  );
};
