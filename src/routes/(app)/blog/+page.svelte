<script lang="ts">
	import { Seo } from 'chyme-svelte';
	import ArticleList from '$lib/components/blog/ArticleList.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Seo
	description="Les derniers articles du blog par Maxime Dupont, à propos de Svelte, d'accessibility et de data-viz."
	title="Maxime Dupont - blog"
/>

<h1>Publications</h1>

<ArticleList posts={data.posts} />
