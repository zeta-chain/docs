import Image from "next/image";
import React from "react";
import tw, { styled } from "twin.macro";

import { basePath } from "~/lib/app.constants";

const StyledUnorderedList = styled.ul`
  ${tw`list-none ml-5`}

  li {
    ${tw`mb-2 relative`}

    &::before {
      content: "";
      ${tw`absolute top-2.5 -left-5 w-1 h-1 bg-grey-400 dark:bg-grey-300 rounded-full block`}
    }
  }
`;

const pillars = [
  {
    title: "Chain Integrations",
    description: [
      {
        title: "Objective",
        description: "Expand the ecosystem by integrating additional blockchain networks.",
      },
      {
        title: "Chains to Integrate",
        description:
          "Chains such as Solana, Filecoin, Bitcoin ordinals/BRC20, Cosmos ecosystem via Inter-Blockchain Communication (IBC), various Layer 2 solutions (L2s), and others as determined by ecosystem needs.",
      },
      {
        title: "Approach",
        description:
          "Develop and implement secure and efficient protocols for cross-chain interoperability. Improve framework and architecture for new chain integrations modularly.",
      },
      {
        title: "Expected Outcome",
        description: "Increased network robustness and accessibility, attracting a wider user base.",
      },
      {
        title: "Challenges",
        description:
          "Cryptography (TSS for signature schemes other than ECDSA secp256k1 curve), heterogeneous blockchain model/parameters/interaction methods, potential problems with source of information that may not be efficiently/robustly available from standard full-node, speed and cost of considerations in relation to spam deterrence.",
      },
    ],
  },
  {
    title: "More dApp, Asset, and Transaction Types",
    description: [
      {
        title: "Objective",
        description:
          "Facilitate the creation and operation of diverse decentralized applications (dApps) and assets/standards.",
      },
      {
        title: "Key Features",
        description: (
          <StyledUnorderedList>
            <li>Arbitrary omnichain smart contract messaging to/from ZetaChain.</li>
            <li>ZRC-20 whitelisting automation and expanded onboarding process.</li>
            <li>ZRC20-like NFT support for omnichain smart contracts.</li>
            <li>BRC20/Ordinals support in omnichain smart contracts.</li>
            <li>Standardized interactions with connected chains beyond fungible tokens (ZRC20 model).</li>
          </StyledUnorderedList>
        ),
      },
      {
        title: "Expected Outcome",
        description:
          "A more vibrant and versatile ecosystem supporting a wider range of applications and assets that applications can orchestrate.",
      },
      {
        title: "Challenges",
        description:
          "Secure, simple, and efficient way to compose and interoperate different assets/contracts, standards on different chains.",
      },
    ],
  },
  {
    title: "Trust Model Improvement & Security",
    description: [
      {
        title: "Objective",
        description: "Enhance the trust model and security of the network.",
      },
      {
        title: "Strategies",
        description: (
          <StyledUnorderedList>
            <li>Shift from observation of inbound and outbound transactions to a proof-verification-based model.</li>
            <li>Reduce reliance on the assumption of 2/3 honest observers for external events.</li>
            <li>Improve observer/tss signer on-chain monitoring and incentives.</li>
            <li>Gradually increase decentralization and reduce central point of failures/control.</li>
            <li>
              Improve performance and reduce cost by utilizing zero-knowledge proof for validating external
              events/computations.
            </li>
          </StyledUnorderedList>
        ),
      },
      {
        title: "Expected Outcome",
        description:
          "Reduced operational costs, enhanced network security, and increased trustworthiness, and reduce single point of failure points.",
      },
      {
        title: "Challenges",
        description: "Incentives, decentralization, and security.",
      },
    ],
  },
  {
    title: "Performance and Robustness Improvement",
    description: [
      {
        title: "Objective",
        description: "Boost the network's efficiency and throughput.",
      },
      {
        title: "Key Areas",
        description: (
          <StyledUnorderedList>
            <li>Higher cross-chain Transactions Per Second (TPS).</li>
            <li>Lower resource consumption and storage requirements for validators.</li>
            <li>Increase awareness of network operation, error/exception handling and recovery.</li>
            <li>Performance and chaos engineering tooling to battle-test new protocol upgrades.</li>
          </StyledUnorderedList>
        ),
      },
      {
        title: "Expected Outcome",
        description:
          "A faster, more efficient, and reliable blockchain network capable of handling increased transaction volumes.",
      },
      {
        title: "Challenges",
        description:
          "Understanding the bottleneck, scaling issues, and tradeoffs between performance/storage efficiency vs verifiability of the network.",
      },
    ],
  },
  {
    title: "Omnichain dApp Developer Tooling, SDK, and Support",
    description: [
      {
        title: "Objective",
        description: "Provide superior tools and support to developers.",
      },
      {
        title: "Tools to Develop",
        description: (
          <StyledUnorderedList>
            <li>JavaScript/TypeScript SDKs, Telegram Bot SDK.</li>
            <li>Debugging tools.</li>
            <li>Cross-chain transaction simulation.</li>
            <li>
              Explorer/observability: especially better support for complex cross-chain dApps to expose the cross-chain
              sub-tx in an easy to understand way.
            </li>
          </StyledUnorderedList>
        ),
      },
      {
        title: "Expected Outcome",
        description: "Easier development process, leading to an influx of high-quality and more novel dApps.",
      },
      {
        title: "Challenges",
        description: "Understanding of dApp/frontend needs; diverse requirements and preferences from developers.",
      },
    ],
  },
  {
    title: "Taking Ownership of Key Dependencies",
    description: [
      {
        title: "Objective",
        description: "Improve key open-source dependencies.",
      },
      {
        title: "Key Areas",
        description: (
          <StyledUnorderedList>
            <li>
              Cosmos EVM: Enhance compatibility with Ethereum tooling, efficiency, and interoperability with EVM and
              Cosmos modules.
            </li>
            <li>TSS-lib & Go-TSS: Improve security, performance, and support for new signature schemes and chains.</li>
          </StyledUnorderedList>
        ),
      },
      {
        title: "Expected Outcome",
        description:
          "A more reliable and versatile ecosystem, facilitating smoother operations and integration. A growing community of open source contributors for each projects.",
      },
      {
        title: "Challenges",
        description:
          "Large code base to develop and maintain, upstreaming strategy and working with other teams that share substantial amount of code.",
      },
    ],
  },
];

