<script>
	import Canvas from '$lib/components/show/Canvas.svelte';
	import DistributiveGrid from '$lib/components/show/DistributiveGrid.svelte';
	import ImgPoint from '$lib/components/show/ImgPoint.svelte';

	const SIZE = 40;
	const REST_SIZE = 5;
	const FOCUS_SIZE = 55;
	const threshold = 500;
</script>

<Canvas let:ctx let:rect let:redraw let:pos let:width>
	<DistributiveGrid {rect} size={SIZE} let:i let:j let:margin>
		<ImgPoint
			{ctx}
			{pos}
			{redraw}
			{width}
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

Inspiration from <a href="https://loke.dev/">Loke Carlsson blog</a>.
