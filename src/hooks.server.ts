import type { Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) =>
	await resolve(event, {
		transformPageChunk: ({ html }) => html.replace(/__domain/g, process.env?.CF_PAGES_URL || '')
	})) satisfies Handle;
