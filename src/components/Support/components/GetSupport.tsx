import Image from "next/image";

import { ArticleNavigationTitle, IconCommunity, IconDiscord, PrimaryLink } from "~/components/shared";
import { globalLinks } from "~/constants";
import { basePath } from "~/lib/app.constants";

type GetSupportProps = {
  title?: string;
};

export const GetSupport: React.FC<GetSupportProps> = ({ title }) => {
  return (
    <div className="flex flex-col gap-10">
      <ArticleNavigationTitle
        title={title || "Get Support"}
        description="Get the help from a supportive, active and growing community"
        colorClass="bg-[#9AEA4A]"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8">
        <div className="flex flex-col gap-[30px] py-10 px-6 rounded-lg border border-grey-200 dark:border-grey-600">
          <div className="flex justify-center">
            <Image
              src={`${basePath}/img/pages/developer-community.svg`}
              alt="Developer Community"
              width={574}
              height={288}
              className="w-full !rounded-none !mt-0 max-w-[350px] sm:max-w-[486px] lg:max-w-full lg:w-auto lg:h-[240px]"
            />
          </div>

          <div>
            <h3 className="text-xl font-medium text-black dark:text-white">Developer Community</h3>
            <p className="text-base text-grey-400 dark:text-grey-300">Builders, Validators and more</p>
          </div>

          <p className="text-base text-grey-400 dark:text-grey-300 flex-grow">
            Get the help you need when you need it, from a supportive, active and growing developer community.
          </p>

          <PrimaryLink
            href={globalLinks.discordLink}
            target="_blank"
            icon={<IconDiscord className="h-6 w-6 text-grey-400 dark:text-grey-300" />}
          >
            Join the Discord
          </PrimaryLink>
        </div>

        <div className="flex flex-col gap-[30px] py-10 px-6 rounded-lg border border-grey-200 dark:border-grey-600">
          <div className="flex justify-center">
            <Image
              src={`${basePath}/img/pages/community.svg`}
              alt="Global Community"
              width={525}
              height={308}
              className="w-full !rounded-none !mt-0 max-w-[340px] sm:max-w-[416px] lg:max-w-full lg:w-auto lg:h-[240px]"
            />
          </div>

          <div>
            <h3 className="text-xl font-medium text-black dark:text-white">Global Community</h3>
            <p className="text-base text-grey-400 dark:text-grey-300">Community-led regional support</p>
          </div>

          <p className="text-base text-grey-400 dark:text-grey-300 flex-grow">
            Get connected with our official channels and active global community of supportive builders within the
            ZetaChain Ecosystem.
          </p>

          <PrimaryLink href="/community" icon={<IconCommunity className="text-grey-400 dark:text-grey-300" />}>
            Connect with the Community
          </PrimaryLink>
        </div>
      </div>
    </div>
  );
};
