import { mdsvex, escapeSvelte } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { createHighlighter } from 'shiki';

const theme = 'github-light';
const highlighter = await createHighlighter({
	themes: [theme],
	langs: ['javascript', 'typescript', 'svelte', 'python'],
});


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex({
		extensions: [".svx", ".md"],
		highlight: {
			highlighter: async (code, lang = 'text') => {
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme }));
			return `{@html \`${html}\` }`;
		}
		}
	})],
	kit: { // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
	// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
	// See https://svelte.dev/docs/kit/adapters for more information about adapters.
	adapter: adapter(),
	prerender: {
		handleHttpError: ({ path, referrer, message }) => {
				// ignore deliberate link to shiny 404 page
				
			}
	}
},
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
