<script lang="ts">
	import BlogCard from '$lib/components/BlogCard.svelte';
	const blogData = {
		title: 'My Coding Journey',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sint fugit, dicta a aliquid ',
		date: 'July 20, 2022',
		readTime: '9 min',
		imageURL: 'string',
		imageAlt: 'A mountain climber'
	};
	// export let data: PageData;
</script>

<svelte:head>
	<title>Blog | KENDAN</title>
</svelte:head>

<div class="flex flex-col gap-6">
	<BlogCard {...blogData} />
	<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each new Array(12) as _}
			<BlogCard {...blogData} />
		{/each}
	</div>
</div>
