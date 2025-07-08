import { Skeleton } from "@mui/material";
import { useMemo, useState } from "react";

import { VideoCard as VideoCardProps, VIDEOS_CARDS } from "../Home.constants";
import { ClockSvg } from "./svg/ClockSvg";

// YouTube video ID extraction helper
const getYouTubeVideoId = (url: string): string | null => {
  const match = url.match(/(?:youtube\.com\/embed\/|youtu\.be\/|youtube\.com\/watch\?v=)([^&\n?#]+)/);
  return match ? match[1] : null;
};

// YouTube high-quality thumbnail URL generator
const getYouTubeThumbnail = (videoId: string, quality: "maxresdefault" | "hqdefault" = "maxresdefault"): string => {
  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
};

const VideoCard: React.FC<VideoCardProps> = ({ href, title, description, readTime, readType }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const videoId = getYouTubeVideoId(href);

  const videoDescription = useMemo(
    () => (
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
    ),
    [title, description, readType, readTime]
  );

  if (!videoId) {
    // Fallback to iframe if not a valid YouTube URL
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

        {videoDescription}
      </div>
    );
  }

  const thumbnailUrl = getYouTubeThumbnail(videoId);
  const fallbackThumbnailUrl = getYouTubeThumbnail(videoId, "hqdefault");

  return (
    <div className="flex flex-col basis-full md:basis-1/2">
      <div className="aspect-[568/319] w-full rounded-lg overflow-hidden mb-4 relative">
        {!isPlaying ? (
          <>
            {/* High-quality thumbnail with fallback */}
            <img
              src={thumbnailUrl}
              alt={title}
              className="w-full h-full object-cover !m-0"
              onError={(e) => {
                // Fallback to hqdefault if maxresdefault fails
                const target = e.target as HTMLImageElement;
                if (target.src !== fallbackThumbnailUrl) {
                  target.src = fallbackThumbnailUrl;
                }
              }}
            />

            {/* Play button overlay */}
            <button
              onClick={() => {
                setIsLoading(true);
                setIsPlaying(true);
              }}
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-[0.35] hover:bg-opacity-40 hover:dark:bg-opacity-30 transition-all duration-200 group"
              aria-label={`Play ${title}`}
            >
              <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
                <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M26.1666 13.902C28.1666 15.0567 28.1666 17.9435 26.1666 19.0982L12.0726 27.2353C10.0726 28.39 7.57262 26.9467 7.57262 24.6373L7.57262 8.3629C7.57262 6.05349 10.0726 4.61012 12.0726 5.76482L26.1666 13.902Z"
                    fill="white"
                  />
                </svg>
              </div>
            </button>
          </>
        ) : (
          <>
            {/* Loading skeleton */}
            {isLoading && (
              <div className="absolute inset-0 z-10">
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height="100%"
                  className="rounded-lg bg-grey-200 dark:bg-grey-600"
                />
              </div>
            )}
            {/* Iframe */}
            <iframe
              className="w-full h-full"
              width="100%"
              height="100%"
              src={`${href}?controls=1&modestbranding=1&rel=0&autoplay=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={() => setIsLoading(false)}
            />
          </>
        )}
      </div>

      {videoDescription}
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
