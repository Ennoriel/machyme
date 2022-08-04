<script lang="ts">
	export let canvas: HTMLCanvasElement | undefined = undefined;
	export let ctx: CanvasRenderingContext2D | null | undefined = undefined;
	export let rect: DOMRect | undefined = undefined;
	export let redraw = 0;
	export let pos = { x: -10000, y: -10000 };
	export let mouseGenerateRedraw = false;
	export let getWidth = () => document?.body?.getBoundingClientRect()?.width;
	export let getHeight = (width: number | undefined) => (width ? Math.max(300, width / 4) : 500);

	$: if (ctx) resize();

	$: ctx = canvas?.getContext('2d');
	$: rect = canvas?.getBoundingClientRect();

	function mousemove(e: MouseEvent) {
		if (ctx && canvas && rect) {
			pos = {
				x: e.clientX - rect.left || 0,
				y: e.clientY - rect.top || 0
			};

			ctx.clearRect(0, 0, canvas.width, canvas.height);

			redraw++;
		}
	}

	export function resize() {
		if (canvas) {
			const width = getWidth();
			const height = getHeight(width);

			canvas.width = width * window.devicePixelRatio;
			canvas.height = height * window.devicePixelRatio;
			canvas.style.width = `${width}px`;
			canvas.style.height = `${height}px`;

			redraw++;
		}
	}
</script>

<svelte:window on:resize={resize} />

<canvas
	bind:this={canvas}
	on:mousemove={mouseGenerateRedraw ? mousemove : undefined}
	height="100"
/>
{#if ctx}
	<slot {ctx} {rect} {redraw} {pos} width={rect?.width || 0} />
{/if}

<style>
	canvas {
		width: 100%;
		display: block;
	}
</style>
