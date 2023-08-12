import vercel from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess(),
		mdsvex({
			extensions: ['.md'],
			layout: {
				blog: './src/lib/layout/blog.layout.svelte'
			},
			rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
		})
	],

	extensions: ['.svelte', '.md'],

	kit: {
		adapter: vercel()
	},

	vitePlugin: {
		inspector: {
			holdMode: true,
			showToggleButton: 'always',
			toggleButtonPos: 'bottom-right'
		}
	}
};

export default config;
