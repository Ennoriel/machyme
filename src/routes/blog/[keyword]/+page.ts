export const prerender = true;

export const load: import('@sveltejs/kit').Load = async ({ session, params }) => {
	return {
		props: {
			posts: session.posts,
			keyword: params.keyword
		}
	};
};
