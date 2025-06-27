import { EcosystemProject } from "~/generated/contentful.graphql.types";

import { FeaturedAppCard } from "./FeaturedAppCard";

type FeaturedAppsProps = {
  featuredEcosystemApps: EcosystemProject[];
};

export const FeaturedApps: React.FC<FeaturedAppsProps> = ({ featuredEcosystemApps }) => {
  return (
    <div className="mx-auto max-w-[1312px]">
      <div className="flex gap-8 py-10 md:pt-12 md:pb-[72px] px-6 md:px-[72px] overflow-x-scroll no-scrollbar">
        {featuredEcosystemApps.map((app) => (
          <FeaturedAppCard key={app.sys.id} app={app} />
        ))}
      </div>
    </div>
  );
};
