<script lang="ts" context="module">
	export const load: import('@sveltejs/kit').Load = async ({ session }) => {
		const posts = session.posts;
		return { props: { posts } };
	};
</script>

<script lang="ts">
	import OpenGraph from '$lib/components/layout/OpenGraph.svelte';
	import type { BlogPost } from '$lib/types/blogPost.type';
	export let posts: BlogPost[];

	$: keywords = [...new Set(posts.map(({ keywords }) => keywords).flat())].sort();
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
