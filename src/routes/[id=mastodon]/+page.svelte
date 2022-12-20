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
				goto(`${data.url}`, { replaceState: true });
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

<div>
	Redirecting
	<br /> to <a href={data.url}>@{data.username}</a>
	<br /> at {data.domain}
	<br />
	<span style="font-size: 1rem" class:translucent={!(intervalId && count)}>
		{#if count}
			<span>in {count} {count > 1 ? 'seconds' : 'second'}</span>
		{:else}
			<span>now.</span>
		{/if}
	</span>
</div>

<style>
	div {
		margin: auto 0;
	}
	.translucent {
		opacity: 20%;
	}
</style>
