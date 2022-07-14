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
    export let width;

    const img = new Image();
    img.src = "/wallpaper.jpg";

    function draw(ratio, margin, squareSize) {
        const imgRatio = width / 1050 * window.devicePixelRatio;
        ctx.clearRect(size * i, size * j, size, size);
        ctx.drawImage(
            img,
            (size * i + margin) / imgRatio,
            (size * j + margin) / imgRatio,
            squareSize / imgRatio,
            squareSize / imgRatio,
            size * i + margin,
            size * j + margin,
            squareSize,
            squareSize
        );
    }
</script>

<Point {ctx} {pos} {redraw} {size} {i} {j} {focusSize} {restSize} {draw} {treshold}/>