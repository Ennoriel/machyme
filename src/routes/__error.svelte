<script context="module">
	import { dev } from '$app/env';

	/** @type {import('@sveltejs/kit').Load} */
	export function load({ error, status }) {
		if (dev) {
			return {
				props: {
					title: `${status}: ${error.message}`
				}
			};
		} else {
			return {
				status: 301,
				redirect: '/'
			};
		}
	}
</script>

<script>
	export let title;
</script>

<h1>{title}</h1>
