<script lang="ts">
	import SquareBg from '$lib/components/show/SquareBg.svelte';

	let squares = [
		{
			center: {
				x: 0.1,
				y: 0.2
			},
			size: 50,
			angle: 30,
			width: 1,
			color: '#FFED32'
		},
		{
			center: {
				x: 0.2,
				y: 0.2
			},
			size: 50,
			angle: 30,
			width: 1,
			color: '#1C2EFF'
		},
		{
			center: {
				x: 0.3,
				y: 0.2
			},
			size: 50,
			angle: 30,
			width: 1,
			color: '#000EB2'
		},
		{
			center: {
				x: -0.05,
				y: 0.2
			},
			size: 150,
			angle: 60,
			width: 2,
			color: '#B2A642'
		},
		{
			center: {
				x: 0.8,
				y: 0.5
			},
			size: 200,
			angle: 27,
			width: 2,
			color: 'yellow'
		}
	];

	let redraw: number;

	function handleRedraw() {
		setTimeout(() => {
			redraw = redraw + 1;
		}, 0);
	}

	function handleAddSquare() {
		squares = [
			...squares,
			{
				center: {
					x: Math.random(),
					y: Math.random()
				},
				size: 300 * Math.random(),
				angle: 90 * Math.random(),
				width: 1,
				color: '#1C2EFF'
			}
		];
	}
</script>

<SquareBg {squares} bind:redraw>
	<p>Hello les BG</p>
	<p>Hello les BG</p>
	<p>Hello les BG</p>
	<p>Hello les BG</p>
	<p>Hello les BG</p>
	<button on:click={handleAddSquare}>Add new square</button>
	{#each squares as square}
		<div>
			<input
				type="number"
				bind:value={square.center.x}
				min="-.1"
				max="1.1"
				step="0.01"
				on:input={handleRedraw}
			/>
			<input
				type="number"
				bind:value={square.center.y}
				min="-.1"
				max="1.1"
				step="0.01"
				on:input={handleRedraw}
			/>
			<input type="number" bind:value={square.size} on:input={handleRedraw} />
			<input type="number" bind:value={square.angle} on:input={handleRedraw} />
			<input type="radio" bind:group={square.color} value="#1C2EFF" on:input={handleRedraw} />blue 1
			<input type="radio" bind:group={square.color} value="#000EB2" on:input={handleRedraw} />blue 2
			<input type="radio" bind:group={square.color} value="#FFED32" on:input={handleRedraw} />yellow
			1
			<input type="radio" bind:group={square.color} value="#B2A642" on:input={handleRedraw} />yellow
			2
		</div>
	{/each}
</SquareBg>

<style>
	input[type='number'] {
		width: 80px;
	}
</style>
