<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import {
		animate,
		createTimeline,
		type DOMTargetSelector,
		onScroll,
		stagger,
		svg,
		text,
		utils
	} from 'animejs';
	import { onMount } from 'svelte';
	import Project from '$lib/components/Project.svelte';
	import DownIcon from '$lib/icons/DownIcon.svelte';
	import SkillSet from '$lib/components/SkillSet.svelte';
	import DevelopIcon from '$lib/icons/DevelopIcon.svelte';
	import DesignIcon from '$lib/icons/DesignIcon.svelte';
	import GithubIcon from '$lib/icons/socials/GithubIcon.svelte';
	import LinkedinIcon from '$lib/icons/socials/LinkedinIcon.svelte';
	import DiscordIcon from '$lib/icons/socials/DiscordIcon.svelte';
	import { project } from '$lib/store.svelte';
	import ViewProject from '$lib/components/ViewProject.svelte';
	import Event from '$lib/components/Event.svelte';

	const cssVar = (name: string) => ($el: DOMTargetSelector) => utils.get($el, name);
	let animating = $state(true);
	onMount(() => {
		// window.scrollTo({
		// 	top: 0,
		// 	behavior: 'instant'
		// });
		const { chars } = text.split('#intromsg', {
			chars: { wrap: 'visible' }
		});
		const textAnimate = animate(chars, {
			opacity: [0, 1],
			duration: 100,
			delay: stagger(50),
			ease: 'inOut'
		});
		createTimeline({
			onComplete: () => (animating = false)
		})
			.add('#hero-container', {
				opacity: [0.5, 1],
				duration: 500
			})
			.add(svg.createDrawable('#heroDraw'), {
				draw: ['0 0', '0 1'],
				duration: 2000,
				ease: 'inOutSine'
			})
			.add('#heroDraw', {
				opacity: [1, 0],
				duration: 175
			})
			.add(
				"[alt='Hero Section']",
				{
					opacity: [0, 1],
					duration: 175
				},
				'-=350'
			)
			.add('#greeting', {
				opacity: [0, 1],
				y: ['-16px', 0],
				duration: 150
			})
			.sync(textAnimate)
			.add('.link-set', {
				opacity: [0, 1],
				y: ['-16px', 0],
				duration: 150
			})
			.add(
				'#CTAButton',
				{
					opacity: [0, 1],
					scale: ['90%', '100%'],
					duration: 150
				},
				'-=150'
			);

		createTimeline({
			autoplay: onScroll({
				container: 'body',
				enter: '25% top',
				target: '.skill-set-container'
			}),
			defaults: {
				duration: 250
			}
		}).add(['#skill-set h2', '.anime-skillset > *'], {
			opacity: [0, 1],
			scale: [0.9, 1],
			delay: stagger(250),
			ease: 'outExpo'
		});

		animate(['#projects-created h2', '.anime-projects > article'], {
			duration: 300,
			delay: stagger(250),
			ease: 'outExpo',
			opacity: [0, 1],
			scale: [0.9, 1],
			autoplay: onScroll({
				container: 'body',
				enter: '30% top',
				target: '#projects-created'
			})
		});

		// const projectTimeline = createTimeline({})
	});

	const { data } = $props();

	// $effect(() => {
	// 	if (project.isOpen || animating) {
	// 		document.documentElement.classList.add('overflow-y-hidden');
	// 	} else {
	// 		document.documentElement.classList.remove('overflow-y-hidden');
	// 	}
	// 	return () => {
	// 		document.documentElement.classList.remove('overflow-y-hidden');
	// 	};
	// });
</script>

<svelte:head>
	<title>KENDAN</title>
	<meta property="og:title" content="Ken Daniele Ramiscal" />
	<meta property="og:url" content="https://kendan.dev" />
	<meta property="og:image" content="https://kendan.dev/og/homepage.png" />
	<meta
		property="og:description"
		content="A web developer and designer currently taking up Computer Science degree program"
	/>
	<meta
		property="twitter:description"
		content="A web developer and designer currently taking up Computer Science degree program"
	/>
