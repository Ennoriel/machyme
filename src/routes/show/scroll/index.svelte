<script lang="ts">
	import ScrollImg from './_scrollImg.svelte';
	import { LOREM } from '$lib/utils/lorem';
	import { SETTINGS } from './_scrollSettings.js';
</script>

<div>
	<p>{LOREM.IPSUM}</p>
	<ScrollImg config={SETTINGS.BLUR} />
	<p>{LOREM.PRESENT}</p>
	<ScrollImg config={SETTINGS.HUE_ROTATE} />
	<p>{LOREM.MAECENAS}</p>
	<ScrollImg config={SETTINGS.GRAYSCALE} />
	<p>{LOREM.SUSPENDISSE}</p>
	<ScrollImg config={SETTINGS.OPACITY} />
	<p>{LOREM.NUNC}</p>
</div>

<style>
	div {
		max-width: 800px;
		margin: auto;
	}
</style>
