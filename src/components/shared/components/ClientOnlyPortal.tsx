import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type ClientOnlyPortalProps = {
  children: React.ReactNode;
  selector: string;
};

export const ClientOnlyPortal: React.FC<ClientOnlyPortalProps> = ({ children, selector }) => {
  const router = useRouter();
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const portal = document.querySelector(selector);

    if (!portal) {
      ref.current = null;
      setMounted(false);
      return;
    }

    if (portal && ref.current) return;

    ref.current = portal;
    setMounted(true);
  }, [selector, router.pathname]);

  return mounted && ref.current ? createPortal(children, ref.current) : null;
};
