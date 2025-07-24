<script lang="ts">
	import { menu } from '$lib/store.svelte';
</script>

{#if menu.current}
	<button
		aria-label="overlay"
		class="bg-neutrals-100/35 absolute top-0 left-0 h-dvh w-screen"
		onclick={() => {
			menu.close();
		}}
	></button>
	<div
		class="bg-neutrals-100 absolute right-0 bottom-0 flex h-1/2 w-screen flex-col p-6 text-center text-lg sm:top-0 sm:w-80"
	>
		<a class="py-2" href="/">Home</a>
		<a class="py-2" href="/blog">Blog</a>
		<a class="py-2" href="/contact">Contact Me</a>
	</div>
{/if}
