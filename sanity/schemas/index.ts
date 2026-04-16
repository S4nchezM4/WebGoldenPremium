// Document Schemas
export { blogPost } from './documents/blogPost';
export { service } from './documents/service';
export { project } from './documents/project';
export { guide } from './documents/guide';
export { tutorial } from './documents/tutorial';
export { comparison } from './documents/comparison';
export { solution } from './documents/solution';
export { landingPage } from './documents/landingPage';
export { author, people } from './documents/people';
export { category, tag } from './documents/taxonomies';
export { siteSettings } from './documents/siteSettings';
export { navigation } from './documents/navigation';

// Re-export utilities
export { seoFields, slugField, portableText, imageField, authorReference, categoryReference, tagsReference } from './index';
export type { SEOFields, Slug, ImageAsset, Author, Category, Tag } from '../../types/index';