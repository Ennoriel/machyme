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

    function draw(ratio, margin, squareSize) {
        ctx.clearRect(size * i, size * j, size, size);
        ctx.fillStyle = ratio > 0 ? "red" : "#777";
        ctx.fillRect(size * i + margin, size * j + margin, squareSize, squareSize);
    }
</script>

<Point {ctx} {pos} {redraw} {size} {i} {j} {focusSize} {restSize} {draw} {treshold}/>