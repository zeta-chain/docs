import Link, { LinkProps as NextLinkProps } from "next/link";
import { PropsWithChildren } from "react";

type PrimaryLinkProps = {
  icon?: React.ReactNode;
} & NextLinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const PrimaryLink: React.FC<PropsWithChildren<PrimaryLinkProps>> = ({ icon, children, ...linkProps }) => {
  return (
    <Link
      {...linkProps}
      className="flex items-center gap-1 text-[#00A5C6] dark:text-[#B0FF61] hover:!text-[#00A5C6]/80 dark:hover:!text-[#B0FF61]/80"
    >
      {icon}
      {children} →
    </Link>
  );
};
