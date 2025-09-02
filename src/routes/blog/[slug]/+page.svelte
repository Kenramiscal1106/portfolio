<script lang="ts">
	import type { PageData, PageProps } from './$types';
	import Label from '$lib/components/Label.svelte';
	import Button from '$lib/components/Button.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let { data }: PageProps = $props();
	let scrollUp = $state(false);
	function scrollUpHandler() {
		if (document.documentElement.scrollTop > window.innerHeight / 2) {
			scrollUp = true;
			return;
		}
		scrollUp = false;
	}
	onMount(() => {
		const links = document.querySelectorAll<HTMLLinkElement>('div.render-markdown a');
		links.forEach((link) => {
			link.setAttribute('target', '_blank');
		});
		window.addEventListener('scroll', scrollUpHandler);
		return () => {
			window.removeEventListener('scroll', scrollUpHandler);
		};
	});
</script>

<svelte:head>
	<title>
		{data.meta.title} | KENDAN Blog
	</title>
</svelte:head>

<div class="mb-4 sm:flex sm:flex-col sm:items-center">
	<h1 class="mb-1 text-2xl font-bold sm:text-4xl">{data.meta.title}</h1>
	<div class="flex gap-3 text-sm">
		<Label class="fill-neutrals-400 text-neutrals-600 stroke-neutrals-400">
			<svg
				class="aspect-square h-6"
				viewBox="0 0 24 24"
				stroke="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M6.75 2.25232C7.16421 2.25232 7.5 2.58811 7.5 3.00232V4.50232H16.5V3.00232C16.5 2.58811 16.8358 2.25232 17.25 2.25232C17.6642 2.25232 18 2.58811 18 3.00232V4.50232H18.75C20.4069 4.50232 21.75 5.84547 21.75 7.50232V18.7523C21.75 20.4092 20.4069 21.7523 18.75 21.7523H5.25C3.59315 21.7523 2.25 20.4092 2.25 18.7523V7.50232C2.25 5.84547 3.59315 4.50232 5.25 4.50232H6V3.00232C6 2.58811 6.33579 2.25232 6.75 2.25232ZM20.25 11.2523C20.25 10.4239 19.5784 9.75232 18.75 9.75232H5.25C4.42157 9.75232 3.75 10.4239 3.75 11.2523V18.7523C3.75 19.5807 4.42157 20.2523 5.25 20.2523H18.75C19.5784 20.2523 20.25 19.5807 20.25 18.7523V11.2523Z"
				/>
			</svg>

			<span>{data.meta.createdAt}</span>
		</Label>
		<Label class="fill-neutrals-400 text-neutrals-600 stroke-neutrals-400">
			<svg class="aspect-square h-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					stroke="none"
					d="M10.3939 2.14963C5.99723 2.14963 2.43304 5.71382 2.43304 10.1105C2.43304 14.5071 5.99723 18.0713 10.3939 18.0713C14.7905 18.0713 18.3547 14.5071 18.3547 10.1105C18.3547 5.71382 14.7905 2.14963 10.3939 2.14963ZM11.0063 5.21149C11.0063 4.87329 10.7321 4.59912 10.3939 4.59912C10.0557 4.59912 9.78151 4.87329 9.78151 5.21149V10.1105C9.78151 10.4487 10.0557 10.7228 10.3939 10.7228H14.0681C14.4063 10.7228 14.6805 10.4487 14.6805 10.1105C14.6805 9.77227 14.4063 9.4981 14.0681 9.4981H11.0063V5.21149Z"
				/>
			</svg>

			<span>{data.meta.readTime}</span>
		</Label>
	</div>
</div>
<div
	class="from-neutrals-600 to-neutrals-300 -mx-3 my-4 overflow-hidden rounded-xl bg-gradient-to-bl"
>
	<img src={data.meta.imageURL} alt={data.meta.imageAlt} class="aspect-video w-full" />
</div>
<div class="mx-auto my-6 max-w-2xl">
	<hr />
	<div class="render-markdown">
		<data.content />
	</div>
	<hr />
	<div class="flex justify-between">
		<Button href="/" variant="outline" class="py-1.5"
			><svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M9.55806 3.20088C9.80214 2.9568 10.1979 2.9568 10.4419 3.20088L17.6831 10.442C17.9271 10.6861 18.3229 10.6861 18.5669 10.442C18.811 10.1979 18.811 9.80219 18.5669 9.55811L11.3258 2.317C10.5936 1.58476 9.40641 1.58476 8.67417 2.317L1.43306 9.55811C1.18898 9.80219 1.18898 10.1979 1.43306 10.442C1.67714 10.6861 2.07286 10.6861 2.31694 10.442L9.55806 3.20088Z"
					fill="#191B1F"
				/>
				<path
					d="M10 4.52671L16.7992 11.3259C16.8239 11.3506 16.8492 11.3746 16.875 11.3977V16.5626C16.875 17.4255 16.1754 18.1251 15.3125 18.1251H12.5C12.1548 18.1251 11.875 17.8452 11.875 17.5001V13.7501C11.875 13.4049 11.5952 13.1251 11.25 13.1251H8.75C8.40482 13.1251 8.125 13.4049 8.125 13.7501V17.5001C8.125 17.8452 7.84518 18.1251 7.5 18.1251H4.6875C3.82456 18.1251 3.125 17.4255 3.125 16.5626V11.3977C3.15077 11.3746 3.17606 11.3506 3.20083 11.3259L10 4.52671Z"
					fill="#191B1F"
				/>
			</svg>
			Home</Button
		><Button href="/blog" variant="neutral"
			>See more blogs <svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M3 10C3 9.58579 3.33579 9.25 3.75 9.25L14.3879 9.25L10.2302 5.29062C9.93159 5.00353 9.92228 4.52875 10.2094 4.23017C10.4965 3.93159 10.9713 3.92228 11.2698 4.20937L16.7698 9.45937C16.9169 9.60078 17 9.79599 17 10C17 10.204 16.9169 10.3992 16.7698 10.5406L11.2698 15.7906C10.9713 16.0777 10.4965 16.0684 10.2094 15.7698C9.92228 15.4713 9.93159 14.9965 10.2302 14.7094L14.3879 10.75L3.75 10.75C3.33579 10.75 3 10.4142 3 10Z"
					fill="#F9FAFA"
				/>
			</svg>
		</Button>
	</div>
</div>

{#if scrollUp}
	<div transition:fade={{ duration: 200 }}>
		<Button
			class="fixed right-4 bottom-4 p-3"
			variant="neutral"
			iconOnly={true}
			onclick={() => {
				document.documentElement.scrollTop = 0;
			}}
			><svg
				width="24"
				height="25"
				viewBox="0 0 24 25"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M11.4697 2.48822C11.7626 2.19533 12.2374 2.19533 12.5303 2.48822L20.0303 9.98822C20.3232 10.2811 20.3232 10.756 20.0303 11.0489C19.7374 11.3418 19.2626 11.3418 18.9697 11.0489L12.75 4.82921V21.0186C12.75 21.4328 12.4142 21.7686 12 21.7686C11.5858 21.7686 11.25 21.4328 11.25 21.0186V4.82921L5.03033 11.0489C4.73744 11.3418 4.26256 11.3418 3.96967 11.0489C3.67678 10.756 3.67678 10.2811 3.96967 9.98822L11.4697 2.48822Z"
					class="fill-neutrals-100"
				/>
			</svg>
		</Button>
	</div>
{/if}

<style>
	@import '../../../app.css';
</style>
