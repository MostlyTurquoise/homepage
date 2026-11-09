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

const magnusArchivesEpisodes = defineCollection({
    loader: glob({
        base: "./src/content/magnus-archives-episodes",
        pattern: "*.{md,mdx}",
    }),
    schema: z.discriminatedUnion("type", [
        z.object({
            type: z.literal("episode"),
            title: z.string(),
            number: z.number(),
            listenedOn: z.coerce.date().optional(),
            themes: z.array(z.string()),
            tags: z.array(z.string()).optional(),
            colour: z.string().regex(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/),
        }),
        z.object({
            type: z.literal("hidden"),
            title: z.string().optional(),
            number: z.number().optional(),
            listenedOn: z.coerce.date().optional(),
            themes: z.array(z.string()).optional(),
            colour: z
                .string()
                .regex(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/)
                .optional(),
            name: z.string().optional(),
            tagName: z.string().optional(),
        }),
        z.object({
            type: z.literal("theme"),
            name: z.string(),
            tagName: z.string(),
            colour: z.string().regex(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/),
        }),
    ]),
});

export const collections = { thoughts, webringMembers, magnusArchivesEpisodes };
