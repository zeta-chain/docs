import clsx from "clsx";
import { SVGProps } from "react";

const IconMedium = <T extends unknown>({ color, ...otherProps }: SVGProps<T, SVGSVGElement> & { color?: string }) => (
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
      d="M22.3468 19.9999C22.3468 24.7828 18.3982 28.6666 13.5066 28.6666C8.61509 28.6666 4.6665 24.7828 4.6665 19.9999C4.6665 15.217 8.61509 11.3333 13.5066 11.3333C18.3982 11.3333 22.3468 15.217 22.3468 19.9999ZM32.0316 19.9999C32.0316 24.4959 30.0475 28.15 27.6115 28.15C25.1756 28.15 23.1915 24.4959 23.1915 19.9999C23.1915 15.504 25.1756 11.8498 27.6115 11.8498C30.0475 11.8498 32.0316 15.4848 32.0316 19.9999ZM35.9998 19.9999C35.9998 24.0367 35.3123 27.3082 34.4479 27.3082C33.5835 27.3082 32.896 24.0367 32.896 19.9999C32.896 15.9631 33.5835 12.6916 34.4479 12.6916C35.3123 12.6916 35.9998 15.9631 35.9998 19.9999Z"
      fill={color || "currentColor"}
    />
  </svg>
);

export { IconMedium };
