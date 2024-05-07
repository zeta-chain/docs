import "@emotion/react";

import type { CustomTheme } from "@zetachain/ui-toolkit/theme/app.theme";

declare module "@emotion/react" {
  export interface Theme extends CustomTheme {}
}
