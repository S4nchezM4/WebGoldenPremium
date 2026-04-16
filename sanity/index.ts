import { createClient } from 'sanity';
import { dataset, projectId } from './env';

// Sanity client for studio
export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: false,
  studioUrl: '/studio',
});