import type { Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
  const { pathname } = event.url;

  const isMastodonUser = pathname.match(/^\/@([A-Za-z_]+)\/([a-z]+.[a-z]{2,})$/);

  if (isMastodonUser) {
    const [, username, domain] = isMastodonUser;
    return Response.redirect(`https://${domain}/@${username}`, 302)
  }
  return resolve(event);
}) satisfies Handle;
