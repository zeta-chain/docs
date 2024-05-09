import type { NextPage } from "next";

import { ServerError } from "~/components/shared";

const Custom500: NextPage = () => (
  <div className="w-full h-full flex items-center justify-center">
    <ServerError />
  </div>
);
export default Custom500;
