import { mastodonId } from '$lib/regex';
import type { ParamMatcher } from '@sveltejs/kit';

export const match = ((param) => {
	return mastodonId.test(param);
}) satisfies ParamMatcher;
