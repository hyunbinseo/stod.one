import { htmlHead, mastodonId } from '$lib/regex';
import type { PageLoad } from './$types';

export const load = (async ({ fetch, params: { id } }) => {
	const [, username, domain] = id.match(mastodonId) || [];
	const baseUrl = `https://${domain}`;
	let metadata = '';
	const response = await fetch(`${baseUrl}/@${username}`);
	if (response.ok) {
		const html = await response.text();
		metadata = Object.values(htmlHead)
			.map((regex) => (html.match(regex) || []).join(''))
			.reduce((acc, cur) => `${acc}${cur}`);
	}
	return { username, domain, baseUrl, metadata };
}) satisfies PageLoad;
