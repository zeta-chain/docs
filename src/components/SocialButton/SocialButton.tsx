import React from "react";
import clsx from "clsx";

export const SocialButton: React.FC<{
  className?: string;
  headerTitle: string;
  link: string;
  headerIcon: React.ReactNode;
}> = ({ headerTitle, link, headerIcon }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={clsx(
        "flex w-full p-7 justify-between font-roobert rounded-md items-center hover:text-white hover:scale-[102%] transition-all text-white",
        {
          "bg-[#69ACE0]": headerTitle === "Twitter",
          "bg-[#7289DA]": headerTitle === "Discord",
          "bg-[#000000] dark:bg-white dark:text-black": headerTitle === "Medium",
          "bg-[#38B0E3]": headerTitle === "Telegram",
        }
      )}
    >
      <div className="text-xl">{headerIcon}</div>

      <div className="flex items-center gap-[9.25px]">
        <div className="text-xl">{headerTitle}</div>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.25 0.25H17.75V7.75H16.25V2.81066L7 12.0607L5.93934 11L15.1893 1.75H10.25V0.25ZM0.25 2.25H7.75V3.75H1.75V15C1.75 15.6904 2.30964 16.25 3 16.25H14.25V10.25H15.75V17.75H3C1.48122 17.75 0.25 16.5188 0.25 15V2.25Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </a>
  );
};
