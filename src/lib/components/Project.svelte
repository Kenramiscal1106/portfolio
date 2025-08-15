<script lang="ts">
	import type { Project } from '$lib';
	import Button from './Button.svelte';
	type Props = Project & { class: string };
	const { title, description, imageURL, imageAlt, slug, class: className }: Props = $props();
</script>

<article
	class="flex h-full flex-col overflow-hidden rounded-xl transition-all duration-150 {className}"
>
	<div class="from-neutrals-600 to-neutrals-300 bg-gradient-to-b">
		<img src={imageURL} alt={imageAlt} class="aspect-video w-full" />
	</div>
	<div class="bg-neutrals-100 flex flex-col justify-between gap-4 px-5 py-4">
		<div class="flex flex-col gap-1">
			<h1
				class="text-xl font-bold transition-colors duration-200 active:underline sm:text-2xl sm:active:no-underline lg:text-2xl"
			>
				{title}
			</h1>

			<p class="line-clamp-3 max-h-[8ch] overflow-hidden text-sm sm:text-base">
				{description}
			</p>
			<div class="mt-5">
				<Button href="/project/{slug}" variant="neutral">Read More</Button>
			</div>
		</div>
	</div>
</article>
