<script lang="ts">
    export let width: number | undefined;
    export let height: number | undefined;
</script>

{#if width && height}
    {#each Array(width) as _, i}
        {#each Array(height) as _, j}
            <slot {i} {j}/>
        {/each}
    {/each}
{/if}