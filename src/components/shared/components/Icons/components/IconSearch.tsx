import clsx from "clsx";
import { SVGProps } from "react";

const IconSearch = <T extends unknown>({ color, ...otherProps }: SVGProps<T, SVGSVGElement> & { color?: string }) => (
  <svg
    width={17}
    height={16}
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...otherProps}
    className={clsx(otherProps?.className, { "text-grey-500 dark:text-grey-300": !otherProps?.className })}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.77775 2.5C4.47656 2.5 2.61108 4.36548 2.61108 6.66667C2.61108 8.96785 4.47656 10.8333 6.77775 10.8333C9.07894 10.8333 10.9444 8.96785 10.9444 6.66667C10.9444 4.36548 9.07894 2.5 6.77775 2.5ZM1.61108 6.66667C1.61108 3.8132 3.92428 1.5 6.77775 1.5C9.63122 1.5 11.9444 3.8132 11.9444 6.66667C11.9444 7.91334 11.5029 9.05689 10.7676 9.94946L14.8182 14L14.1111 14.7071L10.0605 10.6566C9.16797 11.3918 8.02443 11.8333 6.77775 11.8333C3.92428 11.8333 1.61108 9.52014 1.61108 6.66667Z"
      fill={color || "currentColor"}
    />
  </svg>
);

export { IconSearch };
