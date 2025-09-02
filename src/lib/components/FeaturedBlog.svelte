<script lang="ts">
	import type { Post } from '$lib';
	import Button from './Button.svelte';
	import Label from './Label.svelte';
	type Props = Post;
	const { title, description, createdAt, readTime, imageURL, imageAlt, slug }: Props = $props();
	const { format } = Intl.DateTimeFormat('en-US', {
		dateStyle: 'long'
	});
	const displayDate = format(new Date(createdAt));
</script>

<div
	class="relative -mx-4 -mt-20 flex min-h-[calc(100vh/2)] flex-col justify-center gap-2 rounded-none px-6 pt-20 pb-4 sm:mx-0 sm:mt-0 sm:rounded-2xl sm:pt-4"
	style={`background: url("${imageURL}") no-repeat center;background-size:cover`}
>
	<div class="bg-neutrals-800 absolute top-0 left-0 z-[-1] h-full w-full opacity-70"></div>
	<div class="text-neutral-300">Featured Article</div>
	<h1 class="text-neutrals-100 text-4xl font-bold">{title}</h1>
	<div class=" flex flex-wrap gap-4 text-sm">
		<Label>
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

			<span>{displayDate}</span>
		</Label>
		<Label>
			<svg class="aspect-square h-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					stroke="none"
					d="M10.3939 2.14963C5.99723 2.14963 2.43304 5.71382 2.43304 10.1105C2.43304 14.5071 5.99723 18.0713 10.3939 18.0713C14.7905 18.0713 18.3547 14.5071 18.3547 10.1105C18.3547 5.71382 14.7905 2.14963 10.3939 2.14963ZM11.0063 5.21149C11.0063 4.87329 10.7321 4.59912 10.3939 4.59912C10.0557 4.59912 9.78151 4.87329 9.78151 5.21149V10.1105C9.78151 10.4487 10.0557 10.7228 10.3939 10.7228H14.0681C14.4063 10.7228 14.6805 10.4487 14.6805 10.1105C14.6805 9.77227 14.4063 9.4981 14.0681 9.4981H11.0063V5.21149Z"
				/>
			</svg>

			<span>{readTime}</span>
		</Label>
	</div>
	<p class="text-neutrals-100">{description}</p>
	<div>
		<Button variant="primary" href="/blog/{slug}"
			>Continue Reading <svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M5.27459 14.7254C4.90847 14.3593 4.90847 13.7657 5.27459 13.3996L11.7992 6.875H7.1875C6.66973 6.875 6.25 6.45527 6.25 5.9375C6.25 5.41973 6.66973 5 7.1875 5H14.0625C14.5803 5 15 5.41973 15 5.9375V12.8125C15 13.3303 14.5803 13.75 14.0625 13.75C13.5447 13.75 13.125 13.3303 13.125 12.8125V8.20083L6.60041 14.7254C6.2343 15.0915 5.6407 15.0915 5.27459 14.7254Z"
					fill="#F9FAFA"
				/>
			</svg>
		</Button>
	</div>
</div>
