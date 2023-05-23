/* eslint-disable */

import React from "react";
import Link from "@docusaurus/Link";
import { useNavbarMobileSidebar } from "@docusaurus/theme-common/internal";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import ColorModeToggle from "../ColorModeToggle";

import { sortBy } from "lodash-es";

const IconChevronRight = ({ className }) => {
  return (
    <svg className={className} width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.61612 12.8338L6.44945 7.00042L0.616119 1.16709L1.5 0.283203L7.77528 6.55848C8.01935 6.80256 8.01935 7.19828 7.77528 7.44236L1.5 13.7176L0.61612 12.8338Z"
        fill="currentColor"
      />
    </svg>
  );
};

const getAllChildrenHrefs = (items) => {
  return items?.reduce((acc, item) => {
    if (item.href) acc.push(item.href);
    if (item.items) acc.push(...getAllChildrenHrefs(item.items));
    return acc;
  }, []);
};

const TreeNode = ({ node, level, path }) => {
  const mobileSidebar = useNavbarMobileSidebar();

  const [isCollapsed, setIsCollapsed] = useState(
    !getAllChildrenHrefs(node?.items)?.some((_childPath) => path?.match(_childPath)) // Open if any child is active (for nested items)
  );

  // Open and close depending on active path
  useEffect(() => {
    setIsCollapsed(!getAllChildrenHrefs(node?.items)?.some((_childPath) => path?.match(_childPath)));
  }, [path]);

  // Sort items so that collapsible items are always at the end
  const items = useMemo(
    () => node.items?.length && sortBy(node.items, (item) => (!item.collapsible ? 0 : 1)), // use stable sort to ensure that items will not change their position on each render
    [node.items]
  );

  const handleOpenAndCollapseClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleClasses = useMemo(() => {
    return clsx({
      "pl-4 py-[10px] text-[14px]": level > 0,
      "py-4 text-black pl-[32px] pr-[38px] text-[20px] bg-[#F9F9FB] dark:bg-black dark:text-white": level === 0,
      "border-b border-grey-200 dark:border-grey-600": level === 0 && !node.collapsible,
      "text-grey-400 dark:text-grey-300": !node.collapsible && level > 0,
      "flex flex-row items-center justify-between hover:text-green-200 dark:hover:text-green-100": node.collapsible,
      "text-green-100 dark:text-green-100": path === node.href,
      "dark:text-grey-50 text-grey-900": getAllChildrenHrefs(node?.items)?.some((_childPath) =>
        path?.match(_childPath)
      ),
    });
  }, [level, isCollapsed, node.collapsible, path, node.href]);

  if (node.type === "link") {
    return (
      <Link
        href={node.href}
        className={clsx(
          toggleClasses,
          { "pb-[10px]": level > 0 },
          "hover:no-underline hover:text-green-200 dark:hover:text-green-100"
        )}
        onClick={() => {
          if (mobileSidebar.shown) mobileSidebar.toggle();
        }}
      >
        <span
          className={clsx({
            "text-green-100 dark:text-green-100": path === node.href,
          })}
        >
          {node.label}
        </span>
      </Link>
    );
  } else if (node.type === "category") {
    return (
      <>
        <button className={clsx(toggleClasses)} onClick={handleOpenAndCollapseClick}>
          <div>{node.label}</div>

          {node.collapsible && (
            <IconChevronRight
              className={clsx("transition-rotate ease-in-out duration-300", {
                "transform rotate-90": !isCollapsed,
                "mr-[38px]": level > 0,
              })}
            />
          )}
        </button>

        <motion.div
          key="collapsible-menu"
          initial={false}
          animate={{ height: !isCollapsed ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className={clsx("flex flex-col pl-4 overflow-hidden", {
            "border-b border-grey-200 dark:border-grey-600": level === 0,
          })}
        >
          {items?.map((item) => (
            <TreeNode key={item.label} node={item} level={level + 1} path={path} />
          ))}
        </motion.div>
      </>
    );
  } else {
    return null;
  }
};

const Tree = ({ data, level, path }) => {
  return (
    <div className="flex flex-col">
      {data?.map((node) => (
        <TreeNode key={node.label} node={node} level={level} path={path} />
      ))}
    </div>
  );
};

export function DocSidebarDesktop({ path, sidebar }) {
  const parsedPath = useMemo(() => {
    return path !== "/" ? path?.slice(0, -1) : path;
  }, [path]);

  return (
    <div className="h-[calc(100%-60px)] sticky top-[60px] overflow-y-scroll">
      <nav className="bg-white dark:bg-black">
        <div className="px-6 py-3 md:hidden bg-[#F9F9FB] dark:bg-[transparent] border-b border-grey-200 dark:border-grey-600">
          <ColorModeToggle />
        </div>

        <ul>
          <Tree data={sidebar} level={0} path={parsedPath} />
        </ul>
      </nav>
    </div>
  );
}

export default function DocSidebar(props) {
  return <DocSidebarDesktop {...props} />;
}
