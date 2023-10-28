<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, draw } from 'svelte/transition';
	import { toto_paths } from './path';
	import { colorRange } from 'chyme';
	import ColorPicker from 'svelte-awesome-color-picker';

	let x = 0;
	let intervalId: number;

	export let data;

	let c1 = data.c1;
	let c2 = data.c2;
	$: r = colorRange(c1, c2, toto_paths.length) || [];

	onMount(() => {
		intervalId = window.setInterval(() => (x = x + 1), 400);

		return () => clearInterval(intervalId);
	});

	function restartAnimation() {
		x = -1;
	}
</script>

<div class="commands">
	<ColorPicker bind:hex={c1} label="Start color" />
	<ColorPicker bind:hex={c2} label="End color" />

	<button on:click={restartAnimation}> Restart animation </button>
</div>

{#if x >= 0}
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320">
		<g
			out:fade|local={{ duration: 400 }}
			fill="none"
			stroke-width="7"
			stroke-linejoin="round"
			stroke-linecap="round"
		>
			{#each toto_paths as toto_path, index}
				{#each toto_path as d}
					{#if x > index}
						<path in:draw={{ duration: 1000 }} stroke={r[index]} {d} />
					{/if}
				{/each}
			{/each}
		</g>
	</svg>
	<p>Image from <a href="https://www.instagram.com/toto_le_voyou/">toto le voyou</a>.</p>
{/if}

<style>
	.commands {
		display: flex;
		flex-wrap: wrap;
		gap: 16px;
		justify-content: center;
		margin-bottom: 16px;
	}

	.commands :global(input[type='color']) {
		width: 1px;
		height: 1px;
	}

	.commands :global(.color-picker label) {
		flex-direction: row;
		margin: 0;
	}

	.commands :global(.color-picker) {
		position: static;
		--input-size: 26px;
	}

	.commands :global(.wrapper) {
		top: 220px;
	}

	@media (min-width: 768px) {
		.commands :global(.wrapper) {
			left: 72px;
		}
	}

	button,
	.commands :global(.color-picker label) {
		box-sizing: content-box;
		padding: 10px 20px 10px 10px;
		background-color: white;
		border: none;
		border-radius: 3px;
		box-shadow: 0 0 5px #ccc;
		transition: background-color 0.2s ease-in-out;
	}

	button:hover,
	.commands :global(.color-picker label:hover) {
		background-color: #ddd;
	}

	svg {
		display: block;
		max-width: 500px;
		max-height: calc(100vh - 160px);
		margin: -50px;
	}

	@media (min-width: 500px) {
		svg {
			margin: -50px auto;
		}
	}

	p {
		text-align: center;
	}
</style>
