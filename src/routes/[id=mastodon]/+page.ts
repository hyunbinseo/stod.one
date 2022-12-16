import { mastodonId } from '$lib/regex';
import type { PageLoad } from './$types';

export const load = (({ params: { id } }) => {
	const [, username, domain] = id.match(mastodonId) || [];
	return { username, domain, baseUrl: `https://${domain}` };
}) satisfies PageLoad;
