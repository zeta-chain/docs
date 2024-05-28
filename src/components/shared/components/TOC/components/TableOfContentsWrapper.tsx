import { useRouter } from "next/router";
import { PropsWithChildren, useEffect, useMemo, useState } from "react";

import { mainNavRoutes } from "../../Layout";
import { getHeadings, Heading } from "../TOC.helpers";
import { TableOfContents } from "./TableOfContents";

type TableOfContentsWrapperProps = PropsWithChildren<{}>;

export const TableOfContentsWrapper: React.FC<TableOfContentsWrapperProps> = ({ children }) => {
  const { route } = useRouter();
  const [headings, setHeadings] = useState<Heading[]>([]);

  const shouldRenderTOC = useMemo(() => !mainNavRoutes.includes(route), [route]);

  useEffect(() => {
    if (shouldRenderTOC) setHeadings(getHeadings());
  }, [shouldRenderTOC, route]);

  if (!shouldRenderTOC) return <>{children}</>;

  return (
    <div className="grid grid-cols-10 gap-8">
      <div className="col-span-10 md:col-span-7 lg:col-span-6">{children}</div>

      <div className="lg:col-start-8 col-span-3 hidden md:block">
        <TableOfContents headings={headings} />
      </div>
    </div>
  );
};
