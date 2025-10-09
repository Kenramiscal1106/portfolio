<script lang="ts">
	import { page } from '$app/state';
	import type { Snippet } from 'svelte';
	interface Props {
		children: Snippet;
		href: string;
		type?: 'drawer' | 'topnav';
	}
	const { children, href, type = 'drawer' }: Props = $props();
	const route = $derived(page.route.id);
</script>

<a
	class=" p-2 text-lg {route === href
		? 'text-neutrals-900 dark:text-neutrals-300 dark:hover:text-neutrals-300 hover:text-neutrals-900 font-bold'
		: 'text-neutrals-700 dark:text-neutrals-500 dark:hover:text-neutrals-600 hover:text-neutrals-800'} transition-colors duration-150"
	{href}
>
	{@render children()}
</a>
