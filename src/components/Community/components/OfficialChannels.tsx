import {
  IconDiscord,
  IconGitHub,
  IconMedium,
  IconReddit,
  IconTelegram,
  IconTwitter,
  IconYouTube,
  NavigationCardLink,
  NavigationCardLinkProps,
  SectionTitle,
} from "~/components/shared";
import { globalLinks } from "~/constants";

const mainChannels: NavigationCardLinkProps[] = [
  {
    title: "Telegram",
    description: "Keep up with the latest announcements.",
    href: globalLinks.telegramLink,
    icon: <IconTelegram />,
  },
  {
    title: "Twitter",
    description: "Keep up with the latest announcements.",
    href: globalLinks.twitterLink,
    icon: <IconTwitter />,
  },
  {
    title: "Medium",
    description: "Keep up with the latest announcements.",
    href: globalLinks.mediumLink,
    icon: <IconMedium />,
  },
];

const otherChannels: NavigationCardLinkProps[] = [
  {
    title: "Discord",
    description: "Announcements, Q&A and community support.",
    href: globalLinks.discordLink,
    icon: <IconDiscord />,
  },
  {
    title: "YouTube",
    description: "Announcements, tutorials, conversations and more.",
    href: globalLinks.youTubeLink,
    icon: <IconYouTube />,
  },
  {
    title: "Reddit",
    description: "Announcements, Q&A and community conversation.",
    href: globalLinks.redditLink,
    icon: <IconReddit />,
  },
  {
    title: "GitHub",
    description: "Build with ZetaChain.",
    href: globalLinks.githubLink,
    icon: <IconGitHub />,
  },
];

export const OfficialChannels = () => {
  return (
    <div className="flex flex-col gap-10">
      <SectionTitle
        title="Official Channels"
        description="ZetaChain’s official social channels for news, announcements and more"
      />

      <div className="flex flex-col gap-5 lg:gap-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8">
          {mainChannels.map((item, index) => (
            <NavigationCardLink
              key={index}
              {...item}
              className="sm:h-auto lg:h-[200px]"
              target="_blank"
              isMainPage
              withMetaProps={false}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
          {otherChannels.map((item, index) => (
            <NavigationCardLink
              key={index}
              {...item}
              className="sm:h-auto lg:h-[200px]"
              target="_blank"
              isMainPage
              withMetaProps={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
