<script lang="ts">
	import { onMount } from 'svelte';

	export let uri = '';
	let frame: HTMLIFrameElement;

	onMount(() => {
		if (frame) {
			frame.srcdoc = `<script src='https://gist.github.com/${uri}.js'><${''}/script>`;
			frame.onload = () => {
				frame.style.height = (frame.contentWindow?.document?.body?.scrollHeight || 0) + 30 + 'px';
			};
		}
	});
</script>

<iframe bind:this={frame} title="Gist" />

<style>
	iframe {
		border: 0;
		width: 100%;
		height: 100%;
	}
</style>
