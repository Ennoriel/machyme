<script lang="ts">
	import Canvas from './Canvas.svelte';
	import Square from './Square.svelte';

	export let squares: Array<{
		center: {
			x: number;
			y: number;
		};
		size: number;
		angle: number;
		width: number;
		color: string;
	}>;
	let ctx: CanvasRenderingContext2D | null | undefined = undefined;
	export let redraw: number;

	$: if (redraw) {
		ctx?.clearRect(0, 0, 1000000, 1000000);
	}

	let wrapper: HTMLDivElement;
	let getHeight = () => wrapper?.getBoundingClientRect().height;
</script>

<div bind:this={wrapper} class="wrapper">
	<Canvas bind:ctx bind:redraw let:ctx let:redraw let:rect {getHeight}>
		{#if ctx && rect}
			{#each squares as square}
				<Square {ctx} {redraw} {rect} config={square} />
			{/each}
		{/if}
	</Canvas>

	<div class="max-width">
		<slot />
	</div>
</div>

<style>
	.wrapper {
		margin: -16px;
	}

	.max-width {
		max-width: 800px;
		margin: auto;
		padding: 16px;
	}

	.wrapper :global(canvas) {
		position: absolute;
		pointer-events: none;
	}
</style>
