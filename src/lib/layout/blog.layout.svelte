<script>
	import { Seo } from 'chyme-svelte';
	import { formatDate } from 'chyme';
	import './blog.layout.css';

	const { date, title, description } = $$restProps;
</script>

<Seo {title} {description} date={new Date(date).toISOString().slice(0, 10)} type="article" />

<article class="blog-article">
	<h1>{title}</h1>
	<p>published {formatDate(date, 'fr-FR')}</p>

	<slot />
</article>
