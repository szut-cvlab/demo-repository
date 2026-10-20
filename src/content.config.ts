import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const people = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/people' }),
  schema: z.object({
    items: z.array(
      z.object({
        name: z.string(),
        role: z.string(),
        url: z.string().optional(),
        notes: z.string().optional(),
        email: z.string().optional(),
        bio: z.string().optional(),
      }),
    ),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/publications' }),
  schema: z.object({
    groups: z.array(
      z.object({
        title: z.string(),
        items: z.array(z.string()),
      }),
    ),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/news' }),
  schema: z.object({
    items: z.array(
      z.object({
        title: z.string(),
        date: z.coerce.date(),
        desc: z.string().optional(),
      }),
    ),
  }),
});

const research = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/research' }),
  schema: z.object({
    items: z.array(
      z.object({
        title: z.string(),
        desc: z.string().optional(),
      }),
    ),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    items: z.array(
      z.object({
        name: z.string(),
        url: z.string().optional(),
        language: z.string().optional(),
        desc: z.string().optional(),
      }),
    ),
  }),
});

const grants = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/grants' }),
  schema: z.object({
    items: z.array(
      z.object({
        source: z.string(),
        category: z.string().optional(),
        code: z.string().optional(),
        title: z.string(),
        period: z.string().optional(),
        funding: z.string().optional(),
        status: z.string().default('在研'),
        role: z.string().optional(),
      }),
    ),
  }),
});

export const collections = {
  people,
  publications,
  news,
  research,
  projects,
  grants,
};
