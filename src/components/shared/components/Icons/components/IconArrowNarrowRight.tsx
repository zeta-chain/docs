import clsx from "clsx";
import { SVGProps } from "react";

const IconArrowNarrowRight = <T extends unknown>({
  color,
  ...otherProps
}: SVGProps<T, SVGSVGElement> & { color?: string }) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...otherProps}
    className={clsx(otherProps?.className, { "text-grey-400 dark:text-grey-300": !otherProps?.className })}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.33333 9.25244L3.29289 15.2929C2.90237 15.6834 2.90237 16.3166 3.29289 16.7071L9.33333 22.7475L10.7475 21.3333L6.41422 17L29 17L29 15L6.41422 15L10.7475 10.6667L9.33333 9.25244Z"
      fill={color || "currentColor"}
    />
  </svg>
);

export { IconArrowNarrowRight };
