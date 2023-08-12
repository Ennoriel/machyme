<script>
	import Fathom from '$lib/components/seo/Fathom.svelte';
	import { isProd } from '$lib/utils/store';

	export let data;

	$: $isProd = data.isProd;
</script>

<Fathom />

<slot />
