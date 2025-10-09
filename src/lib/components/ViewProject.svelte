<script lang="ts">
	import { getProjectMeta } from '$lib/helper';
	import { project } from '$lib/store.svelte';
	import { fade, fly } from 'svelte/transition';
	import { sineInOut } from 'svelte/easing';
	import Button from '$lib/components/Button.svelte';

	// alert("from ViewProject")
</script>

{#if project.slug}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<div
		class="bg-neutrals-100/30 dark:bg-neutrals-900/30 fixed top-1/2 left-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center p-2 backdrop-blur-xs sm:p-4"
		onclick={() => {
			project.close();
		}}
		transition:fade|global={{ duration: 250 }}
		role="dialog"
		tabindex="-1"
	>
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<div
			class="bg-neutrals-100 dark:bg-neutrals-800 relative max-h-[calc(100dvh-12rem)] shrink basis-2xl overflow-y-auto rounded-xl px-4 py-4 shadow-lg drop-shadow-md sm:px-6"
			onclick={(e) => {
				e.stopPropagation();
			}}
			role="dialog"
			tabindex="-1"
			transition:fly|global={{
				y: 20,
				opacity: 0.2,
				duration: 250,
				easing: sineInOut
			}}
		>
			<button
				class="text-neutrals-400 hover:text-neutrals-800 dark:text-neutrals-300 dark:hover:text-neutrals-400 absolute top-4 right-4 rounded-lg p-2"
				onclick={(e) => {
					project.close();
				}}
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M6.28033 5.22651C5.98744 4.93361 5.51256 4.93361 5.21967 5.22651C4.92678 5.5194 4.92678 5.99427 5.21967 6.28717L8.93934 10.0068L5.21967 13.7265C4.92678 14.0194 4.92678 14.4943 5.21967 14.7872C5.51256 15.0801 5.98744 15.0801 6.28033 14.7872L10 11.0675L13.7197 14.7872C14.0126 15.0801 14.4874 15.0801 14.7803 14.7872C15.0732 14.4943 15.0732 14.0194 14.7803 13.7265L11.0607 10.0068L14.7803 6.28717C15.0732 5.99427 15.0732 5.5194 14.7803 5.22651C14.4874 4.93361 14.0126 4.93361 13.7197 5.22651L10 8.94618L6.28033 5.22651Z"
						fill="currentColor"
					/>
				</svg>
			</button>
			{#await getProjectMeta(project.slug) then { content: MDContent, meta }}
				<div class="flex flex-col gap-3">
					<h2 class="text-3xl font-bold">{meta.title}</h2>
					<img src="projects/{project.slug}/Hero.png" alt="Mockup Display" class="rounded-lg" />
					<div class="render-markdown">
						<MDContent />
					</div>
				</div>
			{:catch error}
				{JSON.stringify(error)}
			{/await}
		</div>
	</div>
{/if}
