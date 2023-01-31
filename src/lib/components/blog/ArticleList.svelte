<script lang="ts">
	import type { BlogPost } from '$lib/types/blogPost.type';
	import { formatDate } from 'chyme';
	import Keywords from './Keywords.svelte';
	export let posts: BlogPost[];
	export let keyword: string | undefined = undefined;
	export let top3 = false;

	$: displayPosts = posts
		.filter((post) => !keyword || post.keywords.includes(keyword as string))
		.filter((_, index) => !top3 || index < 3);
</script>

<section>
	{#each displayPosts as post}
		<div>
			<h2>
				<span style:color="var(--primary-color)">·&nbsp;·&nbsp;·&nbsp;</span>
				<a href={`/blog/${post.slug}`}>{post.title}</a>
			</h2>
			<p style:color="var(--grey-text-color)">
				{formatDate(post.date)}
			</p>
			<p>
				{post.description}
			</p>
			<Keywords keywords={post.keywords} />
		</div>
	{/each}
</section>

{#if !top3}
	<a href="/rss.xml">subscribe to RSS 🧠🚀</a>
{/if}

<style>
	div {
		margin: 64px 0;
	}
	div:first-of-type {
		margin-top: 32px;
	}
	div:last-of-type {
		margin-bottom: 32px;
	}

	h2,
	p {
		margin: 12px 0;
	}

	h2 {
		font-size: 20px;
		font-weight: 600;
	}

	a {
		padding: 4px;
		margin-left: -4px;
		color: var(--text-color);
		transition: all .2s;
	}
	a:hover {
		color: var(--link-color);
	}
	a:hover::after {
		transform: scaleX(0);
	}
</style>
