/* eslint-disable no-console */
import Cors from "cors";
import { GraphQLClient } from "graphql-request";
import Redis from "ioredis";
import type { NextApiRequest, NextApiResponse } from "next/types";

import { CONTENTFUL_CONFIG } from "../../../codegen";

// Redis configuration
const redisUrl = CONTENTFUL_CONFIG.contentfulRedisUrl;
const redis = redisUrl ? new Redis(redisUrl) : null;
const CACHE_TTL = 43200; // 12 hours in seconds

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

const contentfulClient = new GraphQLClient(CONTENTFUL_CONFIG.contentfulGraphqlUrl, {
  headers: { Authorization: `Bearer ${CONTENTFUL_CONFIG.contentfulAccessToken}` },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await corsMiddleware(req, res);

    // Validate request method
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    // Validate request body
    if (!req.body || typeof req.body !== "object") {
      return res.status(400).json({ error: "Invalid request body" });
    }

    const { query, variables, cacheKey } = req.body;

    if (!query || typeof query !== "string") {
      return res.status(400).json({ error: "Query is required and must be a string" });
    }

    if (!redis) {
      console.warn("No Redis URL provided, skipping cache");
    }

    if (redis) {
      // Check Redis cache first
      const cachedData = await redis.get(cacheKey);

      if (cachedData) {
        console.log(`Cache hit for key "${cacheKey}": Serving from Redis`);
        return res.status(200).json({ data: JSON.parse(cachedData) });
      }

      console.log(`Cache miss for key "${cacheKey}": Fetching from Contentful`);
    }

    // Fetch from Contentful
    const data = await contentfulClient.request(query, variables);

    if (redis) {
      // Cache the result in Redis
      await redis.setex(cacheKey, CACHE_TTL, JSON.stringify(data));
      console.log(`Data cached in Redis with key "${cacheKey}"`);
    }

    res.status(200).json({ data });
  } catch (error: any) {
    console.error("Contentful API error:", error);
    res.status(500).json({ error: error.message });
  }
}
