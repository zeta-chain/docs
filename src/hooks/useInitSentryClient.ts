import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { CaptureConsole, ExtraErrorData } from "@sentry/integrations";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import { useEffect } from "react";

import { CustomFields } from "../constants/customFields";

let isSentryInitialized = false;

export const useInitSentryClient = () => {
  const { siteConfig } = useDocusaurusContext();
  const { sentryDsn, isNodeEnvProd } = siteConfig.customFields as CustomFields;

  useEffect(() => {
    (async () => {
      let isBrowserBrave = false;

      if ("brave" in navigator && (await (navigator as any)?.brave?.isBrave())) isBrowserBrave = true;

      if (!isBrowserBrave && isNodeEnvProd && sentryDsn && !isSentryInitialized) {
        Sentry.init({
          dsn: sentryDsn,
          integrations: [
            new BrowserTracing(),
            new CaptureConsole({
              levels: ["error", "warn"],
            }),
            new ExtraErrorData(),
          ],
          tracesSampleRate: 1.0,
        });

        isSentryInitialized = true;
      }
    })();
  }, [isNodeEnvProd, sentryDsn]);
};
