<script lang="ts">
	export let label = '';
	export let value: number | undefined;
</script>

<label class="input-like">
	<input type="number" bind:value on:keyup />
	{label}
</label>

<style>
	label {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 8px;
	}
	input {
		height: 20px;
		width: 50px !important;
		border-radius: 3px;
		text-align: center;
		border: 1px solid #ddd;
		padding: 2px 4px !important;
		transition: all 0.2s ease-in-out;
	}
	input:focus {
		outline: none;
	}
	label:hover input {
		background-color: #ddd;
		border: 1px solid white;
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	input {
		-moz-appearance: textfield;
	}
</style>
