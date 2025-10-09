<script lang="ts">
	import type { TechMeta } from '$lib';
	import type { Component, Snippet } from 'svelte';

	interface Props {
		name: string;
		description: string;
		icon: Snippet | Component;
		techUsed?: TechMeta[];
	}
	const props: Props = $props();
</script>

{#snippet technology(data: TechMeta)}
	<div
		class="dark:text-neutrals-200 flex items-center gap-1 rounded-lg border-2 px-2 py-1 font-bold dark:font-medium"
		style:border-color="hsl({data.hslaData})"
		style:background-color="hsla({data.hslaData}, 0.2)"
	>
		<div>
			<img src="/images/technology/{data.iconFilename}" alt="logo" class="aspect-square w-[18px]" />
		</div>
		{data.name}
	</div>
{/snippet}

<div
	class="bg-neutrals-100 dark:bg-neutrals-800 anime-skillset basis-80 rounded-xl px-6 py-8 opacity-100 shadow-xl xl:grow"
>
	<props.icon />
	<h3 class="mt-3 text-2xl font-bold">{props.name}</h3>
	<p class="dark:text-neutrals-300 mt-1">{props.description}</p>
	<div class="mt-4 flex flex-col gap-2">
		<div class="font-bold">Technologies used</div>
		{#if props.techUsed}
			<div class="flex flex-wrap gap-2">
				{#each props.techUsed as techData}
					{@render technology(techData)}
				{/each}
			</div>
		{/if}
	</div>
</div>
