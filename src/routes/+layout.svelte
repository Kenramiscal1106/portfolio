<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={`/favicon-light.png`} />
</svelte:head>

<Header />
<main class="mx-auto max-w-5xl px-4 py-6">
	{@render children()}
</main>
<Menu />
