// import { Locale, translations } from "@zeta-shared/frontend-config/i18n";
// import { ZetaAppsFooter } from "@zeta-shared/frontend-lib/src/components/Footer/components/ZetaAppsFooter";
// import { ZetaApp } from "@zeta-shared/frontend-lib/src/constants";
// import { deepCloneSerializableValue } from "@zeta-shared/frontend-lib/src/utils";
// import { merge } from "lodash-es";
// import React, { useMemo } from "react";

// const getTranslations = (locale?: Locale) =>
//   locale && locale !== "en"
//     ? merge(deepCloneSerializableValue(translations.en.copy), translations[locale].copy)
//     : translations.en.copy;

// eslint-disable-next-line import/no-default-export
export default function Footer() {
  // const copy = useMemo(() => getTranslations(), []);

  // return <ZetaAppsFooter app={ZetaApp.Docs} copy={copy} />;
  return null;
}
