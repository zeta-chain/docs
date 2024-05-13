import clsx from "clsx";
import { SVGProps } from "react";

const IconAbout = <T extends unknown>({ color, ...otherProps }: SVGProps<T, SVGSVGElement> & { color?: string }) => (
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
      d="M16.4073 15.4818V17.6089H7.63233C7.75337 16.209 8.2051 15.2239 9.7673 13.8389L16.4073 8.17433V13.1451H18.7975V4H5.20527V8.55852H7.59461V6.39022H14.8153L8.20774 12.0285L8.19195 12.0434C5.4228 14.495 5.20264 16.4739 5.20264 18.8053V20H18.7966V15.4827H16.4064L16.4073 15.4818Z"
      fill={color || "currentColor"}
    />
  </svg>
);

export { IconAbout };
