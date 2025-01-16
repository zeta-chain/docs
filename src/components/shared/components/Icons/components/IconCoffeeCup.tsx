import clsx from "clsx";
import { SVGProps } from "react";

const IconCoffeeCup = <T extends unknown>({
  color,
  ...otherProps
}: SVGProps<T, SVGSVGElement> & { color?: string }) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...otherProps}
    className={clsx(otherProps?.className, { "text-grey-400 dark:text-grey-300": !otherProps?.className })}
  >
    <path
      d="M7.81886 2.73107C7.96744 3.06898 8.01501 3.29238 8.01208 3.49289C8.00898 3.70519 7.94891 3.94176 7.79946 4.3137C7.6965 4.56993 7.82075 4.86111 8.07698 4.96407C8.33321 5.06703 8.62439 4.94278 8.72735 4.68655C8.89156 4.27789 9.00616 3.90486 9.01197 3.50751C9.01788 3.10362 8.91123 2.72377 8.71981 2.29593L8.7067 2.26664L8.68996 2.23926C8.42457 1.80531 8.47479 1.25474 8.72019 0.70346C8.83249 0.451184 8.71902 0.155637 8.46674 0.0433374C8.21446 -0.0689619 7.91892 0.0445122 7.80662 0.296789C7.50227 0.980489 7.32935 1.90212 7.81886 2.73107ZM2 6.75012H2.75V10.2501H2C1.58579 10.2501 1.25 9.91434 1.25 9.50012V7.50012C1.25 7.08591 1.58579 6.75012 2 6.75012ZM0 7.50012C0 6.39556 0.895431 5.50012 2 5.50012H2.75H3H4H4.25H14C15.1046 5.50012 16 6.39556 16 7.50012V14.5001C16 15.6047 15.1046 16.5001 14 16.5001H5C3.89543 16.5001 3 15.6047 3 14.5001V11.5001H2.75H2C0.895431 11.5001 0 10.6047 0 9.50012V7.50012ZM4.25 6.75012H14C14.4142 6.75012 14.75 7.08591 14.75 7.50012V14.5001C14.75 14.9143 14.4142 15.2501 14 15.2501H5C4.58579 15.2501 4.25 14.9143 4.25 14.5001V6.75012ZM10.0121 3.49289C10.015 3.29238 9.96744 3.06898 9.81886 2.73107C9.32935 1.90212 9.50227 0.980489 9.80662 0.296789C9.91892 0.0445122 10.2145 -0.0689619 10.4667 0.0433374C10.719 0.155637 10.8325 0.451184 10.7202 0.70346C10.4748 1.25474 10.4246 1.80531 10.69 2.23926L10.7067 2.26664L10.7198 2.29593C10.9112 2.72377 11.0179 3.10362 11.012 3.50751C11.0062 3.90486 10.8916 4.27789 10.7273 4.68655C10.6244 4.94278 10.3332 5.06703 10.077 4.96407C9.82075 4.86111 9.6965 4.56993 9.79946 4.3137C9.94891 3.94176 10.009 3.70519 10.0121 3.49289Z"
      fill-rule="evenodd"
      fill={color || "currentColor"}
    />
  </svg>
);

export { IconCoffeeCup };
