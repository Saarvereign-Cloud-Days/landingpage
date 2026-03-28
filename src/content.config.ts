import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const hero = defineCollection({
  type: 'content_layer',
  loader: glob({ pattern: '*/hero.md', base: './src/content' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    dates: z.string(),
    tagline: z.string(),
  }),
});

const day = defineCollection({
  type: 'content_layer',
  loader: glob({ pattern: '*/day*.md', base: './src/content' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    highlights: z.array(z.string()),
    externalLink: z.string().url().optional(),
    externalLinkLabel: z.string().optional(),
  }),
});

const booths = defineCollection({
  type: 'content_layer',
  loader: glob({ pattern: '*/booths.md', base: './src/content' }),
  schema: z.object({
    title: z.string(),
    booths: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
      }),
    ),
  }),
});

const footer = defineCollection({
  type: 'content_layer',
  loader: glob({ pattern: '*/footer.md', base: './src/content' }),
  schema: z.object({
    organizer: z.string(),
    address: z.string(),
    email: z.string(),
  }),
});

export const collections = { hero, day, booths, footer };
