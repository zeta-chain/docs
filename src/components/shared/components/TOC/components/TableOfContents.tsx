import clsx from "clsx";
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";

import { handleHeadingLinkClick, Heading, selectHeadingLinks } from "../TOC.helpers";

type TableOfContentsProps = {
  headings: Heading[];
};

export const TableOfContents: React.FC<TableOfContentsProps> = ({ headings }) => {
  const route = useRouter();
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [activeId, setActiveId] = useState<string>("");

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveId(entry.target.id);
      }
    });
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(handleIntersection, {
      rootMargin: "0px 0px -80% 0px",
      threshold: 0.1,
    });

    const headingLinks = selectHeadingLinks();

    headingLinks.forEach((headingLink) => observerRef.current?.observe(headingLink));

    return () => {
      observerRef.current?.disconnect();
    };
  }, [route]);

  if (!headings.length) return null;

  return (
    <nav className="sticky top-[38px] max-h-[calc(100vh-76px)] overflow-y-auto">
      <ul className="flex flex-col gap-4">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{ marginLeft: `${(heading.level - 2) * 24}px` }}
            className={clsx("pl-6 py-[3px] relative")}
          >
            <div
              className={clsx("w-0.5 rounded-full h-full absolute left-0 top-0 transition-all", {
                "bg-[#00DDA5]": heading.id === activeId,
                "bg-[transparent]": heading.id !== activeId,
              })}
            />

            <a
              href={`#${heading.id}`}
              className={clsx("text-lg leading-[130%] transition-all hover:!text-black dark:hover:!text-white", {
                "text-grey-400 dark:text-grey-300": heading.id !== activeId,
                "text-black dark:text-white font-medium": heading.id === activeId,
              })}
              onClick={(event) => handleHeadingLinkClick({ event, id: heading.id })}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
