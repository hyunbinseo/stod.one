<script lang="ts">
	import { gitHubRepoUrl, gitHubUserUrl } from '$lib/miscellaneous';
</script>

<div class="container">
	<div class="slot">
		<slot />
	</div>
	<footer>
		<a href={gitHubRepoUrl}>stod.one</a> by
		<a href={gitHubUserUrl}>Hyunbin</a>
	</footer>
</div>

<style>
	.container {
		height: 100%;
		width: 100%;
		overflow-y: auto;
		display: flex;
		flex-direction: column;
	}
	.slot {
		flex: 1;
		display: flex;
		margin: 0 auto;
	}
	footer {
		text-align: center;
		font-size: 1rem;
		margin: 0 auto 1rem;
	}
</style>
