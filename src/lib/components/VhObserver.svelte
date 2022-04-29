<script>
    import { onMount } from "svelte";

    onMount(resize)

    export function resize() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
</script>

<svelte:window on:resize/>