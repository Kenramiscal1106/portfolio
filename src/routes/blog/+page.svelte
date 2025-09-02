<script lang="ts">
	import BlogCard from '$lib/components/BlogCard.svelte';
	import FeaturedBlog from '$lib/components/FeaturedBlog.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>Blog | KENDAN</title>
</svelte:head>

<div class="flex flex-col gap-6">
	<FeaturedBlog {...data.posts[0]} />
	<h2 class="text-center text-2xl font-bold">Other articles</h2>
	<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each data.posts.slice(1) as post, i}
			<BlogCard {...post} />
		{/each}
	</div>
</div>
