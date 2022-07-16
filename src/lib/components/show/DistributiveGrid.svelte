<script lang="ts">
	import { floor } from 'chyme';
	import type { WH } from './types';
	import Grid from './Grid.svelte';

	export let size: number | undefined;
	export let rect: DOMRect | undefined;

	let width: number;
	let height: number;
	let margin: WH;

	function resize() {
		if (rect && size) {
			width = Math.floor((window.devicePixelRatio * rect.width) / size);
			height = Math.floor((window.devicePixelRatio * rect.height) / size);
			margin = {
				width: floor(((window.devicePixelRatio * rect.width) % size) / 2, 1),
				height: floor(((window.devicePixelRatio * rect.height) % size) / 2, 1)
			};
		}
	}

	$: if (rect && size) resize();
</script>

<svelte:window on:resize={resize} />

<Grid {width} {height} let:i let:j>
	<slot {i} {j} {margin} />
</Grid>
