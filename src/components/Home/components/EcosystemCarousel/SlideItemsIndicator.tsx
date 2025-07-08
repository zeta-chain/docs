/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/control-has-associated-label */
import clsx from "clsx";

export const SlideItemsIndicator: React.FC<{
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>> | ((index: number) => void);
  slidesNumber: number;
  className?: string;
}> = ({ slidesNumber, active, setActive, className }) => {
  return (
    <div
      className={clsx(
        "gap-[4px] md:mx-auto w-full max-w-[240px] h-fit grid grid-flow-col",
        {
          "max-w-[80px]": slidesNumber === 2,
          "max-w-[138px]": slidesNumber === 3,
          "max-w-[150px]": slidesNumber === 4,
        },
        className
      )}
    >
      {new Array(slidesNumber).fill(null).map((_, index) => (
        <button
          type="button"
          key={`slide-indicator-${index}`}
          className={clsx("h-2 rounded-full", {
            "bg-grey-200 dark:bg-grey-600": active !== index + 1,
            "!bg-green-200": active === index + 1,
          })}
          aria-label={`Go to slide ${index + 1}`}
          aria-current={active === index + 1 ? "true" : "false"}
          onClick={() => setActive(index + 1)}
        />
      ))}
    </div>
  );
};
