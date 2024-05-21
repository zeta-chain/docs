import { useEffect, useMemo, useState } from "react";

import { IconArticle001 } from "./IconArticle001";
import { IconArticle002 } from "./IconArticle002";
import { IconArticle003 } from "./IconArticle003";
import { IconArticle004 } from "./IconArticle004";
import { IconArticle005 } from "./IconArticle005";
import { IconArticle006 } from "./IconArticle006";
import { IconArticle007 } from "./IconArticle007";
import { IconArticle008 } from "./IconArticle008";
import { IconArticle009 } from "./IconArticle009";
import { IconArticle010 } from "./IconArticle010";
import { IconArticle011 } from "./IconArticle011";
import { IconArticle012 } from "./IconArticle012";
import { IconArticle013 } from "./IconArticle013";
import { IconArticle026 } from "./IconArticle026";
import { IconArticle027 } from "./IconArticle027";
import { IconArticle028 } from "./IconArticle028";
import { IconArticle029 } from "./IconArticle029";
import { IconArticle030 } from "./IconArticle030";
import { IconArticle031 } from "./IconArticle031";
import { IconArticle032 } from "./IconArticle032";
import { IconArticle033 } from "./IconArticle033";
import { IconArticle034 } from "./IconArticle034";
import { IconArticle035 } from "./IconArticle035";
import { IconArticle036 } from "./IconArticle036";
import { IconArticle037 } from "./IconArticle037";
import { IconArticle038 } from "./IconArticle038";
import { IconArticle051 } from "./IconArticle051";
import { IconArticle052 } from "./IconArticle052";
import { IconArticle053 } from "./IconArticle053";
import { IconArticle054 } from "./IconArticle054";
import { IconArticle055 } from "./IconArticle055";
import { IconArticle056 } from "./IconArticle056";
import { IconArticle057 } from "./IconArticle057";
import { IconArticle058 } from "./IconArticle058";
import { IconArticle059 } from "./IconArticle059";
import { IconArticle060 } from "./IconArticle060";
import { IconArticle061 } from "./IconArticle061";
import { IconArticle062 } from "./IconArticle062";
import { IconArticle063 } from "./IconArticle063";
import { IconArticle076 } from "./IconArticle076";
import { IconArticle077 } from "./IconArticle077";
import { IconArticle078 } from "./IconArticle078";
import { IconArticle079 } from "./IconArticle079";
import { IconArticle080 } from "./IconArticle080";
import { IconArticle081 } from "./IconArticle081";
import { IconArticle082 } from "./IconArticle082";
import { IconArticle083 } from "./IconArticle083";
import { IconArticle084 } from "./IconArticle084";
import { IconArticle085 } from "./IconArticle085";
import { IconArticle086 } from "./IconArticle086";
import { IconArticle087 } from "./IconArticle087";
import { IconArticle088 } from "./IconArticle088";
import { IconArticle101 } from "./IconArticle101";
import { IconArticle102 } from "./IconArticle102";
import { IconArticle103 } from "./IconArticle103";
import { IconArticle104 } from "./IconArticle104";
import { IconArticle105 } from "./IconArticle105";
import { IconArticle106 } from "./IconArticle106";
import { IconArticle107 } from "./IconArticle107";
import { IconArticle108 } from "./IconArticle108";
import { IconArticle109 } from "./IconArticle109";
import { IconArticle110 } from "./IconArticle110";
import { IconArticle111 } from "./IconArticle111";
import { IconArticle112 } from "./IconArticle112";
import { IconArticle113 } from "./IconArticle113";

const articleIcons = [
  <IconArticle001 />,
  <IconArticle002 />,
  <IconArticle003 />,
  <IconArticle004 />,
  <IconArticle005 />,
  <IconArticle006 />,
  <IconArticle007 />,
  <IconArticle008 />,
  <IconArticle009 />,
  <IconArticle010 />,
  <IconArticle011 />,
  <IconArticle012 />,
  <IconArticle013 />,
  <IconArticle026 />,
  <IconArticle027 />,
  <IconArticle028 />,
  <IconArticle029 />,
  <IconArticle030 />,
  <IconArticle031 />,
  <IconArticle032 />,
  <IconArticle033 />,
  <IconArticle034 />,
  <IconArticle035 />,
  <IconArticle036 />,
  <IconArticle037 />,
  <IconArticle038 />,
  <IconArticle051 />,
  <IconArticle052 />,
  <IconArticle053 />,
  <IconArticle054 />,
  <IconArticle055 />,
  <IconArticle056 />,
  <IconArticle057 />,
  <IconArticle058 />,
  <IconArticle059 />,
  <IconArticle060 />,
  <IconArticle061 />,
  <IconArticle062 />,
  <IconArticle063 />,
  <IconArticle076 />,
  <IconArticle077 />,
  <IconArticle078 />,
  <IconArticle079 />,
  <IconArticle080 />,
  <IconArticle081 />,
  <IconArticle082 />,
  <IconArticle083 />,
  <IconArticle084 />,
  <IconArticle085 />,
  <IconArticle086 />,
  <IconArticle087 />,
  <IconArticle088 />,
  <IconArticle101 />,
  <IconArticle102 />,
  <IconArticle103 />,
  <IconArticle104 />,
  <IconArticle105 />,
  <IconArticle106 />,
  <IconArticle107 />,
  <IconArticle108 />,
  <IconArticle109 />,
  <IconArticle110 />,
  <IconArticle111 />,
  <IconArticle112 />,
  <IconArticle113 />,
];

export const IconArticleRandom: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  const randomIndex = useMemo(() => Math.floor(Math.random() * articleIcons.length), []);

  if (!isMounted) return null;

  return articleIcons[randomIndex];
};