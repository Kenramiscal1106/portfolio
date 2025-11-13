<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		imgSrc: string;
		imgAlt: string;
	}
	const props: Props = $props();
</script>

<article class="flex flex-col gap-3 p-2 sm:gap-6 md:flex-row lg:items-center">
	<div class="grow-0">
		<img src={props.imgSrc} alt={props.imgAlt} class="h-auto w-full rounded-lg" />
	</div>
	<div class="space-y-2 sm:shrink-0 sm:basis-1/2 md:basis-xs lg:basis-sm">
		{@render props.children()}
	</div>
</article>
