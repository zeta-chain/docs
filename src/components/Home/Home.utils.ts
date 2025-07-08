// SWR fetcher function
export const contentfulFetcher = async (query: string, cacheKey?: string) => {
  const response = await fetch("/api/contentful", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, cacheKey }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`HTTP ${response.status}: ${errorText || "Failed to fetch data"}`);
  }

  const result = await response.json();

  if (result.errors) {
    throw new Error(`GraphQL errors: ${result.errors.map((e: { message?: string }) => e?.message || "").join(", ")}`);
  }

  return result.data;
};

export const contentfulFetcherOptions = {
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  refreshInterval: 43200000, // 12 hours in milliseconds
};
