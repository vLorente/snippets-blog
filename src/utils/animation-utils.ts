import { Page } from "astro"

export function getPaginationDelay(page: Page): number {
	if (page.lastPage === 1) {
		return page.total
	}

	if (page.currentPage === page.lastPage) {
		return page.total % page.size
	}

	return page.size
}
