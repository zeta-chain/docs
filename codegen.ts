/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-default-export */
import { CodegenConfig } from "@graphql-codegen/cli";
import { join } from "path";

require("dotenv").config({ path: join(__dirname, ".env") });

export const CONTENTFUL_CONFIG = {
  contentfulGraphqlUrl: process.env.CONTENTFUL_GRAPHQL_URL || "",
  contentfulAccessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
};

export const validateContentfulConfig = () => {
  if (!CONTENTFUL_CONFIG.contentfulGraphqlUrl) {
    throw new Error("CONTENTFUL_GRAPHQL_URL environment variable is required");
  }
  if (!CONTENTFUL_CONFIG.contentfulAccessToken) {
    throw new Error("CONTENTFUL_ACCESS_TOKEN environment variable is required");
  }
};

validateContentfulConfig();

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
