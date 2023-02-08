<script>
	import { ROUTES } from './show';
</script>

<nav>
	<h1>Showroom</h1>
	<ul>
		{#each ROUTES as { href, label, description = "" }}
			<li>
				<p><a {href}>{label}</a>, {@html description}</p>
			</li>
		{/each}
	</ul>
</nav>

<style>
	nav {
		max-width: 800px;
		margin: auto;
	}

	li {
		margin-bottom: 1rem;
	}
</style>
