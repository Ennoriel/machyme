<script lang="ts">
	import type { PageData } from './$types';
	import OpenGraph from '$lib/components/layout/OpenGraph.svelte';
	import ArticleList from '$lib/components/blog/ArticleList.svelte';

	export let data: PageData;

	$: posts = data.props.posts;
	$: keyword = data.props.keyword;
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
