<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { mastodonId } from '$lib/regex';

	if (browser) {
		const [, username, domain] = $page.url.pathname.substring(1).match(mastodonId) || [];
		goto(`https://${domain}/@${username}`);
	}
</script>
