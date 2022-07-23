<script>
	import Canvas from '$lib/components/show/Canvas.svelte';
	import DistributiveGrid from '$lib/components/show/DistributiveGrid.svelte';
	import ColorPoint from '$lib/components/show/ColorPoint.svelte';

	let SIZE = 80;
	let REST_SIZE = 10;
	let FOCUS_SIZE = 70;
	let threshold = 300;
</script>

<Canvas let:ctx let:rect let:redraw let:pos>
	<DistributiveGrid {rect} size={SIZE} let:i let:j let:margin>
		<ColorPoint
			{ctx}
			{pos}
			{redraw}
			{i}
			{j}
			{margin}
			size={SIZE}
			restSize={REST_SIZE}
			focusSize={FOCUS_SIZE}
			{threshold}
		/>
	</DistributiveGrid>
</Canvas>

<p>
	Inspiration from <a href="https://loke.dev/">Loke Carlsson blog</a>.
</p>
<div>
	<label>
		Size of a grid cell
		<input type="range" min="30" max="100" step="5" bind:value={SIZE} />
	</label>
	<label>
		Size of a square
		<input type="range" min="0" max="100" step="5" bind:value={REST_SIZE} />
	</label>
	<label>
		Size of a focused square
		<input type="range" min="0" max="100" step="5" bind:value={FOCUS_SIZE} />
	</label>
	<label>
		Effect threshold
		<input type="range" min="50" max="750" step="50" bind:value={threshold} />
	</label>
</div>

<style>
	div {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	label {
		display: flex;
		align-items: center;
		gap: 8px;
		box-shadow: 0 0 4px #ddd;
		padding: 8px 16px;
		margin: 8px;
		background-color: white;
	}
</style>
