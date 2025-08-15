<script lang="ts">
	import BlogCard from '$lib/components/BlogCard.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>Blog | KENDAN</title>
</svelte:head>

<div class="flex flex-col gap-6">
	<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each data.posts as post}
			<BlogCard {...post} />
		{/each}
	</div>
</div>
