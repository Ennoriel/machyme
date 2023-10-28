<script>
	import { isProd } from '$lib/utils/store';

	export let data;

	$: $isProd = data.isProd;
</script>

<slot />
