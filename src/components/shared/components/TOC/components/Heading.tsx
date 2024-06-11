import clsx from "clsx";
import { PropsWithChildren } from "react";

type HeadingProps = PropsWithChildren<{
  tag: "h2" | "h3" | "h4" | "h5" | "h6";
}>;

export const Heading: React.FC<HeadingProps> = ({ tag: Tag, children }) => {
  if (!children) return null;

  return (
    <Tag
      className={clsx("first:mt-0", {
        "mt-20 sm:mt-[136px]": Tag === "h2",
        "mt-10 sm:mt-20": Tag === "h3",
        "mt-8 sm:mt-10": Tag === "h4",
        "mt-8": Tag === "h5" || Tag === "h6",
      })}
    >
      <span
        className={clsx({
          "text-2xl tracking-[-0.48px] font-medium": Tag === "h2",
          "text-xl font-medium": Tag === "h3",
          "text-lg font-medium": Tag === "h4",
          "text-base leading-[160%] font-semibold": Tag === "h5" || Tag === "h6",
        })}
      >
        {children}
      </span>
    </Tag>
  );
};
