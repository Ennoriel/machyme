<script>
	import { ROUTES } from './show';
</script>

<nav>
	<h1>Showroom</h1>
	<blockquote>
		Il n'y a pas beaucoup d'explication dans cette partie du site qui se trouve d'ailleurs être en
		anglais ! C'est le lieu ou j'experiment de nouvelles choses :)
	</blockquote>
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
