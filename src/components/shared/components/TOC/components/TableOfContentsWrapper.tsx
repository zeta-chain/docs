import { useRouter } from "next/router";
import { PropsWithChildren, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";

import { selectDirectoriesByRoute } from "~/lib/directories/directories.selectors";

import { mainNavRoutes } from "../../Layout";
import { getHeadings, Heading } from "../TOC.helpers";
import { TableOfContents } from "./TableOfContents";

type TableOfContentsWrapperProps = PropsWithChildren<{}>;

export const TableOfContentsWrapper: React.FC<TableOfContentsWrapperProps> = ({ children }) => {
  const { route } = useRouter();
  const directoriesByRoute = useSelector(selectDirectoriesByRoute);

  const [headings, setHeadings] = useState<Heading[]>([]);

  const isMainPage = useMemo(() => mainNavRoutes.includes(route), [route]);
  const isSubCategoryPage = useMemo(
    () => directoriesByRoute[route]?.frontMatter?.pageType === "sub-category",
    [directoriesByRoute, route]
  );

  const shouldRenderTOC = !isMainPage && !isSubCategoryPage;

  useEffect(() => {
    if (shouldRenderTOC) setHeadings(getHeadings());
  }, [shouldRenderTOC, route]);

  if (!shouldRenderTOC) return <>{children}</>;

  return (
    <div className="grid grid-cols-10 gap-8">
      <div className="col-span-10 lg:col-span-6">{children}</div>

      <div className="col-start-8 col-span-3 hidden lg:block">
        <TableOfContents headings={headings} />
      </div>
    </div>
  );
};
