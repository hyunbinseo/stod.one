import type { Handle } from '@sveltejs/kit';
import { homepage } from '../package.json' assert { type: 'json' };

export const handle = (({ event, resolve }) => {
  if (event.url.pathname === '/')
    return Response.redirect(homepage, 302)

  return resolve(event);
}) satisfies Handle;
