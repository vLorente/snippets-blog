import { LinkPreset, type NavBarLink } from "@/types/config"
import { SiteText } from "./site-texts"

export const LinkPresets: { [key in LinkPreset]: NavBarLink } = {
	[LinkPreset.Home]: {
		name: SiteText.home,
		url: "/",
	},
	[LinkPreset.About]: {
		name: SiteText.about,
		url: "/about",
	},
	[LinkPreset.Archive]: {
		name: SiteText.archive,
		url: "/archive",
	},
}
