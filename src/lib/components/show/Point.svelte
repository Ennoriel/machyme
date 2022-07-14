<script>
    import { floor2 } from 'chyme';
    export let ctx;
    export let pos;
    export let redraw;
    export let size;
    export let i;
    export let j;
    export let margin;

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

    let distanceX, distanceY, distance, ratio, position, squareSize, flooredGap, flooredSquareSize;

    $: if (redraw) {
        // distance from cursor
        distanceX = Math.abs(center.x - (pos.x * window.devicePixelRatio))
        distanceY = Math.abs(center.y - (pos.y * window.devicePixelRatio))
        distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
        ratio = distance < treshold ? 1 - distance / treshold : 0;

        // position of a square within its grid cell
        position = (size - (restSize - (restSize - focusSize) * ratio)) / 2;
        squareSize = size - 2 * position;
        flooredSquareSize = floor2(squareSize);
        flooredGap = (size - flooredSquareSize) / 2;

        draw(ratio, flooredGap, flooredSquareSize, margin);
    }
</script>
