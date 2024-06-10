import clsx from "clsx";
import { SVGProps } from "react";

const IconTime = <T extends unknown>({ color, ...otherProps }: SVGProps<T, SVGSVGElement> & { color?: string }) => (
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...otherProps}
    className={clsx(otherProps?.className, { "text-grey-400 dark:text-grey-300": !otherProps?.className })}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 3C4.96243 3 2.5 5.46243 2.5 8.5C2.5 11.5376 4.96243 14 8 14C11.0376 14 13.5 11.5376 13.5 8.5C13.5 5.46243 11.0376 3 8 3ZM1.5 8.5C1.5 4.91015 4.41015 2 8 2C11.5899 2 14.5 4.91015 14.5 8.5C14.5 12.0899 11.5899 15 8 15C4.41015 15 1.5 12.0899 1.5 8.5ZM8.5 5.33333V8.29289L10.7071 10.5L10 11.2071L7.64645 8.85355C7.55268 8.75979 7.5 8.63261 7.5 8.5V5.33333H8.5Z"
      fill={color || "currentColor"}
    />
  </svg>
);

export { IconTime };
