import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../lib/app.store";
import { setShouldScrollToPageTop } from "../lib/scroll-to-page-top/scroll-to-page-top.redux";
import { selectShouldScrollToTop } from "../lib/scroll-to-page-top/scroll-to-page-top.selectors";

export const useScrollToPageTop = () => {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const shouldScrollToTop = useSelector(selectShouldScrollToTop);

  useEffect(() => {
    const handleRouteChangeComplete = () => {
      if (shouldScrollToTop) {
        window.scrollTo(0, document.body.scrollHeight);

        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);

        dispatch(setShouldScrollToPageTop(false));
      }
    };

    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [shouldScrollToTop, dispatch, router]);
};
