import { LinearProgress } from "@mui/material";
import { Router } from "next/router";
import React, { useEffect, useState } from "react";

export const HeadProgressBar = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Router.events.on("routeChangeStart", () => setLoading(true));
    Router.events.on("routeChangeComplete", () => setLoading(false));
    Router.events.on("routeChangeError", () => setLoading(false));

    return () => {
      Router.events.off("routeChangeStart", () => {});
      Router.events.off("routeChangeComplete", () => {});
      Router.events.off("routeChangeError", () => {});
    };
  }, []);

  return loading ? (
    <LinearProgress
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "1px",
        zIndex: 10000,
      }}
    />
  ) : null;
};
