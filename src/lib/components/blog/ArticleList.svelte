<script lang="ts">
	import type { BlogPost } from '$lib/types/blogPost.type';
	export let posts: BlogPost[];
	export let keyword: string | undefined = undefined;

	const x = {
		latest: [] as Array<BlogPost>,
		oldest: [] as Array<BlogPost>
	};

	const now = new Date().getTime();
	const MS_IN_30_DAYS = 1000 * 60 * 60 * 24 * 30;

	$: displayPosts = keyword
		? posts.filter((post) => post.keywords.includes(keyword as string))
		: posts;
	$: groups = displayPosts.reduce((groups, post) => {
		if (now - new Date(post.date).getTime() < MS_IN_30_DAYS) {
			groups.latest.push(post);
		} else {
			groups.oldest.push(post);
		}
		return groups;
	}, x);
</script>

{#if groups.latest.length && groups.oldest.length}
	<h1>Latest publications</h1>
{/if}
{#if groups.latest.length}
	<ul>
		{#each groups.latest as post}
			<li>
				<a href={`/blog/${post.slug}`}>{post.title}</a>, {post.keywords?.join(' – ')}
			</li>
		{/each}
	</ul>
{/if}
{#if groups.latest.length && groups.oldest.length}
	<h1>Published earlier</h1>
{/if}
{#if groups.oldest.length}
	<ul>
		{#each groups.oldest as post}
			<li>
				<a href={`/blog/${post.slug}`}>{post.title}</a>, {post.keywords?.join(' – ')}
			</li>
		{/each}
	</ul>
{/if}

<h1>RSS</h1>

<a href="/rss.xml">subscribe to RSS 🧠🚀</a>

<style>
	li {
		margin-bottom: 1rem;
	}
</style>
