import { createClient } from 'next-sanity'

// Fetch environment variables from process.env
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,  // The '!' operator is used to assert that these values are not undefined
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_API_VERSION || '2025-01-02',  // You can set a default API version if the environment variable is not defined
  token: process.env.NEXT_PUBLIC_API_TOKEN,  // Optional: Include token only if required (e.g., for write operations)
  useCdn: true,  // Set to 'false' if you need to disable CDN caching for dynamic data fetching
});
