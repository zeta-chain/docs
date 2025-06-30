import clsx from "clsx";
import { SVGProps } from "react";

const HeroIconArrowLeft = <T extends unknown>({
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
      d="M10 19L3 12M3 12L10 5M3 12L21 12"
      stroke={color || "currentColor"}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export { HeroIconArrowLeft };
