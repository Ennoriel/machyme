<script lang="ts">
    import Grid from './Grid.svelte';

    export let size: number | undefined;
    export let rect: DOMRect | undefined;

    let width, height;

    function resize() {
        if (rect && size) {
            width = Math.floor(window.devicePixelRatio * rect.width / size);
            height = Math.floor(window.devicePixelRatio * rect.height / size);
        }
    }

    $: if(rect && size) resize();
</script>

<svelte:window on:resize={resize} />

<Grid {width} {height} let:i let:j>
    <slot {i} {j}/>
</Grid>
