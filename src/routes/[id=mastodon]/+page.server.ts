import { htmlHead, mastodonId, mastodonProfileUrl } from '$lib/regex';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch, params: { id } }) => {
	const [, , providedDomain] = id.match(mastodonId) || [];

	const preflight = await fetch(
		`https://${providedDomain}/.well-known/webfinger?resource=acct:${id.substring(1)}`
	);

	if (!preflight.ok) throw error(preflight.status);

	const { aliases } = await preflight.json();
	if (!Array.isArray(aliases)) throw error(500);

	const [profileUrl] = aliases;
	if (typeof profileUrl !== 'string') throw error(500);

	const match = profileUrl.match(mastodonProfileUrl);
	if (!match) throw error(500);

	const [, username] = match;

	let metadata = '';

	const response = await fetch(profileUrl);

	if (response.ok) {
		const html = await response.text();
		metadata = Object.values(htmlHead)
			.map((regex) => (html.match(regex) || []).join(''))
			.reduce((acc, cur) => `${acc}${cur}`);
	}

	return { username, domain: providedDomain, url: profileUrl, metadata };
}) satisfies PageServerLoad;
