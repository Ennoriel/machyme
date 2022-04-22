<script lang="ts" context="module">
	export const prerender = true;

	export async function load({ session }) {
		const posts = session.posts;
		return { props: { posts } };
	}
</script>

<script lang="ts">
	import type { BlogPost } from '$lib/types/blogPost.type';
	import OpenGraph from '$lib/components/OpenGraph.svelte';
	export let posts: BlogPost[];
</script>

<OpenGraph
	data={{
		description:
			'The latest dev blogs written by Machyme, about Svelte, Accessibility and DataViz.',
		title: 'Machyme - dev blogs',
		keywords: 'blog, tutorial, news, articles'
	}}
/>

<a href="/blog/rss.xml">RSS</a>

{#each posts as post}
	<a href="/blog/{post.slug}">{post.title}</a>
{/each}
