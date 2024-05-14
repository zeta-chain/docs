import { environment } from "../env.cjs";

export const isServer = typeof window === "undefined";

export const isVercel = Boolean(environment.NEXT_PUBLIC_VERCEL);

export const isVercelProd = Boolean(environment.NEXT_PUBLIC_VERCEL_ENV === "production");

export const isVercelPreview = Boolean(environment.NEXT_PUBLIC_VERCEL_ENV === "preview");

export const isLocalEnv = !isVercelProd && !isVercelPreview;

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
