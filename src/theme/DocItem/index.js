/* eslint-disable */

import React from "react";
import { ThemeClassNames, useWindowSize } from "@docusaurus/theme-common";
import { Breadcrumb } from "@site/src/components/Breadcrumb/Breadcrumb";
// import DocItemFooter from "@theme/DocItemFooter";
import DocPaginator from "@theme/DocPaginator";
import DocVersionBadge from "@theme/DocVersionBadge";
import DocVersionBanner from "@theme/DocVersionBanner";
// import Seo from "@theme/Seo";
import TOC from "@theme/TOC";
import TOCCollapsible from "@theme/TOCCollapsible";
import clsx from "clsx";
import DocItemContent from "@theme/DocItem/Content";
import { DocProvider } from "@docusaurus/theme-common/internal";

export default function DocItem(props) {
  const { content: DocContent } = props;
  const { metadata, frontMatter } = DocContent;
  const MDXComponent = props.content;
  const {
    image,
    keywords,
    hide_title: hideTitle,
    hide_table_of_contents: hideTableOfContents,
    toc_min_heading_level: tocMinHeadingLevel,
    toc_max_heading_level: tocMaxHeadingLevel,
  } = frontMatter;
  const { description, title } = metadata; // We only add a title if:
  // - user asks to hide it with front matter
  // - the markdown content does not already contain a top-level h1 heading

  const shouldAddTitle =
    !hideTitle && typeof DocContent.contentTitle === "undefined";
  const windowSize = useWindowSize();
  const canRenderTOC =
    !hideTableOfContents && DocContent.toc && DocContent.toc.length > 0;
  const renderTocDesktop =
    canRenderTOC && (windowSize === "desktop" || windowSize === "ssr");

  return (
    <>
      {/* <Seo
        {...{
          title,
          description,
          keywords,
          image,
        }}
      /> */}

      <div className="row">
        <div
          className={clsx("col", {
            // [styles.docItemCol]: !hideTableOfContents,
            "col--9": renderTocDesktop,
          })}
        >
          <DocVersionBanner />
          <div>
            <article>
              <DocVersionBadge />

              {canRenderTOC && (
                <TOCCollapsible
                  toc={DocContent.toc}
                  minHeadingLevel={tocMinHeadingLevel}
                  maxHeadingLevel={tocMaxHeadingLevel}
                  // className={clsx(ThemeClassNames.docs.docTocMobile, styles.tocMobile)}
                />
              )}

              <div
                className={clsx(ThemeClassNames.docs.docMarkdown, "markdown")}
              >
                {/*
                Title can be declared inside md content or declared through front matter and added manually
                To make both cases consistent, the added title is added under the same div.markdown block
                See https://github.com/facebook/docusaurus/pull/4882#issuecomment-853021120
                */}
                {/* {shouldAddTitle && (
                  <header>
                    <Heading as="h1">{title}</Heading>
                  </header>
                )} */}

                <Breadcrumb />
                <DocProvider content={props.content}>
                  <DocItemContent>
                    <DocContent />
                  </DocItemContent>
                </DocProvider>
              </div>
              {/* <DocItemFooter {...props} /> */}
            </article>

            <DocPaginator previous={metadata.previous} next={metadata.next} />
          </div>
        </div>

        {renderTocDesktop && (
          <div className="col col--3">
            <TOC
              toc={DocContent.toc}
              minHeadingLevel={tocMinHeadingLevel}
              maxHeadingLevel={tocMaxHeadingLevel}
              className={ThemeClassNames.docs.docTocDesktop}
            />
          </div>
        )}
      </div>
    </>
  );
}
