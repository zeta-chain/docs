import clsx from "clsx";
import { SVGProps } from "react";

const IconBuild = <T extends unknown>({ color, ...otherProps }: SVGProps<T, SVGSVGElement> & { color?: string }) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.25 6C2.25 4.48122 3.48122 3.25 5 3.25H19C20.5188 3.25 21.75 4.48122 21.75 6V18C21.75 19.5188 20.5188 20.75 19 20.75H5C3.48122 20.75 2.25 19.5188 2.25 18V6ZM5 4.75C4.30964 4.75 3.75 5.30964 3.75 6V18C3.75 18.6904 4.30964 19.25 5 19.25H19C19.6904 19.25 20.25 18.6904 20.25 18V6C20.25 5.30964 19.6904 4.75 19 4.75H5ZM8 7.93934L11.5303 11.4697C11.8232 11.7626 11.8232 12.2374 11.5303 12.5303L8 16.0607L6.93934 15L9.93934 12L6.93934 9L8 7.93934ZM12.25 14.25H16.75V15.75H12.25V14.25Z"
      fill={color || "currentColor"}
    />
  </svg>
);

export { IconBuild };
