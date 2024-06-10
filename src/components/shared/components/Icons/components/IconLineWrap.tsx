import clsx from "clsx";
import { SVGProps } from "react";

const IconLineWrap = <T extends unknown>({ color, ...otherProps }: SVGProps<T, SVGSVGElement> & { color?: string }) => (
  <svg
    width={24}
    height={25}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...otherProps}
    className={clsx(otherProps?.className, { "text-grey-400 dark:text-grey-300": !otherProps?.className })}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.5 6.5H12.75V8H13.5H17.75C19.2688 8 20.5 9.23122 20.5 10.75C20.5 12.2688 19.2688 13.5 17.75 13.5H4.56132L7.81066 10.2507L6.75 9.19L2.21967 13.7203C1.92678 14.0132 1.92678 14.4881 2.21967 14.781L6.75 19.3113L7.81066 18.2507L4.56066 15.0007V15H17.75C20.0972 15 22 13.0972 22 10.75C22 8.40279 20.0972 6.5 17.75 6.5H13.5Z"
      fill={color || "currentColor"}
    />
  </svg>
);

export { IconLineWrap };
