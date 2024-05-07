import clsx from "clsx";
import { SVGProps } from "react";

const IconExclamationCircle = <T extends unknown>({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 3.75C7.44365 3.75 3.75 7.44365 3.75 12C3.75 16.5563 7.44365 20.25 12 20.25C16.5563 20.25 20.25 16.5563 20.25 12C20.25 7.44365 16.5563 3.75 12 3.75ZM2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12ZM12.75 7.25V12.75H11.25V7.25H12.75ZM11.25 16C11.25 15.5858 11.5858 15.25 12 15.25H12.01C12.4242 15.25 12.76 15.5858 12.76 16C12.76 16.4142 12.4242 16.75 12.01 16.75H12C11.5858 16.75 11.25 16.4142 11.25 16Z"
      fill={color || "currentColor"}
    />
  </svg>
);

export { IconExclamationCircle };
