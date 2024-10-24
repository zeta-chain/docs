import clsx from "clsx";
import { SVGProps } from "react";

const IconDropDown = <T extends unknown>({ color, ...otherProps }: SVGProps<T, SVGSVGElement> & { color?: string }) => (
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
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.33333 5.79297L7.99999 10.4596L12.6667 5.79297L13.3738 6.50008L8.35355 11.5203C8.15829 11.7156 7.8417 11.7156 7.64644 11.5203L2.62622 6.50008L3.33333 5.79297Z"
      fill={color || "currentColor"}
    />
  </svg>
);

export { IconDropDown };
