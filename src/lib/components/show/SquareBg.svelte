<script lang="ts">
	import Canvas from './Canvas.svelte';
	import Square from './Square.svelte';

	let wrapper: HTMLDivElement;
	let getHeight = () => wrapper?.getBoundingClientRect().height;
</script>

<div bind:this={wrapper} class="wrapper">
	<Canvas let:ctx let:redraw let:rect {getHeight}>
		{#if ctx && rect}
			<Square
				{ctx}
				{redraw}
				{rect}
				config={{
					center: {
						x: 0.1,
						y: 0.2
					},
					size: 50,
					angle: 30,
					width: 1,
					color: 'blue'
				}}
			/>
			<Square
				{ctx}
				{redraw}
				{rect}
				config={{
					center: {
						x: 0.2,
						y: 0.2
					},
					size: 50,
					angle: 30,
					width: 1,
					color: 'blue'
				}}
			/>
			<Square
				{ctx}
				{redraw}
				{rect}
				config={{
					center: {
						x: 0.3,
						y: 0.2
					},
					size: 50,
					angle: 30,
					width: 1,
					color: 'blue'
				}}
			/>
			<Square
				{ctx}
				{redraw}
				{rect}
				config={{
					center: {
						x: -0.05,
						y: 0.2
					},
					size: 150,
					angle: 60,
					width: 2,
					color: 'yellow'
				}}
			/>
			<Square
				{ctx}
				{redraw}
				{rect}
				config={{
					center: {
						x: 0.8,
						y: 0.5
					},
					size: 200,
					angle: 27,
					width: 2,
					color: 'red'
				}}
			/>
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
