import { Message } from "ai";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

import { basePath } from "~/lib/app.constants";

import { MarkdownCodeBlock } from "./MarkdownCodeBlock";

const remarkPlugins = [[remarkGfm, { singleTilde: false }]];
const rehypePlugins = [rehypeRaw];

export const MarkdownMessage: React.FC<MarkdownMessageProps> = ({ closeCmdk, message }) => {
  return (
    <Markdown
      remarkPlugins={remarkPlugins as any}
      rehypePlugins={rehypePlugins}
      skipHtml={false}
      components={{
        code: ({ children, ...props }: any) => (
          <MarkdownCodeBlock
            className={props.className}
            // language={props.language}
            // title={props.title}
          >
            {children}
          </MarkdownCodeBlock>
        ),
        a: ({ children, ref, ...args }) => {
          if (typeof args.href !== "string") return null;

          return (
            <Link
              {...args}
              href={args.href}
              onClick={closeCmdk}
              className={clsx("text-green-300  hover:text-green-400", args.className)}
            >
              {children}
            </Link>
          );
        },
        // img: (props: any) => NextImageHandler(props),
        // Image: (props: any) => NextImageHandler(props),
        h1: ({ children, ...args }) => {
          return (
            <h1 className="my-2 text-3xl font-semibold" {...args}>
              {children}
            </h1>
          );
        },
        h2: ({ children, ...args }) => {
          return (
            <h2 className="my-2 text-2xl font-semibold" {...args}>
              {children}
            </h2>
          );
        },
        h3: ({ children, ...args }) => {
          return (
            <h3 className="my-2 text-xl font-semibold" {...args}>
              {children}
            </h3>
          );
        },
        li: ({ children, ...args }) => {
          return (
            <li className="my-2" {...args}>
              {children}
            </li>
          );
        },
        img: ({ children, ...args }) => {
          return <img className="my-6" {...args} style={{ maxWidth: "100%", height: "auto" }} />;
        },
        mark: ({ children, ...args }) => {
          return (
            <mark
              {...args}
              className={clsx(
                "cursor-pointer rounded-md bg-slate-300/50 px-1 py-0.5 text-sm font-semibold transition-all duration-200 ease-in-out hover:bg-blue-300/40"
              )}
            >
              {children}
            </mark>
          );
        },
      }}
    >
      {message.content}
    </Markdown>
  );
};

interface MarkdownMessageProps {
  closeCmdk: () => void;
  message: Message;
}
