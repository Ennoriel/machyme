<script lang="ts">
    import type { Color } from 'chyme';

    export let button: HTMLButtonElement;
    export let color: Color;
    export let label: string;
    export let isOpen: boolean;

    function keyup(e: KeyboardEvent) {
        if (document.activeElement?.isSameNode(button) && !e.shiftKey && e.key === 'Tab') isOpen = true;
    }
</script>

<svelte:window on:keyup={keyup} />

<button bind:this={button} class="input-like">
    <div style="background-color: {color.hex};" />
    {label}
</button>
<input type="hidden" value={color.hex} />

<style>
    div {
        width: 40px;
        height: 20px;
        border-radius: 3px;
        pointer-events: none;
    }
    button {
        position: relative;
        display: flex;
        align-items: center;
        gap: 10px;
    }
</style>
