<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, draw } from 'svelte/transition';
	import { toto_paths } from './path';
	import { colorRange, randomHexColor } from 'chyme';
	import ColorPicker, { CircleVariant } from 'svelte-awesome-color-picker';
	import InputColorPicker from '$lib/components/input/color-picker/InputColorPicker.svelte';
	import InputNumber from '$lib/components/input/InputNumber.svelte';

	export let visible: boolean;
	let loaded = false;

	let x = 0;
	let delay = 400;
	let duration = 1000;
	let intervalId: number;

	let c1 = randomHexColor();
	let c2 = randomHexColor();
	$: r = colorRange(c1, c2, toto_paths.length) || [];

	onMount(() => {
		intervalId = window.setInterval(() => (x = x + 1), delay);
		visible = true;
		loaded = true;
	});

	$: if (visible) {
		x = 0;
		if (!delay) {
			setTimeout(() => (x = 10000), 0);
		}
	}

	function delayChange() {
		console.log('delayChange', delay);
		clearInterval(intervalId);
		if (delay) {
			intervalId = window.setInterval(() => (x = x + 1), delay);
		} else {
			x = 10000;
		}
	}

	function restartAnimation() {
		visible = false;
		setTimeout(() => {
			visible = true;
		}, 200);
	}
</script>

<div class="commands">
	<InputNumber label="Delay" bind:value={delay} on:keyup={delayChange} />
	<InputNumber label="Duration" bind:value={duration} on:keyup={delayChange} />

	{#if loaded}
		<ColorPicker
			bind:hex={c1}
			components={{ ...CircleVariant, input: InputColorPicker }}
			label="Start color"
		/>
		<ColorPicker
			bind:hex={c2}
			components={{ ...CircleVariant, input: InputColorPicker }}
			label="End color"
		/>
	{:else}
		<div class="input-like" style:width="140px" />
		<div class="input-like" style:width="140px" />
	{/if}

	<button on:click={restartAnimation}> Restart animation </button>
</div>

{#if visible}
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320">
		<g
			out:fade|local={{ duration: delay }}
			fill="none"
			stroke-width="7"
			stroke-linejoin="round"
			stroke-linecap="round"
		>
			{#each toto_paths as toto_path, index}
				{#each toto_path as d}
					{#if x > index}
						<path in:draw={{ duration }} stroke={r[index]} {d} />
					{/if}
				{/each}
			{/each}
		</g>
	</svg>
{/if}

<style>
	.commands {
		display: flex;
		flex-wrap: wrap;
		gap: 16px;
		justify-content: center;
		margin: 16px;
	}
	.commands :global(.wrapper) {
		top: 192px;
	}
	@media (min-width: 720px) {
		.commands :global(.wrapper) {
			left: 72px;
		}
	}
	button {
		padding: 10px 20px 10px 10px;
		background-color: white;
		border: none;
		border-radius: 3px;
		box-shadow: 0 0 5px #ccc;
		cursor: pointer;
		transition: background-color 0.2s ease-in-out;
	}
	button:hover {
		background-color: #ddd;
	}
	svg {
		display: block;
		max-width: 500px;
		max-height: calc(100vh - 150px);
		margin: -50px;
	}
	@media (min-width: 500px) {
		svg {
			margin: -50px auto;
		}
	}
</style>
