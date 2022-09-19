<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	import OpenGraph from '$lib/components/layout/OpenGraph.svelte';

	$: keywords = [...new Set(data.props.posts.map(({ keywords }) => keywords).flat())].sort();
</script>

<OpenGraph
	data={{
		description:
			'The latest dev blogs written by Machyme, about Svelte, Accessibility and DataViz.',
		title: 'Machyme - dev blog',
		keywords: 'blog, tutorial, news, articles'
	}}
/>

<div>
	<h1>Hello, it's me!</h1>

	<p>
		A minimalist blog written by a minimalist developer that enjoys building software for a more
		sustainable & accessible web.
	</p>

	<p>Built with no external fonts, stylesheets or cookies.</p>

	<p>Subjects that I already wrote about:</p>

	<ul>
		{#each keywords as keyword}
			<li>
				<a href={`/blog/${keyword}`}>{keyword}</a>
			</li>
		{/each}
	</ul>
</div>

<style>
	div {
		max-width: 800px;
		margin: auto;
	}
</style>
