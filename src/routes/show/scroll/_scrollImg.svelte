<script lang="ts">
	import { onMount } from 'svelte';
	import { floor } from 'chyme';

	export let config: {
		a: {
			min: number;
			max: number;
			default: number;
			step: number;
		};
		b: {
			min: number;
			max: number;
			default: number;
			step: number;
		};
		effect: {
			name: string;
			unit: string;
		};
	};

	let i: HTMLImageElement;
	let j = 10000;

	let a = config.a.default;
	let b = config.b.default;
	$: res = Math.max(0, floor(a * j + b, 0.1));
	$: filter = `${config.effect.name}(${res}${config.effect.unit})`;

	function onScroll() {
		const { top, bottom } = i.getBoundingClientRect();
		j = floor((top + bottom) / 2);
	}

	onMount(onScroll);
</script>

<svelte:window on:scroll={onScroll} />

<img
	bind:this={i}
	src="/art.svg"
	alt="random ellipsis that unblurs as you scroll by"
	style:filter
/>
<details>
	<summary>{config.effect.name} - more details</summary>
	<pre>middle of the image is at <strong>j={j}px</strong> from to top of your screen
image is blurred with the following formula:
{config.effect.name} = a * j + b
{' '.repeat(config.effect.name.length)} = {a} * {j} + {b}
{' '.repeat(config.effect.name.length)} = {res}{config.effect.unit}</pre>
	<label>
		a
		<input type="range" min={config.a.min} max={config.a.max} step={config.a.step} bind:value={a} />
	</label>
	<label>
		b
		<input type="range" min={config.b.min} max={config.b.max} step={config.b.step} bind:value={b} />
	</label>
</details>

<style>
	img {
		width: 100%;
		transition: filter 0.1s;
	}
	summary {
		color: var(--primary-color);
	}
	pre {
		overflow-x: auto;
		padding-bottom: 8px;
		margin-bottom: 8px;
	}
	strong {
		font-weight: 900;
	}
	label {
		display: block;
	}
</style>
