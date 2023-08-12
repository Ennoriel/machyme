<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { PUBLIC_FATHOM_ID, PUBLIC_FATHOM_URL } from '$env/static/public';
	import { isProd } from '$lib/utils/store';
	import * as Fathom from 'fathom-client';
	import { onMount } from 'svelte';

	onMount(async () => {
		if ($isProd) {
			Fathom.load(PUBLIC_FATHOM_ID, {
				url: PUBLIC_FATHOM_URL
			});
			console.log('init');
		}
	});

	$: if ($isProd && browser && /* tracking page change */ $page.url.pathname) {
		console.log('page chang');

		Fathom.trackPageview();
	}
</script>

<p>Fathom</p>
<p>{$isProd}</p>
