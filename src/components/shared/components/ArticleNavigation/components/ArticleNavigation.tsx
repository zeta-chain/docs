import clsx from "clsx";

import { SectionTitle, SectionTitleProps } from "../../SectionTitle";
import { ArticleNavigationCard, ArticleNavigationCardProps } from "./ArticleNavigationCard";

type ArticleNavigationProps = SectionTitleProps & {
  articles: ArticleNavigationCardProps[];
};

export const ArticleNavigation: React.FC<ArticleNavigationProps> = ({
  title,
  description,
  colorClass,
  link,
  articles,
}) => {
  return (
    <div className="flex flex-col gap-10">
      <SectionTitle title={title} description={description} colorClass={colorClass} link={link} />

      <div
        className={clsx("grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-8", {
          "sm:grid-cols-1 lg:grid-cols-3": articles.length === 1,
          "lg:grid-cols-3": articles.length % 3 === 0,
          "lg:grid-cols-4": articles.length % 4 === 0,
          "lg:grid-cols-3 xl:grid-cols-5":
            articles.length >= 5 && articles.length % 3 !== 0 && articles.length % 4 !== 0,
        })}
      >
        {articles.map((article, index) => (
          <ArticleNavigationCard key={index} {...article} />
        ))}
      </div>
    </div>
  );
};
