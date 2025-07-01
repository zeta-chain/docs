import { formatDate } from "date-fns";
import Image from "next/image";
import Link from "next/link";

import { BlogPost } from "../../../generated/contentful.graphql.types";
import { ClockSvg } from "./svg/ClockSvg";
import { DocsSvg } from "./svg/DocsSvg";
import { EngineeringBlogSvg } from "./svg/EngineeringBlog";

type EngineeringBlogProps = {
  engineeringBlogPosts: BlogPost[];
  isLoadingEngineeringBlogPosts: boolean;
};

export const EngineeringBlog: React.FC<EngineeringBlogProps> = ({
  engineeringBlogPosts,
  isLoadingEngineeringBlogPosts,
}) => {
  return (
    <div className="pt-14 mx-auto max-w-[1312px] flex flex-col xl:flex-row xl:gap-8">
      <div className="flex flex-col px-5 md:px-[72px] xl:pr-0 xl:pl-[72px] xl:w-[328px]">
        <div className="flex justify-center mb-6 xl:justify-start">
          <EngineeringBlogSvg />
        </div>

        <h2 className="text-[32px] leading-[110%] tracking-[-0.64px] font-medium text-grey-900 dark:text-grey-50 mb-2 text-center xl:text-left">
          From the <br /> engineering blog
        </h2>

        <p className="text-[16px] leading-[160%] font-normal text-grey-400 dark:text-grey-300 text-center mb-4 xl:text-left">
          Latest development articles
        </p>

        <div className="flex flex-col items-center xl:items-start">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.zetachain.com/blog/category/1YDEn2XPs3rpPas31UgBcJ/page/1"
            className="inline-flex items-center gap-1 text-[16px] leading-[130%] font-normal text-[#00A5C6] dark:text-[#B0FF61] text-center"
          >
            <DocsSvg />
            Development posts →
          </a>
        </div>
      </div>

      <div className="w-full flex gap-6 xl:gap-8 md:max-w-[904px] xl:max-w-[880px] mx-auto overflow-x-scroll no-scrollbar px-5 xl:px-0 pt-14 xl:pt-0 xl:m-0">
        {engineeringBlogPosts.map((post, index) => (
          <Link
            key={post?.slug || index}
            href={post?.slug ? `https://www.zetachain.com/blog/${post.slug}` : ""}
            target="_blank"
            className="w-full max-w-[272px] group relative flex-shrink-0"
          >
            <div className="mb-4 rounded-lg border border-grey-200 overflow-hidden group-hover:shadow-light transition-all duration-200">
              <Image
                src={post?.image?.url || ""}
                width={272}
                height={153}
                alt="Placeholder"
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                className="!m-0"
              />
            </div>

            <h4 className="text-[18px] md:text-[20px] leading-[130%] h-[46px] md:h-[56px] line-clamp-2 overflow-hidden font-medium mb-2 !text-black dark:!text-white">
              {post.title}
            </h4>

            <p className="text-[16px] leading-[130%] h-[42px] line-clamp-2 overflow-hidden font-medium text-grey-400 dark:text-grey-300 mb-4">
              {post.description}
            </p>

            <div className="flex justify-between items-center">
              <div className="text-[16px] leading-[130%] font-medium text-[#00A5C6] dark:text-[#B0FF61] group-hover:text-opacity-70 transition-all duration-200">
                Read More →
              </div>

              <div className="flex items-center gap-1">
                <ClockSvg />
                <p className="text-[14px] leading-[135%] font-normal text-black dark:text-white">
                  {formatDate(post.sys.firstPublishedAt, "MMM d, yyyy")}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
