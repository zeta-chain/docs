import Image from "next/image";

import { IconClaim, PrimaryLink, SectionTitle } from "~/components/shared";
import { globalLinks } from "~/constants";
import { basePath } from "~/lib/app.constants";

export const WorkWithUs: React.FC = () => {
  return (
    <div className="grid grid-cols-10 gap-8">
      <div className="col-span-10 lg:col-span-6 flex lg:justify-center">
        <Image
          src={`${basePath}/img/pages/work-with-us.svg`}
          alt="Work with Us"
          width={406}
          height={234}
          className="w-full !rounded-none !mt-0 max-w-[250px] lg:max-w-[406px]"
        />
      </div>

      <div className="flex flex-col justify-center gap-5 lg:gap-6 col-span-10 lg:col-span-4">
        <SectionTitle title="Work with Us" colorClass="bg-[#FF5AF1]" />

        <p className="text-base text-grey-400 dark:text-grey-300">
          Join an amazing, global team of passionate builders.
        </p>

        <PrimaryLink href={globalLinks.workWithUsLink} target="_blank" icon={<IconClaim />}>
          View Open Roles
        </PrimaryLink>
      </div>
    </div>
  );
};
