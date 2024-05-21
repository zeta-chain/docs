import { ArticleNavigation } from "../../ArticleNavigation";

export const GetStarted: React.FC = () => {
  return (
    <ArticleNavigation
      title="Get Started"
      description="Dive into the basics of ZetaChain"
      articles={[
        {
          title: "What is ZetaChain?",
          description: "Learn about the unparalleled blockchain enabling omnichain.",
          href: "/about",
          read: {
            time: "5 min",
            type: "Beginner",
          },
        },
        {
          title: "Install the CLI",
          description: "Learn how to install a tool that allows you to interact with the ZetaChain network.",
          href: "/developers/cli/setup",
          read: {
            time: "5 min",
            type: "Beginner",
          },
        },
        {
          title: "Smart Contract Templates",
          description: "Short description about this article that is at a maximum three lines.",
          href: "/developers/template",
          read: {
            time: "5 min",
            type: "Beginner",
          },
        },
        {
          title: "Omnichain Contracts",
          description:
            "Omnichain Smart Contracts are contracts deployed on ZetaChain that can use and orchestrate assets on connected chains, as well as on ZetaChain.",
          href: "/developers/omnichain/overview",
          read: {
            time: "5 min",
            type: "Beginner",
          },
        },
        {
          title: "Cross-Chain Messaging",
          description:
            "Cross-chain messaging makes the most sense for applications that generally need minimal logic or state to maintain across all chains.",
          href: "/developers/cross-chain-messaging/overview",
          read: {
            time: "5 min",
            type: "Beginner",
          },
        },
      ]}
    />
  );
};
