<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<Header />
<main class="mx-auto max-w-5xl p-5">
	{@render children()}
</main>
<Menu />
