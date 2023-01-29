<script>
	import { onMount } from 'svelte';

	onMount(resize);

	function resize() {
		const vh = window.innerHeight * 0.01;
		const vw = document.body.clientWidth * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
		document.documentElement.style.setProperty('--vw', `${vw}px`);
		document.documentElement.style.setProperty('--100vw', `calc(100 * var(--vw, 1vw))`);
	}
</script>

<svelte:window on:resize={resize} />
