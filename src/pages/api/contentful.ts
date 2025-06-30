import Cors from "cors";
import { GraphQLClient } from "graphql-request";
import type { NextApiRequest, NextApiResponse } from "next/types";

import { CONTENTFUL_CONFIG } from "../../../codegen";

// https://github.com/expressjs/cors#configuration-options
const cors = Cors({
  origin: ["zetachain.com", "zetachain.app", /\.zetachain\.((com)|(app))$/],
  methods: ["POST", "GET", "HEAD"],
});

/**
 * Helper method to wait for the cors middleware to execute before continuing
 * And to throw an error when an error happens in a middleware
 */
function corsMiddleware(req: NextApiRequest, res: NextApiResponse) {
  return new Promise((resolve, reject) => {
    cors(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export interface ZetaContentfulApiResponse {
  data: any;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await corsMiddleware(req, res);
    const { query, variables } = req.body;

    const contentfulClient = new GraphQLClient(CONTENTFUL_CONFIG.contentfulGraphqlUrl, {
      headers: { Authorization: `Bearer ${CONTENTFUL_CONFIG.contentfulAccessToken}` },
    });

    const data = await contentfulClient.request(query, variables);

    res.status(200).json({ data } as ZetaContentfulApiResponse);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
