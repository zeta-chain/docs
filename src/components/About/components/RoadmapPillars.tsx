import Image from "next/image";

import { basePath } from "~/lib/app.constants";

export const RoadmapPillars: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 sm:gap-10">
      <h3 className="text-xl sm:text-2xl tracking-[-0.48px] font-medium text-black dark:text-white">
        Potential Key Development Roadmap Pillars
      </h3>

      <div className="flex justify-center rounded-lg border border-grey-200 dark:border-grey-800 dark:bg-grey-800">
        <Image
          src={`${basePath}/img/pages/protocol-roadmap.svg`}
          alt="Protocol Roadmap"
          width={1168}
          height={657}
          className="w-auto sm:w-full !rounded-none !mt-0 max-h-[300px] sm:max-h-[unset] sm:max-w-[1168px] block dark:hidden"
        />

        <Image
          src={`${basePath}/img/pages/protocol-roadmap-dark.svg`}
          alt="Protocol Roadmap"
          width={1168}
          height={657}
          className="w-auto sm:w-full !rounded-none !mt-0 max-h-[300px] sm:max-h-[unset] sm:max-w-[1168px] hidden dark:block"
        />
      </div>
    </div>
  );
};
