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
			if (!count) goto(data.baseUrl, { replaceState: true });
		}, 1000);
	}

	onDestroy(() => {
		clearTimeout(intervalId);
	});
</script>

<span>
	Redirecting to <a href="{data.baseUrl}/@{data.username}">@{data.username}</a> at
	<a href={data.baseUrl}>{data.domain}</a> in {count}
</span>
