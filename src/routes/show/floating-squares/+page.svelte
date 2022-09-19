<script lang="ts">
	import { onMount } from 'svelte';
	import SquareBg from '$lib/components/show/SquareBg.svelte';
	// import Customize from './_customize.svelte';
	import SeeMore from './_SeeMore.svelte';
	import { squaresScreen1, squaresScreen2 } from './_squares';
	import type { SquareConfig } from './_squares';
	import { LOREM } from '$lib/utils/lorem';

	let squares: Array<SquareConfig>;
	let sq2: Array<SquareConfig>;

	onMount(() => {
		squares = squaresScreen1;
		sq2 = squaresScreen2;
	});

	let redraw: number;
</script>

<SquareBg {squares} bind:redraw>
	<div>
		<h1>Maxime Dupont · <span class="subtitle">personal website</span></h1>
		<p>Demo landing page site</p>
		<p>
			Where I write, share and present some of my works about web accessibility, eco-design and
			minimalism. I also like to keep an eye on the topics: sovereignty, craft·wo·man·ship.
		</p>
	</div>
	<SeeMore href="#2" />
</SquareBg>
<SquareBg squares={sq2} bind:redraw>
	<div>
		<h2 id="2" style:padding-top="200px" style:margin-top="-100px">
			Maxime Dupont · <span class="subtitle">personal website</span>
		</h2>
		<p>{LOREM.IPSUM}</p>
		<p>{LOREM.MAECENAS}</p>
		<p>{LOREM.NUNC}</p>
	</div>
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