export const RoadmapPillars: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 sm:gap-10">
      <h3 className="text-xl sm:text-2xl tracking-[-0.48px] font-medium text-black dark:text-white">
        Potential Key Development Roadmap Pillars
      </h3>

      <div className="flex justify-center rounded-lg border border-grey-200 dark:border-grey-800 dark:bg-grey-800 mb-2 sm:mb-14">
        <Image
          src={`${basePath}/img/pages/protocol-roadmap.svg`}
          alt="Protocol Roadmap"
          width={1168}
          height={657}
          className="w-auto sm:w-full !rounded-none !mt-0 max-h-[300px] sm:max-h-[unset] sm:max-w-[1168px] block dark:hidden"
        />

        <Image
          src={`${basePath}/img/pages/protocol-roadmap-dark.svg`}
          alt="Protocol Roadmap"
          width={1168}
          height={657}
          className="w-auto sm:w-full !rounded-none !mt-0 max-h-[300px] sm:max-h-[unset] sm:max-w-[1168px] hidden dark:block"
        />
      </div>

      <div className="flex flex-col gap-10 sm:gap-24">
        {pillars.map((pillar, index) => (
          <div key={pillar.title} className="grid grid-cols-10 sm:gap-6 xl:gap-8">
            <div className="col-span-10 xl:col-span-1">
              <h4 className="text-lg sm:text-2xl tracking-[-0.48px] font-medium">Pillar {index + 1}</h4>
            </div>

            <div className="col-span-10 xl:col-span-9 flex flex-col gap-6">
              <h4 className="text-lg sm:text-2xl tracking-[-0.48px] font-medium">{pillar.title}</h4>

              <div className="grid grid-cols-9 gap-2 sm:gap-6">
                {pillar.description.map((desc) => (
                  <React.Fragment key={desc.title}>
                    <div className="col-span-9 sm:col-span-2">
                      <h5 className="text-base font-semibold">{desc.title}</h5>
                    </div>

                    <div className="col-span-9 sm:col-span-7">
                      <div className="text-base text-grey-400 dark:text-grey-300">{desc.description}</div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
