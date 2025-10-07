<script lang="ts">
	import { getProjectMeta } from '$lib/helper';
	import { project } from '$lib/store.svelte';

	// alert("from ViewProject")

</script>

{#if project.slug}
	<div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-neutrals-100/30" onclick={() => {
		project.close()
	}}></div>
	<div
		class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-neutrals-100 p-6 shadow-lg drop-shadow-md rounded-xl" in:fly>
		{#await getProjectMeta(project.slug)}
		{:then { content: MDContent, meta }}
			<h2 class="text-3xl font-bold">{meta.title}</h2>
			<div class="render-markdown">

				<MDContent />
			</div>
		{:catch error}
			{JSON.stringify(error)}
		{/await}
	</div>
{/if}

