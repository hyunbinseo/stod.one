export const mastodonProfileUrl = /^https:\/\/[^/]+\/(?:users\/|@)([a-zA-Z0-9_]+)$/;
export const mastodonId = /^@([a-zA-Z0-9_]+)@((?:[a-z]+.)[a-z]+.[a-z]{2,})$/;

export const htmlHead = {
	title: /<title>.+<\/title>/g,
	description: /<meta content='.+' name='description'>/g,
	openGraph:
		/<meta content="[^"]+" property="og:(?:type|title|description|image|image:width|image:height)" \/>/g
};
