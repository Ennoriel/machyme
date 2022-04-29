<script>
	import VhObserver from '$lib/components/VhObserver.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<VhObserver />

<Nav />

<main>
	<slot />
</main>

<Footer />

<style>
	main {
		max-width: 800px;
		margin: 0 auto;
		padding: 16px;
		min-height: calc(var(--vh, 1vh) * 100 - 100px);
	}

	:global(*) {
		margin: 0;
		padding: 0;
		text-decoration-thickness: 0.01em;
		box-sizing: border-box;
	}
	:global(a) {
		color: var(--primary-color);
		transition: color 0.1s;
	}
	:global(button) {
		border: none;
		background-color: var(--primary-color);
		color: white;
		cursor: pointer;
		padding: 0.3rem 0.6rem;
		border-radius: 4px;
		text-decoration: none;
	}
	:global(body) {
		--primary-color: #ed1f3a;
		--secondary-color: #002395;
		--text-color: #555;
		--focus-color: var(--primary-color);
		--bg-color: #f7f7fa;
		--header-height: 60px;

		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu,
			Cantarell, 'Helvetica Neue', sans-serif;
		font-weight: 300;
		font-size: 16px;
		line-height: 1.5em;
		color: var(--text-color);
		background-color: var(--bg-color);

		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23dce5ff' fill-opacity='0.41' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
	}
	:global(ul) {
		padding-left: 3rem;
		list-style-type: '–  ';
		margin: 1rem 0;
	}
	:global(button) {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu,
			Cantarell, 'Helvetica Neue', sans-serif;
		font-weight: 300;
		font-size: 16px;
	}

	:global(h1),
	:global(h2),
	:global(h3),
	:global(h4) {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu,
			Cantarell, 'Helvetica Neue', sans-serif;
		font-weight: 100;
		margin: 1rem 0 0.5rem 0;
		line-height: 1;
	}

	:global(p) {
		margin: 1rem 0;
	}

	:global(h1) {
		font-size: 30px;
	}
	:global(h2) {
		font-size: 24px;
	}

	:global(:focus-visible) {
		outline: 2px solid var(--focus-color);
		outline-offset: 2px;
	}

	:global(*) {
		--dark: #ccc;
		--light: #00000000;
		scrollbar-width: thin;
		scrollbar-color: var(--dark) var(--light);
		scroll-behavior: smooth;
	}
	:global(*::-webkit-scrollbar-track) {
		background: var(--light);
	}
	:global(*::-webkit-scrollbar-thumb) {
		background-color: var(--dark);
	}
	:global(*::-webkit-scrollbar) {
		width: 7px;
	}
</style>
