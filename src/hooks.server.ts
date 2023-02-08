import type { Handle } from '@sveltejs/kit';
import { CUSTOM_DOMAIN, PRODUCTION_BRANCH } from './config.json';

export const handle = (async ({ event, resolve }) =>
	await resolve(event, {
		transformPageChunk: ({ html }) =>
			html.replace(
				/__domain/g,
				process.env?.CF_PAGES_BRANCH === PRODUCTION_BRANCH ? CUSTOM_DOMAIN : ''
			)
	})) satisfies Handle;
