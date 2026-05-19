import { FadeLeftSvg, FadeRightSvg } from "./svg/BuildForNowSvgs";
import { ChatGPTSvg, ClaudeSvg, DeepSeekSvg, GeminiSvg, GrokSvg, KimiSvg, QwenSvg } from "./svg/ModelSvgs";

export const BuildForNow = () => {
  return (
    <div className="py-16 md:py-20 max-w-[1312px] mx-auto">
      <div className="flex flex-col px-5 md:px-[72px]">
        <div className="order-2 md:order-1">
          <h2 className="text-[32px] md:text-[36px] leading-[110%] tracking-[-0.64px] md:tracking-[-0.72px] font-medium text-grey-900 dark:text-grey-50 mb-2 text-center">
            The foundation <br className="block md:hidden" /> for AI apps
          </h2>

          <p className="text-[16px] leading-[160%] font-normal text-grey-400 dark:text-grey-300 text-center mb-8">
            Multi-model, memory, and production primitives in one SDK.
          </p>

          <div className="flex flex-col items-center">
            <div className="w-8 h-[3px] rounded-full bg-[#00C6EE] mx-auto" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mt-10 order-3 md:order-2">
          <div className="basis-full md:basis-1/3 flex justify-center">
            <div className="md:max-w-[320px]">
              <h3 className="text-[18px] font-medium text-grey-900 dark:text-grey-50 mb-2">One API, every model</h3>
              <p className="text-[16px] leading-[160%] font-normal text-grey-400 dark:text-grey-300">
                Plug into OpenAI, Anthropic, Google, xAI, DeepSeek, and more through a single SDK. Switch providers
                without rewriting your app.
              </p>
            </div>
          </div>

          <div className="basis-full md:basis-1/3 flex justify-center">
            <div className="md:max-w-[320px]">
              <h3 className="text-[18px] font-medium text-grey-900 dark:text-grey-50 mb-2">
                Memory that travels with the user
              </h3>
              <p className="text-[16px] leading-[160%] font-normal text-grey-400 dark:text-grey-300">
                Encrypted, persistent memory follows users across sessions, models, and devices. No vector DB, no RAG
                pipeline, no account system to wire up.
              </p>
            </div>
          </div>

          <div className="basis-full md:basis-1/3 flex justify-center">
            <div className="md:max-w-[320px]">
              <h3 className="text-[18px] font-medium text-grey-900 dark:text-grey-50 mb-2">
                Ship features, not infrastructure
              </h3>
              <p className="text-[16px] leading-[160%] font-normal text-grey-400 dark:text-grey-300">
                Streaming, tools, agents, and conversation management are built in. Get from prototype to production
                without the plumbing.
              </p>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-3 md:mt-[78px] w-full flex justify-center items-center gap-3 md:gap-6 lg:gap-8 relative max-w-[350px] md:max-w-[928px] mx-auto px-[15px] md:px-10 mb-10 md:mb-0 overflow-x-clip">
          <FadeLeftSvg />
          <ChatGPTSvg />
          <ClaudeSvg />
          <GeminiSvg />
          <GrokSvg />
          <DeepSeekSvg />
          <KimiSvg />
          <QwenSvg />
          <FadeRightSvg />
        </div>
      </div>
    </div>
  );
};
