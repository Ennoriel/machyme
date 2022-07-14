<script>
    export let ctx;
    export let pos;
    export let redraw;
    export let size;
    export let i;
    export let j;

    export let focusSize;
    export let restSize;

    export let draw;

    export let treshold;

    $: center = {
        x: size * (i + .5),
        y: size * (j + .5)
    }

    const img = new Image();
    img.src = "/wallpaper.jpg";

    let distanceX, distanceY, distance, ratio, margin, squareSize, flooredMargin, flooredSquareSize;

    $: if (redraw) {
        distanceX = Math.abs(center.x - (pos.x * window.devicePixelRatio))
        distanceY = Math.abs(center.y - (pos.y * window.devicePixelRatio))
        distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
        ratio = distance < treshold ? 1 - distance / treshold : 0;
        margin = (size - (restSize - (restSize - focusSize) * ratio)) / 2;
        squareSize = size - 2 * margin;
        flooredSquareSize = Math.floor(squareSize / 2) * 2;
        flooredMargin = (size - flooredSquareSize) / 2;

        draw(ratio, flooredMargin, flooredSquareSize);
    }
</script>