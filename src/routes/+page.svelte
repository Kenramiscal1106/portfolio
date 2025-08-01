<script>
	import Button from '$lib/components/Button.svelte';
</script>

<div class="flex flex-col items-center">
	<div class="text-center text-lg font-bold">Hello there.</div>
	<h1 class="mb-6 text-center text-5xl font-bold">I am Ken, a web developer.</h1>
	<div class="link-set fill-neutrals-500 mb-6 flex items-center justify-center gap-4">
		<a
			href="https://facebook.com/dnrmscl"
			title="Facebook"
			target="_blank"
			aria-label="Facebook Link"
			class="hover:fill-neutrals-600 active:fill-neutrals-800"
		>
			<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M32 16.0588C32 7.18979 24.8365 1.90735e-06 16 1.90735e-06C7.16346 1.90735e-06 0 7.18979 0 16.0588C0 23.5901 5.16576 29.9093 12.1348 31.6447V20.9661H8.83546V16.0588H12.1348V13.9442C12.1348 8.47834 14.5993 5.94491 19.9459 5.94491C20.9595 5.94491 22.7085 6.14436 23.4241 6.34387V10.7924C23.0464 10.7525 22.3905 10.7326 21.5756 10.7326C18.9521 10.7326 17.9384 11.73 17.9384 14.3233V16.0588H23.1645L22.2668 20.9661H17.9384V32C25.8607 31.0396 32 24.2692 32 16.0588Z"
				/>
			</svg>
		</a>
		<a
			href="lorem-ipsum"
			title="Discord Username"
			aria-label="Discord Username"
			class="hover:fill-neutrals-600 active:fill-neutrals-800"
		>
			<svg width="32" height="24" viewBox="0 0 32 24" xmlns="http://www.w3.org/2000/svg">
				<g>
					<path
						d="M20.5047 0C20.192 0.549325 19.9112 1.1176 19.656 1.6985C17.2309 1.3386 14.7612 1.3386 12.3297 1.6985C12.0808 1.1176 11.7936 0.549325 11.481 0C9.20267 0.385175 6.98182 1.06077 4.87586 2.0142C0.702191 8.1326 -0.427376 14.0931 0.134224 19.9716C2.57842 21.7585 5.3162 23.1223 8.23264 23.9937C8.88996 23.1223 9.47071 22.1942 9.96848 21.2281C9.02398 20.8808 8.11138 20.4451 7.2371 19.94C7.46683 19.7758 7.6902 19.6054 7.90717 19.4412C13.0317 21.828 18.9667 21.828 24.0976 19.4412C24.3146 19.618 24.538 19.7885 24.7677 19.94C23.8934 20.4514 22.9808 20.8808 22.03 21.2344C22.5277 22.2005 23.1085 23.1287 23.7658 24C26.6822 23.1287 29.4199 21.7711 31.8643 19.9842C32.5279 13.1649 30.7283 7.25492 27.1097 2.02052C25.0102 1.0671 22.7894 0.391475 20.5111 0.012625L20.5047 0ZM10.6832 16.3536C9.10696 16.3536 7.7987 14.9392 7.7987 13.1902C7.7987 11.4412 9.05589 10.0205 10.6769 10.0205C12.2978 10.0205 13.5869 11.4475 13.5614 13.1902C13.5359 14.9329 12.2914 16.3536 10.6832 16.3536ZM21.3152 16.3536C19.7325 16.3536 18.4371 14.9392 18.4371 13.1902C18.4371 11.4412 19.6942 10.0205 21.3152 10.0205C22.9362 10.0205 24.2189 11.4475 24.1934 13.1902C24.1678 14.9329 22.9234 16.3536 21.3152 16.3536Z"
					/>
				</g>
			</svg>
		</a>
		<a
			href="https://github.com/Kenramiscal1106"
			title="Github"
			aria-label="Github Link"
			target="_blank"
			class="hover:fill-neutrals-600 active:fill-neutrals-800"
		>
			<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
				<g>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M15.9523 0.82666C7.1311 0.82666 0 8.01033 0 16.8975C0 24.0015 4.56914 30.0149 10.9078 32.1432C11.7002 32.3032 11.9905 31.7974 11.9905 31.372C11.9905 30.9994 11.9644 29.7223 11.9644 28.3917C7.52686 29.3498 6.60278 26.476 6.60278 26.476C5.88963 24.6134 4.83298 24.1347 4.83298 24.1347C3.38057 23.1503 4.93878 23.1503 4.93878 23.1503C6.54988 23.2567 7.39527 24.7999 7.39527 24.7999C8.82123 27.2476 11.119 26.556 12.0434 26.1302C12.1753 25.0925 12.5982 24.3741 13.0472 23.9751C9.50792 23.6025 5.78416 22.219 5.78416 16.0459C5.78416 14.2898 6.41763 12.8531 7.42139 11.7357C7.26302 11.3367 6.70825 9.68674 7.58008 7.47842C7.58008 7.47842 8.92702 7.05262 11.9641 9.12805C13.2644 8.77627 14.6053 8.59731 15.9523 8.5958C17.2993 8.5958 18.6723 8.78225 19.9402 9.12805C22.9776 7.05262 24.3246 7.47842 24.3246 7.47842C25.1964 9.68674 24.6413 11.3367 24.4829 11.7357C25.5131 12.8531 26.1205 14.2898 26.1205 16.0459C26.1205 22.219 22.3967 23.5757 18.831 23.9751C19.4122 24.4805 19.9138 25.4383 19.9138 26.955C19.9138 29.1101 19.8877 30.8397 19.8877 31.3716C19.8877 31.7974 20.1783 32.3032 20.9705 32.1436C27.3091 30.0146 31.8782 24.0015 31.8782 16.8975C31.9043 8.01033 24.7471 0.82666 15.9523 0.82666Z"
					/>
				</g>
			</svg>
		</a>
		<a
			href="https://linkedin.com"
			title="LinkedIn Profile"
			aria-label="LinkedIn Profile"
			target="_blank"
			class="hover:fill-neutrals-600 active:fill-neutrals-800"
			><svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
				<g>
					<path
						d="M29.1053 0H2.89466C1.296 0 0 1.296 0 2.89466V29.1053C0 30.704 1.296 32 2.89466 32H29.1053C30.704 32 32 30.704 32 29.1053V2.89466C32 1.296 30.704 0 29.1053 0ZM9.90216 27.6309C9.90216 28.0962 9.52503 28.4733 9.05977 28.4733H5.47393C5.00867 28.4733 4.63154 28.0962 4.63154 27.6309V12.5992C4.63154 12.1339 5.00867 11.7568 5.47393 11.7568H9.05977C9.52503 11.7568 9.90216 12.1339 9.90216 12.5992V27.6309ZM7.26685 10.3399C5.38547 10.3399 3.86027 8.81466 3.86027 6.93328C3.86027 5.0519 5.38547 3.5267 7.26685 3.5267C9.14823 3.5267 10.6734 5.0519 10.6734 6.93328C10.6734 8.81466 9.14831 10.3399 7.26685 10.3399ZM28.6417 27.6988C28.6417 28.1265 28.2949 28.4733 27.8671 28.4733H24.0193C23.5915 28.4733 23.2447 28.1265 23.2447 27.6988V20.648C23.2447 19.5962 23.5533 16.039 20.496 16.039C18.1246 16.039 17.6436 18.4738 17.547 19.5665V27.6988C17.547 28.1265 17.2003 28.4733 16.7724 28.4733H13.0509C12.6232 28.4733 12.2764 28.1265 12.2764 27.6988V12.5314C12.2764 12.1036 12.6232 11.7568 13.0509 11.7568H16.7724C17.2002 11.7568 17.547 12.1036 17.547 12.5314V13.8428C18.4263 12.5231 19.7331 11.5046 22.5155 11.5046C28.6769 11.5046 28.6417 17.2609 28.6417 20.4237V27.6988Z"
					/>
				</g>
			</svg>
		</a>
	</div>

	<Button variant="neutral" class="px-6 py-3 text-xl" href="#projects-created"
		><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M12 3.59998C12.4971 3.59998 12.9 4.00292 12.9 4.49998L12.9 17.2655L17.6513 12.2762C17.9958 11.9179 18.5655 11.9067 18.9238 12.2512C19.2821 12.5957 19.2933 13.1655 18.9488 13.5238L12.6488 20.1238C12.4791 20.3002 12.2448 20.4 12 20.4C11.7552 20.4 11.5209 20.3002 11.3513 20.1238L5.05125 13.5238C4.70674 13.1655 4.71791 12.5957 5.07621 12.2512C5.4345 11.9067 6.00424 11.9179 6.34875 12.2762L11.1 17.2655L11.1 4.49998C11.1 4.00292 11.5029 3.59998 12 3.59998Z"
				class="fill-neutrals-100"
			/>
		</svg>
		See Projects</Button
	>
