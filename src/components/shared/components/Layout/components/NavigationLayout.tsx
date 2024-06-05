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
import { closeDrawerWidth, LeftNavDrawer, navBottomItems, navMainItems } from "../Layout.constants";
import { Header } from "./Header";
import { NavigationItem } from "./NavigationItem";

type NavigationLayoutProps = PropsWithChildren<{
  isMainPage: boolean;
}>;

const mainLayoutAnimationVariants = {
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.15, delay: 0 },
  },
  closed: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.15, delay: 0 },
  },
};

const leftDrawerAnimationVariants = {
  full: {
    width: "200px",
    transition: { duration: 0.15, delay: 0 },
  },
  narrow: {
    width: "72px",
    transition: { duration: 0.15, delay: 0 },
  },
};

export const NavigationLayout: React.FC<NavigationLayoutProps> = ({ isMainPage, children }) => {
  const { upSm } = useCurrentBreakpoint();

  const [isLeftDrawerOpen, setIsLeftDrawerOpen] = useState(true);
  const [isHoveringDrawer, setIsHoveringDrawer] = useState(false);

  const isNarrowDrawer = !isMainPage;

  // To prevent a flash of the drawer on first render given that useCurrentBreakpoint has an issue always returning false for the first render for upLg and others
  useEffect(() => {
    if (upSm) setIsLeftDrawerOpen(true);
    else setIsLeftDrawerOpen(false);
  }, [upSm]);

  const LeftNavComponent = useMemo(() => (upSm ? motion.div : LeftNavDrawer), [upSm]);

  return (
    <>
      <motion.div
        className={clsx("fixed z-[99] top-0 left-0 h-full", {
          "w-screen sm:w-[200px]": isLeftDrawerOpen && !isNarrowDrawer,
          "w-screen sm:w-[72px]": isLeftDrawerOpen && isNarrowDrawer,
          "sm:!w-[200px]": isHoveringDrawer,
        })}
        {...getRevealProps({ y: 0 })}
      >
        <LeftNavComponent
          key={isNarrowDrawer && !isHoveringDrawer ? "narrow" : "full"}
          initial={isNarrowDrawer && !isHoveringDrawer ? { width: "200px" } : { width: "72px" }}
          animate={isNarrowDrawer && !isHoveringDrawer ? "narrow" : "full"}
          variants={leftDrawerAnimationVariants}
          variant="permanent"
          open={isLeftDrawerOpen}
          closeDrawerWidth={upSm ? closeDrawerWidth : 0}
          className={clsx("sm:h-full sm:flex sm:flex-col sm:overflow-hidden", {
            "sm:w-[200px] sm:border-r sm:border-grey-200 dark:sm:border-grey-700": !isNarrowDrawer,
            "sm:w-[72px] sm:border-r-0": isNarrowDrawer,
          })}
          classes={{
            paper: `shadow-none rounded-none bg-grey-50 dark:bg-grey-900 !border-r-0 sm:!border-r !border-grey-200 dark:!border-grey-700 ${
              isLeftDrawerOpen && !isNarrowDrawer
                ? `!w-screen sm:!w-[200px]`
                : isLeftDrawerOpen && isNarrowDrawer
                ? "!w-screen sm:!w-[72px] sm:!border-r-0"
                : ""
            }`,
          }}
          onMouseEnter={() => setIsHoveringDrawer(true)}
          onMouseLeave={() => setIsHoveringDrawer(false)}
        >
          <div className="hidden sm:flex items-center h-[104px] py-6 pl-4 sm:pl-6">
            <Link href="/">
              <IconZetaDocsLogo
                className="text-green-700 dark:text-grey-50"
                onlyZ={isNarrowDrawer && !isHoveringDrawer}
              />
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
                        withLabel={!isNarrowDrawer || isHoveringDrawer}
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
                    withLabel={!isNarrowDrawer || isHoveringDrawer}
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
        </LeftNavComponent>
      </motion.div>

      <motion.div
        key={!upSm ? "open" : isNarrowDrawer ? "open" : "closed"}
        initial={!upSm ? { opacity: 1, x: 0 } : isNarrowDrawer ? { opacity: 0, x: 128 } : { opacity: 0, x: -72 }}
        animate={!upSm ? "open" : isNarrowDrawer ? "open" : "closed"}
        variants={mainLayoutAnimationVariants}
        className={clsx(
          "relative min-h-screen flex flex-col sm:fixed sm:top-0 sm:right-0 sm:h-full sm:overflow-y-auto sm:transition-all sm:ease-linear",
          {
            "sm:pl-[200px] bg-grey-50 dark:bg-grey-900": !isNarrowDrawer,
            "sm:w-[calc(100%-72px)] sm:ml-[72px] lg:pl-[88px] sm:rounded-l-2xl bg-grey-50 dark:bg-grey-800 sm:z-[100] sm:shadow-[0_0_30px_0_rgba(31,32,33,0.15)]":
              isNarrowDrawer,
            "sm:!translate-x-[128px]": isNarrowDrawer && isHoveringDrawer,
          }
        )}
      >
        <Header
          isLeftDrawerOpen={isLeftDrawerOpen}
          toggleDrawerOpen={() => setIsLeftDrawerOpen((prev) => !prev)}
          setIsLeftDrawerOpen={setIsLeftDrawerOpen}
        />

        <motion.div
          {...getRevealProps({ y: 0 })}
          className="relative flex-grow text-black dark:text-white pt-[62px] sm:pt-0"
        >
          {children}
        </motion.div>

        <Footer />
      </motion.div>
    </>
  );
};
