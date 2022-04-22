<script lang="ts">
	import { page } from '$app/stores';
	import type { OpenGraph } from '$lib/types/openGraph.type';

	export let data: OpenGraph;

	const {
		description,
		title,
		keywords = 'dev environment, developer environment, devops, cloud ide, github ide, gitlab ide, javascript, online ide, web ide, code review',
		type = 'website'
	} = data || {};

	const url = $page.url.toString();
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="keywords" content={keywords} />
	<meta name="description" content={description} />
	<meta property="og:site_name" content="Machyme" />
	<meta property="og:description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:type" content={type} />
	<meta property="og:url" content={url} />
</svelte:head>
