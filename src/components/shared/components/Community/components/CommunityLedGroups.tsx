import Link from "next/link";

import { ArticleNavigationTitle } from "../../ArticleNavigation";
import { IconTelegram, IconTwitter } from "../../Icons";

const communityGroups = [
  {
    name: "African",
    twitter: "https://twitter.com/ZetaChain_AFR",
  },
  {
    name: "Brazilian",
    twitter: "https://twitter.com/ZetaChain_BRA",
  },
  {
    name: "Chinese",
    twitter: "https://twitter.com/ZetaChain_CH",
    telegram: "https://t.me/zetachain_asia",
  },
  {
    name: "Commonwealth of Independent States",
    twitter: "https://twitter.com/ZetaChain_CIS",
    telegram: "https://t.me/zeta_chain_cis",
  },
  {
    name: "Filipino",
    twitter: "https://twitter.com/ZetaChain_Fil",
  },
  {
    name: "French",
    twitter: "https://twitter.com/ZetaChain_Frnch",
    telegram: "https://t.me/zetachain_fr",
  },
  {
    name: "German",
    twitter: "https://twitter.com/ZetaChain_Germn",
    telegram: "https://t.me/ZetaChainGerman",
  },
  {
    name: "Hindi",
    twitter: "https://twitter.com/ZetaChain_Hindi",
  },
  {
    name: "Indonesian",
    twitter: "https://twitter.com/ZetaChain_IDN",
  },
  {
    name: "Italian",
    twitter: "https://twitter.com/ZetaChain_IT",
  },
  {
    name: "Japanese",
    twitter: "https://twitter.com/ZetaChainJP",
  },
  {
    name: "Korean",
    twitter: "https://twitter.com/ZetaChain_KR",
    telegram: "https://t.me/ZetaChainKR",
  },
  {
    name: "Spanish",
    twitter: "https://twitter.com/ZetaChain_Spnsh",
  },
  {
    name: "Turkish",
    twitter: "https://twitter.com/ZetaChainTR",
  },
  {
    name: "Ukrainian",
    twitter: "https://twitter.com/ZetaChain_UA",
  },
  {
    name: "Vietnamese",
    twitter: "https://twitter.com/ZetaChain_VIE",
    telegram: "https://t.me/ZetaChainViet",
  },
];

export const CommunityLedGroups: React.FC = () => {
  return (
    <div className="flex flex-col gap-10">
      <ArticleNavigationTitle
        title="Community-led Groups"
        description="Social channels run the by the community for support, local events, news and more"
        colorClass="bg-[#00C6EE]"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8">
        {communityGroups.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-6 sm:min-h-[192px] p-3 sm:p-6 justify-between items-start rounded-lg border border-grey-200 dark:border-grey-600"
          >
            <h3 className="text-xl font-medium text-black dark:text-white">{item.name}</h3>

            <div className="flex gap-4 flex-wrap">
              {item.twitter && (
                <Link
                  href={item.twitter}
                  target="_blank"
                  className="bg-grey-200 hover:bg-grey-100 dark:bg-grey-800 hover:dark:bg-grey-700 rounded-lg p-3.5 transition-all"
                >
                  <IconTwitter className="text-green-200 dark:text-green-100 w-7 h-7" />
                </Link>
              )}

              {item.telegram && (
                <Link
                  href={item.telegram}
                  target="_blank"
                  className="bg-grey-200 hover:bg-grey-100 dark:bg-grey-800 hover:dark:bg-grey-700 rounded-lg p-3.5 transition-all"
                >
                  <IconTelegram className="text-green-200 dark:text-green-100 w-7 h-7" />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
