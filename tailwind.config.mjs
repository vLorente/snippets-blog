/** @type {import('tailwindcss').Config} */
import animations from "@midudev/tailwind-animations"
import defaultTheme from "tailwindcss/defaultTheme"

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	// darkMode: "class", // allows toggling dark mode manually
	theme: {
		extend: {
			fontFamily: {
				sans: ["Roboto", ...defaultTheme.fontFamily.sans]
			}
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("daisyui"),
		animations,
	],
	daisyui: {
		themes: [
			{
				sun: {
					"primary": "#009b76",
					"secondary": "#ff5e00",
					"accent": "#a46800",
					"neutral": "#030c00",
					"base-100": "#fffef1",
					"info": "#0086a0",
					"success": "#00b900",
					"warning": "#cc3600",
					"error": "#ce3457",
				},
			},
			{
				moon: {
					"primary": "#0ea5e9",
					"secondary": "#c084fc",
					"accent": "#008bff",
					"neutral": "#001824",
					"base-100": "#222b3f",
					"info": "#00c1ff",
					"success": "#499500",
					"warning": "#b65800",
					"error": "#ff3f63",
				},
			}
		],
		base: true,
		utils: true,
		logs: true,
	}

}
