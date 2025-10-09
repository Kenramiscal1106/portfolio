<script lang="ts">
	import type { Post } from '$lib';
	import Label from './Label.svelte';
	type Props = Post;
	const { title, description, createdAt, readTime, imageURL, imageAlt, slug }: Props = $props();
	const { format } = Intl.DateTimeFormat('en-US', {
		dateStyle: 'long'
	});
	const displayDate = format(new Date(createdAt));
</script>

<a href="/blog/{slug}">
	<article
		class="hover:ring-primary-600 flex h-full flex-col overflow-hidden rounded-xl shadow-xl drop-shadow-lg transition-all duration-150 hover:ring-2"
	>
		<div class="from-neutrals-600 to-neutrals-300 bg-gradient-to-b">
			<img src={imageURL} alt={imageAlt} class="aspect-video w-full" />
		</div>
		<div
			class="dark:bg-neutrals-800 bg-neutrals-100 flex grow flex-col justify-between gap-4 px-5 py-4"
		>
			<div class="flex flex-col gap-1">
				<h2
					class="text-xl font-bold duration-200 active:underline sm:text-2xl sm:active:no-underline lg:text-2xl"
				>
					{title}
				</h2>

				<p class="line-clamp-3 max-h-[8ch] overflow-hidden text-sm sm:text-base">
					{description}
				</p>
			</div>
			<div class="flex flex-wrap gap-4 text-sm">
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

					<span>{displayDate}</span>
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

					<span>{readTime}</span>
				</Label>
			</div>
		</div>
	</article>
</a>
