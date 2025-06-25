import { VideoCard as VideoCardProps, VIDEOS_CARDS } from "../Home.constants";
import { ClockSvg } from "./svg/ClockSvg";

const VideoCard: React.FC<VideoCardProps> = ({ href, title, description, readTime, readType }) => {
  return (
    <div className="flex flex-col basis-full md:basis-1/2">
      <div className="aspect-[568/319] w-full rounded-lg overflow-hidden mb-4">
        <iframe
          className="w-full h-full"
          width="100%"
          height="100%"
          src={`${href}?controls=1&modestbranding=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-[20px] leading-[130%] font-medium text-grey-900 dark:text-grey-50">{title}</h3>
          <p className="text-[16px] leading-[130%] font-normal text-grey-400 dark:text-grey-300">{description}</p>
        </div>
        <div className="flex justify-between items-center md:flex-col gap-2 md:items-end md:justify-start shrink-0">
          <span className="text-[14px] leading-[135%] font-medium text-grey-900 dark:text-grey-50">{readType}</span>
          <div className="flex items-center gap-1 shrink-0">
            <ClockSvg />
            <span className="text-[14px] leading-[135%] font-normal text-grey-900 dark:text-grey-50">{readTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const VideosSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-14 md:gap-8 px-5 md:px-[72px] pt-10 pb-16 md:pt-14 md:pb-20 max-w-[1312px] mx-auto">
      {VIDEOS_CARDS.map((card) => (
        <VideoCard key={card.href} {...card} />
      ))}
    </div>
  );
};
