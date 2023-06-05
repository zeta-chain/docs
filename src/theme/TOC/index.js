/* eslint-disable */
import React from "react";
import clsx from "clsx";
import { useEffect, useMemo, useState } from "react";
import { useWindowScroll, useWindowSize } from "react-use";
import sanitizeHtml from "sanitize-html";

export const noop = () => {};

export function on(obj, ...args) {
  if (obj && obj.addEventListener) {
    obj.addEventListener(...args);
  }
}

export function off(obj, ...args) {
  if (obj && obj.removeEventListener) {
    obj.removeEventListener(...args);
  }
}

export const isBrowser = typeof window !== "undefined";

export const isNavigator = typeof navigator !== "undefined";

function TOC({ className, ...props }) {
  const [activeId, setActiveId] = useState(props?.toc?.[0]?.["id"] || "");
  const { y: scrollHeight } = useWindowScroll();
  const { height: windowHeight } = useWindowSize();

  const maxScrollPosition = useMemo(() => {
    return isBrowser ? document?.documentElement?.scrollHeight - windowHeight : 0;
  }, [scrollHeight]);

  const normalizedTocY = useMemo(() => {
    if (!isBrowser) return [];
    const tocItems = props.toc
      ?.map((item) => {
        const yOffset = -40;
        const el = document?.getElementById?.(item.id);

        const y = el?.offsetTop + yOffset;
        return { y, id: item.id };
      })
      .sort((a, b) => a.y - b.y);

    const lastScrollableIndex = tocItems.indexOf(tocItems.find((item) => item.y > maxScrollPosition)) - 1;

    if (lastScrollableIndex < 1) return tocItems;

    const missingScroll = maxScrollPosition - tocItems[lastScrollableIndex]?.y;
    const missingScrollPerItem = missingScroll / (tocItems.length - lastScrollableIndex);

    let counter = 0;
    return tocItems.map((item, index) => {
      if (index > lastScrollableIndex) {
        counter++;
        return { ...item, y: tocItems[lastScrollableIndex]?.y + missingScrollPerItem * counter };
      }
      return item;
    });
  }, [props.toc, maxScrollPosition]);

  useEffect(() => {
    if (!isBrowser) return;

    // check # in url and scroll to it
    const hash = window?.location.hash;

    if (hash) {
      const yOffset = -90;
      const id = hash.replace("#", "");
      const el = document?.getElementById(id);

      if (!el) return;
      const y = el?.getBoundingClientRect()?.top + window.pageYOffset + yOffset;

      if (el) {
        window?.scrollTo({ top: y });
        // setActiveId(id);
      }
    }
  }, []);

  useEffect(() => {
    if (!normalizedTocY?.length) return;

    const activeItem = normalizedTocY.find((item) => {
      return item.y >= scrollHeight;
    });

    if (activeItem) {
      setActiveId(activeItem.id);
    }
  }, [scrollHeight]);

  return (
    <div
      className={"z-0"}
      style={{
        position: "sticky",
        top: "100px",
        wordBreak: "break-word",
      }}
    >
      <div className="-ml-[15px]">
        {props?.toc?.map((item, index) => {
          const isActive = activeId && (activeId === item?.id || (!activeId && index === 0));
          return (
            <div key={item.id} className="border-l border-grey-100 dark:border-grey-600 py-0">
              <button
                className={clsx("hover:text-green-300 text-sm text-black dark:text-grey-300 -ml-[1px] text-left", {
                  "!text-green-100 border-l border-green-100": isActive,
                })}
                style={{ paddingLeft: item?.level * 15, lineHeight: "24px" }}
                onClick={() => {
                  const el = normalizedTocY.find((_item) => {
                    return _item.id === item.id;
                  });

                  if (el) {
                    window.scrollTo({ top: el.y, behavior: "smooth" });
                    // add # to url
                    window.history.pushState(null, "", `#${item.id}`);
                  }
                }}
              >
                {sanitizeHtml(item.value, { allowedTags: [], allowedAttributes: {} })}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TOC;
