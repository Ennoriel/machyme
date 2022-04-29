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
		}
	];
</script>

<nav>
	{#each routes as route}
		{@const active = $page.url.pathname === route.path}
		<a href={route.path} aria-current={(active && 'page') || undefined}>
			{route.label}
		</a>
	{/each}
</nav>

<style>
	nav {
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 60px;

		border-bottom: 0.1px solid var(--text-color);
	}

	a {
		height: 40px;
		line-height: 40px;
		padding: 0 2rem;
		letter-spacing: 0.5rem;

		color: inherit;
		text-decoration: none;
	}

	@media (min-width: 768px) {
		a:hover {
			color: var(--primary-color);
		}
	}
</style>
