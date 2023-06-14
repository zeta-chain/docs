import React from "react";

export const DocsHighlightBlock: React.FC<{
  className?: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ title, description, icon }) => {
  return (
    <div className="flex bg-green-700 hover:bg-green-600 w-full md:h-[300px] flex-col py-7 px-6 justify-between font-roobert rounded-md md:aspect-square aspect-auto">
      <div className="flex gap-4 md:gap-0 mb-4 md:mb-0 items-center w-full">
        <div>{icon}</div>
        <div className="text-2xl text-white text-xl block md:hidden">
          {title}
        </div>
      </div>
      <div className="flex flex-col items-start justify-start w-full md:min-h-[100px]">
        <div className="text-2xl text-white mb-6 text-xl hidden md:block w-full">
          {title}
        </div>
        <div className="text-sm text-white opacity-70 w-full">
          {description}
        </div>
      </div>
    </div>
  );
};
