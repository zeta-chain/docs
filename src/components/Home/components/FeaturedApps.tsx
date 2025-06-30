import { Skeleton } from "@mui/material";
import clsx from "clsx";
import { range } from "lodash-es";

import { EcosystemProject } from "~/generated/contentful.graphql.types";

import { FeaturedAppCard } from "./FeaturedAppCard";

type FeaturedAppsProps = {
  featuredEcosystemApps: EcosystemProject[];
  isLoadingFeaturedEcosystemApps: boolean;
};

export const FeaturedApps: React.FC<FeaturedAppsProps> = ({
  featuredEcosystemApps,
  isLoadingFeaturedEcosystemApps,
}) => {
  return (
    <div className="mx-auto max-w-[1312px]">
      <div
        className={clsx("flex gap-8 py-10 md:pt-16 md:pb-20 px-6 md:px-[72px] overflow-x-scroll no-scrollbar", {
          "!pt-0": !featuredEcosystemApps.length && !isLoadingFeaturedEcosystemApps,
        })}
      >
        {isLoadingFeaturedEcosystemApps
          ? range(5).map((index) => (
              <div
                key={index}
                className={clsx(
                  "flex flex-col justify-end items-center rounded-lg relative shrink-0 overflow-hidden",
                  "w-[208px] h-[288px]"
                )}
              >
                <Skeleton variant="rectangular" width={208} height={288} className="!m-0 !rounded-lg" />
              </div>
            ))
          : featuredEcosystemApps.map((app) => <FeaturedAppCard key={app.sys.id} app={app} />)}
      </div>
    </div>
  );
};
