import clsx from "clsx";
import { useRouter } from "next/router";
import { useMemo } from "react";

import { useCurrentBreakpoint } from "~/hooks/useCurrentBreakpoint";
import { NavigationSectionVariant } from "~/lib/helpers/nextra";

import { mainNavRoutes } from "../../Layout";
import { SectionTitle, SectionTitleProps } from "../../SectionTitle";
import { NavigationCardLink, NavigationCardLinkProps } from "./NavigationCardLink";

type NavigationSectionProps = Omit<SectionTitleProps, "title"> & {
  title?: string;
  navItems: NavigationCardLinkProps[];
  variant?: NavigationSectionVariant;
  navImgUrl?: string;
  lastItemEmbellishment?: boolean;
};

export const NavigationSection: React.FC<NavigationSectionProps> = ({
  title,
  description,
  colorClass,
  link,
  navItems,
  variant = "default",
  navImgUrl,
  lastItemEmbellishment,
}) => {
  const { upXl } = useCurrentBreakpoint();
  const { route } = useRouter();
  const isMainPage = useMemo(() => mainNavRoutes.includes(route), [route]);

  if (variant === "fancy" && upXl) {
    return (
      <section className="grid grid-cols-10 gap-8">
        <div className="col-span-2">
          {title && (
            <SectionTitle
              title={title}
              description={description}
              colorClass={colorClass}
              link={link}
              variant={variant}
              navImgUrl={navImgUrl}
            />
          )}
        </div>

        <div className={clsx("col-span-6 grid grid-cols-2 gap-8")}>
          <div className="col-span-1 relative">
            <div className="absolute rounded-full bg-[#00A5C6] w-[72px] h-[72px] -left-[36px] -top-[39px]" />
            <NavigationCardLink {...navItems[0]} isMainPage={isMainPage} className="relative" itemIndex={0} />
          </div>

          <div className="col-span-1 flex flex-col gap-8">
            <div className="flex-grow">
              <NavigationCardLink
                {...navItems[1]}
                isMainPage={isMainPage}
                variant="fancy"
                className="h-full"
                itemIndex={1}
              />
            </div>

            <div className="flex-grow relative">
              <div className="absolute bg-[#00BC8D] w-[72px] h-[72px] -right-[16px] -top-[16px]" />
              <NavigationCardLink
                {...navItems[2]}
                isMainPage={isMainPage}
                variant="fancy"
                className="relative h-full"
                itemIndex={2}
              />
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <NavigationCardLink {...navItems[3]} isMainPage={isMainPage} itemIndex={3} />
        </div>
      </section>
    );
  }

  return (
    <section className="flex flex-col gap-10">
      {title && <SectionTitle title={title} description={description} colorClass={colorClass} link={link} />}

      <div
        className={clsx("grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-8", {
          "sm:grid-cols-1 lg:grid-cols-3": navItems.length === 1,
          "lg:grid-cols-3": navItems.length % 3 === 0,
          "lg:grid-cols-4": navItems.length % 4 === 0,
          "lg:grid-cols-3 xl:grid-cols-5":
            navItems.length >= 5 && navItems.length % 3 !== 0 && navItems.length % 4 !== 0,
        })}
      >
        {navItems.map((article, index, items) => {
          const isLastItem = index === items.length - 1;

          if (lastItemEmbellishment && isLastItem) {
            return (
              <div className="relative" key={index}>
                <div className="hidden xl:block absolute bg-[#00C6EE] w-[152px] h-[72px] -right-[24px] -top-[42px]">
                  <div className="absolute bg-[#9AEA4A] w-4 h-4 right-4 top-4" />
                  <div className="absolute bg-[#9AEA4A] w-4 h-4 right-12 top-4" />
                  <div className="absolute bg-[#9AEA4A] w-4 h-4 right-20 top-4" />
                </div>

                <NavigationCardLink
                  key={index}
                  {...article}
                  isMainPage={isMainPage}
                  className="relative"
                  itemIndex={index}
                />
              </div>
            );
          }

          return <NavigationCardLink key={index} {...article} isMainPage={isMainPage} itemIndex={index} />;
        })}
      </div>
    </section>
  );
};
