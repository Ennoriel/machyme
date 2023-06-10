<script>
	import { page } from '$app/stores';
	import { routes } from './routes';
</script>

<footer>
	<div class="wrapper">
		<span>
			<p>Maxime Dupont</p>
			<p><a href="/legals">Legals</a></p>
		</span>
		<span>
			<p><a href="mailto:m.dupont103@gmail.com">🐟 Mail</a></p>
			<p>
				<a href="https://www.linkedin.com/in/maxime-dupont-dev/" target="_blank" rel="noreferrer"
					>🤙 LinkedIn</a
				>
			</p>
			<p><a href="https://github.com/Ennoriel/" target="_blank" rel="noreferrer">🐙 Github</a></p>
		</span>
		<span>
			{#each routes.filter((route) => route.bottom) as route}
				{@const active = $page.url.pathname === route.path}
				<p>
					<a href={route.path} aria-current={(active && 'page') || undefined}>
						{route.label}
					</a>
				</p>
			{/each}
		</span>
	</div>
</footer>

<style>
	footer {
		padding: 64px 0 48px;
		background-color: var(--primary-color-50);

		display: flex;
		justify-content: center;
	}
	.wrapper {
		width: 100%;
		max-width: 800px;
		padding: 0 16px;
		margin: auto;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		align-items: center;
	}
	ul {
		margin: 0;
		padding: 0;
	}
	li {
		display: inline;
		list-style: none;
		margin: 0 0.5rem;
		padding: 0 0.5rem;
	}
	p {
		text-align: center;
	}
	p:first-of-type {
		margin-top: 0;
	}

	p:last-of-type {
		margin-bottom: 0;
	}

	a {
		padding: 2px 8px;
	}
</style>
