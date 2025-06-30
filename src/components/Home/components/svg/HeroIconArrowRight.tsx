import clsx from "clsx";
import { SVGProps } from "react";

const HeroIconArrowRight = <T extends unknown>({
  color,
  ...otherProps
}: SVGProps<T, SVGSVGElement> & { color?: string }) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...otherProps}
    className={clsx(otherProps?.className, { "text-grey-500 dark:text-grey-300": !otherProps?.className })}
  >
    <path
      d="M14 5L21 12M21 12L14 19M21 12L3 12"
      stroke={color || "currentColor"}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export { HeroIconArrowRight };
