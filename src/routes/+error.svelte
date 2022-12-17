<script>
	import { page } from '$app/stores';
	import { gitHubRepoUrl } from '$lib/miscellaneous';

	const message = $page.status === 404 ? 'User not found.' : 'Something went wrong.';
</script>

<span style="text-align: center;">
	{message}
	{#if $page.status === 500}
		<br />
		<span style="font-size: 1rem">
			Try opening an <a href="{gitHubRepoUrl}/issues">issue</a> in GitHub.
		</span>
	{/if}
</span>
