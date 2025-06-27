import clsx from "clsx";
import Image from "next/image";

import { EcosystemProject } from "~/generated/contentful.graphql.types";

import { isUniversalApp, parseEcosystemAppCardBorder, parseEcosystemAppLogoBorder } from "./../Ecosystem.utils";

const DEFAULT_APP_BACKGROUND_URL = "/img/ecosystem/default-ecosystem-app-bg.png";
const DEFAULT_APP_LOGO_URL = "/img/ecosystem/default-ecosystem-app-logo.png";
const DEFAULT_TEXT_COLOR = "#FFF";

type FeaturedAppCardProps = {
  app: EcosystemProject;
  className?: string;
};

export const FeaturedAppCard: React.FC<FeaturedAppCardProps> = ({ app, className }) => {
  return (
    <a
      href={app.link || ""}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "flex flex-col justify-end items-center rounded-lg relative shrink-0 px-6 pb-10 overflow-hidden",
        "w-[232px] h-[321px]",
        "shadow-none hover:shadow-light transition-all duration-200",
        parseEcosystemAppCardBorder(app.featuredCardBorder),
        className
      )}
    >
      <div className="absolute inset-0 h-full">
        <Image
          src={app.featuredCardBackgroundImage?.url || DEFAULT_APP_BACKGROUND_URL}
          alt={app.name || "Title"}
          width={232}
          height={321}
          className="w-[232px] h-[321px] object-cover object-center"
          sizes="232px"
        />
      </div>

      {isUniversalApp(app) && (
        <div className="absolute top-2 right-0 px-4 py-2 bg-[#B0FF61] rounded-l-[4px] text-[12px] leading-[130%] font-medium text-black">
          Universal
        </div>
      )}

      <div className="flex flex-col items-center relative z-[1] overflow-hidden">
        <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4">
          <Image
            src={app.image?.url || DEFAULT_APP_LOGO_URL}
            alt={app.name || "Title"}
            width={56}
            height={56}
            className={clsx("w-14 h-14 rounded-lg", parseEcosystemAppLogoBorder(app.featuredCardLogoBorder))}
            sizes="56px"
          />
        </div>

        <h4
          className="text-[20px] leading-[130%] font-medium mb-2 line-clamp-1 text-center"
          style={{ wordBreak: "break-all", color: app.textColor || DEFAULT_TEXT_COLOR }}
        >
          {app.name || "Title"}
        </h4>

        <p
          className="text-[14px] leading-[135%] line-clamp-2 h-[38px] text-center"
          style={{ color: app.textColor || DEFAULT_TEXT_COLOR }}
        >
          {app.description}
        </p>
      </div>
    </a>
  );
};
