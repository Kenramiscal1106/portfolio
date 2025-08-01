<script lang="ts">
	import { MediaQuery } from 'svelte/reactivity';
	import Nav from './Nav.svelte';
	const small = new MediaQuery('max-width: 512px');
	$inspect(small.current);
</script>

<Nav />
