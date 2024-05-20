import Image from "next/image";

import { globalLinks } from "~/constants";
import { basePath } from "~/lib/app.constants";

import { ArticleNavigationTitle } from "../../ArticleNavigation";
import { IconBug, IconChat } from "../../Icons";
import { PrimaryLink } from "../../Link";

export const ShareFeedbackOrDiscoveries = () => {
  return (
    <div className="flex flex-col gap-10">
      <ArticleNavigationTitle
        title="Share Feedback or Discoveries"
        description="Provide feedback or discovered bugs"
        colorClass="bg-[#00BC8D]"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 lg:gap-8">
        <div className="flex flex-col gap-[30px] py-10 px-6 rounded-lg border border-grey-200 dark:border-grey-600">
          <div className="flex justify-center">
            <Image
              src={`${basePath}/img/pages/provide-feedback.svg`}
              alt="Provide Feedback"
              width={388}
              height={244}
              className="w-full !rounded-none !mt-0 max-w-[300px] sm:max-w-[388px] lg:max-w-full lg:w-auto lg:h-[240px]"
            />
          </div>

          <div>
            <h3 className="text-xl font-medium text-black dark:text-white">Provide Feedback</h3>
            <p className="text-base text-grey-400 dark:text-grey-300">Share product and other feedback</p>
          </div>

          <p className="text-base text-grey-400 dark:text-grey-300 flex-grow">
            We're constantly looking to improve and we want to make building the next generation of Omichain dApps super
            easy and simple.
          </p>

          <PrimaryLink href={globalLinks.supportEmailLink} target="_blank" icon={<IconChat />}>
            Share your thoughts
          </PrimaryLink>
        </div>

        <div className="flex flex-col gap-[30px] py-10 px-6 rounded-lg border border-grey-200 dark:border-grey-600">
          <div className="flex justify-center">
            <Image
              src={`${basePath}/img/pages/bug-bounty.svg`}
              alt="Bug Bounty"
              width={486}
              height={228}
              className="w-full !rounded-none !mt-0 max-w-[400px] sm:max-w-[486px] lg:max-w-full lg:w-auto lg:h-[240px]"
            />
          </div>

          <div>
            <h3 className="text-xl font-medium text-black dark:text-white">Bug Bounty</h3>
            <p className="text-base text-grey-400 dark:text-grey-300">Share security vulnerabilities</p>
          </div>

          <p className="text-base text-grey-400 dark:text-grey-300 flex-grow">
            Get rewarded as a researcher, developer, or user who helped identify and report security vulnerabilities.
          </p>

          <PrimaryLink href={globalLinks.bugBountyLink} target="_blank" icon={<IconBug />}>
            Report a bug or vulnerability
          </PrimaryLink>
        </div>
      </div>
    </div>
  );
};
