import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { projectId, dataset } from './env';

// Import schemas
import { blogPost, service, project, guide, tutorial, comparison, solution, landingPage, author, people, category, tag, siteSettings, navigation } from './schemas';

// Schema imports - these need to be properly imported in your actual setup
const schemaTypes = [
  // Blog
  blogPost,
  // Services
  service,
  // Projects
  project,
  // Resources
  guide,
  tutorial,
  comparison,
  // Solutions
  solution,
  // Landing Pages
  landingPage,
  // People
  author,
  people,
  // Taxonomies
  category,
  tag,
  // Site Configuration
  siteSettings,
  navigation,
];

export default defineConfig({
  name: 'agency-marketing-platform',
  title: 'Agency Marketing Platform',
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.item()
              .title('Site Settings')
              .child(
                S.document().schemaType('siteSettings').documentId('siteSettings')
              ),
            S.item()
              .title('Navigation')
              .child(
                S.document().schemaType('navigation').documentId('navigation')
              ),
            S.divider(),
            S.documentTypeListItem('service').title('Services'),
            S.documentTypeListItem('solution').title('Solutions'),
            S.documentTypeListItem('project').title('Case Studies'),
            S.divider(),
            S.documentTypeListItem('blogPost').title('Blog Posts'),
            S.documentTypeListItem('guide').title('Guides'),
            S.documentTypeListItem('tutorial').title('Tutorials'),
            S.documentTypeListItem('comparison').title('Comparisons'),
            S.documentTypeListItem('landingPage').title('SEO Landing Pages'),
            S.divider(),
            S.documentTypeListItem('people').title('Team'),
            S.documentTypeListItem('author').title('Authors'),
            S.divider(),
            S.documentTypeListItem('category').title('Categories'),
            S.documentTypeListItem('tag').title('Tags'),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});