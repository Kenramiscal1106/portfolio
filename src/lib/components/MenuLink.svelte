<script lang="ts">
	import { page } from '$app/state';

	const { children, href } = $props();
	const route = page.route.id;
</script>

<a
	class="hover:bg-neutrals-300/30 rounded-xl py-2 transition-colors duration-100 {route === href
		? 'bg-neutrals-300/30 font-bold'
		: ''} "
	{href}
>
	{@render children()}
</a>
