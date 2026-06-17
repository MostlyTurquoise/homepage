import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const thoughts = defineCollection({
    loader: glob({ base: "./src/content/thoughts", pattern: "**/*.{md,mdx}" }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            // Transform string to Date object
            pubDate: z.coerce.date(),
            modDate: z.coerce.date().optional(),
            background: z.string().optional(),
        }),
});

const webringMembers = defineCollection({
    loader: glob({ base: "./src/content/webring", pattern: "*.json" }),
    schema: z.object({
        name: z.string(),
        url: z.string(),
    }),
});

export const collections = { thoughts, webringMembers };
