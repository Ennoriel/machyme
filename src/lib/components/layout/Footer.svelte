<script>
	import { page } from '$app/stores';
	import { routes } from './routes';
</script>

<footer>
	<div class="wrapper">
		<span>
			<p>Maxime Dupont</p>
			<p><a href="/mentions-legales">Mentions légales</a></p>
		</span>
		<span>
			<p><a href="mailto:m.dupont103@gmail.com">🐟 Email</a></p>
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
				<p style:margin="4px">
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
		margin-top: 72px;
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
