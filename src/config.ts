import {
	LinkPreset,
	type NavBarConfig,
	type ProfileConfig,
	type SiteConfig,
} from "@/types/config"

export const siteConfig: SiteConfig = {
	title: "vLorente Blog",
	subtitle: "Repositorio de recortes de código y tutoriales",
	lang: "es",
}

export const profileConfig: ProfileConfig = {
	avatar: "./avatar.webp",
	name: "Valentín Lorente",
	bio: "Fullstack Developer",
	links: [
		{
			name: "PersonalPage",
			icon: "code",
			url: "https://vlorente.dev",
		},
		{
			name: "LinkedIn",
			icon: "linkedin",
			url: "https://www.linkedin.com/in/vlorente/",
		},
		{
			name: "GitHub",
			icon: "github",
			url: "https://github.com/vLorente/",
		},
	],
}

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		// {
		// 	name: "Portfolio",
		// 	url: "https://vlorente.dev",
		// 	external: true,
		// },
	],
}
