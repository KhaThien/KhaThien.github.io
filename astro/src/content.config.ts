import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title:        z.string(),
    summary:      z.string(),
    thumbnail:    z.string(),
    thumbnailAlt: z.string(),
    tags:         z.array(z.string()),
    date:         z.string(),
    featured:     z.boolean().default(false),
    heroSrc:      z.string().optional(),
    heroAlt:      z.string().optional(),
    subtitle:     z.string().optional(),
    noPage:            z.boolean().default(false),
    label:             z.string().optional(),
    externalUrl:       z.string().optional(),
    thumbnailPosition: z.string().optional(),
    thumbnailScale:    z.number().optional(),
    order:             z.number().optional(),
  }),
});

export const collections = { projects };
