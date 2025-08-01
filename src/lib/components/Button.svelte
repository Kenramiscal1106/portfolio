<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { MouseEventHandler } from 'svelte/elements';

	const btnclass = {
		primary: 'text-neutrals-100 scale-95',
		neutral: 'bg-neutrals-900 text-neutrals-100 active:scale-95',
		ghost: 'hover:bg-neutrals-200 active:bg-neutrals-300'
	};
	interface Props {
		children: Snippet;
		variant?: 'primary' | 'neutral' | 'ghost';
		onclick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
		href?: string;
		class?: string;
	}
	const { children, variant = 'primary', onclick, href, class: className }: Props = $props();
</script>

{#if href}
	<a
		{href}
		class="flex items-center gap-2 rounded-lg p-2 transition-colors duration-100 {btnclass[
			variant
		]} {className ?? ''}"
		{onclick}
	>
		{@render children()}
	</a>
{:else}
	<button
		class="flex items-center gap-2 rounded-lg p-2 transition-colors duration-100 {btnclass[
			variant
		]} {className ?? ''}"
		{onclick}
	>
		{@render children()}
	</button>
{/if}
