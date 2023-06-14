import React from "react";
import { SocialButton } from "./SocialButton";
import { FaDiscord, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import constants from "../../constants";

export const SocialButtonsRack = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <SocialButton
        headerTitle="Discord"
        headerIcon={<FaDiscord />}
        link={constants.discordLink}
      />
      <SocialButton
        headerTitle="Telegram"
        headerIcon={<FaTelegramPlane />}
        link={constants.telegramLink}
      />
      <SocialButton
        headerTitle="Twitter"
        headerIcon={<FaTwitter />}
        link={constants.twitterLink}
      />
      <SocialButton
        headerTitle="Medium"
        headerIcon={
          <svg
            width="32"
            height="18"
            viewBox="0 0 32 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.3469 8.99967C18.3469 13.7826 14.3983 17.6663 9.50679 17.6663C4.61525 17.6663 0.666664 13.7826 0.666664 8.99967C0.666664 4.21674 4.61525 0.333008 9.50679 0.333008C14.3983 0.333008 18.3469 4.21674 18.3469 8.99967ZM28.0318 8.99967C28.0318 13.4956 26.0476 17.1498 23.6117 17.1498C21.1758 17.1498 19.1916 13.4956 19.1916 8.99967C19.1916 4.50372 21.1758 0.849561 23.6117 0.849561C26.0476 0.849561 28.0318 4.48459 28.0318 8.99967ZM32 8.99967C32 13.0365 31.3124 16.308 30.4481 16.308C29.5837 16.308 28.8961 13.0365 28.8961 8.99967C28.8961 4.96288 29.5837 1.69136 30.4481 1.69136C31.3124 1.69136 32 4.96288 32 8.99967Z"
              fill="currentColor"
            />
          </svg>
        }
        link={constants.blogUrl}
      />
    </div>
  );
};
