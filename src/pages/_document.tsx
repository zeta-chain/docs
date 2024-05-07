import createEmotionServer from "@emotion/server/create-instance";
import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";
import React from "react";

import { createEmotionCache } from "~/lib/createEmotionCache";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;

    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: any) => (props) => <App emotionCache={cache} {...props} />,
      });

    const initialProps = await Document.getInitialProps(ctx);
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
      <style
        data-emotion={`${style.key} ${style.ids.join(" ")}`}
        key={style.key}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ));

    return {
      ...initialProps,
      styles: [...React.Children.toArray(initialProps.styles), ...emotionStyleTags],
    };
  }

  render() {
    return (
      <Html className="dark">
        <Head />

        <body className="no-scrollbar">
          <Main />
          <div id="price-chart-crosshair-container" />
          <div id="tooltip-container" />
          <div id="button-tooltip-container" />
          <NextScript />
        </body>
      </Html>
    );
  }
}
