<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	import OpenGraph from '$lib/components/layout/OpenGraph.svelte';
	import ArticleList from '$lib/components/blog/ArticleList.svelte';
</script>

<OpenGraph
	data={{
		description:
			'The latest dev blogs written by Machyme, about Svelte, Accessibility and DataViz.',
		title: 'Machyme - dev blog',
		keywords: 'blog, tutorial, news, articles'
	}}
/>

<ArticleList posts={data.props.posts} />
