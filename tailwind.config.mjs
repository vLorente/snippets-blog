/** @type {import('tailwindcss').Config} */
import animations from "@midudev/tailwind-animations"
import defaultTheme from "tailwindcss/defaultTheme"
const daisyui = require("daisyui")

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: "class", // allows toggling dark mode manually
	theme: {
		extend: {
			fontFamily: {
				sans: ["Roboto", ...defaultTheme.fontFamily.sans]
			}
		},
	},
	plugins: [
		daisyui,
		animations
	],

}
