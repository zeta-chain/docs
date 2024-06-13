import { Microscope } from "lucide-react";

import { Badge } from "./ui";

export const BadgeExperimental = () => {
  return (
    <Badge>
      <Microscope className="!mr-1.5 !w-3.5 !h-3.5" /> Experimental
    </Badge>
  );
};
