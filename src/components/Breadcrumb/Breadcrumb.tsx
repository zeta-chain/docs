/* eslint-disable  */
// @ts-nocheck

import { useLocation } from "@docusaurus/router";
import { useDocsSidebar } from "@docusaurus/theme-common/internal";
import clsx from "clsx";
import { useMemo } from "react";
import React from "react";

function useBreadCrumbs() {
  const sidebar = useDocsSidebar();
  const { pathname } = useLocation();

  const breadCrumbs = useMemo(() => {
    const _breadCrumbs = [];

    function buildBreadcrumbs(sidebar) {
      for (const item of sidebar) {
        if (
          item.href &&
          item.href.replace(/\/$/, "") === pathname.replace(/\/$/, "")
        ) {
          _breadCrumbs.push(item.label);
          return _breadCrumbs;
        }

        if (item.type === "category") {
          _breadCrumbs.push(item.label);
          const breadcrumbs = buildBreadcrumbs(item.items);

          if (!breadcrumbs) {
            _breadCrumbs.pop();
          } else {
            return breadcrumbs;
          }
        }
      }

      return false;
    }

    buildBreadcrumbs(sidebar.items);

    return _breadCrumbs;
  }, [pathname]);

  return breadCrumbs;
}

export const Breadcrumb = () => {
  const breadCrumbs = useBreadCrumbs();

  return (
    <div className="flex items-center gap-[17px] flex-wrap mb-10">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" rx="4" fill="#00DDA5" fillOpacity="0.15" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.4754 6.64959C12.1093 6.28347 11.5157 6.28347 11.1496 6.64959L7.125 10.6742V18.1287H9.75V13.6287H13.875V18.1287H16.5V10.6742L12.4754 6.64959ZM12.75 18.1287V14.7537H10.875V18.1287H12.75ZM10.3541 5.85409C11.1596 5.04863 12.4655 5.04864 13.2709 5.85409L17.625 10.2082V19.2537H6V10.2082L10.3541 5.85409Z"
          fill="#00BC8D"
        />
      </svg>

      {breadCrumbs.length && (
        <svg
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.292908 10.6664L4.95958 5.99975L0.292908 1.33308L1.00001 0.625977L6.02024 5.6462C6.2155 5.84146 6.2155 6.15804 6.02024 6.3533L1.00002 11.3735L0.292908 10.6664Z"
            fill="#A9ACB0"
          />
        </svg>
      )}

      {breadCrumbs.map((item, index) => (
        <div key={index}>
          <div className="flex items-center gap-[17px]">
            <div
              className={clsx(
                "text-grey-400 dark:text-grey-300 leading-[100%] flex items-center text-roobert",
                {
                  "text-green-100 dark:text-green-50":
                    index === breadCrumbs.length - 1,
                }
              )}
            >
              {item}
            </div>

            {index !== breadCrumbs.length - 1 && (
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.292908 10.6664L4.95958 5.99975L0.292908 1.33308L1.00001 0.625977L6.02024 5.6462C6.2155 5.84146 6.2155 6.15804 6.02024 6.3533L1.00002 11.3735L0.292908 10.6664Z"
                  fill="#A9ACB0"
                />
              </svg>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
