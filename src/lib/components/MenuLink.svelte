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
	class="{type === 'drawer'
		? ' hover:bg-neutrals-300/30 rounded-xl py-2 transition-colors duration-100'
		: 'text-neutrals-500 hover:text-neutrals-800 p-2 text-lg'} {route === href
		? type === 'drawer'
			? 'bg-neutrals-300/30 text-neutrals-900 font-bold'
			: 'text-neutrals-900 hover:text-neutrals-900 font-bold'
		: ''} transition-colors duration-150"
	{href}
>
	{@render children()}
</a>
