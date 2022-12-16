import type { Handle } from '@sveltejs/kit';

export const handle = (({ event, resolve }) => {
	if (event.url.pathname === '/')
		return Response.redirect('https://github.com/hyunbinseo/stod.one#readme', 302);

	return resolve(event);
}) satisfies Handle;
