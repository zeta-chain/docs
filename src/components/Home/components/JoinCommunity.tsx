import { Skeleton } from "@mui/material";
import Link from "next/link";

import { globalLinks } from "../../../constants";
import { EcosystemEvents } from "../../../generated/contentful.graphql.types";
import { EcosystemCarousel } from "./EcosystemCarousel/EcosystemCarousel";
import { DiscordSvg } from "./svg/DiscordSvg";
import { GlobalSvg } from "./svg/GlobalSvg";
import { DeveloperCommunitySvg, GlobalCommunitySvg } from "./svg/JoinCommunitySvgs";

type JoinCommunityProps = {
  ecosystemEvents: EcosystemEvents[];
  isLoadingEcosystemEvents: boolean;
};

export const JoinCommunity: React.FC<JoinCommunityProps> = ({ ecosystemEvents, isLoadingEcosystemEvents }) => {
  return (
    <div className="py-16 md:py-20 max-w-[1312px] mx-auto">
      <div className="flex flex-col px-5 md:px-[72px] mb-14 md:mb-16">
        <div>
          <h2 className="text-[32px] md:text-[36px] leading-[110%] tracking-[-0.64px] md:tracking-[-0.72px] font-medium text-grey-900 dark:text-grey-50 mb-2 text-center">
            Join a thriving community
          </h2>

          <p className="text-[16px] leading-[160%] font-normal text-grey-400 dark:text-grey-300 text-center mb-8">
            Converse, collaborate and meet other builders
          </p>

          <div className="flex flex-col items-center">
            <div className="w-8 h-[3px] rounded-full bg-[#9AEA4A] mx-auto" />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 md:gap-14 px-5 md:px-[72px]">
        <div className="basis-full md:basis-1/2">
          {isLoadingEcosystemEvents ? (
            <div className="flex lg:max-w-[568px] h-fit select-none items-center justify-center">
              <Skeleton variant="rectangular" height={464} className="w-full h-[464px] rounded-lg" />
            </div>
          ) : (
            <EcosystemCarousel className="w-full md:pb-0 mx-auto" ecosystemEvents={ecosystemEvents} />
          )}
        </div>

        <div className="flex flex-col gap-4 basis-full md:basis-1/2">
          <div className="flex flex-col items-center md:flex-row gap-6 p-6 rounded-lg border border-grey-200 dark:border-grey-600 min-h-[224px]">
            <div className="basis-full lg:basis-1/3 xl:basis-1/2">
              <DeveloperCommunitySvg />
            </div>

            <div className="flex flex-col basis-full lg:basis-2/3 xl:basis-1/2">
              <h4 className="text-[20px] leading-[130%] font-medium text-grey-900 dark:text-grey-50 text-center md:text-left">
                Developer Community
              </h4>
              <p className="text-[14px] leading-[135%] font-normal text-grey-400 dark:text-grey-300 mb-4 text-center md:text-left">
                773k+ Builders, Validators and more
              </p>

              <p className="text-[16px] leading-[130%] font-normal text-grey-400 dark:text-grey-300 mb-4 text-center md:text-left">
                Converse with other builders from the active developer community.
              </p>

              <a
                href={globalLinks.discordLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex self-center md:self-start items-center gap-1 text-[16px] leading-[130%] font-normal text-[#00A5C6] dark:text-[#B0FF61] text-center md:text-left"
              >
                <DiscordSvg />
                Join the Discord →
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:flex-row gap-6 p-6 rounded-lg border border-grey-200 dark:border-grey-600 min-h-[224px]">
            <div className="basis-full lg:basis-1/3 xl:basis-1/2">
              <GlobalCommunitySvg />
            </div>

            <div className="flex flex-col basis-full lg:basis-2/3 xl:basis-1/2">
              <h4 className="text-[20px] leading-[130%] font-medium text-grey-900 dark:text-grey-50 text-center md:text-left">
                Global Community
              </h4>
              <p className="text-[14px] leading-[135%] font-normal text-grey-400 dark:text-grey-300 mb-4 text-center md:text-left">
                Community-led regional support
              </p>

              <p className="text-[16px] leading-[130%] font-normal text-grey-400 dark:text-grey-300 mb-4 text-center md:text-left">
                Get connected with our official channels and active global community.
              </p>

              <Link
                href="/community"
                className="inline-flex self-center md:self-start items-center gap-1 text-[16px] leading-[130%] font-normal text-[#00A5C6] dark:text-[#B0FF61] text-center md:text-left"
              >
                <GlobalSvg />
                Join the conversation →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
