<script lang="ts">
	import { gitHubRepoUrl, gitHubUserUrl } from '$lib/miscellaneous';
</script>

<slot />

<noscript>JavaScript is not available.</noscript>

<footer>
	<a href={gitHubRepoUrl}>stod.one</a> by
	<a href={gitHubUserUrl}>Hyunbin</a>
</footer>

<style>
	footer {
		position: fixed;
		bottom: 0;
		font-size: 1rem;
		margin-bottom: 1rem;
	}
</style>
