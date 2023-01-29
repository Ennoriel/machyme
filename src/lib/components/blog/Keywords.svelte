<script lang="ts">
    export let keywords: Array<string> | undefined = undefined;
</script>

{#if keywords?.length}
    <ul>
        {#each keywords as keyword}
            <li>
                {keyword}
            </li>
        {/each}
    </ul>
{/if}

<style>
    ul {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
		margin: 12px 0;
        padding: 0;
    }

    li {
        list-style: none;
        background-color: #e8eff9;
        color: #516a81;
        padding: 0 8px 2px;
        border-radius: 4px;
    }
</style>