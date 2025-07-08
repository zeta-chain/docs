import clsx from "clsx";
import { sortBy } from "lodash-es";
import React, { useMemo, useState } from "react";
import { useSwipeable } from "react-swipeable";

import { EcosystemEvents } from "~/generated/contentful.graphql.types";

import { HeroIconArrowLeft } from "../svg/HeroIconArrowLeft";
import { HeroIconArrowRight } from "../svg/HeroIconArrowRight";
import { Slide } from "./Slide";
import { SlideItemsIndicator } from "./SlideItemsIndicator";

export const EcosystemCarousel: React.FC<{
  ecosystemEvents: EcosystemEvents[];
  className?: string;
}> = ({ ecosystemEvents, className }) => {
  const [active, setActive] = useState(1);

  const sortedEcosystemEvents = useMemo(() => sortBy(ecosystemEvents, ["order"], ["desc"]), [ecosystemEvents]);

  const prev = () => {
    const prevSlide = active > 1 ? active - 1 : sortedEcosystemEvents.length;
    setActive(prevSlide);
  };

  const next = () => {
    const nextSlide = active < sortedEcosystemEvents.length ? active + 1 : 1;
    setActive(nextSlide);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => next(),
    onSwipedRight: () => prev(),
    trackMouse: true, // optional: allows mouse events to trigger swipe
  });

  return (
    <section className={clsx("flex lg:max-w-[568px] h-fit select-none items-center justify-center", className)}>
      <div className="w-full scrollbar-hidden h-fit mx-auto box-border">
        {/* Slides */}
        <div {...handlers} className="relative w-full h-fit">
          <div className="overflow-hidden rounded-lg">
            {sortedEcosystemEvents.map((slide, index) => (
              <Slide key={slide.sys.id} isActive={active === index + 1} slide={slide} />
            ))}
          </div>

          {sortedEcosystemEvents.length > 1 && (
            <>
              <div className="h-fit absolute z-50 justify-between w-full top-1/2 transform -translate-y-1/2 hidden md:flex">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous slide"
                  className="transform -translate-x-1/2 bg-white dark:bg-grey-600 text-black dark:text-white h-14 w-14 p-5 rounded-[100px] justify-center items-center inline-flex"
                  style={{
                    boxShadow: "0px 18px 28px 0px rgba(9, 30, 66, 0.10), 0px 0px 1px 0px rgba(9, 30, 66, 0.20)",
                  }}
                >
                  <HeroIconArrowLeft className="text-current" />
                </button>

                <button
                  type="button"
                  onClick={next}
                  aria-label="Next slide"
                  className="transform translate-x-1/2 bg-white dark:bg-grey-600 text-black dark:text-white h-14 w-14 p-5 rounded-[100px] justify-center items-center inline-flex"
                  style={{
                    boxShadow: "0px 18px 28px 0px rgba(9, 30, 66, 0.10), 0px 0px 1px 0px rgba(9, 30, 66, 0.20)",
                  }}
                >
                  <HeroIconArrowRight className="text-current" />
                </button>
              </div>

              <div className="flex md:hidden items-center gap-[30px] justify-between mt-[40px] mb-10">
                {/* Mobile prev and next buttons */}
                <div className="h-fit flex gap-4 md:hidden">
                  <button
                    type="button"
                    onClick={prev}
                    className="border-[#00a77d] text-[#00a77d] h-14 w-14 p-5 rounded-[100px] border justify-center items-center inline-flex"
                  >
                    <HeroIconArrowLeft className="text-current" />
                  </button>

                  <button
                    type="button"
                    onClick={next}
                    className="border-[#00a77d] text-[#00a77d] h-14 w-14 p-5 rounded-[100px] border justify-center items-center inline-flex"
                  >
                    <HeroIconArrowRight className="text-current" />
                  </button>
                </div>

                <SlideItemsIndicator
                  slidesNumber={sortedEcosystemEvents.length || 0}
                  active={active}
                  setActive={setActive}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
