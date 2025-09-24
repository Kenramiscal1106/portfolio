<script lang="ts">
	import { page } from '$app/state';
</script>

<h1 class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold">
	{page.status}: {page.error && page.error.message}
</h1>
