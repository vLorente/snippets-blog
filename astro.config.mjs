import react from "@astrojs/react"
import tailwind from "@astrojs/tailwind"
import vercel from "@astrojs/vercel/serverless"
import { defineConfig } from "astro/config"
import rehypeKatex from "rehype-katex"
import remarkMath from "remark-math"
import { remarkReadingTime } from "./src/plugins/remark-reading-time.mjs"


// https://astro.build/config
export default defineConfig({
	integrations: [react(), tailwind()],
	markdown: {
		remarkPlugins: [remarkMath, remarkReadingTime],
		rehypePlugins: [rehypeKatex]
	},
	output: "hybrid",
	adapter: vercel({
		webAnalytics: {
			enabled: true
		}
	})
})
