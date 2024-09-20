import { environment } from "../env.cjs";

export const isServer = typeof window === "undefined";

export const isClient = !isServer;

export const isVercel = Boolean(environment.NEXT_PUBLIC_VERCEL);

export const isVercelProd = Boolean(environment.NEXT_PUBLIC_VERCEL_ENV === "production");

export const isVercelPreview = Boolean(environment.NEXT_PUBLIC_VERCEL_ENV === "preview");

export const isNodeEnvProd = process.env.NODE_ENV === "production";

export const isNodeEnvDev = process.env.NODE_ENV === "development";

export const isDevelopmentEnv = !(isVercelPreview || isVercelProd);

export const isLocalEnv = !isVercelProd && !isVercelPreview;

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
