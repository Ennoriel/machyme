<script lang="ts" context="module">
	export const load: import('@sveltejs/kit').Load = async ({ session }) => {
		const posts = session.posts;
		return { props: { posts } };
	};
</script>

<script lang="ts">
	import OpenGraph from '$lib/components/layout/OpenGraph.svelte';
	import ArticleList from '$lib/components/blog/ArticleList.svelte';
	import type { BlogPost } from '$lib/types/blogPost.type';

	export let posts: BlogPost[];
</script>

<OpenGraph
	data={{
		description:
			'The latest dev blogs written by Machyme, about Svelte, Accessibility and DataViz.',
		title: 'Machyme - dev blog',
		keywords: 'blog, tutorial, news, articles'
	}}
/>

<ArticleList {posts} />
