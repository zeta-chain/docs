import clsx from "clsx";
import { motion } from "framer-motion";
import { uniqueId } from "lodash-es";
import React, { useMemo } from "react";
import tw, { styled } from "twin.macro";

import { getRevealProps } from "~/lib/helpers/animations";

import { Tab } from "../Tabs.constants";

const StyledUnderline = styled(motion.div)`
  ${tw`absolute bg-[#00A5C6] dark:bg-[#B0FF61] h-[1px] left-0 right-0 mt-2`}
`;

export const NavTabs = <T extends Tab>({
  tabs,
  activeTab,
  setActiveTab,
  className,
  layoutIdPrefix,
}: {
  tabs: T[];
  activeTab: T;
  setActiveTab: (item: T) => void;
  className?: string;
  layoutIdPrefix?: string;
}) => {
  const layoutId = useMemo(() => uniqueId(layoutIdPrefix), [layoutIdPrefix]);

  return (
    <nav className={clsx("flex justify-center", className)}>
      <ul className="flex gap-4 sm:gap-6 border-b border-grey-200 dark:border-grey-600">
        {tabs.map((item) => (
          <div className="relative" key={`${item.label}-${layoutId}`}>
            <button type="button" className="w-full" onClick={() => setActiveTab(item)}>
              <motion.li
                {...getRevealProps({
                  y: 0,
                  delay: 0.4,
                })}
                className={clsx(
                  "text-base leading-[160%] font-medium flex items-center gap-1 sm:gap-1.5 !opacity-100 pb-2 px-2 sm:px-4",
                  {
                    "text-[#00A5C6] dark:text-[#B0FF61]": item.label === activeTab?.label,
                    "text-grey-300 dark:text-grey-400": item.label !== activeTab?.label,
                  }
                )}
              >
                <div>
                  {item.label}
                  {item.label === activeTab?.label ? <StyledUnderline layoutId={layoutId} /> : null}
                </div>
              </motion.li>
            </button>
          </div>
        ))}
      </ul>
    </nav>
  );
};
