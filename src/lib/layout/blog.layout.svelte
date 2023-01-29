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

<style>
	a {
		background-color: var(--primary-color);
		color: white;
		padding: 0.3rem 0.6rem;
		border-radius: 4px;
		text-decoration: none;
		text-align: center;
	}

	button {
		border: none;
		background-color: var(--primary-color);
		color: white;
		padding: 0.3rem 0.6rem;
		text-decoration: none;
	}

	nav {
		display: flex;
		gap: 8px;
		justify-content: center;
	}
</style>
