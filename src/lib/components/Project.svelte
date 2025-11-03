<script lang="ts">
	import type { Project } from '$lib';
	import ArrowUpLeftIcon from '$lib/icons/ArrowUpLeftIcon.svelte';
	import Button from './Button.svelte';
	import { project } from '$lib/store.svelte';
	type Props = Project & { class: string };
	const { title, description, imageAlt, slug, class: className, link }: Props = $props();
</script>

<article
	class="bg-neutrals-100 dark:bg-neutrals-800 flex h-full flex-col rounded-xl p-4 opacity-0 transition-all duration-150 {className} shadow-xl"
>
	<div
		class="from-neutrals-600 to-neutrals-300 relative overflow-hidden rounded-sm bg-gradient-to-b"
	>
		<img src="projects/{slug}/Hero.png" alt={imageAlt} class="aspect-video w-full" />
		<div class="bg-neutrals-100/20 absolute top-0 left-0 h-full w-full"></div>
		<div class="absolute top-2 left-2">
			<img src="projects/{slug}/Logo.png" class="max-h-8 w-auto" alt={'Product Logo'} />
		</div>
	</div>
	<div class="flex flex-col justify-between gap-4 px-1 py-2">
		<div class="flex flex-col gap-2">
			<p class="line-clamp-3 max-h-[8ch] overflow-hidden text-sm sm:text-base">
				{description}
			</p>
			<div class="flex gap-2">
				<Button href={link} variant="neutral">Visit Site <ArrowUpLeftIcon /></Button>
				<Button
					variant="outline"
					onclick={() => {
						project.open(slug);
					}}>Read More</Button
				>
			</div>
		</div>
	</div>
</article>
