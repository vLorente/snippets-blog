import { SiteText } from "@constants/site-texts"

export const getMinuteText = (minutes: number): string => {
	return minutes !== 1 ? SiteText.minutesCount : SiteText.minuteCount
}

export const getPostText = (posts: number): string => {
	return posts !== 1 ? SiteText.postsCounts : SiteText.postCount
}

export const getWordText = (words: number): string => {
	return words !== 1 ? SiteText.wordsCount : SiteText.wordCount
}
