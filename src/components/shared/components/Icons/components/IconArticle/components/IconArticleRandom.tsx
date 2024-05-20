import { useMemo } from "react";

import { IconArticle001 } from "./IconArticle001";
import { IconArticle002 } from "./IconArticle002";
import { IconArticle003 } from "./IconArticle003";
import { IconArticle006 } from "./IconArticle006";
import { IconArticle007 } from "./IconArticle007";
import { IconArticle026 } from "./IconArticle026";
import { IconArticle027 } from "./IconArticle027";
import { IconArticle028 } from "./IconArticle028";
import { IconArticle031 } from "./IconArticle031";
import { IconArticle032 } from "./IconArticle032";
import { IconArticle051 } from "./IconArticle051";
import { IconArticle052 } from "./IconArticle052";
import { IconArticle053 } from "./IconArticle053";
import { IconArticle056 } from "./IconArticle056";
import { IconArticle057 } from "./IconArticle057";
import { IconArticle076 } from "./IconArticle076";
import { IconArticle077 } from "./IconArticle077";
import { IconArticle078 } from "./IconArticle078";
import { IconArticle081 } from "./IconArticle081";
import { IconArticle082 } from "./IconArticle082";
import { IconArticle101 } from "./IconArticle101";
import { IconArticle102 } from "./IconArticle102";
import { IconArticle103 } from "./IconArticle103";
import { IconArticle106 } from "./IconArticle106";
import { IconArticle107 } from "./IconArticle107";

const articleIcons = [
  <IconArticle001 />,
  <IconArticle002 />,
  <IconArticle003 />,
  <IconArticle006 />,
  <IconArticle007 />,
  <IconArticle026 />,
  <IconArticle027 />,
  <IconArticle028 />,
  <IconArticle031 />,
  <IconArticle032 />,
  <IconArticle051 />,
  <IconArticle052 />,
  <IconArticle053 />,
  <IconArticle056 />,
  <IconArticle057 />,
  <IconArticle076 />,
  <IconArticle077 />,
  <IconArticle078 />,
  <IconArticle081 />,
  <IconArticle082 />,
  <IconArticle101 />,
  <IconArticle102 />,
  <IconArticle103 />,
  <IconArticle106 />,
  <IconArticle107 />,
];

const ICON_COUNT = articleIcons.length;

export const IconArticleRandom: React.FC = () => {
  const randomIndex = useMemo(() => Math.floor(Math.random() * ICON_COUNT), []);

  return articleIcons[randomIndex];
};
