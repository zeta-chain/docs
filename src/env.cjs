/* eslint-disable no-process-env */
require("dotenv").config();
const { z } = require("zod");
const { createEnv } = require("@t3-oss/env-nextjs");

/*
 The environment is divided into two parts: client and server,
 in order to make it very explicit which variables are exposed to the client.
 Based on https://create.t3.gg/en/usage/env-variables
*/
const environment = createEnv({
  /*
    The environment loaded in the client.
    These variables are exposed to the client. Do NOT add any sensitive information here.
    E.g. pages, components, etc.
    Note: Vercel exposes variables starting with 'NEXT_PUBLIC_'
  */
  client: {
    NEXT_PUBLIC_VERCEL_ENV: z.enum(["production", "preview", "development"]).default("development"),
    NEXT_PUBLIC_VERCEL: z.string().default("0"),

    // Analytics
    NEXT_PUBLIC_GA_MEASUREMENT_ID: z.string().optional(),
  },

  /*
    The environment loaded in the server.
    These variables are NOT exposed to the client.
    E.g. serverless functions, SSR, etc.
  */
  server: {
    VERCEL_ENV: z.enum(["production", "preview", "development"]).default("development"),
    NODE_ENV: z.enum(["production", "development"]).default("development"),
    DEBUG: z.boolean().default(false),
    ENABLE_ROOT_PATH_BUILD_CACHE: z.string().default("1"),
  },
  runtimeEnv: {
    NEXT_PUBLIC_VERCEL_ENV: process.env.NEXT_PUBLIC_VERCEL_ENV,
    NEXT_PUBLIC_VERCEL: process.env.NEXT_PUBLIC_VERCEL,

    // Analytics
    NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,

    VERCEL_ENV: process.env.VERCEL_ENV,
    NODE_ENV: process.env.NODE_ENV,
    DEBUG: Boolean(process.env.DEBUG || false),
    ENABLE_ROOT_PATH_BUILD_CACHE: process.env.ENABLE_ROOT_PATH_BUILD_CACHE,
  },
});

module.exports = { environment };
