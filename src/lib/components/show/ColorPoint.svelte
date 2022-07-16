<script lang="ts">
	import Point from './Point.svelte';
	import type { WH, XY } from './types';

	export let ctx: CanvasRenderingContext2D | null;
	export let pos: XY;
	export let redraw: number;
	export let size: number;
	export let i: number;
	export let j: number;
	export let focusSize: number;
	export let restSize: number;
	export let threshold: number;
	export let margin: WH;

	function draw(ratio: number, gap: number, squareSize: number) {
		ctx?.clearRect(margin.width + size * i, margin.height + size * j, size, size);
		if (ctx) ctx.fillStyle = ratio > 0 ? 'red' : '#777';
		ctx?.fillRect(
			margin.width + size * i + gap,
			margin.height + size * j + gap,
			squareSize,
			squareSize
		);
	}
</script>

<Point {pos} {redraw} {size} {i} {j} {focusSize} {restSize} {draw} {threshold} />
