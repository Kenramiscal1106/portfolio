<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { MouseEventHandler } from 'svelte/elements';

	interface Props {
		children: Snippet;
		type?: 'primary' | 'secondary' | 'ghost';
		onclick: MouseEventHandler<HTMLButtonElement>;
	}
	const { children, type = 'primary', onclick }: Props = $props();
</script>

<button class="flex gap-2 p-2" {onclick}>{@render children()}</button>
