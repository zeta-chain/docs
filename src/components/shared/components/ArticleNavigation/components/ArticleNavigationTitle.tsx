import clsx from "clsx";

export type ArticleNavigationTitleProps = {
  title: string;
  description?: string;
  colorClass?: string;
};

export const ArticleNavigationTitle: React.FC<ArticleNavigationTitleProps> = ({ title, description, colorClass }) => {
  return (
    <div className="flex flex-col gap-1 sm:gap-2">
      <div
        className={clsx(
          "h-[3px] rounded-full w-8 relative -left-[1px] -top-[1px]",
          {
            "bg-green-200": !colorClass,
          },
          colorClass
        )}
      />
      <h2 className="text-2xl sm:text-4xl tracking-[-0.64px] font-medium text-black dark:text-white">{title}</h2>
      {description && <p className="text-base text-grey-400 dark:text-grey-300">{description}</p>}
    </div>
  );
};
