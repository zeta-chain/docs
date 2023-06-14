import Link from "@docusaurus/Link";
import React, { useMemo } from "react";

interface Props {
  headerIcon?: React.ReactNode;
  headerIconPath?: string;
  headerTitle: string;
  sectionInfo: string;
  link: string;
  items?: (
    | { icon: React.ReactNode; href: string }
    | { iconUrl: string; href: string }
  )[];
}

const Overview = ({
  headerIconPath,
  headerTitle,
  sectionInfo,
  items,
}: Omit<Props, "link">) => (
  <div className="flex flex-col bg-grey-100 dark:bg-grey-700 dark:hover:bg-grey-600 border border-grey-100 dark:border-grey-700 dark:hover:border-grey-500 rounded-md p-6 w-full! mb-4 dark:hover:text-white dark:hover:scale-100 hover:shadow-lg dark:shadow-none hover:shadow-grey-200 hover:scale-[100.5%] transition-scale transition-colors duration-[50ms]">
    <div className="w-full flex items-center gap-[12.25px]">
      {headerIconPath && <img src={headerIconPath} alt={headerTitle} />}

      <svg
        width="16"
        height="20"
        viewBox="0 0 16 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 1.75C2.30964 1.75 1.75 2.30964 1.75 3V17C1.75 17.6904 2.30964 18.25 3 18.25H13C13.6904 18.25 14.25 17.6904 14.25 17V7.31066L8.68934 1.75H3ZM0.25 3C0.25 1.48122 1.48122 0.25 3 0.25H9C9.19891 0.25 9.38968 0.329017 9.53033 0.469669L15.5303 6.46967C15.671 6.61032 15.75 6.80109 15.75 7V17C15.75 18.5188 14.5188 19.75 13 19.75H3C1.48122 19.75 0.25 18.5188 0.25 17V3ZM4.25 9.25H11.75V10.75H4.25V9.25ZM4.25 13.25H11.75V14.75H4.25V13.25Z"
          fill="currentColor"
        />
      </svg>

      <span className="text-xl">{headerTitle}</span>
    </div>

    {sectionInfo && (
      <div className="mt-6 text-sm opacity-70">{sectionInfo}</div>
    )}

    {items && items?.length > 0 && (
      <div className="w-full">
        {items.map(({ href, ...rest }) =>
          "iconUrl" in rest ? (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="w-full"
            >
              <img src={rest.iconUrl} alt={rest.iconUrl} />
            </a>
          ) : (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="w-full"
            >
              {rest.icon}
            </a>
          )
        )}
      </div>
    )}
  </div>
);

export const DocsOverview = ({ link, ...otherProps }: Props) => {
  const isExternalLink = link.includes("://");

  const linkComponent = useMemo(() => {
    return isExternalLink ? (
      <a href={link} className="w-full transition-colors duration-[50ms]">
        <Overview {...otherProps} />
      </a>
    ) : (
      <Link to={link} className="w-full transition-colors duration-[50ms]">
        <Overview {...otherProps} />
      </Link>
    );
  }, [isExternalLink, link, otherProps]);

  return (
    <div className="flex w-full">
      {link ? (
        linkComponent
      ) : (
        <div className="w-full">
          <Overview {...otherProps} />
        </div>
      )}
    </div>
  );
};
