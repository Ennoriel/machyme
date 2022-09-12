<script lang="ts">
	import { onMount } from 'svelte';
	import SquareBg from '$lib/components/show/SquareBg.svelte';
	import Customize from './_customize.svelte';
	import SeeMore from './_SeeMore.svelte';
	import { squaresScreen1 } from './_squares';
	import type { SquareConfig } from './_squares';

	let squares: Array<SquareConfig>;

	onMount(() => {
		squares = squaresScreen1;
	});

	let redraw: number;
</script>

<SquareBg {squares} bind:redraw>
	<div>
		<h1>Maxime Dupont · <span class="subtitle">personal website</span></h1>
		<p>
			Where I write, share and present some of my works about web accessibility, eco-design and
			minimalism.
		</p>
	</div>
	<SeeMore />
</SquareBg>
<SquareBg {squares} bind:redraw>
	<div>
		<h1>Maxime Dupont · <span class="subtitle">personal website</span></h1>
		<p>
			Where I write, share and present some of my works about web accessibility, eco-design and
			minimalism.
		</p>
	</div>
	<SeeMore />
</SquareBg>

<style>
	div {
		margin-top: 200px;
	}
	.subtitle {
		color: var(--color-blue-1);
		display: block;
	}
	@media (min-width: 640px) {
		.subtitle {
			display: inline;
		}
	}
</style>
