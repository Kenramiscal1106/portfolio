<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import { menu } from '$lib/store.svelte';
	import { bounceInOut, sineInOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';
	onNavigate(({ to, from }) => {
		if (to?.route.id !== from?.route.id) {
			menu.close();
		}
	});
</script>

{#if menu.current}
	<button
		aria-label="overlay"
		class="bg-neutrals-100/35 absolute top-0 left-0 h-dvh w-screen"
		transition:fade={{ duration: 200 }}
		onclick={() => {
			menu.close();
		}}
	></button>
	<div
		class="bg-neutrals-100 absolute right-0 bottom-0 flex h-dvh w-full max-w-64 flex-col p-6 text-center text-lg sm:top-0 sm:w-80"
		transition:fly={{ x: '100%', duration: 200, easing: sineInOut, opacity: 1 }}
	>
		<a class="py-2" href="/">Home</a>
		<a class="py-2" href="/blog">Blog</a>
		<a class="py-2" href="/contact">Contact Me</a>
	</div>
{/if}
