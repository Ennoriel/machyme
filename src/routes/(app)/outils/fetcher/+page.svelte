<script lang="ts">
	export let form;

	let headers = JSON.stringify(
		{
			accept:
				'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8'
		},
		null,
		2
	);
</script>

<h1>Fetcher</h1>

<form method="POST">
	<label>
		url
		<input name="url" value="https://data.giss.nasa.gov/gistemp/tabledata_v4/GLB.Ts+dSST.txt" />
	</label>

	<label>
		headers
		<textarea name="headers" bind:value={headers} />
	</label>
	<button> fetch </button>
</form>

{#if form?.content}
	<h2>Result</h2>
	<p>
		{form.content}
	</p>
{/if}

{#if form?.error}
	<h2 style:color="red" style:text-wrap="wrap">
		{form.error.message}
	</h2>
	<p style:color="red" style:text-wrap="wrap">
		{form.error.stack}
	</p>
{/if}
