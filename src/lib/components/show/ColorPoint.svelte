<script>
    import Point from './Point.svelte';
    export let ctx;
    export let pos;
    export let redraw;
    export let size;
    export let i;
    export let j;
    export let focusSize;
    export let restSize;
    export let treshold;
    export let margin;

    function draw(ratio, gap, squareSize, margin) {
        ctx.clearRect(margin.width + size * i, margin.height + size * j, size, size);
        ctx.fillStyle = ratio > 0 ? "red" : "#777";
        ctx.fillRect(margin.width + size * i + gap, margin.height + size * j + gap, squareSize, squareSize);
    }
</script>

<Point {ctx} {pos} {redraw} {size} {i} {j} {margin} {focusSize} {restSize} {draw} {treshold}/>