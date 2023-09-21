<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { PUBLIC_FATHOM_ID, PUBLIC_FATHOM_URL } from '$env/static/public';
	import { isProd } from '$lib/utils/store';
	import { load, trackPageview } from 'fathom-client';

	let init = false;

	$: if ($isProd && browser) {
		if (!init) {
			load(PUBLIC_FATHOM_ID, {
				url: PUBLIC_FATHOM_URL
			});
			init = true;
		} else if (/* tracking page change */ $page.url.pathname) {
			trackPageview();
		}
	}
</script>
