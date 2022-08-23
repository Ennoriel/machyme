<script lang="ts">
    import ChevronsDown from '$lib/components/icons/ChevronsDown.svelte';
</script>

<button>
    <span><ChevronsDown/></span> Let's go!
</button>

<style>
    button {
        border: none;
        background: transparent;

        display: flex;
        align-items: center;
        gap: 8px;
        border-radius: 20px;
        transition: all .2s;
        padding-right: 12px;
    }

    span {
        aspect-ratio: 1;
        border-radius: 50%;
        background-color: var(--color-yellow-1);
        color: var(--color-blue-1);
        padding: 8px;
        transition: all .2s;

        display: flex;
        align-items: center;
    }

    button:hover {
        background-color: var(--color-yellow-1);
    }

    button:hover span {
        background-color: var(--color-blue-1);
        color: var(--color-yellow-1);
    }
</style>