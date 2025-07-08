import { useMediaQuery } from "@mui/material";
import chroma from "chroma-js";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import { EcosystemEvents } from "~/generated/contentful.graphql.types";

import { getRevealProps } from "../../../../lib/helpers/animations";

/**
 * Returns the text color that should be used for the card based on the base color
 * @param baseColor The base color of the card
 * @returns The text color that should be used for the card based on the base color (either white or black)
 */
const getContrastColor = (baseColor: string): "#ffffff" | "#000000" => {
  const isWhiteText = chroma.contrast(baseColor, "#ffffff") > 2; // when the baseColor is white the contrast is 1, and other colors get higher
  return isWhiteText ? "#ffffff" : "#000000";
};

export const Slide: React.FC<{
  slide: EcosystemEvents;
  isActive: boolean;
}> = ({ slide, isActive }) => {
  const isDesktopView = useMediaQuery("(min-width: 768px)");

  const image = !isDesktopView ? slide.mobileBackgroundImage : slide.backgroundImage;
  const pillBgColor = slide.pillColor || "rgba(21, 25, 30, 0.30)";
  const pillTextColor = getContrastColor(pillBgColor);

  return (
    <div
      key={slide.sys.id}
      className={clsx("w-full relative border border-grey-200 dark:border-grey-700 xl:pb-0 rounded-lg", {
        hidden: !isActive,
        block: isActive,
        "h-[464px]": isDesktopView,
      })}
      style={{ background: slide.backgroundColor || "#000", color: slide.textColor || "#fff" }}
    >
      <div className="flex z-10 flex-col md:flex-row relative items-end md:gap-14 rounded-lg">
        <div className="flex w-full pt-8 md:pt-10 px-6 md:px-10 flex-col flex-shrink-0 justify-between items-start self-stretch">
          <motion.div
            {...getRevealProps({
              delay: 0,
            })}
          >
            {slide.logo && (
              <Image
                fetchPriority="high"
                className="pointer-events-none !m-0 !mb-8 !rounded-none"
                src={slide.logo.url!}
                width={slide.logo.width!}
                height={slide.logo.height!}
                alt={slide.title!}
              />
            )}
            <motion.div
              {...getRevealProps({
                delay: 0.1,
              })}
              className="flex flex-col items-start self-stretch"
            >
              <div className="title max-w-[400px] text-[32px] md:text-[36px] font-medium leading-[110%] tracking-[-0.64px] md:tracking-[-0.72px] mb-[7px] md:mb-2">
                {slide.title}
              </div>
            </motion.div>

            <div className="flex gap-2 whitespace-nowrap flex-wrap w-full">
              {/* Date & time */}
              <motion.div
                {...getRevealProps({
                  delay: 0.15,
                })}
                style={{
                  background: pillBgColor,
                  color: pillTextColor,
                }}
                className="w-fit px-4 py-2 rounded-full text-xs flex items-center gap-1"
              >
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.73438 3.19531C5.69681 3.19531 3.23438 5.65775 3.23438 8.69531C3.23438 11.7329 5.69681 14.1953 8.73438 14.1953C11.7719 14.1953 14.2344 11.7329 14.2344 8.69531C14.2344 5.65775 11.7719 3.19531 8.73438 3.19531ZM2.23438 8.69531C2.23438 5.10546 5.14452 2.19531 8.73438 2.19531C12.3242 2.19531 15.2344 5.10546 15.2344 8.69531C15.2344 12.2852 12.3242 15.1953 8.73438 15.1953C5.14452 15.1953 2.23438 12.2852 2.23438 8.69531ZM9.23438 5.52865V8.48821L11.4415 10.6953L10.7344 11.4024L8.38082 9.04887C8.28705 8.9551 8.23438 8.82792 8.23438 8.69531V5.52865H9.23438Z"
                    className="fill-current"
                  />
                </svg>

                <span>{slide.date}</span>

                {(slide.startTime || slide.endTime) && (
                  <svg
                    className="mx-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="2"
                    height="14"
                    viewBox="0 0 2 14"
                    fill="none"
                  >
                    <path d="M0.734375 0.695312V12.6953" stroke="white" strokeOpacity="0.4" strokeLinecap="round" />
                  </svg>
                )}

                {slide.startTime && <span>{slide.startTime}</span>}
                {slide.startTime && slide.endTime && <span>-</span>}
                {slide.endTime && <span>{slide.endTime}</span>}
              </motion.div>

              {/* Location */}
              <motion.div
                {...getRevealProps({
                  delay: 0.2,
                })}
                style={{
                  background: pillBgColor,
                  color: pillTextColor,
                }}
                className="w-fit px-4 py-2 rounded-full text-xs flex items-center gap-1"
              >
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_908_65191)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.1524 4.61096C10.2648 2.72343 7.20455 2.72343 5.31702 4.61096C3.42948 6.4985 3.42948 9.55879 5.31702 11.4463L8.7347 14.864L12.1524 11.4463C14.0399 9.55879 14.0399 6.4985 12.1524 4.61096ZM8.7347 15.5711L8.38112 15.9246L4.60991 12.1534C2.33185 9.87538 2.33185 6.18191 4.60991 3.90386C6.88797 1.6258 10.5814 1.6258 12.8595 3.90386C15.1375 6.18191 15.1375 9.87538 12.8595 12.1534L9.09353 15.9194L9.08829 15.9246L8.7347 15.5711ZM8.7347 15.5711L9.08829 15.9246C8.89302 16.1199 8.57638 16.1199 8.38112 15.9246L8.7347 15.5711ZM8.7347 6.52865C7.90627 6.52865 7.2347 7.20022 7.2347 8.02865C7.2347 8.85707 7.90627 9.52865 8.7347 9.52865C9.56313 9.52865 10.2347 8.85707 10.2347 8.02865C10.2347 7.20022 9.56313 6.52865 8.7347 6.52865ZM6.2347 8.02865C6.2347 6.64793 7.35399 5.52865 8.7347 5.52865C10.1154 5.52865 11.2347 6.64793 11.2347 8.02865C11.2347 9.40936 10.1154 10.5286 8.7347 10.5286C7.35399 10.5286 6.2347 9.40936 6.2347 8.02865Z"
                      className="fill-current"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_908_65191">
                      <rect width="16" height="16" className="fill-current" transform="translate(0.734375 0.695312)" />
                    </clipPath>
                  </defs>
                </svg>

                <span>{slide.location}</span>
              </motion.div>
            </div>

            <motion.div
              {...getRevealProps({
                delay: 0.25,
              })}
              className="self-stretch text-[14px] leading-[135%] max-w-[280px] my-[24px]"
            >
              {slide.description}
            </motion.div>

            {slide.link && (
              <motion.a
                {...getRevealProps({ delay: 0.3 })}
                href={slide.link!}
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer w-full h-fit text-[16px] font-medium leading-[130%]"
                style={{
                  color: slide.textColor || "#fff",
                }}
              >
                {slide.linkLabel}
              </motion.a>
            )}
          </motion.div>
        </div>
      </div>

      <motion.div
        key={image?.url}
        {...getRevealProps({
          delay: 0.35,
        })}
        className={clsx("flex pt-[27.7px]", {
          "absolute bottom-0": isDesktopView,
          "relative items-end": !isDesktopView,
        })}
        style={{ width: "100%" }}
      >
        {image && (
          <Image
            src={image.url!}
            className="group-hover:scale-[105%] transition-transform duration-500 ease-in-out !m-0"
            width={image.width!}
            height={image.height!}
            alt=""
            layout="responsive"
          />
        )}
      </motion.div>
    </div>
  );
};
