export const prerender = true;

export async function load({ session }) {
	const posts = session.posts;
	return { posts };
}
