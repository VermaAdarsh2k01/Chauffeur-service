import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: '8rbpmdsj',
  dataset: 'production',
  apiVersion: '2024-03-22', // Use today's date or your preferred version
  useCdn: false,
})
