import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import { motion } from "framer-motion";
import { PropsWithChildren, useEffect, useState } from "react";

import { useCurrentBreakpoint } from "~/hooks/useCurrentBreakpoint";
import { getRevealProps } from "~/lib/helpers/animations";

import { Footer } from "../../Footer";
import { IconZetaDocsLogo } from "../../Icons";
import { ThemeToggle } from "../../ThemeToggle";
import { closeDrawerWidth, Drawer, navBottomItems, navMainItems } from "../Navigation.constants";
import { NavigationItem } from "./NavigationItem";
import { NavigationTop } from "./NavigationTop";

export const Navigation: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const { upSm } = useCurrentBreakpoint();

  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  // To prevent a flash of the drawer on first render given that useCurrentBreakpoint has an issue always returning false for the first render for upLg and others
  useEffect(() => {
    if (upSm) setIsDrawerOpen(true);
    else setIsDrawerOpen(false);
  }, [upSm]);

  return (
    <>
      <motion.div className="fixed z-[99] top-0 left-0 w-fit h-full" {...getRevealProps({ y: 0 })}>
        <Drawer
          variant="permanent"
          open={isDrawerOpen}
          closeDrawerWidth={upSm ? closeDrawerWidth : 0}
          classes={{
            paper: `shadow-none rounded-none bg-grey-50 dark:bg-grey-900 !border-r-0 sm:!border-r !border-grey-200 dark:!border-grey-700 ${
              isDrawerOpen ? `!w-screen sm:!w-[200px]` : ""
            }`,
          }}
        >
          <div className="hidden sm:flex items-center sm:w-[200px] h-[104px] py-6 pl-4 sm:pl-6">
            <IconZetaDocsLogo className="text-green-700 dark:text-grey-50" />
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
                        isOpen={isDrawerOpen}
                        onClick={() => {
                          if (!upSm) setIsDrawerOpen(false);
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
                    isOpen={isDrawerOpen}
                    onClick={() => {
                      if (!upSm) setIsDrawerOpen(false);
                    }}
                  />
                ))}
              </List>

              <div className="sm:hidden pl-2 pt-8 text-grey-500 dark:text-grey-300">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </Drawer>
      </motion.div>

      <main className="min-h-screen flex-grow sm:pl-[200px]">
        <NavigationTop isOpen={isDrawerOpen} toggle={() => setIsDrawerOpen((prev) => !prev)} />

        <motion.div
          {...getRevealProps({ y: 0 })}
          className={"min-h-[calc(100vh-300px)] text-black dark:text-white pt-[70px] sm:pt-0"}
        >
          {children}
        </motion.div>

        <Footer />
      </main>
    </>
  );
};
