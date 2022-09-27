<script lang="ts">
	import OpenGraph from '$lib/components/layout/OpenGraph.svelte';
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
	<h1>Hello, it's me, Maxime!</h1>

	<p>
		You are reading a minimalist blog written by a developer that enjoys building software for a
		more sustainable & accessible web. I am sharing tips on how to solve some challenges
		(performance, <abbr title="Search Engine Optimization">SEO</abbr>, accessibility, responsive...)
		while implementing it on this same website.
	</p>

	<p>I love Svelte, Typescript and Python.</p>
</div>

<style>
	div {
		max-width: 600px;
		margin: auto;
	}
</style>
