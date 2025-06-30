// SWR fetcher function
export const contentfulFetcher = async (query: string) => {
  const response = await fetch("/api/contentful", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const result = await response.json();
  return result.data;
};

export const contentfulFetcherOptions = {
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  refreshInterval: 43200000, // 12 hours in milliseconds
};
