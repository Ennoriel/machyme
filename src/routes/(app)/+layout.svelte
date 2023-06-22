<script>
	import VhObserver from '$lib/components/observer/VhObserver.svelte';
	import Nav from '$lib/components/layout/Nav.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';

	import 'chyme/css/reset.css';
	import 'chyme/css/tokens.css';
	import 'chyme/css/scroll.css';
	import 'chyme/css/a11y.css';
	import 'chyme/css/code.css';
	import '$lib/utils/base.css';
</script>

<VhObserver />

<Nav />

<main id="content">
	<slot />
</main>

<Footer />

<style>
	main {
		line-height: 1.625;
	}
</style>
