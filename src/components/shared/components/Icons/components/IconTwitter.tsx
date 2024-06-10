import clsx from "clsx";
import { SVGProps } from "react";

const IconTwitter = <T extends unknown>({ color, ...otherProps }: SVGProps<T, SVGSVGElement> & { color?: string }) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...otherProps}
    className={clsx(otherProps?.className, { "text-green-200 dark:text-green-100": !otherProps?.className })}
  >
    <path
      d="M25.8972 10.7917H29.0214L22.1959 18.5929L30.2256 29.2084H23.9384L19.0141 22.7701L13.3795 29.2084H10.2534L17.554 20.8642L9.85107 10.7917H16.2979L20.749 16.6766L25.8972 10.7917ZM24.8007 27.3384H26.5319L15.3572 12.5635H13.4995L24.8007 27.3384Z"
      fill={color || "currentColor"}
    />
  </svg>
);

export { IconTwitter };
