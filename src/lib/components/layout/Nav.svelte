<script>
	import { page } from '$app/stores';

	const routes = [
		{
			label: 'Blog',
			path: '/blog'
		},
		{
			label: 'Tips',
			path: '/tips'
		},
		{
			label: 'Services',
			path: '/services'
		}
	];
</script>

<nav aria-label="primary">
	<a href="#content" class="skip-link"> Go to main content </a>
	<span style:flex-grow="2">
		<a
			href="/"
			aria-current={($page.url.pathname === '/' && 'page') || undefined}
			style:font-size="18px"
		>
			<span style:color="black">Maxime</span> Dupont
		</a>
	</span>
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
		justify-content: space-between;
		align-items: center;
		height: var(--header-height);
		max-width: 800px;
		padding: 0 8px;
		margin: auto;
		gap: 8px;
		color: var(--primary-color);
	}

	@media screen and (min-width: 768px) {
		nav {
			gap: 64px;
		}
	}

	a {
		padding: 4px 8px;
		border-radius: 8px;
		transition: color 0.2s;
	}

	@media (min-width: 768px) {
		a:hover {
			color: var(--primary-color);
		}
	}

	.skip-link {
		position: absolute;
		top: -100px;
		padding: 4px 8px;
		opacity: 0;
	}
	.skip-link:focus {
		top: 10px;
		opacity: 1;
	}
</style>
