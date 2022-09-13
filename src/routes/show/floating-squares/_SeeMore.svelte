<script lang="ts">
	import ChevronsDown from '$lib/components/icons/ChevronsDown.svelte';

	export let href: string;
</script>

<a {href}>
	<span><ChevronsDown /></span> Let's go!
</a>

<style>
	a {
		border: none;
		background: transparent;

		color: var(--text-color);
		display: inline-flex;
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

	a::before {
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

	a:hover::before {
		width: 100%;
	}
</style>
