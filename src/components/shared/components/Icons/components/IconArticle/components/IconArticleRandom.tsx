import { useMemo } from "react";

import { IconArticle001 } from "./IconArticle001";
import { IconArticle002 } from "./IconArticle002";
import { IconArticle003 } from "./IconArticle003";
import { IconArticle006 } from "./IconArticle006";
import { IconArticle007 } from "./IconArticle007";
import { IconArticle011 } from "./IconArticle011";
import { IconArticle012 } from "./IconArticle012";
import { IconArticle013 } from "./IconArticle013";
import { IconArticle026 } from "./IconArticle026";
import { IconArticle027 } from "./IconArticle027";
import { IconArticle028 } from "./IconArticle028";
import { IconArticle031 } from "./IconArticle031";
import { IconArticle032 } from "./IconArticle032";
import { IconArticle036 } from "./IconArticle036";
import { IconArticle037 } from "./IconArticle037";
import { IconArticle038 } from "./IconArticle038";
import { IconArticle051 } from "./IconArticle051";
import { IconArticle052 } from "./IconArticle052";
import { IconArticle053 } from "./IconArticle053";
import { IconArticle056 } from "./IconArticle056";
import { IconArticle057 } from "./IconArticle057";
import { IconArticle061 } from "./IconArticle061";
import { IconArticle062 } from "./IconArticle062";
import { IconArticle063 } from "./IconArticle063";
import { IconArticle076 } from "./IconArticle076";
import { IconArticle077 } from "./IconArticle077";
import { IconArticle078 } from "./IconArticle078";
import { IconArticle081 } from "./IconArticle081";
import { IconArticle082 } from "./IconArticle082";
import { IconArticle086 } from "./IconArticle086";
import { IconArticle087 } from "./IconArticle087";
import { IconArticle088 } from "./IconArticle088";
import { IconArticle101 } from "./IconArticle101";
import { IconArticle102 } from "./IconArticle102";
import { IconArticle103 } from "./IconArticle103";
import { IconArticle106 } from "./IconArticle106";
import { IconArticle107 } from "./IconArticle107";
import { IconArticle111 } from "./IconArticle111";
import { IconArticle112 } from "./IconArticle112";
import { IconArticle113 } from "./IconArticle113";

const articleIcons = [
  <IconArticle001 />,
  <IconArticle002 />,
  <IconArticle003 />,
  <IconArticle006 />,
  <IconArticle007 />,
  <IconArticle011 />,
  <IconArticle012 />,
  <IconArticle013 />,
  <IconArticle026 />,
  <IconArticle027 />,
  <IconArticle028 />,
  <IconArticle031 />,
  <IconArticle032 />,
  <IconArticle036 />,
  <IconArticle037 />,
  <IconArticle038 />,
  <IconArticle051 />,
  <IconArticle052 />,
  <IconArticle053 />,
  <IconArticle056 />,
  <IconArticle057 />,
  <IconArticle061 />,
  <IconArticle062 />,
  <IconArticle063 />,
  <IconArticle076 />,
  <IconArticle077 />,
  <IconArticle078 />,
  <IconArticle081 />,
  <IconArticle082 />,
  <IconArticle086 />,
  <IconArticle087 />,
  <IconArticle088 />,
  <IconArticle101 />,
  <IconArticle102 />,
  <IconArticle103 />,
  <IconArticle106 />,
  <IconArticle107 />,
  <IconArticle111 />,
  <IconArticle112 />,
  <IconArticle113 />,
];

const ICON_COUNT = articleIcons.length;

export const IconArticleRandom: React.FC = () => {
  const randomIndex = useMemo(() => Math.floor(Math.random() * ICON_COUNT), []);

  return articleIcons[randomIndex];
};