</div>

<p>
	Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, rerum possimus expedita sed
	dolore cumque at placeat, commodi libero vero dolorum pariatur ad quam consequatur nostrum eius
	hic et quia.
</p>
<p>
	Illo incidunt nihil quae eligendi optio voluptas fugiat voluptate earum vel dolorum cumque
	doloremque necessitatibus modi aliquam, soluta nemo, error nobis, molestiae voluptatibus nam
	mollitia! Voluptatibus quibusdam tenetur quia nobis!
</p>
<p>
	Labore hic voluptatibus officiis, nostrum, maxime odio nihil, magni illo error quaerat nulla ea!
	Inventore error assumenda maxime delectus ipsam perspiciatis architecto voluptas iusto, hic rem
	minus quisquam reiciendis. Quisquam!
</p>
<p>
	Inventore reiciendis, dolorum rerum labore voluptate rem possimus sapiente nostrum tenetur neque,
	mollitia, unde officiis iste beatae nesciunt qui fugiat at modi culpa ipsam voluptates veritatis
	aut temporibus? Sunt, eos?
</p>
<p>
	Voluptatum, placeat omnis fugiat modi, labore numquam est dolor saepe fugit voluptatem cumque,
	harum hic. Voluptatem, dignissimos, eveniet aliquid quod voluptatibus optio fugit, ab impedit
	veritatis minus dolores nihil! Quaerat?
