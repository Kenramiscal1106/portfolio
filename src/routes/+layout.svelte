<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={`/favicon-light.png`} />
</svelte:head>

<Header />
<main class="mx-auto min-h-dvh max-w-5xl px-4 py-6">
	{@render children()}
</main>
<Footer />
