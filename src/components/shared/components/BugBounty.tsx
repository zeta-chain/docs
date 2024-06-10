import Image from "next/image";

import { IconBug, PrimaryLink, SectionTitle } from "~/components/shared";
import { globalLinks } from "~/constants";
import { basePath } from "~/lib/app.constants";

export const BugBounty: React.FC = () => {
  return (
    <div className="grid grid-cols-10 gap-8">
      <div className="col-span-10 lg:col-span-6 flex lg:justify-center">
        <Image
          src={`${basePath}/img/pages/bug-bounty.svg`}
          alt="Bug Bounty"
          width={486}
          height={228}
          className="w-full !rounded-none !mt-0 max-w-[250px] lg:max-w-[486px]"
        />
      </div>

      <div className="flex flex-col justify-center gap-5 lg:gap-6 col-span-10 lg:col-span-4">
        <SectionTitle title="Bug Bounty" colorClass="bg-[#00A87D]" />

        <p className="text-base text-grey-400 dark:text-grey-300">
          Get rewarded as a researcher, developer, or user who helped identify and report security vulnerabilities.
        </p>

        <PrimaryLink href={globalLinks.bugBountyLink} target="_blank" icon={<IconBug />}>
          Report a bug or vulnerability
        </PrimaryLink>
      </div>
    </div>
  );
};
