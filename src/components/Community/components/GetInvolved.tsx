import Image from "next/image";

import { IconClaim, IconSparkle, PrimaryLink, SectionTitle } from "~/components/shared";
import { globalLinks } from "~/constants";
import { basePath } from "~/lib/app.constants";

export const GetInvolved = () => {
  return (
    <div className="flex flex-col gap-10">
      <SectionTitle
        title="Get Involved"
        description="Social channels run the by the community for support, local events, news and more"
        colorClass="bg-[#9AEA4A]"
      />

      <div className="grid grid-cols-1 gap-5 lg:gap-8">
        <div className="flex flex-col gap-[30px] py-10 px-6 rounded-lg border border-grey-200 dark:border-grey-600">
          <div className="flex justify-center">
            <Image
              src={`${basePath}/img/pages/community-ambassador.svg`}
              alt="Community Ambassador"
              width={424}
              height={156}
              className="w-full !rounded-none !mt-0 max-w-[380px] sm:max-w-[424px] lg:max-w-full lg:w-auto"
            />
          </div>

          <div>
            <h3 className="text-xl font-medium text-black dark:text-white">Community Ambassador</h3>
            <p className="text-base text-grey-400 dark:text-grey-300">Lead a local community group</p>
          </div>

          <p className="text-base text-grey-400 dark:text-grey-300 flex-grow">
            Become a ZetaChain Community Ambassador and help establish or run community events, and support your region.
            Ambassadors enjoy exclusive perks and get to help shape the kind of events, talks, meetups and more for
            their region.
          </p>

          <PrimaryLink href={globalLinks.communityAmbassadorLink} target="_blank" icon={<IconSparkle />}>
            Apply Now
          </PrimaryLink>
        </div>
      </div>
    </div>
  );
};
