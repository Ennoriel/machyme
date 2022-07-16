<script lang="ts">
	import { floor2 } from 'chyme';
	import type { DrawType, XY } from './types';

	export let pos: XY;
	export let redraw: number;
	export let size: number;
	export let i: number;
	export let j: number;
	export let focusSize: number;
	export let restSize: number;
	export let threshold: number;

	export let draw: DrawType;

	$: center = {
		x: size * (i + 0.5),
		y: size * (j + 0.5)
	};

	const img = new Image();
	img.src = '/wallpaper.jpg';

	let distanceX, distanceY, distance, ratio, position, squareSize, flooredGap, flooredSquareSize;

	$: if (redraw) {
		// distance from cursor
		distanceX = Math.abs(center.x - pos.x * window.devicePixelRatio);
		distanceY = Math.abs(center.y - pos.y * window.devicePixelRatio);
		distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
		ratio = distance < threshold ? 1 - distance / threshold : 0;

		// position of a square within its grid cell
		position = (size - (restSize - (restSize - focusSize) * ratio)) / 2;
		squareSize = size - 2 * position;
		flooredSquareSize = floor2(squareSize);
		flooredGap = (size - flooredSquareSize) / 2;

		draw(ratio, flooredGap, flooredSquareSize);
	}
</script>
