import dynamic from "next/dynamic";
const BaseAskCookbook = dynamic(() => import("@cookbookdev/docsbot/react-fixed"), { ssr: false });

/** It's going to be exposed in HTTP requests anyway so it's fine to just hardcode it here */
const COOKBOOK_PUBLIC_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWNhYjFkMjU4OGEwOTU1ZDNjYWU2ZmYiLCJpYXQiOjE3MDc3ODI2MTAsImV4cCI6MjAyMzM1ODYxMH0.CxSlf6zY94GhJ93UPvw3_btAcDODHOP0MjmMEZuqb1M";

export const AskCookbook = () => {
  return <BaseAskCookbook apiKey={COOKBOOK_PUBLIC_API_KEY} />;
};
