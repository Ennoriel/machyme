<script>
	import OpenGraph from '../components/layout/OpenGraph.svelte';
	import './blog.layout.css';

	const { date, title, description, keywords } = $$restProps;

	$: formattedDate = new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}).format(new Date(date));
</script>

<OpenGraph
	data={{
		title,
		description,
		keywords,
		type: 'article'
	}}
/>

<article id="blog-article">
	<p style:text-align="right">published {formattedDate}</p>
	<h1>{title}</h1>

	<slot />
</article>

<nav aria-label="secondary">
	<button
		on:click={() => {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		}}
	>
		Scroll to the top of the page
	</button>

	<a href="/blog">Go back to the list of articles</a>
</nav>

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
