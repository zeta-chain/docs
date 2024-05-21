import clsx from "clsx";
import { SVGProps } from "react";

const IconDocument = <T extends unknown>({ color, ...otherProps }: SVGProps<T, SVGSVGElement> & { color?: string }) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 3.75C6.30964 3.75 5.75 4.30964 5.75 5V19C5.75 19.6904 6.30964 20.25 7 20.25H17C17.6904 20.25 18.25 19.6904 18.25 19V9.31066L12.6893 3.75H7ZM4.25 5C4.25 3.48122 5.48122 2.25 7 2.25H13C13.1989 2.25 13.3897 2.32902 13.5303 2.46967L19.5303 8.46967C19.671 8.61032 19.75 8.80109 19.75 9V19C19.75 20.5188 18.5188 21.75 17 21.75H7C5.48122 21.75 4.25 20.5188 4.25 19V5ZM8.25 11.25H15.75V12.75H8.25V11.25ZM8.25 15.25H15.75V16.75H8.25V15.25Z"
      fill={color || "currentColor"}
    />
  </svg>
);

export { IconDocument };
