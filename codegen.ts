/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-default-export */
import { CodegenConfig } from "@graphql-codegen/cli";
import { join } from "path";

require("dotenv").config({ path: join(__dirname, ".env") });

export const CONTENTFUL_CONFIG = {
  contentfulGraphqlUrl: process.env.CONTENTFUL_GRAPHQL_URL || "",
  contentfulAccessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
  contentfulRedisUrl: process.env.REDIS_URL || "",
};

const eslintDisablePlugin = {
  add: {
    content: "/* eslint-disable */",
  },
};

const config: CodegenConfig = {
  config: {
    skipTypename: false,
    namingConvention: {
      transformUnderscore: true,
      enumValues: "keep",
    },
  },
  overwrite: true,
  generates: {
    [`src/generated/contentful.graphql.types.ts`]: {
      schema: {
        [CONTENTFUL_CONFIG.contentfulGraphqlUrl]: {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${CONTENTFUL_CONFIG.contentfulAccessToken}`,
          },
        },
      },
      config: {
        namingConvention: {
          transformUnderscore: false,
        },
      },
      documents: [`**/**/*.graphql.contentful.ts`],
      plugins: [eslintDisablePlugin, "typescript", "typescript-operations", "typescript-graphql-request"],
    },
  },
};

export default config;
