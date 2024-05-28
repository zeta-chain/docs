import clsx from "clsx";
import { PropsWithChildren } from "react";

import { useCurrentBreakpoint } from "~/hooks/useCurrentBreakpoint";

import { IconLink } from "../../Icons";
import { handleHeadingLinkClick } from "../TOC.helpers";

type HeadingLinkProps = PropsWithChildren<{
  tag: "h2" | "h3" | "h4" | "h5" | "h6";
}>;

export const HeadingLink: React.FC<HeadingLinkProps> = ({ tag: Tag, children }) => {
  const { isSmallDevice } = useCurrentBreakpoint();

  if (!children) return null;

  const generatedId = children.toString().toLowerCase().replace(/\s+/g, "-");

  return (
    <Tag
      id={generatedId}
      className={clsx("heading-link first:mt-0", {
        "mt-20 sm:mt-[136px]": Tag === "h2",
        "mt-10 sm:mt-20": Tag === "h3",
        "mt-6 sm:mt-10": Tag === "h4",
        "mt-6": Tag === "h5" || Tag === "h6",
      })}
    >
      <a
        href={`#${generatedId}`}
        className={clsx("inline-flex gap-1 items-center", {
          "text-2xl tracking-[-0.48px] font-medium": Tag === "h2",
          "text-xl font-medium": Tag === "h3",
          "text-lg font-medium": Tag === "h4",
          "text-base leading-[160%] font-semibold": Tag === "h5" || Tag === "h6",
        })}
        onClick={(event) => handleHeadingLinkClick({ event, id: generatedId, isMobile: isSmallDevice })}
      >
        {children}

        <div className="shrink-0">
          <IconLink />
        </div>
      </a>
    </Tag>
  );
};
