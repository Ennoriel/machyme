<script>
	import OpenGraph from '../components/layout/OpenGraph.svelte';
	import { formatDate } from 'chyme';
	import './blog.layout.css';

	const { date, title, description, keywords } = $$restProps;
</script>

<OpenGraph
	data={{
		title,
		description,
		keywords,
		type: 'article'
	}}
/>

<article class="blog-article">
	<h1>{title}</h1>
	<p>published {formatDate(date)}</p>

	<slot />
</article>