</svelte:head>
<div class="min-h-[calc(100dvh-96px)] pt-12">
	<div class="flex flex-col items-center gap-12 lg:flex-row lg:justify-center">
		<div
			id="hero-container"
			class="bg-neutrals-100 dark:bg-neutrals-700 mx-auto flex w-full max-w-72 flex-col items-center rounded-2xl p-8 shadow-lg sm:max-w-80 lg:mx-0"
		>
			<div class="relative">
				<img src="HeroImage.png" alt="Hero Section" class="h-auto w-full opacity-0" />
				<svg
					viewBox="0 0 605 545"
					fill="none"
					class="absolute bottom-0 left-0 h-auto w-full"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						id="heroDraw"
						d="M255.135 11.3966C277.382 1.71678 298.446 0.525325 312.566 0.695435C319.594 0.780099 333.752 2.7327 347.147 5.62903C353.841 7.07624 360.327 8.75601 365.624 10.549C368.272 11.4454 370.615 12.3676 372.534 13.2999C374.46 14.2356 375.928 15.1669 376.852 16.0704C382.027 21.1338 383.88 27.8776 385.173 32.6056C385.484 33.7427 385.766 34.7745 386.055 35.6261C386.34 36.4665 386.651 37.1915 387.043 37.6818C387.33 38.0409 387.769 38.3515 388.283 38.631C388.805 38.9145 389.442 39.1878 390.163 39.4572C391.603 39.9954 393.429 40.5392 395.424 41.1339C400.507 42.6498 406.719 44.5072 411.021 47.5001C415.6 50.6856 417.314 54.7569 418.965 58.6974C420.057 61.3046 421.136 63.8942 423.042 66.0118C424.316 67.4279 426.524 69.3543 429.058 71.5675C432.479 74.5563 436.537 78.1023 439.896 81.7501C443.271 85.4162 445.861 89.1038 446.454 92.3683C447.061 95.7088 446.898 99.8777 446.433 103.984C445.968 108.082 445.207 112.076 444.638 115.061C444.426 116.173 444.239 117.15 444.106 117.936C443.976 118.708 443.889 119.337 443.889 119.734C443.889 120.35 443.743 121.082 443.498 121.929C443.253 122.773 442.919 123.699 442.556 124.703C441.933 126.425 441.233 128.361 440.829 130.378C439.985 134.597 437.099 143.091 435.736 146.669C435.036 148.507 433.877 153.54 432.814 158.813C431.748 164.101 430.764 169.704 430.42 172.71C430.067 175.796 428.343 179.908 427.02 183.054C426.446 184.418 425.942 185.613 425.687 186.426C425.622 186.632 425.57 186.823 425.536 186.993C425.504 187.156 425.481 187.332 425.498 187.494C425.514 187.646 425.58 187.919 425.854 188.063C426.105 188.195 426.36 188.122 426.498 188.067C427.352 187.725 429.045 187.048 430.691 186.499C431.516 186.224 432.318 185.985 432.991 185.836C433.328 185.761 433.624 185.712 433.869 185.69C434.122 185.667 434.287 185.678 434.377 185.7C434.58 185.751 434.86 185.787 435.148 185.824C436.217 185.963 437.927 186.189 439.608 187.259C441.274 188.319 442.961 190.241 443.904 193.867C446.109 202.348 446.783 209.281 446.107 216.717C445.698 221.223 443.587 226.322 441.665 230.955C440.461 233.856 439.327 236.587 438.787 238.813C438.386 240.468 437.926 242.678 437.437 245.032C436.843 247.886 436.205 250.959 435.564 253.559C435.244 254.859 434.924 256.033 434.612 256.999C434.297 257.975 434 258.702 433.733 259.129C432.13 261.695 427.897 264.461 422.37 264.692C420.446 264.772 418.305 264.074 416.416 263.106C414.529 262.138 412.962 260.935 412.188 260.081L411.97 259.839L411.723 259.921C411.707 259.919 411.687 259.918 411.66 259.913L410.62 259.703C410.383 259.659 410.119 259.615 409.834 259.579C408.809 259.451 408.458 259.225 408.055 259.09L407.681 258.965L407.472 259.299C407.452 259.331 407.4 259.389 407.271 259.484C407.142 259.577 406.982 259.675 406.773 259.806C406.368 260.059 405.845 260.397 405.326 260.916C405.229 261.013 405.155 261.136 405.101 261.243C405.041 261.358 404.983 261.494 404.926 261.645C404.811 261.946 404.688 262.335 404.558 262.79C404.297 263.703 404.001 264.919 403.684 266.309C403.048 269.09 402.321 272.606 401.63 275.86C400.522 281.073 398.367 287.78 397.528 290.449C396.045 295.169 390.237 307.067 385.983 314.042L385.897 314.183L385.912 314.347C386.023 315.594 385.939 318.487 385.91 322.207C385.882 325.898 385.91 330.349 386.253 334.635C386.605 339.033 387.116 344.196 387.54 348.258C387.752 350.289 387.942 352.045 388.079 353.294C388.148 353.918 388.203 354.416 388.241 354.758C388.26 354.929 388.275 355.06 388.285 355.15C388.29 355.194 388.294 355.227 388.297 355.25C388.298 355.261 388.299 355.271 388.3 355.276C388.3 355.279 388.3 355.281 388.3 355.282L388.301 355.284V355.285L388.32 355.462L388.448 355.587L388.454 355.593C388.458 355.597 388.465 355.603 388.473 355.61C388.489 355.627 388.514 355.652 388.546 355.683C388.609 355.745 388.701 355.836 388.813 355.949C389.04 356.176 389.351 356.493 389.692 356.852C390.369 357.563 391.14 358.419 391.604 359.065L405.224 389.029L405.287 389.168L405.417 389.248C406.634 389.997 408.047 390.135 410.058 390.446C412.091 390.761 414.892 391.262 419.07 392.676C422.742 395.838 428.284 398.85 433.697 401.328C439.158 403.828 444.531 405.805 447.816 406.862L447.829 406.866L447.842 406.869C460.748 410.266 484.835 420.859 506.735 431.266C528.633 441.671 548.256 451.846 552.232 454.384C556.817 457.31 562.684 461.689 567.973 465.709C573.215 469.694 577.907 473.341 580.158 474.819C581.085 475.633 582.421 477.324 584.07 479.679C585.721 482.035 587.656 485.012 589.766 488.336C593.954 494.936 598.834 502.909 603.5 510.042V543.5H1.51074C7.13772 532.872 17.5402 510.681 18.8682 507.893C19.5017 506.562 20.7816 505.241 22.1826 504.116C23.575 502.998 25.0371 502.113 25.9727 501.646L26.1963 501.533L26.2412 501.287C26.3427 500.729 26.9774 498.405 28.8779 495.871C30.8858 493.194 33.3997 491.128 34.5527 490.359L34.6768 490.277L34.7354 490.141C34.792 490.008 35.0196 489.634 35.4414 489.123C35.8533 488.624 36.4277 488.023 37.1504 487.432C37.4721 487.169 37.9503 486.908 38.5527 486.643C39.1501 486.379 39.8351 486.125 40.5537 485.859C41.9641 485.339 43.5308 484.772 44.6143 484.05L44.6309 484.039L44.6465 484.026C48.7141 480.806 67.4978 467.942 89.1045 454.731C111.422 441.085 134.101 427.715 135.138 427.11C135.667 426.802 136.664 426.013 137.661 425.153C138.667 424.286 139.723 423.302 140.373 422.579C141.63 421.181 143.068 419.692 144.536 418.742C145.862 417.884 150.201 415.391 154.908 412.792C160.36 409.782 165.911 406.456 167.397 405.434C168.512 404.668 169.896 403.519 171.254 402.392C172.279 401.541 173.293 400.699 174.19 400.019C175.104 399.327 175.841 398.846 176.323 398.671C176.716 398.528 177.412 398.375 178.314 398.213C179.206 398.053 180.262 397.89 181.354 397.722C182.595 397.53 183.882 397.332 185.008 397.124C186.122 396.918 187.118 396.697 187.757 396.451C188.651 396.107 189.493 395.334 190.229 394.5C190.973 393.656 191.662 392.686 192.23 391.886C192.734 391.178 193.118 390.639 193.388 390.369C193.489 390.268 193.71 390.156 194.092 390.074C194.458 389.996 194.908 389.959 195.394 389.953C196.363 389.942 197.407 390.058 198.068 390.168L198.416 390.226L198.587 389.917L201.146 385.314L201.208 385.2V385.074L201.209 385.061C201.21 385.046 201.21 385.02 201.214 384.982C201.221 384.905 201.236 384.779 201.266 384.599C201.326 384.239 201.448 383.662 201.698 382.827C201.812 382.448 202.049 381.927 202.359 381.323C202.666 380.726 203.03 380.076 203.383 379.443C203.733 378.816 204.075 378.202 204.329 377.693C204.456 377.438 204.566 377.199 204.646 376.991C204.718 376.8 204.789 376.576 204.789 376.374C204.789 375.288 205.267 372.827 207.089 370.177L207.119 370.133L207.139 370.084C207.543 369.101 207.787 367.875 207.959 366.856C208.002 366.599 208.042 366.352 208.078 366.124C208.115 365.895 208.148 365.686 208.18 365.5C208.247 365.102 208.297 364.883 208.33 364.805C208.558 364.273 208.82 363.932 209.137 363.531C209.458 363.125 209.828 362.663 210.193 361.932C210.516 361.286 212.097 358.445 213.543 355.092C214.231 353.497 214.91 351.923 215.489 350.686C215.779 350.066 216.04 349.538 216.263 349.139C216.374 348.939 216.472 348.777 216.556 348.654C216.644 348.525 216.7 348.465 216.722 348.446C216.881 348.31 217.165 348.172 217.572 348.052C217.969 347.935 218.438 347.848 218.926 347.787C219.906 347.666 220.91 347.659 221.465 347.712L221.971 347.76L222.011 347.253C223.165 332.564 223.155 324.248 223.376 308.853L223.378 308.748L223.337 308.651C222.629 306.979 221.295 304.282 220.026 301.438C218.741 298.556 217.493 295.466 216.883 292.872C216.535 291.395 216.016 289.839 215.44 288.177C214.865 286.514 214.232 284.741 213.641 282.799C212.889 279.588 212.242 276.153 211.47 273.569C211.083 272.274 210.65 271.141 210.13 270.33C209.616 269.529 208.931 268.917 208.02 268.955C205.512 269.06 203.751 270.307 202.796 271.525C202.545 271.844 202.002 272.194 201.259 272.566C200.53 272.93 199.717 273.265 198.968 273.603C195.696 275.075 191.045 275.093 186.842 274.084C186.05 273.894 185.193 273.242 184.318 272.222C183.454 271.214 182.624 269.906 181.868 268.512C180.358 265.724 179.185 262.655 178.674 261.112L178.671 261.106L178.669 261.099L177.789 258.707C177.401 257.651 176.943 256.401 176.495 255.153C176.048 253.908 175.612 252.67 175.268 251.639C174.919 250.596 174.675 249.795 174.597 249.405C174.541 249.128 174.404 248.786 174.229 248.42C174.049 248.045 173.813 247.612 173.538 247.143C172.989 246.204 172.273 245.101 171.513 243.997C169.998 241.8 168.271 239.55 167.298 238.577C166.887 238.167 166.279 237.216 165.571 235.922C164.875 234.648 164.113 233.098 163.391 231.537C161.938 228.396 160.68 225.284 160.438 224.315C160.089 222.919 159.802 220.277 159.749 217.393C159.696 214.51 159.878 211.449 160.438 209.21C160.83 207.638 162.032 205.929 163.7 204.406C165.361 202.891 167.436 201.606 169.501 200.862C170.253 200.592 171.237 200.535 172.373 200.653C173.503 200.771 174.744 201.056 175.986 201.433C178.472 202.186 180.914 203.29 182.398 204.074L182.944 204.361L183.113 203.77L183.795 201.382L183.834 201.246L183.796 201.11C182.375 195.996 180.21 188.095 178.332 181.012C176.449 173.909 174.868 167.678 174.601 165.872C174.396 164.493 173.673 162.086 172.72 159.232C171.761 156.362 170.553 152.992 169.361 149.667C167.61 144.781 165.897 139.999 165.037 136.989C164.042 133.507 164.074 127.58 164.607 121.418C165.138 115.279 166.158 108.992 167.091 104.837C168.02 100.698 170.268 94.1196 172.78 87.839C175.296 81.5505 178.05 75.628 179.978 72.7784C181.613 70.3614 185.263 66.4664 189.274 62.1906C191.985 59.301 194.846 56.251 197.312 53.4073C199.771 50.5709 201.865 47.9083 203.022 45.795C203.954 44.0944 206.254 41.6954 209.6 38.8741C212.928 36.068 217.239 32.8872 222.131 29.6222C231.916 23.0916 243.997 16.2427 255.135 11.3966Z"
						class="stroke-neutrals-900 dark:stroke-neutrals-200 stroke-4"
					/>
				</svg>
			</div>
		</div>
		<div class="content-main mt-4 flex flex-col items-center lg:items-start">
			<div class="text-center text-lg font-bold opacity-0" id="greeting">Hello there.</div>
			<h1 class="mb-6 text-center text-4xl font-bold sm:text-5xl" id="intromsg">
				I am Ken, a web developer.
			</h1>
			<div class="link-set text-neutrals-500 mb-6 flex items-center justify-center gap-4 opacity-0">
				<div
					title="Discord Username:dnrmscl"
					class="hover:text-neutrals-600 active:text-neutrals-800"
				>
					<DiscordIcon />
				</div>
				<a
					href="https://github.com/Kenramiscal1106"
					title="Github"
					aria-label="Github Link"
					target="_blank"
					class="hover:text-neutrals-600 active:text-neutrals-800"
				>
					<GithubIcon />
				</a>
				<a
					href="https://www.linkedin.com/in/ken-daniele-ramiscal-1684b3376/"
					title="LinkedIn Profile"
					aria-label="LinkedIn Profile"
					target="_blank"
					class="hover:text-neutrals-600 active:text-neutrals-800"
				>
					<LinkedinIcon />
				</a>
			</div>

			<Button
				variant="neutral"
				id="CTAButton"
				class="px-6 py-3 text-xl opacity-0"
				href="#projects-created"
			>
				<DownIcon />
				See Projects
			</Button>
		</div>
	</div>
