import { getPosts } from '$lib/server/posts';

export const load: import('@sveltejs/kit').Load = async () => {
	return { props: { posts: await getPosts() } };
};
