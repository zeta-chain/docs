import clsx from "clsx";
import { SVGProps } from "react";

const IconYouTube = <T extends unknown>({ color, ...otherProps }: SVGProps<T, SVGSVGElement> & { color?: string }) => (
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
      d="M32.778 13.5819C32.4707 12.4338 31.5685 11.5316 30.4205 11.2243C28.3395 10.6667 20.0001 10.6667 20.0001 10.6667C20.0001 10.6667 11.6607 10.6667 9.58191 11.2243C8.43384 11.5316 7.53164 12.4338 7.22432 13.5819C6.66675 15.6607 6.66675 20.0005 6.66675 20.0005C6.66675 20.0005 6.66675 24.3403 7.22432 26.4191C7.53164 27.5672 8.43384 28.4694 9.58191 28.7767C11.6607 29.3343 20.0001 29.3343 20.0001 29.3343C20.0001 29.3343 28.3394 29.3343 30.4183 28.7767C31.5663 28.4694 32.4685 27.5672 32.7758 26.4191C33.3334 24.3403 33.3334 20.0005 33.3334 20.0005C33.3334 20.0005 33.3334 15.6607 32.7758 13.5819H32.778ZM17.333 24.0001V16.001L24.2609 20.0005L17.333 24.0001Z"
      fill={color || "currentColor"}
    />
  </svg>
);

export { IconYouTube };
