<script lang="ts">
    let canvas: HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D;
    let rect: DOMRect;
    let redraw = 0;
    let pos = { x: -10000, y: -10000 };

    $: if (ctx) resize();

    $: ctx = canvas?.getContext("2d");
    $: rect = canvas?.getBoundingClientRect();

    function mousemove(e) {
        pos = {
            x: (e.clientX - rect.left),
            y: (e.clientY - rect.top)
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        redraw++;
    }

    function resize() {
        rect = canvas?.getBoundingClientRect();

        canvas.width = rect.width * window.devicePixelRatio;
        canvas.height = rect.height * window.devicePixelRatio;
        canvas.style.width = `${rect.width}px`;
        canvas.style.height = `${rect.height}px`;

        redraw++;
    }
</script>

<svelte:window on:resize={resize} />

<canvas
    bind:this={canvas}
    on:mousemove={mousemove}
    height="100"
/>
{#if ctx}
    <slot {ctx} {rect} {redraw} {pos} width={rect.width}/>
{/if}

<style>
    canvas {
        width: 100%;
        display: block;
    }
</style>