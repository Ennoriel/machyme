import { getPosts } from '$lib/server/posts';
import type { PageServerLoad } from './$types';
export const prerender = true;

export const load: PageServerLoad = async ({ params }) => {
	return {
		props: {
			posts: await getPosts(),
			keyword: params.keyword
		}
	};
};
