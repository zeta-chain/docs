import clsx from "clsx";
import { SVGProps } from "react";

const IconDocs = <T extends unknown>({ color, ...otherProps }: SVGProps<T, SVGSVGElement> & { color?: string }) => (
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
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.4543 3.09058L14.9095 3.45438L10.5457 20.9096L9.09049 20.5458L13.4543 3.09058ZM7.06066 8.00008L3.06066 12.0001L7.06066 16.0001L6 17.0607L1.46967 12.5304C1.17678 12.2375 1.17678 11.7626 1.46967 11.4698L6 6.93942L7.06066 8.00008ZM18 6.93942L22.5303 11.4698C22.8232 11.7626 22.8232 12.2375 22.5303 12.5304L18 17.0607L16.9393 16.0001L20.9393 12.0001L16.9393 8.00008L18 6.93942Z"
      fill={color || "currentColor"}
    />
  </svg>
);

export { IconDocs };
