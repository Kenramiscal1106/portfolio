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
		class="bg-neutrals-100 absolute bottom-0 left-0 flex w-screen flex-col p-6 text-center text-lg"
	>
		<a class="py-2" href="/home">Home</a>
		<a class="py-2" href="/blog">Blog</a>
		<a class="py-2" href="/contact">Contact Me</a>
	</div>
{/if}
