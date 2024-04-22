import { defineCollection, z } from "astro:content"

const postsCollection = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			draft: z.boolean(),
			title: z.string(),
			published: z.date(),
			description: z.string().optional(),
			cover: image().optional(),
			tags: z.array(z.string()).optional(),
			category: z.string().optional(),
			nextSlug: z.string().optional(),
			nextTitle: z.string().optional(),
			prevSlug: z.string().optional(),
			prevTitle: z.string().optional(),
		}),
})

export const collections = {
	posts: postsCollection,
}
