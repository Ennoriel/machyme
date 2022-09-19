<script lang="ts" context="module">
	export const prerender = true;

	export const load: import('@sveltejs/kit').Load = async ({ session, params }) => {
		return {
			props: {
				posts: session.posts,
				keyword: params.keyword
			}
		};
	};
</script>

<script lang="ts">
	import OpenGraph from '$lib/components/layout/OpenGraph.svelte';
	import ArticleList from '$lib/components/blog/ArticleList.svelte';
	import type { BlogPost } from '$lib/types/blogPost.type';

	export let posts: BlogPost[];
	export let keyword: string;
</script>

<OpenGraph
	data={{
		description:
			'The latest dev blogs written by Machyme, about Svelte, Accessibility and DataViz.',
		title: 'Machyme - dev blogs',
		keywords: 'blog, tutorial, news, articles'
	}}
/>

<h1>Blog articles about {keyword}</h1>

<ArticleList {posts} {keyword} />
