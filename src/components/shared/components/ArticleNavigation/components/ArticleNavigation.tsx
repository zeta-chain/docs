import { ArticleNavigationCard, ArticleNavigationCardProps } from "./ArticleNavigationCard";
import { ArticleNavigationTitle, ArticleNavigationTitleProps } from "./ArticleNavigationTitle";

type ArticleNavigationProps = ArticleNavigationTitleProps & {
  articles: ArticleNavigationCardProps[];
};

export const ArticleNavigation: React.FC<ArticleNavigationProps> = ({ title, description, colorClass, articles }) => {
  return (
    <div className="flex flex-col gap-10">
      <ArticleNavigationTitle title={title} description={description} colorClass={colorClass} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-6 lg:gap-7 xl:gap-8">
        {articles.map((article, index) => (
          <ArticleNavigationCard key={index} {...article} />
        ))}
      </div>
    </div>
  );
};
