<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import { onMount } from 'svelte';
	import '../app.css';
	onMount(() => {
		const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light';
		const theme = localStorage.getItem('theme');
		if (theme === null || theme === 'system') {
			document.documentElement.setAttribute('data-theme', systemTheme);
		} else if (theme === 'light' || theme === 'dark') {
			document.documentElement.setAttribute('data-theme', theme);
		}
		if (theme === null) {
			localStorage.setItem('theme', 'system');
		}
	});
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
