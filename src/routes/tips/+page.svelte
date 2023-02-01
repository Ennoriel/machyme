<script lang="ts">
	import Keywords from '$lib/components/blog/Keywords.svelte';
	import { formatDate } from 'chyme';
	import type { PageData } from './$types';
	import * as m from './data';

	export let data: PageData;
</script>

<h1>Tips & tricks</h1>

<blockquote>
	In this page I'll share some tips and tricks that I have found while figuring out how things work.
</blockquote>

<ul>
	{#each data.tips as tip, index}
		<li>
			<h2 id="{tip.title}"><em>Tip #{data.tips.length - index}</em> - <a href="/tips#{tip.title}">{tip.title}</a></h2>
			<Keywords keywords={tip.technologies} />
			<p style:color="#789" style:margin-top="8px">{formatDate(tip.date)}</p>
			<svelte:component this={m[tip.component]} />
		</li>
	{/each}
</ul>

<style>
	ul {
		padding: 0;
	}

	li {
		list-style: none;
		margin-bottom: 96px;
	}

	h2,
	li :global(.keywords) {
		display: inline-block;
		vertical-align: bottom;
		margin-bottom: 0;
		margin-right: 8px;
	}

	li :global(.keywords) {
		margin-bottom: -2px;
	}

	a {
		color: var(--text-color);
		transition: all .2s;
	}
	a:hover {
		color: var(--link-color);
	}
	a:hover::after {
		transform: scaleX(0);
	}

	em {
		text-decoration: none;
		margin: 0 -4px 0 -8px;
		padding: 2px 12px;
		border-radius: 16px 8px / 8px 16px;
		background: linear-gradient(to right, #ff029e12, #ff029e24 20%, #ff029e12);
	}
</style>
