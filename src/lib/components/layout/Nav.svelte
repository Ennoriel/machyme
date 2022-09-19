<script>
	import { page } from '$app/stores';

	const routes = [
		{
			label: '🏡Home',
			path: '/'
		},
		{
			label: '📜Blog',
			path: '/blog'
		},
		{
			label: '🔭Show',
			path: '/show'
		}
	];
</script>

<nav aria-label="primary">
	{#each routes as route}
		{@const active = $page.url.pathname === route.path}
		<a href={route.path} aria-current={(active && 'page') || undefined}>
			{route.label}
		</a>
	{/each}
</nav>
<hr />

<style>
	nav {
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 60px;
		max-width: 800px;
		margin: auto;
	}

	hr {
		border: 0;
		border-bottom: 0.1px solid var(--text-color);
	}

	a {
		height: 40px;
		line-height: 40px;

		color: inherit;
		text-decoration: none;
	}

	a:hover {
		text-decoration: none;
	}

	@media (min-width: 768px) {
		a {
			padding: 0 1rem;
			letter-spacing: 0.5rem;
		}
		a:hover {
			color: var(--primary-color);
		}
	}
</style>
