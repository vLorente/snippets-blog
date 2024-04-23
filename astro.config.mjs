import tailwind from "@astrojs/tailwind"
import swup from "@swup/astro"
import { defineConfig } from "astro/config"
import rehypeKatex from "rehype-katex"
import remarkMath from "remark-math"
import { remarkReadingTime } from "./src/plugins/remark-reading-time.mjs"

import vercel from "@astrojs/vercel/serverless"

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), swup({
		theme: false,
		animationClass: "transition-",
		containers: ["main"],
		smoothScrolling: true,
		cache: true,
		preload: true,
		accessibility: true,
		globalInstance: true
	})],
	markdown: {
		remarkPlugins: [remarkMath, remarkReadingTime],
		rehypePlugins: [rehypeKatex]
	},
	output: "hybrid",
	adapter: vercel({
		webAnalytics: { enabled: true }
	})
})
