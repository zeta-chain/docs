import clsx from "clsx";
import { SVGProps } from "react";

const IconTelegram = <T extends unknown>({ color, ...otherProps }: SVGProps<T, SVGSVGElement> & { color?: string }) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.0157 22.7081L17.0154 22.7079L17.0157 22.7076L17.0158 22.7072L17.016 22.7074L28.2435 12.5755C28.7362 12.138 28.1357 11.925 27.4815 12.3217L13.6247 21.0638L7.63929 19.1955C6.34689 18.7998 6.3374 17.9116 7.92945 17.2729L31.2532 8.27939C32.3186 7.79573 33.3467 8.53545 32.9401 10.1658L28.9681 28.8836C28.6906 30.2135 27.8871 30.5317 26.7735 29.9173L20.7228 25.4469L17.8144 28.275C17.8051 28.284 17.7959 28.2929 17.7868 28.3019C17.4615 28.6184 17.1925 28.8803 16.6037 28.8803L17.0157 22.7081Z"
      fill={color || "currentColor"}
    />
  </svg>
);

export { IconTelegram };
