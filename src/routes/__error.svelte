<script context="module" lang="ts">
	import { dev } from '$app/env';

	export const load: import('@sveltejs/kit').Load = ({ error, status }) => {
		if (dev) {
			return {
				props: {
					title: `${status}: ${error?.message}`
				}
			};
		} else {
			return {
				status: 301,
				redirect: '/'
			};
		}
	};
</script>

<script lang="ts">
	export let title: string;
</script>

<h1>{title}</h1>
