import Link from "next/link";
import { PropsWithChildren } from "react";

const CHAIN_PAGE_MAPPING = {
  bitcoin: "/developers/chains/bitcoin/",
  solana: "/developers/chains/solana/",
  evm: "/developers/chains/evm/",
  sui: "/developers/chains/sui/",
} as const;

type ChainPage = keyof typeof CHAIN_PAGE_MAPPING;

type ChainSvgLinkWrapperProps = PropsWithChildren<{
  chainPage: ChainPage;
}>;

export const ChainSvgLinkWrapper: React.FC<ChainSvgLinkWrapperProps> = ({ chainPage, children }) => {
  const href = CHAIN_PAGE_MAPPING[chainPage];
  return (
    <Link href={href} target="_blank" className="w-8 h-8 md:w-20 md:h-20">
      {children}
    </Link>
  );
};
