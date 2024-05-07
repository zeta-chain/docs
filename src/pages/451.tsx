import type { NextPage } from "next";

import { PageBlocked } from "~/components/shared";

const CustomPageBlocked: NextPage = () => {
  return <PageBlocked title="Error 451" subtitle="Unavailable Due to Legal Reasons" />;
};

export default CustomPageBlocked;
