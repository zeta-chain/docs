import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type ClientOnlyPortalProps = {
  children: React.ReactNode;
  selector: string;
};

export const ClientOnlyPortal: React.FC<ClientOnlyPortalProps> = ({ children, selector }) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);

  return mounted ? createPortal(children, ref.current!) : null;
};
