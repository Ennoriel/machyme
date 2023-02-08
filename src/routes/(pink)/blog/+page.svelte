<script lang="ts">
	import { Seo } from 'chyme-svelte';
	import ArticleList from '$lib/components/blog/ArticleList.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Seo
	description="The latest dev blogs by Maxime Dupont, about Svelte, Accessibility and DataViz."
	title="Maxime Dupont - blog"
/>

<h1>Publications</h1>

<ArticleList posts={data.posts} />
