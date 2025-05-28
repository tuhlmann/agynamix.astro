import { defineCollection, z } from 'astro:content';

const legal = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  legal,
};