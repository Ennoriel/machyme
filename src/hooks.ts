import type { Handle, GetSession } from '@sveltejs/kit';
import type { BlogPost } from '$lib/types/blogPost.type';

export const getSession: GetSession = async ({ locals }) => {
	return {
		posts: locals.posts
	};
};

export const handle: Handle = async ({ event, resolve }) => {
	const posts = await Promise.all(
		Object.entries(import.meta.glob('/src/routes/blog/*.md')).map(async ([path, page]) => {
			const { metadata } = (await page()) as { metadata: BlogPost };
			const filename = path.split('/').pop();
			return {
				...metadata,
				filename
			};
		})
	);
	posts.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

	event.locals.posts = posts;
	return resolve(event);
};
