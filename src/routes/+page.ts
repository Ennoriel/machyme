export const load: import('@sveltejs/kit').Load = async ({ session }) => {
	const posts = session.posts;
	return { props: { posts } };
};
