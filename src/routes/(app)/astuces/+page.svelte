<script lang="ts">
	import Keywords from '$lib/components/blog/Keywords.svelte';
	import { formatDate } from 'chyme';
	import { Seo } from 'chyme-svelte';
	import type { PageData } from './$types';
	import * as tipsContent from './data';

	const tipsContentAny = tipsContent as any;

	export let data: PageData;
</script>

<Seo
	description="Les derniers conseils de Maxime Dupont sur Svelte, l'accessibilité et la DataViz."
	title="Maxime Dupont - astuces"
/>

<h1>Astuces</h1>

<blockquote>
	Sur cette page, je partagerai quelques conseils et astuces que j'ai trouvés en essayant de
	comprendre comment les choses fonctionnent.
</blockquote>

<ul>
	{#each data.tips as tip, index}
		{@const id = tip.title.replace(/ /g, '-')}
		<li>
			<h2 {id}>
				<em>Tip #{data.tips.length - index}</em> -
				<a href="/astuces#{id}">{tip.title}</a>
			</h2>
			<div>
				<Keywords keywords={tip.technologies} />
			</div>
			<p style:color="var(--grey-text-color)" style:margin-top="8px">
				{formatDate(tip.date, 'fr-FR')}
			</p>
			<svelte:component this={tipsContentAny[tip.component]} />
		</li>
	{/each}
</ul>

<style>
	ul {
		padding: 0;
	}

	li:not(:last-of-type) {
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
		transition: all 0.2s;
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
		background: linear-gradient(
			to right,
			var(--primary-color-50),
			var(--primary-color-100) 15%,
			var(--primary-color-50)
		);
	}
</style>
