<script lang="ts">
	import ChevronsDown from '$lib/components/icons/ChevronsDown.svelte';
</script>

<button>
	<span><ChevronsDown /></span> Let's go!
</button>

<style>
	button {
		border: none;
		background: transparent;

		display: flex;
		align-items: center;
		gap: 8px;
		border-radius: 20px;
		transition: all 0.2s;
		padding-right: 20px;

		position: relative;
	}

	span {
		aspect-ratio: 1;
		border-radius: 50%;
		background-color: var(--color-yellow-1);
		color: var(--color-blue-1);
		padding: 8px;

		display: flex;
		align-items: center;
	}

	button::before {
		content: '';
		position: absolute;
		border-radius: 20px;
		z-index: -1;
		top: 0;
		left: 0;
		bottom: 0;
		width: 40px;
		background-color: var(--color-yellow-1);
		transition: all 0.4s;
	}

	button:hover::before {
		width: 100%;
	}
</style>
