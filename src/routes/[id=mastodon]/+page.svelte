<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { onDestroy } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let intervalId: number;
	let count = 3;

	if (browser) {
		intervalId = window.setInterval(() => {
			if (count) count -= 1;
			if (!count) {
				clearTimeout(intervalId);
				goto(`${data.baseUrl}/@${data.username}`, { replaceState: true });
			}
		}, 1000);
	}

	onDestroy(() => {
		clearTimeout(intervalId);
	});
</script>

<svelte:head>
	<meta name="robots" content="noindex" />
	<meta name="twitter:card" content="summary" />
	{@html data.metadata}
</svelte:head>

<span>
	Redirecting
	<br /> to <a href="{data.baseUrl}/@{data.username}">@{data.username}</a>
	<br /> at <a href="{data.baseUrl}/about">{data.domain}</a>
	<br />
	<span style="font-size: 1rem" class:translucent={!(intervalId && count)}>
		{#if count}
			<span>in {count} {count > 1 ? 'seconds' : 'second'}</span>
		{:else}
			<span>now.</span>
		{/if}
	</span>
</span>

<style>
	.translucent {
		opacity: 20%;
	}
</style>
