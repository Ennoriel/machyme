<script lang="ts">
	import { browser } from '$app/environment';
	import Canvas from './Canvas.svelte';
	import Square from './Square.svelte';
	import type { SquareConfig } from '../../../routes/show/floating-squares/_squares';
	import { SCREEN_SIZE } from '$lib/types/utils.type';

	export let squares: Array<SquareConfig>;
	let ctx: CanvasRenderingContext2D | null | undefined = undefined;
	export let redraw: number;

	$: if (redraw) {
		ctx?.clearRect(0, 0, 1000000, 1000000);
	}

	let getHeight = () => ((browser && window.innerHeight) || 1000) - 60 + 16;
	let innerWidth: number;
</script>

<svelte:window bind:innerWidth />

<div class="wrapper">
	<Canvas bind:ctx bind:redraw let:ctx let:redraw let:rect {getHeight}>
		{#if ctx && rect}
			{#each squares.filter((s) => innerWidth > SCREEN_SIZE[s.screen]) as square}
				<Square {ctx} {redraw} {rect} config={square} />
			{/each}
		{/if}
	</Canvas>

	<div class="max-width" style:height={`${getHeight()}px`}>
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
		padding: 16px 64px;
	}

	.wrapper :global(canvas) {
		position: absolute;
		pointer-events: none;
	}

	@media (min-width: 640px) {
		.max-width {
			padding: 16px 80px;
		}
	}
</style>
