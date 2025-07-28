<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}
	const { children }: Props = $props();
</script>

<div class="fill-neutrals-400 text-neutrals-700 stroke-neutrals-400 flex items-center gap-1">
	{@render children()}
</div>
