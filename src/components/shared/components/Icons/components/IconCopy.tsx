import clsx from "clsx";
import { SVGProps } from "react";

const IconCopy = <T extends unknown>({ color, ...otherProps }: SVGProps<T, SVGSVGElement> & { color?: string }) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...otherProps}
    className={clsx(otherProps?.className, { "text-grey-400 dark:text-grey-300": !otherProps?.className })}
  >
    <path
      d="M3.25 6.5C3.25 4.98122 4.48122 3.75 6 3.75H16.75V6.25H15.25V5.25H6C5.30964 5.25 4.75 5.80964 4.75 6.5V15.75H5.75L5.75 17.25H3.25V6.5Z"
      fill={color || "currentColor"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.25 21.25H20.75V7.75H10C8.48122 7.75 7.25 8.98122 7.25 10.5V21.25ZM19.25 19.75V9.25H10C9.30964 9.25 8.75 9.80964 8.75 10.5V19.75H19.25Z"
      fill={color || "currentColor"}
    />
  </svg>
);

export { IconCopy };