</div>
<div class="section-container" id="projects-created">
	<div>
		<h2>Featured works</h2>
		<div class="anime-projects flex flex-wrap justify-center gap-6">
			{#each data.projects as project}
				<Project {...project} class="basis-80" />
			{/each}
		</div>
	</div>
</div>
<div class="section-container" id="skill-set">
	<div class="skill-set-container">
		<h2 class="opacity-0">Skills</h2>
		<div class="anime-skillset flex flex-wrap justify-center gap-5">
			<SkillSet
				name="Developing Websites"
				description="Scaling from personal websites to enterprise/institution websites"
				icon={DevelopIcon}
				techUsed={[
					{ name: 'Svelte', iconFilename: 'svelte.png', hslaData: '15, 100%, 50%' },
					{ name: 'NodeJS', iconFilename: 'node.png', hslaData: '108, 34%, 47%' },
					{ name: 'TailwindCSS', iconFilename: 'tailwind.png', hslaData: '198, 93%, 60%' },
					{ name: 'MongoDB', iconFilename: 'mongoDB.png', hslaData: '198, 100%, 8%' }
				]}
			/>
			<SkillSet
				name="Web Design"
				description="From Dashboard-style applications, to simple portfolios and static webpages"
				icon={DesignIcon}
				techUsed={[{ name: 'Figma', iconFilename: 'figma.png', hslaData: '0, 0%, 60%' }]}
			/>
			<SkillSet
				name="Backend Design"
				description="Building APIs and connecting content to website"
				icon={DevelopIcon}
				techUsed={[
					{ name: 'Sanity', iconFilename: 'sanity.png', hslaData: '5, 86%, 58%' },
					{ name: 'NodeJS', iconFilename: 'node.png', hslaData: '108, 34%, 47%' }
				]}
			/>
		</div>
	</div>
</div>
<div class="section-container">
	<div>
		<h2>Events Participated</h2>
		<div class="bg-neutrals-100 dark:bg-neutrals-800 rounded-2xl px-6 py-8 shadow-lg">
			<Event
				imgSrc="/images/hackathon/stolen.jpg"
				imgAlt="People discussing the problem statement and formulating an initial solution"
			>
				<div class="flex items-center gap-2">
					<img
						src="/images/hackathon/byteforward.png"
						alt="Logo of the Hackathon Participated"
						class="h-auto w-10 rounded-lg"
					/>
					<h3 class="text-lg font-bold">ByteForward Hackathon</h3>
				</div>
				<p>
					Being part of the top 10 teams selected out of 40+ teams in CALABARZON. Me and my
					colleagues joined to tackle different problems in the industry using Artificial
					Intelligence.
				</p>
				<Button href="https://www.facebook.com/share/p/171YTqPAy5/" variant="neutral"
					>Learn More<svg
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M5.27459 14.7254C4.90847 14.3593 4.90847 13.7657 5.27459 13.3996L11.7992 6.875H7.1875C6.66973 6.875 6.25 6.45527 6.25 5.9375C6.25 5.41973 6.66973 5 7.1875 5H14.0625C14.5803 5 15 5.41973 15 5.9375V12.8125C15 13.3303 14.5803 13.75 14.0625 13.75C13.5447 13.75 13.125 13.3303 13.125 12.8125V8.20083L6.60041 14.7254C6.2343 15.0915 5.6407 15.0915 5.27459 14.7254Z"
							fill="#F9FAFA"
						></path></svg
					></Button
				>
			</Event>
		</div>
	</div>
</div>

{#if project.isOpen}
	<ViewProject />
{/if}

<style lang="postcss">
	@reference 'tailwindcss';
	h2 {
		@apply my-4 text-center text-3xl font-bold;
	}
	h3 {
		@apply text-2xl;
	}

	/* div.link-set svg {
			@apply transition-all duration-200;
		} */
	.section-container {
		@apply flex min-h-[75dvh] scroll-mt-12 items-center justify-center py-6;
	}
</style>
