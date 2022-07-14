<script>
    import Canvas from '$lib/components/show/Canvas.svelte';
    import DistributiveGrid from '$lib/components/show/DistributiveGrid.svelte';
    import ImgPoint from '$lib/components/show/ImgPoint.svelte';

    const SIZE = 40;
    const REST_SIZE = 5;
    const FOCUS_SIZE = 55;
    const TRESHOLD = 500;
</script>

<Canvas let:ctx let:rect let:redraw let:pos let:width>
    <DistributiveGrid {rect} size={SIZE} let:i let:j>
        <ImgPoint {ctx} {pos} {redraw} {width} {i} {j} size={SIZE} restSize={REST_SIZE} focusSize={FOCUS_SIZE} treshold={TRESHOLD}/>
    </DistributiveGrid>
</Canvas>

Inspiration from <a href="https://loke.dev/">Loke Carlsson blog</a>.
