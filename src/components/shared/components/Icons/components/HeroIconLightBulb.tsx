import clsx from "clsx";
import { SVGProps } from "react";

const HeroIconLightBulb = <T extends unknown>({
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
      d="M9.66353 17H14.3365M12 3V4M18.364 5.63604L17.6569 6.34315M21.0001 11.9999H20.0001M4.00006 11.9999H3.00006M6.34315 6.34315L5.63605 5.63604M8.46447 15.5356C6.51185 13.5829 6.51185 10.4171 8.46447 8.46449C10.4171 6.51187 13.5829 6.51187 15.5355 8.46449C17.4882 10.4171 17.4882 13.5829 15.5355 15.5356L14.9884 16.0827C14.3556 16.7155 14 17.5739 14 18.469V19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19V18.469C10 17.5739 9.64446 16.7155 9.01157 16.0827L8.46447 15.5356Z"
      stroke={color || "currentColor"}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export { HeroIconLightBulb };
