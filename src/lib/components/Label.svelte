<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		class?: string;
	}
	const { children, class: colors }: Props = $props();
</script>

<div class=" flex items-center gap-1 {colors}">
	{@render children()}
</div>
