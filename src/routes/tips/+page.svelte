<script lang="ts">
	import Keywords from '$lib/components/blog/Keywords.svelte';
	import { formatDate } from 'chyme';
    import type { PageData } from './$types';
    import * as m from './data';

	export let data: PageData;
</script>

<h1>Tips & tricks</h1>

<ul>
    {#each data.tips as tip}
        <li>
            <h2>{tip.title}</h2>
            <p>{formatDate(tip.date)}</p>
            <Keywords keywords={tip.technologies} />
            <svelte:component this={m[tip.component]} />
        </li>
    {/each}
</ul>

<style> 
    ul {
        padding: 0;
    }

    li {
        list-style: none;
    }
</style>