import { defineCollection, z } from "astro:content"

const postsCollection = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			date: z.date(),
			description: z.string().optional(),
			image: image()
				.refine((img) => img.width >= 1080, {
					message: "Cover image must be at least 1080 pixels wide!",
				})
				.optional(),
			tags: z.array(z.string()).optional(),
			category: z.string().optional(),
		}),
})
export const collections = {
	posts: postsCollection,
}
