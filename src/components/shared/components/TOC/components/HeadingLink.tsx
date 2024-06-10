import clsx from "clsx";
import { PropsWithChildren } from "react";
import tw, { styled } from "twin.macro";

import { useCurrentBreakpoint } from "~/hooks/useCurrentBreakpoint";

import { IconLink } from "../../Icons";
import { handleHeadingLinkClick } from "../TOC.helpers";

type HeadingLinkProps = PropsWithChildren<{
  tag: "h2" | "h3" | "h4" | "h5" | "h6";
}>;

const StyledLink = styled.a`
  ${tw`!text-black dark:!text-white`}

  &&:hover {
    ${tw`!text-black dark:!text-white`}

    .icon-link {
      ${tw`text-green-100 dark:text-green-100`}
    }
  }
`;

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
        "mt-8 sm:mt-10": Tag === "h4",
        "mt-8": Tag === "h5" || Tag === "h6",
      })}
    >
      <StyledLink
        href={`#${generatedId}`}
        className={clsx("inline-block relative", {
          "text-2xl tracking-[-0.48px] font-medium": Tag === "h2",
          "text-xl font-medium": Tag === "h3",
          "text-lg font-medium": Tag === "h4",
          "text-base leading-[160%] font-semibold": Tag === "h5" || Tag === "h6",
        })}
        onClick={(event) => handleHeadingLinkClick({ event, id: generatedId, isMobile: isSmallDevice })}
      >
        <span className="mr-1">{children}</span>

        <span className="inline-block align-bottom">
          <IconLink className="text-grey-300 dark:text-grey-400 icon-link transition-all" />
        </span>
      </StyledLink>
    </Tag>
  );
};
