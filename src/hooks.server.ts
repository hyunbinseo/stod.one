import { gitHubRepoUrl } from '$lib/miscellaneous';
import type { Handle } from '@sveltejs/kit';

export const handle = (({ event, resolve }) => {
	if (event.url.pathname === '/') return Response.redirect(`${gitHubRepoUrl}#readme`, 302);

	return resolve(event);
}) satisfies Handle;
