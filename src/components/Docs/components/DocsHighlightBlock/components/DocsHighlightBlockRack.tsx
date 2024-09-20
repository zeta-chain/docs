import Link from "next/link";

import { DocsHighlightBlock } from "./DocsHighlightBlock";

export const DocsHighlightBlockRack = () => {
  return (
    <div className="grid md:grid-cols-3 gap-4 flex-row overflow-x-hidden mt-6">
      <Link href="/about">
        <DocsHighlightBlock
          icon={
            <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.0029 14.3515V17.0102H3.03479C3.18609 15.2604 3.75073 14.0292 5.70336 12.298L14.0029 5.21763V11.4308H16.9905V0H0.00223303V5.69784H2.98984V2.98761H12.0152L3.75621 10.0362L3.73645 10.0548C0.275209 13.1192 3.8147e-05 15.5926 3.8147e-05 18.5067V20H16.9916V14.3537H14.004L14.0029 14.3515Z"
                fill="white"
              />
            </svg>
          }
          title="What is ZetaChain?"
          description="Learn what ZetaChain is, why it exists, and what it unlocks."
        />
      </Link>

      <Link href="/about/token-utility/overview">
        <DocsHighlightBlock
          icon={
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="12" stroke="white" strokeWidth="2" />
              <path
                d="M19.3755 18.8737V20.6295H12.1325C12.2325 19.4739 12.6053 18.6609 13.8948 17.5177L19.3755 12.842V16.945H21.3484V9.39648H10.1299V13.1592H12.1029V11.3694H18.0629L12.6089 16.024L12.5959 16.0364C10.3102 18.06 10.1285 19.6933 10.1285 21.6177V22.6038H21.3492V18.8752H19.3762L19.3755 18.8737Z"
                fill="white"
              />
            </svg>
          }
          title="What is ZETA?"
          description="Learn about the functionality of ZETA, our native, omnichain utility coin."
        />
      </Link>

      <Link href="/developers/apps/intro">
        <DocsHighlightBlock
          icon={
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.66667 0V2.66667H7.33333V4.66667H4.66667V7.33333H2.66667V4.66667H0V2.66667H2.66667V0H4.66667ZM14.3333 4.16228L13.039 8.04527C12.4346 9.85833 11.0439 11.3015 9.25446 11.9726L6.51467 13L9.25446 14.0274C11.0439 14.6985 12.4346 16.1417 13.039 17.9547L14.3333 21.8377L15.6277 17.9547C16.232 16.1417 17.6228 14.6985 19.4122 14.0274L22.152 13L19.4122 11.9726C17.6228 11.3015 16.232 9.85833 15.6277 8.04527L14.3333 4.16228ZM11.1416 7.41281L13.3846 0.683772H15.282L17.525 7.41281C17.9385 8.65333 18.8901 9.64079 20.1145 10.0999L25.3511 12.0637V13.9363L20.1145 15.9001C18.8901 16.3592 17.9385 17.3467 17.525 18.5872L15.282 25.3162H13.3846L11.1416 18.5872C10.7281 17.3467 9.77657 16.3592 8.55221 15.9001L3.31554 13.9363V12.0637L8.55221 10.0999C9.77657 9.64079 10.7281 8.65333 11.1416 7.41281ZM6 18.6667V21.3333H8.66667V23.3333H6V26H4V23.3333H1.33333V21.3333H4V18.6667H6Z"
                fill="white"
              />
            </svg>
          }
          title="Start building"
          description="Write and deploy one contract to ZetaChain, access all chains"
        />
      </Link>
    </div>
  );
};
