import type { SocialIconName } from "@/types/icon"

export type ProfileConfig = {
	avatar: ImageMetadata
	name: string
	bio?: string
	links: {
		name: string
		url: string
		icon: SocialIconName
	}[]
}

export type SiteConfig = {
	title: string
	subtitle: string
	lang: string
}

export enum LinkPreset {
	Home = 0,
	Archive = 1,
	About = 2,
}

export type NavBarLink = {
	name: string
	url: string
	external?: boolean
}

export type NavBarConfig = {
	links: (NavBarLink | LinkPreset)[]
}
