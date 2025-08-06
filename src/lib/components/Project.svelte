<script lang="ts">
	import type { Project } from '$lib';
	type Props = Project;
	const { title, description, imageURL, imageAlt, slug }: Props = $props();
</script>

<a href="/project/{slug}" class="group">
	<article
		class="flex h-full flex-col overflow-hidden rounded-xl transition-all duration-150 hover:-translate-y-1 hover:shadow-lg"
	>
		<div class="from-neutrals-600 to-neutrals-300 bg-gradient-to-b">
			<img src={imageURL} alt={imageAlt} class="aspect-video w-full" />
		</div>
		<div class="bg-neutrals-100 flex grow flex-col justify-between gap-4 px-5 py-4">
			<div class="flex flex-col gap-1">
				<h1
					class="group-hover:text-primary-600 text-xl font-bold transition-colors duration-200 active:underline sm:text-2xl sm:active:no-underline lg:text-2xl"
				>
					{title}
				</h1>

				<p class="line-clamp-3 max-h-[8ch] overflow-hidden text-sm sm:text-base">
					{description}
				</p>
			</div>
		</div>
	</article>
</a>
