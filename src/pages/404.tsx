import type { NextPage } from "next";

import { PageNotFound } from "~/components/shared";

const Custom404: NextPage = () => (
  <div className="w-full h-full flex items-center justify-center">
    <PageNotFound />
  </div>
);

export default Custom404;
