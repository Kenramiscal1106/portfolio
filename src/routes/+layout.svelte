<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={`/favicon-light.png`} />
</svelte:head>

<Header />
<Menu />
<main class="mx-auto mt-20 min-h-dvh max-w-5xl px-4 sm:mt-24">
	{@render children()}
</main>
<Footer />
