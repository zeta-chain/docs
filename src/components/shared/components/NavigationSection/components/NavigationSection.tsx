import clsx from "clsx";

import { SectionTitle, SectionTitleProps } from "../../SectionTitle";
import { NavigationCardLink, NavigationCardLinkProps } from "./NavigationCardLink";

type NavigationSectionProps = Omit<SectionTitleProps, "title"> & {
  title?: string;
  navItems: NavigationCardLinkProps[];
};

export const NavigationSection: React.FC<NavigationSectionProps> = ({
  title,
  description,
  colorClass,
  link,
  navItems,
}) => {
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
        {navItems.map((article, index) => (
          <NavigationCardLink key={index} {...article} />
        ))}
      </div>
    </section>
  );
};
