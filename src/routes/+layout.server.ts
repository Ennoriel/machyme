import { getPosts } from '$lib/server/static';
import type { LayoutServerLoad } from './$types';
import { env } from '$env/dynamic/private';

export const load = (async () => {
	return {
		isProd: env.NODE_ENV === 'production',
		posts: await getPosts()
	};
}) satisfies LayoutServerLoad;
