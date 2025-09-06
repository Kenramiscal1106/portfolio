<script lang="ts">
	import type { Project } from '$lib';
	import Button from './Button.svelte';
	type Props = Project & { class: string };
	const { title, description, imageAlt, slug, class: className, link }: Props = $props();
</script>

<article
	class="bg-neutrals-100 flex h-full flex-col rounded-xl p-4 transition-all duration-150 {className}"
>
	<div class="from-neutrals-600 to-neutrals-300 overflow-hidden rounded-sm bg-gradient-to-b">
		<img src="projects/{slug}/Hero.png" alt={imageAlt} class="aspect-video w-full" />
	</div>
	<div class="flex flex-col justify-between gap-4 py-3">
		<div class="flex flex-col gap-2">
			<div>
				<img src="projects/{slug}/Logo.png" class="max-h-8 w-auto" alt={'Product Logo'} />
			</div>

			<p class="line-clamp-3 max-h-[8ch] overflow-hidden text-sm sm:text-base">
				{description}
			</p>
			<div class="flex gap-2">
				<Button href={link} variant="neutral">Visit Site</Button>
				<Button href="/project/{slug}" variant="outline">Read More</Button>
			</div>
		</div>
	</div>
</article>
