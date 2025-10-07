<script lang="ts">
	import { page } from '$app/state';
</script>

<h1 class="pt-40 text-center text-3xl font-bold">
	{page.status}: {page.error && page.error.message}
</h1>
