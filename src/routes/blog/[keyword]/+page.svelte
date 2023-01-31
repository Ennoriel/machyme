<script lang="ts">
	import type { PageData } from './$types';
	import { Seo } from 'chyme-svelte';
	import ArticleList from '$lib/components/blog/ArticleList.svelte';

	export let data: PageData;

	$: posts = data.props.posts;
	$: keyword = data.props.keyword;
</script>

<Seo
	description="The latest dev blogs written by Machyme, about Svelte, Accessibility and DataViz."
	title="Machyme - dev blogs"
/>

<h1>Blog articles about {keyword}</h1>

<ArticleList {posts} {keyword} />
