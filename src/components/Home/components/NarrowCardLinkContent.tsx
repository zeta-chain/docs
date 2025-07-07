interface NarrowCardLinkContentProps {
  svg: React.ReactNode;
  title: string;
  description: string;
}

export const NarrowCardLinkContent: React.FC<NarrowCardLinkContentProps> = ({ svg, title, description }) => {
  return (
    <>
      <div className="w-12 h-12 flex items-center justify-center rounded-md">{svg}</div>

      <div className="flex flex-col">
        <h3 className="text-[18px] md:text-[20px] leading-[130%] font-medium text-grey-900 dark:text-grey-50">
          {title}
        </h3>

        <p className="text-[16px] leading-[130%] font-normal text-grey-400 dark:text-grey-300">{description}</p>
      </div>
    </>
  );
};