</p>
<p>
	Quam vero animi repellat ducimus! Cum saepe iusto officia excepturi, ad, eaque necessitatibus
	dolores a perspiciatis eum expedita veritatis quisquam pariatur facere culpa repellat? Esse
	incidunt dolore quia laudantium magnam!
</p>
<p>
	Sequi fugiat odit nam consectetur architecto ipsam similique autem reprehenderit sint vitae nulla
	eveniet assumenda itaque, deleniti, qui a dicta accusantium culpa ducimus. Quaerat commodi soluta
	id inventore iure a!
</p>
<p>
	Accusantium quo, pariatur cum, repudiandae fugiat laudantium hic quos voluptatum reprehenderit
	quidem nisi dignissimos ullam cupiditate et? Fugiat architecto quidem quis tenetur inventore. Modi
	enim neque odit, quibusdam non vel?
</p>

<h2 id="projects-created">Projects Created</h2>
<p>
	Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae accusamus id, pariatur libero
	impedit eligendi ab ea provident at deserunt minima perferendis in dolorum necessitatibus autem.
	Ex, ducimus. Consequatur, corporis.
</p>
<p>
	Explicabo, incidunt! Tenetur asperiores, voluptate odio amet rem quisquam. Hic ea ratione
	distinctio. Soluta odit dicta similique tempora laborum consequatur, id voluptatibus ullam
	deserunt autem! Saepe assumenda perspiciatis cum facilis.
</p>
<p>
	Quasi recusandae consequuntur dolorum, et inventore ducimus sequi aliquid voluptates accusamus
	minima quas consequatur voluptate minus odit ipsum unde omnis repellat distinctio eius eos non
	molestiae vitae deleniti. Perferendis, ut.
</p>
<p>
	Officiis modi hic voluptas! Laboriosam expedita, minima tempora iure nemo ipsum repellat ducimus
	explicabo assumenda, deleniti quisquam! Reprehenderit eius officia beatae porro. Soluta beatae nam
	odio aut consequatur ducimus molestiae!
</p>
<p>
	Id maiores incidunt recusandae dicta aspernatur ea, delectus ex ipsam iste, dolorem inventore
	nihil quos pariatur vel velit voluptatum libero adipisci molestiae eveniet excepturi dignissimos
	architecto! Expedita vel iste dolorum!
</p>
<p>
	Impedit omnis, nemo illo similique repudiandae quo, fugiat aut at non quam cum, quae illum! Iste
	neque sint iusto optio illo, dolor nulla unde ducimus recusandae aliquam architecto! Accusamus,
	neque.
</p>
<p>
	Consequuntur consequatur similique ducimus quidem odit quod quaerat facilis illo ex quas aliquam
	officia deserunt nisi, soluta quibusdam unde, cumque natus explicabo voluptatem sint debitis ipsa
	nulla maiores. Officia, fuga.
</p>
<p>
	Ut similique dicta exercitationem cupiditate delectus, laudantium unde ipsam neque harum
	consequuntur vel sequi tempora placeat numquam non atque temporibus at animi! Enim cupiditate
	pariatur at in. Nostrum, ad tempora!
</p>
<h2>Latest from blog</h2>

<style>
	@import '../app.css';
	h2 {
		@apply my-4 text-center text-2xl font-bold;
	}
	div.link-set svg {
		@apply transition-all duration-200;
	}
</style>
