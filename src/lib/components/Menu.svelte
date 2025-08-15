<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import { menu } from '$lib/store.svelte';
	import { bounceInOut, sineInOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';
	import Button from './Button.svelte';
	import MenuLink from './MenuLink.svelte';
	onNavigate(({ to, from }) => {
		if (to?.route.id !== from?.route.id) {
			menu.close();
		}
	});
</script>

{#if menu.current}
	<button
		aria-label="overlay"
		class="bg-neutrals-100/35 fixed top-0 left-0 z-30 h-dvh w-screen backdrop-blur-xs"
		in:fade={{ duration: 200 }}
		out:fade={{ duration: 200 }}
		onclick={() => {
			menu.close();
		}}
	></button>
	<aside
		class="bg-neutrals-100/40 fixed right-0 bottom-0 z-30 h-dvh w-full max-w-64 p-6 text-center text-lg backdrop-blur-sm sm:top-0 sm:w-80"
		in:fly={{ x: '100%', duration: 200, easing: sineInOut, opacity: 1 }}
		out:fade={{ duration: 200 }}
	>
		<Button
			onclick={() => {
				menu.close();
			}}
			iconOnly={true}
			variant="ghost"
			class="fill-neutrals-500 hover:fill-neutrals-800 active:fill-neutrals-900"
			><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M7.5364 6.2636C7.18492 5.91213 6.61508 5.91213 6.2636 6.2636C5.91213 6.61508 5.91213 7.18492 6.2636 7.5364L10.7272 12L6.2636 16.4636C5.91213 16.8151 5.91213 17.3849 6.2636 17.7364C6.61508 18.0879 7.18492 18.0879 7.5364 17.7364L12 13.2728L16.4636 17.7364C16.8151 18.0879 17.3849 18.0879 17.7364 17.7364C18.0879 17.3849 18.0879 16.8151 17.7364 16.4636L13.2728 12L17.7364 7.5364C18.0879 7.18492 18.0879 6.61508 17.7364 6.2636C17.3849 5.91213 16.8151 5.91213 16.4636 6.2636L12 10.7272L7.5364 6.2636Z"
				/>
			</svg>
		</Button>
		<div class="flex flex-col gap-1.5">
			<MenuLink href="/">Home</MenuLink>
			<MenuLink href="/blog">Blog</MenuLink>
			<!-- <MenuLink href="/contact">Contact Me</MenuLink>
			<Button
				variant={'neutral'}
				href="Curriculum Vitae.pdf"
				target="_blank"
				download="Curriculum Vitae">Download CV</Button
			> -->
		</div>
	</aside>
{/if}
