import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Create a Sanity client
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!, // Replace with your project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!, // Replace with your dataset name
  apiVersion: '2021-08-31',
  useCdn: true,
});

// Initialize the image URL builder
const builder = imageUrlBuilder(client);

// Create a helper function to generate image URLs
export const urlFor = (source: unknown) => builder.image(source);
