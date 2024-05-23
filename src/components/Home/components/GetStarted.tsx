import { NavigationSection } from "~/components/shared";

export const GetStarted: React.FC = () => {
  return (
    <NavigationSection
      title="Get Started"
      description="Dive into the basics of ZetaChain"
      navItems={[
        {
          title: "What is ZetaChain?",
          description: "Learn about the unparalleled blockchain enabling omnichain.",
          href: "/about",
          readTime: "5 min",
          readType: "Beginner",
        },
        {
          title: "Install the CLI",
          description: "Learn how to install a tool that allows you to interact with the ZetaChain network.",
          href: "/developers/cli/setup",
          readTime: "5 min",
          readType: "Beginner",
        },
        {
          title: "Smart Contract Template",
          description:
            "ZetaChain comes with a smart contract template that makes it easy to get started building dapps.",
          href: "/developers/template",
          readTime: "5 min",
          readType: "Beginner",
        },
        {
          title: "Omnichain Contracts",
          description:
            "Omnichain Smart Contracts are contracts deployed on ZetaChain that can use and orchestrate assets on connected chains, as well as on ZetaChain.",
          href: "/developers/omnichain/overview",
          readTime: "5 min",
          readType: "Beginner",
        },
        {
          title: "Cross-Chain Messaging",
          description:
            "Cross-chain messaging makes the most sense for applications that generally need minimal logic or state to maintain across all chains.",
          href: "/developers/cross-chain-messaging/overview",
          readTime: "5 min",
          readType: "Beginner",
        },
      ]}
    />
  );
};
