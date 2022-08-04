<script lang="ts">
	import Point from './Point.svelte';
	import type { WH, XY } from './types';

	export let ctx: CanvasRenderingContext2D;
	export let pos: XY;
	export let redraw: number;
	export let size: number;
	export let i: number;
	export let j: number;
	export let focusSize: number;
	export let restSize: number;
	export let threshold: number;
	export let width: number;
	export let margin: WH;

	const img = new Image();
	img.src = '/art.svg';

	function draw(ratio: number, gap: number, squareSize: number) {
		const imgRatio = (width / 1150) * window.devicePixelRatio;
		ctx.clearRect(margin.width + size * i, margin.height + size * j, size, size);
		ctx.drawImage(
			img,
			(size * i + gap) / imgRatio,
			(size * j + gap) / imgRatio,
			squareSize / imgRatio,
			squareSize / imgRatio,
			margin.width + size * i + gap,
			margin.height + size * j + gap,
			squareSize,
			squareSize
		);
	}
</script>

<Point {pos} {redraw} {size} {i} {j} {focusSize} {restSize} {draw} {threshold} />
