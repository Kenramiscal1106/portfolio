<!-- <script lang="ts">
	import type { Snippet } from 'svelte';
	import type { MouseEventHandler } from 'svelte/elements';

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
	// {btnclass[variant]}
</script>

<a
	{href}
	class="flex items-center justify-center gap-2 rounded-lg {iconOnly
		? 'p-1.5'
		: 'px-3 py-1.5'} transition-colors duration-100 {className ?? ''}"
	{onclick}
	{...props}
>
	{@render children()}
</a> -->
