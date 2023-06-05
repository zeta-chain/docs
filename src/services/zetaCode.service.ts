import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BASE_SNIPPET_URL } from "../lib/app.constants";

// Define a service using a base URL and expected endpoints
export const zetaCodeApi = createApi({
  reducerPath: "zetaCodeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_SNIPPET_URL,
  }),
  endpoints: (builder) => ({
    getFileByPath: builder.query<string, string>({
      query: (name) => ({
        responseHandler: "text",
        url: `${name}`,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetFileByPathQuery } = zetaCodeApi;
