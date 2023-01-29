<script lang="ts">
	import ArticleList from '$lib/components/blog/ArticleList.svelte';
	import OpenGraph from '$lib/components/layout/OpenGraph.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<OpenGraph
	data={{
		description:
			'The latest dev blogs written by Machyme, about Svelte, Accessibility and DataViz.',
		title: 'Machyme - dev blog',
		keywords: 'blog, tutorial, news, articles'
	}}
/>

<p>
	Hi, I'm Maxime, a frontend engineer. I've been building website for 7 years. I have always placed
	great importance on SEO, accessibility and performance issues. This blog is a place where I intend
	to share some tips and some longer insights on web development.
</p>

<p>
	Feel free to <a href="mailto:m.dupont103@gmail.com">contact me</a> if you want me to prototype, extend
	or review your project .
</p>

<h1 style:margin-top="64px">Publications</h1>

<ArticleList posts={data.posts} top3 />

<a href="/blog">Read previous articles</a>
