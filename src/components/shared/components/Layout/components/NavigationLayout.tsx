import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { PropsWithChildren, useEffect, useState } from "react";

import { useCurrentBreakpoint } from "~/hooks/useCurrentBreakpoint";
import { getRevealProps } from "~/lib/helpers/animations";

import { Footer } from "../../Footer";
import { IconZetaDocsLogo } from "../../Icons";
import { ThemeToggle } from "../../ThemeToggle";
import { closeDrawerWidth, LeftNavDrawer, navBottomItems, navMainItems } from "../Layout.constants";
import { Header } from "./Header";
import { NavigationItem } from "./NavigationItem";

type NavigationLayoutProps = PropsWithChildren<{
  isMainPage: boolean;
}>;

export const NavigationLayout: React.FC<NavigationLayoutProps> = ({ isMainPage, children }) => {
  const { upSm } = useCurrentBreakpoint();

  const [isLeftDrawerOpen, setIsLeftDrawerOpen] = useState(true);

  const isNarrowDrawer = !isMainPage;

  // To prevent a flash of the drawer on first render given that useCurrentBreakpoint has an issue always returning false for the first render for upLg and others
  useEffect(() => {
    if (upSm) setIsLeftDrawerOpen(true);
    else setIsLeftDrawerOpen(false);
  }, [upSm]);

  return (
    <>
      <motion.div className="fixed z-[99] top-0 left-0 w-fit h-full" {...getRevealProps({ y: 0 })}>
        <LeftNavDrawer
          variant="permanent"
          open={isLeftDrawerOpen}
          closeDrawerWidth={upSm ? closeDrawerWidth : 0}
          classes={{
            paper: `shadow-none rounded-none bg-grey-50 dark:bg-grey-900 !border-r-0 sm:!border-r !border-grey-200 dark:!border-grey-700 ${
              isLeftDrawerOpen && !isNarrowDrawer
                ? `!w-screen sm:!w-[200px] sm:shadow-[inset_0px_0px_0px_0px_#FFF]`
                : isLeftDrawerOpen && isNarrowDrawer
                ? "!w-screen sm:!w-[72px] sm:shadow-[inset_-30px_0px_30px_-30px_rgba(31,32,33,0.15)] sm:!border-r-0"
                : ""
            }`,
          }}
        >
          <div className="hidden sm:flex items-center h-[104px] py-6 pl-4 sm:pl-6">
            <Link href="/">
              <IconZetaDocsLogo className="text-green-700 dark:text-grey-50" onlyZ={isNarrowDrawer} />
            </Link>
          </div>

          <div className="flex flex-col gap-6 flex-grow">
            <div className="flex-grow flex flex-col sm:justify-center pt-24 sm:pt-0">
              {navMainItems.map((items, index) => (
                <div
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                >
                  <List className="w-full font-medium">
                    {items.map((item) => (
                      <NavigationItem
                        key={item.label}
                        item={item}
                        isOpen={isLeftDrawerOpen}
                        withLabel={!isNarrowDrawer}
                        onClick={() => {
                          if (!upSm) setIsLeftDrawerOpen(false);
                        }}
                      />
                    ))}
                  </List>

                  {index < navMainItems.length - 1 && (
                    <Divider className="border-grey-200 dark:border-grey-600 w-[calc(100%-32px)] sm:w-6 ml-4 sm:ml-6 my-4" />
                  )}
                </div>
              ))}
            </div>

            <div className="pb-6">
              <List className="w-full font-medium">
                {navBottomItems.map((item) => (
                  <NavigationItem
                    key={item.label}
                    item={item}
                    isOpen={isLeftDrawerOpen}
                    withLabel={!isNarrowDrawer}
                    onClick={() => {
                      if (!upSm) setIsLeftDrawerOpen(false);
                    }}
                  />
                ))}
              </List>

              <div className="sm:hidden pl-2 pt-8 text-grey-400 dark:text-grey-300">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </LeftNavDrawer>
      </motion.div>

      <div
        className={clsx("min-h-screen flex flex-col transition-all", {
          "sm:pl-[200px] bg-grey-50 dark:bg-grey-900": !isNarrowDrawer,
          "sm:ml-[72px] lg:pl-[88px] sm:rounded-l-2xl bg-grey-50 dark:bg-grey-800": isNarrowDrawer,
        })}
      >
        <Header
          isLeftDrawerOpen={isLeftDrawerOpen}
          toggleDrawerOpen={() => setIsLeftDrawerOpen((prev) => !prev)}
          setIsLeftDrawerOpen={setIsLeftDrawerOpen}
        />

        <motion.div {...getRevealProps({ y: 0 })} className={"flex-grow text-black dark:text-white pt-[62px] sm:pt-0"}>
          {children}
        </motion.div>

        <Footer />
      </div>
    </>
  );
};
