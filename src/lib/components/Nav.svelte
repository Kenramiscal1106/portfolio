<script lang="ts">
	import { menu } from '$lib/store.svelte';
	import { onMount } from 'svelte';
	import Button from './Button.svelte';
	// import MenuLink from './NavLink.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import NavLink from './NavLink.svelte';
	import Logo from './Logo.svelte';
	let lastScrollY = $state(0);
	let visible = $state(true);
	function scrollVisible() {
		const currentScrollY = window.scrollY;
		visible = lastScrollY > currentScrollY;
		lastScrollY = currentScrollY;
	}
	onMount(() => {
		lastScrollY = window.scrollY;
		window.addEventListener('scroll', scrollVisible);
		return () => {
			window.removeEventListener('scroll', scrollVisible);
		};
	});
</script>

<nav
	class="sm:bg-neutrals-100 dark:sm:bg-neutrals-800 fixed top-3 left-1/2 z-20 w-full max-w-5xl -translate-x-1/2 px-3 shadow-none sm:top-0 sm:w-full sm:max-w-none sm:shadow-lg md:top-0 md:px-0"
>
	<div
		class="bg-neutrals-100 dark:bg-neutrals-800 sm:bg-transparent dark:sm:bg-transparent {visible
			? 'translate-y-0 opacity-100'
			: '-translate-y-4 opacity-0 sm:translate-y-0 sm:opacity-100'} mx-auto flex items-center justify-between rounded-xl px-6 py-2.5 shadow-xl backdrop-blur-sm transition-all duration-400 sm:max-w-5xl sm:rounded-none sm:py-3 sm:shadow-none sm:drop-shadow-none"
	>
		<div class="">
			<a href="/">
				<Logo />
			</a>
		</div>
		<div class="hidden items-center gap-3 sm:flex">
			<NavLink href="/">Home</NavLink>
			<NavLink href="/blog">Blog</NavLink>
			<Button variant="neutral" class="dark:bg-primary-600 " href={'/CV.pdf'}>
				<svg
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M10 1.25C10.3452 1.25 10.625 1.52982 10.625 1.875L10.625 6.25H9.375V1.875C9.375 1.52982 9.65482 1.25 10 1.25Z"
						fill="#F9FAFA"
					/>
					<path
						d="M9.375 6.25L9.375 10.9911L7.94194 9.55806C7.69786 9.31398 7.30214 9.31398 7.05806 9.55806C6.81398 9.80214 6.81398 10.1979 7.05806 10.4419L9.55806 12.9419C9.67527 13.0592 9.83424 13.125 10 13.125C10.1658 13.125 10.3247 13.0592 10.4419 12.9419L12.9419 10.4419C13.186 10.1979 13.186 9.80214 12.9419 9.55806C12.6979 9.31398 12.3021 9.31398 12.0581 9.55806L10.625 10.9911V6.25H13.75C15.1307 6.25 16.25 7.36929 16.25 8.75V16.25C16.25 17.6307 15.1307 18.75 13.75 18.75H6.25C4.86929 18.75 3.75 17.6307 3.75 16.25V8.75C3.75 7.36929 4.86929 6.25 6.25 6.25H9.375Z"
						fill="#F9FAFA"
					/>
				</svg>
				Download CV
			</Button>
			<ThemeToggle />
		</div>
		<div class="sm:hidden">
			<Button
				variant="ghost"
				onclick={() => {
					menu.open();
				}}
			>
				Menu
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M3 6.75C3 6.33579 3.33579 6 3.75 6H20.25C20.6642 6 21 6.33579 21 6.75C21 7.16421 20.6642 7.5 20.25 7.5H3.75C3.33579 7.5 3 7.16421 3 6.75ZM3 12C3 11.5858 3.33579 11.25 3.75 11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H3.75C3.33579 12.75 3 12.4142 3 12ZM11.25 17.25C11.25 16.8358 11.5858 16.5 12 16.5H20.25C20.6642 16.5 21 16.8358 21 17.25C21 17.6642 20.6642 18 20.25 18H12C11.5858 18 11.25 17.6642 11.25 17.25Z"
						class="fill-neutrals-900"
					/>
				</svg>
			</Button>
		</div>
	</div>
</nav>
