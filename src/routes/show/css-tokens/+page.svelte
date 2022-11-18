<script>
	const SIZES = {
		xs: 16 / 4,
		sm: 16 / 2,
		md: 16,
		lg: 16 * 1.5,
		xl: 16 * 2,
		'2xl': 16 * 3,
		'3xl': 16 * 4,
		'4xl': 16 * 6,
		'5xl': 16 * 8,
		'6xl': 16 * 12,
		'7xl': 16 * 18,
		'8xl': 16 * 24,
		'9xl': 16 * 36,
		'10xl': 16 * 48,
		'11xl': 16 * 64,
		'12xl': 16 * 96
	};
</script>

{#each Object.entries(SIZES) as [size, px]}
	<div style:width="var(--{size})">
		<p style:font-size="var(--font-sm)">{size}-{px}px</p>
	</div>
{/each}

{#each ['sm', 'md', 'lg', 'xl', '2xl'] as size}
	<p style:font-size="var(--font-{size})">The quick brown fox jumps over the lazy dog.</p>
{/each}

<style>
	div {
		height: var(--md);
		background-color: antiquewhite;
		margin: var(--xs);
	}
	p {
		margin: 0;
	}
</style>
