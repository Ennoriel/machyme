<script>
	import OpenGraph from '../components/OpenGraph.svelte';

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

{title} - {date}

<slot />
