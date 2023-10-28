<script lang="ts">
	let url: string = 'https://www.machyme.fr';
	let headers = JSON.stringify(
		{
			accept:
				'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8'
		},
		null,
		2
	);
	let result: string | undefined = undefined;
	let error:
		| {
				message: string;
				stack: string;
		  }
		| undefined = undefined;

	async function doFetch() {
		result = await fetch(url, {
			method: 'GET',
			headers: JSON.parse(headers)
		})
			.then((res) => {
				console.log('!', res);
				return res.text();
			})
			.catch(async (err) => {
				error = {
					message: err.message,
					stack: err.stack
				};
				return undefined;
			});
	}
</script>

<h1>Fetcher</h1>

<label>
	url
	<input bind:value={url} />
</label>

<label>
	headers
	<textarea bind:value={headers} />
</label>
<button on:click={doFetch}> fetch </button>

{#if result}
	<h2>Result</h2>
	<p>
		{result}
	</p>
{/if}

{#if error}
	<h2 style:color="red" style:text-wrap="wrap">
		{error.message}
	</h2>
	<p style:color="red" style:text-wrap="wrap">
		{error.stack}
	</p>
{/if}
