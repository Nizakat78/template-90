import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Create a Sanity client
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,  // Project ID from .env
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,      // Dataset name (e.g., "production")
  apiVersion: '2021-08-31',  // API version
  useCdn: true,              // Set to true for caching, false for fresh data
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,  // Add the API token here (make sure it's correct)
});

// Initialize the image URL builder
const builder = imageUrlBuilder(client);

// Create a helper function to generate image URLs
export const urlFor = (source: unknown) => builder.image(source);
