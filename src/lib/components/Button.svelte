<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { MouseEventHandler } from 'svelte/elements';
	const btnclass = {
		primary: 'text-neutrals-100 scale-95 bg-primary-700',
		neutral: 'bg-neutrals-900 text-neutrals-100 bg-accent-900 active:scale-95 dark:bg-primary-600',
		outline:
			'border-neutrals-200 border-2 hover:border-neutrals-300 active:bg-neutrals-200 active:border-transparent dark:border-neutrals-700 dark:hover:border-neutrals-600 dark:active:bg-neutrals-700 dark:active:border-transparent',
		ghost:
			'hover:bg-neutrals-200 active:bg-neutrals-300 dark:hover:bg-neutrals-800 dark:active:bg-neutrals-900'
	};
	interface Props {
		children: Snippet;
		variant?: 'primary' | 'neutral' | 'ghost' | 'outline';
		onclick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
		href?: string;
		class?: string;
		[key: string]: any;
		iconOnly?: boolean;
	}
	const {
		children,
		variant = 'primary',
		onclick,
		href,
		class: className,
		iconOnly = false,
		...props
	}: Props = $props();
</script>

{#if href}
	<a
		{href}
		target={href.includes('https://') ? '_blank' : ''}
		class="flex items-center justify-center gap-2 rounded-lg {iconOnly
			? 'p-1.5'
			: 'px-3 py-1.5 sm:py-2'} w-max transition-colors duration-100 {btnclass[
			variant
		]} {className ?? ''}"
		{onclick}
		{...props}
	>
		{@render children()}
	</a>
{:else}
	<button
		class="flex items-center justify-center gap-2 rounded-lg {iconOnly
			? 'p-1.5'
			: 'px-3 py-1.5 sm:px-4 sm:py-2'} transition-colors duration-100 {btnclass[
			variant
		]} {className ?? ''}"
		{...props}
		{onclick}
	>
		{@render children()}
	</button>
{/if}
