import { getPosts } from '$lib/server/static';
import type { LayoutServerLoad } from './$types';

export const load = (async () => {
	return { posts: await getPosts() };
}) satisfies LayoutServerLoad;
