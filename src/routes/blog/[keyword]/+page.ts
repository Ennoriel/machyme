import { getPosts } from '$lib/server/posts';
export const prerender = true;

export const load: import('@sveltejs/kit').Load = async ({ params }) => {
	return {
		props: {
			posts: await getPosts(),
			keyword: params.keyword
		}
	};
};
