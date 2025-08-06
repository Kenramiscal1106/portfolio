<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { MouseEventHandler } from 'svelte/elements';

	const btnclass = {
		primary: 'text-neutrals-100 scale-95',
		neutral: 'bg-neutrals-900 text-neutrals-100 active:scale-95',
		outline: 'border-neutrals-300 border-2 hover:border-neutrals-400',
		ghost: 'hover:bg-neutrals-200 active:bg-neutrals-300'
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
		class="flex items-center justify-center gap-2 rounded-lg {iconOnly
			? 'p-1.5'
			: 'px-3 py-1.5'} transition-colors duration-100 {btnclass[variant]} {className ?? ''}"
		{onclick}
		{...props}
	>
		{@render children()}
	</a>
{:else}
	<button
		class="flex items-center justify-center gap-2 rounded-lg {iconOnly
			? 'p-1.5'
			: 'px-3 py-1.5'} transition-colors duration-100 {btnclass[variant]} {className ?? ''}"
		{...props}
		{onclick}
	>
		{@render children()}
	</button>
{/if}
