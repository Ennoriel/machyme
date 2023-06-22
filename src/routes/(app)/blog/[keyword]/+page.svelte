<script lang="ts">
	import type { PageData } from './$types';
	import { Seo } from 'chyme-svelte';
	import ArticleList from '$lib/components/blog/ArticleList.svelte';

	export let data: PageData;

	$: posts = data.props.posts;
	$: keyword = data.props.keyword;
</script>

<Seo
	description="Les derniers articles du blog par Maxime Dupont, à propos de Svelte, d'accessibility et de data-viz."
	title="Maxime Dupont"
/>

<h1>Articles de blog au sujet de {keyword}</h1>

<ArticleList {posts} {keyword} />
