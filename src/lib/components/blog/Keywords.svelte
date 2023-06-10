<script lang="ts">
	export let keywords: Array<string> | undefined = undefined;
</script>

{#if keywords?.length}
	<ul class="keywords">
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
		background-color: var(--primary-color-50);
		color: var(--primary-color-900);
		padding: 0 8px 2px;
		border-radius: 4px;
	}
</style>
